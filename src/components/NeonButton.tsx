"use client";

import type { ReactNode } from "react";

/** Neon button variant */
type NeonVariant = "primary" | "cyan" | "violet" | "green";

/** NeonButton component props */
interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: NeonVariant;
}

/** Maps variant to CSS color variable */
const variantMap: Record<NeonVariant, string> = {
  primary: "var(--color-primary)",
  cyan: "var(--color-cyan)",
  violet: "var(--color-violet)",
  green: "var(--color-green)",
};

/**
 * Neon glow button with multi-layer box-shadow glow,
 * hover intensify effect, and optional pulse animation.
 */
export default function NeonButton({ children, onClick, variant = "primary" }: NeonButtonProps) {
  const color = variantMap[variant];

  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        padding: "0.65rem 1.5rem",
        border: `1px solid ${color}`,
        borderRadius: "0.5rem",
        background: "transparent",
        color,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "0.95rem",
        transition: "box-shadow 0.3s ease, text-shadow 0.3s ease, background 0.3s ease",
        boxShadow: `0 0 5px color-mix(in srgb, ${color} 30%, transparent),
                   0 0 15px color-mix(in srgb, ${color} 15%, transparent)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 10px color-mix(in srgb, ${color} 50%, transparent),
          0 0 30px color-mix(in srgb, ${color} 30%, transparent),
          0 0 60px color-mix(in srgb, ${color} 15%, transparent)`;
        e.currentTarget.style.background = `color-mix(in srgb, ${color} 10%, transparent)`;
        e.currentTarget.style.textShadow = `0 0 8px ${color}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 5px color-mix(in srgb, ${color} 30%, transparent),
          0 0 15px color-mix(in srgb, ${color} 15%, transparent)`;
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.textShadow = "none";
      }}
    >
      {children}
    </button>
  );
}
