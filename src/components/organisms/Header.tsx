import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:12014 ("Header")
 * Raw values, no semantic tokens:
 *   bar:   bg #ffffff · h-[50px] · w-[376px] · shadow 0px 1px 4px 0px rgba(0,0,0,0.06)
 *   logo:  left edge (~12px inset)
 *   right: action area + 28px avatar (right inset ~12px)
 */

export type HeaderProps = {
  logo?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
};

export function Header({ logo, right, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-[50px] w-[376px] items-center justify-between bg-white px-[12px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      <div className="flex items-center">{logo}</div>
      <div className="flex items-center gap-[12px]">{right}</div>
    </header>
  );
}
