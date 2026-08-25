import type { Metadata } from "next";
import { ClosingCta, PageHero } from "@/components/site-shell";

export const metadata: Metadata = { title: "Aktuell" };

export default function NewsPage() {
  return <>
    <PageHero title="Aktuell" subtitle="Was gerade passiert – und was kommt" image="/media/107-whatsapp-bild-2025-01-27-um-11-18-18_119bf11d.jpg" />
    <section className="content-width simple-list simple-list--news">
      <p className="intro-copy" data-reveal="fade-up">Hier teile ich Einblicke in meine Projekte, Veranstaltungen und Herzensanliegen – das, was wächst, verbindet und bewegt.</p>
      <article data-reveal="fade-up"><h2>Sprachkurs „Deutsch für den Alltag“ – Donnerstags in Fürth</h2><p>Ein offenes Angebot für alle, die alltagstaugliches Deutsch in einem geschützten, herzlichen Rahmen lernen möchten. Ohne Druck, mit viel Raum für Fragen, Austausch und echtes Verständnis.</p></article>
      <article data-reveal="fade-up"><h2>Willkommenscafé Fürth – ein Sprachcafé mit Herz</h2><p>Jeden Dienstag bin ich ehrenamtlich im Willkommenscafé im Gemeindesaal der Auferstehungskirche (Rudolf-Breitscheid-Straße 37, 90762 Fürth) dabei.<br />Das Café ist ein liebevoller Treffpunkt für Austausch, Gespräche und Begegnung – bei Tee, Lächeln und neuen Worten. Komm gerne vorbei und sprich mich an!</p></article>
      <article data-reveal="fade-up"><h2>Ferienfreizeit in Planung – Herbst 2025</h2><p>Ich plane eine einwöchige Reise für Familien mit bilingualen Kindern. Eine Zeit zum Innehalten, Staunen, Wachsen – mit Sprache, Natur und Raum für Herkunft und Zukunft.</p></article>
    </section>
    <ClosingCta />
  </>;
}
