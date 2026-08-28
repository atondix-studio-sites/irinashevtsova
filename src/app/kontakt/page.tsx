import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero, SocialLinks } from "@/components/site-shell";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage() {
  return <>
    <PageHero title="Kontakt" subtitle="Irina Shevtsova – Brückenbauerin zwischen Kulturen" image="/media/176-whatsapp-bild-2025-04-19-um-12-31-01_5df657b9.jpg" focalPoint="43% 35%" />
    <ContactForm />
    <section className="social-contact tone"><h2 data-reveal="fade-up">Oder schreibe mir über Social Media</h2><SocialLinks /></section>
  </>;
}
