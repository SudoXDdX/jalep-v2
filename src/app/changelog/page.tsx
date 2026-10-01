"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const versions = [
  {
    version: "v2.0.0",
    date: "15 Jan 2025",
    tag: "Major",
    color: "var(--color-primary)",
    changes: [
      "Reescrita completa do site com Next.js 16 App Router e React 19",
      "Novo sistema de design com CSS custom properties e tema dinâmico",
      "Tailwind CSS 4 com @theme e design tokens JALEP",
      "17 novas páginas: Contato, FAQ, Portfólio, Timeline, Stack, Team, Pricing, Blog, Docs, Changelog, Status, JalepOS, Terminal, Wallpaper, Hardware, Parceiros, Depoimentos",
      "Componente JalepOS — protótipo de web OS integrado",
      "Terminal interativo com emulação de prompt",
      "Wallpaper gallery com 9 gradientes CSS customizados",
      "Animações com ScrollReveal e WallpaperEngine",
      "Static export otimizado — Lighthouse 95+ em todas as métricas",
      "Tipografia: Inter (headings + body), JetBrains Mono (code)",
    ],
  },
  {
    version: "v1.5.0",
    date: "01 Nov 2024",
    tag: "Feature",
    color: "var(--color-cyan)",
    changes: [
      "Adicionada página de portfólio com casos de reparo documentados",
      "Sistema de rastreamento de protocolo para clientes",
      "Formulário de orçamento com validação client-side",
      "Animações de scroll com Intersection Observer",
      "Modo escuro automático com prefers-color-scheme",
      "Otimização de imagens com next/image e lazy loading",
    ],
  },
  {
    version: "v1.4.0",
    date: "15 Set 2024",
    tag: "Feature",
    color: "var(--color-cyan)",
    changes: [
      "Página de serviços expandida com detalhes de cada tipo de reparo",
      "Adicionado lab visualization com scan animation",
      "Footer redesenhado com links rápidos e info de tech stack",
      "Responsividade melhorada para tablets e mobile",
      "Performance: bundle size reduzido em 40%",
    ],
  },
  {
    version: "v1.3.0",
    date: "01 Ago 2024",
    tag: "Improvement",
    color: "var(--color-violet)",
    changes: [
      "Refatoração de componentes: Nav, Footer, LoadingScreen",
      "Novo componente de cursor customizado com trail effect",
      "Scroll progress bar adicionada no topo",
      "Botão scroll-to-top com animação suave",
      "Correção de bugs de hidratação em SSR",
    ],
  },
  {
    version: "v1.2.0",
    date: "15 Jun 2024",
    tag: "Improvement",
    color: "var(--color-violet)",
    changes: [
      "Sistema de ícones migrado para Material Symbols Outlined",
      "Glass card e neon card com backdrop-filter e glow effects",
      "Novas CSS classes utilitárias: chip, btn-primary, btn-ghost",
      "Melhoria na acessibilidade: aria-labels e focus rings",
      "Lint: ESLint flat config com regras strict",
    ],
  },
  {
    version: "v1.1.0",
    date: "01 Mai 2024",
    tag: "Fix",
    color: "var(--color-amber)",
    changes: [
      "Correção de layout quebrado em Safari 17",
      "Fix: fonte Syne não carregando em Firefox mobile",
      "Correção de z-index conflicts entre Nav e modais",
      "Fix: LoadingScreen não desaparecia em conexões lentas",
      "Correção de meta tags para SEO e Open Graph",
    ],
  },
  {
    version: "v1.0.0",
    date: "20 Jan 2024",
    tag: "Initial",
    color: "var(--color-green)",
    changes: [
      "Primeira versão do site JALEP",
      "Landing page com hero, serviços, orçamento e footer",
      "Páginas Sobre e Serviços",
      "Deploy na Vercel com domínio customizado",
      "HTML semântico, responsivo e com acessibilidade básica",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[720px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">changelog</p>
            <h1 className="section-title mb-4">Histórico de Versões</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Cada versão conta uma etapa da evolução do JALEP. De HTML puro a Next.js 16 — aqui está tudo que mudou.
            </p>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)] opacity-20" />

            <div className="space-y-8">
              {versions.map((v, i) => (
                <ScrollReveal key={v.version} delay={i * 80}>
                  <div className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                        style={{ borderColor: v.color, backgroundColor: `${v.color}20` }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 18, color: v.color }}>
                          {v.tag === "Major" ? "auto_awesome" : v.tag === "Feature" ? "new_releases" : v.tag === "Fix" ? "build" : v.tag === "Initial" ? "rocket_launch" : "update"}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="glass-card p-6 flex-1">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <h3 className="font-heading font-bold text-lg text-[var(--color-text)]">{v.version}</h3>
                        <span className="chip text-[0.6rem]" style={{ color: v.color, borderColor: v.color }}>{v.tag}</span>
                        <span className="font-mono text-xs text-[var(--color-text-muted)]">{v.date}</span>
                      </div>
                      <ul className="space-y-2">
                        {v.changes.map((change, ci) => (
                          <li key={ci} className="flex items-start gap-3 text-sm text-[var(--color-text-sec)]">
                            <span className="material-symbols-outlined flex-shrink-0 mt-0.5" style={{ fontSize: 14, color: v.color }}>
                              {v.tag === "Fix" ? "check_circle" : "add_circle"}
                            </span>
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Current version note */}
          <ScrollReveal delay={200}>
            <div className="neon-card p-8 text-center mt-16">
              <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 40 }}>flag</span>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">Versão Atual: v2.0.0</h3>
              <p className="text-sm text-[var(--color-text-sec)] mb-6">
                Esta é a versão mais recente e a que você está vendo agora. Totalmente reescrita, mais rápida e com muito mais conteúdo.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/stack" className="btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>hub</span>
                  Tech Stack
                </Link>
                <Link href="/docs" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>menu_book</span>
                  Documentação
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={300}>
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
