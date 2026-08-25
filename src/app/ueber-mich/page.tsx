import type { Metadata } from "next";
import { ClosingCta, PageHero } from "@/components/site-shell";

export const metadata: Metadata = { title: "Über mich" };

export default function AboutPage() {
  return <>
    <PageHero title="Über Mich" subtitle="Wegbegleiterin zwischen Kulturen" image="/media/167-whatsapp-bild-2025-04-19-um-12-31-01_ae83e930.jpg" />
    <section className="content-width about-copy">
      <p data-reveal="fade-up">Schon als Kind hatte ich das Privileg, verschiedene Länder nicht nur zu bereisen, sondern auch intensiv kennenzulernen. Diese frühen Erfahrungen haben in mir eine tiefe Reiselust und Offenheit gegenüber anderen Kulturen geweckt – Eigenschaften, die mich bis heute begleiten und prägen.</p>
      <p data-reveal="fade-up">Seit mittlerweile 20 Jahren lebe ich mit meinen zwei wundervollen Söhnen in Fürth. Hier habe ich meine Leidenschaft zum Beruf gemacht: Ich unterstütze Menschen mit Migrationshintergrund dabei, in ihrer neuen Heimat Fuß zu fassen und sich ein selbstbestimmtes Leben aufzubauen.</p>
      <p data-reveal="fade-up">Ob durch alltagsnahe Deutschkurse, Begleitung zu Behörden oder die Organisation von Bildungs- und Integrationsveranstaltungen – mein Ziel ist es, Brücken zu bauen und Menschen miteinander zu verbinden.</p>
      <p data-reveal="fade-up">Besonders am Herzen liegt mir die Arbeit mit Familien: Ich plane und begleite auch Ferienangebote für bilinguale Kinder und ihre Eltern, in denen Sprache, Gemeinschaft und kulturelle Identität spielerisch und wertschätzend miteinander verbunden werden.</p>
      <p data-reveal="fade-up">Meine Arbeit basiert auf Empathie, Respekt und der festen Überzeugung, dass jede*r seinen Platz finden kann – mit der richtigen Unterstützung, offenen Herzen und einem starken Netzwerk.</p>
    </section>
    <ClosingCta />
  </>;
}
