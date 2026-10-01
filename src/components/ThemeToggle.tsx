"use client";

import { useEffect, useState, useCallback } from "react";

type ColorMode = "dark" | "light";

function getInitialThemeMode(): ColorMode {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme-mode") as ColorMode | null;
  return saved || "dark";
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ColorMode>(getInitialThemeMode);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-mode", mode);
    root.setAttribute("data-color", "gray");
    root.style.colorScheme = mode;
    localStorage.setItem("theme-mode", mode);
    localStorage.setItem("theme-color", "gray");
  }, [mode]);

  const toggleMode = useCallback(() => { setMode(prev => prev === "dark" ? "light" : "dark"); }, []);

  return (
    <div className="theme-toggle-wrapper">
      <div className="theme-toggle-row">
        <button onClick={toggleMode} className="theme-switch" role="switch" aria-checked={mode === "light"} aria-label={mode === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}>
          <span className="theme-switch-track">
            <span className="theme-switch-thumb">
              <span className="material-symbols-outlined theme-switch-icon" style={{ fontSize: 16 }}>{mode === "dark" ? "dark_mode" : "light_mode"}</span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
