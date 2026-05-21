import { cn } from "@/lib/cn";

type ScoreGaugeProps = {
  score: string | number;
  outOf?: string | number;
  className?: string;
};

export function ScoreGauge({ score, outOf, className }: ScoreGaugeProps) {
  const label = outOf != null ? `${score}/${outOf}` : String(score);
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 h-[29px] rounded-sm bg-brand-subtle text-brand text-lg font-bold leading-none",
        className
      )}
    >
      {label}
    </span>
  );
}
