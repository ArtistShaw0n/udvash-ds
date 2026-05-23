"use client";

import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type PaginationProps = {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
};

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function getPages(page: number, total: number, siblings: number): (number | "…")[] {
  const minVisible = siblings * 2 + 5;
  if (total <= minVisible) return range(1, total);

  const left = Math.max(page - siblings, 2);
  const right = Math.min(page + siblings, total - 1);
  const showLeftDots = left > 2;
  const showRightDots = right < total - 1;

  const items: (number | "…")[] = [1];
  if (showLeftDots) items.push("…");
  items.push(...range(left, right));
  if (showRightDots) items.push("…");
  items.push(total);
  return items;
}

export function Pagination({
  page,
  pageCount,
  onChange,
  siblingCount = 1,
  className,
}: PaginationProps) {
  const items = getPages(page, pageCount, siblingCount);
  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        aria-label="Previous page"
        className="inline-flex size-8 items-center justify-center rounded-sm text-ink hover:bg-surface-subtle disabled:cursor-not-allowed disabled:text-placeholder"
      >
        <Icon name="ChevronLeft" size="sm" />
      </button>
      {items.map((it, idx) =>
        it === "…" ? (
          <span key={`d-${idx}`} className="size-8 text-center text-sm text-placeholder">
            …
          </span>
        ) : (
          <button
            key={it}
            type="button"
            onClick={() => onChange(it)}
            aria-current={it === page ? "page" : undefined}
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-sm text-sm font-medium",
              it === page
                ? "bg-brand text-onbrand"
                : "text-ink hover:bg-surface-subtle",
            )}
          >
            {it}
          </button>
        ),
      )}
      <button
        type="button"
        disabled={page >= pageCount}
        onClick={() => onChange(page + 1)}
        aria-label="Next page"
        className="inline-flex size-8 items-center justify-center rounded-sm text-ink hover:bg-surface-subtle disabled:cursor-not-allowed disabled:text-placeholder"
      >
        <Icon name="ChevronRight" size="sm" />
      </button>
    </nav>
  );
}
