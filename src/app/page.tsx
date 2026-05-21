"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Avatar } from "@/components/Avatar";
import { Spinner } from "@/components/Spinner";
import { ProgressBar } from "@/components/ProgressBar";
import { ScoreLetter } from "@/components/ScoreLetter";
import { Modal } from "@/components/Modal";
import { Toast } from "@/components/Toast";
import { FooterMenu, type FooterTab } from "@/components/FooterMenu";
import { Header, useDarkMode } from "@/components/Header";
import { Dropdown } from "@/components/Dropdown";
import { OTPInput } from "@/components/OTPInput";
import { PhoneInput } from "@/components/PhoneInput";
import { Tabs } from "@/components/Tabs";
import { SearchBar } from "@/components/SearchBar";
import { Checkbox } from "@/components/Checkbox";
import { RadioGroup } from "@/components/RadioGroup";
import { Switch } from "@/components/Switch";
import { Divider } from "@/components/Divider";
import { Skeleton } from "@/components/Skeleton";

export default function Home() {
  const { isDark, toggle } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState<FooterTab>("home");
  const [dropdownVal, setDropdownVal] = useState<"sm" | "md" | "lg">("md");
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [agree, setAgree] = useState(false);
  const [plan, setPlan] = useState<"basic" | "pro" | "max">("basic");
  const [notif, setNotif] = useState(true);

  return (
    <div className="min-h-screen bg-surface text-ink">
      <Header
        title="উদ্ভাস-উন্মেষ"
        notificationCount={3}
      />

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 py-12 pb-32 space-y-16">
        <Hero isDark={isDark} toggle={toggle} />

        <Section title="Buttons">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" loading>Loading</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Section>

        <Section title="Inputs">
          <div className="flex flex-wrap gap-4 items-start">
            <Field label="Default">
              <Input placeholder="Enter Your Registration Number" />
            </Field>
            <Field label="Filled">
              <Input defaultValue="1819361" />
            </Field>
            <Field label="Error">
              <Input invalid placeholder="Invalid input" />
            </Field>
            <Field label="Disabled">
              <Input disabled placeholder="Disabled field" />
            </Field>
          </div>
        </Section>

        <Section title="Cards">
          <div className="space-y-3">
            <Card title="অধ্যায়-১ : ভৌতজগৎ ও পরিমাপ" bangla trailing={<ChevronRight />} />
            <Card title="অধ্যায়-২ : ভেক্টর" bangla trailing={<ChevronRight />} />
            <Card title="Course chapter 3 (English title)" trailing={<ChevronRight />} />
          </div>
        </Section>

        <Section title="Badges">
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="brand">Brand</Badge>
            <Badge variant="info">Live</Badge>
            <Badge variant="success">Done</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">In Branch</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </div>
        </Section>

        <Section title="Avatars">
          <div className="flex flex-wrap gap-4 items-end">
            <Avatar size="sm" initials="A" />
            <Avatar size="md" initials="AM" />
            <Avatar size="lg" initials="AMR" />
          </div>
        </Section>

        <Section title="Indicators">
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
            </div>
            <ProgressBar value={4} max={26} label="4/26 Questions Completed" />
            <div className="flex gap-2 items-center">
              <ScoreLetter letter="A" variant="success" />
              <ScoreLetter letter="B" variant="info" />
              <ScoreLetter letter="C" variant="warning" />
              <ScoreLetter letter="N/A" variant="neutral" />
              <ScoreLetter letter="F" variant="error" />
            </div>
          </div>
        </Section>

        <Section title="Modals & Toasts">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary" onClick={() => setModalOpen(true)}>Open modal</Button>
            <Toast variant="info">Live class starting soon</Toast>
            <Toast variant="success">Downloaded successfully</Toast>
            <Toast variant="warning" icon={<LockIcon />}>Service Blocked</Toast>
            <Toast variant="error">No internet connection</Toast>
          </div>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Delete from downloads?"
            description="This video won't be available to watch offline."
            primaryAction={{ label: "Delete", onClick: () => setModalOpen(false), destructive: true }}
            secondaryAction={{ label: "Cancel", onClick: () => setModalOpen(false) }}
          />
        </Section>

        <Section title="Tokens — Live Preview">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Swatch name="surface" color="bg-surface" />
            <Swatch name="surface-subtle" color="bg-surface-subtle" />
            <Swatch name="brand" color="bg-brand" />
            <Swatch name="brand-accent" color="bg-brand-accent" />
            <Swatch name="brand-subtle" color="bg-brand-subtle" />
            <Swatch name="error" color="bg-error" />
            <Swatch name="info" color="bg-info" />
            <Swatch name="warning" color="bg-warning" />
            <Swatch name="success" color="bg-success" />
            <Swatch name="disabled" color="bg-disabled" />
            <Swatch name="line" color="bg-line" />
            <Swatch name="ink" color="bg-ink" />
          </div>
        </Section>

        <Section title="More Form Elements">
          <div className="space-y-6">
            <Field label="Dropdown">
              <Dropdown
                options={[
                  { value: "sm", label: "Small" },
                  { value: "md", label: "Medium" },
                  { value: "lg", label: "Large" },
                ]}
                value={dropdownVal}
                onChange={setDropdownVal}
              />
            </Field>
            <Field label="OTP Input">
              <OTPInput length={6} value={otp} onChange={setOtp} />
            </Field>
            <Field label="Phone Input">
              <PhoneInput countryCode="+880" value={phone} onChange={setPhone} />
            </Field>
            <Field label="Search Bar">
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClear={() => setSearch("")}
                placeholder="Search courses, chapters…"
              />
            </Field>
          </div>
        </Section>

        <Section title="Selections">
          <div className="flex flex-wrap gap-12">
            <div className="space-y-3">
              <p className="text-sm text-muted">Checkbox</p>
              <Checkbox checked={agree} onChange={setAgree} label="I agree to the terms" />
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted">Switch</p>
              <Switch checked={notif} onChange={setNotif} label="Email notifications" />
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted">Radio Group</p>
              <RadioGroup
                name="plan"
                value={plan}
                onChange={setPlan}
                options={[
                  { value: "basic", label: "Basic" },
                  { value: "pro", label: "Pro" },
                  { value: "max", label: "Max" },
                ]}
              />
            </div>
          </div>
        </Section>

        <Section title="Tabs">
          <div className="space-y-6">
            <Tabs
              variant="segment"
              tabs={[
                { id: "live", label: "Live", content: <p className="text-md text-muted">Currently live classes appear here.</p> },
                { id: "upcoming", label: "Upcoming", content: <p className="text-md text-muted">Upcoming sessions appear here.</p> },
                { id: "past", label: "Past", content: <p className="text-md text-muted">Past recordings appear here.</p> },
              ]}
            />
            <Tabs
              variant="underline"
              tabs={[
                { id: "notes", label: "Notes" },
                { id: "quiz", label: "Quiz" },
                { id: "doubt", label: "Doubts" },
              ]}
            />
          </div>
        </Section>

        <Section title="Divider & Skeleton">
          <div className="space-y-6">
            <Divider label="OR" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton shape="rounded-full" className="size-12" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Sample screens">
          <div className="flex flex-wrap gap-4">
            <Link href="/login" className="block w-[280px] rounded-md border border-line p-4 hover:bg-brand-subtle transition-colors">
              <div className="text-md font-medium text-ink mb-1">Login Sample</div>
              <div className="text-sm text-muted">Logo + Inputs + Button</div>
            </Link>
            <Link href="/home" className="block w-[280px] rounded-md border border-line p-4 hover:bg-brand-subtle transition-colors">
              <div className="text-md font-medium text-ink mb-1">Home Sample</div>
              <div className="text-sm text-muted">Header + Cards + FooterMenu</div>
            </Link>
          </div>
        </Section>

        <p className="text-sm text-muted">Built from <code className="bg-surface-subtle px-1.5 py-0.5 rounded-xs">audit/specs/</code>. 22 components shipped · 120+ remaining per Figma source.</p>
      </main>

      <div className="fixed bottom-0 inset-x-0 max-w-[1200px] mx-auto">
        <FooterMenu active={tab} onTabChange={setTab} />
      </div>
    </div>
  );
}

/* ====== Local UI helpers (inline to keep demo self-contained) ====== */

function Hero({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
    <section>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Udvash–Unmesh Design System</h1>
          <p className="text-muted text-md md:text-lg max-w-2xl">
            Production design system from Figma V2. 99 tokens · Light/Dark · responsive · Inter + Hind Siliguri.
          </p>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-line-brand text-link hover:bg-brand-subtle transition-colors"
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-6 pb-2 border-b border-line-subtle">{title}</h2>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm text-muted mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function Swatch({ name, color }: { name: string; color: string }) {
  return (
    <div className="rounded-md border-2 border-line overflow-hidden">
      <div className={`h-16 w-full ${color}`} />
      <div className="px-2 py-1.5 bg-surface border-t border-line-subtle">
        <code className="text-xs text-ink">{name}</code>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
      <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
