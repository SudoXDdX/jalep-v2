// JALEP v2 — Traducción al Español
export const es = {
  name: "JALEP",
  tagline: "Corporación",
  fullTitle: "JALEP Corporación",
  description: "Asistencia Técnica Profesional",
  hero: {
    title: ["Asistencia", "Técnica", "Profesional."],
    subtitle: "Diagnóstico preciso. Reparación certera. Cero improvisación.",
    cta1: "Solicitar Presupuesto",
    cta2: "Nuestros Servicios",
  },
  nav: {
    links: [
      { href: "/", label: "Inicio", icon: "home" },
      { href: "/servicos", label: "Servicios", icon: "build" },
      { href: "/lab", label: "Lab", icon: "science" },
      { href: "/sobre", label: "Acerca", icon: "info" },
      { href: "/contato", label: "Contacto", icon: "mail" },
      { href: "/faq", label: "FAQ", icon: "help" },
      { href: "/portfolio", label: "Portafolio", icon: "work" },
      { href: "/pricing", label: "Precios", icon: "payments" },
      { href: "/blog", label: "Blog", icon: "article" },
      { href: "/depoimentos", label: "Reseñas", icon: "rate_review" },
    ],
  },
  services: [
    { title: "Diagnóstico de Placas", desc: "Análisis profundo de circuitos y componentes con equipo profesional." },
    { title: "Recuperación de Baterías", desc: "Recarga, reacondicionamiento y reemplazo de células de ion-litio." },
    { title: "Reemplazo de Piezas", desc: "Reemplazo preciso de componentes con piezas de calidad comprobada." },
    { title: "Reparación de Laptops", desc: "Mantenimiento completo — limpieza, upgrade, pasta térmica y más." },
  ],
  manifesto: {
    quote: "Cada aparato se rompe por una razón. Nuestro trabajo es encontrar esa razón — y eliminarla. Sin suposiciones, sin improvisación. Solo ciencia.",
    author: "JALEP Corporación",
  },
  budget: {
    title: "Pre-Presupuesto",
    subtitle: "Cuéntenos el problema y reciba una estimación",
    submit: "Enviar Pre-Presupuesto",
    success: "Pre-presupuesto enviado. Nos pondremos en contacto pronto.",
  },
} as const;
