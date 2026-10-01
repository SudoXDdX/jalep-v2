"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const cases = [
  {
    icon: "smartphone",
    device: "iPhone 14 Pro",
    tag: "Smartphone",
    problem: "Tela OLED quebrada após queda. Touch parcialmente responsivo com zonas mortas no terço superior.",
    solution: "Substituição completa do display OLED original com calibração de True Tone e reconexão do módulo de Face ID. Teste de 72h de estresse térmico.",
    result: "Tela 100% funcional. Touch responsivo em toda a área. True Tone calibrado. Cliente retirou em 48h.",
  },
  {
    icon: "laptop_mac",
    device: "MacBook Air M2",
    tag: "Notebook",
    problem: "Não ligava. LED do MagSafe piscava em padrão fraco. Bateria com ciclo de vida acima do limite.",
    solution: "Diagnóstico revelou curto parcial no circuito de alimentação PPBUS_G3H. Micro-solda com estação JBC e fluxo no-clean para restabelecer trilha.",
    result: "Mac ligando normalmente. Bateria reconhecida com 87% de saúde. Sem instabilidades após 96h de burn-in test.",
  },
  {
    icon: "videogame_asset",
    device: "PS5 Digital",
    tag: "Console",
    problem: "Erro CE-108255-1 ao iniciar jogos. Ventilação alta mas console desligava sozinho após 20 minutos.",
    solution: "Substituição da pasta térmica original (seca) por Arctic MX-6. Limpeza completa do dissipador e reposição do thermal pad do VRAM.",
    result: "Temperatura reduzida de 82°C para 64°C em full load. Zero desligamentos após 6h de gameplay contínuo.",
  },
  {
    icon: "desktop_windows",
    device: "PC Gamer RTX 4070",
    tag: "Desktop",
    problem: "Crash aleatório em jogos pesados. Tela preta seguida de reinício. Memória VRAM com artefatos visuais.",
    solution: "Substituição do cabo de energia da GPU (fio solto no conector 12VHPWR). Re-paste da GPU e verificação de estabilidade com 3DMark Stress Test.",
    result: "Zero crashes após 48h de stress test contínuo. Score 3DMark dentro do esperado para a GPU.",
  },
  {
    icon: "tablet_mac",
    device: "iPad Air 5",
    tag: "Tablet",
    problem: "Bateria descarregando em 2 horas. Aquecimento excessivo na região do SoC. Ciclo de carga em 1200+.",
    solution: "Substituição da bateria Li-Po original por bateria certificada iFixit de capacidade equivalente. Descarte ambientalmente correto da bateria antiga.",
    result: "Autonomia de 9h+ em uso moderado. Sem aquecimento anormal. Bateria com saúde a 100% nas métricas do sistema.",
  },
  {
    icon: "print",
    device: "Epson L3250",
    tag: "Impressora",
    problem: "Bicos de impressão entupidos. Faixas brancas em impressões. Limpeza pelo software não resolveu.",
    solution: "Limpeza ultrassônica do cabeçote com solção de limpeza profissional. Realinhamento e calibração por software com padrão de teste.",
    result: "Padrão de teste perfeito. Sem faixas ou falhas. Qualidade de impressão restaurada ao nível de fábrica.",
  },
  {
    icon: "monitor",
    device: "LG UltraWide 34\"",
    tag: "Monitor",
    problem: "Backlight flickering em brilho abaixo de 60%. Zumbido audível vindo da fonte interna.",
    solution: "Substituição dos capacitores filtradores da fonte interna (2x 470µF/25V inchados). Resolda dos pads do conector do painel.",
    result: "Zero flickering em qualquer nível de brilho. Zumbido eliminado. Monitor estável em 144Hz por 24h contínuas.",
  },
  {
    icon: "headset",
    device: "Sony WH-1000XM5",
    tag: "Periférico",
    problem: "ANC com ruído de fundo em ventilação. Microfone com chiado em chamadas. Driver esquerdo mais fraco.",
    solution: "Limpeza dos microfones de ANC com ar comprimido e cotonete anti-estática. Verificação do driver com gerador de frequência e ajuste de balanço.",
    result: "ANC funcionando perfeitamente. Microfone limpo em chamadas. Balanço L/R restaurado. Qualidade de áudio como novo.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">portfólio</p>
            <h1 className="section-title mb-4">Casos de Reparo</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Cada reparo conta uma história de diagnóstico preciso e solução definitiva. Aqui estão alguns dos nossos casos mais recentes.
            </p>
          </ScrollReveal>

          {/* Case Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {cases.map((c, i) => (
              <ScrollReveal key={c.device} delay={i * 80}>
                <div className="neon-card">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)]" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-dim)] flex items-center justify-center">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-[var(--color-text)]">{c.device}</h3>
                      <span className="chip text-[0.6rem]">{c.tag}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-xs text-[var(--color-red)] mb-1">problema</p>
                      <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-[var(--color-cyan)] mb-1">solução</p>
                      <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-[var(--color-green)] mb-1">resultado</p>
                      <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats summary */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 mb-12">
              <p className="section-kicker mb-4">métricas</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">Números do Laboratório</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { icon: "build", value: "340+", label: "Reparos realizados" },
                  { icon: "verified", value: "97%", label: "Taxa de sucesso" },
                  { icon: "speed", value: "48h", label: "Tempo médio" },
                  { icon: "thumb_up", value: "4.9", label: "Satisfação" },
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
          <ScrollReveal delay={200}>
            <div className="text-center">
              <p className="text-sm text-[var(--color-text-sec)] mb-6">Precisa de um reparo profissional?</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contato" className="btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
                  Solicitar Diagnóstico
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
