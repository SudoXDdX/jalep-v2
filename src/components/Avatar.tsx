"use client";

/** Avatar component props */
interface AvatarProps {
  name: string;
  size?: number;
}

/** Simple string hash for gradient selection */
function hashName(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

/** Gradient pairs based on hash */
const gradients = [
  ["var(--color-primary)", "var(--color-cyan)"],
  ["var(--color-cyan)", "var(--color-violet)"],
  ["var(--color-violet)", "var(--color-green)"],
  ["var(--color-green)", "var(--color-amber)"],
  ["var(--color-amber)", "var(--color-red)"],
  ["var(--color-red)", "var(--color-primary)"],
];

/**
 * User avatar circle showing initials with
 * gradient background based on name hash.
 */
export default function Avatar({ name, size = 40 }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const [from, to] = gradients[hashName(name) % gradients.length];

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${from}, ${to})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 700,
        fontSize: size * 0.38,
        lineHeight: 1,
        flexShrink: 0,
      }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
