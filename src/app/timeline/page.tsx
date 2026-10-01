"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const milestones = [
  {
    year: "2023",
    month: "Jan",
    title: "Fundação da JALEP",
    desc: "O projeto nasceu como trabalho escolar do 3º ano do Ensino Médio. Um grupo de estudantes decidiu que assistência técnica podia ser mais do que um trabalho — podia ser um padrão de qualidade. Começamos com uma caixa de ferramentas e muita determinação.",
    icon: "rocket_launch",
  },
  {
    year: "2023",
    month: "Mar",
    title: "Primeiro Reparo Oficial",
    desc: "Um smartphone com tela quebrada foi nosso primeiro caso documentado. O cliente (um professor) ficou impressionado com o protocolo de diagnóstico. A notícia se espalhou e trouxe mais 5 aparelhos na primeira semana.",
    icon: "smartphone",
  },
  {
    year: "2023",
    month: "Mai",
    title: "Montagem do Laboratório",
    desc: "Conseguimos espaço na escola e montamos nosso lab com equipamento de bancada: multímetro, osciloscópio, fonte ajustável e estação de solda. O laboratório JALEP estava oficialmente operacional com protocolo documentado.",
    icon: "science",
  },
  {
    year: "2023",
    month: "Jul",
    title: "Expansão da Equipe",
    desc: "De 4 fundadores, passamos para 8 membros com especializações: hardware, software, solda fina e atendimento. Cada membro passou por treinamento interno e certificação em protocolo de reparo.",
    icon: "group_add",
  },
  {
    year: "2023",
    month: "Set",
    title: "100 Reparos Realizados",
    desc: "Atingimos a marca de 100 reparos com taxa de sucesso de 96%. Implementamos sistema de rastreamento por protocolo e começamos a documentar cada caso em nosso portfólio público.",
    icon: "celebration",
  },
  {
    year: "2023",
    month: "Nov",
    title: "Parcerias com Fornecedores",
    desc: "Fechamos parceria com 3 fornecedores de peças certificadas, garantindo qualidade e velocidade de reposição. Isso nos permitiu reduzir o tempo médio de reparo de 5 para 2 dias úteis.",
    icon: "handshake",
  },
  {
    year: "2024",
    month: "Jan",
    title: "Lançamento do Site v1",
    desc: "O primeiro site da JALEP foi ao ar: uma landing page com formulário de orçamento, portfólio de reparos e blog com dicas técnicas. Feito em HTML/CSS puro — funcional mas longe do que queríamos.",
    icon: "language",
  },
  {
    year: "2024",
    month: "Mai",
    title: "Atendimento Corporativo",
    desc: "Começamos a atender pequenas empresas com contratos de manutenção preventiva. Nosso primeiro cliente B2B foi uma startup com 15 notebooks. SLA de 24h e desconto por volume.",
    icon: "business",
  },
  {
    year: "2024",
    month: "Set",
    title: "Projeto JalepOS Concebido",
    desc: "A ideia de criar um sistema operacional web para gerenciar reparos ganhou forma. JalepOS seria a interface interna do laboratório — dashboard, protocolos, inventário e comunicação em um só lugar.",
    icon: "terminal",
  },
  {
    year: "2025",
    month: "Jan",
    title: "Reescrita Completa — JALEP v2",
    desc: "O site foi completamente reescrito com Next.js 16, React 19, TypeScript e Tailwind CSS 4. Nova identidade visual, novas páginas, animações e o protótipo do JalepOS integrado. A JALEP v2 é nosso projeto mais ambicioso.",
    icon: "auto_awesome",
  },
];

export default function TimelinePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[720px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">timeline</p>
            <h1 className="section-title mb-4">Nossa História</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              De um trabalho escolar a um laboratório de referência. Cada marco representa um passo na construção da JALEP.
            </p>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)] opacity-30 sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    {/* Content card */}
                    <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:text-left sm:pl-10"}`}>
                      <div className="glass-card p-6">
                        <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                          <span className="font-mono text-xs text-[var(--color-primary)]">{m.year}</span>
                          <span className="chip text-[0.6rem]">{m.month}</span>
                        </div>
                        <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                          <span className="material-symbols-outlined icon-primary" style={{ fontSize: 20 }}>{m.icon}</span>
                          <h3 className="font-heading font-bold text-base text-[var(--color-text)]">{m.title}</h3>
                        </div>
                        <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    {/* Dot on timeline */}
                    <div className="absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-bg)] z-10 sm:left-1/2" />

                    {/* Spacer for other side */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Closing note */}
          <ScrollReveal delay={200}>
            <div className="neon-card p-8 text-center mt-16">
              <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 40 }}>trending_up</span>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">E não vamos parar por aqui.</h3>
              <p className="text-sm text-[var(--color-text-sec)] mb-6">
                Cada dia é uma oportunidade de melhorar nosso processo, atender mais pessoas e provar que reparo profissional é ciência — não arte.
              </p>
              <Link href="/sobre" className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>info</span>
                Conheça a JALEP
              </Link>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={300}>
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
