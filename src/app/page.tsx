import Image from "next/image";
import Link from "next/link";
import { ClosingCta, PathLine } from "@/components/site-shell";
import { gallery, services, testimonials } from "@/content/site-content";

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero__copy">
          <p className="eyebrow">Fürth · Sprache · Orientierung · Begegnung</p>
          <h1>
            Gemeinsam wird aus <em>ankommen</em> ein Zuhause.
          </h1>
          <p className="hero__lead">
            Ich begleite Menschen durch Sprache, Alltag und Neuanfang – herzlich,
            praktisch und auf Augenhöhe.
          </p>
          <div className="hero__actions">
            <Link className="button" href="/kontakt">Erzähl mir, was du brauchst</Link>
            <Link className="text-link" href="/leistungen">Meine Unterstützung ansehen <span>→</span></Link>
          </div>
          <PathLine label="Dein Weg darf leichter werden." />
        </div>
        <div className="hero__portrait">
          <div className="hero__image-wrap">
            <Image
              src="/media/307-whatsapp-image-2025-06-07-at-13-02-02.jpeg"
              alt="Irina Shevtsova"
              fill
              priority
              sizes="(max-width: 800px) 92vw, 42vw"
            />
          </div>
          <div className="hero__note">
            <strong>20 Jahre in Fürth</strong>
            <span>und noch immer neugierig auf jede neue Geschichte.</span>
          </div>
        </div>
      </section>

      <section className="promise-strip" aria-label="So arbeite ich">
        <div className="shell promise-strip__inner">
          <span>Persönlich statt pauschal</span>
          <span>Verständlich statt kompliziert</span>
          <span>Gemeinsam statt allein</span>
        </div>
      </section>

      <section className="section shell services-preview">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Wie ich dich unterstütze</p>
            <h2>Hilfe, die im echten Leben ankommt.</h2>
          </div>
          <p>
            Kein fertiges Programm für alle. Wir schauen, was gerade schwer ist
            und welche Unterstützung wirklich passt.
          </p>
        </div>
        <div className="service-list">
          {services.slice(0, 4).map((service) => (
            <article className="service-row" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <Link aria-label={`${service.title} – mehr erfahren`} href="/leistungen">↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section story-band">
        <div className="shell story-band__grid">
          <div className="story-band__image">
            <Image
              src="/media/167-whatsapp-bild-2025-04-19-um-12-31-01_ae83e930.jpg"
              alt="Irina am Meer"
              fill
              sizes="(max-width: 800px) 92vw, 45vw"
            />
          </div>
          <div className="story-band__copy">
            <p className="eyebrow">Warum ich begleite</p>
            <h2>Ich kenne das Gefühl, zwischen Sprachen und Welten zu stehen.</h2>
            <p>
              Meine eigene Reise durch Länder, Sprachen und Kulturen hat mich
              geprägt. Seit 20 Jahren lebe ich mit meinen zwei Söhnen in Fürth.
              Heute helfe ich anderen dabei, hier ihren eigenen Platz zu finden.
            </p>
            <Link className="text-link" href="/ueber-mich">Meine Geschichte lesen <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section shell gallery-section">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Mittendrin</p>
            <h2>Begegnung lässt sich nicht inszenieren.</h2>
          </div>
          <p>
            Sprachkurse, Reisen, Gespräche und gemeinsames Entdecken – echte
            Momente aus meiner Arbeit.
          </p>
        </div>
        <div className="photo-ribbon">
          {gallery.map((photo, index) => (
            <figure className={`photo-ribbon__item photo-ribbon__item--${index + 1}`} key={photo.src}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 80vw, 28vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section voices">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Was andere erlebt haben</p>
            <h2>„Sie hört zu, fragt nach und denkt mit.“</h2>
          </div>
          <div className="voice-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <footer><strong>{testimonial.name}</strong><span>{testimonial.place}</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
