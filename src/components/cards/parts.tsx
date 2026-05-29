import { cn } from "@/lib/cn";

/*
 * Shared raw-value primitives for the V2 class/exam cards.
 * Every value below is taken verbatim from the Figma nodes
 * (1:9602 LiveClass, 1:8574 LiveExam, 1:7819 PastClass, 1:8518 MasterClass)
 * — all four share this exact shell.
 */

// Card shell: bg #ffffff · rounded-[10px] · shadow 0 0 5px rgba(0,0,0,0.1) · w-[328px]
export const cardShellClass =
  "w-[328px] overflow-hidden rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]";

// Header band: bg #e4eaf4 · rounded top corners
export function CardBand({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#e4eaf4] px-[20px] pb-[10px] pt-[12px]">{children}</div>;
}

// Type label (top-left): Inter Regular 14px #616161
export function CardType({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{children}</span>
  );
}

// "Live Now" chip: red dot 12px + Inter Medium 12px #ff0000
export function LiveChip() {
  return (
    <span className="inline-flex items-center gap-[4px] rounded-[10px] px-[10px] py-[4px]">
      <span className="size-[12px] rounded-full bg-[#ff0000]" aria-hidden="true" />
      <span className="font-['Inter',sans-serif] text-[12px] font-medium text-[#ff0000]">Live Now</span>
    </span>
  );
}

// Bordered status chip (e.g. "Online"): border 1px #ff0000 · Inter Medium 12px #ff0000
export function OutlineChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-[20px] items-center rounded-[10px] border border-[#ff0000] px-[10px] font-['Inter',sans-serif] text-[12px] font-medium text-[#ff0000]">
      {children}
    </span>
  );
}

// Card title: Inter SemiBold 16px #616161 leading-[22px]
export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161]">
      {children}
    </p>
  );
}

// Label row: Inter Regular 14px #616161
export function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{children}</p>;
}

// Value row: Inter SemiBold 14px #616161
export function FieldValue({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{children}</p>
  );
}

// Card button: bg #55347b · h-[36px] · rounded-[5px] · Inter 14px #ffffff
export function CardButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-[36px] items-center justify-center whitespace-nowrap rounded-[5px] bg-[#55347b] px-[20px]",
        "font-['Inter',sans-serif] text-[14px] leading-[12px] text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
