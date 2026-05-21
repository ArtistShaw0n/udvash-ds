import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StatProps = {
  label: string;
  value: ReactNode;
  delta?: { value: string; direction?: "up" | "down" | "neutral" };
  hint?: string;
  className?: string;
};

export function Stat({ label, value, delta, hint, className }: StatProps) {
  return (
    <div className={cn("rounded-md border border-line-subtle bg-surface p-4 min-w-[140px]", className)}>
      <p className="text-sm text-muted">{label}</p>
      <p className="text-xl font-semibold text-ink mt-1">{value}</p>
      {delta && (
        <p
          className={cn(
            "inline-flex items-center gap-1 text-sm mt-1",
            delta.direction === "up" && "text-success",
            delta.direction === "down" && "text-error",
            delta.direction === "neutral" && "text-muted",
            !delta.direction && "text-muted"
          )}
        >
          {delta.direction === "up" && "▲"}
          {delta.direction === "down" && "▼"}
          {delta.value}
        </p>
      )}
      {hint && <p className="text-sm text-muted mt-1">{hint}</p>}
    </div>
  );
}
