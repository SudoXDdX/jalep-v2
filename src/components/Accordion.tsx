"use client";

import { useState } from "react";

/** Accordion item data */
interface AccordionItem {
  title: string;
  content: string;
}

/** Accordion component props */
interface AccordionProps {
  items: AccordionItem[];
}

/**
 * Accordion component with open/close animation.
 * Tracks the currently open index and uses max-height for smooth transitions.
 */
export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="glass-card"
            style={{
              overflow: "hidden",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border)",
            }}
          >
            <button
              onClick={() => toggle(index)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 1.25rem",
                background: "none",
                border: "none",
                color: "var(--color-text)",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              <span className="font-heading">{item.title}</span>
              <span
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  fontSize: "1.25rem",
                  color: "var(--color-primary)",
                }}
              >
                ▾
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                transition: "max-height 0.4s ease, padding 0.3s ease",
                padding: isOpen ? "0 1.25rem 1rem" : "0 1.25rem",
                color: "var(--color-text-sec)",
                lineHeight: 1.6,
              }}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
