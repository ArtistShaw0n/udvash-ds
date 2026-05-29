"use client";

import {
  cardShellClass,
  CardBand,
  CardType,
  LiveChip,
  CardTitle,
  FieldLabel,
  FieldValue,
  CardButton,
} from "./parts";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:8574 ("Live Exam" card)
 * Same shell as LiveClass. Adds Duration row + red status note (#f95959 14px medium).
 */

export type LiveExamCardProps = {
  type?: string;
  title: string;
  live?: boolean;
  dateTime: string;
  duration: string;
  courseLines?: string[];
  statusNote?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
};

export function LiveExamCard({
  type = "Live Exam",
  title,
  live = true,
  dateTime,
  duration,
  courseLines = [],
  statusNote,
  ctaLabel = "Take Exam",
  onCta,
  className,
}: LiveExamCardProps) {
  return (
    <article className={cn(cardShellClass, className)}>
      <CardBand>
        <div className="mb-[8px] flex items-center justify-between">
          <CardType>{type}</CardType>
          {live && <LiveChip />}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardBand>

      <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
        <div>
          <FieldLabel>Date &amp; Time</FieldLabel>
          <FieldValue>{dateTime}</FieldValue>
        </div>
        <div>
          <FieldLabel>Duration</FieldLabel>
          <FieldValue>{duration}</FieldValue>
        </div>
        {courseLines.length > 0 && (
          <div>
            <FieldLabel>Course</FieldLabel>
            {courseLines.map((line, i) => (
              <FieldValue key={i}>{line}</FieldValue>
            ))}
          </div>
        )}
        {statusNote && (
          <p className="mt-[4px] text-center font-['Inter',sans-serif] text-[14px] font-medium text-[#f95959]">
            {statusNote}
          </p>
        )}
        <div className="mt-[8px] flex justify-center pb-[8px]">
          <CardButton onClick={onCta} className="w-[130px]">{ctaLabel}</CardButton>
        </div>
      </div>
    </article>
  );
}
