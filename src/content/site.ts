/* ═══════════════════════════════════════════
   JALEP v2 — Site Content (pt-BR)
   ═══════════════════════════════════════════ */

export const site = {
  name: "JALEP",
  tagline: "Corporação",
  fullTitle: "JALEP Corporação",
  internalName: "JJALP",
  description: "Assistência Técnica Profissional",
  year: 2026,
  turma: "7° Ano A",

  hero: {
    title: ["Assistência", "Técnica", "Profissional."],
    subtitle: "Diagnóstico preciso. Reparo certeiro. Zero improviso.",
    cta1: "Solicitar Orçamento",
    cta2: "Nossos Serviços",
    stats: [
      { value: 4, label: "Serviços", icon: "build" },
      { value: 2026, label: "Fundação", icon: "calendar_today" },
      { value: 100, label: "Compromisso", suffix: "%", icon: "verified" },
      { value: 7, label: "Turma", prefix: "° A", icon: "school" },
    ],
  },

  services: [
    {
      icon: "memory",
      tag: "Placas",
      title: "Diagnóstico de Placas",
      desc: "Análise profunda de circuitos e componentes com equipamento profissional. Utilizamos osciloscópio, multímetro e estação de solda JBC para identificar a causa raiz de falhas em placas-mãe, placas de vídeo e placas lógicas de smartphones.",
      specs: ["Teste de tensão ponto a ponto", "Análise de curto com multímetro", "Leitura e regravação de BIOS", "Thermal imaging com câmera infravermelha"],
      chips: ["SMD", "BGA", "THT"],
    },
    {
      icon: "battery_charging_full",
      tag: "Baterias",
      title: "Recuperação de Baterias",
      desc: "Recarga, recondicionamento e substituição de células de íon-lítio. Cada bateria passa por teste de capacidade real, cycle count e teste de carga antes e depois do serviço para garantir segurança e performance.",
      specs: ["Cycle count e saúde da bateria", "Capacidade real vs. nominal", "Teste de carga com amperímetro", "Verificação de segurança e swelling"],
      chips: ["Li-Ion", "Li-Po", "NiMH"],
    },
    {
      icon: "build_circle",
      tag: "Peças",
      title: "Troca de Peças",
      desc: "Substituição precisa de componentes com peças de qualidade comprovada. Cada peça passa por teste de compatibilidade antes da instalação, e o aparelho é validado com bateria de testes completa antes da entrega.",
      specs: ["Teste de compatibilidade rigoroso", "Teste pós-instalação completo", "Garantia de 90 dias em peças", "Peças originais ou certificadas"],
      chips: ["SSD", "RAM", "Display"],
    },
    {
      icon: "computer",
      tag: "Notebooks",
      title: "Reparo de Notebooks",
      desc: "Manutenção completa — limpeza profunda, upgrade de hardware, troca de pasta térmica e reparo de placa-mãe. Desmontagem completa com documentação fotográfica de cada etapa para transparência total.",
      specs: ["Desmontagem completa documentada", "Limpeza profunda com ar comprimido", "Upgrade de SSD, RAM e Wi-Fi", "Troca de pasta térmica Arctic MX-6"],
      chips: ["Clean", "Upgrade", "Fix"],
    },
  ],

  about: {
    title: "O Laboratório",
    subtitle: "Onde a mágica acontece",
    features: [
      { icon: "desk", title: "Mesa de Trabalho", desc: "Setup profissional com estação de solda JBC, osciloscópio Rigol, fonte ajustável e ferramentas de precisão anti-estática." },
      { icon: "search", title: "Diagnóstico Preciso", desc: "Identificação exata da falha antes de intervir. Usamos abordagem sistemática: medida, hipótese, teste, confirmação." },
      { icon: "fact_check", title: "Testes Rigorosos", desc: "Cada reparo passa por bateria de testes completa: stress test térmico, validação de todos os periféricos e checklist de entrega." },
      { icon: "speed", title: "Performance Restaurada", desc: "Devolvemos seu aparelho como novo — ou melhor. Upgrades de SSD e RAM podem dar anos a mais de vida útil." },
    ],
  },

  specs: {
    title: "Números",
    subtitle: "Especificações do laboratório",
    bars: [
      { label: "Precisão no Diagnóstico", value: 100 },
      { label: "Taxa de Sucesso", value: 100 },
      { label: "Comprometimento", value: 100 },
      { label: "Zero Improviso", value: 100 },
    ],
    metrics: [
      { value: 4, label: "Áreas", icon: "category" },
      { value: 2026, label: "Fundação", icon: "calendar_today" },
      { value: 100, label: "Comprometimento", suffix: "%", icon: "verified" },
      { value: 0, label: "Improvisos", icon: "block" },
    ],
  },

  manifesto: {
    quote: "Cada aparelho quebra por um motivo. Nosso trabalho é encontrar esse motivo — e eliminá-lo. Sem palpite, sem achismo, sem improviso. Só ciência.",
    author: "JALEP Corporação",
  },

  budget: {
    title: "Pré-Orçamento",
    subtitle: "Conte-nos o problema e receba uma estimativa",
    fields: {
      name: { label: "Seu Nome", placeholder: "Ex.: João Lucas Guloso, W Samuel" },
      model: { label: "Modelo do Aparelho", placeholder: "Dell Inspiron 15 3000" },
      symptoms: { label: "Sintomas / Descrição", placeholder: "Não liga, faz barulho estranho, tela azul..." },
    },
    submit: "Enviar Pré-Orçamento",
    success: "Pré-orçamento enviado! Entraremos em contato em breve.",
  },

  splash: {
    lines: [] as string[],
    launch: "",
  },

  fastfetch: {
    ascii: [] as string[],
    info: [] as { key: string; value: string }[],
    colors: [] as string[],
  },

  nav: {
    links: [
      { href: "/", label: "Início", icon: "home" },
      { href: "/servicos", label: "Serviços", icon: "build" },
      { href: "/lab", label: "Lab", icon: "science" },
      { href: "/sobre", label: "Sobre", icon: "info" },
      { href: "/contato", label: "Contato", icon: "mail" },
      { href: "/faq", label: "FAQ", icon: "help" },
      { href: "/portfolio", label: "Portfolio", icon: "work" },
      { href: "/pricing", label: "Preços", icon: "payments" },
      { href: "/blog", label: "Blog", icon: "article" },
      { href: "/depoimentos", label: "Reviews", icon: "rate_review" },
      { href: "/stack", label: "Stack", icon: "code" },
      { href: "/hardware", label: "Hardware", icon: "memory" },
      { href: "/team", label: "Equipe", icon: "group" },
      { href: "/#budget", label: "Orçamento", icon: "calculate" },
    ],
  },

  team: [
    { name: "João Gabriel", role: "CEO · Editor · Influencer", icon: "engineering", color: "var(--color-cyan)", bio: "Fundador e líder visionário da JALEP. Responsável pela estratégia, conteúdo editorial e presença digital da corporação.", skills: ["Liderança", "Conteúdo", "Estratégia"] },
    { name: "André", role: "TI · Técnico · Security Researcher", icon: "code", color: "var(--color-green)", bio: "Responsável técnico pela infraestrutura e segurança. Security Researcher comprovado — CVE-2026-43499 (Ghost Lock), root Samsung Galaxy SM-A576B via kernel exploit, bug bounty ativo sob NDA.", skills: ["Security", "Hardware", "Kernel Exploit", "Bug Bounty"], proof: ["sudoxddx.github.io/Who-Am-I", "github.com/sudoxddx/Root-My-Galaxy-SM-a576b"] },
    { name: "Lucas", role: "Escritor · Conteúdo", icon: "edit_note", color: "var(--color-amber)", bio: "Escritor e criador de conteúdo. Transforma ideias em textos claros e envolventes para a JALEP.", skills: ["Redação", "Conteúdo", "Comunicação"] },
    { name: "João Lucas", role: "Técnico · Substituto", icon: "build", color: "var(--color-violet)", bio: "Técnico de suporte e substituto. Sempre pronto para assumir qualquer função quando necessário.", skills: ["Suporte", "Flexibilidade"] },
    { name: "Pedro", role: "Auxiliar · Montagem", icon: "support_agent", color: "var(--color-primary)", bio: "Auxiliar geral responsável por montagem e preparação de equipamentos.", skills: ["Montagem", "Assistência"] },
  ],

  contact: {
    phone: "+55 19 99486-4845",
    email: "contato@jalep.tech",
    schedule: "Seg–Sex, 9h às 18h · Sáb, 9h às 13h",
  },

  footer: {
    copyright: "© 2026 JALEP Corporação — 7° Ano A",
    built: "Trabalho de escola · 2026",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
} as const;
