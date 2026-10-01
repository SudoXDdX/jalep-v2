"use client";

import type { ReactNode } from "react";

/** Marquee component props */
interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
}

/**
 * Infinite scrolling marquee text.
 * Duplicates content for seamless loop using CSS animation.
 */
export default function Marquee({ children, speed = 30, direction = "left" }: MarqueeProps) {
  const animDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: animDirection,
        }}
      >
        <div style={{ display: "flex", paddingRight: "2rem" }}>{children}</div>
        <div style={{ display: "flex", paddingRight: "2rem" }}>{children}</div>
      </div>
    </div>
  );
}
