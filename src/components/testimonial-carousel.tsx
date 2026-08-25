"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type Testimonial = {
  name: string;
  image: string;
  paragraphs: readonly string[];
};

export function TestimonialCarousel({ items }: { items: readonly Testimonial[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const move = useCallback((offset: number) => {
    setActive((current) => (current + offset + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => move(1), 7000);
    return () => window.clearInterval(timer);
  }, [move, paused]);

  return (
    <div
      className="testimonial-carousel"
      aria-roledescription="Karussell"
      aria-label="Erfahrungsberichte"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {/* All slides stay stacked so the card is as tall as its own content
          instead of a hard-coded height, and changing slide can cross-fade. */}
      <div className="testimonial-stack" aria-live="polite">
        {items.map((item, index) => (
          <article key={item.name} data-active={index === active} aria-hidden={index !== active} inert={index !== active}>
            <header>
              <Image src={`/media/${item.image}`} alt="" width={64} height={64} />
              <strong>{item.name}</strong>
            </header>
            <div className="testimonial-copy">
              {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        ))}
      </div>
      <button className="carousel-arrow carousel-arrow--previous" type="button" onClick={() => move(-1)} aria-label="Vorheriger Erfahrungsbericht">❮</button>
      <button className="carousel-arrow carousel-arrow--next" type="button" onClick={() => move(1)} aria-label="Nächster Erfahrungsbericht">❯</button>
      <div className="carousel-dots" aria-label="Erfahrungsbericht auswählen">
        {items.map((entry, index) => (
          <button
            key={entry.name}
            type="button"
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Erfahrungsbericht ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
