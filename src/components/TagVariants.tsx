"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CountryCodeProps = {
  code: string;
  countryName?: string;
  onClick?: () => void;
  className?: string;
};

/** Tag/CountryCode — 200×24 row showing country code and name (used in phone-input dropdown) */
export function TagCountryCode({ code, countryName, onClick, className }: CountryCodeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center w-[200px] h-[24px] px-2 gap-2 rounded-sm bg-surface-subtle hover:bg-disabled text-sm",
        className
      )}
    >
      <span className="font-bold text-ink shrink-0">{code}</span>
      {countryName && <span className="text-muted truncate">{countryName}</span>}
    </button>
  );
}

type LanguageContainerProps = {
  languages: Array<{ code: string; selected?: boolean }>;
  onSelect?: (code: string) => void;
  className?: string;
};

/** Tag/LanguageContainer — 121×26 segmented language pill (EN / BN) */
export function TagLanguageContainer({ languages, onSelect, className }: LanguageContainerProps) {
  return (
    <div
      className={cn(
        "inline-flex items-stretch w-[121px] h-[26px] rounded-sm bg-surface-subtle border border-line-subtle overflow-hidden",
        className
      )}
    >
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => onSelect?.(l.code)}
          className={cn(
            "flex-1 text-xs font-medium transition-colors",
            l.selected ? "bg-brand text-onbrand" : "text-muted hover:text-ink"
          )}
        >
          {l.code}
        </button>
      ))}
    </div>
  );
}

type TabChipProps = {
  label: string;
  icon?: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

/** Tag/TabChip-Narrow — 103×32 chip with icon + label */
export function TagTabChipNarrow({ label, icon, active, onClick, className }: TabChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 w-[103px] h-[32px] rounded-full text-sm font-medium transition-colors",
        active
          ? "bg-brand text-onbrand"
          : "bg-surface-subtle text-muted hover:text-ink",
        className
      )}
    >
      {icon && <span className="shrink-0 inline-flex items-center">{icon}</span>}
      <span className="truncate">{label}</span>
    </button>
  );
}

/** Tag/TabChip-Wide — 159×32 wider chip variant */
export function TagTabChipWide({ label, icon, active, onClick, className }: TabChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center justify-center gap-2 w-[159px] h-[32px] rounded-full text-sm font-medium transition-colors",
        active
          ? "bg-brand text-onbrand"
          : "bg-surface-subtle text-muted hover:text-ink",
        className
      )}
    >
      {icon && <span className="shrink-0 inline-flex items-center">{icon}</span>}
      <span className="truncate">{label}</span>
    </button>
  );
}
