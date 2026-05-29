"use client";

/*
 * atoms/icon/theme-toggle — Figma V2 (light 1:11938 · dark 1:12157), 28×28.
 *   light = moon, white fill + #25afee outline (theme-toggle.svg)
 *   dark  = sun,  #111 fill + #eec431 outline (theme-toggle-dark.svg)
 * Toggles the `.dark` class on <html>.
 */
export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => {
        const el = document.documentElement;
        const toDark = !el.classList.contains("dark");
        el.classList.toggle("dark", toDark);
        el.classList.toggle("light", !toDark);
      }}
      className={`size-[28px] ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/theme-toggle.svg" alt="" aria-hidden="true" className="size-full dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/theme-toggle-dark.svg" alt="" aria-hidden="true" className="hidden size-full dark:block" />
    </button>
  );
}
