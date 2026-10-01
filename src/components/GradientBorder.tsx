"use client";

import type { ReactNode } from "react";

/** GradientBorder component props */
interface GradientBorderProps {
  children: ReactNode;
}

/**
 * Container with animated gradient border using
 * a conic-gradient pseudo-element that rotates continuously.
 */
export default function GradientBorder({ children }: GradientBorderProps) {
  return (
    <div style={{ position: "relative", padding: "1px", borderRadius: "1rem" }}>
      <style>{`
        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .gradient-border-bg {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: conic-gradient(
            from 0deg,
            var(--color-primary),
            var(--color-cyan),
            var(--color-violet),
            var(--color-green),
            var(--color-primary)
          );
          animation: gradient-rotate 4s linear infinite;
          z-index: -1;
        }
        .gradient-border-mask {
          position: absolute;
          inset: 1px;
          border-radius: calc(1rem - 1px);
          background: var(--color-card);
          z-index: -1;
        }
      `}</style>
      <div className="gradient-border-bg" />
      <div className="gradient-border-mask" />
      <div style={{ position: "relative", zIndex: 0, borderRadius: "calc(1rem - 1px)", padding: "1.5rem" }}>
        {children}
      </div>
    </div>
  );
}
