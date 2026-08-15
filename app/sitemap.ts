import type { MetadataRoute } from "next";
import { absoluteUrl, publicRoutes } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : route === "/sources" ? 0.5 : 0.8,
  }));
}
