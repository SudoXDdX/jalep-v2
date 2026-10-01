"use client";

import { useState, useRef } from "react";
import type { ReactNode } from "react";

/** HologramCard component props */
interface HologramCardProps {
  children: ReactNode;
}

/**
 * 3D holographic card with mouse-follow tilt effect
 * and shimmer gradient overlay.
 */
export default function HologramCard({ children }: HologramCardProps) {
  const [transform, setTransform] = useState("perspective(600px) rotateX(0deg) rotateY(0deg)");
  const [shimmerPos, setShimmerPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTransform(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setShimmerPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(600px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
        borderRadius: "1rem",
        overflow: "hidden",
        border: "1px solid var(--color-primary-border)",
        background: "var(--color-card)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${shimmerPos.x}% ${shimmerPos.y}%, rgba(0,212,255,0.15), transparent 60%)`,
          pointerEvents: "none",
          transition: "background 0.1s ease",
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
    </div>
  );
}
