"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const apps = [
  { id: "diag", name: "Diag", icon: "troubleshoot", color: "var(--color-cyan)" },
  { id: "reparo", name: "Reparo", icon: "build", color: "var(--color-green)" },
  { id: "proto", name: "Proto", icon: "assignment", color: "var(--color-amber)" },
  { id: "config", name: "Config", icon: "settings", color: "var(--color-violet)" },
  { id: "stats", name: "Stats", icon: "bar_chart", color: "var(--color-primary)" },
  { id: "term", name: "Term", icon: "terminal", color: "var(--color-red)" },
];

export default function JaleposPage() {
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">jalepos</p>
            <h1 className="section-title mb-4">JalepOS</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Protótipo de sistema operacional web para gerenciamento do laboratório JALEP. Diagnóstico, reparos, protocolos e configuração — tudo em um só lugar.
            </p>
          </ScrollReveal>

          {/* Phone Frame / Desktop Mockup */}
          <ScrollReveal delay={100}>
            <div className="flex justify-center mb-16">
              <div
                className="relative w-full max-w-[640px] rounded-3xl overflow-hidden border-4 border-[var(--color-border)]"
                style={{ background: "var(--color-bg)", boxShadow: "0 25px 60px -15px rgba(0,0,0,0.5), 0 0 40px -10px var(--color-primary)" }}
              >
                {/* Title bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-border)]" style={{ background: "var(--color-card)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-red)]" />
                    <div className="w-3 h-3 rounded-full bg-[var(--color-amber)]" />
                    <div className="w-3 h-3 rounded-full bg-[var(--color-green)]" />
                  </div>
                  <span className="font-mono text-xs text-[var(--color-primary)]">JalepOS v0.1 — Desktop</span>
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">{time}</span>
                </div>

                {/* Desktop area */}
                <div className="relative min-h-[420px] p-6" style={{ background: "linear-gradient(135deg, var(--color-bg) 0%, color-mix(in srgb, var(--color-primary) 5%, var(--color-bg)) 100%)" }}>
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }} />

                  {/* App icons on desktop */}
                  <div className="relative z-10 grid grid-cols-6 gap-4">
                    {apps.map((app) => (
                      <button
                        key={app.id}
                        onClick={() => setOpenApp(openApp === app.id ? null : app.id)}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 hover:bg-[var(--color-primary-dim)] group"
                      >
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                          style={{ backgroundColor: `${app.color}20`, border: `1px solid ${app.color}40` }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 28, color: app.color }}>{app.icon}</span>
                        </div>
                        <span className="font-mono text-[0.65rem] text-[var(--color-text-sec)]">{app.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Open "window" */}
                  {openApp && (
                    <div className="absolute inset-4 z-20 rounded-xl overflow-hidden border border-[var(--color-border)] animate-in" style={{ background: "var(--color-card)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)" }}>
                      {/* Window title bar */}
                      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--color-border)]" style={{ background: "var(--color-bg)" }}>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined" style={{ fontSize: 16, color: apps.find(a => a.id === openApp)?.color }}>
                            {apps.find(a => a.id === openApp)?.icon}
                          </span>
                          <span className="font-mono text-xs text-[var(--color-text)]">
                            {apps.find(a => a.id === openApp)?.name} — JalepOS
                          </span>
                        </div>
                        <button onClick={() => setOpenApp(null)} className="w-6 h-6 rounded flex items-center justify-center hover:bg-[var(--color-red)] hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-[var(--color-text-muted)]" style={{ fontSize: 14 }}>close</span>
                        </button>
                      </div>
                      {/* Window content */}
                      <div className="p-6 min-h-[280px]">
                        {openApp === "diag" && (
                          <div>
                            <h4 className="font-heading font-bold text-base text-[var(--color-text)] mb-4">Diagnóstico Engine</h4>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                                <span className="font-mono text-xs text-[var(--color-text-sec)]">status</span>
                                <span className="chip text-[0.6rem]" style={{ color: "var(--color-green)", borderColor: "var(--color-green)" }}>Ativo</span>
                              </div>
                              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                                <span className="font-mono text-xs text-[var(--color-text-sec)]">filas</span>
                                <span className="font-mono text-xs text-[var(--color-primary)]">3 aparelhos</span>
                              </div>
                              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                                <span className="font-mono text-xs text-[var(--color-text-sec)]">último scan</span>
                                <span className="font-mono text-xs text-[var(--color-text-muted)]">há 2 min</span>
                              </div>
                            </div>
                          </div>
                        )}
                        {openApp === "reparo" && (
                          <div>
                            <h4 className="font-heading font-bold text-base text-[var(--color-text)] mb-4">Reparos em Andamento</h4>
                            <div className="space-y-2">
                              {["iPhone 14 — Tela", "MacBook Air — Fonte", "PS5 — Thermal"].map((r, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                                  <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] animate-pulse" />
                                  <span className="font-mono text-xs text-[var(--color-text-sec)]">{r}</span>
                                  <span className="ml-auto chip text-[0.5rem]">Em andamento</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {openApp === "proto" && (
                          <div>
                            <h4 className="font-heading font-bold text-base text-[var(--color-text)] mb-4">Protocolos</h4>
                            <div className="space-y-2">
                              {["#2025-001 — Concluído", "#2025-002 — Andamento", "#2025-003 — Diagnóstico"].map((p, i) => (
                                <div key={i} className="p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] font-mono text-xs text-[var(--color-text-sec)]">
                                  {p}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {openApp !== "diag" && openApp !== "reparo" && openApp !== "proto" && (
                          <div className="flex flex-col items-center justify-center min-h-[200px]">
                            <span className="material-symbols-outlined text-[var(--color-text-muted)] mb-3" style={{ fontSize: 48 }}>construction</span>
                            <p className="font-heading font-bold text-sm text-[var(--color-text-sec)]">Em construção</p>
                            <p className="font-mono text-xs text-[var(--color-text-muted)]">Este app ainda está em desenvolvimento</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Taskbar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--color-border)]" style={{ background: "var(--color-card)" }}>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setOpenApp(null)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--color-primary-dim)] border border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] transition-colors"
                    >
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 18 }}>grid_view</span>
                    </button>
                    {apps.map((app) => (
                      <button
                        key={app.id}
                        onClick={() => setOpenApp(openApp === app.id ? null : app.id)}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${openApp === app.id ? "bg-[var(--color-primary-dim)] border border-[var(--color-primary-border)]" : "hover:bg-[var(--color-primary-dim)]"}`}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 16, color: openApp === app.id ? app.color : "var(--color-text-muted)" }}>{app.icon}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--color-text-muted)]" style={{ fontSize: 16 }}>wifi</span>
                    <span className="material-symbols-outlined text-[var(--color-text-muted)]" style={{ fontSize: 16 }}>battery_full</span>
                    <span className="material-symbols-outlined text-[var(--color-text-muted)]" style={{ fontSize: 16 }}>volume_up</span>
                    <span className="font-mono text-xs text-[var(--color-text-sec)]">{time}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature list */}
          <ScrollReveal delay={150}>
            <div className="glass-card p-8 mb-12">
              <p className="section-kicker mb-4">funcionalidades</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">O JalepOS Vai Ter</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "dashboard", title: "Dashboard", desc: "Visão geral do laboratório em tempo real" },
                  { icon: "troubleshoot", title: "Diagnóstico Engine", desc: "Motor de diagnóstico com análise automatizada" },
                  { icon: "assignment", title: "Protocolos", desc: "Rastreamento completo de cada reparo" },
                  { icon: "inventory", title: "Inventário", desc: "Gestão de peças e componentes" },
                  { icon: "chat", title: "Comunicação", desc: "Chat interno entre membros da equipe" },
                  { icon: "analytics", title: "Analytics", desc: "Relatórios de performance e métricas" },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <span className="material-symbols-outlined icon-primary flex-shrink-0" style={{ fontSize: 20 }}>{f.icon}</span>
                    <div>
                      <p className="font-heading font-bold text-sm text-[var(--color-text)]">{f.title}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Note */}
          <ScrollReveal delay={200}>
            <div className="neon-card p-6 text-center">
              <span className="material-symbols-outlined icon-primary mb-3 block" style={{ fontSize: 32 }}>science</span>
              <p className="text-sm text-[var(--color-text-sec)]">
                JalepOS é um protótipo experimental. A versão web demonstra o conceito — a versão real seria um Electron app ou PWA com persistência local.
              </p>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/terminal" className="btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>terminal</span>
                  Terminal
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
