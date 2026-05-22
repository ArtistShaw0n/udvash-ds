import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Title text shown on the left */
  title?: string;
  /** Optional trailing slot (e.g., a chevron icon) */
  trailing?: ReactNode;
  /** Bangla text? Use Hind Siliguri */
  bangla?: boolean;
};

export function Card({
  title,
  trailing,
  bangla,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "flex items-center w-[336px] rounded-lg bg-surface shadow-md px-3 py-2",
        className
      )}
      {...rest}
    >
      <div className="flex-1 min-w-0">
        {title && (
          <span className={cn("text-md font-medium text-ink truncate block", bangla && "font-bangla")}>
            {title}
          </span>
        )}
        {children}
      </div>
      {trailing && <span className="ml-3 shrink-0 text-muted">{trailing}</span>}
    </div>
  );
}
