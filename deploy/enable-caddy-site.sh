#!/bin/bash
# Adds Enemial Technologies' site block to the SHARED Caddy and reloads it.
#
# Run this ONLY once enemialtechnologies.com resolves to this server. Caddy obtains its
# certificate over HTTP-01, which means Let's Encrypt connects back to whatever
# the DNS says. Point it here first or Caddy retries, fails, and eats the
# per-hostname failure limit (5/hour) for everyone on this box.
#
# The script refuses to run if DNS is not right, rather than trusting you.
set -euo pipefail

SERVER_IP="${SERVER_IP:-159.69.220.83}"
CADDYFILE="${CADDYFILE:-/opt/attestway/Caddyfile}"
BLOCK="${BLOCK:-$HOME/enemial/Caddyfile.enemial}"

echo "== checking DNS =="
# Query a PUBLIC resolver, not the box's own. systemd-resolved caches the old
# answer for the full previous TTL (an hour, in our case), so the local view
# lags reality by up to an hour after a DNS change - and this check would sit
# there refusing to proceed long after the change was actually live.
#
# And check EVERY A record, not just one. A leftover GoDaddy parking record
# alongside the real one means the name round-robins, so Let's Encrypt's
# HTTP-01 probe lands on a parking server some fraction of the time and cert
# issuance fails intermittently. `dig | tail -1` would have happily passed
# that: it reads whichever address happened to come last.
RESOLVER="${RESOLVER:-8.8.8.8}"
fail=0
for host in enemialtechnologies.com www.enemialtechnologies.com; do
    got="$(dig +short "$host" A "@$RESOLVER" | sort | tr '
' ' ' | sed 's/ $//')"
    if [ "$got" = "$SERVER_IP" ]; then
        echo "  OK   $host -> $got"
    elif [ -z "$got" ]; then
        echo "  WAIT $host -> (no A record yet)"
        fail=1
    else
        echo "  WAIT $host -> $got (expected exactly $SERVER_IP)"
        [ "$(echo "$got" | wc -w)" -gt 1 ] &&             echo "       ^ more than one address: delete the extra A record(s)."
        fail=1
    fi
done
if [ "$fail" = "1" ]; then
    echo
    echo "DNS is not pointing here yet. Change the A records at GoDaddy:"
    echo "    enemialtechnologies.com  (@)    A    $SERVER_IP"
    echo "    www.enemialtechnologies.com     A    $SERVER_IP   (replace any www CNAME)"
    echo "Then re-run this script. Nothing has been changed."
    exit 1
fi

if grep -q 'enemialtechnologies.com' "$CADDYFILE"; then
    echo "== site block already present in $CADDYFILE — nothing to add =="
else
    echo "== backing up and appending the site block =="
    cp -p "$CADDYFILE" "$CADDYFILE.bak-$(date -u +%Y%m%d-%H%M%S)"
    printf '\n' >> "$CADDYFILE"
    cat "$BLOCK" >> "$CADDYFILE"
fi

echo "== validating Caddy config before reloading =="
# Validate first: a bad Caddyfile on `reload` leaves the OLD config running,
# but on a restart it would take attestway.com down with it.
docker exec attestway-caddy-1 caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile

echo "== reloading Caddy (zero downtime for attestway.com) =="
docker exec attestway-caddy-1 caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile

echo "== waiting for the certificate =="
for i in $(seq 1 30); do
    # --resolve pins the connection to this server, bypassing the box's own
    # stale DNS cache. We are verifying that OUR Caddy serves the name, not
    # what a lagging local resolver thinks the name points at.
    code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 10         --resolve "enemialtechnologies.com:443:$SERVER_IP"         https://enemialtechnologies.com/ || true)"
    if [ "$code" = "200" ]; then
        echo "  enemialtechnologies.com is live over HTTPS"
        exit 0
    fi
    sleep 10
done
echo "  Certificate did not arrive within 5 minutes. Check:"
echo "    docker logs attestway-caddy-1 --tail 50"
exit 1
