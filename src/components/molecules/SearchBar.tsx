"use client";

import { forwardRef } from "react";
import { Input, type InputSize } from "../atoms/Input";
import { Icon } from "../atoms/Icon";

export type SearchBarProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  size?: InputSize;
  onClear?: () => void;
};

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(function SearchBar(
  { size = "md", onClear, value, defaultValue, placeholder = "Search", ...rest },
  ref,
) {
  const hasValue = (value ?? defaultValue ?? "").toString().length > 0;
  const iconSize = size === "sm" ? "xs" : "sm";

  return (
    <Input
      ref={ref}
      type="search"
      size={size}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      iconLeft={<Icon name="Search" size={iconSize} />}
      iconRight={
        hasValue && onClear ? (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search"
            className="pointer-events-auto text-muted hover:text-ink"
          >
            <Icon name="X" size={iconSize} />
          </button>
        ) : undefined
      }
      {...rest}
    />
  );
});
