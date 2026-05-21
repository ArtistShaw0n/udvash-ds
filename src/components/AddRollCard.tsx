"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type AddRollCardProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  bangla?: boolean;
};

export function AddRollCard({
  label = "Roll No.",
  bangla,
  className,
  ...rest
}: AddRollCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between w-[176px] h-[60px] px-3 py-2 rounded-sm bg-surface border border-line-subtle",
        className
      )}
    >
      <span className={cn("text-xs text-muted", bangla && "font-bangla")}>{label}</span>
      <input
        type="text"
        inputMode="numeric"
        className="bg-transparent text-md font-medium text-ink outline-none placeholder:text-placeholder w-full"
        {...rest}
      />
    </div>
  );
}
