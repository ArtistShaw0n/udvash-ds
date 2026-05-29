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
 * 1:1 from Figma V2 — node 1:9602 ("Live Class" card)
 * band #e4eaf4 · title 16px semibold #616161 · "Live Now" red 12px · Join Now #55347b
 */

export type LiveClassCardProps = {
  type: string;
  title: string;
  live?: boolean;
  dateTime: string;
  chapter?: string;
  courseLines?: string[];
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
};

export function LiveClassCard({
  type,
  title,
  live = true,
  dateTime,
  chapter,
  courseLines = [],
  ctaLabel = "Join Now",
  onCta,
  className,
}: LiveClassCardProps) {
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
        {chapter && <FieldValue>{chapter}</FieldValue>}
        {courseLines.length > 0 && (
          <div>
            <FieldLabel>Course</FieldLabel>
            {courseLines.map((line, i) => (
              <FieldValue key={i}>{line}</FieldValue>
            ))}
          </div>
        )}
        <div className="mt-[8px] flex justify-center pb-[8px]">
          <CardButton onClick={onCta} className="px-[34px]">
            {ctaLabel}
          </CardButton>
        </div>
      </div>
    </article>
  );
}
