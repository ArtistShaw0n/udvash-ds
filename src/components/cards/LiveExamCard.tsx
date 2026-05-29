"use client";

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
    <article
      className={cn(
        "w-[328px] overflow-hidden rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="bg-[#e4eaf4] px-[20px] pb-[10px] pt-[12px]">
        <div className="mb-[8px] flex items-center justify-between">
          <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{type}</span>
          {live && (
            <span className="inline-flex items-center gap-[4px] rounded-[10px] px-[10px] py-[4px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/components/icons/live-dot.svg" alt="" aria-hidden="true" className="size-[12px]" />
              <span className="font-['Inter',sans-serif] text-[12px] font-medium text-[#ff0000]">Live Now</span>
            </span>
          )}
        </div>
        <p className="font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161]">{title}</p>
      </div>

      <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
        <div>
          <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">Date &amp; Time</p>
          <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{dateTime}</p>
        </div>
        <div>
          <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">Duration</p>
          <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{duration}</p>
        </div>
        {courseLines.length > 0 && (
          <div>
            <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">Course</p>
            {courseLines.map((line, i) => (
              <p key={i} className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{line}</p>
            ))}
          </div>
        )}
        {statusNote && (
          <p className="mt-[4px] text-center font-['Inter',sans-serif] text-[14px] font-medium text-[#f95959]">
            {statusNote}
          </p>
        )}
        <div className="mt-[8px] flex justify-center pb-[8px]">
          <button
            type="button"
            onClick={onCta}
            className="flex h-[36px] w-[130px] items-center justify-center whitespace-nowrap rounded-[5px] bg-[#55347b] px-[20px] font-['Inter',sans-serif] text-[14px] leading-[12px] text-white"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
