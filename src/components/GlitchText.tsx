"use client";

import { useEffect, useState, useRef } from "react";

/** GlitchText component props */
interface GlitchTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
}

/**
 * Glitch effect text with random RGB split and skew animation.
 * Uses useEffect with setInterval for periodic glitch bursts.
 */
export default function GlitchText({ text, as: Tag = "h2" }: GlitchTextProps) {
  const [glitch, setGlitch] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const baseStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    color: "var(--color-text)",
    fontFamily: "inherit",
  };

  const glitchBefore: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: glitch ? `${(Math.random() - 0.5) * 4}px` : 0,
    color: "var(--color-cyan)",
    clipPath: `inset(${Math.random() * 80}% 0 ${Math.random() * 80}% 0)`,
    transform: glitch ? `skewX(${(Math.random() - 0.5) * 10}deg)` : "none",
  };

  const glitchAfter: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: glitch ? `${(Math.random() - 0.5) * 4}px` : 0,
    color: "var(--color-red)",
    clipPath: `inset(${Math.random() * 80}% 0 ${Math.random() * 80}% 0)`,
    transform: glitch ? `skewX(${(Math.random() - 0.5) * 10}deg)` : "none",
  };

  return (
    <Tag className="font-heading" style={baseStyle} data-text={text}>
      <span aria-hidden="true" style={glitchBefore}>{text}</span>
      {text}
      <span aria-hidden="true" style={glitchAfter}>{text}</span>
    </Tag>
  );
}
