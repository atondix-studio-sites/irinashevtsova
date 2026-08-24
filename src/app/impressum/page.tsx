import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Impressum" };

export default function ImprintPage() {
  return <LegalPage slug="impressum" />;
}
