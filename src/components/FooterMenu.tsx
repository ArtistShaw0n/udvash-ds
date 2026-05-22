"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type FooterTab = "home" | "downloads" | "qa" | "community";

type FooterMenuProps = {
  active: FooterTab;
  onTabChange?: (tab: FooterTab) => void;
};

const tabs: { id: FooterTab; label: string; icon: ReactNode }[] = [
  { id: "home",       label: "Home",       icon: <HomeIcon /> },
  { id: "downloads",  label: "Downloads",  icon: <DownloadIcon /> },
  { id: "qa",         label: "Q&A",        icon: <ChatIcon /> },
  { id: "community",  label: "Community",  icon: <UsersIcon /> },
];

export function FooterMenu({ active, onTabChange }: FooterMenuProps) {
  return (
    <nav
      className="flex w-full h-[66px] md:h-[72px] lg:h-[80px] bg-surface shadow-[var(--shadow-sm-inverse)] rounded-t-md border-t border-line-subtle"
      aria-label="Bottom navigation"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange?.(tab.id)}
            aria-current={isActive ? "page" : undefined}
            className="flex-1 flex flex-col items-center justify-center gap-1 px-2 py-2 hover:bg-brand-subtle/40 transition-colors"
          >
            <span
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-sm transition-colors",
                isActive ? "bg-brand text-onbrand" : "text-muted"
              )}
            >
              {tab.icon}
            </span>
            <span
              className={cn(
                "text-sm transition-colors",
                isActive ? "text-ink font-medium" : "text-muted font-normal"
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

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
      <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
      <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5M14 20c0-2 2-3.5 4-3.5s4 1.5 4 3.5" strokeLinecap="round" />
    </svg>
  );
}
