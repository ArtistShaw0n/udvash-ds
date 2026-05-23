"use client";

import { useEffect } from "react";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type SheetProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  showClose?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Sheet({
  open,
  onClose,
  title,
  showClose = true,
  className,
  children,
}: SheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-scrim"
      />
      <div
        className={cn(
          "relative w-full rounded-t-xl bg-surface p-5 shadow-lg",
          "max-h-[90vh] overflow-y-auto",
          className,
        )}
      >
        <div
          aria-hidden="true"
          className="mx-auto mb-3 h-1 w-10 rounded-full bg-line"
        />
        {(title || showClose) && (
          <div className="mb-3 flex items-start justify-between gap-3">
            {title && (
              <Text as="h2" size="lg" weight="semibold">
                {title}
              </Text>
            )}
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close sheet"
                className="ml-auto rounded-full text-muted hover:text-ink"
              >
                <Icon name="X" size="md" />
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
