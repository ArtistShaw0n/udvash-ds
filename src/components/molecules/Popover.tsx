"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type PopoverPlacement = "bottom-start" | "bottom-end" | "top-start" | "top-end";

export type PopoverProps = {
  trigger: React.ReactNode;
  placement?: PopoverPlacement;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
};

const placementClass: Record<PopoverPlacement, string> = {
  "bottom-start": "top-full left-0 mt-1",
  "bottom-end": "top-full right-0 mt-1",
  "top-start": "bottom-full left-0 mb-1",
  "top-end": "bottom-full right-0 mb-1",
};

export function Popover({
  trigger,
  placement = "bottom-start",
  className,
  contentClassName,
  children,
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
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

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex"
      >
        {trigger}
      </button>
      {open && (
        <div
          role="dialog"
          className={cn(
            "absolute z-30 min-w-[180px] rounded-md border border-line-subtle bg-surface p-1 shadow-md",
            placementClass[placement],
            contentClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
