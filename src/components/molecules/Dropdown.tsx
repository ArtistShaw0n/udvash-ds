"use client";

import { useState } from "react";
import { Icon } from "../atoms/Icon";
import { Popover } from "./Popover";
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
  placeholder?: React.ReactNode;
  size?: DropdownSize;
  disabled?: boolean;
  invalid?: boolean;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
};

/*
 * Figma source: V2 Dropdown (node 1:4352)
 *   bg-white (bg-surface)
 *   border #B9B9B9 (border-input)
 *   rounded-[5px] (rounded-sm)
 *   40px tall (matches Input md), 320px wide
 *   chevron-down trailing icon
 *   placeholder #616161 Inter Regular 14px
 */

const sizeClass: Record<DropdownSize, string> = {
  sm: "h-8  px-2.5 text-sm  rounded-sm",
  md: "h-10 px-3   text-base rounded-sm",  // Figma source
  lg: "h-12 px-3.5 text-md  rounded-md",
};

export function Dropdown({
  options,
  value: controlled,
  defaultValue,
  onChange,
  placeholder = "Select an option",
  size = "md",
  disabled = false,
  invalid = false,
  fullWidth = false,
  className,
  ariaLabel,
}: DropdownProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = controlled ?? uncontrolled;
  const selected = options.find((o) => o.value === value);

  function pick(opt: DropdownOption, close: () => void) {
    if (opt.disabled) return;
    if (controlled === undefined) setUncontrolled(opt.value);
    onChange?.(opt.value);
    close();
  }

  return (
    <Popover
      placement="bottom-start"
      className={cn(fullWidth && "w-full", className)}
      contentClassName="w-full max-h-60 overflow-auto p-1"
      trigger={(triggerProps) => (
        <button
          {...triggerProps}
          type="button"
          disabled={disabled}
          data-invalid={invalid || undefined}
          aria-label={ariaLabel}
          className={cn(
            "inline-flex items-center justify-between gap-2 border border-border-input bg-surface font-sans text-left",
            "focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
            "disabled:cursor-not-allowed disabled:bg-subtle",
            "data-[invalid=true]:border-danger",
            sizeClass[size],
            fullWidth ? "w-full" : "w-[320px]",
          )}
        >
          <span className={cn("truncate", selected ? "text-primary" : "text-placeholder")}>
            {selected?.label ?? placeholder}
          </span>
          <Icon name="ChevronDown" size="xs" className="shrink-0 text-muted" />
        </button>
      )}
    >
      {(close) => (
        <ul role="listbox" className="space-y-0.5">
          {options.map((opt) => {
            const isActive = opt.value === value;
            return (
              <li key={opt.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  aria-disabled={opt.disabled || undefined}
                  disabled={opt.disabled}
                  onClick={() => pick(opt, close as () => void)}
                  className={cn(
                    "flex w-full items-center justify-between gap-2 rounded-xs px-3 py-1.5 text-left text-sm",
                    "transition-colors hover:bg-subtle disabled:cursor-not-allowed disabled:text-disabled",
                    isActive && "bg-brand-subtle text-brand",
                  )}
                >
                  <span>{opt.label}</span>
                  {isActive && <Icon name="Check" size="xs" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </Popover>
  );
}
