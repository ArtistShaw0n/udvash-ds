"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  className?: string;
  children: React.ReactNode;
};

const placementClass: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({ content, placement = "top", className, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-flex"
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
            "absolute z-10 whitespace-nowrap rounded-sm bg-ink px-2 py-1 text-xs text-surface shadow-md",
            placementClass[placement],
            className,
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}
