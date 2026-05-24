"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type PopoverPlacement = "bottom-start" | "bottom-end" | "top-start" | "top-end";

export type PopoverTriggerProps = {
  onClick: () => void;
  "aria-expanded": boolean;
  "aria-haspopup": "dialog";
  "aria-controls": string;
};

export type PopoverProps = {
  /**
   * Either a React element (wrapped in Popover's default `<button>`) or
   * a render function that receives the trigger props for you to spread
   * onto your own interactive element. Use the render-prop form when the
   * trigger is itself a `<button>` (e.g. our `<Button>` atom) so we don't
   * nest button-inside-button.
   */
  trigger: React.ReactNode | ((props: PopoverTriggerProps) => React.ReactNode);
  placement?: PopoverPlacement;
  className?: string;
  contentClassName?: string;
  /**
   * Popover panel content. Can be a static node, or a render function
   * that receives a `close()` callback (useful for menus that dismiss
   * after a selection).
   */
  children: React.ReactNode | ((close: () => void) => React.ReactNode);
};

const placementClass: Record<PopoverPlacement, string> = {
  "bottom-start": "top-full left-0 mt-1",
  "bottom-end":   "top-full right-0 mt-1",
  "top-start":    "bottom-full left-0 mb-1",
  "top-end":      "bottom-full right-0 mb-1",
};

/*
 * Popover — generic floating panel with outside-click + Esc dismissal.
 * The trigger prop accepts either a static node (wrapped in our own
 * <button>) or a render function for full control of the trigger element.
 */
export function Popover({
  trigger,
  placement = "bottom-start",
  className,
  contentClassName,
  children,
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentId = useId();

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const triggerProps: PopoverTriggerProps = {
    onClick: () => setOpen((o) => !o),
    "aria-expanded": open,
    "aria-haspopup": "dialog",
    "aria-controls": contentId,
  };

  return (
    <div ref={wrapperRef} className={cn("relative inline-block", className)}>
      {typeof trigger === "function" ? (
        trigger(triggerProps)
      ) : (
        <button type="button" {...triggerProps} className="inline-flex">
          {trigger}
        </button>
      )}
      {open && (
        <div
          id={contentId}
          role="dialog"
          className={cn(
            "absolute min-w-[180px] rounded-md border border-border bg-surface p-1 shadow-card",
            placementClass[placement],
            contentClassName,
          )}
          style={{ zIndex: "var(--z-popover)" }}
        >
          {typeof children === "function" ? children(() => setOpen(false)) : children}
        </div>
      )}
    </div>
  );
}
