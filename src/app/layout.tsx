import type { Metadata } from "next";
import { Afacad_Flux, Instrument_Sans } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

const display = Afacad_Flux({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irinashevtsova.de"),
  title: {
    default: "Irina Shevtsova – Wegbegleiterin zwischen Kulturen",
    template: "%s | Irina Shevtsova",
  },
  description:
    "Sprachförderung, Alltagsbegleitung, Übersetzungen und Begegnung in Fürth – persönlich, herzlich und auf Augenhöhe.",
  openGraph: {
    locale: "de_DE",
    type: "website",
    title: "Irina Shevtsova – Wegbegleiterin zwischen Kulturen",
    description:
      "Sprachförderung, Alltagsbegleitung und Begegnung in Fürth.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#inhalt">
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
