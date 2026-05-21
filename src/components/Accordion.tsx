"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type AccordionItem = {
  id: string;
  title: ReactNode;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Whether multiple items can be expanded at once. Default single. */
  multiple?: boolean;
  /** Initial open IDs (single = first matching string, multi = array). */
  defaultOpen?: string | string[];
  className?: string;
};

export function Accordion({ items, multiple, defaultOpen, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    Array.isArray(defaultOpen) ? defaultOpen : defaultOpen ? [defaultOpen] : []
  );

  const toggle = (id: string) => {
    if (multiple) {
      setOpenIds((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]));
    } else {
      setOpenIds((ids) => (ids.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-line-subtle border border-line-subtle rounded-md overflow-hidden", className)}>
      {items.map((item) => {
        const open = openIds.includes(item.id);
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-md font-medium text-ink hover:bg-brand-subtle/40 transition-colors"
            >
              <span>{item.title}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-4 shrink-0 text-muted transition-transform", open && "rotate-180")} aria-hidden>
                <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open && (
              <div className="px-4 pb-4 text-md text-muted">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
