"use client";

import Link from "next/link";
import { useRef } from "react";

const navigation = [
  ["Aktuell", "/aktuell"],
  ["Kontakt", "/kontakt"],
  ["Leistungen", "/leistungen"],
  ["Über mich", "/ueber-mich"],
] as const;

export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <details className="mobile-nav" ref={detailsRef}>
      <summary aria-label="Navigation umschalten"><span /><span /><span /></summary>
      <nav aria-label="Mobile Navigation">
        {navigation.map(([label, href]) => (
          <Link href={href} key={href} onClick={() => detailsRef.current?.removeAttribute("open")}>{label}</Link>
        ))}
      </nav>
    </details>
  );
}
