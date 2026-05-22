"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Button, Input, Card, Badge, Avatar, Spinner, ProgressBar, ScoreLetter,
  Modal, Toast, FooterMenu, Header, Dropdown, OTPInput, PhoneInput, Tabs,
  SearchBar, Checkbox, RadioGroup, Switch, Divider, Skeleton,
  Icon, Stack, Grid, Tag, Logo, StarRating, MeritRankings, ScoreGauge,
  PositionLabel, TotalRow, MCQRow, FilterChip, SegmentedControl,
  LiveClassCard, CourseContentCard, ProfileCard, HomeGridCard, AddCourseCard,
  PracticeExamCard, MasterClassCard, SubjectWiseSummary, AnalysisBlock,
  BackLink, PasswordInput,
  type IconName,
} from "@/components";
import { useDarkMode } from "@/components/Header";
import type { FooterTab } from "@/components/FooterMenu";

const SAMPLE_ICONS: IconName[] = [
  "bell", "calendar", "search", "play", "pause", "download",
  "eye-on", "eye-off", "kebab", "live-dot", "speech-bubble",
  "thumb-up", "thumb-down", "star", "home", "user",
];

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
  const [seg, setSeg] = useState("live");
  const [rating, setRating] = useState(4);
  const [filter, setFilter] = useState<string | null>("Date");
  const [course, setCourse] = useState({ physics: true, chem: false, bio: false });

  return (
    <div className="min-h-screen bg-surface text-ink">
      <Header title="উদ্ভাস-উন্মেষ" notificationCount={3} />

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 py-12 pb-32 space-y-16">
        <Hero isDark={isDark} toggle={toggle} />

        <Section title="Logo">
          <div className="flex items-center gap-8 flex-wrap">
            <Logo size="sm" /><Logo size="md" /><Logo size="lg" />
            <Logo size="md" variant="icon" />
          </div>
        </Section>

        <Section title="Iconography (27 named icons)">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {SAMPLE_ICONS.map((n) => (
              <div key={n} className="flex flex-col items-center gap-1.5 p-3 rounded-md border border-line-subtle bg-surface">
                <Icon name={n} size={24} />
                <span className="text-xs text-muted truncate w-full text-center">{n}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Buttons">
          <Stack direction="row" gap={4} wrap align="center" className="mb-6">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" loading>Loading</Button>
          </Stack>
          <Stack direction="row" gap={4} wrap align="center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button iconLeft={<Icon name="play" size={16} />}>With icon</Button>
            <Button iconRight={<Icon name="chevron-right" size={16} />} variant="secondary">Next</Button>
          </Stack>
        </Section>

        <Section title="Inputs">
          <Stack direction="row" gap={4} wrap align="start">
            <Field label="Default">
              <Input placeholder="Enter Your Registration Number" />
            </Field>
            <Field label="Password">
              <PasswordInput placeholder="Password" />
            </Field>
            <Field label="Error">
              <Input invalid placeholder="Invalid input" />
            </Field>
            <Field label="Disabled">
              <Input disabled placeholder="Disabled field" />
            </Field>
          </Stack>
        </Section>

        <Section title="Cards (primitive + domain)">
          <Stack gap={3}>
            <Card title="অধ্যায়-১ : ভৌতজগৎ ও পরিমাপ" bangla trailing={<Icon name="chevron-right" size={16} />} />
            <CourseContentCard title="অধ্যায়-২ ভেক্টর" index="02" bangla />
            <CourseContentCard title="অধ্যায়-৩ গতি" index="03" bangla disabled />
          </Stack>
          <Grid cols={1} mdCols={2} lgCols={3} gap={4} className="mt-6">
            <LiveClassCard
              title="অধ্যায়-১ পদার্থ"
              subject="Physics"
              instructor="ড. আব্দুর রহমান"
              schedule="Today · 7:00 PM"
              isLive
              bangla
            />
            <MasterClassCard title="Master Class — Periodic Table" date="10 May" duration="2h" />
            <PracticeExamCard
              title="Math Practice Test 5"
              score="45/50"
              questionCount={50}
              date="10 May 2026"
              duration="45 min"
              status="highest"
            />
          </Grid>
        </Section>

        <Section title="Profile + AddCourse">
          <Stack direction="row" gap={6} wrap align="start">
            <ProfileCard
              name="তানজিন রহমান"
              avatarInitials="তা"
              bangla
              rows={[
                { label: "Roll", value: "1234567", icon: <Icon name="user" size={14} /> },
                { label: "Branch", value: "Dhanmondi", icon: <Icon name="map-marker" size={14} /> },
                { label: "Course", value: "HSC 2026" },
              ]}
              footer={<Button size="sm" variant="ghost" className="w-full">Edit Profile</Button>}
            />
            <Stack gap={2}>
              <AddCourseCard label="Physics — HSC 2026" description="Full chapter coverage" price="৳ 2,500"
                checked={course.physics} onChange={(c) => setCourse({ ...course, physics: c })} />
              <AddCourseCard label="Chemistry — HSC 2026" description="Live + recorded" price="৳ 2,500"
                checked={course.chem} onChange={(c) => setCourse({ ...course, chem: c })} />
              <AddCourseCard label="Biology — HSC 2026"
                checked={course.bio} onChange={(c) => setCourse({ ...course, bio: c })} />
            </Stack>
          </Stack>
        </Section>

        <Section title="Data & Indicators">
          <Stack gap={6}>
            <div className="flex items-center gap-4 flex-wrap">
              <ScoreGauge score="11.5" outOf="15" />
              <ScoreGauge score="78%" />
              <PositionLabel position={5} />
              <PositionLabel position="12 / 250" />
            </div>
            <MeritRankings ranks={[
              { label: "Class", value: 5 },
              { label: "Branch", value: 2 },
              { label: "Overall", value: 12 },
            ]} />
            <div className="w-[280px] p-3 bg-surface rounded-md border border-line">
              <MCQRow letter="A" letterVariant="success" label="MCQ" score="10/15" />
              <MCQRow letter="B" letterVariant="info" label="Short Answer" score="8/10" />
              <MCQRow letter="C" letterVariant="warning" label="Long Answer" score="5/10" />
              <TotalRow total="23/35" />
            </div>
            <div className="flex items-center gap-4">
              <Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" />
              <StarRating value={rating} onChange={setRating} />
            </div>
            <ProgressBar value={4} max={26} label="4/26 Questions Completed" />
            <div className="flex gap-2 items-center">
              <ScoreLetter letter="A" variant="success" />
              <ScoreLetter letter="B" variant="info" />
              <ScoreLetter letter="C" variant="warning" />
              <ScoreLetter letter="N/A" variant="neutral" />
              <ScoreLetter letter="F" variant="error" />
            </div>
          </Stack>
        </Section>

        <Section title="Subject Wise Summary">
          <SubjectWiseSummary
            subject="Physics"
            score="11.5"
            outOf="15"
            position={5}
            breakdown={[
              { label: "MCQ", value: 10, total: 15 },
              { label: "Short Answer", value: 7, total: 10 },
              { label: "Numerical", value: 5, total: 10 },
            ]}
          />
        </Section>

        <Section title="Analysis Block (post-exam review)">
          <AnalysisBlock
            questionText="What is the chemical symbol for water?"
            options={[
              { id: "a", label: "H2O" },
              { id: "b", label: "O2" },
              { id: "c", label: "CO2" },
              { id: "d", label: "NaCl" },
            ]}
            correctId="a"
            selectedId="b"
            explanation="Water is composed of two hydrogen atoms and one oxygen atom. O2 is the symbol for oxygen gas."
          />
        </Section>

        <Section title="Filters & Nav">
          <Stack gap={6}>
            <Stack direction="row" gap={2} wrap>
              {["Subject", "Date", "Status"].map((label) => (
                <FilterChip key={label} label={label} selected={filter === label}
                  onClick={() => setFilter(filter === label ? null : label)} />
              ))}
            </Stack>
            <SegmentedControl value={seg} onChange={setSeg} segments={[
              { value: "live", label: "Live" },
              { value: "past", label: "Past" },
              { value: "upcoming", label: "Upcoming" },
            ]} />
            <BackLink href="#" label="Return to Chapter" />
            <Tabs
              variant="underline"
              tabs={[
                { id: "notes", label: "Notes" },
                { id: "quiz", label: "Quiz" },
                { id: "doubt", label: "Doubts" },
              ]}
            />
          </Stack>
        </Section>

        <Section title="Home Grid">
          <Grid cols={2} mdCols={4} gap={3} className="max-w-2xl">
            <HomeGridCard icon={<Icon name="home" size={28} />} label="Home" />
            <HomeGridCard icon={<Icon name="user" size={28} />} label="Profile" hasNotification />
            <HomeGridCard icon={<Icon name="download" size={28} />} label="Downloads" />
            <HomeGridCard icon={<Icon name="calendar" size={28} />} label="Schedule" />
            <HomeGridCard icon={<Icon name="speech-bubble" size={28} />} label="Community" hasNotification />
            <HomeGridCard icon={<Icon name="star" size={28} />} label="Performance" />
            <HomeGridCard icon={<Icon name="bell" size={28} />} label="Notifications" />
            <HomeGridCard icon={<Icon name="kebab" size={28} />} label="More" />
          </Grid>
        </Section>

        <Section title="Badges & Tags">
          <Stack direction="row" gap={3} wrap align="center">
            <Badge variant="brand">Brand</Badge>
            <Badge variant="info">Live</Badge>
            <Badge variant="success">Done</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">In Branch</Badge>
            <Badge variant="neutral">Neutral</Badge>
            <Tag>EN</Tag>
            <Tag>BN</Tag>
            <Tag variant="brand" selected>Selected</Tag>
          </Stack>
        </Section>

        <Section title="Avatars">
          <Stack direction="row" gap={4} wrap align="end">
            <Avatar size="sm" initials="A" />
            <Avatar size="md" initials="AM" />
            <Avatar size="lg" initials="AMR" />
          </Stack>
        </Section>

        <Section title="Modals & Toasts">
          <Stack direction="row" gap={3} wrap align="center">
            <Button variant="primary" onClick={() => setModalOpen(true)}>Open modal</Button>
            <Toast variant="info">Live class starting soon</Toast>
            <Toast variant="success">Downloaded successfully</Toast>
            <Toast variant="warning" icon={<Icon name="cross" size={14} />}>Service Blocked</Toast>
            <Toast variant="error">No internet connection</Toast>
          </Stack>
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
          <Grid cols={2} mdCols={4} lgCols={6} gap={4}>
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
          </Grid>
        </Section>

        <Section title="More Form Elements">
          <Stack gap={6}>
            <Field label="Dropdown">
              <Dropdown options={[
                { value: "sm", label: "Small" },
                { value: "md", label: "Medium" },
                { value: "lg", label: "Large" },
              ]} value={dropdownVal} onChange={setDropdownVal} />
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
          </Stack>
        </Section>

        <Section title="Selections">
          <Stack direction="row" gap={12} wrap>
            <Stack gap={3}>
              <p className="text-sm text-muted">Checkbox</p>
              <Checkbox checked={agree} onChange={setAgree} label="I agree to the terms" />
            </Stack>
            <Stack gap={3}>
              <p className="text-sm text-muted">Switch</p>
              <Switch checked={notif} onChange={setNotif} label="Email notifications" />
            </Stack>
            <Stack gap={3}>
              <p className="text-sm text-muted">Radio Group</p>
              <RadioGroup name="plan" value={plan} onChange={setPlan} options={[
                { value: "basic", label: "Basic" },
                { value: "pro", label: "Pro" },
                { value: "max", label: "Max" },
              ]} />
            </Stack>
          </Stack>
        </Section>

        <Section title="Divider & Skeleton">
          <Stack gap={6}>
            <Divider label="OR" />
            <Stack gap={2}>
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
            </Stack>
            <div className="flex items-center gap-3">
              <Skeleton shape="rounded-full" className="size-12" />
              <Stack gap={2} className="flex-1">
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-3 w-2/3" />
              </Stack>
            </div>
          </Stack>
        </Section>

        <Section title="Sample screens">
          <Stack direction="row" gap={4} wrap>
            <Link href="/login" className="block w-[280px] rounded-md border border-line p-4 hover:bg-brand-subtle transition-colors">
              <div className="text-md font-medium text-ink mb-1">Login Sample</div>
              <div className="text-sm text-muted">Logo + Inputs + Button</div>
            </Link>
            <Link href="/home" className="block w-[280px] rounded-md border border-line p-4 hover:bg-brand-subtle transition-colors">
              <div className="text-md font-medium text-ink mb-1">Home Sample</div>
              <div className="text-sm text-muted">Header + Cards + FooterMenu</div>
            </Link>
          </Stack>
        </Section>

        <p className="text-sm text-muted">
          77 React components shipped covering 142 audit specs · see <code className="bg-surface-subtle px-1.5 py-0.5 rounded-xs">COVERAGE.md</code> for the map · explore everything in{" "}
          <a href="https://udvash-ds-storybook.vercel.app" className="text-link underline">Storybook</a>.
        </p>
      </main>

      <div className="fixed bottom-0 inset-x-0 max-w-[1200px] mx-auto">
        <FooterMenu active={tab} onTabChange={setTab} />
      </div>
    </div>
  );
}

function Hero({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
    <section>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Udvash–Unmesh Design System</h1>
          <p className="text-muted text-md md:text-lg max-w-2xl">
            Production design system from Figma V2. 99 tokens · 108+ components · Light/Dark · mobile-first responsive (sm 376 / md 768 / lg 1440) · Inter + Hind Siliguri.
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
