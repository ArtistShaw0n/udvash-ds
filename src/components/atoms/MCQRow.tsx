import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

export type MCQVerdict = "correct" | "wrong" | "skipped";

export type MCQRowProps = {
  questionNo: number;
  yourAnswer?: string;
  correctAnswer: string;
  verdict: MCQVerdict;
  className?: string;
};

const verdictConfig: Record<MCQVerdict, { color: string; icon: "CircleCheck" | "CircleX" | "CircleDashed" }> = {
  correct: { color: "text-success", icon: "CircleCheck" },
  wrong: { color: "text-error", icon: "CircleX" },
  skipped: { color: "text-muted", icon: "CircleDashed" },
};

/**
 * MCQRow — Figma Data/MCQ-Row (122×19). Compact one-line MCQ result
 * row: question number · answer · verdict icon. Used inside long
 * exam-answer-sheet tables.
 */
export function MCQRow({ questionNo, yourAnswer, correctAnswer, verdict, className }: MCQRowProps) {
  const cfg = verdictConfig[verdict];
  return (
    <div
      className={cn(
        "flex w-full max-w-[122px] items-center justify-between gap-2 text-xs",
        className,
      )}
    >
      <span className="font-medium text-muted tabular-nums">Q{questionNo}</span>
      <span className={cn("flex-1 truncate text-center font-medium", cfg.color)}>
        {yourAnswer ?? "—"} / {correctAnswer}
      </span>
      <Icon name={cfg.icon} size="xs" className={cfg.color} />
    </div>
  );
}
