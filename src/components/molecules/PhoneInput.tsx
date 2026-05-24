"use client";

import { forwardRef, useState } from "react";
import { Icon } from "../atoms/Icon";
import { Input, type InputProps } from "../atoms/Input";
import { cn } from "@/lib/cn";

export type CountryCode = { code: string; label: string; flag?: string };

export type PhoneInputProps = Omit<InputProps, "type" | "iconLeft"> & {
  /** Available country codes for the dropdown. */
  countries?: CountryCode[];
  /** Initial selected code. */
  defaultCountry?: string;
  /** Controlled selected code. */
  country?: string;
  onCountryChange?: (code: string) => void;
};

const DEFAULT_COUNTRIES: CountryCode[] = [
  { code: "+880", label: "Bangladesh", flag: "🇧🇩" },
  { code: "+91", label: "India", flag: "🇮🇳" },
  { code: "+1", label: "USA", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
];

/**
 * PhoneInput — Figma Input/Phone-CountryCode. Country prefix selector
 * fused to the left edge of the Input. Defaults to Bangladesh (+880).
 */
export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  function PhoneInput(
    {
      countries = DEFAULT_COUNTRIES,
      defaultCountry = "+880",
      country: controlled,
      onCountryChange,
      className,
      size = "auto",
      ...rest
    },
    ref,
  ) {
    const [uncontrolled, setUncontrolled] = useState(defaultCountry);
    const code = controlled ?? uncontrolled;
    const current = countries.find((c) => c.code === code) ?? countries[0];

    function setCode(next: string) {
      if (controlled === undefined) setUncontrolled(next);
      onCountryChange?.(next);
    }

    return (
      <div className={cn("inline-flex w-full items-stretch", className)}>
        <div className="relative inline-flex shrink-0">
          <select
            value={code}
            onChange={(e) => setCode(e.target.value)}
            aria-label="Country code"
            className={cn(
              "appearance-none rounded-l-sm border border-r-0 border-line bg-surface-subtle pr-7 pl-3 text-sm font-medium text-ink",
              "focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
              size === "lg" ? "h-12" : size === "md" ? "h-10" : "h-9",
            )}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag ? `${c.flag} ` : ""}
                {c.code}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-muted">
            <Icon name="ChevronDown" size="xs" />
          </span>
        </div>
        <Input
          ref={ref}
          type="tel"
          size={size}
          inputMode="tel"
          placeholder={current.code === "+880" ? "1XXXXXXXXX" : "Phone number"}
          className="rounded-l-none"
          {...rest}
        />
      </div>
    );
  },
);
