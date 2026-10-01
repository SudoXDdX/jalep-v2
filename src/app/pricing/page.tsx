"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const plans = [
  {
    name: "Básico",
    price: "R$ 89",
    period: "/reparo",
    desc: "Ideal para reparos simples e pontuais. Diagnóstico + reparo com garantia de 30 dias.",
    icon: "looks_one",
    features: [
      { text: "Diagnóstico completo", included: true },
      { text: "Reparo de 1 componente", included: true },
      { text: "Garantia de 30 dias", included: true },
      { text: "Protocolo de rastreio", included: true },
      { text: "Peças originais", included: false },
      { text: "Prioridade de atendimento", included: false },
      { text: "Retirada e entrega", included: false },
      { text: "Suporte pós-entrega", included: false },
    ],
    cta: "Solicitar Orçamento",
    highlight: false,
  },
  {
    name: "Profissional",
    price: "R$ 189",
    period: "/reparo",
    desc: "O mais pedido. Reparo completo com peças originais, garantia estendida e atendimento prioritário.",
    icon: "looks_two",
    features: [
      { text: "Diagnóstico completo", included: true },
      { text: "Reparo de até 3 componentes", included: true },
      { text: "Garantia de 90 dias", included: true },
      { text: "Protocolo de rastreio", included: true },
      { text: "Peças originais", included: true },
      { text: "Prioridade de atendimento", included: true },
      { text: "Retirada e entrega", included: false },
      { text: "Suporte pós-entrega 30 dias", included: true },
    ],
    cta: "Solicitar Orçamento",
    highlight: true,
  },
  {
    name: "Premium",
    price: "R$ 349",
    period: "/reparo",
    desc: "Para quem quer o máximo. Tudo incluído: coleta, peças originais, garantia estendida e suporte contínuo.",
    icon: "looks_3",
    features: [
      { text: "Diagnóstico completo", included: true },
      { text: "Reparo ilimitado de componentes", included: true },
      { text: "Garantia de 180 dias", included: true },
      { text: "Protocolo de rastreio", included: true },
      { text: "Peças originais", included: true },
      { text: "Prioridade de atendimento", included: true },
      { text: "Retirada e entrega inclusas", included: true },
      { text: "Suporte pós-entrega 90 dias", included: true },
    ],
    cta: "Solicitar Orçamento",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">preços</p>
            <h1 className="section-title mb-4">Planos de Reparo</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Preços justos e transparentes. Cada plano define escopo, garantia e nível de prioridade — sem surpresas na hora de pagar.
            </p>
          </ScrollReveal>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div
                  className={`relative p-8 rounded-2xl h-full flex flex-col ${
                    plan.highlight
                      ? "neon-card"
                      : "glass-card"
                  }`}
                  style={plan.highlight ? { boxShadow: "0 0 30px -5px var(--color-primary)" } : {}}
                >
                  {plan.highlight && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)]" />
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-[var(--color-primary)] text-[var(--color-bg)] font-bold text-[0.65rem] px-4 py-1">MAIS POPULAR</span>
                    </>
                  )}

                  {/* Plan header */}
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-primary-dim)] flex items-center justify-center mx-auto mb-4 border border-[var(--color-primary-border)]">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 28 }}>{plan.icon}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[var(--color-text)] mb-1">{plan.name}</h3>
                    <p className="text-xs text-[var(--color-text-muted)] mb-4">{plan.desc}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-heading font-bold text-3xl text-[var(--color-text)]">{plan.price}</span>
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat.text} className="flex items-center gap-3 text-sm">
                        {feat.included ? (
                          <span className="material-symbols-outlined text-[var(--color-green)] flex-shrink-0" style={{ fontSize: 18 }}>check_circle</span>
                        ) : (
                          <span className="material-symbols-outlined text-[var(--color-text-muted)] flex-shrink-0" style={{ fontSize: 18 }}>cancel</span>
                        )}
                        <span className={feat.included ? "text-[var(--color-text-sec)]" : "text-[var(--color-text-muted)]"}>{feat.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contato" className={plan.highlight ? "btn-primary w-full justify-center" : "btn-ghost w-full justify-center"}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    {plan.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Custom quote */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 mb-12">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined icon-primary flex-shrink-0" style={{ fontSize: 24 }}>calculate</span>
                <div>
                  <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-2">Precisa de um orçamento personalizado?</h3>
                  <p className="text-sm text-[var(--color-text-sec)] leading-relaxed mb-4">
                    Para reparos corporativos, contratos de manutenção ou projetos especiais, fazemos orçamento sob medida. Descreva sua necessidade e respondemos em 24h.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip">Contrato Mensal</span>
                    <span className="chip">Volume</span>
                    <span className="chip">B2B</span>
                    <span className="chip">SLA Custom</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Comparison note */}
          <ScrollReveal delay={200}>
            <div className="neon-card p-6 text-center">
              <span className="material-symbols-outlined icon-primary mb-3 block" style={{ fontSize: 32 }}>info</span>
              <p className="text-sm text-[var(--color-text-sec)]">
                Todos os planos incluem <strong className="text-[var(--color-text)]">diagnóstico gratuito</strong> se o reparo for aprovado. Preços referência para reparo de smartphone — consulte valores para notebooks, consoles e outros aparelhos.
              </p>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/faq" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>help</span>
                  Dúvidas? Veja o FAQ
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
