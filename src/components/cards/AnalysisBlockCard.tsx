import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:5045 (Analysis Report stat tile)
 * Raw values, no semantic tokens:
 *   tile:  bg #ffffff · rounded-[5px] · shadow 0 0 5px rgba(0,0,0,0.1)
 *   icon:  46px box · bg <accent> at 10% (node 1:5053, opacity-10) · rounded-[10px]
 *   label: Inter Regular 14px #616161
 *   value: Inter Medium 24px #616161
 *   accents (Figma variants): Correct #00ba00 · Skipped #25b7d3 · Incorrect #f95959 · Neg. Mark #f59e0b
 */

export type AnalysisBlockType = "correct" | "skipped" | "incorrect" | "negMark";

const ICON_BOX: Record<AnalysisBlockType, string> = {
  correct: "bg-[#00ba001a] text-[#00ba00]",
  skipped: "bg-[#25b7d31a] text-[#25b7d3]",
  incorrect: "bg-[#f959591a] text-[#f95959]",
  negMark: "bg-[#f59e0b1a] text-[#f59e0b]",
};

export type AnalysisBlockCardProps = {
  /** Icon glyph is a Figma asset — optional; box renders without it in Phase 1. */
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
  type?: AnalysisBlockType;
  className?: string;
};

export function AnalysisBlockCard({ icon, label, value, type = "correct", className }: AnalysisBlockCardProps) {
  return (
    <div
      className={cn(
        "flex w-[150px] items-center gap-[12px] rounded-[5px] bg-white p-[12px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <span
        className={cn("flex size-[46px] shrink-0 items-center justify-center rounded-[10px]", ICON_BOX[type])}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-['Inter',sans-serif] text-[14px] text-[#616161]">{label}</span>
        <span className="block font-['Inter',sans-serif] text-[24px] font-medium text-[#616161]">{value}</span>
      </span>
    </div>
  );
}
