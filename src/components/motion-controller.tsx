"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STAGGER_STEP = 70;
const STAGGER_MAX = 280;

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || typeof IntersectionObserver === "undefined") return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) return;

    let delivered = false;
    let safetyNet = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        delivered = true;
        window.clearTimeout(safetyNet);
        const arriving = entries.filter((entry) => entry.isIntersecting);
        // Elements crossing the threshold in the same batch belong to the same
        // visual group, so they cascade instead of all firing at once.
        arriving.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        arriving.forEach((entry, index) => {
          const element = entry.target as HTMLElement;
          element.style.setProperty("--reveal-delay", `${Math.min(index * STAGGER_STEP, STAGGER_MAX)}ms`);
          element.classList.add("is-visible");
          observer.unobserve(element);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.05 },
    );

    function start() {
      // Hiding and observing must happen together. A background tab throttles
      // rAF and withholds observer callbacks, so enabling motion there would
      // leave every revealed element stuck at opacity 0 with nothing to undo it.
      document.documentElement.classList.add("motion-enabled");
      for (const element of elements) observer.observe(element);

      // The observer's first callback is the only thing that can undo the
      // hiding above. If it never arrives, show the content rather than let
      // the page stay blank: readable beats animated.
      safetyNet = window.setTimeout(() => {
        if (delivered) return;
        document.documentElement.classList.remove("motion-enabled");
        observer.disconnect();
      }, 1200);
    }

    if (document.visibilityState === "visible") {
      start();
    } else {
      document.addEventListener("visibilitychange", onVisible);
    }

    function onVisible() {
      if (document.visibilityState !== "visible") return;
      document.removeEventListener("visibilitychange", onVisible);
      start();
    }

    return () => {
      window.clearTimeout(safetyNet);
      document.removeEventListener("visibilitychange", onVisible);
      observer.disconnect();
      document.documentElement.classList.remove("motion-enabled");
      for (const element of elements) {
        element.classList.remove("is-visible");
        element.style.removeProperty("--reveal-delay");
      }
    };
  }, [pathname]);

  return null;
}
