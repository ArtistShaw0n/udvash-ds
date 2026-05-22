import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type DownloadStatusProps = {
  progress?: number; // 0-100
  label?: string;
  className?: string;
};

/** Download/Downloading — 138×30 pill showing active download progress */
export function DownloadStatus({ progress = 0, label, className }: DownloadStatusProps) {
  const pct = Math.max(0, Math.min(100, progress));
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 w-[138px] h-[30px] px-2 rounded-sm bg-surface-subtle border border-line-subtle overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-y-0 left-0 bg-brand-subtle"
        style={{ width: `${pct}%` }}
      />
      <Icon name="download" size={14} className="text-brand relative shrink-0" />
      <span className="relative text-xs font-medium text-ink truncate">
        {label ?? `${pct}%`}
      </span>
    </div>
  );
}
