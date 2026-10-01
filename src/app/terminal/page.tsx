"use client";

import { useState, useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const initialLines = [
  { type: "output", text: "╔══════════════════════════════════════════════════════╗" },
  { type: "output", text: "║            JALEP Corporation — Sistema v2.0          ║" },
  { type: "output", text: "║  Assistência Técnica Profissional · Desde 2023       ║" },
  { type: "output", text: "╚══════════════════════════════════════════════════════╝" },
  { type: "output", text: "" },
  { type: "command", text: "neofetch" },
  { type: "output", text: "" },
  { type: "output", text: "  ██╗██████╗ ███╗   ███╗ █████╗ ███████╗███████╗" },
  { type: "output", text: "  ██║██╔══██╗████╗ ████║██╔══██╗██╔════╝██╔════╝" },
  { type: "output", text: "  ██║██████╔╝██╔████╔██║███████║███████╗███████╗" },
  { type: "output", text: "  ██║██╔═══╝ ██║╚██╔╝██║██╔══██║╚════██║╚════██║" },
  { type: "output", text: "  ██║██║     ██║ ╚═╝ ██║██║  ██║███████║███████║" },
  { type: "output", text: "  ╚═╝╚═╝     ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝" },
  { type: "output", text: "" },
  { type: "output", text: "  OS:       JalepOS v0.1 (Web)" },
  { type: "output", text: "  Kernel:   Next.js 16 App Router" },
  { type: "output", text: "  Shell:    jalep-sh 1.0" },
  { type: "output", text: "  UI:       React 19 + Tailwind CSS 4" },
  { type: "output", text: "  Runtime:  Node.js 22 LTS / Bun 1.x" },
  { type: "output", text: "  Uptime:   142d 7h 23m" },
  { type: "output", text: "  Reparos:  340+ concluídos" },
  { type: "output", text: "" },
  { type: "command", text: "system status" },
  { type: "output", text: "" },
  { type: "output", text: "  ✓ Website         Operacional   99.98% uptime" },
  { type: "output", text: "  ✓ Lab API         Operacional   99.95% uptime" },
  { type: "output", text: "  ✓ Diag Engine     Operacional   99.90% uptime" },
  { type: "output", text: "  ✓ Protocolo       Operacional   99.97% uptime" },
  { type: "output", text: "  ✓ CDN             Operacional   99.99% uptime" },
  { type: "output", text: "" },
  { type: "command", text: "lab queue" },
  { type: "output", text: "" },
  { type: "output", text: "  #2025-001  iPhone 14 Pro    Tela OLED      ✓ Concluído" },
  { type: "output", text: "  #2025-002  MacBook Air M2   Curto PPBUS    ◐ Em andamento" },
  { type: "output", text: "  #2025-003  PS5 Digital      Thermal paste  ◑ Diagnóstico" },
  { type: "output", text: "  #2025-004  PC Gamer RTX     Crash GPU      ○ Na fila" },
  { type: "output", text: "" },
  { type: "output", text: '  Digite "help" para ver os comandos disponíveis.' },
  { type: "output", text: "" },
];

export default function TerminalPage() {
  const [lines, setLines] = useState(initialLines);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const newLines = [...lines, { type: "command" as const, text: cmd }];

    switch (cmd.trim().toLowerCase()) {
      case "help":
        newLines.push(
          { type: "output", text: "" },
          { type: "output", text: "  Comandos disponíveis:" },
          { type: "output", text: "    help        — Mostra esta ajuda" },
          { type: "output", text: "    status      — Status dos serviços" },
          { type: "output", text: "    queue       — Fila de reparos" },
          { type: "output", text: "    stats       — Estatísticas do lab" },
          { type: "output", text: "    about       — Sobre a JALEP" },
          { type: "output", text: "    clear       — Limpa o terminal" },
          { type: "output", text: "    exit        — Volta ao site" },
          { type: "output", text: "" },
        );
        break;
      case "status":
        newLines.push(
          { type: "output", text: "" },
          { type: "output", text: "  Todos os sistemas operacionais ✓" },
          { type: "output", text: "  Uptime médio: 99.77%" },
          { type: "output", text: "" },
        );
        break;
      case "queue":
        newLines.push(
          { type: "output", text: "" },
          { type: "output", text: "  4 aparelhos na fila · 1 em andamento · 1 em diagnóstico" },
          { type: "output", text: "" },
        );
        break;
      case "stats":
        newLines.push(
          { type: "output", text: "" },
          { type: "output", text: "  Total de reparos:  340+" },
          { type: "output", text: "  Taxa de sucesso:   97%" },
          { type: "output", text: "  Tempo médio:       48h" },
          { type: "output", text: "  Satisfação:        4.9/5.0" },
          { type: "output", text: "" },
        );
        break;
      case "about":
        newLines.push(
          { type: "output", text: "" },
          { type: "output", text: "  JALEP Corporação — Assistência Técnica Profissional" },
          { type: "output", text: "  Trabalho escolar do 3°C — 2025" },
          { type: "output", text: "  Reparo é ciência, não arte." },
          { type: "output", text: "" },
        );
        break;
      case "clear":
        setLines([]);
        setInput("");
        return;
      default:
        newLines.push(
          { type: "output", text: `  Comando não reconhecido: "${cmd}". Digite "help" para ajuda.` },
          { type: "output", text: "" },
        );
    }

    setLines(newLines);
    setInput("");
  };

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[720px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">terminal</p>
            <h1 className="section-title mb-4">Jalep Terminal</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Emulador de terminal interativo. Digite comandos para explorar o sistema JALEP — ou apenas admire o output.
            </p>
          </ScrollReveal>

          {/* Terminal Window */}
          <ScrollReveal delay={100}>
            <div
              className="rounded-2xl overflow-hidden border border-[var(--color-border)] mb-12"
              style={{ boxShadow: "0 25px 60px -15px rgba(0,0,0,0.5), 0 0 40px -10px var(--color-primary)" }}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-border)]" style={{ background: "var(--color-card)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-red)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-amber)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-green)]" />
                </div>
                <span className="font-mono text-xs text-[var(--color-primary)]">jalep@corp:~</span>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">zsh</span>
              </div>

              {/* Terminal body */}
              <div
                ref={terminalRef}
                className="p-5 min-h-[500px] max-h-[600px] overflow-y-auto font-mono text-sm"
                style={{ background: "var(--color-bg)" }}
              >
                {lines.map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    {line.type === "command" ? (
                      <span>
                        <span className="text-[var(--color-green)]">jalep@corp</span>
                        <span className="text-[var(--color-text-muted)]">:</span>
                        <span className="text-[var(--color-cyan)]">~</span>
                        <span className="text-[var(--color-text-muted)]">$ </span>
                        <span className="text-[var(--color-text)]">{line.text}</span>
                      </span>
                    ) : (
                      <span className="text-[var(--color-text-sec)]">{line.text}</span>
                    )}
                  </div>
                ))}

                {/* Input line */}
                <div className="flex items-center leading-relaxed">
                  <span className="text-[var(--color-green)]">jalep@corp</span>
                  <span className="text-[var(--color-text-muted)]">:</span>
                  <span className="text-[var(--color-cyan)]">~</span>
                  <span className="text-[var(--color-text-muted)]">$ </span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && input.trim()) {
                        handleCommand(input);
                      }
                    }}
                    className="flex-1 bg-transparent border-none outline-none text-[var(--color-text)] font-mono text-sm caret-[var(--color-primary)]"
                    autoFocus
                    spellCheck={false}
                  />
                  <span className="inline-block w-2 h-5 bg-[var(--color-primary)] animate-pulse" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Available commands */}
          <ScrollReveal delay={150}>
            <div className="glass-card p-8 mb-12">
              <p className="section-kicker mb-4">comandos</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">Referência Rápida</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { cmd: "help", desc: "Lista todos os comandos" },
                  { cmd: "status", desc: "Status dos serviços" },
                  { cmd: "queue", desc: "Fila de reparos" },
                  { cmd: "stats", desc: "Estatísticas do lab" },
                  { cmd: "about", desc: "Sobre a JALEP" },
                  { cmd: "clear", desc: "Limpa o terminal" },
                ].map((c) => (
                  <div key={c.cmd} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <span className="font-mono text-xs text-[var(--color-primary)]">{c.cmd}</span>
                    <span className="text-xs text-[var(--color-text-muted)]">—</span>
                    <span className="text-xs text-[var(--color-text-sec)]">{c.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={200}>
            <div className="text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/jalepos" className="btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>grid_view</span>
                  JalepOS
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
