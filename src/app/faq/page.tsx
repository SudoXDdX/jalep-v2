"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const faqs = [
  {
    q: "Quanto tempo leva um reparo típico?",
    a: "O tempo de reparo varia conforme a complexidade do problema. Reparos simples como troca de tela ou bateria costumam ficar prontos em 24 a 48 horas. Problemas mais complexos, como curtos na placa-mãe ou recuperação de dados, podem levar de 3 a 7 dias úteis. Sempre informamos o prazo estimado após o diagnóstico."
  },
  {
    q: "Vocês oferecem garantia nos reparos?",
    a: "Sim, todos os reparos realizados na JALEP possuem garantia de 90 dias para mão de obra e peças instaladas por nós. Se o mesmo problema voltar dentro desse período, reparamos sem custo adicional. A garantia não cobre danos por mau uso, quedas ou infiltração de líquido após a entrega."
  },
  {
    q: "Como funciona o processo de diagnóstico?",
    a: "Ao chegar no laboratório, seu aparelho passa por uma avaliação completa usando equipamento profissional — multímetro, osciloscópio e fontes de bancada. Identificamos a causa raiz do problema e apresentamos um orçamento detalhado com tempo e custo estimados. O diagnóstico é gratuito se você aprovar o reparo."
  },
  {
    q: "Quais tipos de aparelhos vocês consertam?",
    a: "Reparamos smartphones, notebooks, tablets, desktops, monitores, impressoras, videogames e periféricos em geral. Também trabalhamos com montagem de PCs sob medida e upgrades de hardware. Se o seu aparelho não está na lista, entre em contato — avaliamos caso a caso."
  },
  {
    q: "Vocês usam peças originais?",
    a: "Sempre que possível utilizamos peças originais ou de qualidade equivalente certificada. Para componentes onde a original não está disponível, usamos peças de fabricantes reconhecidos com garantia de compatibilidade. Nunca usamos peças de procedência duvidosa ou contrafeitas — a qualidade do reparo depende da qualidade da peça."
  },
  {
    q: "Posso acompanhar o status do meu reparo?",
    a: "Sim! Após deixar o aparelho, você recebe um código de protocolo. Com ele, pode acompanhar em tempo real o status do reparo pela nossa página de status ou pelo WhatsApp. Atualizamos cada etapa: diagnóstico, aprovação, reparo em andamento, teste de validação e pronto para retirada."
  },
  {
    q: "O que acontece se o reparo não for possível?",
    a: "Se durante o diagnóstico concluímos que o reparo não é viável — seja por custo, indisponibilidade de peças ou dano irreversível — informamos você antes de qualquer ação. Não cobramos pelo diagnóstico nesses casos. Se houver dados no aparelho, oferecemos serviço de recuperação separado."
  },
  {
    q: "Vocês fazem atendimento a domicilio?",
    a: "Para serviços simples como instalação de software, configuração de rede ou montagem de PC, podemos ir até você com agendamento prévio. Para reparos que exigem equipamento de bancada (micro-solda, diagnóstico de placa), o aparelho precisa vir ao nosso laboratório. Buscamos e entregamos com taxa adicional."
  },
  {
    q: "Qual a forma de pagamento aceita?",
    a: "Aceitamos PIX, cartão de crédito (até 3x sem juros), cartão de débito e dinheiro. Para reparos acima de R$ 500, oferecemos parcelamento em até 6x com juros. O pagamento é feito na retirada do aparelho, após você validar que tudo está funcionando."
  },
  {
    q: "Preciso fazer backup antes de entregar o aparelho?",
    a: "Recomendamos fortemente que você faça backup dos seus dados antes de entregar qualquer aparelho. Embora tomemos todos os cuidados, reparos podem exigir formatação ou reset. Se você não souber fazer backup, oferecemos o serviço de backup e recuperação de dados como adicional."
  },
  {
    q: "Vocês trabalham com aparelhos de empresas?",
    a: "Sim! Atendemos empresas com condições especiais para volume. Oferecemos contratos de manutenção preventiva, SLA de atendimento prioritário e condições de pagamento corporativo (boleto e nota fiscal). Entre em contato com nosso setor B2B para uma proposta personalizada."
  },
  {
    q: "O orçamento é gratuito?",
    a: "O orçamento é gratuito quando você aprova o reparo. Se você decidir não prosseguir após o diagnóstico, cobramos uma taxa de R$ 30 pelo serviço de diagnóstico, que é abatida caso volte dentro de 30 dias para realizar o reparo. Queremos garantir que nosso tempo de análise seja respeitado."
  },
  {
    q: "Como vocês garantem a qualidade do reparo?",
    a: "Cada reparo segue nosso protocolo de 4 etapas: diagnóstico preciso, reparo executado com peças de qualidade, teste completo de validação e checklist de entrega. Usamos equipamento profissional de bancada e documentamos cada etapa. Antes da entrega, você testa o aparelho conosco para validar."
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[720px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">faq</p>
            <h1 className="section-title mb-4">Perguntas Frequentes</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Reunimos as dúvidas mais comuns sobre nossos serviços de reparo. Se não encontrar sua resposta, entre em contato.
            </p>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="space-y-3 mb-12">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined icon-primary flex-shrink-0" style={{ fontSize: 20 }}>
                        help
                      </span>
                      <span className="font-heading font-bold text-sm text-[var(--color-text)]">{faq.q}</span>
                    </div>
                    <span className="material-symbols-outlined text-[var(--color-primary)] transition-transform duration-300 flex-shrink-0" style={{ fontSize: 20, transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                      expand_more
                    </span>
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="h-[1px] bg-[var(--color-border)] mb-4" />
                      <p className="text-sm text-[var(--color-text-sec)] leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Still have questions */}
          <ScrollReveal delay={100}>
            <div className="neon-card p-8 text-center">
              <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 40 }}>contact_support</span>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">Ainda tem dúvidas?</h3>
              <p className="text-sm text-[var(--color-text-sec)] mb-6">
                Nossa equipe está pronta para responder qualquer pergunta sobre nossos serviços, prazos ou condições.
              </p>
              <Link href="/contato" className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
                Fale Conosco
              </Link>
            </div>
          </ScrollReveal>

          {/* Quick links */}
          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <p className="text-sm text-[var(--color-text-sec)] mb-6">Páginas relacionadas</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/servicos" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>build</span>
                  Serviços
                </Link>
                <Link href="/pricing" className="btn-ghost">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>payments</span>
                  Preços
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
