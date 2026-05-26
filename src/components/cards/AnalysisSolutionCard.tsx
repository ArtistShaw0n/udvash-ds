"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type SolutionVerdict = "correct" | "wrong" | "skipped";

export type AnalysisSolutionCardProps = {
  questionNo: number;
  question: string;
  /** A/B/C/D option labels (4 entries typical). */
  options?: Array<{ key: string; label: React.ReactNode }>;
  correctKey: string;
  /** Your chosen option key — undefined when skipped. */
  chosenKey?: string;
  /** Optional voting distribution per key (0–1). */
  distribution?: Record<string, number>;
  marksAwarded?: number;
  marksAvailable?: number;
  onExplain?: () => void;
  className?: string;
};

/*
 * Figma source: V2 AnalysisSolution (AnalysisReport 1:4807, instance 1:4811).
 * Per-question solution row with header chip, 4 option rows w/ correct icon,
 * optional vote distribution band, and "View explanation" link.
 */

const verdictConfig: Record<
  SolutionVerdict,
  { label: string; color: string; bg: string; icon: "CircleCheck" | "CircleX" | "CircleDashed" }
> = {
  correct: { label: "Correct", color: "text-success", bg: "bg-success-bg",  icon: "CircleCheck" },
  wrong:   { label: "Wrong",   color: "text-danger",  bg: "bg-danger-bg",   icon: "CircleX" },
  skipped: { label: "Skipped", color: "text-muted",   bg: "bg-subtle",      icon: "CircleDashed" },
};

export function AnalysisSolutionCard({
  questionNo,
  question,
  options = [],
  correctKey,
  chosenKey,
  distribution,
  marksAwarded,
  marksAvailable,
  onExplain,
  className,
}: AnalysisSolutionCardProps) {
  const verdict: SolutionVerdict = chosenKey
    ? chosenKey === correctKey
      ? "correct"
      : "wrong"
    : "skipped";
  const cfg = verdictConfig[verdict];

  return (
    <article
      className={cn(
        "w-full max-w-[360px] overflow-hidden rounded-md bg-surface shadow-card",
        className,
      )}
    >
      <div className={cn("flex items-center justify-between gap-2 px-3 py-1.5 text-xs font-semibold", cfg.bg, cfg.color)}>
        <span className="inline-flex items-center gap-1.5">
          <Icon name={cfg.icon} size="xs" />
          Q{questionNo} · {cfg.label}
        </span>
        {marksAvailable != null && (
          <span className="tabular-nums">
            {marksAwarded ?? 0}/{marksAvailable} marks
          </span>
        )}
      </div>

      <div className="p-3">
        <p className="mb-3 text-sm text-primary">{question}</p>

        {options.length > 0 && (
          <ul className="mb-3 space-y-1">
            {options.map((opt) => {
              const isCorrect = opt.key === correctKey;
              const isChosen = opt.key === chosenKey;
              const optionColor = isCorrect
                ? "text-success"
                : isChosen
                  ? "text-danger"
                  : "text-muted";
              return (
                <li key={opt.key} className="flex items-center gap-2 text-sm">
                  <Icon
                    name={isCorrect ? "CircleCheck" : isChosen ? "CircleX" : "Circle"}
                    size="sm"
                    className={optionColor}
                  />
                  <span className={cn("font-medium", optionColor)}>{opt.key}.</span>
                  <span className={isCorrect || isChosen ? "font-medium text-primary" : "text-muted"}>
                    {opt.label}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {distribution && (
          <div className="mb-3 grid grid-cols-4 gap-1 overflow-hidden rounded-sm border border-border text-center text-xs text-muted">
            {options.map((opt) => {
              const v = distribution[opt.key] ?? 0;
              return (
                <div key={opt.key} className="bg-subtle px-2 py-1">
                  <p className="font-semibold text-primary">{opt.key}</p>
                  <p>{Math.round(v * 100)}%</p>
                </div>
              );
            })}
          </div>
        )}

        {onExplain && (
          <Button variant="ghost" size="sm" iconLeft={<Icon name="Lightbulb" size="xs" />} onClick={onExplain}>
            View explanation
          </Button>
        )}
      </div>
    </article>
  );
}
