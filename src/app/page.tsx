import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "@/components/site-shell";

const gallery = [
  "114-whatsapp-bild-2025-01-27-um-11-18-14_ceb25c01.jpg",
  "111-whatsapp-bild-2025-01-27-um-11-18-11_04299260.jpg",
  "113-whatsapp-bild-2025-01-27-um-11-18-12_ec78f5c2.jpg",
  "108-whatsapp-bild-2025-01-27-um-11-18-18_eaeaa11f.jpg",
  "110-whatsapp-bild-2025-01-27-um-11-18-11_6381db2a.jpg",
  "102-whatsapp-bild-2025-01-27-um-11-18-14_f9983ad9.jpg",
  "146-whatsapp-bild-2025-01-27-um-11-18-12_1185a56d-2.jpg",
  "105-whatsapp-bild-2025-01-27-um-11-18-17_4c593597.jpg",
  "107-whatsapp-bild-2025-01-27-um-11-18-18_119bf11d.jpg",
] as const;

const testimonials = [
  { name: "Tatjana Sirovatko, Fürth", image: "307-whatsapp-image-2025-06-07-at-13-02-02.jpeg", text: "Ich bin Irina von Herzen dankbar! Irina war für mich eine echte Begleiterin: Sie half mir, mich im ‚Dschungel‘ der Bürokratie und der deutschen Sprache zurechtzufinden. Alles, was ich heute in Deutschland erreicht habe, verdanke ich ihren klugen Ratschlägen und ihrer großartigen Unterstützung." },
  { name: "Аnna Lushchan, Fürth", image: "306-foto_anja-luschan.jpeg", text: "Irina weiß genau, wem sie was empfehlen kann – sei es eine Weiterbildung, ein Job oder ein Ehrenamt. Man merkt sofort, dass sie kompetent ist und jedem ganz individuell wertvolle Informationen geben kann." },
  { name: "Inna Ivanchuk, Nürnberg", image: "309-foto_inna.jpeg", text: "Manchmal begegnet man im Leben Menschen, deren Unterstützung sich anfühlt wie ein Lichtblick in dunklen Zeiten. Irina ist genau so ein Mensch – herzlich, offen und unglaublich engagiert. Alles, was sie tut, macht sie mit Herz, Feingefühl und einer riesigen Portion Geduld." },
  { name: "Rita Belitzer, Fürth", image: "310-rita.jpg", text: "Mit ihrem Blick fürs Detail, Feingefühl und echtem Interesse hört sie zu, fragt nach, denkt mit – ohne etwas aufzudrängen. Für mich ist das eine seltene Gabe – gepaart mit Fleiß, Köpfchen und viel Wärme." },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="home-hero content-width">
        <h1>Mit mir findest du<br /><mark>deinen Weg</mark></h1>
        <p>Mit Erfahrung, Herz und Offenheit begleite ich Menschen durch<br className="desktop-only" /> Sprachkurse, Beratung – und Reisen, die verbinden.</p>
        <div className="button-row">
          <Link className="button" href="/aktuell">Jetzt deinen Weg finden</Link>
          <Link className="button button--outline" href="/leistungen">Mehr erfahren</Link>
        </div>
        <video className="home-video" controls preload="metadata">
          <source src="/media/original.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="services-home tone">
        <div className="wide">
          <p className="kicker">Meine Leistungen für dich</p>
          <h2>Deine Unterstützung für den Alltag in<br className="desktop-only" /> Deutschland</h2>
          <p className="section-subtitle">Individuelle Hilfe für eine erfolgreiche Integration</p>
          <div className="service-columns">
            <article><h3>Begleitung & Übersetzungen</h3><p>Ich begleite dich zu wichtigen Terminen, wie Arztbesuchen oder Behördengängen, und unterstütze dich mit Übersetzungen. Elterngespräche in Kitas und Schulen in Fürth übersetze ich kostenlos.</p></article>
            <article><h3>Deutsch lernen leicht gemacht</h3><p>In meinen kostenlosen Deutschkursen lernst du genau das, was du im Alltag brauchst. Im Sprachcafé kannst du in entspannter Atmosphäre mit Muttersprachler*innen üben und neue Leute kennenlernen.</p></article>
            <article><h3>Beratung & Integration</h3><p>Ich helfe dir, dich in Schule, Ausbildung oder Beruf zurechtzufinden. Gemeinsam finden wir Wege, damit du dich sicher fühlst, deine Ziele erreichst und neue Perspektiven entdeckst.</p></article>
          </div>
        </div>
      </section>

      <section className="gallery-home wide">
        <p className="kicker">Gallerie</p>
        <h2>Was Worte nicht sagen – erzählen<br className="desktop-only" /> Bilder</h2>
        <p className="section-subtitle">Ob im Sprachkurs, auf einer Reise oder beim Gespräch im Café – diese Bilder zeigen, was meine Arbeit bewegt.</p>
        <div className="gallery-grid">
          {gallery.map((photo) => <figure key={photo}><Image src={`/media/${photo}`} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></figure>)}
        </div>
      </section>

      <section className="about-home tone">
        <div className="wide about-home__grid">
          <div>
            <p className="kicker">Über Mich</p>
            <h2>Wer ich bin – und warum ich begleite</h2>
            <p>Meine eigene Reise durch Länder, Sprachen und Kulturen hat mich geprägt. Heute begleite ich andere auf ihrem Weg – mit Menschlichkeit, Erfahrung und einem offenen Blick.</p>
            <Link className="button" href="/ueber-mich">Mehr Erfahren</Link>
          </div>
          <Image src="/media/148-whatsapp-bild-2025-01-27-um-11-18-14_d21b5dda.jpg" alt="Irina Shevtsova" width={1080} height={810} />
        </div>
      </section>

      <section className="testimonials wide">
        <p className="kicker">Echte Erfahrungsberichte</p>
        <h2>Lass dich durch Erfahrungen von<br className="desktop-only" /> Anderen überzeugen</h2>
        <div className="testimonial-strip">
          {testimonials.map((item) => (
            <article key={item.name}>
              <header><Image src={`/media/${item.image}`} alt="" width={64} height={64} /><strong>{item.name}</strong></header>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
