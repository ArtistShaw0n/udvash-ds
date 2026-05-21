"use client";

import { cn } from "@/lib/cn";

type SliderProps = {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  showValue?: boolean;
  className?: string;
};

export function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label,
  showValue = true,
  className,
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={cn("w-full max-w-[480px]", className)}>
      {(label || showValue) && (
        <div className="flex justify-between mb-2 text-sm text-muted">
          {label && <span>{label}</span>}
          {showValue && <span className="text-ink font-medium">{value}</span>}
        </div>
      )}
      <div className="relative h-6 flex items-center">
        <div className="absolute inset-x-0 h-2 rounded-full bg-disabled">
          <div className="h-full rounded-full bg-brand" style={{ width: `${pct}%` }} />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label || "Slider"}
          className="relative w-full h-6 appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:size-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-brand
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-onbrand
            [&::-webkit-slider-thumb]:shadow-md
            [&::-moz-range-thumb]:size-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-brand
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-onbrand
            [&::-moz-range-thumb]:shadow-md"
        />
      </div>
    </div>
  );
}
