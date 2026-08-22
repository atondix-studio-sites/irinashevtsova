import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu Irina Shevtsova in Fürth – per Telefon, E-Mail, WhatsApp oder Telegram.",
};

const channels = [
  { label: "Anrufen", value: "0179 1070525", href: "tel:+491791070525", note: "Wenn ich gerade begleite, rufe ich zurück." },
  { label: "E-Mail", value: "irinashevtsova74@gmail.com", href: "mailto:irinashevtsova74@gmail.com", note: "Schreib mir kurz, wobei du Unterstützung brauchst." },
  { label: "WhatsApp", value: "Nachricht senden", href: "https://wa.me/491791070525", note: "Praktisch für eine erste kurze Nachricht." },
  { label: "Telegram", value: "@Shetsova_Irina", href: "https://t.me/Shetsova_Irina", note: "Du findest mich auch direkt bei Telegram." },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kontakt"
        title="Erzähl mir, wo du gerade stehst."
        lead="Du musst deine Situation nicht perfekt erklären. Ein paar Sätze reichen – wir finden gemeinsam heraus, was als Nächstes hilft."
      />
      <section className="shell contact-layout">
        <div className="contact-photo">
          <Image src="/media/167-whatsapp-bild-2025-04-19-um-12-31-01_ae83e930.jpg" alt="Irina Shevtsova am Meer" fill sizes="(max-width: 800px) 92vw, 38vw" />
          <div><strong>Irina Shevtsova</strong><span>Brückenbauerin zwischen Kulturen</span></div>
        </div>
        <div className="contact-channels">
          {channels.map((channel) => (
            <a href={channel.href} key={channel.label}>
              <span className="eyebrow">{channel.label}</span>
              <strong>{channel.value}</strong>
              <small>{channel.note}</small>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>
      <section className="shell address-note">
        <p className="eyebrow">Vor Ort in Fürth</p>
        <h2>Nähe beginnt mit einem offenen Gespräch.</h2>
        <p>Meine Angebote und Begleitungen finden in Fürth und Umgebung statt. Schreib oder ruf mich an, dann klären wir den passenden Ort.</p>
      </section>
    </>
  );
}
