import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ServiceBlockedCardProps = {
  title?: string;
  description?: string;
  toastLabel?: string;
  illustration?: ReactNode;
  className?: string;
};

export function ServiceBlockedCard({
  title = "Service Blocked",
  description = "Contact your branch coordinator to restore access.",
  toastLabel = "Service blocked",
  illustration,
  className,
}: ServiceBlockedCardProps) {
  return (
    <article
      className={cn(
        "w-[336px] rounded-md bg-surface shadow-sm border border-line p-4 space-y-3 text-center",
        className
      )}
    >
      {illustration ?? (
        <div className="aspect-[330/179] w-full rounded-sm bg-warning-subtle flex items-center justify-center">
          <span className="text-7xl" aria-hidden>🚫</span>
        </div>
      )}
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="text-md text-muted">{description}</p>
      <span
        role="status"
        className="inline-flex items-center px-3 h-8 rounded-3xl bg-warning-subtle text-warning text-sm font-medium border border-warning"
      >
        {toastLabel}
      </span>
    </article>
  );
}
