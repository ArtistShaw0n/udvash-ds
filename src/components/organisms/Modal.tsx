"use client";

import { useEffect } from "react";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type ModalSize = "sm" | "md" | "lg";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  size?: ModalSize;
  showClose?: boolean;
  className?: string;
  children: React.ReactNode;
};

const sizeClass: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

export function Modal({
  open,
  onClose,
  title,
  description,
  size = "md",
  showClose = true,
  className,
  children,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-scrim"
      />
      <div
        className={cn(
          "relative w-full rounded-lg bg-surface p-5 shadow-lg",
          sizeClass[size],
          className,
        )}
      >
        {(title || showClose) && (
          <div className="mb-2 flex items-start justify-between gap-3">
            {title && (
              <Text as="h2" size="lg" weight="semibold">
                {title}
              </Text>
            )}
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="ml-auto rounded-full text-muted hover:text-ink"
              >
                <Icon name="X" size="md" />
              </button>
            )}
          </div>
        )}
        {description && (
          <Text size="sm" color="muted" className="mb-4">
            {description}
          </Text>
        )}
        {children}
      </div>
    </div>
  );
}
