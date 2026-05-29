import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:32648 ("Progress Bar")
 * Raw values, no semantic tokens:
 *   track: bg #e1e3e4 · rounded-[9999px] · h-[8px]   (Figma rendered 264×8)
 *   fill:  node 1:32649 "Background" · bg #55347b · rounded-[9999px]
 *          inset-[-0.13px_94.7%_0.13px_0]  (the exact static Figma fill position)
 */

export type ProgressBarProps = {
  className?: string;
};

export function ProgressBar({ className }: ProgressBarProps) {
  return (
    <div className={cn("relative h-[8px] w-full overflow-clip rounded-[9999px] bg-[#e1e3e4]", className)}>
      <div className="absolute inset-[-0.13px_94.7%_0.13px_0] rounded-[9999px] bg-[#55347b]" />
    </div>
  );
}
