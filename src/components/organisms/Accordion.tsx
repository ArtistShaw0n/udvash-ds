"use client";

import { useState } from "react";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type AccordionItemData = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItemData[];
  multiple?: boolean;
  defaultOpen?: string[];
  className?: string;
};

export function Accordion({
  items,
  multiple = false,
  defaultOpen = [],
  className,
}: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(new Set(defaultOpen));

  function toggle(id: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!multiple) next.clear();
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className={cn("divide-y divide-line-subtle rounded-md border border-line-subtle", className)}>
      {items.map((item) => {
        const isOpen = open.has(item.id);
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 p-3 text-left hover:bg-surface-subtle"
            >
              <Text as="span" weight="medium">{item.title}</Text>
              <Icon
                name="ChevronDown"
                size="sm"
                className={cn("text-muted transition-transform", isOpen && "rotate-180")}
              />
            </button>
            {isOpen && (
              <div className="px-3 pb-3">
                {typeof item.content === "string" ? (
                  <Text size="sm" color="muted">{item.content}</Text>
                ) : (
                  item.content
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
