"use client";

import { cardShellClass, CardBand, CardType, CardTitle, FieldValue, CardButton } from "./parts";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:8518 ("Master Class" card)
 * Same shell, no status chip. Title is a lecture name (Bangla). Body is a
 * list of topic lines (14px semibold). Three buttons: Videos + Notes (row),
 * Quiz (below).
 */

export type MasterClassCardProps = {
  type: string;
  title: string;
  topics?: string[];
  videosLabel?: string;
  notesLabel?: string;
  quizLabel?: string;
  onVideos?: () => void;
  onNotes?: () => void;
  onQuiz?: () => void;
  className?: string;
};

export function MasterClassCard({
  type,
  title,
  topics = [],
  videosLabel = "Videos",
  notesLabel = "Notes",
  quizLabel = "Quiz",
  onVideos,
  onNotes,
  onQuiz,
  className,
}: MasterClassCardProps) {
  return (
    <article className={cn(cardShellClass, className)}>
      <CardBand>
        <CardType>{type}</CardType>
        <div className="mt-[8px]">
          <CardTitle>{title}</CardTitle>
        </div>
      </CardBand>

      <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
        {topics.map((t, i) => (
          <FieldValue key={i}>{t}</FieldValue>
        ))}
        <div className="mt-[8px] flex flex-col items-center gap-[8px] pb-[8px]">
          <div className="flex gap-[16px]">
            <CardButton onClick={onVideos} className="w-[130px] px-[34px]">{videosLabel}</CardButton>
            <CardButton onClick={onNotes} className="w-[130px] px-[34px]">{notesLabel}</CardButton>
          </div>
          <CardButton onClick={onQuiz} className="w-[130px] px-[34px]">{quizLabel}</CardButton>
        </div>
      </div>
    </article>
  );
}
