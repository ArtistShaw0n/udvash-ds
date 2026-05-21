"use client";

import { useRef, type ChangeEvent } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type ImageUploadProps = {
  label?: string;
  imageSrc?: string;
  loading?: boolean;
  error?: boolean;
  disabled?: boolean;
  onSelect?: (file: File) => void;
  onRemove?: () => void;
  className?: string;
};

export function ImageUpload({
  label = "Upload Image",
  imageSrc,
  loading = false,
  error = false,
  disabled = false,
  onSelect,
  onRemove,
  className,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onSelect) onSelect(file);
  };

  return (
    <div className={cn("relative size-[130px]", className)}>
      {imageSrc ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} alt={label} className="size-full object-cover rounded-sm" />
          {onRemove && !disabled && (
            <button
              type="button"
              onClick={onRemove}
              aria-label="Remove image"
              className="absolute -top-2 -right-2 size-6 rounded-full bg-error text-onbrand inline-flex items-center justify-center shadow-sm"
            >
              <Icon name="cross" size={14} />
            </button>
          )}
        </>
      ) : (
        <button
          type="button"
          disabled={disabled || loading}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "size-full rounded-sm border-2 border-dashed bg-surface-subtle flex flex-col items-center justify-center gap-2 transition-colors",
            error ? "border-error" : "border-line",
            !disabled && "hover:border-line-brand cursor-pointer",
            disabled && "opacity-60 cursor-not-allowed"
          )}
        >
          {loading ? (
            <div className="size-6 rounded-full border-2 border-line border-t-brand animate-spin" />
          ) : (
            <Icon name="cross" size={24} className="text-muted rotate-45" />
          )}
          <span className="text-xs text-muted">{label}</span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        disabled={disabled || loading}
        className="sr-only"
      />
    </div>
  );
}
