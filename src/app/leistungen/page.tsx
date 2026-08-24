import type { Metadata } from "next";
import { ClosingCta, PageHero } from "@/components/site-shell";

export const metadata: Metadata = { title: "Leistungen" };

const services = [
  ["Alltagsnahe Deutschkurse & Sprachcafé", "In kleinen Gruppen, mit Wärme und Geduld, lernen wir gemeinsam die Sprache, die Türen öffnet. Im Sprachcafé begegnen wir uns auf Augenhöhe – ohne Druck, aber mit viel Freude."],
  ["„Deutsch unterwegs“ – Sprache, wo das Leben spielt", "Wir lernen dort, wo der Alltag stattfindet: im Supermarkt, beim Arzt oder in der U-Bahn. Ganz praktisch, lebendig und nah dran."],
  ["Begleitung & Übersetzungen", "Ich begleite Sie zu Ärzten und Ämtern, erkläre, übersetze und helfe, wenn Worte fehlen. Für Fürther Eltern biete ich kostenfreie Unterstützung bei Elterngesprächen in Kita und Schule an."],
  ["Individuelle Integrationsberatung", "Manchmal reicht ein Gespräch, um neue Klarheit zu finden. Ich höre zu, berate und helfe dabei, die nächsten Schritte zu erkennen – sei es Richtung Bildung, Arbeit oder Alltag."],
  ["Veranstaltungen für Bildung und Begegnung", "Ich organisiere Seminare, Info-Tage und Begegnungstreffen – Räume, in denen sich Kulturen, Erfahrungen und Menschen auf Augenhöhe begegnen."],
  ["Ferienangebote für bilinguale (russischsprachigen) Familien", "Sprache, Natur und Gemeinschaft: Ich begleite Ferienfreizeiten, bei denen Kinder und Eltern wachsen, lachen, sich entdecken – mehrsprachig, bunt und verbunden."],
] as const;

export default function ServicesPage() {
  return <>
    <PageHero title="Leistungen" subtitle="Was ich mit Herz und Erfahrung auf ihrem Weg in ein neues Leben – mit Zeit, Vertrauen und dem festen Glauben daran, dass jeder Schritt zählt." image="/media/247-diakoneo.jpg" focalPoint="50% 53%" />
    <section className="content-width simple-list">{services.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}</section>
    <ClosingCta />
  </>;
}
