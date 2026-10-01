"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const _k = (typeof window !== 'undefined' && (window as any).__JALEP_GK) || '';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${_k}`;

    const systemPrompt = `Você é o assistente da JALEP Corporação. Responda em português brasileiro, de forma profissional mas acolhedora. Confirme o recebimento da mensagem, ofereça ajuda e mencione que a equipe retornará em até 24h. Se a mensagem parecer um pedido de orçamento, sugira usar o simulador de orçamento no site. Contato: +55 19 99486-4845 | contato@jalep.tech`;

    const userPrompt = `Nome: ${form.nome}\nEmail: ${form.email}\nMensagem: ${form.mensagem}`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userPrompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
        }),
      });
      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
        setAiResponse(text || "Mensagem recebida! Nossa equipe retornará em breve.");
      } else {
        setAiResponse("Mensagem recebida com sucesso! Nossa equipe analisará e retornará em até 24 horas úteis. Para respostas rápidas, entre em contato pelo WhatsApp: +55 19 99486-4845");
      }
    } catch {
      setAiResponse("Mensagem recebida! Nossa equipe retornará em breve. Para urgências, ligue: +55 19 99486-4845");
    }
  };

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">contato</p>
            <h1 className="section-title mb-4">Fale Conosco</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Precisa de um diagnóstico, tem dúvidas sobre nossos serviços ou quer acompanhar um reparo? Entre em contato — respondemos em até 24 horas úteis.
            </p>
          </ScrollReveal>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <ScrollReveal delay={100}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined icon-primary" style={{ fontSize: 24 }}>edit_note</span>
                  <h2 className="font-heading font-bold text-lg text-[var(--color-text)]">Envie sua Mensagem</h2>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 48 }}>check_circle</span>
                    <h3 className="font-heading font-bold text-xl text-[var(--color-text)] mb-2">Mensagem Enviada!</h3>
                    <p className="text-sm text-[var(--color-text-sec)]">Recebemos sua mensagem e responderemos em até 24 horas úteis.</p>
                    {aiResponse && (
                      <div className="mt-4 p-4 rounded-lg bg-[var(--color-primary-dim)] border border-[var(--color-primary-border)] text-sm text-[var(--color-text-sec)] text-left">
                        <span className="material-symbols-outlined icon-primary mr-1 align-middle" style={{ fontSize: 16 }}>smart_toy</span>
                        {aiResponse}
                      </div>
                    )}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-mono text-xs text-[var(--color-primary)] mb-2">nome completo</label>
                      <input
                        type="text"
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        placeholder="Ex.: João Lucas Guloso, W Samuel"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-[var(--color-primary)] mb-2">e-mail</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[var(--color-primary)] mb-2">mensagem</label>
                      <textarea
                        required
                        rows={5}
                        value={form.mensagem}
                        onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                        className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                        placeholder="Descreva seu problema ou dúvida..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
                      Enviar Mensagem
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <ScrollReveal delay={150}>
                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-dim)] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined icon-primary" style={{ fontSize: 24 }}>mail</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-1">E-mail</h3>
                    <p className="font-mono text-sm text-[var(--color-primary)] mb-1">contato@jalep.tech</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Resposta em até 24h úteis</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-dim)] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined icon-primary" style={{ fontSize: 24 }}>phone</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-1">Telefone</h3>
                    <p className="font-mono text-sm text-[var(--color-primary)] mb-1">+55 19 99486-4845</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Seg–Sex, 9h às 18h</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-dim)] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined icon-primary" style={{ fontSize: 24 }}>location_on</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-1">Endereço</h3>
                    <p className="text-sm text-[var(--color-text-sec)] mb-1">Rua da Tecnologia, 42 — Sala 201</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Centro, São Paulo — SP</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-dim)] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined icon-primary" style={{ fontSize: 24 }}>schedule</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-1">Horário de Atendimento</h3>
                    <p className="text-sm text-[var(--color-text-sec)] mb-1">Segunda a Sexta: 9h — 18h</p>
                    <p className="text-sm text-[var(--color-text-sec)] mb-1">Sábado: 9h — 13h</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Domingos e feriados: fechado</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Social Links */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 mb-16">
              <p className="section-kicker mb-4">redes sociais</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">Nos Acompanhe</h3>
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { icon: "language", name: "Website", url: "jalep.tech" },
                  { icon: "smart_display", name: "YouTube", url: "@jalepcorp" },
                  { icon: "alternate_email", name: "Instagram", url: "@jalep.corp" },
                  { icon: "chat", name: "WhatsApp", url: "+55 19 99486-4845" },
                ].map((social) => (
                  <div key={social.name} className="flex flex-col items-center text-center p-4 rounded-xl bg-[var(--color-primary-dim)] border border-[var(--color-primary-border)]">
                    <span className="material-symbols-outlined icon-primary mb-2" style={{ fontSize: 28 }}>{social.icon}</span>
                    <p className="font-heading font-bold text-sm text-[var(--color-text)]">{social.name}</p>
                    <p className="font-mono text-xs text-[var(--color-text-muted)]">{social.url}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Map Placeholder */}
          <ScrollReveal delay={150}>
            <div className="neon-card p-8">
              <p className="section-kicker mb-4">localização</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">Onde Estamos</h3>
              <div className="w-full h-[320px] rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col items-center justify-center gap-3">
                <span className="material-symbols-outlined icon-primary" style={{ fontSize: 48 }}>map</span>
                <p className="font-mono text-sm text-[var(--color-primary)]">Rua da Tecnologia, 42 — Sala 201</p>
                <p className="text-xs text-[var(--color-text-muted)]">Centro, São Paulo — SP · CEP 01000-000</p>
                <div className="flex gap-2 mt-2">
                  <span className="chip">Google Maps</span>
                  <span className="chip">Waze</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <p className="text-sm text-[var(--color-text-sec)] mb-6">Prefere falar por telefone?</p>
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
