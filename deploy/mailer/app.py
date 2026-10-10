"""Contact-form mailer for enemialtechnologies.com.

The site is a static export with no backend, so the contact form posts here
instead: Caddy routes /api/* on the site's domain to this container. It sends
each enquiry to every address in CONTACT_TO, through the company mailbox's
SMTP, with Reply-To set to the visitor so a reply reaches them.

Standard library only - no dependencies to keep patched.

Spam: FunInvite's contact form was relaying phishing to strangers within weeks
of launch, so this checks before sending (it never emails the visitor, which
removes the relay outright):

* honeypot field `botcheck` must be empty;
* `token` from GET /api/contact/token is HMAC-signed with the page-load time,
  and a post sooner than MIN_FILL_SECONDS after it is a bot;
* a link in the name, or Cyrillic text, is spam;
* at most RATE_LIMIT submissions per IP per hour.

Bots get the same success response as people, so they cannot tell.
"""

import hashlib
import hmac
import json
import logging
import os
import re
import smtplib
import ssl
import time
from collections import defaultdict, deque
from email.message import EmailMessage
from email.utils import formataddr
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s')
log = logging.getLogger('mailer')

SMTP_HOST = os.environ.get('SMTP_HOST', 'smtpout.secureserver.net')
# 587 + STARTTLS: Hetzner blocks outbound 465 (and 25).
SMTP_PORT = int(os.environ.get('SMTP_PORT', '587'))
SMTP_USER = os.environ['SMTP_USER']
SMTP_PASSWORD = os.environ['SMTP_PASSWORD']
CONTACT_TO = [a.strip() for a in os.environ['CONTACT_TO'].split(',') if a.strip()]
SECRET = os.environ['MAILER_SECRET'].encode()

MIN_FILL_SECONDS = 3
TOKEN_MAX_AGE = 24 * 60 * 60
RATE_LIMIT = 5
MAX_BODY = 16 * 1024

_EMAIL = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')
_URL = re.compile(r'https?://|www\.|\b[\w-]+\.(?:top|xyz|ru|click|online|site|shop|info)\b', re.I)
_CYRILLIC = re.compile(r'[Ѐ-ӿ]')

_recent = defaultdict(deque)  # ip -> submission times in the last hour


def make_token():
    ts = str(int(time.time()))
    return f'{ts}.{hmac.new(SECRET, ts.encode(), hashlib.sha256).hexdigest()}'


def token_age(token):
    """Seconds since the token was issued, or None if it is not ours."""
    ts, _, sig = str(token).partition('.')
    expected = hmac.new(SECRET, ts.encode(), hashlib.sha256).hexdigest()
    if not ts.isdigit() or not hmac.compare_digest(sig, expected):
        return None
    return time.time() - int(ts)


def spam_reason(data):
    if data.get('botcheck'):
        return 'honeypot'
    age = token_age(data.get('token', ''))
    if age is None or age > TOKEN_MAX_AGE:
        return 'bad token'
    if age < MIN_FILL_SECONDS:
        return f'too fast ({age:.1f}s)'
    if _URL.search(data['name']):
        return 'link in name'
    if _CYRILLIC.search(' '.join((data['name'], data['message']))):
        return 'Cyrillic text'
    return ''


def rate_limited(ip):
    now = time.time()
    times = _recent[ip]
    while times and now - times[0] > 3600:
        times.popleft()
    if len(times) >= RATE_LIMIT:
        return True
    times.append(now)
    return False


def send(name, email, message):
    msg = EmailMessage()
    msg['Subject'] = f'Website enquiry from {name}'
    msg['From'] = formataddr(('Enemial Technologies website', SMTP_USER))
    msg['To'] = ', '.join(CONTACT_TO)
    msg['Reply-To'] = formataddr((name, email))
    msg.set_content(f'Name: {name}\nEmail: {email}\n\n{message}\n')
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=20) as smtp:
        smtp.starttls(context=ssl.create_default_context())
        smtp.login(SMTP_USER, SMTP_PASSWORD)
        smtp.send_message(msg)


class Handler(BaseHTTPRequestHandler):
    def _json(self, status, body):
        payload = json.dumps(body).encode()
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def _ip(self):
        # Caddy sets X-Forwarded-For to the real client; nothing else can
        # reach this container (it publishes no ports).
        return self.headers.get('X-Forwarded-For', '').split(',')[0].strip() or self.client_address[0]

    def do_GET(self):
        if self.path == '/api/contact/token':
            return self._json(200, {'token': make_token()})
        if self.path == '/health':
            return self._json(200, {'ok': True})
        self._json(404, {'success': False, 'message': 'Not found'})

    def do_POST(self):
        if self.path != '/api/contact':
            return self._json(404, {'success': False, 'message': 'Not found'})
        length = int(self.headers.get('Content-Length') or 0)
        if length > MAX_BODY:
            return self._json(413, {'success': False, 'message': 'Message is too long.'})
        try:
            raw = json.loads(self.rfile.read(length) or b'{}')
            data = {k: str(raw.get(k, '')).strip() for k in ('name', 'email', 'message', 'botcheck', 'token')}
        except (ValueError, AttributeError):
            return self._json(400, {'success': False, 'message': 'Invalid request.'})

        if not (data['name'] and data['message'] and _EMAIL.match(data['email'])) \
                or len(data['name']) > 100 or len(data['email']) > 254:
            return self._json(400, {'success': False, 'message': 'Please fill in your name, a valid email and a message.'})

        ip = self._ip()
        if rate_limited(ip):
            log.info('rate limited %s', ip)
            return self._json(429, {'success': False, 'message': 'Too many messages - please email us directly.'})

        reason = spam_reason(data)
        if reason:
            log.info('dropped spam from %s (%s): %r', ip, reason, data['name'][:80])
            return self._json(200, {'success': True})

        try:
            send(data['name'], data['email'], data['message'])
        except Exception:
            log.exception('send failed for enquiry from %s', data['email'])
            return self._json(502, {'success': False, 'message': 'We could not send your message. Please email us directly.'})
        log.info('sent enquiry from %s to %s', data['email'], CONTACT_TO)
        self._json(200, {'success': True})

    def log_message(self, fmt, *args):
        pass  # one line per enquiry above is enough; skip the access log


if __name__ == '__main__':
    log.info('mailer listening on :8000, delivering to %s', CONTACT_TO)
    ThreadingHTTPServer(('0.0.0.0', 8000), Handler).serve_forever()
