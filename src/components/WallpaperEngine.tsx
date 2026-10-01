"use client";

import { useEffect, useState } from "react";

/*  Wallpaper Engine — always renders all elements.
    Visual toggling is handled by CSS [data-perf] selectors on <html>,
    so changes are INSTANT with no React re-render dependency.
    The perf-change event is still dispatched for any JS listeners. */

export type PerfLevel = "low" | "mid" | "high";

function getPerf(): PerfLevel {
  if (typeof window === "undefined") return "high";
  const stored = localStorage.getItem("perf-mode");
  if (stored === "low" || stored === "mid" || stored === "high") return stored;
  return "high";
}

export function WallpaperEngine() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    /* Ensure data-perf is set from localStorage on mount */
    const perf = getPerf();
    document.documentElement.setAttribute("data-perf", perf);

    function onPerfChange() {
      const p = getPerf();
      document.documentElement.setAttribute("data-perf", p);
    }
    window.addEventListener("perf-change", onPerfChange);
    return () => window.removeEventListener("perf-change", onPerfChange);
  }, []);

  if (!mounted) return null;

  /* Always render all blobs — CSS [data-perf] handles visibility */
  return (
    <div className="wallpaper-engine" aria-hidden="true">
      <div className="wallpaper-blob wp-blob-1" />
      <div className="wallpaper-blob wp-blob-2" />
      <div className="wallpaper-blob wp-blob-3" />
      <div className="wallpaper-blob wp-blob-4" />
      <div className="wallpaper-blob wp-blob-5" />
      <div className="wallpaper-blob wp-blob-6" />
      <div className="wallpaper-noise" />
      <div className="wallpaper-grid" />
    </div>
  );
}
