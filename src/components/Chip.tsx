import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  removable?: boolean;
  onRemove?: () => void;
  selected?: boolean;
  icon?: ReactNode;
};

export function Chip({ children, removable, onRemove, selected, icon, className, ...rest }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 h-8 rounded-xl text-sm font-medium whitespace-nowrap border transition-colors",
        selected
          ? "bg-brand text-onbrand border-brand"
          : "bg-surface text-ink border-line hover:bg-brand-subtle",
        className
      )}
      {...rest}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove"
          className="ml-1 size-4 inline-flex items-center justify-center rounded-full hover:bg-onbrand/20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3" aria-hidden>
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
}
