"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

export default function ServicosPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">serviços</p>
            <h1 className="section-title mb-4">O que a JALEP faz.</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Cada conserto segue um passo a passo: diagnosticamos o problema, consertamos com precisão e testamos tudo antes de entregar. Sem improvisos.
            </p>
          </ScrollReveal>

          {/* Service detail cards - full width for subpage */}
          <div className="space-y-6">
            {site.services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 100}>
                <div className="neon-card">
                  <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                    {/* Left: icon + tag + title */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-outlined icon-primary" style={{ fontSize: 32 }}>{svc.icon}</span>
                        <span className="chip">{svc.tag}</span>
                      </div>
                      <h2 className="font-heading font-bold text-xl text-[var(--color-text)] mb-3">{svc.title}</h2>
                      <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{svc.desc}</p>
                    </div>

                    {/* Right: specs + chips */}
                    <div>
                      <p className="section-kicker mb-3">procedimentos</p>
                      <ul className="space-y-2 mb-6">
                        {svc.specs.map((spec) => (
                          <li key={spec} className="flex items-center gap-3 text-sm text-[var(--color-text-sec)]">
                            <span className="material-symbols-outlined icon-primary" style={{ fontSize: 14 }}>check_circle</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {svc.chips.map((chip) => (
                          <span key={chip} className="chip">{chip}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={200}>
            <div className="mt-16 text-center">
              <p className="text-sm text-[var(--color-text-sec)] mb-6">Precisa de um diagnóstico?</p>
              <Link href="/#budget" className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calculate</span>
                Solicitar Orçamento
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
