"use client";

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type FilterChipProps = Omit<HTMLAttributes<HTMLButtonElement>, "children"> & {
  label: string;
  isOpen?: boolean;
  selected?: boolean;
};

export function FilterChip({ label, isOpen, selected, className, ...rest }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-pressed={selected}
      className={cn(
        "inline-flex items-center gap-1.5 h-8 px-3 rounded-sm border text-sm font-medium transition-colors",
        selected
          ? "bg-brand-subtle text-brand border-line-brand"
          : "bg-surface text-ink border-line hover:bg-brand-subtle",
        className
      )}
      {...rest}
    >
      <span>{label}</span>
      <Icon name={isOpen ? "chevron-up" : "chevron-down"} size={14} />
    </button>
  );
}
