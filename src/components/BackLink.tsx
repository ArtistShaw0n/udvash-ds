import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type BackLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string;
};

export function BackLink({ label = "Return to Chapter", className, ...rest }: BackLinkProps) {
  return (
    <a
      className={cn("inline-flex items-center gap-1.5 text-sm text-link hover:underline", className)}
      {...rest}
    >
      <Icon name="return-arrow" size={14} />
      <span>{label}</span>
    </a>
  );
}
