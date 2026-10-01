"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/** Tab item data */
interface TabItem {
  label: string;
  content: ReactNode;
}

/** Tabs component props */
interface TabsProps {
  tabs: TabItem[];
}

/**
 * Tab switcher component with primary color underline
 * and smooth content transition.
 */
export default function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ width: "100%" }}>
      <div
        role="tablist"
        style={{
          display: "flex",
          borderBottom: "1px solid var(--color-border)",
          gap: "0.25rem",
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "0.75rem 1.5rem",
              background: "none",
              border: "none",
              borderBottom: activeIndex === index
                ? "2px solid var(--color-primary)"
                : "2px solid transparent",
              color: activeIndex === index
                ? "var(--color-primary)"
                : "var(--color-text-muted)",
              cursor: "pointer",
              fontWeight: activeIndex === index ? 600 : 400,
              transition: "color 0.2s, border-color 0.2s",
              fontSize: "0.95rem",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        style={{
          padding: "1.25rem 0",
          opacity: 1,
          transition: "opacity 0.3s ease",
          color: "var(--color-text-sec)",
        }}
      >
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}
