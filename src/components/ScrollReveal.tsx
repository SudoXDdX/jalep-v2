"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealVariant = "default" | "left" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode; className?: string; delay?: number; variant?: ScrollRevealVariant;
}

const CLASS_MAP: Record<ScrollRevealVariant, string> = {
  default: "scroll-reveal", left: "scroll-reveal-left", scale: "scroll-reveal-scale", blur: "scroll-reveal-blur",
};

export function ScrollReveal({ children, className = "", delay = 0, variant = "default" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const variantClass = CLASS_MAP[variant] || "scroll-reveal";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Check perf mode
    const perfMode = document.documentElement.getAttribute("data-perf");
    if (perfMode === "low") { el.classList.add("revealed"); return; }
    if (!("IntersectionObserver" in window)) { el.classList.add("revealed"); return; }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        /* JALEP 3.0: stagger CSS-driven — o k-ésimo item do lote recebe
           --reveal-index = k; o delay vive no CSS (transition-delay), não em
           setTimeout. prefers-reduced-motion zera o delay no CSS. */
        let k = 0;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.setProperty("--reveal-index", String(k++));
            if (delay > 0) { setTimeout(() => target.classList.add("revealed"), delay); }
            else { target.classList.add("revealed"); }
            obs.unobserve(target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, variant]);

  return <div ref={ref} className={`${variantClass} ${className}`}>{children}</div>;
}
