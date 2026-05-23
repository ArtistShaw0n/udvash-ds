"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type AlertVariant = "info" | "success" | "warning" | "error" | "neutral";

export type AlertProps = {
  variant?: AlertVariant;
  title?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const variantClass: Record<AlertVariant, string> = {
  info: "bg-info-subtle text-info border-info/30",
  success: "bg-success-subtle text-success border-success/30",
  warning: "bg-warning-subtle text-warning border-warning/30",
  error: "bg-error-subtle text-error border-error/30",
  neutral: "bg-surface-subtle text-ink border-line-subtle",
};

const variantIcon: Record<AlertVariant, IconName> = {
  info: "Info",
  success: "CircleCheck",
  warning: "TriangleAlert",
  error: "CircleX",
  neutral: "MessageCircle",
};

export function Alert({ variant = "info", title, onClose, className, children }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-md border p-3",
        variantClass[variant],
        className,
      )}
    >
      <Icon name={variantIcon[variant]} size="md" className="mt-0.5 shrink-0" />
      <div className="flex-1">
        {title && (
          <Text as="div" size="md" weight="medium" color="inherit" className="mb-0.5">
            {title}
          </Text>
        )}
        {children && (
          <Text as="div" size="sm" color="inherit">
            {children}
          </Text>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss"
          className="shrink-0 rounded-full opacity-70 transition-opacity hover:opacity-100"
        >
          <Icon name="X" size="sm" />
        </button>
      )}
    </div>
  );
}
