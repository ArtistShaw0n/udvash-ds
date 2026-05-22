"use client";

import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type SheetProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  showClose?: boolean;
  children?: ReactNode;
  footer?: ReactNode;
  size?: "short" | "long";
};

export function Sheet({
  open,
  onClose,
  title,
  showClose = true,
  children,
  footer,
  size = "long",
}: SheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-scrim/70 p-0 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          "w-full md:w-[360px] bg-surface rounded-t-xl md:rounded-xl shadow-lg flex flex-col overflow-hidden",
          size === "short" ? "max-h-[471px]" : "max-h-[622px]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showClose) && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-line-subtle">
            {title && <h2 className="text-lg font-semibold text-ink">{title}</h2>}
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="ml-auto inline-flex items-center justify-center size-6 rounded-sm text-muted hover:bg-disabled"
              >
                <Icon name="cross" size={20} />
              </button>
            )}
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-4 text-md text-ink">
          {children}
        </div>
        {footer && (
          <div className="px-4 py-3 border-t border-line-subtle flex justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
