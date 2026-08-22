import type { Metadata } from "next";
import { PageHero, SocialLinks } from "@/components/site-shell";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage() {
  return <>
    <PageHero title="Kontakt" subtitle="Irina Shevtsova – Brückenbauerin zwischen Kulturen" image="/media/176-whatsapp-bild-2025-04-19-um-12-31-01_5df657b9.jpg" />
    <section className="content-width contact-form">
      <label>Name<input type="text" name="name" /></label>
      <label>E-Mail-Adresse<input type="email" name="email" /></label>
      <label>Telefonnummer (optional)<input type="tel" name="phone" /></label>
      <label>Betreff<input type="text" name="subject" /></label>
      <label>Deine Nachricht<textarea name="message" rows={7} /></label>
      <button className="button" type="button">Senden</button>
    </section>
    <section className="social-contact tone"><h2>Oder schreibe mir über Social Media</h2><SocialLinks colored /></section>
  </>;
}
