"use client";

import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

export type BackLinkProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  label?: React.ReactNode;
};

export function BackLink({
  label = "Back",
  className,
  ...rest
}: BackLinkProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium text-ink",
        "rounded-sm hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link",
        className,
      )}
      {...rest}
    >
      <Icon name="ChevronLeft" size="sm" />
      <span>{label}</span>
    </button>
  );
}
