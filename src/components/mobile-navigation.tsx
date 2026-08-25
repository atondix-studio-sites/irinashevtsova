"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigation = [
  ["Aktuell", "/aktuell"],
  ["Kontakt", "/kontakt"],
  ["Leistungen", "/leistungen"],
  ["Über mich", "/ueber-mich"],
] as const;

export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    // The open menu is a full-screen overlay, so the page behind it must not scroll.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        detailsRef.current?.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <details
      className="mobile-nav"
      ref={detailsRef}
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary aria-label="Navigation umschalten"><span /><span /><span /></summary>
      <nav aria-label="Mobile Navigation">
        {navigation.map(([label, href]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </nav>
    </details>
  );
}
