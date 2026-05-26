"use client";

import { Button } from "../atoms/Button";
import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type ServiceBlockedReason = "payment" | "expired" | "blocked" | "no-connection" | "verifying";

export type ServiceBlockedCardProps = {
  reason?: ServiceBlockedReason;
  title?: string;
  message?: string;
  icon?: IconName;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
  className?: string;
};

/*
 * Figma source: V2 ServiceBlocked card (parent 1:4637, instances 1:4639/1:4642).
 * 328×128 (compact) → 328×216 (with action area). Empty/blocked state card.
 */

const presets: Record<
  ServiceBlockedReason,
  { icon: IconName; title: string; message: string; tone: "warning" | "danger" | "info" }
> = {
  payment: {
    icon: "CreditCard",
    title: "Payment required",
    message: "Your subscription has expired. Renew to continue.",
    tone: "warning",
  },
  expired: {
    icon: "CalendarX",
    title: "Course expired",
    message: "This course is no longer available.",
    tone: "danger",
  },
  blocked: {
    icon: "Ban",
    title: "Service unavailable",
    message: "This service is temporarily unavailable. Please contact support.",
    tone: "danger",
  },
  "no-connection": {
    icon: "WifiOff",
    title: "No internet connection",
    message: "Check your network or browse offline content.",
    tone: "info",
  },
  verifying: {
    icon: "Clock",
    title: "Verification pending",
    message: "We're reviewing your details. This usually takes 1–2 days.",
    tone: "warning",
  },
};

const toneClass = {
  warning: { bg: "bg-warning-bg", text: "text-warning" },
  danger:  { bg: "bg-danger-bg",  text: "text-danger" },
  info:    { bg: "bg-success-bg", text: "text-info" },
} as const;

export function ServiceBlockedCard({
  reason = "blocked",
  title,
  message,
  icon,
  primaryAction,
  secondaryAction,
  className,
}: ServiceBlockedCardProps) {
  const preset = presets[reason];
  const cfg = toneClass[preset.tone];
  return (
    <article
      role="alert"
      className={cn(
        "flex w-full max-w-[328px] flex-col items-center gap-3 rounded-lg bg-surface p-6 text-center shadow-card",
        className,
      )}
    >
      <span className={cn("inline-flex size-12 items-center justify-center rounded-full", cfg.bg, cfg.text)}>
        <Icon name={icon ?? preset.icon} size="md" />
      </span>
      <h3 className="text-md font-semibold text-primary">{title ?? preset.title}</h3>
      <p className="text-sm text-muted">{message ?? preset.message}</p>
      {(primaryAction || secondaryAction) && (
        <div className="mt-2 flex w-full flex-col gap-2">
          {primaryAction && (
            <Button
              fullWidth
              iconLeft={
                <Icon
                  name={reason === "no-connection" ? "RefreshCw" : "ArrowRight"}
                  size="xs"
                />
              }
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="ghost" size="sm" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
