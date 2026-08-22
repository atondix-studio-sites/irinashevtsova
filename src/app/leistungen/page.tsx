import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCta, PageIntro } from "@/components/site-shell";
import { services } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Deutschkurse, Übersetzungen, Integrationsberatung und Begegnungsangebote in Fürth.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Unterstützung, die zu dir passt"
        title="Was ich mit Herz und Erfahrung anbiete."
        lead="Auf dem Weg in ein neues Leben zählt jeder Schritt. Ich begleite dich mit Zeit, Vertrauen und konkreter Hilfe im Alltag."
      />
      <section className="shell service-detail-list">
        {services.map((service) => (
          <article key={service.number}>
            <span className="service-number">{service.number}</span>
            <div>
              <p className="eyebrow">{service.short}</p>
              <h2>{service.title}</h2>
            </div>
            <p>{service.body}</p>
          </article>
        ))}
      </section>
      <section className="shell gentle-note">
        <div>
          <span className="gentle-note__icon">i</span>
          <h2>Nicht sicher, welches Angebot passt?</h2>
        </div>
        <p>Das musst du vorher nicht wissen. Schreib mir ein paar Sätze zu deiner Situation – wir sortieren den nächsten Schritt gemeinsam.</p>
        <Link className="text-link" href="/kontakt">Unverbindlich fragen <span>→</span></Link>
      </section>
      <ClosingCta />
    </>
  );
}
