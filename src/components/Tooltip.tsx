"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/** Tooltip component props */
interface TooltipProps {
  content: string;
  children: ReactNode;
}

/**
 * Hover tooltip that appears above the trigger element
 * with fade-in transition and glass-card styling.
 */
export default function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <div
        className="glass-card"
        style={{
          position: "absolute",
          bottom: "calc(100% + 0.5rem)",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "0.4rem 0.75rem",
          borderRadius: "0.5rem",
          border: "1px solid var(--color-border)",
          color: "var(--color-text)",
          fontSize: "0.8rem",
          whiteSpace: "nowrap",
          opacity: visible ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.2s ease",
          zIndex: 30,
        }}
      >
        {content}
      </div>
    </div>
  );
}
