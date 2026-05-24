"use client";

import { useState } from "react";
import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type AccordionItemData = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItemData[];
  /** Allow multiple panels open at the same time. */
  multiple?: boolean;
  defaultOpen?: string[];
  className?: string;
};

/*
 * Accordion — collapsible disclosure list. Single or multi-open mode.
 * Uses our border tokens for the row dividers and chevron rotation for
 * the open-state indicator.
 */
export function Accordion({
  items,
  multiple = false,
  defaultOpen = [],
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpen);

  function toggle(id: string) {
    setOpenIds((curr) => {
      const isOpen = curr.includes(id);
      if (multiple) {
        return isOpen ? curr.filter((x) => x !== id) : [...curr, id];
      }
      return isOpen ? [] : [id];
    });
  }

  return (
    <div className={cn("divide-y divide-border rounded-md border border-border", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;
        return (
          <div key={item.id}>
            <button
              id={buttonId}
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-base font-medium text-primary transition-colors hover:bg-subtle focus:outline-none focus-visible:bg-subtle"
            >
              <span>{item.title}</span>
              <Icon
                name="ChevronDown"
                size="sm"
                className={cn("text-muted transition-transform", isOpen && "rotate-180")}
              />
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-3 pb-3 text-sm text-muted"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
