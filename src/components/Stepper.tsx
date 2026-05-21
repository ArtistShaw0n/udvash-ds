import { cn } from "@/lib/cn";

type Step = { label: string; description?: string };
type StepperProps = {
  steps: Step[];
  /** Index of current step (0-based) */
  current: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function Stepper({ steps, current, orientation = "horizontal", className }: StepperProps) {
  const isHorizontal = orientation === "horizontal";
  return (
    <ol
      className={cn(
        isHorizontal ? "flex items-start gap-2" : "flex flex-col gap-4",
        className
      )}
      aria-label="Progress"
    >
      {steps.map((step, i) => {
        const status = i < current ? "complete" : i === current ? "current" : "upcoming";
        return (
          <li key={i} className={cn(isHorizontal ? "flex-1" : "", "flex gap-3 items-start")}>
            <span
              aria-current={status === "current" ? "step" : undefined}
              className={cn(
                "shrink-0 inline-flex size-6 items-center justify-center rounded-full text-xs font-semibold border-2 mt-0.5",
                status === "complete" && "bg-success border-success text-onbrand",
                status === "current"  && "bg-brand border-brand text-onbrand",
                status === "upcoming" && "bg-surface border-line text-muted"
              )}
            >
              {status === "complete" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="size-3.5" aria-hidden>
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                i + 1
              )}
            </span>
            <div className="flex-1 min-w-0">
              <div className={cn("text-md", status === "current" ? "text-ink font-medium" : "text-muted")}>{step.label}</div>
              {step.description && <div className="text-sm text-muted truncate">{step.description}</div>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
