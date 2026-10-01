"use client";

import { useMemo } from "react";

/** CircuitBoard component props */
interface CircuitBoardProps {
  width: number;
  height: number;
}

/**
 * SVG circuit board pattern with random traces,
 * nodes, and IC chips. Animated with CSS stroke-dasharray.
 */
export default function CircuitBoard({ width, height }: CircuitBoardProps) {
  const seed = useMemo(() => {
    const traces: string[] = [];
    const nodes: { x: number; y: number }[] = [];
    const chips: { x: number; y: number; w: number; h: number }[] = [];

    // Generate nodes
    for (let i = 0; i < 30; i++) {
      nodes.push({ x: 20 + Math.random() * (width - 40), y: 20 + Math.random() * (height - 40) });
    }

    // Generate traces connecting random nodes
    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i];
      const b = nodes[i + 1];
      const midX = a.x + (b.x - a.x) * 0.5;
      traces.push(`M${a.x},${a.y} H${midX} V${b.y} H${b.x}`);
    }

    // Generate IC chips
    for (let i = 0; i < 4; i++) {
      chips.push({
        x: 40 + Math.random() * (width - 100),
        y: 40 + Math.random() * (height - 80),
        w: 30 + Math.random() * 30,
        h: 15 + Math.random() * 15,
      });
    }

    return { traces, nodes, chips };
  }, [width, height]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      style={{ display: "block" }}
    >
      <style>{`
        @keyframes circuit-draw {
          to { stroke-dashoffset: 0; }
        }
        .circuit-trace {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: circuit-draw 3s ease forwards;
        }
      `}</style>

      {seed.traces.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="var(--color-cyan)"
          strokeWidth="1.5"
          opacity={0.4}
          className="circuit-trace"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}

      {seed.nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={3}
          fill="var(--color-primary)"
          opacity={0.7}
        />
      ))}

      {seed.chips.map((c, i) => (
        <g key={i}>
          <rect
            x={c.x} y={c.y} width={c.w} height={c.h}
            rx={2} fill="var(--color-card)" stroke="var(--color-violet)"
            strokeWidth={1} opacity={0.6}
          />
          {Array.from({ length: 4 }, (_, p) => (
            <circle
              key={p}
              cx={c.x + (p + 1) * (c.w / 5)}
              cy={c.y}
              r={1.5}
              fill="var(--color-violet)"
              opacity={0.8}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
