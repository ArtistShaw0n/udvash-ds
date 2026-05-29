import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:4642 ("Rejection Message Container")
 * Raw values, no semantic tokens:
 *   card: bg #f7d7da · rounded-[10px] · w-[328px] · shadow 0 0 4px rgba(255,255,255,0.25)
 *   text: Inter/Noto Regular 14px #723036 · leading-[22px]
 */

export type ServiceBlockedCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function ServiceBlockedCard({ children, className }: ServiceBlockedCardProps) {
  return (
    <div
      role="alert"
      className={cn(
        "w-[328px] rounded-[10px] bg-[#f7d7da] p-[20px] shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)]",
        className,
      )}
    >
      <div className="font-['Inter',sans-serif] text-[14px] leading-[22px] text-[#723036]">
        {children}
      </div>
    </div>
  );
}
