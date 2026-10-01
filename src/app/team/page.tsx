"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const team = [
  {
    name: "João Gabriel",
    role: "CEO · Editor · Influencer",
    bio: "Fundador e líder visionário da JALEP Corporação. Responsável pela estratégia, conteúdo editorial e presença digital. Coordena a equipe e garante que cada projeto siga o protocolo JALEP.",
    skills: ["Liderança", "Conteúdo", "Estratégia"],
    icon: "engineering",
    color: "var(--color-cyan)",
  },
  {
    name: "André",
    role: "TI · Técnico · Security Researcher",
    bio: "Responsável técnico por infraestrutura e segurança. Security Researcher comprovado — CVE-2026-43499 (Ghost Lock), root Samsung Galaxy SM-A576B via kernel 6.12.38 exploit, bug bounty ativo sob NDA.",
    skills: ["Security", "Kernel Exploit", "Hardware", "Bug Bounty"],
    icon: "code",
    color: "var(--color-green)",
    proof: ["sudoxddx.github.io/Who-Am-I", "github.com/sudoxddx/Root-My-Galaxy-SM-a576b"],
  },
  {
    name: "Lucas",
    role: "Escritor · Conteúdo",
    bio: "Escritor e criador de conteúdo. Transforma ideias em textos claros e envolventes para a JALEP.",
    skills: ["Redação", "Conteúdo", "Comunicação"],
    icon: "edit_note",
    color: "var(--color-amber)",
  },
  {
    name: "João Lucas",
    role: "Técnico · Substituto",
    bio: "Técnico de suporte e substituto. Sempre pronto para assumir qualquer função quando necessário.",
    skills: ["Suporte", "Flexibilidade", "Micro-solda"],
    icon: "build",
    color: "var(--color-violet)",
  },
  {
    name: "Pedro",
    role: "Auxiliar · Montagem",
    bio: "Auxiliar geral responsável por montagem e preparação de equipamentos.",
    skills: ["Montagem", "Assistência"],
    icon: "support_agent",
    color: "var(--color-primary)",
  },
];

export default function TeamPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">equipe</p>
            <h1 className="section-title mb-4">Quem Faz Acontecer</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Cada membro tem sua especialidade, mas todos compartilham o mesmo compromisso: reparo profissional, sem improviso.
            </p>
          </ScrollReveal>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div className="glass-card p-6 h-full flex flex-col">
                  {/* Avatar placeholder */}
                  <div className="flex justify-center mb-5">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center border-2"
                      style={{ borderColor: member.color, backgroundColor: `${member.color}15` }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 36, color: member.color }}>{member.icon}</span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-4">
                    <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-1">{member.name}</h3>
                    <p className="font-mono text-xs" style={{ color: member.color }}>{member.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-[var(--color-text-sec)] leading-relaxed text-center mb-5 flex-1">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {member.skills.map((skill) => (
                      <span key={skill} className="chip text-[0.6rem]">{skill}</span>
                    ))}
                  </div>

                  {/* Proof links (Security Researcher) */}
                  {"proof" in member && member.proof && (
                    <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                      {member.proof.map((url: string) => (
                        <a
                          key={url}
                          href={`https://${url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[0.55rem] font-mono text-[var(--color-cyan)] hover:underline opacity-70 hover:opacity-100 transition-opacity"
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 10, verticalAlign: "middle" }}>verified</span>
                          {url.replace("sudoxddx.github.io/", "").replace("github.com/sudoxddx/", "")}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Team values */}
          <ScrollReveal delay={100}>
            <div className="neon-card p-8 mb-12">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-violet)]" />
              <p className="section-kicker mb-4">valores</p>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-6">O Que Nos Move</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: "precision_manufacturing", title: "Precisão", desc: "Cada reparo segue protocolo. Nada de achismo — diagnóstico, execução, validação." },
                  { icon: "verified_user", title: "Transparência", desc: "Orçamento claro, prazo realista, comunicação constante. Sem surpresas na retirada." },
                  { icon: "school", title: "Evolução", desc: "Estudamos constantemente. Cada reparo é oportunidade de aprender algo novo." },
                ].map((v) => (
                  <div key={v.title} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary-dim)] flex items-center justify-center mx-auto mb-3 border border-[var(--color-primary-border)]">
                      <span className="material-symbols-outlined icon-primary" style={{ fontSize: 22 }}>{v.icon}</span>
                    </div>
                    <p className="font-heading font-bold text-sm text-[var(--color-text)] mb-2">{v.title}</p>
                    <p className="text-xs text-[var(--color-text-sec)]">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Join CTA */}
          <ScrollReveal delay={200}>
            <div className="glass-card p-8 text-center">
              <span className="material-symbols-outlined icon-primary mb-4 block" style={{ fontSize: 40 }}>group_add</span>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">Quer fazer parte?</h3>
              <p className="text-sm text-[var(--color-text-sec)] mb-6">
                Estamos sempre buscando pessoas comprometidas com qualidade. Se você respira tecnologia, fale conosco.
              </p>
              <Link href="/contato" className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span>
                Entre em Contato
              </Link>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={300}>
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
