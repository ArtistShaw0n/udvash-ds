import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:4352 ("Dropdown", closed state)
 * Raw values, no semantic tokens:
 *   trigger:  bg #ffffff, border 1px #b9b9b9, h-[40px], rounded-[5px], w-[320px]
 *   text:     Inter 14px #616161 ("Select a option")
 *   label:    Inter 14px #616161, required asterisk red
 * Figma shows only the closed trigger — the open option list is not in the
 * file, so it is skipped (to be added in a later phase). The chevron glyph is
 * a Figma SVG asset, also skipped in Phase 1.
 */

export type DropdownOption = { value: string; label: React.ReactNode };

export type DropdownProps = {
  options?: DropdownOption[];
  value?: string;
  placeholder?: React.ReactNode;
  label?: React.ReactNode;
  required?: boolean;
  className?: string;
};

export function Dropdown({
  options,
  value,
  placeholder = "Select a option",
  label,
  required,
  className,
}: DropdownProps) {
  const selected = options?.find((o) => o.value === value);
  return (
    <div className={cn("flex w-[320px] flex-col gap-[8px]", className)}>
      {label && (
        <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">
          {label}
          {required && <span className="text-[red]"> *</span>}
        </span>
      )}
      <div className="flex h-[40px] w-[320px] items-center rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] font-['Inter',sans-serif] text-[14px] text-[#616161]">
        <span className="truncate">{selected?.label ?? placeholder}</span>
      </div>
    </div>
  );
}
