import { cn } from "@/lib/cn";

type Option = { id: string; label: string };

type AnalysisBlockProps = {
  questionText: string;
  options: Option[];
  correctId: string;
  selectedId?: string;
  explanation?: string;
  bangla?: boolean;
  className?: string;
};

const letters = ["A", "B", "C", "D", "E"];

export function AnalysisBlock({
  questionText,
  options,
  correctId,
  selectedId,
  explanation,
  bangla,
  className,
}: AnalysisBlockProps) {
  return (
    <section
      className={cn(
        "w-[336px] rounded-md bg-surface border border-line p-4 space-y-3",
        className
      )}
    >
      <p className={cn("text-md font-semibold text-ink", bangla && "font-bangla")}>
        {questionText}
      </p>
      <ul className="space-y-2">
        {options.map((opt, idx) => {
          const isCorrect = opt.id === correctId;
          const isSelected = opt.id === selectedId;
          const isWrongPick = isSelected && !isCorrect;
          return (
            <li
              key={opt.id}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-sm border",
                isCorrect && "bg-success-subtle border-success",
                isWrongPick && "bg-error-subtle border-error",
                !isCorrect && !isWrongPick && "bg-surface border-line-subtle"
              )}
            >
              <span
                className={cn(
                  "inline-flex items-center justify-center size-7 rounded-full text-sm font-bold shrink-0",
                  isCorrect ? "bg-success text-onbrand" :
                  isWrongPick ? "bg-error text-onbrand" :
                  "bg-disabled text-muted"
                )}
              >
                {letters[idx] ?? String(idx + 1)}
              </span>
              <span className={cn("text-md text-ink", bangla && "font-bangla")}>{opt.label}</span>
            </li>
          );
        })}
      </ul>
      {explanation && (
        <div className="pt-3 border-t border-line-subtle">
          <p className="text-sm text-muted leading-5">{explanation}</p>
        </div>
      )}
    </section>
  );
}
