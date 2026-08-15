import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMetaOptions = {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Used for the canonical URL. */
  path: string;
};

/**
 * Builds per-page metadata with consistent Open Graph and Twitter tags.
 * The root layout supplies `metadataBase`, so relative paths resolve correctly.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetaOptions): Metadata {
  const url = path === "/" ? "/" : path;
  /*
   * Set absolutely rather than relying on the root layout's title template:
   * the template does not apply to the home page, which shares a route segment
   * with the layout itself, so it would render without the brand suffix.
   */
  const fullTitle = `${title} | ${site.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      locale: "en_BW",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
