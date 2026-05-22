import { cn } from "@/lib/cn";
import { ScoreGauge } from "./ScoreGauge";
import { PositionLabel } from "./PositionLabel";

type SubjectBreakdown = {
  label: string;
  value: number;
  total: number;
};

type SubjectWiseSummaryProps = {
  subject: string;
  score: string;
  outOf?: string;
  position: number;
  breakdown?: SubjectBreakdown[];
  bangla?: boolean;
  className?: string;
};

export function SubjectWiseSummary({
  subject,
  score,
  outOf,
  position,
  breakdown,
  bangla,
  className,
}: SubjectWiseSummaryProps) {
  return (
    <section
      className={cn(
        "w-[336px] rounded-md bg-surface shadow-sm border border-line p-4 space-y-3",
        className
      )}
    >
      <header className="flex items-center justify-between">
        <h3 className={cn("text-lg font-semibold text-ink", bangla && "font-bangla")}>{subject}</h3>
        <ScoreGauge score={score} outOf={outOf} />
      </header>
      <PositionLabel position={position} />
      {breakdown && breakdown.length > 0 && (
        <ul className="space-y-2 pt-2">
          {breakdown.map((b) => {
            const pct = (b.value / b.total) * 100;
            return (
              <li key={b.label}>
                <div className="flex items-baseline justify-between text-sm mb-1">
                  <span className="text-muted">{b.label}</span>
                  <span className="text-ink tabular-nums">{b.value}/{b.total}</span>
                </div>
                <div className="h-1.5 rounded-full bg-disabled">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${pct}%` }} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
