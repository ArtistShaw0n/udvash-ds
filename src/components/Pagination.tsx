"use client";

import { cn } from "@/lib/cn";

type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export function Pagination({ page, pageCount, onPageChange, className }: PaginationProps) {
  if (pageCount <= 1) return null;

  const visible = getVisiblePages(page, pageCount);

  return (
    <nav aria-label="Pagination" className={cn("inline-flex items-center gap-1", className)}>
      <PageBtn aria-label="Previous" onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
        ‹
      </PageBtn>
      {visible.map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className="px-2 text-muted">…</span>
        ) : (
          <PageBtn key={p} onClick={() => onPageChange(p)} active={p === page}>
            {p}
          </PageBtn>
        )
      )}
      <PageBtn aria-label="Next" onClick={() => onPageChange(page + 1)} disabled={page >= pageCount}>
        ›
      </PageBtn>
    </nav>
  );
}

function PageBtn({
  children,
  active,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex items-center justify-center min-w-9 h-9 px-2 rounded-sm border transition-colors",
        active
          ? "bg-brand text-onbrand border-brand"
          : "bg-surface text-ink border-line hover:bg-brand-subtle disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-surface"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

function getVisiblePages(page: number, total: number): Array<number | "…"> {
  const out: Array<number | "…"> = [];
  const window = 1;
  out.push(1);
  if (page - window > 2) out.push("…");
  for (let i = Math.max(2, page - window); i <= Math.min(total - 1, page + window); i++) {
    out.push(i);
  }
  if (page + window < total - 1) out.push("…");
  if (total > 1) out.push(total);
  return out;
}
