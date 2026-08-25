import { getLegacyPage } from "@/lib/legacy-pages";

export function LegalPage({ slug }: { slug: string }) {
  const page = getLegacyPage(slug);
  return (
    <article className="content-width legal-copy">
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </article>
  );
}
