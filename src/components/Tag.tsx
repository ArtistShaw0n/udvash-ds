import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "neutral" | "brand" | "muted";
  size?: "sm" | "md";
  selected?: boolean;
};

const variantClass = {
  neutral: "bg-surface-subtle text-ink border-line-subtle",
  brand:   "bg-brand-subtle text-brand border-line-brand",
  muted:   "bg-disabled text-muted border-line",
};

const sizeClass = {
  sm: "h-6 px-2 text-xs",
  md: "h-[26px] px-3 text-sm",
};

export function Tag({ variant = "neutral", size = "md", selected, className, children, ...rest }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-sm border font-medium whitespace-nowrap",
        variantClass[selected ? "brand" : variant],
        sizeClass[size],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
