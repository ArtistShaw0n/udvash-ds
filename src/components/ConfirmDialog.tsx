"use client";

import { useEffect } from "react";
import { cn } from "@/lib/cn";

type ConfirmDialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  loading?: boolean;
  onConfirm: () => void;
};

export function ConfirmDialog({
  open,
  onClose,
  title = "Delete?",
  message = "Are you sure you want to delete?",
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  destructive = true,
  loading = false,
  onConfirm,
}: ConfirmDialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-scrim/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
    >
      <div
        className="w-full max-w-[360px] bg-surface rounded-lg shadow-md p-5 space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="confirm-title" className="text-lg md:text-xl font-semibold text-ink leading-5">{title}</h2>
        <p className="text-md text-muted">{message}</p>
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 text-md text-muted rounded-sm hover:bg-disabled transition-colors disabled:opacity-60"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={cn(
              "px-4 py-2 text-md rounded-sm text-onbrand transition-colors disabled:opacity-60",
              destructive ? "bg-error hover:opacity-90" : "bg-brand hover:bg-brand-accent"
            )}
            aria-busy={loading}
          >
            {loading ? "..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
