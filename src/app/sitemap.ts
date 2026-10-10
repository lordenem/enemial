import type { MetadataRoute } from "next";
import { serviceHref, services } from "@/data/services";
import { nav, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = nav.map((item) => ({
    url: `${site.url}${item.href === "/" ? "/" : `${item.href}/`}`,
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}${serviceHref(service)}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...servicePages];
}
