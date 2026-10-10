# Enemial Technologies — marketing site

Static marketing site for Enemial Technologies (Pty) Ltd, Gaborone, Botswana.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**,
configured for **static export** (`output: "export"`). There is no database and
no backend — the build produces plain HTML/CSS/JS in `out/`.

## Commands

```bash
npm run dev        # local dev server at http://localhost:3000
npm run build      # static export into out/
npm run start      # serve the built out/ directory locally
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # root layout: fonts, header/footer, site-wide metadata
│   ├── page.tsx            # home
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── products/page.tsx
│   ├── services/page.tsx
│   ├── not-found.tsx       # 404
│   ├── globals.css         # Tailwind import + design tokens (@theme)
│   ├── icon.svg            # favicon (placeholder)
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── brand/Logo.tsx      # placeholder logo mark + wordmark
│   ├── layout/             # Header, Footer, PageHeader
│   ├── ui/                 # Button, Badge, Container, Section
│   ├── icons.tsx           # self-contained SVG icon set
│   ├── ContactForm.tsx     # posts to deploy/mailer (client component)
│   └── ServiceCard.tsx
├── data/                   # ← edit copy here
│   ├── site.ts             # company details, contact info, nav, form key
│   ├── products.ts         # Attestway, FunInvite
│   └── services.ts         # the four consulting service lines
└── lib/seo.ts              # per-page metadata helper
```

Content lives in `src/data/`. Adding a service to `services.ts` or a product to
`products.ts` makes it appear on the relevant pages and in the footer
automatically.

## Placeholders to replace

| What | Where |
| --- | --- |
| Production domain | `src/data/site.ts` → `site.url` (currently `https://enemial.com`) — drives canonical URLs, OG tags, and the sitemap |
| Attestway URL | `src/data/products.ts` → `url` (currently `https://attestway.com`) |
| Company registration number | `src/data/site.ts` → `registrationNumber` (empty; the footer omits it until set) |
| Favicon | `src/app/icon.svg` |
| Logo | `src/components/brand/Logo.tsx` |
| OG share image | Add `src/app/opengraph-image.png` (1200×630) — Next picks it up automatically |

### Contact form

The form posts to `/api/contact`, which Caddy routes to a small mailer
container (`deploy/mailer/app.py`, Python standard library only). It sends each
enquiry to every address in `CONTACT_TO` through the company mailbox's SMTP,
with Reply-To set to the visitor, and drops bot submissions (honeypot, a
signed load-time token, content checks, a per-IP rate limit).

Its settings live in `~/enemial/.env` on the server, never in the repo — see
`deploy/mailer.env.example`. `npm run dev` has no `/api`, so the form only
works on the deployed site.

## Deploying

Hosted on the shared Hetzner box (`ssh hetzner`), in `~/enemial`:

- `enemial-web-1` — nginx serving the static `out/`
- `enemial-mailer-1` — the contact-form mailer
- the shared Caddy (AttestWay's stack, `/opt/attestway/Caddyfile`) terminates
  TLS for enemialtechnologies.com and routes to both; `deploy/Caddyfile.enemial`
  is the reference copy of that block.

To publish a change: `npm run build`, copy `out/` to `~/enemial/out`, then
`docker compose restart web` in `~/enemial`. The restart matters if `out/` was
replaced rather than overwritten: the container stays bound to the old
directory and serves 403/404 for every page until restarted.

`trailingSlash: true` is set in `next.config.ts` so routes emit
`about/index.html` rather than `about.html`, which static hosts route more
predictably.

## Design system

Colours and fonts are defined as Tailwind v4 theme tokens in
`src/app/globals.css` under `@theme`:

- `brand-*` — teal, primary brand colour
- `accent-*` — warm copper, used sparingly for emphasis
- `ink-*` — warm-tinted neutrals (not cool grey)
- `font-display` — Space Grotesk (headings), `font-sans` — Inter (body)

Changing a value there updates the whole site.
