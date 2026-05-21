"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Tab = { id: string; label: string; content?: ReactNode };

type TabsProps = {
  tabs: Tab[];
  defaultActive?: string;
  onChange?: (id: string) => void;
  variant?: "segment" | "underline";
  className?: string;
};

export function Tabs({
  tabs,
  defaultActive,
  onChange,
  variant = "segment",
  className,
}: TabsProps) {
  const [active, setActive] = useState(defaultActive || tabs[0]?.id);
  const activeTab = tabs.find((t) => t.id === active);

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  if (variant === "segment") {
    return (
      <div className={className}>
        <div
          role="tablist"
          className="inline-flex p-1 rounded-md bg-surface-subtle border border-line-subtle"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleClick(tab.id)}
                className={cn(
                  "px-4 py-1.5 text-md rounded-sm transition-colors",
                  isActive
                    ? "bg-surface text-ink shadow-sm font-medium"
                    : "text-muted hover:text-ink"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {activeTab?.content && <div className="mt-4">{activeTab.content}</div>}
      </div>
    );
  }

  // underline variant
  return (
    <div className={className}>
      <div role="tablist" className="flex border-b border-line-subtle">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleClick(tab.id)}
              className={cn(
                "px-4 py-2 text-md font-medium border-b-2 -mb-px transition-colors",
                isActive
                  ? "border-line-brand text-ink"
                  : "border-transparent text-muted hover:text-ink hover:border-line"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {activeTab?.content && <div className="mt-4">{activeTab.content}</div>}
    </div>
  );
}
