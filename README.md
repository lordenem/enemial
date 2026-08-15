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
│   ├── ContactForm.tsx     # Web3Forms-backed form (client component)
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
| Web3Forms access key | `src/data/site.ts` → `WEB3FORMS_ACCESS_KEY`, or set `NEXT_PUBLIC_WEB3FORMS_KEY` |
| Production domain | `src/data/site.ts` → `site.url` (currently `https://enemial.com`) — drives canonical URLs, OG tags, and the sitemap |
| Attestway URL | `src/data/products.ts` → `url` (currently `https://attestway.com`) |
| Company registration number | `src/data/site.ts` → `registrationNumber` (empty; the footer omits it until set) |
| Favicon | `src/app/icon.svg` |
| Logo | `src/components/brand/Logo.tsx` |
| OG share image | Add `src/app/opengraph-image.png` (1200×630) — Next picks it up automatically |

### Contact form

The form posts directly from the browser to the Web3Forms API, which is what
keeps the site fully static. Get a free access key at
<https://web3forms.com> — it is emailed to you, no account required — and put it
in `src/data/site.ts`. The key is public by design and only permits submitting
to the inbox it was issued for. **The form will not deliver anything until this
is set.**

## Deploying

The build output is a static directory (`out/`), so any static host works.

**Vercel** — import the repo; the defaults are correct (build `npm run build`,
output directory `out`).

**Cloudflare Pages** — framework preset *Next.js (Static HTML Export)*, build
command `npm run build`, output directory `out`.

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
