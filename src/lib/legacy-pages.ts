import pages from "../../migration/pages.json";

type LegacyPage = {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
};

export function getLegacyPage(slug: string) {
  const page = (pages as LegacyPage[]).find((item) => item.slug === slug);
  if (!page) throw new Error(`Missing migrated WordPress page: ${slug}`);

  const html = page.content.rendered
    .replace(/<!--([\s\S]*?)-->/g, "")
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<form[\s\S]*?<\/form>/gi, "")
    .replace(/\sclass="[^"]*"/g, "");

  return { title: page.title.rendered, html };
}
