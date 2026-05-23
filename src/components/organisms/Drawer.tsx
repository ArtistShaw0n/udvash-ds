"use client";

import { useEffect } from "react";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type DrawerSide = "left" | "right";
export type DrawerSize = "sm" | "md" | "lg";

export type DrawerProps = {
  open: boolean;
  onClose: () => void;
  side?: DrawerSide;
  size?: DrawerSize;
  title?: React.ReactNode;
  showClose?: boolean;
  className?: string;
  children: React.ReactNode;
};

const sideClass: Record<DrawerSide, string> = {
  left: "left-0 top-0 h-full",
  right: "right-0 top-0 h-full",
};

const sizeClass: Record<DrawerSize, string> = {
  sm: "w-72",
  md: "w-80",
  lg: "w-96",
};

export function Drawer({
  open,
  onClose,
  side = "right",
  size = "md",
  title,
  showClose = true,
  className,
  children,
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-scrim"
      />
      <div
        className={cn(
          "absolute bg-surface p-5 shadow-lg",
          sideClass[side],
          sizeClass[size],
          className,
        )}
      >
        {(title || showClose) && (
          <div className="mb-4 flex items-start justify-between gap-3">
            {title && (
              <Text as="h2" size="lg" weight="semibold">
                {title}
              </Text>
            )}
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className="ml-auto rounded-full text-muted hover:text-ink"
              >
                <Icon name="X" size="md" />
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
