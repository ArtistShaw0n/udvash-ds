"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {
  onClear?: () => void;
};

export function SearchBar({ value, onChange, onClear, placeholder = "Search…", className, ...rest }: SearchBarProps) {
  const hasValue = typeof value === "string" ? value.length > 0 : false;
  return (
    <div
      className={cn(
        "flex items-center w-full md:max-w-[480px] h-[42px] px-3 gap-2 rounded-sm border border-line bg-surface focus-within:border-line-brand focus-within:ring-2 focus-within:ring-line-brand/20 transition-colors",
        className
      )}
    >
      <SearchIcon className="size-4 text-muted shrink-0" />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-md text-ink outline-none placeholder:text-placeholder"
        {...rest}
      />
      {hasValue && onClear && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search"
          className="text-muted hover:text-ink transition-colors"
        >
          <CloseIcon className="size-4" />
        </button>
      )}
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
