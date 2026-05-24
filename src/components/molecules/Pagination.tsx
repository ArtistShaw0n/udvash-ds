"use client";

import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type PaginationProps = {
  page: number;
  pageCount: number;
  onChange?: (page: number) => void;
  /** Max number of numeric tabs to show (excluding prev/next). */
  siblings?: number;
  className?: string;
  ariaLabel?: string;
};

/*
 * Pagination — numeric page selector with prev/next chevrons. Generates
 * a windowed range of numeric tabs with "..." gaps when needed.
 */

function rangeOf(page: number, pageCount: number, siblings: number): Array<number | "…"> {
  const total = Math.max(1, pageCount);
  if (total <= siblings + 4) return Array.from({ length: total }, (_, i) => i + 1);

  const start = Math.max(2, page - Math.floor(siblings / 2));
  const end = Math.min(total - 1, start + siblings - 1);
  const out: Array<number | "…"> = [1];
  if (start > 2) out.push("…");
  for (let i = start; i <= end; i++) out.push(i);
  if (end < total - 1) out.push("…");
  out.push(total);
  return out;
}

export function Pagination({
  page,
  pageCount,
  onChange,
  siblings = 3,
  className,
  ariaLabel = "Pagination",
}: PaginationProps) {
  const items = rangeOf(page, pageCount, siblings);
  const go = (p: number) => {
    const next = Math.max(1, Math.min(pageCount, p));
    if (next !== page) onChange?.(next);
  };

  return (
    <nav aria-label={ariaLabel} className={cn("inline-flex items-center gap-1", className)}>
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
        className="inline-flex size-8 items-center justify-center rounded-sm border border-border bg-surface text-primary transition-colors hover:bg-subtle disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Icon name="ChevronLeft" size="xs" />
      </button>
      {items.map((item, i) =>
        item === "…" ? (
          <span key={`gap-${i}`} aria-hidden="true" className="px-2 text-muted">…</span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => go(item)}
            aria-current={item === page ? "page" : undefined}
            aria-label={`Page ${item}`}
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-sm border text-sm font-medium tabular-nums transition-colors",
              item === page
                ? "border-brand bg-brand text-onbrand"
                : "border-border bg-surface text-primary hover:bg-subtle",
            )}
          >
            {item}
          </button>
        ),
      )}
      <button
        type="button"
        onClick={() => go(page + 1)}
        disabled={page >= pageCount}
        aria-label="Next page"
        className="inline-flex size-8 items-center justify-center rounded-sm border border-border bg-surface text-primary transition-colors hover:bg-subtle disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Icon name="ChevronRight" size="xs" />
      </button>
    </nav>
  );
}
