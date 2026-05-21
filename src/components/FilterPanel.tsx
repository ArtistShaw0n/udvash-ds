"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Icon } from "./Icon";

type FilterPanelProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  applyLabel?: string;
  resetLabel?: string;
  onApply?: () => void;
  onReset?: () => void;
  children: ReactNode;
  className?: string;
};

export function FilterPanel({
  open,
  onClose,
  title = "Filter",
  applyLabel = "Apply",
  resetLabel = "Reset",
  onApply,
  onReset,
  children,
  className,
}: FilterPanelProps) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-label={title}
      className={cn(
        "w-[328px] rounded-lg bg-surface shadow-md border border-line-subtle p-3 space-y-3",
        className
      )}
    >
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="size-6 inline-flex items-center justify-center text-muted hover:text-ink"
        >
          <Icon name="cross" size={18} />
        </button>
      </header>
      <div className="space-y-3">{children}</div>
      <footer className="flex justify-end gap-2 pt-2 border-t border-line-subtle">
        <Button variant="ghost" size="sm" onClick={onReset}>{resetLabel}</Button>
        <Button variant="primary" size="sm" onClick={onApply}>{applyLabel}</Button>
      </footer>
    </div>
  );
}
