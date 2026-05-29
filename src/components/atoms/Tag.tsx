import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:17311 ("Language Tag")
 * Raw values, no semantic tokens:
 *   bg #4fa621 (green), rounded-[17px]   (Figma rendered size 53×26)
 *   text: Inter 14px #ffffff
 * Empty pill by default; pass children to render the Figma tag text.
 */

export type TagProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex h-[26px] items-center justify-center rounded-[17px] bg-[#4fa621] px-[12px]",
        "font-['Inter',sans-serif] text-[14px] text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
