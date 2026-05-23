"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type FooterTab = {
  id: string;
  label: string;
  icon: IconName;
};

export type FooterMenuProps = {
  tabs: FooterTab[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
};

export function FooterMenu({ tabs, activeId, onChange, className }: FooterMenuProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        "flex h-[66px] w-full items-stretch justify-around bg-surface shadow-sm-inverse",
        "rounded-t-lg",
        className,
      )}
    >
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            aria-current={active ? "page" : undefined}
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2"
          >
            <span
              className={cn(
                "flex size-9 items-center justify-center rounded-sm transition-colors",
                active ? "bg-brand text-onbrand" : "text-muted",
              )}
            >
              <Icon name={tab.icon} size="md" />
            </span>
            <span
              className={cn(
                "text-xs",
                active ? "font-medium text-ink" : "text-muted",
              )}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
