import type { MetadataRoute } from "next";
import { NOTES, SITE } from "@/content/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = NOTES.filter((n) => !n.href.startsWith("http")).map((n) => ({
    url: `${SITE.url}${n.href}`,
    lastModified: new Date(n.date),
  }));
  return [{ url: `${SITE.url}/`, lastModified: new Date() }, ...notes];
}
