"use client";

import { useEffect, useRef, useCallback } from "react";

/** Confetti component props */
interface ConfettiProps {
  active: boolean;
}

const COLORS = ["var(--color-primary)", "var(--color-cyan)", "var(--color-violet)", "var(--color-green)", "var(--color-amber)", "var(--color-red)"];

/**
 * Confetti burst effect that creates 50+ particles with
 * random colors, rotation, and gravity when active.
 */
export default function Confetti({ active }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const particlesRef = useRef<Array<{
    x: number; y: number; vx: number; vy: number;
    color: string; rot: number; rotV: number; size: number; life: number;
  >>>([]);

  const spawn = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const count = 60;
    particlesRef.current = Array.from({ length: count }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: -Math.random() * 12 - 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 15,
      size: 4 + Math.random() * 6,
      life: 1,
    }));
  }, []);

  useEffect(() => {
    if (!active) return;
    spawn();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = particlesRef.current;

      for (const p of ps) {
        p.x += p.vx;
        p.vy += 0.3;
        p.y += p.vy;
        p.rot += p.rotV;
        p.life -= 0.008;

        if (p.life <= 0) continue;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }

      if (ps.some((p) => p.life > 0)) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    frameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, spawn]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 100 }}
    />
  );
}
