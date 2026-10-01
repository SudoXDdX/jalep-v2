"use client";

import { useState, useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

export default function LabPage() {
  const [scanY, setScanY] = useState(0);

  useEffect(() => {
    let frame: number;
    let t = 0;
    function animate() {
      t += 0.005;
      setScanY((Math.sin(t) * 0.5 + 0.5) * 100);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">laboratório</p>
            <h1 className="section-title mb-4">{site.about.title}</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              A JALEP segue um protocolo organizado. Cada aparelho passa por diagnóstico e reparo em etapas claras, sem atalhos e sem improvisos.
            </p>
          </ScrollReveal>

          {/* Lab visualization */}
          <ScrollReveal>
            <div className="lab-card min-h-[320px] mb-10 overflow-hidden relative">
              {/* Grid background */}
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }} />
              {/* Scan line */}
              <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-60" style={{ top: `${scanY}%` }} />
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center min-h-[320px] text-center p-8">
                <span className="material-symbols-outlined icon-primary mb-4" style={{ fontSize: 56 }}>science</span>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-text)] mb-2">{site.about.subtitle}</h2>
                <p className="font-mono text-xs text-[var(--color-primary)] mb-1">scan: active</p>
                <p className="font-mono text-[0.6rem] text-[var(--color-text-muted)]">status: operational · uptime: 100%</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature cards - expanded */}
          <div className="space-y-4 mb-12">
            {site.about.features.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 80}>
                <div className="neon-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary-dim)] flex items-center justify-center">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 22 }}>{feat.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-2">{feat.title}</h3>
                      <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Protocol steps */}
          <ScrollReveal>
            <div className="glass-card p-8">
              <p className="section-kicker mb-4">protocolo</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">Fluxo de Reparo</h3>
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { icon: "search", label: "Diagnóstico", desc: "Identificar a falha" },
                  { icon: "build", label: "Reparo", desc: "Consertar com precisão" },
                  { icon: "fact_check", label: "Teste", desc: "Validar a solução" },
                  { icon: "verified", label: "Entrega", desc: "Devolvido como novo" },
                ].map((step, i) => (
                  <div key={step.label} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary-dim)] flex items-center justify-center mx-auto mb-3 border border-[var(--color-primary-border)]">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 20 }}>{step.icon}</span>
                    </div>
                    <p className="font-mono text-xs text-[var(--color-primary)] mb-1">0{i + 1}</p>
                    <p className="font-heading font-bold text-sm text-[var(--color-text)]">{step.label}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Back link */}
          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <Link href="/" className="btn-ghost">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
                Voltar ao Início
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
