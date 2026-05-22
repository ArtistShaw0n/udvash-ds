"use client";

import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  primaryAction?: { label: string; onClick: () => void; destructive?: boolean };
  secondaryAction?: { label: string; onClick: () => void };
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  primaryAction,
  secondaryAction,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-scrim/80 p-0 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div
        className={cn(
          "w-full md:w-auto md:max-w-md lg:max-w-lg",
          "bg-surface rounded-t-md md:rounded-md shadow-lg",
          "p-6 space-y-4"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle on mobile */}
        <div className="md:hidden w-10 h-1 rounded-full bg-line-strong mx-auto" aria-hidden />

        {title && <h2 id="modal-title" className="text-lg md:text-xl font-semibold text-ink">{title}</h2>}
        {description && <p className="text-md text-muted">{description}</p>}
        {children}

        {(primaryAction || secondaryAction) && (
          <div className="flex justify-end gap-3 pt-2">
            {secondaryAction && (
              <button
                onClick={secondaryAction.onClick}
                className="px-4 py-2 text-md text-link rounded-sm hover:bg-brand-subtle transition-colors"
              >
                {secondaryAction.label}
              </button>
            )}
            {primaryAction && (
              <button
                onClick={primaryAction.onClick}
                className={cn(
                  "px-6 py-2 text-md rounded-sm text-onbrand transition-colors",
                  primaryAction.destructive ? "bg-error hover:opacity-90" : "bg-brand hover:bg-brand-accent"
                )}
              >
                {primaryAction.label}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
