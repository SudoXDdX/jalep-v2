"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const techStack = [
  {
    icon: "code",
    name: "Next.js",
    version: "16",
    category: "Framework",
    desc: "Framework React full-stack com App Router, RSC e static export. Base de toda a arquitetura do JALEP v2, oferecendo SSR, ISR e otimização automática de imagens.",
  },
  {
    icon: "whatshot",
    name: "React",
    version: "19",
    category: "UI Library",
    desc: "Biblioteca de interfaces com Server Components, Actions e Suspense boundaries. Usamos React 19 com use() hook e streaming SSR para carregamento progressivo.",
  },
  {
    icon: "terminal",
    name: "TypeScript",
    version: "5.x",
    category: "Linguagem",
    desc: "Superset tipado de JavaScript com strict mode, path aliases e tipagem forte para todo o código. Zero any — usamos generics e utility types extensivamente.",
  },
  {
    icon: "palette",
    name: "Tailwind CSS",
    version: "4",
    category: "Estilização",
    desc: "Framework CSS utility-first com CSS-native engine, variáveis CSS custom properties e tema dinâmico. Usamos @theme com design tokens JALEP.",
  },
  {
    icon: "hub",
    name: "Node.js",
    version: "22 LTS",
    category: "Runtime",
    desc: "Runtime JavaScript server-side para build, dev server e APIs. Usamos Node.js 22 com ESM nativo e fetch API estável.",
  },
  {
    icon: "speed",
    name: "Bun",
    version: "1.x",
    category: "Toolchain",
    desc: "Runtime e package manager ultra-rápido usado como alternativa ao Node em dev. Instalação 30x mais rápida e transpilação nativa de TypeScript.",
  },
  {
    icon: "style",
    name: "Framer Motion",
    version: "11",
    category: "Animação",
    desc: "Biblioteca de animação declarativa para React. Usamos para transições de página, micro-interações, layout animations e gesture-based interactions.",
  },
  {
    icon: "deployed_code",
    name: "Vercel",
    version: "CLI/Platform",
    category: "Deploy",
    desc: "Plataforma de hospedagem otimizada para Next.js com edge functions, analytics e preview deployments. Static export servido via CDN global.",
  },
  {
    icon: "folder",
    name: "ESLint + Prettier",
    version: "9 / 3",
    category: "Lint/Format",
    desc: "Linting com regras strict de React/Next.js e formatação opinativa. Configuração flat config com plugins de accessibility e hooks.",
  },
  {
    icon: "schema",
    name: "CSS Variables",
    version: "Custom",
    category: "Design Tokens",
    desc: "Sistema de theming baseado em CSS custom properties com modo claro/escuro, cores semânticas e variáveis de espaçamento tipográfico.",
  },
  {
    icon: "architecture",
    name: "Syne + JetBrains Mono",
    version: "Google Fonts",
    category: "Tipografia",
    desc: "Syne para headings (geometric display), JetBrains Mono para código e labels técnicos, Plus Jakarta Sans como base legível para corpo de texto.",
  },
  {
    icon: "devices",
    name: "Material Symbols",
    version: "Outlined",
    category: "Iconografia",
    desc: "Sistema de ícones do Google com variant outline, 2000+ ícones e suporte a variable font. Carregamento seletivo via subset para performance.",
  },
];

export default function StackPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">stack</p>
            <h1 className="section-title mb-4">Tech Stack</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Cada tecnologia foi escolhida com critério. Performance, tipagem forte e experiência de desenvolvimento são nossos pilares.
            </p>
          </ScrollReveal>

          {/* Tech Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {techStack.map((tech, i) => (
              <ScrollReveal key={tech.name} delay={i * 60}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-dim)] flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 22 }}>{tech.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-[var(--color-text)]">{tech.name}</h3>
                      <p className="font-mono text-xs text-[var(--color-primary)]">{tech.version}</p>
                    </div>
                  </div>
                  <span className="chip text-[0.6rem] mb-3 inline-block">{tech.category}</span>
                  <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{tech.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Architecture overview */}
          <ScrollReveal delay={100}>
            <div className="neon-card p-8 mb-12">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)]" />
              <p className="section-kicker mb-4">arquitetura</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">Como tudo se conecta</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center">
                  <span className="material-symbols-outlined icon-primary mb-2 block" style={{ fontSize: 24 }}>storage</span>
                  <p className="font-heading font-bold text-sm text-[var(--color-text)]">Camada de Dados</p>
                  <p className="font-mono text-xs text-[var(--color-text-muted)] mt-1">site.ts · content/</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center">
                  <span className="material-symbols-outlined icon-primary mb-2 block" style={{ fontSize: 24 }}>widgets</span>
                  <p className="font-heading font-bold text-sm text-[var(--color-text)]">Camada de UI</p>
                  <p className="font-mono text-xs text-[var(--color-text-muted)] mt-1">components/ · app/</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center">
                  <span className="material-symbols-outlined icon-primary mb-2 block" style={{ fontSize: 24 }}>cloud_upload</span>
                  <p className="font-heading font-bold text-sm text-[var(--color-text)]">Camada de Deploy</p>
                  <p className="font-mono text-xs text-[var(--color-text-muted)] mt-1">Vercel · CDN · Static</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Performance note */}
          <ScrollReveal delay={200}>
            <div className="glass-card p-6 mb-12">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[var(--color-green)] flex-shrink-0" style={{ fontSize: 24 }}>bolt</span>
                <div>
                  <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-2">Performance First</h3>
                  <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">
                    O JALEP v2 é um static export — zero server-side rendering em produção. Todas as páginas são pré-renderizadas no build e servidas via CDN. Lighthouse score: 95+ em todas as métricas. First Contentful Paint sob 1s em 4G.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={300}>
            <div className="text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/changelog" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>history</span>
                  Changelog
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
