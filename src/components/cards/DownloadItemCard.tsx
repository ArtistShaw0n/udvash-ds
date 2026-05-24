"use client";

import { Icon } from "../atoms/Icon";
import { IconChip } from "../atoms/IconChip";
import { ProgressBar } from "../atoms/ProgressBar";
import { Skeleton } from "../atoms/Skeleton";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type DownloadStatus = "queued" | "downloading" | "completed" | "failed";

export type DownloadItemCardProps = {
  title: string;
  meta?: string;
  status: DownloadStatus;
  progress?: number;
  fileSizeMB?: number;
  loading?: boolean;
  onAction?: () => void;
  className?: string;
};

/**
 * DownloadItemCard — Figma `Download/Item` (90×56) + `Download/Item-
 * Downloading-State`. Compact row in the Downloads queue showing
 * filename + progress + action (pause/retry/open).
 */
export function DownloadItemCard({
  title,
  meta,
  status,
  progress = 0,
  fileSizeMB,
  loading = false,
  onAction,
  className,
}: DownloadItemCardProps) {
  if (loading) {
    return (
      <div
        className={cn(
          "flex w-full max-w-[336px] items-center gap-3 rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="rect" width={40} height={40} />
        <div className="flex-1 space-y-1.5">
          <Skeleton width="70%" height={12} />
          <Skeleton width="40%" height={10} />
        </div>
        <Skeleton variant="circle" width={28} height={28} />
      </div>
    );
  }

  const config = {
    queued: { iconTone: "neutral" as const, actionIcon: "X" as const, label: "Queued" },
    downloading: { iconTone: "brand" as const, actionIcon: "Pause" as const, label: `${Math.round(progress)}%` },
    completed: { iconTone: "success" as const, actionIcon: "Play" as const, label: "Done" },
    failed: { iconTone: "error" as const, actionIcon: "RotateCw" as const, label: "Failed" },
  }[status];

  return (
    <div
      className={cn(
        "flex w-full max-w-[336px] items-center gap-3 rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
        className,
      )}
    >
      <IconChip
        name={status === "completed" ? "CircleCheck" : status === "failed" ? "CircleAlert" : "Download"}
        tone={config.iconTone}
        size="md"
      />
      <div className="min-w-0 flex-1">
        <Text size="sm" weight="medium" className="truncate">
          {title}
        </Text>
        {status === "downloading" ? (
          <div className="mt-1">
            <ProgressBar value={progress} size="sm" variant="brand" />
            <Text size="xs" color="muted" className="mt-1">
              {config.label}
              {fileSizeMB != null && ` · ${fileSizeMB.toFixed(1)} MB`}
            </Text>
          </div>
        ) : (
          <Text size="xs" color="muted" className="truncate">
            {config.label}
            {meta && ` · ${meta}`}
            {fileSizeMB != null && ` · ${fileSizeMB.toFixed(1)} MB`}
          </Text>
        )}
      </div>
      {onAction && (
        <button
          type="button"
          onClick={onAction}
          aria-label={status === "downloading" ? "Pause" : status === "failed" ? "Retry" : status === "completed" ? "Play" : "Cancel"}
          className="inline-flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-subtle hover:text-ink"
        >
          <Icon name={config.actionIcon} size="sm" />
        </button>
      )}
    </div>
  );
}
