import { cn } from "@/lib/cn";

type PositionLabelProps = {
  position: number | string;
  prefix?: string;
  className?: string;
};

export function PositionLabel({ position, prefix = "Your Position:", className }: PositionLabelProps) {
  return (
    <span className={cn("inline-flex items-baseline gap-1 text-sm", className)}>
      <span className="text-muted">{prefix}</span>
      <span className="font-bold text-ink tabular-nums">{position}</span>
    </span>
  );
}
