"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  Button,
  Input,
  Text,
  Icon,
  Stack,
  Container,
  Grid,
  Divider,
  Tag,
  Badge,
  Avatar,
  Checkbox,
  Switch,
  Radio,
  ProgressBar,
  Spinner,
  Skeleton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SearchBar,
  FormField,
  Alert,
  Modal,
  Sheet,
  Toast,
  Tooltip,
  Header,
  FooterMenu,
  Tabs,
  SegmentedControl,
  Popover,
  Dropdown,
  Breadcrumb,
  Pagination,
  EmptyState,
  Accordion,
  Drawer,
  LiveClassCard,
  LiveExamCard,
  PastClassCard,
  MasterClassCard,
  CourseContentCard,
  PerformanceCard,
  PracticeExamCard,
  ProgramListCard,
  SolveSheetCard,
  ProfileCard,
  HomeGridCard,
  SubjectWiseSummaryCard,
  ServiceBlockedCard,
  AddRollCard,
  AnalysisBlockCard,
  AnalysisSolutionCard,
  QnACard,
  AddCourseCard,
  CommunityRowCard,
  DownloadItemCard,
  type FooterTab,
} from "@/components";

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

const footerTabs: FooterTab[] = [
  { id: "home", label: "Home", icon: "House" },
  { id: "downloads", label: "Downloads", icon: "Download" },
  { id: "qa", label: "Q&A", icon: "MessageCircleQuestionMark" },
  { id: "community", label: "Community", icon: "Users" },
];

export default function Page() {
  const [copied, setCopied] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [footerActive, setFooterActive] = useState("home");
  const [tabActive, setTabActive] = useState("live");
  const [segActive, setSegActive] = useState("live");
  const [page, setPage] = useState(3);
  const [drawerOpen, setDrawerOpen] = useState(false);
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
          Udvash–Unmesh · Phase 1 + 2 (complete)
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

      {/* PHASE 2e — Domain cards (all 20) */}
      <Section title="Phase 2e · Domain cards (V2 Figma-referenced — 20 cards)">
        <SubSection title="Class cards — 2e-1">
          <div className="flex flex-wrap gap-4">
            <LiveClassCard
              subject="Physics"
              title="Force, Mass & Acceleration — full revision"
              chapter="Chapter 7 — Newton's Laws"
              teacher={{ name: "Sazid Ahmed" }}
              scheduledAt="Today, 6 PM"
              durationMin={90}
              status="live"
            />
            <LiveExamCard
              subject="Chemistry"
              title="HSC Mock Exam — Organic Chemistry"
              startsAt="Today, 8 PM"
              durationMin={60}
              totalMarks={50}
              questions={25}
              onCancel={() => {}}
            />
            <PastClassCard
              subject="Math"
              chapter="Ch. 4 — Quadratic Equations"
              title="Discriminant & nature of roots — worked examples"
              teacher={{ name: "Miraz Hossain" }}
              date="May 21, 2026"
              durationMin={78}
            />
            <MasterClassCard
              title="Crack HSC Physics — Mechanics in one shot"
              description="3-hour live workshop covering 80% of HSC Mechanics questions."
              tutor={{ name: "Dr. Sazid Ahmed", credential: "BUET alum · 12+ years HSC coaching" }}
              scheduledAt="Sat, May 30 · 7 PM"
              durationMin={180}
              seatsLeft={4}
            />
          </div>
        </SubSection>

        <SubSection title="Course / Performance cards — 2e-2">
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-2">
              <CourseContentCard index={1} title="Motion in one dimension" meta="12 lessons" status="completed" />
              <CourseContentCard index={2} title="Vectors & scalars" meta="8 lessons" status="in-progress" progress={45} />
              <CourseContentCard index={3} title="Newton's first law" meta="6 lessons" onClick={() => {}} />
              <CourseContentCard index={4} title="Work, energy & power" meta="Locked — finish Ch. 3" status="locked" />
            </div>
            <PerformanceCard
              title="Mock Test #4 — Physics"
              score={85}
              maxScore={100}
              rank={{ value: 12, total: 240 }}
              trend="up"
              stats={[
                { label: "Correct", value: 38, tone: "success" },
                { label: "Wrong", value: 7, tone: "danger" },
                { label: "Skipped", value: 5 },
              ]}
              onCta={() => {}}
            />
            <PracticeExamCard
              subject="Biology"
              title="Practice MCQ — Cell Division"
              totalQuestions={40}
              attemptedQuestions={15}
              durationMin={30}
              passingMarks={25}
            />
            <ProgramListCard
              programName="HSC 2026 Final Preparation"
              level="HSC 2026"
              branch="Udvash"
              durationMonths={6}
              subjects={["Physics", "Chemistry", "Math", "Biology", "Bangla", "English"]}
              priceTaka={14500}
              startsAt="Jun 1"
              onDetails={() => {}}
            />
            <SolveSheetCard
              subject="Physics"
              title="HSC Mock #3 — full solve sheet with explanations"
              totalQuestions={75}
              pages={24}
              fileSizeKB={1820}
              uploadedAt="May 22, 2026"
            />
          </div>
        </SubSection>

        <SubSection title="Profile / Home / Misc — 2e-3">
          <div className="flex flex-wrap items-start gap-4">
            <ProfileCard
              name="Asif Mahmood Ripon"
              registrationNo={1819361}
              personalInfo={[
                { label: "Nick", value: "Asif" },
                { label: "Gender", value: "Male" },
                { label: "Religion", value: "Islam" },
                { label: "Group", value: "Science" },
              ]}
              contactInfo={[
                { label: "Mobile", value: "8801713787805" },
                { label: "Email", value: "asif@example.com" },
              ]}
              onEdit={() => {}}
              onLogout={() => {}}
            />
            <div className="flex flex-col gap-2">
              <div className="grid w-[368px] grid-cols-2 gap-2">
                <HomeGridCard icon="GraduationCap" title="Live Class" meta="1 Live, 2 Upcoming" tone="danger" />
                <HomeGridCard icon="PencilLine" title="Live Exam" meta="3 Upcoming" tone="warning" />
                <HomeGridCard icon="Video" title="Past Class" meta="124 saved" tone="info" />
                <HomeGridCard icon="Newspaper" title="Announcements" notification tone="brand" />
              </div>
              <SubjectWiseSummaryCard
                subjects={[
                  { subject: "Physics", attempted: 50, total: 50, correct: 44 },
                  { subject: "Chemistry", attempted: 50, total: 50, correct: 33 },
                  { subject: "Math", attempted: 50, total: 50, correct: 27 },
                  { subject: "Biology", attempted: 50, total: 50, correct: 18 },
                ]}
              />
              <ServiceBlockedCard
                reason="payment"
                primaryAction={{ label: "Renew now", onClick: () => {} }}
                secondaryAction={{ label: "Contact support", onClick: () => {} }}
              />
              <AddRollCard onSubmit={() => {}} />
            </div>
          </div>
        </SubSection>

        <SubSection title="Content / List / Analysis — 2e-4">
          <div className="flex flex-wrap items-start gap-4">
            <AnalysisBlockCard
              heading="Exam Analysis"
              subject="Physics"
              totalScore={72}
              maxScore={100}
              position={{ value: 5 }}
              stats={[
                { label: "Correct", value: 12, icon: "CircleCheck", tone: "success" },
                { label: "Skipped", value: 1, icon: "CircleDashed", tone: "info" },
                { label: "Incorrect", value: 3, icon: "CircleX", tone: "danger" },
                { label: "Neg. Mark", value: 0.75, icon: "CircleAlert", tone: "warning" },
              ]}
              insight="Strong on Mechanics; review Thermodynamics next."
            />
            <div className="flex flex-col gap-3">
              <AnalysisSolutionCard
                questionNo={1}
                question="A 2 kg block slides on a frictionless surface at 5 m/s. What is its kinetic energy?"
                options={[
                  { key: "A", label: "10 J" },
                  { key: "B", label: "25 J" },
                  { key: "C", label: "50 J" },
                  { key: "D", label: "100 J" },
                ]}
                correctKey="B"
                chosenKey="B"
                distribution={{ A: 0.12, B: 0.74, C: 0.10, D: 0.04 }}
                marksAwarded={2}
                marksAvailable={2}
                onExplain={() => {}}
              />
              <AnalysisSolutionCard
                questionNo={2}
                question="Find the resultant of three vectors A=3i, B=4j, C=5k."
                options={[
                  { key: "A", label: "7" },
                  { key: "B", label: "12" },
                  { key: "C", label: "√50 ≈ 7.07" },
                  { key: "D", label: "5√2" },
                ]}
                correctKey="C"
                chosenKey="A"
                marksAwarded={0}
                marksAvailable={3}
                onExplain={() => {}}
              />
            </div>
            <QnACard
              subject="Physics"
              question="Why does the period of a pendulum not depend on its mass? I'm confused about the derivation."
              author={{ name: "Tasnia Akter" }}
              postedAt="2 hours ago"
              answersCount={4}
              upvotes={7}
              hasAcceptedAnswer
              onOpen={() => {}}
              onUpvote={() => {}}
            />
            <div className="flex flex-col gap-2">
              <AddCourseCard variant="with-price" title="Physics — full chapter pack" meta="20 chapters · 12h" priceTaka={2400} selected onToggle={() => {}} />
              <AddCourseCard variant="with-price" title="Chemistry add-on" meta="weekly Q&A" priceTaka={1200} onToggle={() => {}} />
              <AddCourseCard variant="total" title="Total amount" priceTaka={3600} />
            </div>
            <div className="flex flex-col gap-2">
              <CommunityRowCard
                groupName="উদ্ভাস ইঞ্জিনিয়ারিং ব্যাচ '২৫"
                lastSender="Miraz"
                lastMessage="নতুন পদার্থবিজ্ঞান পেপার আপলোড করা হয়েছে"
                time="10:05"
                unreadCount={12}
                onClick={() => {}}
              />
              <CommunityRowCard
                groupName="Physics Study Group"
                lastSender="Sazid"
                lastMessage="see you tomorrow at 6"
                time="Yesterday"
                onClick={() => {}}
              />
              <DownloadItemCard title="Physics — Ch. 4 Quadratic equations" status="downloading" progress={65} fileSizeMB={145.2} onAction={() => {}} />
              <DownloadItemCard title="Chemistry — Organic naming" status="completed" meta="May 21" fileSizeMB={88.4} onAction={() => {}} />
              <DownloadItemCard title="Math — Vectors" status="failed" meta="Network error" onAction={() => {}} />
            </div>
          </div>
        </SubSection>
      </Section>

      {/* PHASE 2d-4 — Misc molecules + organisms */}
      <Section title="Phase 2d-4 · Popover / Dropdown / Breadcrumb / Pagination / EmptyState / Accordion / Drawer">
        <SubSection title="Popover">
          <Popover
            trigger={(triggerProps) => (
              <Button variant="secondary" {...triggerProps}>Open popover</Button>
            )}
          >
            <div className="p-2 text-sm">
              <p className="font-medium">Popover content</p>
              <p className="text-xs text-muted">Click outside or Esc to close.</p>
            </div>
          </Popover>
        </SubSection>
        <SubSection title="Dropdown — Figma node 1:4352">
          <div className="space-y-3">
            <Dropdown
              options={[
                { value: "math", label: "Mathematics" },
                { value: "physics", label: "Physics" },
                { value: "chemistry", label: "Chemistry" },
                { value: "biology", label: "Biology" },
                { value: "english", label: "English", disabled: true },
              ]}
              placeholder="Select a subject"
            />
          </div>
        </SubSection>
        <SubSection title="Breadcrumb">
          <Breadcrumb
            items={[
              { label: "Home", href: "#" },
              { label: "Courses", href: "#" },
              { label: "Physics" },
            ]}
          />
        </SubSection>
        <SubSection title="Pagination">
          <Pagination page={page} pageCount={10} onChange={setPage} />
        </SubSection>
        <SubSection title="EmptyState">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border bg-surface">
              <EmptyState
                icon="Inbox"
                title="No items yet"
                description="When you have content, it'll appear here."
              />
            </div>
            <div className="rounded-md border border-border bg-surface">
              <EmptyState
                icon="WifiOff"
                title="No internet connection"
                description="Check your network or view offline content."
                action={<Button size="sm">View offline</Button>}
              />
            </div>
          </div>
        </SubSection>
        <SubSection title="Accordion">
          <div className="max-w-md">
            <Accordion
              items={[
                { id: "1", title: "What is Udvash-Unmesh?", content: "A coaching platform for HSC students in Bangladesh." },
                { id: "2", title: "How do live classes work?", content: "Live classes stream at scheduled times — join from the Home dashboard." },
                { id: "3", title: "Can I download videos?", content: "Yes — past classes are available in Downloads." },
              ]}
              defaultOpen={["1"]}
            />
          </div>
        </SubSection>
        <SubSection title="Drawer (right side)">
          <Button onClick={() => setDrawerOpen(true)}>Open right drawer</Button>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Settings">
            <div className="space-y-3">
              <Switch label="Notifications" defaultChecked />
              <Switch label="Auto-download" />
              <Switch label="Dark mode" />
            </div>
          </Drawer>
        </SubSection>
      </Section>

      {/* PHASE 2d-3 — Navigation */}
      <Section title="Phase 2d-3 · Header / FooterMenu / Tabs / SegmentedControl">
        <SubSection title="Header — Figma node 1:12014 (376×50 · shadow-header)">
          <div className="rounded-md border border-border p-3">
            <Header
              logo={<span className="text-base font-semibold">উদ্ভাস–উন্মেষ</span>}
              actions={[{ icon: "Bell", label: "Notifications", badge: 3 }]}
              avatar={<Avatar name="Asif Mahmood" size="sm" />}
            />
          </div>
        </SubSection>
        <SubSection title="FooterMenu — Figma node 1:4435 (376×66 · shadow-footer · brand-selected pill)">
          <div className="rounded-md border border-border p-3">
            <FooterMenu tabs={footerTabs} activeId={footerActive} onChange={setFooterActive} />
          </div>
        </SubSection>
        <SubSection title="Tabs — underline + pill variants">
          <div className="space-y-4">
            <div className="w-80">
              <Tabs
                items={[
                  { id: "live", label: "Live" },
                  { id: "past", label: "Past" },
                  { id: "upcoming", label: "Upcoming" },
                ]}
                activeId={tabActive}
                onChange={setTabActive}
                variant="underline"
              />
            </div>
            <Tabs
              items={[
                { id: "live", label: "Live" },
                { id: "past", label: "Past" },
                { id: "upcoming", label: "Upcoming" },
              ]}
              activeId={tabActive}
              onChange={setTabActive}
              variant="pill"
            />
          </div>
        </SubSection>
        <SubSection title="SegmentedControl">
          <SegmentedControl
            options={[
              { value: "live", label: "Live" },
              { value: "past", label: "Past" },
              { value: "upcoming", label: "Upcoming" },
            ]}
            value={segActive}
            onChange={setSegActive}
          />
          <div className="mt-3 w-80">
            <SegmentedControl
              fullWidth
              options={[
                { value: "all", label: "All" },
                { value: "mine", label: "Mine" },
                { value: "saved", label: "Saved" },
              ]}
              value={segActive === "live" ? "all" : segActive}
              onChange={setSegActive}
            />
          </div>
        </SubSection>
      </Section>

      {/* PHASE 2d-2 — Feedback / overlay */}
      <Section title="Phase 2d-2 · Modal / Sheet / Toast / Tooltip">
        <SubSection title="Modal — Figma node 1:32594 (rounded-2xl · backdrop-blur · 328px panel)">
          <Button onClick={() => setModalOpen(true)}>Open modal</Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Revision Settings"
            description="Pick a starting mode and which question statuses to include."
          >
            <p className="text-sm">
              Modal body content. Esc closes; click outside dismisses too.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button onClick={() => setModalOpen(false)}>Start Revision</Button>
            </div>
          </Modal>
        </SubSection>
        <SubSection title="Sheet — bottom sheet (slides up, rounded-top)">
          <Button variant="secondary" onClick={() => setSheetOpen(true)}>Open bottom sheet</Button>
          <Sheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Filter">
            <div className="space-y-2">
              <Checkbox label="Mathematics" />
              <Checkbox label="Physics" defaultChecked />
              <Checkbox label="Chemistry" />
              <Checkbox label="Biology" />
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="ghost" size="sm" onClick={() => setSheetOpen(false)}>Clear</Button>
                <Button size="sm" onClick={() => setSheetOpen(false)}>Apply</Button>
              </div>
            </div>
          </Sheet>
        </SubSection>
        <SubSection title="Toast — transient notification (auto-dismiss)">
          <Button variant="secondary" onClick={() => setShowToast(true)}>Trigger toast</Button>
          {showToast && (
            <div className="fixed bottom-4 right-4 z-50">
              <Toast
                variant="success"
                title="Saved"
                duration={3000}
                onClose={() => setShowToast(false)}
              >
                Profile photo updated successfully.
              </Toast>
            </div>
          )}
          <div className="mt-4 max-w-md space-y-2">
            <Toast variant="info" title="Heads up" duration={0}>Your next live class starts at 6 PM.</Toast>
            <Toast variant="danger" title="Failed" duration={0} onClose={() => {}}>Registration number not found.</Toast>
          </div>
        </SubSection>
        <SubSection title="Tooltip">
          <div className="flex flex-wrap gap-6">
            <Tooltip content="Save your answer"><Button size="sm">Hover top</Button></Tooltip>
            <Tooltip content="From the bottom" placement="bottom"><Button size="sm" variant="secondary">Bottom</Button></Tooltip>
            <Tooltip content="On the right" placement="right"><Button size="sm" variant="ghost">Right</Button></Tooltip>
          </div>
        </SubSection>
      </Section>

      {/* PHASE 2d-1 — Composition essentials */}
      <Section title="Phase 2d-1 · Card / SearchBar / FormField / Alert">
        <SubSection title="Card — Figma node 1:9722 (bg-surface · rounded-lg · shadow-card)">
          <div className="grid grid-cols-3 gap-3">
            <Card variant="elevated">
              <p className="text-sm font-medium">Elevated</p>
              <p className="text-xs text-muted">Figma default</p>
            </Card>
            <Card variant="outlined">
              <p className="text-sm font-medium">Outlined</p>
              <p className="text-xs text-muted">Bordered</p>
            </Card>
            <Card variant="filled">
              <p className="text-sm font-medium">Filled</p>
              <p className="text-xs text-muted">Subtle bg</p>
            </Card>
          </div>
          <div className="mt-3">
            <Card className="w-[328px]">
              <CardHeader>
                <p className="text-sm font-semibold">Mock Exam #4 — Physics</p>
                <Tag variant="success">Live</Tag>
              </CardHeader>
              <CardBody>
                <p className="text-xs text-muted">Starts in 12 minutes · 60 min · 50 marks</p>
              </CardBody>
              <CardFooter>
                <Button size="sm" variant="ghost">Skip</Button>
                <Button size="sm">Join</Button>
              </CardFooter>
            </Card>
          </div>
        </SubSection>

        <SubSection title="SearchBar">
          <div className="max-w-sm">
            <SearchBar placeholder="Search subjects" />
          </div>
        </SubSection>

        <SubSection title="FormField (label + input + required + hint + error)">
          <div className="max-w-sm space-y-3">
            <FormField label="Admission Roll" required>
              <Input placeholder="Enter Admission Roll" />
            </FormField>
            <FormField label="Password" required hint="Must be 8+ characters">
              <Input type="password" />
            </FormField>
            <FormField label="Phone" error="Number is not registered">
              <Input defaultValue="01717000000" />
            </FormField>
          </div>
        </SubSection>

        <SubSection title="Alert">
          <div className="max-w-md space-y-3">
            <Alert variant="info" title="Heads up">Your next live class starts at 6 PM.</Alert>
            <Alert variant="success" title="Saved">Profile photo updated successfully.</Alert>
            <Alert variant="warning" title="Almost full">Only 4 seats left in the Master Class.</Alert>
            <Alert variant="danger" title="Login failed" onClose={() => {}}>Registration number not found.</Alert>
          </div>
        </SubSection>
      </Section>

      {/* PHASE 2c — Form atoms */}
      <Section title="Phase 2c · Form atoms (Checkbox / Switch / Radio / ProgressBar / Spinner / Skeleton)">
        <SubSection title="Checkbox — Figma node 1:5011">
          <Stack direction="row" gap={4} align="center">
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Indeterminate" indeterminate />
            <Checkbox label="Disabled" disabled defaultChecked />
          </Stack>
        </SubSection>
        <SubSection title="Switch">
          <Stack direction="row" gap={4} align="center">
            <Switch label="Off" />
            <Switch label="On" defaultChecked />
            <Switch label="Disabled" disabled defaultChecked />
            <Switch size="sm" defaultChecked label="sm" />
            <Switch size="lg" defaultChecked label="lg" />
          </Stack>
        </SubSection>
        <SubSection title="Radio">
          <Stack direction="row" gap={4} align="center">
            <Radio name="demo" value="a" defaultChecked label="Option A" />
            <Radio name="demo" value="b" label="Option B" />
            <Radio name="demo" value="c" label="Option C" />
            <Radio name="demo" value="d" label="Disabled" disabled />
          </Stack>
        </SubSection>
        <SubSection title="ProgressBar — Figma node 1:32648">
          <div className="max-w-md space-y-3">
            <ProgressBar value={70} variant="brand" label="Brand" showValue />
            <ProgressBar value={88} variant="success" label="Success" showValue />
            <ProgressBar value={45} variant="warning" label="Warning" showValue />
            <ProgressBar value={20} variant="danger" label="Danger" showValue />
          </div>
        </SubSection>
        <SubSection title="Spinner — Figma node 1:10369">
          <Stack direction="row" gap={4} align="end" className="text-brand">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </Stack>
        </SubSection>
        <SubSection title="Skeleton">
          <div className="max-w-md space-y-3">
            <Skeleton variant="circle" width={48} height={48} />
            <Skeleton lines={3} />
            <Skeleton variant="rect" height={80} />
          </div>
        </SubSection>
      </Section>

      {/* PHASE 2b — Layout + Tag + Badge + Avatar */}
      <Section title="Phase 2b · Layout / Tag / Badge / Avatar">
        <SubSection title="Stack — flex helper">
          <Stack direction="row" gap={3} className="rounded-sm bg-subtle p-3">
            <span className="rounded-sm bg-brand px-3 py-1 text-onbrand">A</span>
            <span className="rounded-sm bg-brand px-3 py-1 text-onbrand">B</span>
            <span className="rounded-sm bg-brand px-3 py-1 text-onbrand">C</span>
          </Stack>
          <Stack gap={2} className="mt-3 rounded-sm bg-subtle p-3">
            <span className="rounded-sm bg-brand-subtle px-3 py-1 text-brand">Top</span>
            <span className="rounded-sm bg-brand-subtle px-3 py-1 text-brand">Mid</span>
            <span className="rounded-sm bg-brand-subtle px-3 py-1 text-brand">Bottom</span>
          </Stack>
        </SubSection>

        <SubSection title="Grid — responsive">
          <Grid cols={4} gap={3} responsive>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="rounded-sm bg-brand-subtle px-3 py-4 text-center text-sm font-medium text-brand">
                Cell {n}
              </div>
            ))}
          </Grid>
        </SubSection>

        <SubSection title="Container — app-width 376px (Figma viewport)">
          <Container size="app" className="rounded-sm bg-brand-subtle p-3 text-center text-brand">
            376px max-width container
          </Container>
        </SubSection>

        <SubSection title="Divider">
          <div className="space-y-3">
            <p className="text-sm">Above default</p>
            <Divider />
            <p className="text-sm">Above strong</p>
            <Divider strong />
            <p className="text-sm">Below</p>
            <div className="flex h-6 items-center gap-3 text-sm">
              <span>Left</span>
              <Divider orientation="vertical" />
              <span>Middle</span>
              <Divider orientation="vertical" />
              <span>Right</span>
            </div>
          </div>
        </SubSection>

        <SubSection title="Tag">
          <div className="flex flex-wrap gap-2">
            <Tag variant="neutral">Neutral</Tag>
            <Tag variant="brand">Brand</Tag>
            <Tag variant="info">Physics</Tag>
            <Tag variant="success">Completed</Tag>
            <Tag variant="warning">In progress</Tag>
            <Tag variant="danger">Overdue</Tag>
          </div>
        </SubSection>

        <SubSection title="Badge">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Badge>3</Badge>
              <Badge>{12}</Badge>
              <Badge>{99}</Badge>
              <Badge>{120}</Badge>
              <Badge variant="brand">{5}</Badge>
              <Badge variant="success">{1}</Badge>
            </div>
            <Divider orientation="vertical" className="h-6" />
            <div className="flex items-center gap-2">
              <Badge dot variant="danger" />
              <Badge dot variant="success" />
              <Badge dot variant="warning" />
              <Badge dot variant="brand" />
            </div>
            <Divider orientation="vertical" className="h-6" />
            <div className="relative inline-flex items-center justify-center rounded-sm bg-subtle p-2">
              <Icon name="Bell" size="sm" />
              <span className="absolute -right-0.5 -top-0.5">
                <Badge>{7}</Badge>
              </span>
            </div>
          </div>
        </SubSection>

        <SubSection title="Avatar">
          <div className="flex items-end gap-3">
            <Avatar name="Asif Mahmood" size="xs" />
            <Avatar name="Asif Mahmood" size="sm" />
            <Avatar name="Asif Mahmood" size="md" />
            <Avatar name="Asif Mahmood" size="lg" />
            <Avatar name="Asif Mahmood" size="xl" />
            <Avatar src="https://i.pravatar.cc/200" alt="A" size="lg" />
            <Avatar name="Asif Mahmood" shape="rounded" size="md" />
          </div>
        </SubSection>
      </Section>

      {/* PHASE 2a — Foundation atoms */}
      <Section title="Phase 2a · Foundation atoms (Button / Input / Text / Icon)">
        <SubSection title="Button — Figma node 1:4433">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Browse</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Delete</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Button size="sm">sm</Button>
            <Button size="md">md · Figma</Button>
            <Button size="lg">lg</Button>
            <Button iconLeft={<Icon name="Plus" size="xs" />}>Add</Button>
            <Button iconRight={<Icon name="ArrowRight" size="xs" />}>Continue</Button>
          </div>
        </SubSection>
        <SubSection title="Input — Figma node 1:4360">
          <div className="grid max-w-sm gap-2">
            <Input placeholder="Enter Admission Roll" />
            <Input defaultValue="1819361" />
            <Input invalid defaultValue="bad-roll" />
            <Input disabled defaultValue="Locked" />
            <Input iconLeft={<Icon name="Search" size="sm" />} placeholder="Search subjects" />
          </div>
        </SubSection>
        <SubSection title="Text">
          <div className="space-y-1">
            <Text size="display" weight="semibold">Display 26</Text>
            <Text size="xl" weight="semibold">Heading XL 24</Text>
            <Text size="lg" weight="semibold">Heading LG 20</Text>
            <Text size="md">Body MD 16</Text>
            <Text size="base">Body BASE 14 · Figma default</Text>
            <Text size="sm" color="muted">Caption SM 12</Text>
            <Text size="xs" color="muted">Micro XS 10</Text>
            <Text size="lg" weight="semibold">উদ্ভাস–উন্মেষ — Bangla heading</Text>
          </div>
        </SubSection>
        <SubSection title="Icon">
          <div className="flex items-end gap-4 text-primary">
            <Icon name="Bell" size="xs" />
            <Icon name="Bell" size="sm" />
            <Icon name="Bell" size="md" />
            <Icon name="Bell" size="lg" />
            <Icon name="Bell" size="xl" />
          </div>
        </SubSection>
      </Section>

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
