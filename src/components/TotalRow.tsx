import { cn } from "@/lib/cn";

type TotalRowProps = {
  label?: string;
  total: string;
  className?: string;
};

export function TotalRow({ label = "Total", total, className }: TotalRowProps) {
  return (
    <div className={cn("flex items-center justify-between pt-2 mt-1 border-t border-line-subtle", className)}>
      <span className="text-md text-muted">{label}</span>
      <span className="text-lg font-bold text-ink tabular-nums">{total}</span>
    </div>
  );
}
