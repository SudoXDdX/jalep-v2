"use client";

import { useState, useEffect } from "react";

/** Waveform component props */
interface WaveformProps {
  bars?: number;
  animated?: boolean;
}

/**
 * Audio waveform visualization with sine wave bars that animate.
 * Bar heights follow a sine pattern with animated phase shift.
 */
export default function Waveform({ bars = 32, animated = true }: WaveformProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!animated) return;
    let frame: number;
    const tick = () => {
      setPhase((p) => (p + 0.06) % (Math.PI * 2));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animated]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
        height: "3rem",
        padding: "0 0.5rem",
      }}
    >
      {Array.from({ length: bars }, (_, i) => {
        const t = i / bars;
        const height = 0.3 + 0.7 * Math.abs(Math.sin(t * Math.PI * 3 + phase));
        return (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${height * 100}%`,
              minHeight: "3px",
              borderRadius: "2px",
              background: `linear-gradient(to top, var(--color-primary), var(--color-cyan))`,
              opacity: 0.5 + height * 0.5,
              transition: animated ? "none" : "height 0.3s ease",
            }}
          />
        );
      })}
    </div>
  );
}
