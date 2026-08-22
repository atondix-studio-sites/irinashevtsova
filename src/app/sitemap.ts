import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/leistungen", "/aktuell", "/ueber-mich", "/kontakt", "/impressum", "/datenschutzerklaerung"];
  return routes.map((route) => ({
    url: `https://irinashevtsova.de${route}`,
    lastModified: new Date("2026-08-22"),
    changeFrequency: route === "" || route === "/aktuell" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/kontakt" ? 0.9 : 0.7,
  }));
}
