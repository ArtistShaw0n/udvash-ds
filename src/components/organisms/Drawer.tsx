"use client";

import { useEffect } from "react";
import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type DrawerSide = "left" | "right";
export type DrawerSize = "sm" | "md" | "lg";

export type DrawerProps = {
  open: boolean;
  onClose: () => void;
  side?: DrawerSide;
  size?: DrawerSize;
  title?: React.ReactNode;
  showClose?: boolean;
  closeOnBackdrop?: boolean;
  className?: string;
  children: React.ReactNode;
};

/*
 * Drawer — side panel that slides in from the left or right edge.
 * Same scrim recipe as Modal / Sheet. z-drawer (40).
 */

const sizeClass: Record<DrawerSize, string> = {
  sm: "w-[280px]",
  md: "w-[320px]",
  lg: "w-[360px]",
};

export function Drawer({
  open,
  onClose,
  side = "right",
  size = "md",
  title,
  showClose = true,
  closeOnBackdrop = true,
  className,
  children,
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === "string" ? title : "Drawer"}
      className={cn("fixed inset-0 flex", side === "right" ? "justify-end" : "justify-start")}
      style={{ zIndex: "var(--z-drawer)" }}
    >
      <div
        aria-hidden="true"
        onClick={closeOnBackdrop ? onClose : undefined}
        className="absolute inset-0 backdrop-blur-[4px]"
        style={{ background: "rgba(25, 28, 29, 0.6)" }}
      />
      <div
        className={cn(
          "relative h-full overflow-y-auto bg-surface p-4 shadow-card",
          sizeClass[size],
          className,
        )}
      >
        {(title || showClose) && (
          <div className="mb-3 flex items-start justify-between gap-3">
            {title && (
              <h2 className="text-lg font-semibold text-primary">{title}</h2>
            )}
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className="-m-1 shrink-0 rounded-full p-1 text-muted transition-colors hover:bg-subtle hover:text-primary focus:outline-none focus-visible:bg-subtle"
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
