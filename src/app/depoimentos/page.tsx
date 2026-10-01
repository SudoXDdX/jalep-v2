"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const testimonials = [
  {
    name: "Marcos Ribeiro",
    device: "iPhone 14 Pro",
    quote: "Levei com a tela quebrada e em 48h estava como novo. O mais impressionante foi o diagnóstico detalhado que me mostraram antes de aprovar — souberam explicar exatamente o que tinham que fazer. Recomendo de olhos fechados.",
    rating: 5,
    date: "Jan 2025",
  },
  {
    name: "Camila Torres",
    device: "MacBook Air M2",
    quote: "Meu MacBook não ligava de jeito nenhum e outras lojas disseram que era a placa-mãe — R$ 2.500 de orçamento. Na JALEP descobriram que era um curto simples no circuito de alimentação. Resolvido por R$ 380. Honestidade faz diferença.",
    rating: 5,
    date: "Dez 2024",
  },
  {
    name: "André Melo",
    device: "PS5 Digital",
    quote: "Meu PS5 desligava sozinho depois de 20 minutos de jogo. Trocaram a pasta térmica, limparam o dissipador e agora roda frio por horas. O antes e depois das temperaturas eles me mostraram com dados — profissionais de verdade.",
    rating: 5,
    date: "Dez 2024",
  },
  {
    name: "Patricia Lopes",
    device: "iPad Air 5",
    quote: "A bateria do meu iPad durava 2 horas. Trocaram e agora tenho 9 horas de autonomia. O processo foi transparente do início ao fim — rastreei cada etapa pelo WhatsApp. Entrega no prazo combinado.",
    rating: 4,
    date: "Nov 2024",
  },
  {
    name: "Roberto Alves",
    device: "PC Gamer RTX 4070",
    quote: "Meu PC crashava toda hora em jogos. Identificaram que era o cabo de força da GPU com mau contato. Problema simples que ninguém tinha pensado. Desde então, zero crashes. Conhecimento técnico de verdade.",
    rating: 5,
    date: "Nov 2024",
  },
  {
    name: "Fernanda Cruz",
    device: "Epson L3250",
    quote: "Minha impressora imprimia com faixas brancas e limpeza normal não resolvia. Fizeram limpeza ultrassônica do cabeçote e ficou perfeita. Preço justo e resultado de fábrica. Já é a segunda vez que levo e sempre saio satisfeita.",
    rating: 5,
    date: "Out 2024",
  },
  {
    name: "Lucas Prado",
    device: "LG UltraWide 34\"",
    quote: "O monitor ficava piscando em brilho baixo e tinha um zumbido chato. Trocaram capacitores da fonte e resoldaram pads. Agora funciona perfeito em qualquer brilho e sem barulho. Serviço de bancada profissional.",
    rating: 4,
    date: "Set 2024",
  },
  {
    name: "Isabela Martins",
    device: "Sony WH-1000XM5",
    quote: "Meu fone tinha chiado no ANC e o lado esquerdo mais fraco. Limparam os microfones e ajustaram o balanço. Voltei a usar como no primeiro dia. O legal é que testaram na minha frente antes de entregar — transparência total.",
    rating: 5,
    date: "Set 2024",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{
            fontSize: 16,
            color: i < rating ? "var(--color-amber)" : "var(--color-border)",
          }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function DepoimentosPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">depoimentos</p>
            <h1 className="section-title mb-4">O Que Dizem de Nós</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Cada depoimento é real — de clientes que confiaram seus aparelhos e voltaram satisfeitos. A melhor propaganda é resultado.
            </p>
          </ScrollReveal>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="quote-card h-full flex flex-col">
                  <span className="material-symbols-outlined icon-primary mb-3 block" style={{ fontSize: 28 }}>format_quote</span>
                  <p className="text-sm text-[var(--color-text-sec)] leading-relaxed mb-5 flex-1">{t.quote}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-primary-dim)] flex items-center justify-center border border-[var(--color-primary-border)]">
                        <span className="material-symbols-outlined icon-primary" style={{ fontSize: 18 }}>person</span>
                      </div>
                      <div>
                        <p className="font-heading font-bold text-sm text-[var(--color-text)]">{t.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="chip text-[0.55rem]">{t.device}</span>
                          <span className="font-mono text-[0.6rem] text-[var(--color-text-muted)]">{t.date}</span>
                        </div>
                      </div>
                    </div>
                    <StarRating rating={t.rating} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats summary */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 mb-12">
              <p className="section-kicker mb-4">avaliações</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">Resumo das Avaliações</h3>
              <div className="grid sm:grid-cols-4 gap-6">
                {[
                  { label: "Nota Média", value: "4.9", icon: "star" },
                  { label: "Total de Reviews", value: "87", icon: "rate_review" },
                  { label: "Recomendariam", value: "98%", icon: "thumb_up" },
                  { label: "Voltariam", value: "96%", icon: "replay" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="material-symbols-outlined icon-primary mb-2 block" style={{ fontSize: 24 }}>{stat.icon}</span>
                    <p className="font-heading font-bold text-2xl text-[var(--color-text)]">{stat.value}</p>
                    <p className="font-mono text-xs text-[var(--color-text-muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={150}>
            <div className="neon-card p-8 text-center">
              <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 40 }}>edit_note</span>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">Teve uma boa experiência?</h3>
              <p className="text-sm text-[var(--color-text-sec)] mb-6">
                Seu depoimento ajuda outras pessoas a confiarem no nosso trabalho. Compartilhe sua experiência — leva menos de 2 minutos.
              </p>
              <Link href="/contato" className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>rate_review</span>
                Deixar Depoimento
              </Link>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/portfolio" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>work</span>
                  Portfólio
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
