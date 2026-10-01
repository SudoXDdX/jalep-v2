"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const partners = [
  {
    name: "TechParts Distribuidora",
    icon: "inventory_2",
    type: "Fornecedor de Peças",
    desc: "Parceiro oficial para peças originais e certificadas de smartphones e notebooks. Entrega em 24h para São Paulo capital com rastreamento completo e garantia de procedência em cada componente.",
    color: "var(--color-cyan)",
    since: "2023",
  },
  {
    name: "IFixit Brasil",
    icon: "build_circle",
    type: "Base de Conhecimento",
    desc: "Acesso premium a guias de reparo, manuais de serviço e diagramas esquemáticos. Referência mundial em reparo de eletrônicos — usamos seus guias como base do nosso protocolo de diagnóstico.",
    color: "var(--color-green)",
    since: "2023",
  },
  {
    name: "EletroEscola SP",
    icon: "school",
    type: "Instituição Parceira",
    desc: "Escola técnica parceira que cedeu o espaço para nosso laboratório e apoia o projeto JALEP como iniciativa de empreendedorismo estudantil. Alunos do curso de eletrônica colaboram como estagiários.",
    color: "var(--color-violet)",
    since: "2023",
  },
  {
    name: "CloudServ Hospedagem",
    icon: "cloud_done",
    type: "Infraestrutura",
    desc: "Hospedagem do site JALEP e APIs internas com CDN global, SSL automático e deploy contínuo. SLA de 99.99% uptime e suporte técnico dedicado para projetos educacionais.",
    color: "var(--color-primary)",
    since: "2024",
  },
  {
    name: "PrintMax Soluções",
    icon: "print",
    type: "Parceiro de Impressão",
    desc: "Fornecedor de inks e peças para manutenção de impressoras Epson, HP e Canon. Parceria com preços especiais para bulk ink e peças de reposição. Treinamento técnico incluso.",
    color: "var(--color-amber)",
    since: "2024",
  },
  {
    name: "SeguraTech Seguros",
    icon: "shield",
    type: "Seguro de Equipamentos",
    desc: "Parceiro de seguros para aparelhos em nosso poder durante o reparo. Cobertura total contra danos acidentais, roubo e incêndio enquanto o dispositivo está no laboratório. Zero risco para o cliente.",
    color: "var(--color-red)",
    since: "2024",
  },
];

export default function ParceirosPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">parceiros</p>
            <h1 className="section-title mb-4">Nossos Parceiros</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Ninguém constrói nada sozinho. Nossos parceiros nos dão peças de qualidade, conhecimento, infraestrutura e segurança — para que possamos focar no que sabemos fazer.
            </p>
          </ScrollReveal>

          {/* Partner Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 80}>
                <div className="glass-card p-6 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${partner.color}15`, border: `1px solid ${partner.color}30` }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 28, color: partner.color }}>{partner.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-1">{partner.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="chip text-[0.6rem]" style={{ color: partner.color, borderColor: `${partner.color}60` }}>{partner.type}</span>
                        <span className="font-mono text-xs text-[var(--color-text-muted)]">desde {partner.since}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{partner.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Partnership benefits */}
          <ScrollReveal delay={100}>
            <div className="neon-card p-8 mb-12">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)]" />
              <p className="section-kicker mb-4">benefícios</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">O Que Nossos Parceiros Garantem</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: "verified", title: "Peças Certificadas", desc: "Procedência rastreável e garantia de qualidade em cada componente" },
                  { icon: "speed", title: "Entrega Rápida", desc: "Peças em até 24h na capital, 48h no interior — sem atraso no reparo" },
                  { icon: "shield", title: "Seguro Total", desc: "Seu aparelho coberto contra qualquer incidente enquanto está conosco" },
                ].map((b) => (
                  <div key={b.title} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary-dim)] flex items-center justify-center mx-auto mb-3 border border-[var(--color-primary-border)]">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 22 }}>{b.icon}</span>
                    </div>
                    <p className="font-heading font-bold text-sm text-[var(--color-text)] mb-2">{b.title}</p>
                    <p className="text-xs text-[var(--color-text-sec)]">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Become a partner */}
          <ScrollReveal delay={150}>
            <div className="glass-card p-8 text-center">
              <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 40 }}>handshake</span>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">Quer ser parceiro?</h3>
              <p className="text-sm text-[var(--color-text-sec)] mb-6">
                Se sua empresa compartilha nossos valores de qualidade e transparência, queremos conversar. Parcerias podem incluir fornecimento, infraestrutura, conhecimento ou co-marketing.
              </p>
              <Link href="/contato" className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span>
                Propor Parceria
              </Link>
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
