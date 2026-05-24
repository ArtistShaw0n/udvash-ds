"use client";

import { useId, useRef, useState } from "react";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type ImageUploadProps = {
  /** Controlled preview URL (string) or File. */
  value?: string | File | null;
  /** Initial preview for uncontrolled mode. */
  defaultValue?: string;
  /** Max bytes (informational only — caller enforces). */
  maxSizeBytes?: number;
  accept?: string;
  disabled?: boolean;
  label?: string;
  hint?: string;
  onChange?: (file: File | null) => void;
  className?: string;
};

/**
 * ImageUpload — Figma Input/ImageUpload (280×130). Drop / browse area
 * with thumbnail preview, file-size hint, and a remove button when an
 * image is set. Uncontrolled by default; pass `value` for control.
 */
export function ImageUpload({
  value: controlledValue,
  defaultValue,
  maxSizeBytes,
  accept = "image/*",
  disabled = false,
  label = "Upload an image",
  hint,
  onChange,
  className,
}: ImageUploadProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uncontrolled, setUncontrolled] = useState<string | null>(defaultValue ?? null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Resolve the preview URL we should show
  const value = controlledValue === undefined ? uncontrolled : controlledValue;
  const previewSrc =
    typeof value === "string"
      ? value
      : value instanceof File
        ? URL.createObjectURL(value)
        : null;

  function setFile(file: File | null) {
    setError(null);
    if (file && maxSizeBytes && file.size > maxSizeBytes) {
      setError(`File exceeds ${formatBytes(maxSizeBytes)} limit`);
      return;
    }
    if (controlledValue === undefined) {
      setUncontrolled(file ? URL.createObjectURL(file) : null);
    }
    onChange?.(file);
  }

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragging(false);
    if (disabled) return;
    const file = e.dataTransfer.files?.[0];
    if (file) setFile(file);
  }

  return (
    <div className={cn("w-full", className)}>
      <label
        htmlFor={inputId}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "flex min-h-[130px] w-full max-w-[280px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed p-4 text-center transition-colors",
          dragging ? "border-brand bg-brand-subtle" : "border-line bg-surface",
          disabled && "cursor-not-allowed opacity-50",
          error && "border-error",
        )}
      >
        {previewSrc ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewSrc}
              alt="Upload preview"
              className="max-h-[110px] w-auto rounded-sm object-cover"
            />
            <Text size="xs" color="muted">Click or drop to replace</Text>
          </>
        ) : (
          <>
            <Icon name="ImagePlus" size="xl" className="text-muted" />
            <Text size="sm" weight="medium">{label}</Text>
            <Text size="xs" color="muted">
              {hint ?? "PNG, JPG up to "}
              {maxSizeBytes ? formatBytes(maxSizeBytes) : "5 MB"}
            </Text>
          </>
        )}
        <input
          id={inputId}
          ref={inputRef}
          type="file"
          accept={accept}
          disabled={disabled}
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="sr-only"
        />
      </label>
      {error && (
        <Text size="xs" className="mt-1 text-error">{error}</Text>
      )}
      {previewSrc && !disabled && (
        <div className="mt-2 max-w-[280px]">
          <Button
            variant="ghost"
            size="sm"
            iconLeft={<Icon name="Trash2" size="xs" />}
            onClick={() => setFile(null)}
          >
            Remove image
          </Button>
        </div>
      )}
    </div>
  );
}

function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
}
