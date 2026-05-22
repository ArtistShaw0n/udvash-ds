import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center gap-3 py-12 px-6 rounded-md bg-surface-subtle border border-line-subtle",
        className
      )}
    >
      {icon && (
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-surface text-muted">
          {icon}
        </span>
      )}
      <h3 className="text-lg md:text-xl font-semibold text-ink">{title}</h3>
      {description && <p className="text-md text-muted max-w-prose">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
