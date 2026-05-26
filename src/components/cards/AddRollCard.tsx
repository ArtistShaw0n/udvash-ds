"use client";

import { useState } from "react";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Input } from "../atoms/Input";
import { cn } from "@/lib/cn";

export type AddRollCardProps = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  errorMessage?: string;
  loading?: boolean;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
};

/*
 * Figma source: V2 AddRoll login card (parent 1:12547, instance 1:12549).
 * 360×397 — Student Login title + 2 inputs + Next CTA. Collapsed → tile;
 * expanded → form view.
 */
export function AddRollCard({
  value: controlled,
  defaultValue = "",
  placeholder = "Enter Your Registration Number",
  errorMessage,
  loading = false,
  onChange,
  onSubmit,
  className,
}: AddRollCardProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const [expanded, setExpanded] = useState(!!defaultValue);
  const value = controlled ?? uncontrolled;

  function update(next: string) {
    if (controlled === undefined) setUncontrolled(next);
    onChange?.(next);
  }
  function submit() {
    if (!value.trim()) return;
    onSubmit?.(value.trim());
  }

  if (!expanded) {
    return (
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className={cn(
          "flex w-full max-w-[336px] items-center gap-3 rounded-lg border border-dashed border-brand/40 bg-brand-subtle/50 p-3 text-left transition-colors hover:bg-brand-subtle",
          className,
        )}
      >
        <span className="inline-flex size-9 items-center justify-center rounded-sm bg-brand/10 text-brand">
          <Icon name="Plus" size="sm" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold text-brand">Add Roll Number</p>
          <p className="truncate text-sm text-muted">Enter your registration to unlock courses</p>
        </div>
        <Icon name="ChevronRight" size="sm" className="text-brand" />
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className={cn(
        "w-full max-w-[336px] rounded-lg bg-surface p-4 shadow-card",
        className,
      )}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">Add Roll Number</p>
      <Input
        value={value}
        onChange={(e) => update(e.target.value)}
        placeholder={placeholder}
        inputMode="numeric"
        invalid={!!errorMessage}
        disabled={loading}
        className="mb-2"
      />
      {errorMessage && (
        <p className="mb-2 text-xs text-danger">{errorMessage}</p>
      )}
      <div className="flex gap-2">
        <Button type="button" variant="ghost" size="sm" onClick={() => setExpanded(false)} disabled={loading}>
          Cancel
        </Button>
        <Button type="submit" size="sm" fullWidth loading={loading} iconLeft={<Icon name="Check" size="xs" />}>
          Add
        </Button>
      </div>
    </form>
  );
}
