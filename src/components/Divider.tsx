import { cn } from "@/lib/cn";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
  label?: string;
};

export function Divider({ orientation = "horizontal", className, label }: DividerProps) {
  if (label && orientation === "horizontal") {
    return (
      <div className={cn("flex items-center gap-3 w-full", className)} role="separator" aria-label={label}>
        <span className="flex-1 h-px bg-line-subtle" />
        <span className="text-sm text-muted uppercase tracking-wider">{label}</span>
        <span className="flex-1 h-px bg-line-subtle" />
      </div>
    );
  }
  return (
    <span
      role="separator"
      aria-orientation={orientation}
      className={cn(
        orientation === "horizontal" ? "block w-full h-px" : "inline-block w-px h-full self-stretch",
        "bg-line-subtle",
        className
      )}
    />
  );
}
