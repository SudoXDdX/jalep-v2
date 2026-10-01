"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import Link from "next/link";

const components = [
  {
    icon: "memory",
    name: "Intel Core i5-14400F",
    category: "Processador",
    specs: ["14ª geração", "10 núcleos / 16 threads", "2.5 GHz base / 4.7 GHz turbo", "TDP 65W", "Socket LGA 1700"],
    compat: "Z790, B760, H710 — DDR4/DDR5",
    price: "R$ 1.282",
    color: "var(--color-cyan)",
  },
  {
    icon: "memory",
    name: "AMD Ryzen 5 7600X",
    category: "Processador",
    specs: ["Zen 4", "6 núcleos / 12 threads", "4.5 GHz base / 5.3 GHz turbo", "TDP 105W", "Socket AM5"],
    compat: "X670, B650, A620 — DDR5 only",
    price: "R$ 1.294",
    color: "var(--color-red)",
  },
  {
    icon: "splitscreen",
    name: "Kingston Fury 16GB DDR5",
    category: "Memória RAM",
    specs: ["DDR5-5200", "16GB (2x8GB)", "CL36 latency", "1.25V", "XMP 3.0 ready"],
    compat: "Placas DDR5 — Intel 12ª+ / AMD AM5",
    price: "R$ 1.620",
    color: "var(--color-green)",
  },
  {
    icon: "hard_drive",
    name: "Samsung 990 Pro 1TB",
    category: "SSD NVMe",
    specs: ["PCIe 4.0 x4 NVMe", "1TB capacidade", "7.450 MB/s leitura", "6.900 MB/s escrita", "M.2 2280"],
    compat: "Qualquer placa com slot M.2 NVMe",
    price: "R$ 1.957",
    color: "var(--color-violet)",
  },
  {
    icon: "monitor",
    name: "LG UltraGear 27\" 165Hz",
    category: "Monitor",
    specs: ["27\" IPS 2560x1440", "165Hz refresh rate", "1ms GTG response", "HDR10", "DisplayPort 1.4 + HDMI 2.0"],
    compat: "GPU com DP 1.4 ou HDMI 2.0",
    price: "R$ 1.899",
    color: "var(--color-amber)",
  },
  {
    icon: "battery_charging_full",
    name: "Bateria iPhone 14 Pro",
    category: "Bateria",
    specs: ["Li-Po 3.279 mAh", "Tensão 3.89V", "Conector flex original", "Classificação Apple A+","Garantia 90 dias"],
    compat: "iPhone 14 Pro (A2658/A2890)",
    price: "R$ 249",
    color: "var(--color-green)",
  },
  {
    icon: "phone_iphone",
    name: "Display OLED iPhone 15",
    category: "Display",
    specs: ["OLED 6.1\" Super Retina", "2556x1179 resolução", "True Tone compatível", "Haptic Touch integrado", "Com Face ID module"],
    compat: "iPhone 15 (A3089)",
    price: "R$ 588",
    color: "var(--color-primary)",
  },
  {
    icon: "electrical_services",
    name: "Fonte Corsair RM750e",
    category: "Fonte",
    specs: ["750W 80+ Gold", "Fully modular", "ATX 3.0 compatible", "12VHPWR cable incl.", "Zero RPM mode"],
    compat: "Qualquer gabinete ATX",
    price: "R$ 654",
    color: "var(--color-amber)",
  },
];

export default function HardwarePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="relative z-[1] pt-24 pb-16 px-6" style={{ paddingTop: "calc(var(--nav-h, 60px) + 3rem)" }}>
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="section-kicker">hardware</p>
            <h1 className="section-title mb-4">Catálogo de Hardware</h1>
            <p className="text-sm text-[var(--color-text-sec)] max-w-lg mb-12">
              Componentes que usamos e recomendamos. Cada item foi testado no laboratório — só indicamos o que a gente confia.
            </p>
          </ScrollReveal>

          {/* Category filter chips */}
          <ScrollReveal delay={50}>
            <div className="flex flex-wrap gap-2 mb-10">
              {["Todos", "Processador", "Memória RAM", "SSD NVMe", "Monitor", "Bateria", "Display", "Fonte"].map((cat) => (
                <span key={cat} className="chip cursor-pointer hover:bg-[var(--color-primary-dim)] transition-colors">{cat}</span>
              ))}
            </div>
          </ScrollReveal>

          {/* Component Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {components.map((comp, i) => (
              <ScrollReveal key={comp.name} delay={i * 70}>
                <div className="glass-card p-6 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${comp.color}15`, border: `1px solid ${comp.color}30` }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 26, color: comp.color }}>{comp.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-[var(--color-text)]">{comp.name}</h3>
                      <span className="chip text-[0.6rem]" style={{ color: comp.color, borderColor: `${comp.color}60` }}>{comp.category}</span>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2 mb-5">
                    {comp.specs.map((spec, si) => (
                      <div key={si} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[var(--color-text-muted)] flex-shrink-0" style={{ fontSize: 14 }}>
                          chevron_right
                        </span>
                        <span className="font-mono text-xs text-[var(--color-text-sec)]">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compatibility */}
                  <div className="p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] mb-4">
                    <p className="font-mono text-[0.65rem] text-[var(--color-text-muted)] mb-1">compatibilidade</p>
                    <p className="text-xs text-[var(--color-text-sec)]">{comp.compat}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[0.65rem] text-[var(--color-text-muted)]">preço estimado</span>
                      <p className="font-heading font-bold text-lg text-[var(--color-text)]">{comp.price}</p>
                    </div>
                    <span className="btn-ghost text-xs">
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>shopping_cart</span>
                      Consultar
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Info note */}
          <ScrollReveal delay={100}>
            <div className="neon-card p-6 text-center mb-12">
              <span className="material-symbols-outlined icon-primary mb-3 block" style={{ fontSize: 32 }}>verified</span>
              <p className="text-sm text-[var(--color-text-sec)]">
                Preços são estimativas de mercado (Set/2026) e podem variar. Pesquisa realizada em Mercado Livre e Amazon Brasil. Componentes marcados com A+ são testados e aprovados pelo nosso laboratório. Consulte-nos para orçamento preciso.
              </p>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={200}>
            <div className="text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/portfolio" className="btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>build</span>
                  Portfólio de Reparos
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
