import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta, PageIntro } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Über mich",
  description: "Irina Shevtsova – Wegbegleiterin und Brückenbauerin zwischen Kulturen in Fürth.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Wegbegleiterin zwischen Kulturen"
        title="Offen für die Welt. Zuhause in Fürth."
        lead="Meine eigene Reise hat mir gezeigt, wie viel Mut ein Neuanfang braucht – und wie wertvoll ein Mensch ist, der den Weg ein Stück mitgeht."
      />
      <section className="shell about-story">
        <div className="about-story__portrait">
          <Image src="/media/307-whatsapp-image-2025-06-07-at-13-02-02.jpeg" alt="Irina Shevtsova" fill sizes="(max-width: 800px) 92vw, 40vw" priority />
          <span>Mit Herz, Humor und einem starken Netzwerk.</span>
        </div>
        <div className="prose prose--large">
          <h2>Brücken bauen ist für mich keine Metapher.</h2>
          <p>Schon als Kind hatte ich das Privileg, verschiedene Länder nicht nur zu bereisen, sondern intensiv kennenzulernen. Diese Erfahrungen haben meine Reiselust und meine Offenheit gegenüber anderen Kulturen geweckt.</p>
          <p>Seit mittlerweile 20 Jahren lebe ich mit meinen zwei wundervollen Söhnen in Fürth. Hier habe ich meine Leidenschaft zum Beruf gemacht: Ich unterstütze Menschen mit Migrationshintergrund dabei, in ihrer neuen Heimat Fuß zu fassen und ein selbstbestimmtes Leben aufzubauen.</p>
          <p>Ob durch alltagsnahe Deutschkurse, Begleitung zu Behörden oder Bildungs- und Integrationsveranstaltungen – mein Ziel ist, Menschen miteinander zu verbinden.</p>
          <p>Besonders am Herzen liegt mir die Arbeit mit Familien. In Ferienangeboten für bilinguale Kinder und ihre Eltern verbinden wir Sprache, Gemeinschaft und kulturelle Identität spielerisch und wertschätzend.</p>
        </div>
      </section>
      <section className="values-section shell">
        <p className="eyebrow">Was meine Arbeit trägt</p>
        <div className="values-grid">
          <article><span>01</span><h3>Empathie</h3><p>Erst zuhören. Dann gemeinsam herausfinden, was wirklich gebraucht wird.</p></article>
          <article><span>02</span><h3>Respekt</h3><p>Jede Geschichte, jede Sprache und jeder Lebensweg verdient Augenhöhe.</p></article>
          <article><span>03</span><h3>Zuversicht</h3><p>Jede und jeder kann einen Platz finden – mit Unterstützung und einem starken Netzwerk.</p></article>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
