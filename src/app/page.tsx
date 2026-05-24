"use client";

import { useState } from "react";
import {
  Text,
  Button,
  Input,
  Avatar,
  Badge,
  Tag,
  Checkbox,
  Switch,
  Radio,
  Spinner,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SearchBar,
  FormField,
  Alert,
  Toast,
  Tooltip,
  ThemeToggle,
  Header,
  FooterMenu,
  Modal,
  Sheet,
  Tabs,
  Accordion,
  Drawer,
  Logo,
  Stack,
  Grid,
  StatusDot,
  IconChip,
  BackLink,
  ProgressBar,
  Popover,
  Dropdown,
  SegmentedControl,
  Breadcrumb,
  Pagination,
  EmptyState,
  Icon,
  Skeleton,
  Chip,
  Stat,
  Stepper,
  LiveClassCard,
  LiveExamCard,
  PastClassCard,
  MasterClassCard,
  type FooterTab,
} from "@/components";

const footerTabs: FooterTab[] = [
  { id: "home", label: "Home", icon: "LayoutGrid" },
  { id: "downloads", label: "Downloads", icon: "Download" },
  { id: "qa", label: "Q&A", icon: "MessageCircleQuestionMark" },
  { id: "community", label: "Community", icon: "Users" },
];

const accordionItems = [
  { id: "1", title: "What is Udvash-Unmesh?", content: "A coaching platform for HSC students in Bangladesh." },
  { id: "2", title: "How do live classes work?", content: "Live classes stream at scheduled times." },
  { id: "3", title: "Can I download videos?", content: "Yes — past classes are available in Downloads." },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [footerActive, setFooterActive] = useState("home");
  const [tabActive, setTabActive] = useState("live");
  const [segValue, setSegValue] = useState("live");
  const [page, setPage] = useState(3);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="fixed right-4 top-4 z-40">
        <ThemeToggle />
      </div>
      <header className="mb-12">
        <Text size="xs" weight="medium" color="muted" className="uppercase tracking-widest">
          Udvash–Unmesh
        </Text>
        <Text as="h1" size="3xl" weight="semibold" className="mt-2">
          Design System — V2
        </Text>
        <Text color="muted" className="mt-3">
          47 components live — 23 atoms + 13 molecules + 7 organisms + 4 master cards.
          Toggle the theme via the moon/sun button (top-right) to verify light/dark tokens.
        </Text>
      </header>

      <Section title="Master Cards — Phase 2 (LiveClass / LiveExam / PastClass / MasterClass)">
        <div className="grid gap-4 sm:grid-cols-2">
          <LiveClassCard
            subject="Physics"
            chapter="Chapter 7 — Newton's Laws"
            title="Force, Mass & Acceleration — full revision"
            teacher={{ name: "Sazid Ahmed" }}
            scheduledAt="Today, 6:00 PM"
            durationMin={90}
            status="live"
          />
          <LiveExamCard
            subject="Chemistry"
            title="HSC Mock Exam — Organic Chemistry"
            startsAt="Today, 8:00 PM"
            durationMin={60}
            totalMarks={50}
            questions={25}
            status="upcoming"
            onCancel={() => {}}
          />
          <PastClassCard
            subject="Math"
            chapter="Chapter 4 — Quadratic Equations"
            title="Discriminant + nature of roots — full worked examples"
            teacher={{ name: "Miraz Hossain" }}
            date="May 21, 2026"
            durationMin={78}
          />
          <MasterClassCard
            title="Crack HSC Physics — Mechanics in one shot"
            description="3-hour live workshop covering 80% of HSC Mechanics questions."
            tutor={{
              name: "Dr. Sazid Ahmed",
              credential: "BUET alum · 12+ years HSC coaching",
            }}
            scheduledAt="Sat, May 30 · 7 PM"
            durationMin={180}
            seatsLeft={4}
          />
        </div>
      </Section>

      <Section title="Atoms — Skeleton / Chip / Stat / Stepper (Phase 1)">
        <div className="space-y-6">
          <div>
            <Text size="xs" color="muted" className="mb-2 uppercase tracking-widest">
              Skeleton — loading placeholders
            </Text>
            <div className="flex items-start gap-4">
              <Skeleton variant="circle" width={48} height={48} />
              <div className="flex-1 max-w-md space-y-2">
                <Skeleton width="60%" height={14} />
                <Skeleton lines={3} />
              </div>
              <Skeleton variant="rect" width={120} height={80} />
            </div>
          </div>
          <div>
            <Text size="xs" color="muted" className="mb-2 uppercase tracking-widest">
              Chip — selectable pills (Filter / Tab / Language)
            </Text>
            <div className="flex flex-wrap gap-2">
              <Chip variant="filter" selected>Mathematics</Chip>
              <Chip variant="filter">Physics</Chip>
              <Chip variant="filter">Chemistry</Chip>
              <Chip variant="tab">Live</Chip>
              <Chip variant="tab" selected>Past</Chip>
              <Chip variant="language" iconRight="ChevronDown">EN</Chip>
              <Chip iconLeft="Funnel">Filters</Chip>
            </div>
          </div>
          <div>
            <Text size="xs" color="muted" className="mb-2 uppercase tracking-widest">
              Stat — labeled metrics
            </Text>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat icon="CircleCheck" label="Correct" value={9} tone="success" />
              <Stat icon="CircleX" label="Wrong" value={3} tone="error" />
              <Stat icon="Clock" label="Duration" value="45 min" tone="brand" />
              <Stat icon="Trophy" label="Rank" value="#12" tone="warning" hint="of 240" />
            </div>
          </div>
          <div>
            <Text size="xs" color="muted" className="mb-2 uppercase tracking-widest">
              Stepper — numeric +/- input
            </Text>
            <div className="flex items-center gap-4">
              <Stepper defaultValue={1} size="sm" />
              <Stepper defaultValue={2} size="md" />
              <Stepper defaultValue={3} size="lg" />
              <Stepper defaultValue={5} disabled />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Brand — Logo">
        <Stack direction="row" gap={6} align="center">
          <Logo size="sm" />
          <Logo size="md" />
          <Logo size="lg" />
          <Logo size="xl" showBeta />
        </Stack>
      </Section>

      <Section title="Atoms — Layout (Stack / Container / Grid)">
        <Text size="xs" color="muted" className="mb-2">Stack row, gap=3, justify=between</Text>
        <Stack direction="row" justify="between" className="mb-6 rounded-md bg-surface-subtle p-3">
          <Badge variant="brand">A</Badge>
          <Badge variant="brand">B</Badge>
          <Badge variant="brand">C</Badge>
        </Stack>
        <Text size="xs" color="muted" className="mb-2">Grid cols=4, responsive</Text>
        <Grid cols={4} responsive gap={3}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <Card key={n} padding="sm" variant="outlined">
              <Text size="sm" align="center">Cell {n}</Text>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section title="Atoms — StatusDot / IconChip / BackLink / ProgressBar">
        <Stack direction="row" gap={4} align="center" wrap>
          <StatusDot variant="live" pulse />
          <StatusDot variant="success" />
          <StatusDot variant="warning" />
          <StatusDot variant="error" />
          <Divider orientation="vertical" className="h-6" />
          <IconChip name="Play" tone="brand" />
          <IconChip name="CircleCheck" tone="success" />
          <IconChip name="CircleX" tone="error" />
          <IconChip name="TriangleAlert" tone="warning" />
          <IconChip name="Settings" tone="neutral" />
          <Divider orientation="vertical" className="h-6" />
          <BackLink />
        </Stack>
        <div className="mt-6 max-w-md space-y-3">
          <ProgressBar value={30} label="Math chapter progress" showLabel />
          <ProgressBar value={70} variant="success" label="Physics" showLabel />
          <ProgressBar value={45} variant="warning" label="Chemistry" showLabel />
          <ProgressBar value={20} variant="error" label="Biology" showLabel />
        </div>
      </Section>

      <Section title="Molecules — Popover / Dropdown / SegmentedControl">
        <Stack direction="row" gap={3} wrap align="start">
          <Popover trigger={<Button variant="secondary">Open Popover</Button>}>
            <Stack gap={1} className="p-2 min-w-[200px]">
              <Text weight="medium" size="sm">Popover menu</Text>
              <Text size="xs" color="muted">Click outside or Esc to close</Text>
            </Stack>
          </Popover>
          <div className="w-48">
            <Dropdown
              options={[
                { value: "math", label: "Mathematics" },
                { value: "physics", label: "Physics" },
                { value: "chemistry", label: "Chemistry" },
                { value: "biology", label: "Biology", disabled: true },
              ]}
              placeholder="Choose subject"
            />
          </div>
          <SegmentedControl
            options={[
              { value: "live", label: "Live" },
              { value: "past", label: "Past" },
              { value: "upcoming", label: "Upcoming" },
            ]}
            value={segValue}
            onChange={setSegValue}
          />
        </Stack>
      </Section>

      <Section title="Molecules — Breadcrumb / Pagination">
        <Breadcrumb
          items={[
            { label: "Home", href: "#" },
            { label: "Course Content", href: "#" },
            { label: "Physics" },
          ]}
          className="mb-6"
        />
        <Pagination page={page} pageCount={10} onChange={setPage} />
      </Section>

      <Section title="Molecules — EmptyState">
        <Grid cols={2} responsive gap={3}>
          <Card variant="outlined" padding="none">
            <EmptyState
              icon="Inbox"
              title="No items yet"
              description="When you have content, it'll appear here."
            />
          </Card>
          <Card variant="outlined" padding="none">
            <EmptyState
              icon="WifiOff"
              title="No Internet Connection"
              description="Check your network or view offline videos."
              action={<Button iconLeft={<Icon name="Download" size="sm" />}>View Offline</Button>}
            />
          </Card>
        </Grid>
      </Section>

      <Section title="Organisms — Drawer">
        <Button onClick={() => setDrawerOpen(true)}>Open Right Drawer</Button>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Settings">
          <Stack gap={3}>
            <Text size="sm" color="muted">A side panel that slides in from the right.</Text>
            <Switch label="Dark mode" />
            <Switch label="Notifications" defaultChecked />
          </Stack>
        </Drawer>
      </Section>

      <Section title="Responsive — resize the browser">
        <Text size="sm" color="muted" className="mb-4">
          Button/Input/Text default to size=&quot;auto&quot; — they auto-scale by viewport.
          Mobile (&lt;768px) renders sm, tablet (768+) renders md, desktop (1440+)
          renders lg. Try resizing this window or use Chrome DevTools to switch
          between mobile/tablet/desktop preset widths.
        </Text>
        <div className="rounded-md border border-line-subtle bg-surface-subtle p-4">
          <Text size="xs" color="muted" className="mb-2 uppercase tracking-widest">
            Auto-scaling Button + Input
          </Text>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Auto Button</Button>
            <Button variant="secondary">Auto Secondary</Button>
            <Input className="max-w-xs" placeholder="Auto Input" />
          </div>
          <Text size="xs" color="muted" className="mt-4 mb-2 uppercase tracking-widest">
            Responsive heading (size=&quot;3xl&quot; responsive)
          </Text>
          <Text size="3xl" weight="semibold" responsive>
            Heading scales with viewport
          </Text>
          <Text size="xs" color="muted" className="mt-4 mb-2 uppercase tracking-widest">
            Fixed sizes (size=&quot;md&quot;, size=&quot;lg&quot;) — same on all viewports
          </Text>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="md">Fixed md</Button>
            <Button size="lg">Fixed lg</Button>
          </div>
        </div>
      </Section>

      <Section title="Atoms — Text">
        <div className="space-y-2">
          <Text size="3xl" weight="semibold">Heading 3xl</Text>
          <Text size="xl" weight="medium">Heading xl</Text>
          <Text size="lg">Body lg — 16px</Text>
          <Text size="md">Body md — 14px (default)</Text>
          <Text bangla size="lg">উদ্ভাস-উন্মেষ — Bangla via Hind Siliguri</Text>
        </div>
      </Section>

      <Section title="Atoms — Button / Input">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
        <div className="mt-3 max-w-sm space-y-3">
          <Input placeholder="Enter Your Registration Number" />
          <Input invalid defaultValue="invalid value" />
        </div>
      </Section>

      <Section title="Atoms — Avatar / Badge / Tag">
        <div className="flex flex-wrap items-center gap-3">
          <Avatar name="Shawon Ahmed" />
          <Avatar name="Shawon Ahmed" size="lg" />
          <Avatar src="https://i.pravatar.cc/100" alt="image avatar" size="lg" />
          <Badge variant="brand">Brand</Badge>
          <Badge variant="error">3</Badge>
          <Tag variant="brand">HSC 2026</Tag>
          <Tag variant="info">Physics</Tag>
          <Tag variant="brand" onRemove={() => {}}>Removable</Tag>
        </div>
      </Section>

      <Section title="Atoms — Checkbox / Switch / Radio">
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Indeterminate" indeterminate />
          </div>
          <div className="space-y-2">
            <Switch label="Off" />
            <Switch label="On" defaultChecked />
          </div>
          <div className="space-y-2">
            <Radio name="demo" value="a" label="Option A" defaultChecked />
            <Radio name="demo" value="b" label="Option B" />
          </div>
        </div>
      </Section>

      <Section title="Atoms — Spinner / Divider">
        <div className="flex items-center gap-6 text-brand">
          <Spinner size="sm" /> <Spinner size="md" /> <Spinner size="lg" />
        </div>
        <div className="mt-6 max-w-sm">
          <Text size="sm">Above</Text>
          <Divider className="my-3" />
          <Text size="sm">Below</Text>
        </div>
      </Section>

      <Section title="Molecules — Card / SearchBar / FormField">
        <Card className="max-w-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar name="Shawon Ahmed" size="sm" />
              <Text weight="medium">Shawon Ahmed</Text>
            </div>
            <Badge variant="success">Active</Badge>
          </CardHeader>
          <CardBody>
            <Text size="sm" color="muted">Card with header, body, footer slots.</Text>
          </CardBody>
          <CardFooter>
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button size="sm">Confirm</Button>
          </CardFooter>
        </Card>
        <div className="mt-3 max-w-sm space-y-3">
          <SearchBar placeholder="Search subjects" />
          <FormField label="Registration Number" required>
            <Input placeholder="Enter Your Registration Number" />
          </FormField>
          <FormField label="Password" error="Must be at least 8 characters">
            <Input type="password" defaultValue="abc" />
          </FormField>
        </div>
      </Section>

      <Section title="Molecules — Alert / Toast / Tooltip">
        <div className="space-y-3 max-w-md">
          <Alert variant="info" title="Heads up">Your next live class starts at 6 PM.</Alert>
          <Alert variant="error" title="Login failed">Invalid registration number.</Alert>
          <Toast variant="success" title="Saved">Profile updated.</Toast>
        </div>
        <div className="mt-3">
          <Tooltip content="Save your answer"><Button size="sm">Hover me</Button></Tooltip>
        </div>
      </Section>

      <Section title="Organisms — Header / FooterMenu (mobile width 376px)">
        <div className="mx-auto w-[376px] overflow-hidden rounded-md border border-line-subtle">
          <Header
            logo={<Text bangla weight="semibold">উদ্ভাস-উন্মেষ</Text>}
            actions={[{ icon: "Bell", label: "Notifications", badge: 3 }]}
            avatar={{ name: "Shawon Ahmed" }}
          />
          <div className="p-4">
            <Text size="sm" color="muted">↑ Header (376×50, white, shadow-sm)</Text>
            <Text size="sm" color="muted" className="mt-8">↓ FooterMenu (376×66)</Text>
          </div>
          <FooterMenu tabs={footerTabs} activeId={footerActive} onChange={setFooterActive} />
        </div>
      </Section>

      <Section title="Organisms — Tabs / Accordion">
        <Tabs
          items={[
            { id: "live", label: "Live" },
            { id: "past", label: "Past" },
            { id: "upcoming", label: "Upcoming" },
          ]}
          activeId={tabActive}
          onChange={setTabActive}
          className="mb-4"
        />
        <Accordion items={accordionItems} defaultOpen={["1"]} />
      </Section>

      <Section title="Organisms — Modal / Sheet">
        <div className="flex gap-3">
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Button variant="secondary" onClick={() => setSheetOpen(true)}>Open Bottom Sheet</Button>
        </div>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Confirm logout"
          description="You will be returned to the login screen."
        >
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={() => setModalOpen(false)}>Logout</Button>
          </div>
        </Modal>
        <Sheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Filter">
          <div className="space-y-2">
            <Text size="sm" color="muted">Mathematics, Physics, Chemistry, Biology</Text>
            <Checkbox label="Mathematics" />
            <Checkbox label="Physics" defaultChecked />
            <Checkbox label="Chemistry" />
            <div className="flex justify-end gap-2 pt-3">
              <Button variant="ghost" size="sm" onClick={() => setSheetOpen(false)}>Clear</Button>
              <Button size="sm" onClick={() => setSheetOpen(false)}>Apply</Button>
            </div>
          </div>
        </Sheet>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <Text size="xs" weight="medium" color="muted" className="mb-4 uppercase tracking-widest">
        {title}
      </Text>
      {children}
    </section>
  );
}
