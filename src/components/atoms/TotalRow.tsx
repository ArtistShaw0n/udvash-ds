import { cn } from "@/lib/cn";

export type TotalRowProps = {
  label: string;
  value: React.ReactNode;
  emphasis?: "default" | "brand" | "success" | "error";
  className?: string;
};

const toneClass = {
  default: "text-ink",
  brand: "text-brand",
  success: "text-success",
  error: "text-error",
};

/**
 * TotalRow — Figma Data/Total-Row (122×19). Compact key/value row used
 * at the bottom of exam analytics + checkout breakdowns. Emphasis prop
 * tints the value (brand for highlighted totals, success/error for
 * deltas).
 */
export function TotalRow({ label, value, emphasis = "default", className }: TotalRowProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-[122px] items-center justify-between gap-2 text-xs",
        className,
      )}
    >
      <span className="text-muted">{label}</span>
      <span className={cn("font-semibold tabular-nums", toneClass[emphasis])}>
        {value}
      </span>
    </div>
  );
}
