"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type DropdownProps<T extends string> = {
  options: { value: T; label: string }[];
  value?: T;
  onChange?: (value: T) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export function Dropdown<T extends string>({
  options,
  value,
  onChange,
  placeholder = "Select…",
  disabled,
  className,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cn("relative w-[280px] md:w-[360px] lg:w-[480px]", className)}
    >
      <button
        type="button"
        onClick={() => !disabled && setOpen((v) => !v)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex w-full h-10 px-3 items-center justify-between rounded-sm border bg-surface transition-colors",
          disabled ? "border-line-disabled bg-disabled cursor-not-allowed" : "border-line hover:border-line-strong",
          open && "border-line-brand ring-2 ring-line-brand/20"
        )}
      >
        <span className={cn("text-md truncate", selected ? "text-ink" : "text-placeholder")}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown className={cn("size-4 ml-2 shrink-0 transition-transform", open && "rotate-180", disabled ? "text-disabled-text" : "text-muted")} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-sm border border-line bg-surface shadow-md"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => { onChange?.(opt.value); setOpen(false); }}
              className={cn(
                "px-3 py-2 text-md cursor-pointer hover:bg-brand-subtle",
                opt.value === value && "bg-brand-subtle font-medium text-link"
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

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
