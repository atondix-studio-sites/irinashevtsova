"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    document.documentElement.classList.add("motion-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.05 },
    );

    const frame = requestAnimationFrame(() => {
      for (const element of elements) observer.observe(element);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.documentElement.classList.remove("motion-enabled");
    };
  }, [pathname]);

  return null;
}
