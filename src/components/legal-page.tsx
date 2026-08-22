import { PageIntro } from "@/components/site-shell";
import { getLegacyPage } from "@/lib/legacy-pages";

export function LegalPage({ slug, lead }: { slug: string; lead: string }) {
  const page = getLegacyPage(slug);
  return (
    <>
      <PageIntro eyebrow="Rechtliches" title={page.title} lead={lead} />
      <article className="shell legal-copy" dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
  );
}
