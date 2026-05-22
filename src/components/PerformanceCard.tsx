import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PerformanceRow = {
  label: string;
  value: ReactNode;
};

type PerformanceCardProps = {
  title: string;
  rows?: PerformanceRow[];
  footer?: ReactNode;
  filter?: ReactNode;
  className?: string;
};

export function PerformanceCard({
  title,
  rows,
  footer,
  filter,
  className,
}: PerformanceCardProps) {
  return (
    <section
      className={cn(
        "w-[336px] bg-surface rounded-md shadow-sm border border-line p-4 space-y-3",
        className
      )}
    >
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        {filter}
      </header>
      {rows && rows.length > 0 && (
        <ul className="space-y-2">
          {rows.map((row) => (
            <li key={row.label} className="flex items-center justify-between text-md">
              <span className="text-muted">{row.label}</span>
              <span className="font-medium text-ink">{row.value}</span>
            </li>
          ))}
        </ul>
      )}
      {footer && <div className="pt-2 border-t border-line-subtle">{footer}</div>}
    </section>
  );
}
