"use client";

import { cn } from "@/lib/cn";
import { Checkbox } from "./Checkbox";

type AddCourseCardProps = {
  label: string;
  description?: string;
  price?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  bangla?: boolean;
  className?: string;
};

export function AddCourseCard({
  label,
  description,
  price,
  checked,
  onChange,
  bangla,
  className,
}: AddCourseCardProps) {
  return (
    <label
      className={cn(
        "flex items-center gap-3 w-[336px] min-h-[54px] px-3 py-2 rounded-sm bg-surface border border-line-subtle cursor-pointer transition-colors",
        checked && "bg-brand-subtle border-line-brand",
        className
      )}
    >
      <Checkbox checked={checked} onChange={onChange} />
      <div className="flex-1 min-w-0">
        <p className={cn("text-md font-medium text-ink truncate", bangla && "font-bangla")}>{label}</p>
        {description && <p className="text-sm text-muted truncate">{description}</p>}
      </div>
      {price && <span className="text-md font-semibold text-ink tabular-nums shrink-0">{price}</span>}
    </label>
  );
}
