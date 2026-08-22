import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

export default function PrivacyPage() {
  return <LegalPage slug="datenschutzerklaerung" lead="Informationen zur Verarbeitung personenbezogener Daten auf dieser Website." />;
}
