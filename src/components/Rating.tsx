"use client";

/** Rating component props */
interface RatingProps {
  value: number;
  max?: number;
}

/**
 * Star rating display using Material Symbols.
 * Filled stars for whole values, partially filled for fractions.
 */
export default function Rating({ value, max = 5 }: RatingProps) {
  return (
    <div style={{ display: "inline-flex", gap: "0.15rem", alignItems: "center" }} aria-label={`Rating: ${value} out of ${max}`}>
      {Array.from({ length: max }, (_, i) => {
        const filled = value - i;
        const isFull = filled >= 1;
        const isHalf = filled > 0 && filled < 1;

        return (
          <span
            key={i}
            className="material-symbols-rounded"
            style={{
              fontSize: "1.25rem",
              color: isFull || isHalf ? "var(--color-amber)" : "var(--color-border)",
              fontVariationSettings: isFull
                ? '"fill" 1'
                : isHalf
                  ? '"fill" 0.5'
                  : '"fill" 0',
              lineHeight: 1,
            }}
          >
            star
          </span>
        );
      })}
      <span className="font-mono" style={{ marginLeft: "0.4rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
        {value.toFixed(1)}
      </span>
    </div>
  );
}
