"use client";

/** Badge variant types */
type BadgeVariant = "success" | "warning" | "error" | "info";

/** Badge component props */
interface BadgeProps {
  label: string;
  variant: BadgeVariant;
}

/** Maps variant to CSS color variable */
const variantColors: Record<BadgeVariant, string> = {
  success: "var(--color-green)",
  warning: "var(--color-amber)",
  error: "var(--color-red)",
  info: "var(--color-cyan)",
};

/**
 * Status badge with colored dot and label.
 * Variant determines the dot and text color.
 */
export default function Badge({ label, variant }: BadgeProps) {
  const color = variantColors[variant];

  return (
    <span
      className="chip"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.25rem 0.65rem",
        borderRadius: "9999px",
        fontSize: "0.8rem",
        fontWeight: 500,
        color,
        background: `color-mix(in srgb, ${color} 12%, transparent)`,
        border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
      }}
    >
      <span
        style={{
          width: "0.4rem",
          height: "0.4rem",
          borderRadius: "50%",
          background: color,
        }}
      />
      {label}
    </span>
  );
}
