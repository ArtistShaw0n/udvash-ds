"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { cn } from "@/lib/cn";

export type SolveSheetCardProps = {
  subject: string;
  title: string;
  totalQuestions: number;
  pages?: number;
  uploadedAt: string;
  fileSizeKB?: number;
  onView?: () => void;
  onDownload?: () => void;
  className?: string;
};

/*
 * Figma source: V2 SolveSheet card (parent 1:7463, instance 1:7466).
 * 328×281 — PDF answer sheet card with FileText icon, title, meta, CTAs.
 */
export function SolveSheetCard({
  subject,
  title,
  totalQuestions,
  pages,
  uploadedAt,
  fileSizeKB,
  onView,
  onDownload,
  className,
}: SolveSheetCardProps) {
  const sizeLabel =
    fileSizeKB != null
      ? fileSizeKB >= 1024
        ? `${(fileSizeKB / 1024).toFixed(1)} MB`
        : `${fileSizeKB} KB`
      : null;

  return (
    <article
      className={cn(
        "flex w-full max-w-[328px] gap-3 rounded-lg bg-surface p-3 shadow-card",
        className,
      )}
    >
      <span className="inline-flex size-12 shrink-0 items-center justify-center self-start rounded-md bg-danger-bg text-danger">
        <Icon name="FileText" size="md" />
      </span>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <Tag variant="neutral" size="sm">{subject}</Tag>
          <Tag variant="info" size="sm">Solve sheet</Tag>
        </div>
        <h3 className="mb-1 line-clamp-2 text-base font-semibold leading-snug text-primary">{title}</h3>
        <p className="mb-3 text-sm text-muted">
          {totalQuestions} questions
          {pages != null && ` · ${pages} pages`}
          {sizeLabel && ` · ${sizeLabel}`}
          {` · ${uploadedAt}`}
        </p>

        <div className="flex gap-2">
          <Button size="sm" iconLeft={<Icon name="Eye" size="xs" />} onClick={onView}>View</Button>
          <Button variant="ghost" size="sm" iconLeft={<Icon name="Download" size="xs" />} onClick={onDownload}>
            PDF
          </Button>
        </div>
      </div>
    </article>
  );
}
