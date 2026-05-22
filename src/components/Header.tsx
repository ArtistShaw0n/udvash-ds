"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type HeaderProps = {
  title?: string;
  notificationCount?: number;
  onProfileClick?: () => void;
  onNotificationClick?: () => void;
};

export function Header({
  title = "উদ্ভাস-উন্মেষ",
  notificationCount,
  onProfileClick,
  onNotificationClick,
}: HeaderProps) {
  return (
    <header className={cn(
      "flex items-center justify-between h-[50px] w-full px-3 bg-surface shadow-sm"
    )}>
      {/* Logo + brand text */}
      <div className="flex items-center gap-2">
        <Logo />
        <span className="font-bangla text-lg font-medium text-[color:var(--color-brand-logo-red)]" aria-label={title}>
          {title}
        </span>
      </div>

      {/* Right actions: notification + profile */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onNotificationClick}
          aria-label="Notifications"
          className="relative flex size-7 items-center justify-center rounded-full bg-brand-subtle text-brand hover:opacity-80 transition-opacity"
        >
          <BellIcon className="size-4" />
          {notificationCount !== undefined && notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex min-w-4 h-4 items-center justify-center rounded-full bg-error text-onbrand text-[10px] font-medium px-1">
              {notificationCount}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={onProfileClick}
          aria-label="Profile"
          className="flex size-7 items-center justify-center rounded-full bg-brand-subtle text-brand hover:opacity-80 transition-opacity"
        >
          <ProfileIcon className="size-4" />
        </button>
      </div>
    </header>
  );
}

function Logo() {
  // Simplified flame logo using brand-logo color tokens
  return (
    <div className="flex gap-0.5">
      <FlameMark color="var(--color-brand-logo-red-dark)" letter="U" />
      <FlameMark color="var(--color-brand-logo-yellow)" />
    </div>
  );
}

function FlameMark({ color, letter }: { color: string; letter?: string }) {
  return (
    <span className="relative inline-block w-6 h-7 border border-[color:var(--color-brand-logo-black)] rounded-sm bg-surface">
      <svg viewBox="0 0 24 28" className="absolute inset-1 size-[calc(100%-8px)]" aria-hidden>
        <path
          d="M12 2 C 14 8, 8 10, 12 16 C 16 12, 18 18, 14 24 C 10 22, 6 18, 12 2 Z"
          fill={color}
        />
      </svg>
      {letter && (
        <span
          className="absolute inset-0 flex items-center justify-center text-[10px] font-bold"
          style={{ color: "var(--color-brand-logo-black)" }}
        >
          {letter}
        </span>
      )}
    </span>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" strokeLinecap="round" />
    </svg>
  );
}

/** Helper hook for manual dark mode toggle */
export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next);
    }
  };

  return { isDark, toggle };
}
