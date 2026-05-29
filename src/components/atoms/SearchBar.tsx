import { cn } from "@/lib/cn";

/*
 * 1:1 import from Figma V2 — node 1:35401 (Q&A / search field).
 * Verbatim Figma values:
 *   field: bg-white · border 1px #cdcdcd · h-[30px] · w-[253px] · rounded-[15px]
 *   placeholder: Inter Regular 14px #999999  (typed text uses the app text #616161)
 *   search icon (left) is a Figma SVG asset — skipped in Phase 1
 */

export type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement>;

export function SearchBar({ className, placeholder = "Search", type = "search", ...props }: SearchBarProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "h-[30px] w-[253px] rounded-[15px] border border-[#cdcdcd] bg-white px-[10px]",
        "font-['Inter',sans-serif] text-[14px] text-[#616161] outline-none placeholder:text-[#999999]",
        className,
      )}
      {...props}
    />
  );
}
