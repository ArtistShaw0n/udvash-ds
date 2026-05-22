"use client";

import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  side?: "left" | "right" | "top" | "bottom";
  title?: string;
  children?: ReactNode;
};

const sideClasses = {
  left:   "left-0 top-0 h-full w-[280px] md:w-[336px] md:w-[432px] lg:w-[528px] animate-[slide-right_200ms_ease-out]",
  right:  "right-0 top-0 h-full w-[280px] md:w-[336px] md:w-[432px] lg:w-[528px] animate-[slide-left_200ms_ease-out]",
  top:    "top-0 inset-x-0 h-1/3 animate-[slide-down_200ms_ease-out]",
  bottom: "bottom-0 inset-x-0 max-h-3/4 rounded-t-md animate-[slide-up_200ms_ease-out]",
};

export function Drawer({ open, onClose, side = "right", title, children }: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-scrim/80"
        onClick={onClose}
        aria-hidden
      />
      <aside
        className={cn(
          "absolute bg-surface shadow-lg overflow-auto",
          sideClasses[side]
        )}
      >
        {title && (
          <header className="flex items-center justify-between p-4 border-b border-line-subtle">
            <h2 className="text-md font-semibold text-ink">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close drawer"
              className="text-muted hover:text-ink"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </header>
        )}
        <div className="p-4">{children}</div>
      </aside>
    </div>
  );
}
