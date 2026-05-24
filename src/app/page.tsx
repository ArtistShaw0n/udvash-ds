"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/* ============================================================================
   Phase 1 — Design System preview
   Pure token showcase, no components. Every value is a CSS variable from
   globals.css, which in turn maps to tokens/tokens.json.
   ============================================================================ */

const STORAGE_KEY = "udvash-theme";
const CHANGE_EVENT = "udvash-theme-change";
type Theme = "light" | "dark";

function getTheme(): Theme {
  const t = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (t === "light" || t === "dark") return t;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(t: Theme) {
  const html = document.documentElement;
  html.classList.toggle("dark", t === "dark");
  html.classList.toggle("light", t === "light");
}
function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE_EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE_EVENT, cb);
  };
}

function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribe, getTheme, () => "light");
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      suppressHydrationWarning
      className="inline-flex size-9 items-center justify-center rounded-sm border border-default bg-surface text-primary transition-colors hover:bg-subtle"
    >
      <span suppressHydrationWarning className="text-md">
        {theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}

/* ----------------------------------------------------------------------------
   Data: every token grouped for the showcase
   ---------------------------------------------------------------------------- */

const brandPalette = [
  { name: "brand/50",  value: "#F5EDFF" },
  { name: "brand/300", value: "#8A5BA4" },
  { name: "brand/400", value: "#684B8A" },
  { name: "brand/500", value: "#55347B", note: "Brand primary · 20 hits" },
  { name: "brand/600", value: "#6E3F91" },
];

const greyPalette = [
  { name: "grey/0",   value: "#FFFFFF" },
  { name: "grey/50",  value: "#F6F6F6" },
  { name: "grey/100", value: "#E5E7EB", note: "Divider · 26 hits" },
  { name: "grey/200", value: "#DCDCDC" },
  { name: "grey/300", value: "#C7C7C7" },
  { name: "grey/400", value: "#C6C6C6" },
  { name: "grey/500", value: "#B9B9B9" },
  { name: "grey/600", value: "#70757A" },
  { name: "grey/700", value: "#616161", note: "Text primary light · 215 hits" },
  { name: "grey/800", value: "#535353" },
  { name: "grey/850", value: "#221E26" },
  { name: "grey/900", value: "#1C1C1C" },
  { name: "grey/950", value: "#1A1A1A" },
  { name: "grey/990", value: "#111111" },
  { name: "grey/ink-dark", value: "#E8E8E8", note: "Text primary dark · 49 hits" },
];

const statusPalettes: Array<{ title: string; rows: { name: string; value: string }[] }> = [
  {
    title: "Danger",
    rows: [
      { name: "danger/300", value: "#FC5A5A" },
      { name: "danger/400", value: "#F95959" },
      { name: "danger/500", value: "#FF3A3A" },
      { name: "danger/600", value: "#D9000D" },
      { name: "danger/700", value: "#ED1C24" },
    ],
  },
  {
    title: "Success",
    rows: [
      { name: "success/100", value: "#D7F7D4" },
      { name: "success/400", value: "#24C182" },
      { name: "success/500", value: "#00BA00" },
      { name: "success/600", value: "#009819" },
      { name: "success/700", value: "#00A511" },
      { name: "success/800", value: "#82C124" },
    ],
  },
  {
    title: "Warning",
    rows: [
      { name: "warning/100", value: "#FAE9B1" },
      { name: "warning/400", value: "#EEC431" },
      { name: "warning/500", value: "#F59E0B" },
      { name: "warning/600", value: "#F27C57" },
      { name: "warning/700", value: "#C1B124" },
      { name: "warning/800", value: "#FF9900" },
    ],
  },
  {
    title: "Info",
    rows: [
      { name: "info/400", value: "#25B7D3" },
      { name: "info/500", value: "#2496C1" },
      { name: "info/600", value: "#3B88F5" },
      { name: "info/700", value: "#6262D9" },
    ],
  },
];

const accentPalette = [
  { name: "accent/magenta",       value: "#9824C1" },
  { name: "accent/lavender-band", value: "#E4EAF4", note: "Live class header band" },
  { name: "accent/udvash-red",    value: "#ED1C24" },
  { name: "accent/unmesh-maroon", value: "#7C2427" },
];

const semanticLight = [
  { name: "bg/canvas",         var: "var(--sem-bg-canvas)" },
  { name: "bg/subtle",         var: "var(--sem-bg-subtle)" },
  { name: "bg/surface",        var: "var(--sem-bg-surface)" },
  { name: "bg/brand-band",     var: "var(--sem-bg-brand-band)" },
  { name: "bg/brand",          var: "var(--sem-bg-brand)" },
  { name: "bg/brand-subtle",   var: "var(--sem-bg-brand-subtle)" },
  { name: "bg/disabled",       var: "var(--sem-bg-disabled)" },
  { name: "border/default",    var: "var(--sem-border-default)" },
  { name: "border/strong",     var: "var(--sem-border-strong)" },
  { name: "border/brand",      var: "var(--sem-border-brand)" },
];

const fontSizes = [
  { name: "xs",      px: 10 },
  { name: "sm",      px: 12 },
  { name: "base",    px: 14, note: "Body default · 194 hits" },
  { name: "md",      px: 16 },
  { name: "lg",      px: 20 },
  { name: "xl",      px: 24 },
  { name: "display", px: 26 },
];

const fontWeights = [
  { name: "regular",  weight: 400, note: "161 hits" },
  { name: "medium",   weight: 500, note: "70 hits" },
  { name: "semibold", weight: 600, note: "34 hits" },
  { name: "bold",     weight: 700, note: "26 hits" },
];

const radii = [
  { name: "xs",  px: 4 },
  { name: "sm",  px: 5,  note: "Dominant · 116 hits" },
  { name: "md",  px: 8 },
  { name: "lg",  px: 10, note: "Card corner · 49 hits" },
  { name: "xl",  px: 18 },
  { name: "2xl", px: 20 },
  { name: "pill", px: 99 },
  { name: "full", px: 9999, render: 28 },
];

const spaces = [
  { name: "1",  px: 4 },
  { name: "2",  px: 8 },
  { name: "3",  px: 10 },
  { name: "4",  px: 12 },
  { name: "5",  px: 16 },
  { name: "6",  px: 20 },
  { name: "7",  px: 22 },
  { name: "8",  px: 30 },
  { name: "9",  px: 34 },
  { name: "10", px: 40 },
  { name: "12", px: 48 },
  { name: "16", px: 64 },
];

const shadows = [
  { name: "card",         css: "0 0 5px 0 rgba(0,0,0,0.10)",      note: "Default card · 69 hits" },
  { name: "header",       css: "0 1px 4px 0 rgba(0,0,0,0.06)" },
  { name: "footer",       css: "0 -1px 4px 0 rgba(0,0,0,0.06)" },
  { name: "chip",         css: "0 0 2.5px 0 rgba(0,0,0,0.10)" },
  { name: "card-dark",    css: "0 0 20px 0 #000000" },
  { name: "profile-glow", css: "0 0 4px 0 rgba(255,255,255,0.25)" },
];

const breakpoints = [
  { name: "sm", px: 376, note: "Mobile · Figma source viewport" },
  { name: "md", px: 768, note: "Tablet" },
  { name: "lg", px: 1024, note: "Desktop small" },
  { name: "xl", px: 1440, note: "Desktop large" },
];

const sizes = [
  { name: "app-width",   px: 376, note: "App shell · 37 hits" },
  { name: "card",        px: 328, note: "Standard card" },
  { name: "card-row",    px: 336 },
  { name: "card-wide",   px: 360 },
  { name: "card-report", px: 304 },
  { name: "input-row",   px: 320 },
  { name: "btn-md",      px: 130 },
  { name: "btn-lg",      px: 150 },
  { name: "btn-xl",      px: 280 },
  { name: "btn-height",  px: 36 },
  { name: "header",      px: 50 },
  { name: "footer",      px: 66 },
];

/* ----------------------------------------------------------------------------
   Page
   ---------------------------------------------------------------------------- */

export default function Page() {
  const [copied, setCopied] = useState<string | null>(null);
  function copy(value: string) {
    navigator.clipboard?.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied((c) => (c === value ? null : c)), 1200);
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggle />
      </div>

      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Udvash–Unmesh · Phase 1
        </p>
        <h1 className="mt-2 text-display font-semibold leading-loose">
          Design System
        </h1>
        <p className="mt-3 max-w-2xl text-md text-muted leading-relaxed">
          Token catalogue extracted from the Figma file V2 page (15 representative
          artboards, frequency-aggregated). All values below are CSS variables in{" "}
          <code className="rounded-xs bg-subtle px-1 py-0.5 text-sm">src/app/globals.css</code>
          {" "}and stored as a Tokens Studio JSON in{" "}
          <code className="rounded-xs bg-subtle px-1 py-0.5 text-sm">tokens/tokens.json</code>.
          Click any swatch to copy its hex.
        </p>
      </header>

      {/* COLORS — primitive ramps */}
      <Section title="Colors — Primitives">
        <SubSection title="Brand">
          <SwatchGrid swatches={brandPalette} onCopy={copy} copied={copied} />
        </SubSection>
        <SubSection title="Grey">
          <SwatchGrid swatches={greyPalette} onCopy={copy} copied={copied} />
        </SubSection>
        {statusPalettes.map((s) => (
          <SubSection title={s.title} key={s.title}>
            <SwatchGrid swatches={s.rows} onCopy={copy} copied={copied} />
          </SubSection>
        ))}
        <SubSection title="Accent">
          <SwatchGrid swatches={accentPalette} onCopy={copy} copied={copied} />
        </SubSection>
      </Section>

      {/* COLORS — semantic (auto-themed) */}
      <Section title="Colors — Semantic (active theme)">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {semanticLight.map((s) => (
            <div
              key={s.name}
              className="rounded-sm border border-default bg-surface p-3 shadow-chip"
            >
              <div
                className="mb-2 h-10 rounded-xs border border-default"
                style={{ background: s.var }}
              />
              <div className="text-xs font-medium text-primary">{s.name}</div>
              <div className="text-xs font-mono text-muted">{s.var}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* TYPOGRAPHY */}
      <Section title="Typography">
        <SubSection title="Family">
          <p className="text-md text-primary">
            Inter — Latin script (318 hits across V2)
          </p>
          <p className="text-md text-primary">
            Noto Sans Bengali — Bangla script: <span className="font-semibold">উদ্ভাস-উন্মেষ</span>
          </p>
        </SubSection>
        <SubSection title="Size scale">
          <div className="space-y-2">
            {fontSizes.map((f) => (
              <div key={f.name} className="flex items-baseline gap-4">
                <span className="w-24 text-xs font-mono text-muted">{f.name}</span>
                <span className="w-12 text-xs font-mono text-muted">{f.px}px</span>
                <span style={{ fontSize: `${f.px}px` }} className="text-primary">
                  The quick brown fox
                </span>
                {f.note && <span className="text-xs text-muted">· {f.note}</span>}
              </div>
            ))}
          </div>
        </SubSection>
        <SubSection title="Weight scale">
          <div className="space-y-2">
            {fontWeights.map((w) => (
              <div key={w.name} className="flex items-baseline gap-4">
                <span className="w-24 text-xs font-mono text-muted">{w.name}</span>
                <span className="w-12 text-xs font-mono text-muted">{w.weight}</span>
                <span style={{ fontWeight: w.weight }} className="text-md text-primary">
                  The quick brown fox jumps
                </span>
                {w.note && <span className="text-xs text-muted">· {w.note}</span>}
              </div>
            ))}
          </div>
        </SubSection>
      </Section>

      {/* RADIUS */}
      <Section title="Radius">
        <div className="flex flex-wrap gap-6">
          {radii.map((r) => {
            const size = r.render ?? Math.max(48, Math.min(80, r.px));
            return (
              <div key={r.name} className="flex flex-col items-center gap-2">
                <div
                  className="border border-brand bg-brand-subtle"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: `${Math.min(r.px, size)}px`,
                  }}
                />
                <div className="text-xs font-mono text-primary">{r.name}</div>
                <div className="text-xs text-muted">{r.px}px</div>
                {r.note && <div className="text-xs text-muted">{r.note}</div>}
              </div>
            );
          })}
        </div>
      </Section>

      {/* SPACING */}
      <Section title="Spacing scale">
        <div className="space-y-2">
          {spaces.map((s) => (
            <div key={s.name} className="flex items-center gap-3">
              <span className="w-10 text-xs font-mono text-muted">{s.name}</span>
              <span className="w-12 text-xs font-mono text-muted">{s.px}px</span>
              <div
                className="h-3 bg-brand"
                style={{ width: `${s.px}px` }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* SHADOWS */}
      <Section title="Shadows">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {shadows.map((s) => (
            <div key={s.name} className="flex flex-col gap-2">
              <div
                className="h-20 rounded-md bg-surface"
                style={{ boxShadow: s.css }}
              />
              <div className="text-xs font-mono text-primary">{s.name}</div>
              <div className="text-xs font-mono text-muted">{s.css}</div>
              {s.note && <div className="text-xs text-muted">{s.note}</div>}
            </div>
          ))}
        </div>
      </Section>

      {/* BREAKPOINTS */}
      <Section title="Breakpoints">
        <div className="space-y-2">
          {breakpoints.map((b) => (
            <div key={b.name} className="flex items-center gap-3">
              <span className="w-10 text-xs font-mono text-muted">{b.name}</span>
              <span className="w-16 text-xs font-mono text-muted">{b.px}px</span>
              <span className="text-xs text-muted">{b.note}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* SIZES */}
      <Section title="Component sizing reference">
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-3">
          {sizes.map((s) => (
            <div key={s.name} className="flex items-baseline gap-2">
              <span className="font-mono text-muted">{s.name}</span>
              <span className="font-mono text-primary">{s.px}px</span>
              {s.note && <span className="text-xs text-muted">· {s.note}</span>}
            </div>
          ))}
        </div>
      </Section>

      {/* Z-INDEX / MOTION */}
      <Section title="Z-index & motion">
        <SubSection title="z-index">
          <div className="grid grid-cols-3 gap-x-6 gap-y-1 text-sm sm:grid-cols-5">
            {["base 0", "raised 10", "dropdown 20", "sticky 30", "drawer 40", "modal 50", "popover 60", "toast 70", "tooltip 80"].map((z) => (
              <span key={z} className="font-mono text-muted">{z}</span>
            ))}
          </div>
        </SubSection>
        <SubSection title="duration">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-5">
            {["instant 0ms", "fast 120ms", "base 200ms", "slow 320ms", "slower 480ms"].map((d) => (
              <span key={d} className="font-mono text-muted">{d}</span>
            ))}
          </div>
        </SubSection>
      </Section>

      <footer className="mt-12 border-t border-default pt-6 text-xs text-muted">
        <p>
          Phase 2 = component library (built on top of these tokens). Phase 3 = desktop
          website. Phase 4 = responsive (tablet + mobile). The previous component set
          is preserved on branch <code className="rounded-xs bg-subtle px-1 py-0.5 font-mono text-sm">backup/v1-design-system</code>.
        </p>
      </footer>
    </main>
  );
}

/* ----------------------------------------------------------------------------
   Helpers
   ---------------------------------------------------------------------------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 text-lg font-semibold text-primary">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
        {title}
      </h3>
      {children}
    </div>
  );
}

function SwatchGrid({
  swatches,
  onCopy,
  copied,
}: {
  swatches: Array<{ name: string; value: string; note?: string }>;
  onCopy: (v: string) => void;
  copied: string | null;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {swatches.map((s) => (
        <button
          key={s.name}
          type="button"
          onClick={() => onCopy(s.value)}
          className="group flex flex-col gap-2 rounded-sm border border-default bg-surface p-3 text-left shadow-chip transition-shadow hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <div
            className="h-12 rounded-xs border border-default"
            style={{ background: s.value }}
          />
          <div className="text-xs font-medium font-mono text-primary">{s.name}</div>
          <div className="flex items-baseline justify-between gap-1">
            <span className="text-xs font-mono text-muted">{s.value}</span>
            {copied === s.value && <span className="text-xs text-success">copied</span>}
          </div>
          {s.note && <div className="text-xs text-muted leading-snug">{s.note}</div>}
        </button>
      ))}
    </div>
  );
}
