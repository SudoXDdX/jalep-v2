"use client";

import { useState } from "react";

/** Dock item data */
interface DockItem {
  icon: string;
  label: string;
  href: string;
}

/** DockBar component props */
interface DockBarProps {
  items: DockItem[];
}

/**
 * macOS-style dock bar with magnification effect on hover
 * (scale up neighbors) and glass background.
 */
export default function DockBar({ items }: DockBarProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const getScale = (index: number) => {
    if (hoverIndex === null) return 1;
    const distance = Math.abs(index - hoverIndex);
    if (distance === 0) return 1.5;
    if (distance === 1) return 1.25;
    if (distance === 2) return 1.1;
    return 1;
  };

  return (
    <div
      className="glass-card"
      style={{
        display: "inline-flex",
        alignItems: "flex-end",
        gap: "0.35rem",
        padding: "0.5rem 1rem",
        borderRadius: "1.25rem",
        border: "1px solid var(--color-border)",
      }}
    >
      {items.map((item, index) => {
        const scale = getScale(index);
        return (
          <a
            key={index}
            href={item.href}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              transform: `scale(${scale})`,
              transformOrigin: "bottom center",
              transition: "transform 0.2s ease",
              padding: "0.25rem 0.15rem",
            }}
            title={item.label}
          >
            <span
              className="material-symbols-rounded icon-primary"
              style={{
                fontSize: "1.75rem",
                lineHeight: 1,
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                color: "var(--color-text-muted)",
                marginTop: "0.15rem",
                whiteSpace: "nowrap",
                opacity: scale > 1 ? 1 : 0.7,
                transition: "opacity 0.2s",
              }}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
