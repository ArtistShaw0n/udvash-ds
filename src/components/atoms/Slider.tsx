"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type SliderProps = {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  showValue?: boolean;
  label?: string;
  formatValue?: (value: number) => string;
  onChange?: (value: number) => void;
  className?: string;
  id?: string;
};

/**
 * Slider — single-thumb range input styled with the brand palette.
 * Uses native <input type="range"> so accessibility, keyboard
 * navigation, and form integration come for free.
 */
export function Slider({
  value: controlled,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  showValue = false,
  label,
  formatValue,
  onChange,
  className,
  id,
}: SliderProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = controlled ?? uncontrolled;
  const percent = ((value - min) / (max - min)) * 100;
  const display = formatValue ? formatValue(value) : value;

  function update(next: number) {
    if (controlled === undefined) setUncontrolled(next);
    onChange?.(next);
  }

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="mb-1 flex items-center justify-between text-xs text-muted">
          {label ? <label htmlFor={inputId}>{label}</label> : <span />}
          {showValue && <span className="tabular-nums text-ink">{display}</span>}
        </div>
      )}
      <input
        id={inputId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => update(Number(e.target.value))}
        className={cn(
          "h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-subtle",
          "[&::-webkit-slider-thumb]:appearance-none",
          "[&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:rounded-full",
          "[&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:shadow-sm",
          "[&::-webkit-slider-thumb]:transition-transform",
          "[&::-webkit-slider-thumb]:hover:scale-110",
          "[&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full",
          "[&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-brand",
          "disabled:cursor-not-allowed disabled:opacity-50",
        )}
        style={{
          background: disabled
            ? undefined
            : `linear-gradient(to right, var(--sem-brand) 0%, var(--sem-brand) ${percent}%, var(--sem-surface-subtle) ${percent}%, var(--sem-surface-subtle) 100%)`,
        }}
      />
    </div>
  );
}
