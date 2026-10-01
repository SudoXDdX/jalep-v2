"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/** Carousel component props */
interface CarouselProps {
  items: ReactNode[];
}

/**
 * Image/content carousel with prev/next buttons and dot indicators.
 * Uses transform translateX for sliding animation.
 */
export default function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const goPrev = () => setCurrent((c) => (c - 1 + total) % total);
  const goNext = () => setCurrent((c) => (c + 1) % total);

  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: "0.75rem" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.4s ease",
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {items.map((item, i) => (
          <div key={i} style={{ minWidth: "100%", flexShrink: 0 }}>
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={goPrev}
        aria-label="Previous"
        style={{
          position: "absolute", left: "0.5rem", top: "50%", transform: "translateY(-50%)",
          background: "var(--color-card)", border: "1px solid var(--color-border)",
          color: "var(--color-text)", borderRadius: "50%", width: "2rem", height: "2rem",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        ‹
      </button>
      <button
        onClick={goNext}
        aria-label="Next"
        style={{
          position: "absolute", right: "0.5rem", top: "50%", transform: "translateY(-50%)",
          background: "var(--color-card)", border: "1px solid var(--color-border)",
          color: "var(--color-text)", borderRadius: "50%", width: "2rem", height: "2rem",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        ›
      </button>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", padding: "0.75rem" }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: "0.5rem", height: "0.5rem", borderRadius: "50%",
              background: i === current ? "var(--color-primary)" : "var(--color-border)",
              border: "none", cursor: "pointer", transition: "background 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
