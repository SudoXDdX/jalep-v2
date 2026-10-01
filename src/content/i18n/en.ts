// JALEP v2 — English Translation
export const en = {
  name: "JALEP",
  tagline: "Corporation",
  fullTitle: "JALEP Corporation",
  description: "Professional Technical Assistance",
  hero: {
    title: ["Professional", "Technical", "Assistance."],
    subtitle: "Precise diagnosis. Certain repair. Zero improvisation.",
    cta1: "Request Quote",
    cta2: "Our Services",
  },
  nav: {
    links: [
      { href: "/", label: "Home", icon: "home" },
      { href: "/servicos", label: "Services", icon: "build" },
      { href: "/lab", label: "Lab", icon: "science" },
      { href: "/sobre", label: "About", icon: "info" },
      { href: "/contato", label: "Contact", icon: "mail" },
      { href: "/faq", label: "FAQ", icon: "help" },
      { href: "/portfolio", label: "Portfolio", icon: "work" },
      { href: "/pricing", label: "Pricing", icon: "payments" },
      { href: "/blog", label: "Blog", icon: "article" },
      { href: "/depoimentos", label: "Reviews", icon: "rate_review" },
    ],
  },
  services: [
    { title: "Board Diagnostics", desc: "Deep circuit and component analysis with professional equipment." },
    { title: "Battery Recovery", desc: "Recharge, recondition and replace lithium-ion cells." },
    { title: "Parts Replacement", desc: "Precise component replacement with proven quality parts." },
    { title: "Laptop Repair", desc: "Complete maintenance — cleaning, upgrade, thermal paste and more." },
  ],
  manifesto: {
    quote: "Every device breaks for a reason. Our job is to find that reason — and eliminate it. No guesswork, no assumptions, no improvisation. Just science.",
    author: "JALEP Corporation",
  },
  budget: {
    title: "Pre-Quote",
    subtitle: "Tell us the problem and receive an estimate",
    submit: "Send Pre-Quote",
    success: "Pre-quote sent! We will contact you shortly.",
  },
} as const;
