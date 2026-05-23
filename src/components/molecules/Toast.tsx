"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type ToastVariant = "info" | "success" | "warning" | "error";

export type ToastProps = {
  variant?: ToastVariant;
  title?: React.ReactNode;
  action?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const variantIconColor: Record<ToastVariant, { icon: IconName; color: string }> = {
  info: { icon: "Info", color: "text-info" },
  success: { icon: "CircleCheck", color: "text-success" },
  warning: { icon: "TriangleAlert", color: "text-warning" },
  error: { icon: "CircleX", color: "text-error" },
};

export function Toast({
  variant = "info",
  title,
  action,
  onClose,
  className,
  children,
}: ToastProps) {
  const { icon, color } = variantIconColor[variant];
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-start gap-3 rounded-md bg-surface p-3 shadow-md",
        "border border-line-subtle",
        "min-w-[280px] max-w-md",
        className,
      )}
    >
      <Icon name={icon} size="md" className={cn("mt-0.5 shrink-0", color)} />
      <div className="flex-1">
        {title && (
          <Text as="div" size="md" weight="medium" className="mb-0.5">
            {title}
          </Text>
        )}
        {children && (
          <Text as="div" size="sm" color="muted">
            {children}
          </Text>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="shrink-0 rounded-full text-muted opacity-70 transition-opacity hover:opacity-100"
        >
          <Icon name="X" size="sm" />
        </button>
      )}
    </div>
  );
}
