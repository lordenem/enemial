import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Emit a fully static site into `out/` — deployable to Vercel, Cloudflare Pages, or any CDN. */
  output: "export",
  /** Emits `about/index.html` rather than `about.html`, which static hosts route more predictably. */
  trailingSlash: true,
  images: {
    /** The Next image optimizer needs a server; static export has none. */
    unoptimized: true,
  },
};

export default nextConfig;
