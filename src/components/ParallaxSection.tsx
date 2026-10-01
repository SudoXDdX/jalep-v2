"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import type { ReactNode } from "react";

/** ParallaxSection component props */
interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  bgClassName?: string;
}

/**
 * Parallax scrolling section that applies translateY transform
 * based on scroll position and the provided speed factor.
 */
export default function ParallaxSection({ children, speed = 0.3, bgClassName }: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const viewCenter = window.innerHeight / 2;
    setOffset((center - viewCenter) * speed);
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={sectionRef}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {bgClassName && (
        <div
          className={bgClassName}
          style={{
            position: "absolute",
            inset: 0,
            transform: `translateY(${offset}px)`,
            willChange: "transform",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1, transform: `translateY(${offset * 0.5}px)` }}>
        {children}
      </div>
    </div>
  );
}
