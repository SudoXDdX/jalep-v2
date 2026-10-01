"use client";

import { useEffect, useCallback } from "react";
import type { ReactNode } from "react";

/** Modal component props */
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

/**
 * Modal dialog overlay with backdrop blur, glass-card content,
 * close button, and ESC key handler.
 */
export default function Modal({ open, onClose, title, children }: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "32rem", width: "90%", padding: "1.5rem",
          borderRadius: "1rem", border: "1px solid var(--color-border)",
          animation: "fadeIn 0.2s ease",
        }}
      >
        <style>{`@keyframes fadeIn { from { opacity:0; transform:scale(0.95) } to { opacity:1; transform:scale(1) } }`}</style>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <h3 className="font-heading" style={{ margin: 0, color: "var(--color-text)" }}>{title}</h3>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "var(--color-text-muted)", cursor: "pointer", fontSize: "1.25rem" }}
          >
            ✕
          </button>
        </div>
        <div style={{ color: "var(--color-text-sec)" }}>{children}</div>
      </div>
    </div>
  );
}
