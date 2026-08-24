import Image from "next/image";
import Link from "next/link";
import { MobileNavigation } from "@/components/mobile-navigation";

const navigation = [
  ["Aktuell", "/aktuell"],
  ["Kontakt", "/kontakt"],
  ["Leistungen", "/leistungen"],
  ["Über mich", "/ueber-mich"],
] as const;

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 22v-8.7h2.9l.4-3.4h-3.3V7.7c0-1 .3-1.7 1.7-1.7h1.8V3a24 24 0 0 0-2.6-.1c-2.6 0-4.4 1.6-4.4 4.5v2.5H7.3v3.4h2.9V22h3.5Z" /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2.2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A7.9 7.9 0 1 1 12 19.8Zm4.4-5.9c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-1.5-.7-2.5-1.4-3.5-3.1-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4H8.3c-.2 0-.5.1-.7.4-.2.2-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .2-1.1 0-.1-.2-.2-.4-.3l-1.3-.6Z" /></svg>;
}

function TelegramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.5 3.4-3.2 16.1c-.2 1.1-.9 1.4-1.8.9l-4.9-3.6-2.4 2.3c-.2.3-.5.5-1 .5l.4-5 9.1-8.3c.4-.4-.1-.6-.6-.2L5.8 13.2.9 11.7c-1.1-.3-1.1-1.1.2-1.6l19-7.3c.9-.4 1.7.2 1.4.6Z" /></svg>;
}

export function SocialLinks({ colored = false }: { colored?: boolean }) {
  return (
    <div className={`social-links${colored ? " social-links--colored" : ""}`}>
      <a href="https://www.facebook.com/irina.shevtsova.589" aria-label="Facebook"><FacebookIcon /></a>
      <a href="https://wa.me/+491791070525" aria-label="WhatsApp"><WhatsAppIcon /></a>
      <a href="https://t.me/Shetsova_Irina" aria-label="Telegram"><TelegramIcon /></a>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wide site-header__inner">
        <Link className="site-logo" href="/" aria-label="Irina Shevtsova">
          <Image src="/media/151-logo-2.png" alt="Irina Shevtsova" width={512} height={512} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Navigation">
          {navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <SocialLinks />
        <MobileNavigation />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wide site-footer__inner">
        <strong className="footer-name">Irina Shevtsova</strong>
        <div className="site-footer__center">
          <nav><Link href="/datenschutzerklaerung">Datenschutzerklärung</Link><Link href="/impressum">Impressum</Link></nav>
          <p>© irinashevtsova.de – 2025</p>
          <a className="creator" href="https://atondix.de">Erstellt durch atondix – Ihr Partner für Marketing, Design und IT</a>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}

export function ClosingCta() {
  return (
    <section className="closing-cta">
      <div className="content-width">
        <h2>Bist du bereit mit mir deinen Weg zu entdecken?</h2>
        <p>Mein Angebot verbindet Sprachförderung, Alltagsbegleitung und kraftvolle Reisen – für ein selbstbestimmtes Leben mit neuen Perspektiven.</p>
        <Link className="button" href="/kontakt">Kontakt</Link>
      </div>
    </section>
  );
}

export function PageHero({ title, subtitle, image, focalPoint = "50% 50%" }: { title: string; subtitle: string; image: string; focalPoint?: string }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(rgb(50 36 33 / .5), rgb(50 36 33 / .5)), url(${image})`, backgroundPosition: focalPoint }}>
      <div><h1>{title}</h1><p>{subtitle}</p></div>
    </section>
  );
}
