import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import { ClosingCta } from "@/components/site-shell";
import { TestimonialCarousel, type Testimonial } from "@/components/testimonial-carousel";

const gallery = [
  [
    ["114-whatsapp-bild-2025-01-27-um-11-18-14_ceb25c01.jpg", "Gemeinsames Lernen im Sprachkurs"],
    ["111-whatsapp-bild-2025-01-27-um-11-18-11_04299260.jpg", "Begegnung und Austausch in der Gruppe"],
    ["113-whatsapp-bild-2025-01-27-um-11-18-12_ec78f5c2.jpg", "Gemeinsame Aktivität bei einer Veranstaltung"],
  ],
  [
    ["108-whatsapp-bild-2025-01-27-um-11-18-18_eaeaa11f.jpg", "Teilnehmende bei einem gemeinsamen Ausflug"],
    ["110-whatsapp-bild-2025-01-27-um-11-18-11_6381db2a.jpg", "Lernen und Begegnung in Fürth"],
    ["102-whatsapp-bild-2025-01-27-um-11-18-14_f9983ad9.jpg", "Gemeinschaft bei einer Reise"],
  ],
  [
    ["146-whatsapp-bild-2025-01-27-um-11-18-12_1185a56d-2.jpg", "Irina mit Teilnehmenden einer Veranstaltung"],
    ["105-whatsapp-bild-2025-01-27-um-11-18-17_4c593597.jpg", "Gemeinsames Erlebnis in der Natur"],
    ["107-whatsapp-bild-2025-01-27-um-11-18-18_119bf11d.jpg", "Austausch bei einer Gruppenaktivität"],
  ],
] as const;

const testimonials: readonly Testimonial[] = [
  {
    name: "Tatjana Sirovatko, Fürth",
    image: "307-whatsapp-image-2025-06-07-at-13-02-02.jpeg",
    paragraphs: [
      "Ich bin Irina von Herzen dankbar! Ich suchte lange nach einem Wort, das unsere Zusammenarbeit beschreibt – doch es ist mehr als Coaching oder Beratung.",
      "Irina war für mich eine echte Begleiterin: Sie half mir, mich im \"Dschungel\" der Bürokratie und der deutschen Sprache zurechtzufinden.",
      "Alles, was ich heute in Deutschland erreicht habe, verdanke ich ihren klugen Ratschlägen und ihrer großartigen Unterstützung.",
      "Wir haben regelmäßig Deutsch geübt, und ihr Talent als Sprachprofi hat mir sehr geholfen – besonders für mein B2-Zertifikat.",
      "Auch bei meinem Lebenslauf, bei Übersetzungen im Krankenhaus und der Suche nach Fachleuten stand sie mir zuverlässig zur Seite.",
      "Ich bin unglaublich dankbar und freue mich auf weitere gemeinsame Erfolge!",
    ],
  },
  {
    name: "Аnna Lushchan, Fürth",
    image: "306-foto_anja-luschan.jpeg",
    paragraphs: [
      "Ich habe Irina vor zwei Jahren kennengelernt. Sie hat mich mit ihrer Herzlichkeit und Offenheit sofort angesprochen.",
      "Irina weiß genau, wem sie was empfehlen kann – sei es eine Weiterbildung, ein Job oder ein Ehrenamt.",
      "Man merkt sofort, dass sie kompetent ist und jedem ganz individuell wertvolle Informationen geben kann.",
      "Mir persönlich hat sie geholfen, eine Stelle in einer Organisation zu finden, in der ich dank ihr nun schon seit anderthalb Jahren arbeite.",
      "Ich empfehle Irina als Fachfrau mit ganzem Herzen weiter. Besonders schätze ich, dass sie Angebote immer individuell abstimmt.",
      "Sie ist ein wertvoller und offener Mensch!",
    ],
  },
  {
    name: "Inna Ivanchuk, Nürnberg",
    image: "309-foto_inna.jpeg",
    paragraphs: [
      "Manchmal begegnet man im Leben Menschen, deren Unterstützung sich anfühlt wie ein Lichtblick in dunklen Zeiten.",
      "Irina ist genau so ein Mensch – herzlich, offen und unglaublich engagiert.",
      "Sie hat mir beim Deutschlernen geholfen, mich in vielen Momenten ermutigt und mir wertvolle Tipps für das Ankommen in Deutschland gegeben. Ihre Unterstützung war für mich eine echte Hilfe und emotionale Stütze.",
      "Was ich besonders schätze: Irina teilt ihr Wissen und ihre Erfahrung großzügig, hört zu, denkt mit und findet immer die passenden Worte – sei es beim Lebenslauf, bei Alltagsfragen oder einfach dann, wenn man jemanden braucht, der da ist.",
      "Alles, was sie tut, macht sie mit Herz, Feingefühl und einer riesigen Portion Geduld.",
      "Und obendrein sprudelt sie vor Ideen und positiver Energie – ein echter Gute-Laune-Brunnen! 🤗 Danke, liebe Irina, für dein großes Herz und dafür, dass du so engagiert und mit so viel Freude für andere da bist!",
    ],
  },
  {
    name: "Rita Belitzer, Fürth",
    image: "310-rita.jpg",
    paragraphs: [
      "Über Irina - sie ist ein besonderer Mensch!",
      "Warum? Weil sie genau weiß, was du brauchst – und es möglich macht. Ganz unkompliziert und mit viel Herz.",
      "Reise geplant? Irina hat Ideen. Ob klassische Route mit Geheimtipps oder ganz neue Ziele – sie kennt Wege, die überraschen.",
      "Zweifel bei der Planung? Frag Irina. Du brauchst ein Ticket zum fairen Preis? Kein Problem - sie findet nicht nur die passende Verbindung, sondern oft noch einen kleinen Extra-Bonus obendrauf.",
      "Darum: absolute Empfehlung! Irina hat Talent, Organisationstalent, Humor – und das Herz an der richtigen Stelle.",
      "Und das ist nur ein kleiner Teil dessen, was sie möglich macht. Mit ihrem Blick fürs Detail, Feingefühl und echtem Interesse hört sie zu, fragt nach, denkt mit – ohne etwas aufzudrängen. Für mich ist das eine seltene Gabe – gepaart mit Fleiß, Köpfchen und viel Wärme. Überzeug dich selbst – es lohnt sich.",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero wide">
        <div className="home-hero__copy">
          <h1 data-reveal="fade-right">Mit mir findest du<br /><mark>deinen Weg</mark></h1>
          <p data-reveal="fade-right">Mit Erfahrung, Herz und Offenheit begleite ich Menschen durch<br className="desktop-only" /> Sprachkurse, Beratung – und Reisen, die verbinden.</p>
          <div className="button-row" data-reveal="zoom-out-up">
            <Link className="button" href="/aktuell">Jetzt deinen Weg finden</Link>
            <Link className="button button--outline" href="/leistungen">Mehr erfahren</Link>
          </div>
        </div>
        <HeroVideo />
      </section>

      <section className="services-home tone">
        <div className="wide">
          <p className="kicker" data-reveal="fade-up">Meine Leistungen für dich</p>
          <h2 data-reveal="fade-up">Deine Unterstützung für den Alltag in<br className="desktop-only" /> Deutschland</h2>
          <p className="section-subtitle" data-reveal="fade-up">Individuelle Hilfe für eine erfolgreiche Integration</p>
          <div className="service-columns">
            <article data-reveal="fade-up"><h3>Begleitung & Übersetzungen</h3><p>Ich begleite dich zu wichtigen Terminen, wie Arztbesuchen oder Behördengängen, und unterstütze dich mit Übersetzungen. Elterngespräche in Kitas und Schulen in Fürth übersetze ich kostenlos.</p></article>
            <article data-reveal="fade-up"><h3>Deutsch lernen leicht gemacht</h3><p>In meinen kostenlosen Deutschkursen lernst du genau das, was du im Alltag brauchst. Im Sprachcafé kannst du in entspannter Atmosphäre mit Muttersprachler*innen üben und neue Leute kennenlernen.</p></article>
            <article data-reveal="fade-up"><h3>Beratung & Integration</h3><p>Ich helfe dir, dich in Schule, Ausbildung oder Beruf zurechtzufinden. Gemeinsam finden wir Wege, damit du dich sicher fühlst, deine Ziele erreichst und neue Perspektiven entdeckst.</p></article>
          </div>
        </div>
      </section>

      <section className="gallery-home wide">
        <p className="kicker" data-reveal="fade-up">Gallerie</p>
        <h2 data-reveal="fade-up">Was Worte nicht sagen – erzählen<br className="desktop-only" /> Bilder</h2>
        <p className="section-subtitle" data-reveal="fade-up">Ob im Sprachkurs, auf einer Reise oder beim Gespräch im Café – diese Bilder zeigen, was meine Arbeit bewegt.</p>
        <div className="gallery-grid">
          {gallery.map((column, columnIndex) => (
            <div className="gallery-column" key={columnIndex}>
              {column.map(([photo, alt]) => <figure key={photo} data-reveal="fade-up"><Image src={`/media/${photo}`} alt={alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></figure>)}
            </div>
          ))}
        </div>
      </section>

      <section className="about-home tone">
        <div className="wide about-home__grid">
          <div>
            <p className="kicker" data-reveal="fade-up">Über Mich</p>
            <h2 data-reveal="fade-up">Wer ich bin – und warum ich begleite</h2>
            <p data-reveal="fade-up">Meine eigene Reise durch Länder, Sprachen und Kulturen hat mich geprägt. Heute begleite ich andere auf ihrem Weg – mit Menschlichkeit, Erfahrung und einem offenen Blick.</p>
            <Link className="button" href="/ueber-mich" data-reveal="fade-up">Mehr Erfahren</Link>
          </div>
          <div data-reveal="zoom-in-left"><Image src="/media/148-whatsapp-bild-2025-01-27-um-11-18-14_d21b5dda.jpg" alt="Irina Shevtsova" width={1080} height={810} /></div>
        </div>
      </section>

      <section className="testimonials wide">
        <p className="kicker" data-reveal="fade-up">Echte Erfahrungsberichte</p>
        <h2 data-reveal="fade-up">Lass dich durch Erfahrungen von<br className="desktop-only" /> Anderen überzeugen</h2>
        <div data-reveal="fade-up"><TestimonialCarousel items={testimonials} /></div>
      </section>

      <ClosingCta />
    </>
  );
}
