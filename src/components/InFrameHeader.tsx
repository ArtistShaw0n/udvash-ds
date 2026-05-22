"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Avatar } from "./Avatar";

type BaseProps = {
  className?: string;
};

const headerBase = "flex items-center justify-between w-full h-[50px] md:h-[60px] lg:h-[64px] px-3";

/** Pattern/InFrame-Header-Light — main app header, light mode: logo + bell+badge + avatar */
export function InFrameHeaderLight({
  notificationCount,
  onBellClick,
  onAvatarClick,
  avatarInitials = "U",
  className,
}: BaseProps & {
  notificationCount?: number;
  onBellClick?: () => void;
  onAvatarClick?: () => void;
  avatarInitials?: string;
}) {
  return (
    <header className={cn(headerBase, "bg-surface shadow-sm", className)}>
      <Logo size="sm" />
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onBellClick}
          aria-label="Notifications"
          className="relative inline-flex items-center justify-center size-7 rounded-full bg-brand-subtle text-brand"
        >
          <Icon name="bell" size={14} />
          {notificationCount !== undefined && notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex min-w-4 h-4 items-center justify-center rounded-full bg-error text-onbrand text-[10px] font-medium px-1">
              {notificationCount}
            </span>
          )}
        </button>
        <button type="button" onClick={onAvatarClick} aria-label="Profile" className="inline-flex">
          <Avatar size="sm" initials={avatarInitials} />
        </button>
      </div>
    </header>
  );
}

/** Pattern/InFrame-Header-Dark — dark-mode mirror (token-driven, falls back to same Logo) */
export function InFrameHeaderDark(props: Parameters<typeof InFrameHeaderLight>[0]) {
  return <InFrameHeaderLight {...props} className={cn("dark:bg-surface", props.className)} />;
}

/** Pattern/InFrame-Header-Auth — auth screens: logo + theme toggle only */
export function InFrameHeaderAuth({
  isDark,
  onToggleTheme,
  className,
}: BaseProps & { isDark?: boolean; onToggleTheme?: () => void }) {
  return (
    <header className={cn(headerBase, "bg-surface", className)}>
      <Logo size="sm" />
      <button
        type="button"
        onClick={onToggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className="inline-flex items-center justify-center size-7 rounded-full bg-brand-subtle text-brand"
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        )}
      </button>
    </header>
  );
}

/** Pattern/InFrame-Header-Reg — registration screens: logo + back arrow + title */
export function InFrameHeaderReg({
  title,
  onBack,
  className,
}: BaseProps & { title?: string; onBack?: () => void }) {
  return (
    <header className={cn(headerBase, "bg-surface")}>
      <button
        type="button"
        onClick={onBack}
        aria-label="Back"
        className="inline-flex items-center justify-center size-7 text-ink"
      >
        <Icon name="return-arrow" size={16} />
      </button>
      {title && <h1 className="text-md font-semibold text-ink flex-1 text-center">{title}</h1>}
      <span className="size-7" />
    </header>
  );
}

/** Pattern/InFrame-Header-Alt — alternate header with title + close button (used in modals/screens) */
export function InFrameHeaderAlt({
  title,
  onClose,
  trailing,
  className,
}: BaseProps & { title: string; onClose?: () => void; trailing?: ReactNode }) {
  return (
    <header className={cn(headerBase, "bg-surface border-b border-line-subtle", className)}>
      <h1 className="text-md font-semibold text-ink truncate flex-1">{title}</h1>
      {trailing}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="inline-flex items-center justify-center size-7 text-muted ml-2"
        >
          <Icon name="cross" size={18} />
        </button>
      )}
    </header>
  );
}
