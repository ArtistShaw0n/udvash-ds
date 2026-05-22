"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "./Badge";
import { SegmentedControl } from "./SegmentedControl";

type PastClassTab = "video" | "notes" | "quiz";

type PastClassCardProps = {
  title: string;
  chapter?: string;
  thumb?: ReactNode;
  completed?: boolean;
  defaultTab?: PastClassTab;
  videoContent?: ReactNode;
  notesContent?: ReactNode;
  quizContent?: ReactNode;
  bangla?: boolean;
  className?: string;
};

export function PastClassCard({
  title,
  chapter,
  thumb,
  completed = false,
  defaultTab = "video",
  videoContent,
  notesContent,
  quizContent,
  bangla,
  className,
}: PastClassCardProps) {
  const [tab, setTab] = useState<PastClassTab>(defaultTab);
  return (
    <article
      className={cn(
        "w-[336px] md:w-[432px] lg:w-[528px] rounded-md bg-surface shadow-sm border border-line p-4 space-y-3",
        className
      )}
    >
      <div className="aspect-video w-full rounded-sm bg-surface-subtle overflow-hidden">
        {thumb}
      </div>
      <header className="flex items-start justify-between gap-2">
        <div>
          <h3 className={cn("text-lg md:text-xl font-semibold text-ink", bangla && "font-bangla")}>{title}</h3>
          {chapter && <p className={cn("text-sm text-muted mt-0.5", bangla && "font-bangla")}>{chapter}</p>}
        </div>
        <div className="flex flex-col items-end gap-1">
          <Badge variant="neutral">Past Class</Badge>
          {completed && <Badge variant="success">Done</Badge>}
        </div>
      </header>
      <SegmentedControl
        size="sm"
        value={tab}
        onChange={(v) => setTab(v as PastClassTab)}
        segments={[
          { value: "video", label: "Video" },
          { value: "notes", label: "Notes" },
          { value: "quiz", label: "Quiz" },
        ]}
      />
      <div className="text-md text-muted">
        {tab === "video" && videoContent}
        {tab === "notes" && notesContent}
        {tab === "quiz" && quizContent}
      </div>
    </article>
  );
}
