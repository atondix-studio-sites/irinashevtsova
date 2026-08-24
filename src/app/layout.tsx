import type { Metadata } from "next";
import { Courgette, Open_Sans } from "next/font/google";
import { MotionController } from "@/components/motion-controller";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

const courgette = Courgette({ variable: "--font-courgette", subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://irinashevtsova.de"),
  title: { default: "Irina Shevtsova – Deine Wegbegleiterin", template: "%s – Irina Shevtsova" },
  description: "Mit Erfahrung, Herz und Offenheit begleite ich Menschen durch Sprachkurse, Beratung – und Reisen, die verbinden.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${courgette.variable} ${openSans.variable}`}>
      <body>
        <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
        <SiteHeader />
        <main id="inhalt">{children}</main>
        <SiteFooter />
        <MotionController />
      </body>
    </html>
  );
}
