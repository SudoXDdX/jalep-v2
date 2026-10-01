"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const sections = [
  {
    id: "instalacao",
    title: "Instalação",
    icon: "download",
    content: [
      { type: "text", value: "Clone o repositório e instale as dependências. O JALEP v2 usa Bun como package manager padrão, mas npm e pnpm também funcionam." },
      { type: "code", value: "$ git clone https://github.com/jalep/jalep-v2.git\n$ cd jalep-v2\n$ bun install" },
      { type: "text", value: "Após a instalação, rode o servidor de desenvolvimento. A primeira execução pode demorar alguns segundos enquanto as fontes são baixadas." },
      { type: "code", value: "$ bun dev\n→ Ready on http://localhost:3000" },
    ],
  },
  {
    id: "configuracao",
    title: "Configuração",
    icon: "settings",
    content: [
      { type: "text", value: "A configuração principal está em src/content/site.ts. Este arquivo contém todos os dados do site: nome, serviços, métricas, manifesto e footer. Modifique-o para personalizar o conteúdo sem tocar no código." },
      { type: "code", value: '// src/content/site.ts\nexport const site = {\n  name: "JALEP",\n  year: 2025,\n  turma: "3°C",\n  // ... resto da config\n};' },
      { type: "text", value: "Variáveis de ambiente (se necessário) vão em .env.local na raiz. O projeto atualmente não requer variáveis de ambiente para funcionar em dev." },
      { type: "code", value: '# .env.local\nNEXT_PUBLIC_SITE_URL=http://localhost:3000' },
    ],
  },
  {
    id: "uso",
    title: "Uso",
    icon: "play_arrow",
    content: [
      { type: "text", value: "O JALEP v2 é um static export — todas as páginas são pré-renderizadas no build. Para gerar a versão de produção, rode o build e export:" },
      { type: "code", value: "$ bun build\n→ Generating static pages\n→ Export successful" },
      { type: "text", value: "Os arquivos estáticos são gerados em /out. Você pode servir com qualquer servidor web estático: Nginx, Apache, Vercel, Netlify ou até GitHub Pages." },
      { type: "code", value: "$ npx serve out\n→ Ready on http://localhost:3000" },
    ],
  },
  {
    id: "api",
    title: "API & Componentes",
    icon: "api",
    content: [
      { type: "text", value: "Componentes principais estão em src/components/. Cada um é independente e pode ser usado em qualquer página com import. Os mais importantes:" },
      { type: "code", value: "ScrollReveal  → Animação de entrada (fade + translate)\nNav          → Navegação responsiva com blur\nFooter       → Rodapé com links e créditos\nWallpaperEngine → Background animado com canvas\nBudgetSimulator → Simulador de orçamento com IA (Gemini)" },
      { type: "text", value: "CSS classes utilitárias estão em globals.css: glass-card, neon-card, quote-card, chip, btn-primary, btn-ghost, section-kicker, section-title, stat-card, lab-card. Use-as para manter consistência visual." },
    ],
  },
  {
    id: "faq-dev",
    title: "FAQ do Desenvolvedor",
    icon: "help",
    content: [
      { type: "text", value: "P: Posso usar npm em vez de bun? R: Sim, mas bun é significativamente mais rápido. Se usar npm, delete bun.lockb primeiro." },
      { type: "text", value: "P: Como adiciono uma nova página? R: Crie uma pasta em src/app/nome-da-pagina/page.tsx com \"use client\" no topo e siga o padrão das páginas existentes." },
      { type: "text", value: "P: As animações pesam performance? R: ScrollReveal usa IntersectionObserver — não afeta scroll. WallpaperEngine tem fallback para prefers-reduced-motion." },
      { type: "text", value: "P: Posso deployar sem Vercel? R: Sim. O output é 100% estático. Serve com qualquer host de arquivos estáticos." },
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[720px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">documentação</p>
            <h1 className="section-title mb-4">Docs</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-8">
              Documentação técnica do projeto JALEP v2. Da instalação ao deploy — tudo que você precisa para rodar, modificar e entender o código.
            </p>
          </ScrollReveal>

          {/* TOC */}
          <ScrollReveal delay={50}>
            <div className="glass-card p-6 mb-10">
              <p className="font-mono text-xs text-[var(--color-primary)] mb-3">sumário</p>
              <div className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="chip hover:bg-[var(--color-primary-dim)] transition-colors">
                    <span className="material-symbols-outlined mr-1" style={{ fontSize: 14 }}>{s.icon}</span>
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, si) => (
              <ScrollReveal key={section.id} delay={si * 80}>
                <div id={section.id} className="glass-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-dim)] flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 22 }}>{section.icon}</span>
                    </div>
                    <h2 className="font-heading font-bold text-lg text-[var(--color-text)]">{section.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {section.content.map((block, bi) => (
                      <div key={bi}>
                        {block.type === "text" && (
                          <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{block.value}</p>
                        )}
                        {block.type === "code" && (
                          <pre className="font-mono text-xs text-[var(--color-primary)] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-4 overflow-x-auto leading-relaxed">
                            {block.value}
                          </pre>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Quick links */}
          <ScrollReveal delay={100}>
            <div className="neon-card p-8 text-center">
              <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 40 }}>code_blocks</span>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">Código Aberto</h3>
              <p className="text-sm text-[var(--color-text-sec)] mb-6">
                O JALEP v2 é um projeto escolar open-source. Todo o código está disponível para estudo, modificação e contribuição.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/stack" className="btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>hub</span>
                  Tech Stack
                </Link>
                <Link href="/changelog" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>history</span>
                  Changelog
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Links */}
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
