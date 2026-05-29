"use client";

import {
  cardShellClass,
  CardBand,
  CardType,
  OutlineChip,
  CardTitle,
  FieldLabel,
  FieldValue,
  CardButton,
} from "./parts";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:7819 ("Past Class" card)
 * Same shell. "Online" outline chip (red border). Two buttons (Video + Notes),
 * button text #e8e8e8.
 */

export type PastClassCardProps = {
  type: string;
  title: string;
  badge?: string;
  chapter?: string;
  dateTime: string;
  courseLines?: string[];
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  className?: string;
};

export function PastClassCard({
  type,
  title,
  badge = "Online",
  chapter,
  dateTime,
  courseLines = [],
  primaryLabel = "Video",
  secondaryLabel = "Notes",
  onPrimary,
  onSecondary,
  className,
}: PastClassCardProps) {
  return (
    <article className={cn(cardShellClass, className)}>
      <CardBand>
        <div className="mb-[8px] flex items-center justify-between">
          <CardType>{type}</CardType>
          {badge && <OutlineChip>{badge}</OutlineChip>}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardBand>

      <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
        {chapter && <FieldValue>{chapter}</FieldValue>}
        <div>
          <FieldLabel>Date &amp; Time</FieldLabel>
          <FieldValue>{dateTime}</FieldValue>
        </div>
        {courseLines.length > 0 && (
          <div>
            <FieldLabel>Course</FieldLabel>
            {courseLines.map((line, i) => (
              <FieldValue key={i}>{line}</FieldValue>
            ))}
          </div>
        )}
        <div className="mt-[8px] flex justify-center gap-[16px] pb-[8px]">
          <CardButton onClick={onPrimary} className="w-[130px] text-[#e8e8e8]">{primaryLabel}</CardButton>
          <CardButton onClick={onSecondary} className="w-[130px] text-[#e8e8e8]">{secondaryLabel}</CardButton>
        </div>
      </div>
    </article>
  );
}
