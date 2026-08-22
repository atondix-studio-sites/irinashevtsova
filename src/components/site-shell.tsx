import Link from "next/link";

const navigation = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/aktuell", label: "Aktuell" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

export function BrandMark() {
  return (
    <Link className="brand" href="/" aria-label="Irina Shevtsova – Startseite">
      <svg className="brand__mark" viewBox="0 0 52 52" aria-hidden="true">
        <path d="M10 13c5-7 15-5 16 3 2-8 13-10 17-3 7 12-7 23-17 30C16 36 3 25 10 13Z" />
        <path d="M26 43c-2-10 4-18 14-23" />
      </svg>
      <span>
        <strong>Irina Shevtsova</strong>
        <small>Deine Wegbegleiterin</small>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--small header-cta" href="/kontakt">
          Lass uns sprechen
        </Link>
        <details className="mobile-nav">
          <summary aria-label="Menü öffnen"><span /><span /><span /></summary>
          <nav aria-label="Mobile Navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <BrandMark />
          <p className="site-footer__intro">
            Sprachförderung, Orientierung und Begegnung in Fürth – mit Zeit,
            Erfahrung und einem offenen Ohr.
          </p>
        </div>
        <div>
          <p className="footer-label">Direkt verbunden</p>
          <a href="tel:+491791070525">0179 1070525</a>
          <a href="mailto:irinashevtsova74@gmail.com">irinashevtsova74@gmail.com</a>
          <a href="https://wa.me/491791070525">WhatsApp</a>
        </div>
        <div>
          <p className="footer-label">Seiten</p>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>© {new Date().getFullYear()} Irina Shevtsova</span>
        <span>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutzerklaerung">Datenschutz</Link>
        </span>
      </div>
    </footer>
  );
}

export function PathLine({ label }: { label?: string }) {
  return (
    <div className="path-line" aria-hidden={label ? undefined : true}>
      <svg viewBox="0 0 420 82" preserveAspectRatio="none">
        <path d="M4 66C66 4 120 78 182 37S305 4 416 40" />
        <circle cx="416" cy="40" r="7" />
      </svg>
      {label ? <span>{label}</span> : null}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="page-intro shell">
      <div className="page-intro__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
      <PathLine />
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="closing-cta shell">
      <div>
        <p className="eyebrow">Dein nächster Schritt</p>
        <h2>Du musst deinen Weg nicht allein finden.</h2>
      </div>
      <div>
        <p>
          Erzähl mir kurz, wobei du Unterstützung brauchst. Wir schauen gemeinsam,
          was jetzt wirklich weiterhilft.
        </p>
        <Link className="button button--light" href="/kontakt">Kontakt aufnehmen</Link>
      </div>
    </section>
  );
}
