"use client";

import { useState, useEffect, useCallback } from "react";

/** Command data */
interface Command {
  label: string;
  icon: string;
  action: () => void;
}

/** CommandPalette component props */
interface CommandPaletteProps {
  commands: Command[];
}

/**
 * Cmd+K command palette with fuzzy search filter and modal overlay.
 * Listens for Cmd+K / Ctrl+K keyboard shortcut.
 */
export default function CommandPalette({ commands }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setOpen((o) => !o);
      setQuery("");
    }
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filtered = query
    ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  const run = (cmd: Command) => {
    cmd.action();
    setOpen(false);
    setQuery("");
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        paddingTop: "20vh",
        background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(32rem, 90vw)", borderRadius: "0.75rem",
          border: "1px solid var(--color-border)", overflow: "hidden",
        }}
      >
        <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-border)" }}>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command…"
            style={{
              width: "100%", background: "none", border: "none", outline: "none",
              color: "var(--color-text)", fontSize: "1rem",
            }}
          />
        </div>
        <div style={{ maxHeight: "18rem", overflowY: "auto", padding: "0.25rem" }}>
          {filtered.map((cmd, i) => (
            <button
              key={i}
              onClick={() => run(cmd)}
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                width: "100%", padding: "0.6rem 1rem", background: "none",
                border: "none", color: "var(--color-text)", cursor: "pointer",
                borderRadius: "0.4rem", textAlign: "left", fontSize: "0.9rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-primary-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              <span className="material-symbols-rounded" style={{ fontSize: "1.1rem", color: "var(--color-text-muted)" }}>
                {cmd.icon}
              </span>
              {cmd.label}
            </button>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: "1rem", color: "var(--color-text-muted)", textAlign: "center", fontSize: "0.85rem" }}>
              No commands found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
