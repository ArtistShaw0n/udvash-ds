import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Crumb = { label: ReactNode; href?: string };
type BreadcrumbProps = {
  items: Crumb[];
  separator?: ReactNode;
  className?: string;
};

export function Breadcrumb({ items, separator = "/", className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-2 text-md text-muted flex-wrap", className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="inline-flex items-center gap-2">
            {item.href && !isLast ? (
              <a href={item.href} className="hover:text-link transition-colors">{item.label}</a>
            ) : (
              <span className={cn(isLast ? "text-ink font-medium" : "")}>{item.label}</span>
            )}
            {!isLast && <span className="text-muted/60 select-none">{separator}</span>}
          </span>
        );
      })}
    </nav>
  );
}
