import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  /** Custom separator icon name (defaults to ChevronRight). */
  separator?: React.ReactNode;
};

/*
 * Breadcrumb — trailing navigation crumbs. Last item is treated as the
 * current page and rendered as plain text; previous items render as
 * anchors when an `href` is provided.
 */
export function Breadcrumb({ items, className, separator }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-1">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="text-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={cn(isLast ? "font-medium text-primary" : "text-muted")}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-muted">
                  {separator ?? <Icon name="ChevronRight" size="xs" />}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
