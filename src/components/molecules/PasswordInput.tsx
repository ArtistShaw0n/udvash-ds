"use client";

import { forwardRef, useState } from "react";
import { Icon } from "../atoms/Icon";
import { Input, type InputProps } from "../atoms/Input";
import { cn } from "@/lib/cn";

export type PasswordInputProps = Omit<InputProps, "type" | "iconRight"> & {
  /** Initial visibility. Defaults to false (masked). */
  defaultVisible?: boolean;
  /** Controlled visibility — if provided, overrides internal state. */
  visible?: boolean;
  onVisibleChange?: (next: boolean) => void;
};

/**
 * PasswordInput — Figma Input/Password-EyeOff + EyeOn. Wraps the base
 * Input with a clickable eye toggle. Uses a positioned <button> overlay
 * because Input's iconRight slot is pointer-events-none.
 */
export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    { defaultVisible = false, visible: controlled, onVisibleChange, className, size = "auto", ...rest },
    ref,
  ) {
    const [uncontrolled, setUncontrolled] = useState(defaultVisible);
    const visible = controlled ?? uncontrolled;

    function toggle() {
      const next = !visible;
      if (controlled === undefined) setUncontrolled(next);
      onVisibleChange?.(next);
    }

    return (
      <div className={cn("relative inline-flex w-full", className)}>
        <Input
          ref={ref}
          type={visible ? "text" : "password"}
          size={size}
          className="pr-10"
          {...rest}
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className={cn(
            "absolute inset-y-0 right-0 flex items-center justify-center px-3 text-muted",
            "hover:text-ink focus-visible:text-ink focus:outline-none",
          )}
          tabIndex={-1}
        >
          <Icon name={visible ? "EyeOff" : "Eye"} size="sm" />
        </button>
      </div>
    );
  },
);
