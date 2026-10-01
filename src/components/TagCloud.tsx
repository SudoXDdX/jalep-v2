"use client";

/** Tag item data */
interface TagItem {
  label: string;
  count: number;
}

/** TagCloud component props */
interface TagCloudProps {
  tags: TagItem[];
}

/** Color palette for tag variation */
const palette = [
  "var(--color-primary)", "var(--color-cyan)", "var(--color-violet)",
  "var(--color-green)", "var(--color-amber)", "var(--color-red)",
];

/**
 * Tag cloud display with tags sized by count
 * and colors selected from the palette.
 */
export default function TagCloud({ tags }: TagCloudProps) {
  const maxCount = Math.max(...tags.map((t) => t.count), 1);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", justifyContent: "center" }}>
      {tags.map((tag, i) => {
        const ratio = tag.count / maxCount;
        const fontSize = 0.75 + ratio * 1.25;
        const color = palette[i % palette.length];

        return (
          <span
            key={tag.label}
            style={{
              fontSize: `${fontSize}rem`,
              padding: "0.3rem 0.7rem",
              borderRadius: "9999px",
              background: `color-mix(in srgb, ${color} 10%, transparent)`,
              border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
              color,
              fontWeight: 400 + ratio * 400,
              cursor: "default",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow = `0 0 8px color-mix(in srgb, ${color} 30%, transparent)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {tag.label}
            <span className="font-mono" style={{ marginLeft: "0.3rem", opacity: 0.6, fontSize: "0.7em" }}>
              {tag.count}
            </span>
          </span>
        );
      })}
    </div>
  );
}
