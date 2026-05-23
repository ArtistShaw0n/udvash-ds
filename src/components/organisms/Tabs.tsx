"use client";

import { cn } from "@/lib/cn";

export type TabItem = {
  id: string;
  label: React.ReactNode;
};

export type TabsProps = {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  fullWidth?: boolean;
  className?: string;
};

export function Tabs({ items, activeId, onChange, fullWidth = false, className }: TabsProps) {
  return (
    <div
      role="tablist"
      className={cn("flex border-b border-line-subtle", className)}
    >
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors",
              fullWidth && "flex-1",
              active
                ? "text-brand"
                : "text-muted hover:text-ink",
            )}
          >
            {item.label}
            {active && (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 bg-brand"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
