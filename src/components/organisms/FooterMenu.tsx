"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:4435 ("footer-menu")
 * Raw values, no semantic tokens:
 *   bar:        bg #ffffff · h-[66px] · w-[376px]
 *               rounded-bl-[10px] rounded-br-[10px]
 *               shadow 0px -1px 4px 0px rgba(0,0,0,0.06)
 *   active tab: icon box bg #684b8a · rounded-[5px] · size 36px · white icon
 *   label:      Inter 12px #616161 (active = font-medium)
 */

export type FooterTab = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export type FooterMenuProps = {
  tabs: FooterTab[];
  activeId: string;
  onChange?: (id: string) => void;
  className?: string;
};

export function FooterMenu({ tabs, activeId, onChange, className }: FooterMenuProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        "flex h-[66px] w-[376px] items-center justify-around rounded-bl-[10px] rounded-br-[10px] bg-white shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange?.(tab.id)}
            aria-current={active ? "page" : undefined}
            className="flex flex-col items-center gap-[4px]"
          >
            <span
              className={cn(
                "flex size-[36px] items-center justify-center rounded-[5px]",
                active ? "bg-[#684b8a] text-white" : "text-[#616161]",
              )}
            >
              {tab.icon}
            </span>
            <span
              className={cn(
                "font-['Inter',sans-serif] text-[12px] text-[#616161]",
                active && "font-medium",
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
