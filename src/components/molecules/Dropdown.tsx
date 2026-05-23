"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type DropdownOption = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export type DropdownSize = "sm" | "md" | "lg";

export type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: DropdownSize;
  disabled?: boolean;
  className?: string;
};

const sizeClass: Record<DropdownSize, string> = {
  sm: "h-8 text-sm px-2.5 rounded-sm",
  md: "h-10 text-md px-2.5 rounded-sm",
  lg: "h-12 text-md px-3 rounded-md",
};

export function Dropdown({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  placeholder = "Select…",
  size = "md",
  disabled = false,
  className,
}: DropdownProps) {
  const [internal, setInternal] = useState(defaultValue ?? "");
  const value = controlledValue ?? internal;
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

  const selected = options.find((o) => o.value === value);

  function select(v: string) {
    if (controlledValue === undefined) setInternal(v);
    onChange?.(v);
    setOpen(false);
  }

  return (
    <div ref={ref} className={cn("relative inline-block w-full", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "flex w-full items-center justify-between gap-2 bg-surface text-ink",
          "border border-line",
          "focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
          "disabled:cursor-not-allowed disabled:bg-surface-subtle disabled:text-placeholder",
          sizeClass[size],
        )}
      >
        <span className={cn(!selected && "text-placeholder")}>
          {selected ? selected.label : placeholder}
        </span>
        <Icon name="ChevronDown" size="sm" className="text-muted" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md border border-line-subtle bg-surface p-1 shadow-md"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              aria-disabled={opt.disabled}
              onClick={() => !opt.disabled && select(opt.value)}
              className={cn(
                "cursor-pointer rounded-xs px-2 py-1.5 text-sm",
                opt.disabled
                  ? "cursor-not-allowed text-placeholder"
                  : "hover:bg-surface-subtle",
                opt.value === value && "bg-brand-subtle text-brand",
              )}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
