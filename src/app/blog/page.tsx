"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const articles = [
  {
    title: "5 Sinais de Que Sua Bateria Precisa Ser Trocada",
    date: "15 Jan 2025",
    category: "Dicas",
    icon: "battery_alert",
    excerpt: "Bateria inchada, descarregamento rápido, aquecimento anormal, ciclo acima de 80% e desligamento repentino são os cinco sinais claros. Ignorar esses sintomas pode danificar outros componentes — especialmente a placa-mãe em notebooks.",
    fullContent: "Bateria inchada, descarregamento rápido, aquecimento anormal, ciclo acima de 80% e desligamento repentino são os cinco sinais claros. Ignorar esses sintomas pode danificar outros componentes — especialmente a placa-mãe em notebooks. Para diagnosticar, use apps como coconutBattery (macOS) ou AccuBattery (Android). Se o ciclo de carga ultrapassar 80% da capacidade original, está na hora de trocar. No laboratório JALEP, usamos baterias classificação A+ com garantia de 90 dias e realizamos a troca com protocolo de segurança ESD completo.",
  },
  {
    title: "Como Proteger Seu Smartphone de Quedas e Líquidos",
    date: "10 Jan 2025",
    category: "Prevenção",
    icon: "shield",
    excerpt: "Capa com absorção de impacto, película templada e cuidado com líquidos são o básico. Mas sabia que o maior inimigo do display é a areia no bolso? E que 90% dos danos por água acontecem no bolso da calça suada?",
    fullContent: "Capa com absorção de impacto, película templada e cuidado com líquidos são o básico. Mas sabia que o maior inimigo do display é a areia no bolso? E que 90% dos danos por água acontecem no bolso da calça suada? Recomendamos capas com canto reforçado (military drop test), película 9H e evitar qualquer contato com areia de praia. Para proteção contra água, nada substitui uma capa à prova d'água IP68. Se o aparelho molhou, desligue imediatamente, não tente carregar e traga ao laboratório em até 48h para tratamento anti-corrosão.",
  },
  {
    title: "SSD vs HDD: Vale a Pena o Upgrade?",
    date: "05 Jan 2025",
    category: "Upgrade",
    icon: "rocket_launch",
    excerpt: "Se seu notebook ainda usa HDD mecânico, o upgrade para SSD é a melhoria mais impactante que você pode fazer. Tempo de boot cai de 45s para 8s, aplicativos abrem instantamente e a durabilidade aumenta drasticamente.",
    fullContent: "Se seu notebook ainda usa HDD mecânico, o upgrade para SSD é a melhoria mais impactante que você pode fazer. Tempo de boot cai de 45s para 8s, aplicativos abrem instantamente e a durabilidade aumenta drasticamente. SSDs NVMe como o Samsung 990 Pro alcançam 7.450 MB/s de leitura — mais de 14x mais rápido que um HDD de 5400 RPM. Na JALEP, fazemos a migração completa: clonamos seu sistema, validamos todos os dados e garantimos zero perda de informação. Upgrade com garantia e suporte técnico incluídos.",
  },
  {
    title: "O Que Fazer Quando O Notebook Não Liga",
    date: "28 Dez 2024",
    category: "Troubleshoot",
    icon: "power_off",
    excerpt: "Antes de entrar em pânico: verifique a fonte, teste outra tomada, faça hard reset (segure power 30s), cheque o LED do carregador. Se nada funcionar, o problema pode ser na placa-mãe — e aí é hora de vir ao laboratório.",
    fullContent: "Antes de entrar em pânico: verifique a fonte, teste outra tomada, faça hard reset (segure power 30s), cheque o LED do carregador. Se nada funcionar, o problema pode ser na placa-mãe — e aí é hora de vir ao laboratório. Checklist completo: 1) Teste a fonte em outro aparelho; 2) Remova bateria e periféricos; 3) Resete CMOS; 4) Verifique RAM stick por stick; 5) Escute beeps do POST. Se o problema for na placa-mãe, nosso diagnóstico com osciloscópio e multímetro identifica exatamente o componente defeituoso — e fazemos micro-solda de precisão quando possível.",
  },
  {
    title: "Pasta Térmica: Quando e Como Trocar",
    date: "20 Dez 2024",
    category: "Manutenção",
    icon: "thermostat",
    excerpt: "A pasta térmica seca após 2-3 anos de uso. Sintomas: aquecimento excessivo, throttling (perda de performance) e desligamento repentino. Trocar a pasta é barato e pode dar anos a mais de vida ao seu aparelho.",
    fullContent: "A pasta térmica seca após 2-3 anos de uso. Sintomas: aquecimento excessivo, throttling (perda de performance) e desligamento repentino. Trocar a pasta é barato e pode dar anos a mais de vida ao seu aparelho. Use monitores como HWMonitor ou Core Temp para verificar temperaturas. Se o CPU ultrapassar 90°C em idle, está na hora. Na JALEP, usamos pasta de alta condutividade térmica (Artic MX-6 ou Thermal Grizzly Kryonaut), aplicamos com espalhamento uniforme e validamos a temperatura pós-serviço com teste de stress por 30 minutos.",
  },
  {
    title: "Diagnóstico de Tela: LCD, OLED e LED — Diferenças na Troca",
    date: "12 Dez 2024",
    category: "Hardware",
    icon: "monitor",
    excerpt: "Cada tipo de display tem processo e custo diferente. LCD é o mais acessível, OLED requer cuidado extra com o flex e calibração de True Tone, e LED de notebook integra webcam + microfone no mesmo módulo. Saiba o que muda no orçamento.",
    fullContent: "Cada tipo de display tem processo e custo diferente. LCD é o mais acessível, OLED requer cuidado extra com o flex e calibração de True Tone, e LED de notebook integra webcam + microfone no mesmo módulo. Saiba o que muda no orçamento. Displays OLED de iPhone exigem calibração pós-instalação para True Tone e brilho automático — sem isso, o display fica com tons errados. LCDs de notebook precisam de matching exato do conector (eDP 1-lane vs 2-lane vs 4-lane). Na JALEP, todo display passa por validação de cores, toque e brilho antes da entrega.",
  },
];

export default function BlogPage() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">blog</p>
            <h1 className="section-title mb-4">Dicas & Artigos</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Compartilhamos conhecimento porque acreditamos que informação previne problemas. Dicas de manutenção, diagnósticos e novidades do lab.
            </p>
          </ScrollReveal>

          {/* Featured Article */}
          <ScrollReveal delay={50}>
            <div className="neon-card mb-10">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)]" />
              <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-[var(--color-primary-dim)] flex items-center justify-center border border-[var(--color-primary-border)]">
                    <span className="material-symbols-outlined icon-primary" style={{ fontSize: 48 }}>{articles[0].icon}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="chip text-[0.6rem]">Destaque</span>
                    <span className="chip text-[0.6rem]">{articles[0].category}</span>
                    <span className="font-mono text-xs text-[var(--color-text-muted)]">{articles[0].date}</span>
                  </div>
                  <h2 className="font-heading font-bold text-xl text-[var(--color-text)] mb-3">{articles[0].title}</h2>
                  <p className="text-sm text-[var(--color-text-sec)] leading-relaxed mb-4">{articles[0].excerpt}</p>
                  <button
                    className="btn-ghost text-xs"
                    onClick={() => setExpandedArticle(expandedArticle === 0 ? null : 0)}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{expandedArticle === 0 ? "arrow_back" : "arrow_forward"}</span>
                    {expandedArticle === 0 ? "Fechar" : "Ler Artigo"}
                  </button>
                  {expandedArticle === 0 && articles[0].fullContent && (
                    <div className="mt-4 p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text-sec)] leading-relaxed">
                      {articles[0].fullContent}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {articles.slice(1).map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 80}>
                <div className="glass-card p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-dim)] flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 20 }}>{article.icon}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="chip text-[0.6rem]">{article.category}</span>
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">{article.date}</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-3">{article.title}</h3>
                  <p className="text-sm text-[var(--color-text-sec)] leading-relaxed mb-4 flex-1">{expandedArticle === i + 1 && article.fullContent ? article.fullContent : article.excerpt}</p>
                  <button
                    className="font-mono text-xs text-[var(--color-primary)] cursor-pointer inline-flex items-center gap-1"
                    onClick={() => setExpandedArticle(expandedArticle === i + 1 ? null : i + 1)}
                  >
                    {expandedArticle === i + 1 ? "Fechar" : "Ler mais"}
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{expandedArticle === i + 1 ? "arrow_back" : "arrow_forward"}</span>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Newsletter placeholder */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 text-center mb-12">
              <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 40 }}>mail</span>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">Fique por dentro</h3>
              <p className="text-sm text-[var(--color-text-sec)] mb-6">
                Receba dicas de manutenção e novidades do laboratório diretamente no seu e-mail. Sem spam, prometemos.
              </p>
              {subscribed ? (
                <div className="p-4 rounded-lg bg-[var(--color-primary-dim)] border border-[var(--color-primary-border)] text-sm text-[var(--color-text)] inline-flex items-center gap-2">
                  <span className="material-symbols-outlined icon-primary" style={{ fontSize: 20 }}>check_circle</span>
                  Inscrito com sucesso! Você receberá nossas dicas por e-mail.
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
                  className="flex gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="flex-1 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                  <button type="submit" className="btn-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={200}>
            <div className="text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/faq" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>help</span>
                  FAQ
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
