"use client";

import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type VideoControlsProps = {
  isPlaying?: boolean;
  onTogglePlay?: () => void;
  progress?: number;
  time?: string;
  onSettings?: () => void;
  onFullscreen?: () => void;
  className?: string;
};

export function VideoControls({
  isPlaying = false,
  onTogglePlay,
  progress = 0,
  time = "00:00",
  onSettings,
  onFullscreen,
  className,
}: VideoControlsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 h-[30px] px-3 bg-scrim text-onbrand w-full max-w-[360px] rounded-md",
        className
      )}
    >
      <button
        type="button"
        onClick={onTogglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
        className="inline-flex shrink-0"
      >
        <Icon name={isPlaying ? "pause" : "play"} size={16} />
      </button>
      <div className="flex-1 h-1 rounded-full bg-line-subtle/40">
        <div className="h-full rounded-full bg-brand" style={{ width: `${progress}%` }} />
      </div>
      <span className="text-xs font-medium tabular-nums shrink-0">{time}</span>
      {onSettings && (
        <button type="button" onClick={onSettings} aria-label="Settings" className="inline-flex shrink-0">
          <Icon name="kebab" size={16} />
        </button>
      )}
      {onFullscreen && (
        <button type="button" onClick={onFullscreen} aria-label="Fullscreen" className="inline-flex shrink-0">
          <Icon name="chevron-up" size={16} />
        </button>
      )}
    </div>
  );
}
