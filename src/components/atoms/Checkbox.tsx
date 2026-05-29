import { forwardRef } from "react";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:5011 ("<Checkbox>", MUI primary)
 * Raw values, no semantic tokens:
 *   box:       24px · rounded-[4px]
 *   unchecked: border 2px #b9b9b9 · bg #ffffff
 *   checked:   bg #1976d2 (MUI primary/main) · border #1976d2
 * NOTE: the checkmark glyph is a Figma SVG asset (not yet extracted) → skipped
 *       in Phase 1; to be added in Phase 2.
 */

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className, ...props },
  ref,
) {
  return (
    <label className="inline-flex items-center gap-[8px]">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "size-[24px] appearance-none rounded-[4px] border-2 border-[#b9b9b9] bg-white",
          "checked:border-[#1976d2] checked:bg-[#1976d2]",
          className,
        )}
        {...props}
      />
      {label && (
        <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{label}</span>
      )}
    </label>
  );
});
