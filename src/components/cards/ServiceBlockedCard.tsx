import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:4642 ("Rejection Message Container")
 * Raw values, no semantic tokens:
 *   card: bg #f7d7da · rounded-[10px] · w-[328px] · shadow 0 0 4px rgba(255,255,255,0.25)
 *   text: Inter/Noto Regular 14px #723036 · leading-[22px]
 * bg/text colours are props so the other status variants can reuse the shell.
 */

export type ServiceBlockedCardProps = {
  children: React.ReactNode;
  bg?: string;
  textColor?: string;
  className?: string;
};

export function ServiceBlockedCard({
  children,
  bg = "#f7d7da",
  textColor = "#723036",
  className,
}: ServiceBlockedCardProps) {
  return (
    <div
      role="alert"
      className={cn(
        "w-[328px] rounded-[10px] p-[20px] shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)]",
        className,
      )}
      style={{ backgroundColor: bg }}
    >
      <div
        className="font-['Inter',sans-serif] text-[14px] leading-[22px]"
        style={{ color: textColor }}
      >
        {children}
      </div>
    </div>
  );
}
