import { cn } from "@/lib/cn";

/*
 * 1:1 import from Figma V2 — node 1:35401 (Q&A / search field).
 * Verbatim Figma values:
 *   field: bg-white · border 1px #cdcdcd · h-[30px] · w-[253px] · rounded-[15px]
 *   placeholder: Inter Regular 14px #999999  (typed text uses the app text #616161)
 *   search icon (18px, left) — Figma asset, node 1:35403 → public/components/icons/search.svg
 */

export type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement>;

export function SearchBar({ className, placeholder = "Search", type = "search", ...props }: SearchBarProps) {
  return (
    <div className="relative inline-block h-[30px] w-[253px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/components/icons/search.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[10px] top-1/2 size-[18px] -translate-y-1/2"
      />
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "h-[30px] w-[253px] rounded-[15px] border border-[#cdcdcd] bg-white pl-[34px] pr-[10px]",
          "font-['Inter',sans-serif] text-[14px] text-[#616161] outline-none placeholder:text-[#999999]",
          className,
        )}
        {...props}
      />
    </div>
  );
}
