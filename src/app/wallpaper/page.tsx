"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const wallpapers = [
  {
    name: "Cyber Noite",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 30%, #0a1a3e 60%, #0a0a2a 100%)",
    desc: "Deep space com tons de violeta",
  },
  {
    name: "Neon Mint",
    gradient: "linear-gradient(160deg, #0a0a0a 0%, #0a2a1a 40%, #00ff88 90%, #0a0a0a 100%)",
    desc: "Escuro com flash de verde neon",
  },
  {
    name: "Aurora Boreal",
    gradient: "linear-gradient(180deg, #0a0a2a 0%, #1a0a4e 20%, #00ff88 50%, #00aaff 80%, #0a0a2a 100%)",
    desc: "Gradiente inspirado na aurora",
  },
  {
    name: "Fogo Solar",
    gradient: "radial-gradient(ellipse at 70% 30%, #ff6600 0%, #ff0044 30%, #1a0a0a 70%, #0a0a0a 100%)",
    desc: "Radial com laranja e vermelho",
  },
  {
    name: "Oceano Digital",
    gradient: "linear-gradient(135deg, #001a2a 0%, #003355 30%, #0088aa 60%, #00ccff 85%, #001a2a 100%)",
    desc: "Tons profundos de azul oceano",
  },
  {
    name: "Violeta Matrix",
    gradient: "linear-gradient(180deg, #0a0a0a 0%, #2a0a4a 25%, #8800ff 50%, #2a0a4a 75%, #0a0a0a 100%)",
    desc: "Violeta intenso estilo matrix",
  },
  {
    name: "Conic Prism",
    gradient: "conic-gradient(from 45deg at 50% 50%, #0a0a2a, #00ff88, #0088ff, #8800ff, #ff0088, #0a0a2a)",
    desc: "Prisma cônico multicolorido",
  },
  {
    name: "Mesh Gradient",
    gradient: "radial-gradient(at 20% 80%, #ff006644 0%, transparent 50%), radial-gradient(at 80% 20%, #0066ff44 0%, transparent 50%), radial-gradient(at 50% 50%, #00ff8844 0%, transparent 50%), linear-gradient(135deg, #0a0a1a, #1a1a2a)",
    desc: "Mesh com múltiplos pontos radiais",
  },
  {
    name: "Amanhecer",
    gradient: "linear-gradient(180deg, #0a0a2a 0%, #2a1a4a 15%, #ff6644 40%, #ffaa44 55%, #ffddaa 70%, #0a0a2a 100%)",
    desc: "Horizonte com cores de pôr do sol",
  },
];

export default function WallpaperPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">wallpapers</p>
            <h1 className="section-title mb-4">Galeria de Wallpapers</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Cada wallpaper é um gradiente CSS puro — sem imagens, sem SVG. Lightweight e infinitamente escalável. Escolha o que combina com seu mood.
            </p>
          </ScrollReveal>

          {/* Wallpaper Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {wallpapers.map((wp, i) => (
              <ScrollReveal key={wp.name} delay={i * 80}>
                <div className="group">
                  <div
                    className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--color-border)] mb-3 relative transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[var(--color-primary)]"
                    style={{
                      background: wp.gradient,
                      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
                    }}
                  >
                    {/* Overlay with name */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-white mb-2" style={{ fontSize: 32 }}>wallpaper</span>
                      <p className="font-heading font-bold text-sm text-white">Aplicar Wallpaper</p>
                    </div>
                    {/* Wallpaper label */}
                    <div className="absolute bottom-3 left-3">
                      <span className="chip text-[0.6rem] bg-black/50 text-white border-white/20 backdrop-blur-sm">{wp.name}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <div>
                      <p className="font-heading font-bold text-sm text-[var(--color-text)]">{wp.name}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{wp.desc}</p>
                    </div>
                    <span className="material-symbols-outlined text-[var(--color-text-muted)] cursor-pointer hover:text-[var(--color-primary)] transition-colors" style={{ fontSize: 18 }}>download</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CSS technique info */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 mb-12">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined icon-primary flex-shrink-0" style={{ fontSize: 24 }}>palette</span>
                <div>
                  <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-2">Feito com CSS Puro</h3>
                  <p className="text-sm text-[var(--color-text-sec)] leading-relaxed mb-4">
                    Todos os wallpapers usam exclusivamente CSS gradients — linear-gradient, radial-gradient e conic-gradient. Zero imagens, zero SVG, zero JavaScript para renderização. Cada wallpaper pesa menos de 200 bytes de CSS.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip text-[0.6rem]">linear-gradient</span>
                    <span className="chip text-[0.6rem]">radial-gradient</span>
                    <span className="chip text-[0.6rem]">conic-gradient</span>
                    <span className="chip text-[0.6rem]">multi-stop</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* WallpaperEngine note */}
          <ScrollReveal delay={150}>
            <div className="neon-card p-6 text-center">
              <span className="material-symbols-outlined icon-primary mb-3 block" style={{ fontSize: 32 }}>animated</span>
              <p className="text-sm text-[var(--color-text-sec)]">
                O componente <code className="font-mono text-[var(--color-primary)]">WallpaperEngine</code> usa Canvas API para renderizar partículas animadas sobre o wallpaper ativo. Experimente em qualquer página do site.
              </p>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/stack" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>hub</span>
                  Tech Stack
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
