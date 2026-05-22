import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

const pill = "inline-flex items-center justify-center h-[20px] px-2.5 rounded-[10px] text-xs font-medium leading-3 whitespace-nowrap";

export function BadgeLive({ label = "Live", className }: { label?: string; className?: string }) {
  return (
    <span className={cn(pill, "gap-1 text-error", className)}>
      <Icon name="live-dot" size={12} className="text-error" />
      {label}
    </span>
  );
}

export function BadgeLiveCyan({ label = "Live", className }: { label?: string; className?: string }) {
  return (
    <span className={cn(pill, "text-info border border-info", className)}>{label}</span>
  );
}

export function BadgeHighest({ label = "Highest", className }: { label?: string; className?: string }) {
  return (
    <span className={cn(pill, "bg-success-subtle text-success border border-success", className)}>
      {label}
    </span>
  );
}

export function BadgeLowest({ label = "Lowest", className }: { label?: string; className?: string }) {
  return (
    <span className={cn(pill, "bg-error-subtle text-error border border-error", className)}>
      {label}
    </span>
  );
}

export function BadgeBranchRed({ label = "Branch", className }: { label?: string; className?: string }) {
  return (
    <span className={cn(pill, "bg-error-subtle text-error border border-error", className)}>
      {label}
    </span>
  );
}

export function BadgeBranchSmall({ label = "Branch", className }: { label?: string; className?: string }) {
  return (
    <span className={cn(pill, "bg-warning-subtle text-warning border border-warning", className)}>
      {label}
    </span>
  );
}

export function BadgePastClass({ label = "Past Class", className }: { label?: string; className?: string }) {
  return (
    <span className={cn(pill, "bg-disabled text-muted border border-line", className)}>
      {label}
    </span>
  );
}

export function BadgeDate({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center h-[15px] px-1.5 rounded-[8px] text-[10px] font-medium text-muted bg-surface-subtle whitespace-nowrap",
        className
      )}
    >
      {children}
    </span>
  );
}

type BadgeSizeProps = { size: "S" | "M" | "L"; selected?: boolean; onClick?: () => void; className?: string };

export function BadgeSize({ size, selected = false, onClick, className }: BadgeSizeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "size-7 inline-flex items-center justify-center rounded-sm text-sm font-bold transition-colors",
        selected
          ? "bg-brand text-onbrand"
          : "bg-surface text-ink border border-line hover:bg-brand-subtle",
        className
      )}
    >
      {size}
    </button>
  );
}

export function BadgeSizeS(props: Omit<BadgeSizeProps, "size">) { return <BadgeSize size="S" {...props} />; }
export function BadgeSizeM(props: Omit<BadgeSizeProps, "size">) { return <BadgeSize size="M" {...props} />; }
export function BadgeSizeL(props: Omit<BadgeSizeProps, "size">) { return <BadgeSize size="L" {...props} />; }
