import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta, PageIntro } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Aktuell",
  description: "Einblicke in Sprachkurse, Begegnungen und Projekte von Irina Shevtsova in Fürth.",
};

const updates = [
  {
    tag: "Sprache",
    title: "Deutsch für den Alltag",
    text: "Ein offenes Angebot für alle, die alltagstaugliches Deutsch in einem geschützten, herzlichen Rahmen lernen möchten – ohne Druck und mit Raum für echte Fragen.",
    image: "/media/247-diakoneo.jpg",
    imageAlt: "Diakoneo",
  },
  {
    tag: "Begegnung",
    title: "Willkommenscafé Fürth",
    text: "Ein liebevoller Treffpunkt für Austausch, Gespräche und Begegnung – bei Tee, Lächeln und neuen Worten im Gemeindesaal der Auferstehungskirche.",
    image: "/media/109-whatsapp-bild-2025-01-27-um-11-18-09_a9aa2ad2.jpg",
    imageAlt: "Menschen im gemeinsamen Austausch",
  },
  {
    tag: "Familienzeit",
    title: "Ferienfreizeiten",
    text: "Gemeinsame Reisen für Familien mit bilingualen Kindern: Zeit zum Innehalten, Staunen und Wachsen – mit Sprache, Natur und Raum für Herkunft und Zukunft.",
    image: "/media/176-whatsapp-bild-2025-04-19-um-12-31-01_5df657b9.jpg",
    imageAlt: "Familien unterwegs in der Natur",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Einblicke & Herzensprojekte"
        title="Was wächst, verbindet und bewegt."
        lead="Hier findest du Einblicke in meine Angebote und Projekte – von Deutsch im Alltag bis zu gemeinsamen Auszeiten für Familien."
      />
      <section className="shell update-grid">
        {updates.map((update) => (
          <article key={update.title}>
            <div className="update-card__image">
              <Image src={update.image} alt={update.imageAlt} fill sizes="(max-width: 800px) 92vw, 31vw" />
            </div>
            <p className="eyebrow">{update.tag}</p>
            <h2>{update.title}</h2>
            <p>{update.text}</p>
          </article>
        ))}
      </section>
      <ClosingCta />
    </>
  );
}
