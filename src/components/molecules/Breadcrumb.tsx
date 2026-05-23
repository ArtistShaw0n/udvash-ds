import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1", className)}>
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, idx) => {
          const last = idx === items.length - 1;
          const content = item.href ? (
            <a
              href={item.href}
              onClick={item.onClick}
              className="text-muted hover:text-ink"
            >
              {item.label}
            </a>
          ) : item.onClick ? (
            <button
              type="button"
              onClick={item.onClick}
              className="text-muted hover:text-ink"
            >
              {item.label}
            </button>
          ) : (
            <span className={cn(last ? "text-ink font-medium" : "text-muted")}>
              {item.label}
            </span>
          );
          return (
            <li key={idx} className="inline-flex items-center gap-1">
              {content}
              {!last && (
                <Icon name="ChevronRight" size="xs" className="text-placeholder" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
