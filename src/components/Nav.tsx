"use client";

import { useEffect, useState, useRef } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() { setMenuOpen(false); if (detailsRef.current) detailsRef.current.open = false; }

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape" && menuOpen) closeMenu(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={`nav-glass ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-glass-inner">
        <Link href="/" className="flex items-center gap-1.5 text-sm font-semibold tracking-tight text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]">
          <span className="material-symbols-outlined icon-primary" style={{ fontSize: 20 }}>terminal</span>
          <span className="font-mono text-xs">jalep<span className="text-[var(--color-primary)]">{'//'}</span></span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {site.nav.links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "text-[var(--color-primary)]" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="ml-2 flex items-center gap-1.5">
            <ThemeToggle />
          </div>
        </nav>

        <details ref={detailsRef} className="relative md:hidden" open={menuOpen} onToggle={(e) => setMenuOpen((e.target as HTMLDetailsElement).open)}>
          <summary className="cursor-pointer list-none rounded-lg border border-[var(--color-border)] px-3 py-1.5 font-mono text-xs text-[var(--color-text-sec)]" aria-label="Menu">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{menuOpen ? "close" : "menu"}</span>
          </summary>
          <div className="nav-mobile-panel">
            <nav className="flex flex-col gap-1" aria-label="Primary">
              {site.nav.links.map((link, i) => (
                <Link key={link.href} href={link.href} onClick={closeMenu} className="nav-link flex items-center gap-2.5 py-2.5" style={{ animationDelay: `${i * 50}ms` }}>
                  <span className="material-symbols-outlined icon-text-muted" style={{ fontSize: 18 }}>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <div className="my-2 border-t border-[var(--color-border)]" />
              <div className="flex items-center justify-center gap-2 py-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
