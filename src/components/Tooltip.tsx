"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type TooltipProps = {
  label: string;
  children: ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  className?: string;
};

const placementClasses = {
  top:    "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left:   "right-full top-1/2 -translate-y-1/2 mr-2",
  right:  "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({ label, children, placement = "top", className }: TooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open && (
        <span
          role="tooltip"
          className={cn(
            "absolute z-20 px-2 py-1 rounded-xs text-sm whitespace-nowrap pointer-events-none",
            "bg-ink text-surface shadow-md",
            placementClasses[placement]
          )}
        >
          {label}
        </span>
      )}
    </span>
  );
}
