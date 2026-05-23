"use client";

import { useEffect, useState } from "react";
import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

const STORAGE_KEY = "udvash-theme";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  html.classList.toggle("dark", theme === "dark");
  html.classList.toggle("light", theme === "light");
}

export type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-sm border border-line-subtle bg-surface text-ink",
        "transition-colors hover:bg-surface-subtle",
        className,
      )}
    >
      {mounted ? (
        <Icon name={theme === "dark" ? "Sun" : "Moon"} size="md" />
      ) : (
        <span aria-hidden="true" className="size-5" />
      )}
    </button>
  );
}
