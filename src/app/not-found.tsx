"use client";

/* 404 page — layout.tsx provides <html>/<body> and WallpaperEngine */
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function NotFound() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <div className="fixed inset-0 z-[1] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          {/* terminal-style error card */}
          <div className="glass-card p-8 md:p-12 text-left font-mono text-sm">
            <div className="flex items-center gap-2 mb-6 text-[var(--color-text-muted)]">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>terminal</span>
              <span className="text-xs">jalep@corporacao ~ $</span>
            </div>

            {/* 404 with glitch effect */}
            <div className={`mb-6 ${glitch ? "translate-x-[2px] skew-x-[-1deg]" : ""} transition-transform`}>
              <span className="font-heading text-[clamp(80px,18vw,160px)] font-black leading-none text-[var(--color-primary)]" style={{
                textShadow: glitch
                  ? "3px 0 var(--color-red), -3px 0 var(--color-cyan)"
                  : "0 0 40px rgba(130,177,255,0.3)",
              }}>
                404
              </span>
            </div>

            {/* kernel panic style message */}
            <div className="space-y-2 mb-8 text-xs">
              <p className="text-[var(--color-red)]">kernel: page not found in VMM</p>
              <p className="text-[var(--color-amber)]">jalep-lab: requested resource does not exist at this address</p>
              <p className="text-[var(--color-text-sec)]">
                <span className="text-[var(--color-green)]">suggestion</span>: the page may have been moved, deleted, or never existed
              </p>
              <p className="text-[var(--color-text-muted)] mt-4">
                ─────────────────────────────────
              </p>
              <p className="text-[var(--color-text-sec)]">
                <span className="text-[var(--color-cyan)]">jalep@corp</span>
                <span className="text-[var(--color-text-muted)]">:</span>
                <span className="text-[var(--color-primary)]">~</span>
                <span className="text-[var(--color-text-muted)]">$ </span>
                <span className="typewriter-cursor">cd /home</span>
              </p>
            </div>

            {/* action buttons */}
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>home</span>
                Voltar ao Início
              </Link>
              <Link href="/servicos" className="btn-ghost">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>build</span>
                Serviços
              </Link>
            </div>

            {/* branding + theme toggle */}
            <div className="mt-8 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
              <span className="text-[0.6rem] text-[var(--color-text-muted)]">JALEP Corporação · Assistência Técnica</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* scan line animation */}
      <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden opacity-[0.03]">
        <div className="absolute left-0 right-0 h-[1px] bg-[var(--color-primary)]" style={{
          animation: "scanline 4s linear infinite",
        }} />
      </div>

      <style>{`
        @keyframes scanline {
          0% { top: -1px; }
          100% { top: 100%; }
        }
        .typewriter-cursor {
          display: inline-block;
          animation: blink 0.8s step-end infinite;
          color: var(--color-primary);
          font-weight: bold;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
