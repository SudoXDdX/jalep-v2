"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

export default function SobrePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[720px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">sobre</p>
            <h1 className="section-title mb-4">Sobre a JALEP</h1>
          </ScrollReveal>

          {/* Main about card */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 mb-8">
              <p className="text-sm text-[var(--color-text-sec)] leading-relaxed mb-6">
                A JALEP Corporação é uma iniciativa de assistência técnica profissional, criada como trabalho escolar do {site.turma} em {site.year}. Nosso objetivo é demonstrar que reparo de eletrônicos segue um processo rigoroso — não é arte, é ciência.
              </p>
              <p className="text-sm text-[var(--color-text-sec)] leading-relaxed mb-6">
                Cada aparelho que chega ao nosso laboratório passa por um protocolo: diagnóstico preciso com equipamento profissional, reparo executado com peças de qualidade, e validação completa antes da entrega. Zero improviso, zero achismo, zero gambiarra.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="chip">Diagnóstico</span>
                <span className="chip">Reparo</span>
                <span className="chip">Validação</span>
                <span className="chip">Entrega</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={150}>
            <div className="quote-card mb-8">
              <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 32 }}>format_quote</span>
              <p className="font-heading font-bold text-lg text-[var(--color-text)] leading-relaxed mb-4">{site.manifesto.quote}</p>
              <p className="font-mono text-xs text-[var(--color-primary)]">— {site.manifesto.author}</p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={200}>
            <div className="glass-card p-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                {site.specs.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <span className="material-symbols-outlined icon-primary mb-1" style={{ fontSize: 20 }}>{metric.icon}</span>
                    <div className="font-heading font-bold text-2xl text-[var(--color-text)]">
                      {metric.value}{metric.suffix || ""}
                    </div>
                    <div className="font-mono text-xs text-[var(--color-text-muted)]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* School info */}
          <ScrollReveal delay={250}>
            <div className="neon-card p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined icon-primary" style={{ fontSize: 24 }}>school</span>
                <h3 className="font-heading font-bold text-base text-[var(--color-text)]">Trabalho de Escola</h3>
              </div>
              <div className="space-y-2 text-sm text-[var(--color-text-sec)]">
                <p><span className="text-[var(--color-primary)] font-mono text-xs">turma:</span> {site.turma}</p>
                <p><span className="text-[var(--color-primary)] font-mono text-xs">ano:</span> {site.year}</p>
                <p><span className="text-[var(--color-primary)] font-mono text-xs">tipo:</span> Assistência Técnica Profissional</p>
                <p><span className="text-[var(--color-primary)] font-mono text-xs">tech:</span> {site.footer.tech.join(", ")}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/servicos" className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>build</span>
                Ver Serviços
              </Link>
              <Link href="/lab" className="btn-ghost">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>science</span>
                Laboratório
              </Link>
              <Link href="/" className="btn-ghost">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>home</span>
                Início
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
