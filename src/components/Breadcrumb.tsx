"use client";

/** Breadcrumb item data */
interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Breadcrumb component props */
interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Navigation breadcrumb with chevron separators.
 * Items with href render as links; last item is plain text.
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            {isLast ? (
              <span
                className="font-heading"
                style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.9rem" }}
              >
                {item.label}
              </span>
            ) : (
              <>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      color: "var(--color-text-muted)", textDecoration: "none",
                      fontSize: "0.9rem", transition: "color 0.2s",
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                    {item.label}
                  </span>
                )}
                <span style={{ color: "var(--color-border)", fontSize: "0.75rem" }}>›</span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}
