"use client";

import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type VideoTabProps = {
  label: string;
  icon: IconName;
  active?: boolean;
  hasBadge?: boolean;
  onClick?: () => void;
  className?: string;
};

/** Single tab pill 118×34 used in video player sub-nav (Doubt/Notes/Quiz/Video) */
export function VideoTab({ label, icon, active = false, hasBadge = false, onClick, className }: VideoTabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "relative inline-flex items-center justify-center gap-1.5 w-[118px] h-[34px] rounded-sm text-sm font-medium transition-colors",
        active
          ? "bg-brand text-onbrand"
          : "bg-surface-subtle text-muted hover:text-ink",
        className
      )}
    >
      <Icon name={icon} size={14} />
      <span>{label}</span>
      {hasBadge && (
        <span className="absolute top-1 right-2 size-2 rounded-full bg-error" />
      )}
    </button>
  );
}

export function VideoTabDoubt(props: Omit<VideoTabProps, "label" | "icon">) {
  return <VideoTab label="Doubt" icon="speech-bubble" {...props} />;
}
export function VideoTabNotes(props: Omit<VideoTabProps, "label" | "icon">) {
  return <VideoTab label="Notes" icon="check" {...props} />;
}
export function VideoTabQuiz(props: Omit<VideoTabProps, "label" | "icon">) {
  return <VideoTab label="Quiz" icon="thumb-up" {...props} />;
}
export function VideoTabVideo(props: Omit<VideoTabProps, "label" | "icon">) {
  return <VideoTab label="Video" icon="play" {...props} />;
}

type VideoTabBarProps = {
  active: "video" | "notes" | "quiz" | "doubt";
  onChange: (id: "video" | "notes" | "quiz" | "doubt") => void;
  badges?: { video?: boolean; notes?: boolean; quiz?: boolean; doubt?: boolean };
  className?: string;
};

/** Full 4-tab bar combining all Video/Tab* components */
export function VideoTabBar({ active, onChange, badges, className }: VideoTabBarProps) {
  return (
    <div className={cn("inline-flex gap-2", className)}>
      <VideoTabVideo active={active === "video"} hasBadge={badges?.video} onClick={() => onChange("video")} />
      <VideoTabNotes active={active === "notes"} hasBadge={badges?.notes} onClick={() => onChange("notes")} />
      <VideoTabQuiz  active={active === "quiz"}  hasBadge={badges?.quiz}  onClick={() => onChange("quiz")} />
      <VideoTabDoubt active={active === "doubt"} hasBadge={badges?.doubt} onClick={() => onChange("doubt")} />
    </div>
  );
}
