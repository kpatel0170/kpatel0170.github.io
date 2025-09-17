import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all crawlers
        allow: "/", // Allow crawling all pages
        disallow: ["/admin"] // Disallow private/admin pages
      }
    ],
    sitemap: "https://kpatel0170.github.io/sitemap.xml"
  };
}
