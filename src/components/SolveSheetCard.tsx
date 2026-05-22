import { cn } from "@/lib/cn";
import { Badge } from "./Badge";
import { Button } from "./Button";

type SolveSheetCardProps = {
  title: string;
  score?: string;
  total?: number;
  correct?: number;
  status?: "default" | "lowest" | "highest";
  ctaLabel?: string;
  onView?: () => void;
  bangla?: boolean;
  size?: "lg" | "sm";
  className?: string;
};

export function SolveSheetCard({
  title,
  score,
  total = 0,
  correct = 0,
  status = "default",
  ctaLabel = "View Sheet",
  onView,
  bangla,
  size = "lg",
  className,
}: SolveSheetCardProps) {
  const cells = Math.min(total, 25);
  return (
    <article
      className={cn(
        "w-[336px] rounded-md bg-surface shadow-sm border border-line p-4 space-y-3",
        size === "sm" ? "min-h-[259px]" : "min-h-[281px]",
        className
      )}
    >
      <header className="flex items-start justify-between gap-2">
        <h3 className={cn("text-lg font-semibold text-ink flex-1", bangla && "font-bangla")}>{title}</h3>
        {status === "lowest" && <Badge variant="error">Lowest</Badge>}
        {status === "highest" && <Badge variant="success">Highest</Badge>}
      </header>

      {score && (
        <p className="text-2xl font-bold text-brand tabular-nums">{score}</p>
      )}

      {cells > 0 && (
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: cells }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "size-5 rounded-xs border text-[10px] inline-flex items-center justify-center",
                i < correct
                  ? "bg-success-subtle border-success text-success font-bold"
                  : "bg-surface border-line-subtle text-muted"
              )}
            >
              {i + 1}
            </span>
          ))}
        </div>
      )}

      <Button variant="primary" size="md" className="w-full" onClick={onView}>
        {ctaLabel}
      </Button>
    </article>
  );
}
