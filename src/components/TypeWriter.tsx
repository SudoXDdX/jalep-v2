"use client";

import { useState, useEffect } from "react";

/** TypeWriter component props */
interface TypeWriterProps {
  text: string;
  speed?: number;
}

/**
 * Typewriter text animation that types out text character by
 * character with a blinking cursor.
 */
export default function TypeWriter({ text, speed = 50 }: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((d) => d + text[index]);
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((v) => !v);
    }, 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span
      className="font-mono"
      style={{ color: "var(--color-text)", display: "inline" }}
      aria-label={text}
    >
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "0.6em",
          height: "1.1em",
          marginLeft: "0.05em",
          verticalAlign: "text-bottom",
          background: showCursor ? "var(--color-primary)" : "transparent",
          transition: "background 0.1s",
        }}
      />
    </span>
  );
}
