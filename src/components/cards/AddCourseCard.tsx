"use client";

import { Checkbox } from "../atoms/Checkbox";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:16812 ("Container" add-course row)
 * Raw values, no semantic tokens:
 *   row:   bg #ffffff · rounded-[5px] · shadow 0 0 5px rgba(0,0,0,0.1)
 *   check: MUI checkbox (24px) at left
 *   text:  Inter Regular 14px #616161 · leading-[22px]
 */

export type AddCourseCardProps = {
  title: string;
  checked?: boolean;
  onToggle?: (next: boolean) => void;
  className?: string;
};

export function AddCourseCard({ title, checked, onToggle, className }: AddCourseCardProps) {
  return (
    <label
      className={cn(
        "flex w-[360px] items-center gap-[8px] rounded-[5px] bg-white px-[8px] py-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <Checkbox
        checked={checked}
        onChange={(e) => onToggle?.((e.target as HTMLInputElement).checked)}
      />
      <span className="font-['Inter',sans-serif] text-[14px] leading-[22px] text-[#616161]">{title}</span>
    </label>
  );
}
