"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const services = [
  { name: "Website JALEP", icon: "language", status: "Operacional", uptime: 99.98, color: "var(--color-green)" },
  { name: "Lab API", icon: "science", status: "Operacional", uptime: 99.95, color: "var(--color-green)" },
  { name: "Diagnóstico Engine", icon: "troubleshoot", status: "Operacional", uptime: 99.90, color: "var(--color-green)" },
  { name: "Sistema de Protocolo", icon: "assignment", status: "Operacional", uptime: 99.97, color: "var(--color-green)" },
  { name: "Formulário de Contato", icon: "mail", status: "Operacional", uptime: 100, color: "var(--color-green)" },
  { name: "CDN Estático", icon: "cloud_done", status: "Operacional", uptime: 99.99, color: "var(--color-green)" },
  { name: "JalepOS Runtime", icon: "terminal", status: "Operacional", uptime: 98.50, color: "var(--color-green)" },
  { name: "Banco de Dados Local", icon: "storage", status: "Operacional", uptime: 99.85, color: "var(--color-green)" },
];

export default function StatusPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[720px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">status</p>
            <h1 className="section-title mb-4">Status do Sistema</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-4">
              Monitoramento em tempo real de todos os serviços JALEP. Todos os sistemas operacionais — verde é sinal de que está tudo certo.
            </p>
          </ScrollReveal>

          {/* Overall status banner */}
          <ScrollReveal delay={50}>
            <div className="neon-card p-6 mb-10 flex items-center gap-4" style={{ boxShadow: "0 0 20px -5px var(--color-green)" }}>
              <div className="w-4 h-4 rounded-full bg-[var(--color-green)] animate-pulse flex-shrink-0" />
              <div>
                <h2 className="font-heading font-bold text-lg text-[var(--color-text)]">Todos os Sistemas Operacionais</h2>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">Última verificação: há 30 segundos · Uptime médio: 99.77%</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Service list */}
          <div className="space-y-3 mb-12">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.name} delay={i * 60}>
                <div className="glass-card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: svc.color }} />
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 20 }}>{svc.icon}</span>
                      <span className="font-heading font-bold text-sm text-[var(--color-text)]">{svc.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="chip text-[0.6rem]" style={{ color: svc.color, borderColor: svc.color }}>{svc.status}</span>
                    </div>
                  </div>
                  {/* Uptime bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${svc.uptime}%`,
                          background: `linear-gradient(90deg, var(--color-green), var(--color-cyan))`,
                        }}
                      />
                    </div>
                    <span className="font-mono text-xs text-[var(--color-text-muted)] w-16 text-right">{svc.uptime}%</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Uptime history (simulated) */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 mb-12">
              <p className="section-kicker mb-4">histórico</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">Uptime dos Últimos 30 Dias</h3>
              <div className="flex gap-1 flex-wrap">
                {Array.from({ length: 30 }, (_, i) => {
                  const isUp = Math.random() > 0.03;
                  return (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-sm"
                      style={{
                        backgroundColor: isUp ? "var(--color-green)" : "var(--color-red)",
                        opacity: isUp ? 0.7 + Math.random() * 0.3 : 1,
                      }}
                      title={`Dia ${i + 1}: ${isUp ? "Operacional" : "Incidente"}`}
                    />
                  );
                })}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm bg-[var(--color-green)]" />
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">Operacional</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm bg-[var(--color-red)]" />
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">Incidente</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Response time */}
          <ScrollReveal delay={150}>
            <div className="glass-card p-8 mb-12">
              <p className="section-kicker mb-4">performance</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">Tempo de Resposta Médio</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { label: "Website", value: "45ms", icon: "language" },
                  { label: "API", value: "120ms", icon: "api" },
                  { label: "CDN", value: "12ms", icon: "cloud_done" },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <span className="material-symbols-outlined icon-primary mb-2 block" style={{ fontSize: 24 }}>{m.icon}</span>
                    <p className="font-heading font-bold text-2xl text-[var(--color-text)]">{m.value}</p>
                    <p className="font-mono text-xs text-[var(--color-text-muted)]">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Info note */}
          <ScrollReveal delay={200}>
            <div className="neon-card p-6 text-center">
              <span className="material-symbols-outlined icon-primary mb-3 block" style={{ fontSize: 32 }}>info</span>
              <p className="text-sm text-[var(--color-text-sec)]">
                Os dados de status são simulados para demonstração. Em produção, integraria com um serviço real de monitoramento como UptimeRobot ou BetterStack.
              </p>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/docs" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>menu_book</span>
                  Documentação
                </Link>
                <Link href="/" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>home</span>
                  Início
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
