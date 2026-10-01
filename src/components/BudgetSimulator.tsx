"use client";

import { useState, useCallback } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ═══════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════ */

/* Read API key dynamically (gk.js sets window.__JALEP_GK at runtime) */
const getApiKey = () => (typeof window !== 'undefined' && (window as any).__JALEP_GK) || '';
const getEndpoint = () => `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${getApiKey()}`;

const SYSTEM_PROMPT = `Você é o assistente virtual da JALEP Corporação — Assistência Técnica Profissional, fundada em 2026 por estudantes do 7° Ano A em São Paulo.
Sua função é gerar orçamentos simulados de upgrade, reparo e diagnóstico para notebooks, desktops e smartphones.

═══ IDENTIDADE ═══
- Nome: Assistente JALEP
- Empresa: JALEP Corporação (JJALP internamente — João Gabriel, João Lucas, André, Lucas, Pedro)
- Slogan: "Diagnóstico preciso. Reparo certeiro. Zero improviso."
- Contato: +55 19 99486-4845 | contato@jalep.tech

═══ REGRAS DE RESPOSTA ═══
1. Sempre responda em português brasileiro, com tom profissional mas acessível — como um técnico experiente explicando pra um cliente.
2. Forneça estimativas de preço REALISTAS baseadas no mercado brasileiro atual (Mercado Livre, Amazon BR, Kabum, Pichau, Terabyte).
3. SEMPRE separe e detalhe: custo de cada peça individualmente + custo do serviço de instalação + total.
4. Inclua tempo estimado de execução do serviço (ex: "30 min para upgrade de RAM", "2-3 dias para reparo de placa").
5. Se o usuário não especificar algo (marca, modelo, capacidade), assuma o mais comum para o contexto e diga o que assumiu.
6. Adicione DISCLAIMER: "⚠️ Estimativa baseada em valores de mercado. O orçamento final pode variar após diagnóstico presencial."
7. Formate usando markdown com seções claras: ## Resumo, ## Itens, ## Serviço, ## Total, ## Observações
8. NUNCA invente preços. Se não tiver certeza, diga: "Preciso verificar disponibilidade no estoque. Entre em contato pelo WhatsApp: +55 19 99486-4845"
9. Sempre mencione que a JALEP oferece DIAGNÓSTICO PAGO acessível (R$ 30-50) antes de qualquer reparo, e que esse valor é abatido do orçamento final se o reparo for aprovado.
10. Para upgrades de RAM: pesquise preços de DDR4/DDR5 no Mercado Livre, indique velocidade (MHz), latência (CL), e compatibilidade com o modelo informado.
11. Para upgrades de SSD: diferencie SATA vs NVMe (M.2), indique marca, capacidade e velocidade de leitura/gravação.
12. Para reparos: explique o processo (diagnóstico → aprovação → execução → validação → entrega) e prazo.

═══ FORMATO DE RESPOSTA ═══
Use este template:

## 🔧 Orçamento — [Tipo de Serviço]

**Cliente:** [nome]
**Dispositivo:** [tipo] [modelo]
**Data:** [data atual]

---

### Itens Necessários
| Item | Qtd | Valor Unit. | Subtotal |
|------|-----|-------------|----------|
| ... | ... | ... | ... |

### Serviço
| Serviço | Valor |
|---------|-------|
| Diagnóstico | R$ 30-50* |
| Instalação | R$ XX |
| \*abatido do final | |

### Total Estimado
**R$ XXX,XX**

### Prazo
⏱️ [tempo estimado]

### Observações
- [notas importantes]
- [compatibilidade]
- [garantia: 90 dias em peças, 30 dias em serviço]

---

⚠️ Estimativa baseada em valores de mercado. Para orçamento final, agende um diagnóstico.
📱 WhatsApp: +55 19 99486-4845 | ✉️ contato@jalep.tech

CONTEXTO DO ORÇAMENTO:`;

/* ═══════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════ */

type ServiceType = "upgrade" | "reparo" | "diagnostico" | "outro";
type DeviceType = "notebook" | "desktop" | "smartphone" | "outro";

interface FormData {
  nome: string;
  tipo: ServiceType;
  dispositivo: DeviceType;
  modelo: string;
  itens: string[];
  detalhes: string;
  quantidade: number;
}

/* ═══════════════════════════════════════════
   OPTIONS MAPS
   ═══════════════════════════════════════════ */

const SERVICE_TYPES: { value: ServiceType; label: string; icon: string }[] = [
  { value: "upgrade", label: "Upgrade", icon: "arrow_upward" },
  { value: "reparo", label: "Reparo", icon: "build" },
  { value: "diagnostico", label: "Diagnóstico", icon: "troubleshoot" },
  { value: "outro", label: "Outro", icon: "more_horiz" },
];

const DEVICE_TYPES: { value: DeviceType; label: string; icon: string }[] = [
  { value: "notebook", label: "Notebook", icon: "laptop_mac" },
  { value: "desktop", label: "Desktop", icon: "desktop_windows" },
  { value: "smartphone", label: "Smartphone", icon: "smartphone" },
  { value: "outro", label: "Outro", icon: "devices" },
];

const ITEMS_BY_SERVICE: Record<ServiceType, string[]> = {
  upgrade: ["RAM", "SSD", "Placa de Vídeo", "Processador", "Wi-Fi", "Bateria", "Display", "Outro"],
  reparo: ["Placa-mãe", "Tela", "Teclado", "Bateria", "Cooler", "Porta USB", "HD/SSD", "Outro"],
  diagnostico: ["Diagnóstico Completo", "Teste de Bateria", "Teste de Hardware", "Outro"],
  outro: ["Avaliação Geral", "Outro"],
};

const SERVICE_LABELS: Record<ServiceType, string> = {
  upgrade: "Upgrade",
  reparo: "Reparo",
  diagnostico: "Diagnóstico",
  outro: "Outro",
};

const DEVICE_LABELS: Record<DeviceType, string> = {
  notebook: "Notebook",
  desktop: "Desktop",
  smartphone: "Smartphone",
  outro: "Outro",
};

/* ═══════════════════════════════════════════
   SIMPLE MARKDOWN → HTML RENDERER
   ═══════════════════════════════════════════ */

function renderMarkdown(md: string): string {
  let html = md
    // Headers
    .replace(/^### (.+)$/gm, '<h4 class="font-heading font-bold text-base text-[var(--color-text)] mt-4 mb-2">$1</h4>')
    .replace(/^## (.+)$/gm, '<h3 class="font-heading font-bold text-lg text-[var(--color-primary)] mt-5 mb-2">$1</h3>')
    .replace(/^# (.+)$/gm, '<h2 class="font-heading font-bold text-xl text-[var(--color-primary)] mt-6 mb-3">$1</h2>')
    // Bold & Italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[var(--color-text)]">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="font-mono text-xs px-1.5 py-0.5 rounded bg-[var(--color-primary-dim)] text-[var(--color-primary)]">$1</code>')
    // Unordered lists
    .replace(/^\- (.+)$/gm, '<li class="flex items-start gap-2 ml-4 mb-1"><span class="material-symbols-outlined text-[var(--color-primary)] shrink-0" style="font-size:14px;margin-top:2px">check_circle</span><span>$1</span></li>')
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 mb-1 list-decimal">$1</li>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="border-[var(--color-border)] my-4" />')
    // Line breaks → paragraphs (double newline)
    .replace(/\n\n/g, "</p><p class='text-sm text-[var(--color-text-sec)] leading-relaxed mb-2'>")
    // Single newlines
    .replace(/\n/g, "<br/>");

  // Wrap in a paragraph if not starting with a block element
  if (!html.startsWith("<h") && !html.startsWith("<li")) {
    html = `<p class="text-sm text-[var(--color-text-sec)] leading-relaxed mb-2">${html}</p>`;
  }

  return html;
}

/* ═══════════════════════════════════════════
   BUDGET SIMULATOR COMPONENT
   ═══════════════════════════════════════════ */

export default function BudgetSimulator() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    tipo: "upgrade",
    dispositivo: "notebook",
    modelo: "",
    itens: [],
    detalhes: "",
    quantidade: 1,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /* ── handlers ── */

  const toggleItem = useCallback((item: string) => {
    setForm((prev) => ({
      ...prev,
      itens: prev.itens.includes(item)
        ? prev.itens.filter((i) => i !== item)
        : [...prev.itens, item],
    }));
  }, []);

  const handleServiceChange = useCallback((tipo: ServiceType) => {
    setForm((prev) => ({ ...prev, tipo, itens: [] }));
  }, []);

  /* ── submit ── */

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    const itensStr = form.itens.length > 0 ? form.itens.join(", ") : "não especificado";

    const userPrompt = `O usuário ${form.nome || "anônimo"} solicita um orçamento de ${SERVICE_LABELS[form.tipo]} para um ${DEVICE_LABELS[form.dispositivo]} ${form.modelo || "(modelo não informado)"}.
Itens selecionados: ${itensStr} (quantidade: ${form.quantidade})
Detalhes adicionais: ${form.detalhes || "nenhum"}

Por favor, forneça um orçamento estimado detalhado.`;

    const fullPrompt = `${SYSTEM_PROMPT}\n${userPrompt}`;

    try {
      const apiKey = getApiKey();
      if (!apiKey) {
        throw new Error('API_KEY_MISSING');
      }

      const res = await fetch(getEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          },
        }),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        const errStatus = errBody?.error?.status || '';
        if (errStatus === 'FAILED_PRECONDITION' || res.status === 400) {
          throw new Error('REGION_BLOCKED');
        }
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error("Resposta vazia da IA");
      }

      setResult(text);
    } catch (err: any) {
      const msg = err?.message || '';
      if (msg === 'REGION_BLOCKED') {
        setError(
          "A API do Google Gemini não está disponível na sua região no momento. Isso é uma limitação do Google, não do site.\n\nMas calma — você ainda pode pedir seu orçamento manualmente pelo WhatsApp:"
        );
      } else if (msg === 'API_KEY_MISSING') {
        setError(
          "O serviço de orçamento por IA não está configurado no momento.\n\nPor favor, entre em contato pelo WhatsApp para um orçamento manual:"
        );
      } else {
        setError(
          "Não foi possível gerar o orçamento no momento. Isso pode ocorrer devido a restrições de região ou limite de requisições.\n\nPor favor, entre em contato pelo WhatsApp para um orçamento manual:"
        );
      }
    } finally {
      setLoading(false);
    }
  }

  /* ── reset ── */

  function handleReset() {
    setResult(null);
    setError(null);
  }

  /* ── available items ── */
  const availableItems = ITEMS_BY_SERVICE[form.tipo];

  /* ═══════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════ */

  return (
    <section id="budget" className="relative z-[1] py-24 px-6">
      <div className="max-w-[640px] mx-auto">
        {/* ── Header ── */}
        <ScrollReveal>
          <p className="section-kicker">orçamento</p>
          <h2 className="section-title mb-2">Simular Orçamento</h2>
          <p className="text-sm text-[var(--color-text-sec)] mb-8">
            Preencha os dados e receba uma estimativa inteligente via IA
          </p>
        </ScrollReveal>

        {/* ── Result Card ── */}
        {result && (
          <ScrollReveal>
            <div className="neon-card mb-8">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)]" />

              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined icon-primary" style={{ fontSize: 24 }}>receipt_long</span>
                <h3 className="font-heading font-bold text-lg text-[var(--color-text)]">
                  Orçamento Estimado
                </h3>
              </div>

              <div
                className="text-sm text-[var(--color-text-sec)] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(result) }}
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={handleReset} className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>refresh</span>
                  Novo Orçamento
                </button>
                <a
                  href="https://wa.me/551994864845?text=Olá!%20Gostaria%20de%20confirmar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
                  Confirmar no WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ── Error Card ── */}
        {error && (
          <ScrollReveal>
            <div className="neon-card mb-8" style={{ borderColor: "var(--color-red)" }}>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-red)]" />

              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined" style={{ fontSize: 24, color: "var(--color-red)" }}>error</span>
                <h3 className="font-heading font-bold text-lg text-[var(--color-text)]">
                  Serviço Indisponível
                </h3>
              </div>

              <p className="text-sm text-[var(--color-text-sec)] leading-relaxed mb-4">{error}</p>

              <a
                href="https://wa.me/551994864845?text=Olá!%20Preciso%20de%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
                Chamar no WhatsApp
              </a>

              <button
                onClick={handleReset}
                className="btn-ghost mt-3"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>refresh</span>
                Tentar Novamente
              </button>
            </div>
          </ScrollReveal>
        )}

        {/* ── Form ── */}
        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div>
              <label className="budget-label">Seu Nome</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" style={{ fontSize: 18 }}>person</span>
                <input
                  type="text"
                  className="budget-input pl-10"
                  placeholder="Ex.: João Lucas"
                  value={form.nome}
                  onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
                  required
                />
              </div>
            </div>

            {/* Tipo de Serviço — Segmented Control */}
            <div>
              <label className="budget-label">Tipo de Serviço</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SERVICE_TYPES.map((svc) => (
                  <button
                    key={svc.value}
                    type="button"
                    onClick={() => handleServiceChange(svc.value)}
                    className={`
                      relative flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl
                      font-mono text-xs font-medium transition-all duration-200
                      border cursor-pointer
                      ${
                        form.tipo === svc.value
                          ? "bg-[var(--color-primary-dim)] border-[var(--color-primary-border)] text-[var(--color-primary)] shadow-[0_0_12px_color-mix(in_srgb,var(--color-primary)_15%,transparent)]"
                          : "bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-text-sec)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]"
                      }
                    `}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{svc.icon}</span>
                    {svc.label}
                    {form.tipo === svc.value && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--color-primary)]" style={{ boxShadow: "0 0 6px var(--color-primary)" }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dispositivo — Segmented Control */}
            <div>
              <label className="budget-label">Dispositivo</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {DEVICE_TYPES.map((dev) => (
                  <button
                    key={dev.value}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, dispositivo: dev.value }))}
                    className={`
                      relative flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl
                      font-mono text-xs font-medium transition-all duration-200
                      border cursor-pointer
                      ${
                        form.dispositivo === dev.value
                          ? "bg-[var(--color-primary-dim)] border-[var(--color-primary-border)] text-[var(--color-primary)] shadow-[0_0_12px_color-mix(in_srgb,var(--color-primary)_15%,transparent)]"
                          : "bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-text-sec)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]"
                      }
                    `}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{dev.icon}</span>
                    {dev.label}
                    {form.dispositivo === dev.value && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--color-primary)]" style={{ boxShadow: "0 0 6px var(--color-primary)" }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Modelo */}
            <div>
              <label className="budget-label">Modelo do Aparelho</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" style={{ fontSize: 18 }}>devices</span>
                <input
                  type="text"
                  className="budget-input pl-10"
                  placeholder="Ex.: Acer Nitro V15 ANV15-51"
                  value={form.modelo}
                  onChange={(e) => setForm((p) => ({ ...p, modelo: e.target.value }))}
                />
              </div>
            </div>

            {/* Itens — Selectable Chips */}
            <div>
              <label className="budget-label">O que precisa?</label>
              <div className="flex flex-wrap gap-2">
                {availableItems.map((item) => {
                  const selected = form.itens.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleItem(item)}
                      className={`
                        relative flex items-center gap-1.5 px-3 py-1.5 rounded-full
                        font-mono text-xs transition-all duration-200 border cursor-pointer
                        ${
                          selected
                            ? "bg-[var(--color-primary-dim)] border-[var(--color-primary-border)] text-[var(--color-primary)] shadow-[0_0_8px_color-mix(in_srgb,var(--color-primary)_12%,transparent)]"
                            : "bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-text-sec)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]"
                        }
                      `}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                        {selected ? "check_circle" : "radio_button_unchecked"}
                      </span>
                      {item}
                    </button>
                  );
                })}
              </div>
              {form.itens.length === 0 && (
                <p className="font-mono text-[10px] text-[var(--color-text-muted)] mt-2">
                  Selecione ao menos um item para um orçamento mais preciso
                </p>
              )}
            </div>

            {/* Detalhes */}
            <div>
              <label className="budget-label">Detalhes adicionais</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-[var(--color-text-muted)]" style={{ fontSize: 18 }}>edit_note</span>
                <textarea
                  className="budget-input pl-10"
                  rows={4}
                  placeholder="Descreva o problema ou o que precisa..."
                  value={form.detalhes}
                  onChange={(e) => setForm((p) => ({ ...p, detalhes: e.target.value }))}
                  style={{ resize: "vertical" }}
                />
              </div>
            </div>

            {/* Quantidade */}
            <div>
              <label className="budget-label">Quantidade</label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, quantidade: Math.max(1, p.quantidade - 1) }))}
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text-sec)] hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>remove</span>
                </button>
                <span className="font-mono text-lg font-bold text-[var(--color-text)] min-w-[2rem] text-center tabular-nums">
                  {form.quantidade}
                </span>
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, quantidade: Math.min(20, p.quantidade + 1) }))}
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text-sec)] hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`
                btn-primary w-full justify-center
                ${loading ? "opacity-70 cursor-wait" : ""}
              `}
            >
              {loading ? (
                <>
                  {/* Spinner */}
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ color: "var(--color-bg)" }}
                  >
                    <circle
                      cx="12" cy="12" r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="31.4 31.4"
                      strokeDashoffset="10"
                    />
                  </svg>
                  Gerando orçamento...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>auto_awesome</span>
                  Simular Orçamento
                </>
              )}
            </button>

            {/* Disclaimer */}
            <p className="font-mono text-[10px] text-[var(--color-text-muted)] text-center leading-relaxed">
              <span className="material-symbols-outlined align-middle" style={{ fontSize: 12 }}>info</span>
              {" "}Orçamento gerado por IA — valores são estimativas. Confirme pelo WhatsApp para valores finais.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
