"use client";

import { useEffect, useState, useCallback } from "react";

/*  Performance mode toggle — Low / Mid / High End
    Hidden by default. Press Ctrl+Shift+P (or Cmd+Shift+P on Mac) to reveal.
    The actual visual changes are driven by CSS [data-perf] selectors
    on the root <html> element — no React re-render dependency.
    We still dispatch perf-change for any JS-based listeners. */

type PerfLevel = "low" | "mid" | "high";

const LABELS: Record<PerfLevel, string> = {
  low: "Low End",
  mid: "Mid End",
  high: "High End",
};

const ICONS: Record<PerfLevel, string> = {
  low: "speed",
  mid: "speed_half",
  high: "rocket_launch",
};

const DESCS: Record<PerfLevel, string> = {
  low: "Sem animações, sem blur, sem blobs",
  mid: "3 blobs, sem noise/grid",
  high: "6 blobs, noise, grid — full experience",
};

function getPerf(): PerfLevel {
  if (typeof window === "undefined") return "high";
  const stored = localStorage.getItem("perf-mode");
  if (stored === "low" || stored === "mid" || stored === "high") return stored;
  return "high";
}

export function PerfToggle() {
  const [visible, setVisible] = useState(false);
  const [perf, setPerf] = useState<PerfLevel>("high");

  /* Load stored perf on mount + apply it to DOM */
  useEffect(() => {
    const initial = getPerf();
    setPerf(initial);
    document.documentElement.setAttribute("data-perf", initial);
  }, []);

  /* Keybind: Ctrl+Shift+P (or Cmd+Shift+P) to toggle visibility */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "P" && e.shiftKey && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        e.stopPropagation();
        setVisible((v) => !v);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* Apply perf level — sets data-perf on <html> which drives CSS selectors */
  const applyPerf = useCallback((level: PerfLevel) => {
    setPerf(level);
    document.documentElement.setAttribute("data-perf", level);
    localStorage.setItem("perf-mode", level);
    /* Dispatch for any JS-based listeners (WallpaperEngine, ScrollReveal, etc.) */
    window.dispatchEvent(new CustomEvent("perf-change"));
  }, []);

  if (!visible) return null;

  return (
    <div className="perf-toggle-panel">
      <div className="perf-toggle-header">
        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>tune</span>
        <span className="font-mono text-xs text-[var(--color-text-sec)]">Performance Mode</span>
        <button
          onClick={() => setVisible(false)}
          className="perf-toggle-close"
          aria-label="Close performance toggle"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>close</span>
        </button>
      </div>
      <div className="perf-toggle-options">
        {(["low", "mid", "high"] as PerfLevel[]).map((level) => {
          const active = perf === level;
          return (
            <button
              key={level}
              onClick={() => applyPerf(level)}
              className={`perf-toggle-btn ${active ? "perf-toggle-btn-active" : ""}`}
              aria-pressed={active}
              title={DESCS[level]}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                {ICONS[level]}
              </span>
              <span>{LABELS[level]}</span>
              {active && (
                <span className="perf-toggle-indicator">
                  <span className="material-symbols-outlined" style={{ fontSize: 12 }}>check</span>
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p className="perf-toggle-hint">
        Ctrl+Shift+P para fechar
      </p>
    </div>
  );
}
