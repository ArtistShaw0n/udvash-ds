"use client";

import { Icon } from "../atoms/Icon";
import { ProgressBar } from "../atoms/ProgressBar";
import { cn } from "@/lib/cn";

export type DownloadStatus = "queued" | "downloading" | "completed" | "failed";

export type DownloadItemCardProps = {
  title: string;
  meta?: string;
  status: DownloadStatus;
  progress?: number;
  fileSizeMB?: number;
  onAction?: () => void;
  className?: string;
};

/*
 * Figma source: V2 DownloadItem row (Video/Download screen 1:17237 or
 * My Downloads list 1:17170+). Compact row: icon-chip + title + status
 * (progress when downloading) + action button.
 */
export function DownloadItemCard({
  title,
  meta,
  status,
  progress = 0,
  fileSizeMB,
  onAction,
  className,
}: DownloadItemCardProps) {
  const cfg = {
    queued:      { iconBg: "bg-subtle text-muted",      actionIcon: "X" as const,        label: "Queued" },
    downloading: { iconBg: "bg-brand/10 text-brand",    actionIcon: "Pause" as const,    label: `${Math.round(progress)}%` },
    completed:   { iconBg: "bg-success/10 text-success", actionIcon: "Play" as const,    label: "Done" },
    failed:      { iconBg: "bg-danger/10 text-danger",   actionIcon: "RotateCw" as const, label: "Failed" },
  }[status];

  return (
    <div
      className={cn(
        "flex w-full max-w-[336px] items-center gap-3 rounded-md bg-surface p-3 shadow-card",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-9 shrink-0 items-center justify-center rounded-sm",
          cfg.iconBg,
        )}
        aria-hidden="true"
      >
        <Icon
          name={status === "completed" ? "CircleCheck" : status === "failed" ? "CircleAlert" : "Download"}
          size="sm"
        />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-medium text-primary">{title}</p>
        {status === "downloading" ? (
          <div className="mt-1">
            <ProgressBar value={progress} variant="brand" size="sm" />
            <p className="mt-1 text-sm text-muted">
              {cfg.label}
              {fileSizeMB != null && ` · ${fileSizeMB.toFixed(1)} MB`}
            </p>
          </div>
        ) : (
          <p className="truncate text-sm text-muted">
            {cfg.label}
            {meta && ` · ${meta}`}
            {fileSizeMB != null && ` · ${fileSizeMB.toFixed(1)} MB`}
          </p>
        )}
      </div>

      {onAction && (
        <button
          type="button"
          onClick={onAction}
          aria-label={
            status === "downloading"
              ? "Pause"
              : status === "failed"
                ? "Retry"
                : status === "completed"
                  ? "Play"
                  : "Cancel"
          }
          className="inline-flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-primary"
        >
          <Icon name={cfg.actionIcon} size="sm" />
        </button>
      )}
    </div>
  );
}
