import { cn } from "@/lib/cn";

export type PositionLabelProps = {
  position: number;
  total?: number;
  className?: string;
};

/**
 * PositionLabel — Figma Data/PositionLabel (91×17). "#12 of 240" style
 * rank chip. Top 3 positions get medal colours (gold / silver / bronze).
 */
export function PositionLabel({ position, total, className }: PositionLabelProps) {
  // Medal colours: gold = warning (amber), silver = muted gray, bronze = warning at lower opacity.
  // Using warning twice (gold/bronze) is fine — the emoji prefix gives the visual distinction.
  const medalColor =
    position === 1 ? "text-warning" :
    position === 2 ? "text-muted" :
    position === 3 ? "text-warning/70" : "text-ink";

  const showMedal = position <= 3;
  const medalIcon = position === 1 ? "🥇" : position === 2 ? "🥈" : "🥉";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-semibold tabular-nums",
        medalColor,
        className,
      )}
      aria-label={`Position ${position}${total ? ` of ${total}` : ""}`}
    >
      {showMedal && <span aria-hidden="true">{medalIcon}</span>}
      <span>#{position}</span>
      {total != null && (
        <span className="font-normal text-muted">/ {total}</span>
      )}
    </span>
  );
}
