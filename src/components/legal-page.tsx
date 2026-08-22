import { getLegacyPage } from "@/lib/legacy-pages";

export function LegalPage({ slug, lead }: { slug: string; lead: string }) {
  const page = getLegacyPage(slug);
  return (
    <article className="content-width legal-copy">
      <h1>{page.title}</h1>
      <p className="legal-lead">{lead}</p>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </article>
  );
}
