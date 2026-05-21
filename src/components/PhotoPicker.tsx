"use client";

import { useEffect } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type PhotoPickerProps = {
  open: boolean;
  onClose: () => void;
  onTakePhoto?: () => void;
  onUploadFromGallery?: () => void;
  takePhotoLabel?: string;
  galleryLabel?: string;
  title?: string;
  className?: string;
};

export function PhotoPicker({
  open,
  onClose,
  onTakePhoto,
  onUploadFromGallery,
  takePhotoLabel = "Take Photo",
  galleryLabel = "Upload from Gallery",
  title = "Choose photo source",
  className,
}: PhotoPickerProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-scrim/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={cn("w-[254px] bg-surface rounded-lg shadow-md p-4 space-y-3", className)}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm text-muted text-center">{title}</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onTakePhoto}
            className="flex-1 flex flex-col items-center justify-center gap-2 size-[101px] rounded-lg bg-surface-subtle hover:bg-disabled transition-colors"
          >
            <Icon name="eye-on" size={32} className="text-muted" />
            <span className="text-xs text-ink text-center">{takePhotoLabel}</span>
          </button>
          <button
            type="button"
            onClick={onUploadFromGallery}
            className="flex-1 flex flex-col items-center justify-center gap-2 size-[101px] rounded-lg bg-surface-subtle hover:bg-disabled transition-colors"
          >
            <Icon name="download" size={32} className="text-muted" />
            <span className="text-xs text-ink text-center">{galleryLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
