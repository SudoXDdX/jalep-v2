import type { Metadata } from "next";
import "./globals.css";
import { WallpaperEngine } from "@/components/WallpaperEngine";
import { PerfToggle } from "@/components/PerfToggle";

export const metadata: Metadata = {
  title: "João Lucas Gulosooooo",
  description: "Assistência Técnica Profissional — Diagnóstico preciso. Reparo certeiro. Zero improviso.",
  keywords: ["assistência técnica", "reparo notebook", "diagnóstico placa", "bateria", "JALEP", "tecnologia"],
  authors: [{ name: "JALEP Corporação" }],
  creator: "JALEP Corporação",
  openGraph: {
    title: "João Lucas Gulosooooo",
    description: "Diagnóstico preciso. Reparo certeiro. Zero improviso.",
    url: "https://suxd-dev.github.io/jalep-mano/",
    siteName: "JALEP Corporação",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Lucas Gulosooooo",
    description: "Assistência Técnica Profissional",
  },
  manifest: "/jalep-mano/manifest.json",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-mode="dark" data-color="gray" data-perf="high">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" rel="stylesheet" />
        <script src="/jalep-mano/gk.js" />
      </head>
      <body className="min-h-screen">
        <WallpaperEngine />
        {children}
        <PerfToggle />
      </body>
    </html>
  );
}
