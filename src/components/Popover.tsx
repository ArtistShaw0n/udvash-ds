"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PopoverOption = { value: string; label: string };

type PopoverProps = {
  options: PopoverOption[];
  selected?: string;
  onSelect: (value: string) => void;
  className?: string;
};

export function Popover({ options, selected, onSelect, className }: PopoverProps) {
  return (
    <ul
      role="menu"
      className={cn(
        "min-w-[117px] py-1 rounded-md bg-surface shadow-md border border-line-subtle",
        className
      )}
    >
      {options.map((opt) => {
        const active = opt.value === selected;
        return (
          <li key={opt.value} role="none">
            <button
              role="menuitem"
              type="button"
              onClick={() => onSelect(opt.value)}
              className={cn(
                "block w-full px-3 py-2 text-left text-sm transition-colors",
                active ? "text-link font-medium" : "text-ink hover:bg-disabled"
              )}
            >
              {opt.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function PopoverShell({
  open,
  anchor,
  children,
}: {
  open: boolean;
  anchor?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}) {
  if (!open) return null;
  const anchorClass =
    anchor === "top"
      ? "bottom-full mb-1"
      : anchor === "left"
      ? "right-full mr-1"
      : anchor === "right"
      ? "left-full ml-1"
      : "top-full mt-1";
  return <div className={cn("absolute z-30", anchorClass)}>{children}</div>;
}
