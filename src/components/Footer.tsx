"use client";

import { site } from "@/content/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer-glass">
      <div className="mx-auto max-w-[1080px] px-6 pb-8 pt-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text)]">
              <span className="material-symbols-outlined icon-primary" style={{ fontSize: 18 }}>terminal</span>
              <span className="font-mono text-xs">jalep<span className="text-[var(--color-primary)]">{'//'}</span></span>
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-[var(--color-text-muted)]">{site.description} · {site.turma} · {site.year}</p>
          </div>
          <div>
            <p className="section-kicker">navegação</p>
            <nav className="mt-3 flex flex-col gap-2" aria-label="Footer navigation">
              {site.nav.links.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-[var(--color-text-sec)] transition-colors hover:text-[var(--color-primary)]">
                  <span className="material-symbols-outlined icon-text-muted" style={{ fontSize: 16 }}>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="section-kicker">contato</p>
            <div className="mt-3 space-y-2 text-xs text-[var(--color-text-muted)]">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>phone</span>
                +55 19 99486-4845
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>mail</span>
                contato@jalep.tech
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>schedule</span>
                Seg–Sex, 9h às 18h
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6 sm:flex-row">
          <span className="font-mono text-xs text-[var(--color-text-muted)]">
            {site.footer.copyright}
          </span>
          <span className="glass-card inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[0.62rem] text-[var(--color-text-muted)]">
            {site.footer.tech.map((t, i) => (
              <span key={t}>{t}{i < site.footer.tech.length - 1 && <span className="text-[var(--color-border-hover)]"> · </span>}</span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
