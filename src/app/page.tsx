"use client";

import { useState, useEffect, useRef } from "react";
import { site } from "@/content/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import BudgetSimulator from "@/components/BudgetSimulator";

/* ═══════════════════════════════════════════
   TYPEWRITER HOOK
   ═══════════════════════════════════════════ */
function useTypewriter(text: string, speed = 50, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; }
        else { setDone(true); clearInterval(interval); }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [text, speed, delay]);
  return { displayed, done };
}

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */
function HeroSection() {
  const { displayed, done } = useTypewriter(site.hero.subtitle, 40, 600);
  return (
    <section id="hero" className="relative z-[1] min-h-screen flex items-center justify-center px-6" style={{ paddingTop: "calc(var(--nav-h) + 2rem)" }}>
      <div className="max-w-[1080px] w-full">
        <ScrollReveal>
          <div className="hero-tag mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] inline-block" style={{ boxShadow: "0 0 6px var(--color-primary)" }} />
            {site.description}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="hero-title mb-4">
            {site.hero.title.map((word, i) => (
              <span key={i}>
                {i === site.hero.title.length - 1 ? <span className="hero-gradient-text">{word}</span> : <>{word}</>}
                {i < site.hero.title.length - 1 && <br />}
              </span>
            ))}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="font-mono text-sm md:text-base text-[var(--color-text-sec)] mb-8 max-w-lg">
            {displayed}<span className="typewriter-cursor">|</span>
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap gap-3 mb-12">
            <a href="#budget" className="btn-primary">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calculate</span>
              {site.hero.cta1}
            </a>
            <a href="#servicos" className="btn-ghost">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>build</span>
              {site.hero.cta2}
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {site.hero.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined icon-primary" style={{ fontSize: 16 }}>{stat.icon}</span>
                  <span className="font-heading font-bold text-xl text-[var(--color-text)]">
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix || ""}
                  </span>
                </div>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SERVICES SECTION
   ═══════════════════════════════════════════ */
function ServicesSection() {
  return (
    <section id="servicos" className="relative z-[1] py-24 px-6">
      <div className="max-w-[1080px] mx-auto">
        <ScrollReveal>
          <p className="section-kicker">serviços</p>
          <h2 className="section-title mb-10">O que fazemos</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-4">
          {site.services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 100}>
              <div className="neon-card">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined icon-primary" style={{ fontSize: 22 }}>{svc.icon}</span>
                  <span className="chip">{svc.tag}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">{svc.title}</h3>
                <p className="text-sm text-[var(--color-text-sec)] mb-4">{svc.desc}</p>
                <ul className="space-y-1 mb-4">
                  {svc.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] font-mono">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 12 }}>check</span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {svc.chips.map((chip) => (
                    <span key={chip} className="chip">{chip}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ABOUT / LAB SECTION
   ═══════════════════════════════════════════ */
function LabSection() {
  return (
    <section id="lab" className="relative z-[1] py-24 px-6">
      <div className="max-w-[1080px] mx-auto">
        <ScrollReveal>
          <p className="section-kicker">laboratório</p>
          <h2 className="section-title mb-10">{site.about.title}</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {site.about.features.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 80}>
                <div className="neon-card flex items-start gap-3">
                  <span className="material-symbols-outlined icon-primary mt-0.5" style={{ fontSize: 20 }}>{feat.icon}</span>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[var(--color-text)] mb-1">{feat.title}</h3>
                    <p className="text-xs text-[var(--color-text-sec)]">{feat.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200} variant="scale">
            <div className="lab-card flex flex-col items-center justify-center min-h-[280px]">
              <span className="material-symbols-outlined icon-primary mb-3" style={{ fontSize: 48 }}>science</span>
              <p className="font-heading font-bold text-lg text-[var(--color-text)]">{site.about.subtitle}</p>
              <p className="font-mono text-xs text-[var(--color-text-muted)] mt-2">scan: active</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SPECS / NUMBERS SECTION
   ═══════════════════════════════════════════ */
function SpecsSection() {
  const [barsVisible, setBarsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBarsVisible(true); observer.unobserve(el); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="specs" className="relative z-[1] py-24 px-6">
      <div className="max-w-[1080px] mx-auto" ref={ref}>
        <ScrollReveal>
          <p className="section-kicker">especificações</p>
          <h2 className="section-title mb-10">{site.specs.title}</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {site.specs.bars.map((bar) => (
              <ScrollReveal key={bar.label}>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-[var(--color-text-sec)]">{bar.label}</span>
                    <span className="font-mono text-xs text-[var(--color-primary)]">{bar.value}%</span>
                  </div>
                  <div className="spec-bar-track">
                    <div className="spec-bar-fill" style={{ width: barsVisible ? `${bar.value}%` : '0%', transitionDelay: '0.2s' }} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200} variant="scale">
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 gap-4">
                {site.specs.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <span className="material-symbols-outlined icon-primary mb-1" style={{ fontSize: 20 }}>{metric.icon}</span>
                    <div className="font-heading font-bold text-2xl text-[var(--color-text)]">
                      <AnimatedCounter value={metric.value} />
                      {metric.suffix || ""}
                    </div>
                    <div className="font-mono text-xs text-[var(--color-text-muted)]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   MANIFESTO SECTION
   ═══════════════════════════════════════════ */
function ManifestoSection() {
  return (
    <section id="manifesto" className="relative z-[1] py-24 px-6">
      <div className="max-w-[720px] mx-auto">
        <ScrollReveal>
          <div className="quote-card">
            <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 32 }}>format_quote</span>
            <p className="font-heading font-bold text-lg md:text-xl text-[var(--color-text)] leading-relaxed mb-4">{site.manifesto.quote}</p>
            <p className="font-mono text-xs text-[var(--color-primary)]">— {site.manifesto.author}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   BUDGET SIMULATOR SECTION
   (Uses BudgetSimulator component with AI integration)
   ═══════════════════════════════════════════ */

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        <HeroSection />
        <ServicesSection />
        <LabSection />
        <SpecsSection />
        <ManifestoSection />
        <BudgetSimulator />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
