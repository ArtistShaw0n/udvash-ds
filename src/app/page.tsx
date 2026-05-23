"use client";

import { useState } from "react";
import {
  Text,
  Button,
  Input,
  Icon,
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
  Header,
  FooterMenu,
  Modal,
  Sheet,
  Tabs,
  Accordion,
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
  const [footerActive, setFooterActive] = useState("home");
  const [tabActive, setTabActive] = useState("live");

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <Text size="xs" weight="medium" color="muted" className="uppercase tracking-widest">
          Udvash–Unmesh
        </Text>
        <Text as="h1" size="3xl" weight="semibold" className="mt-2">
          Design System — V2
        </Text>
        <Text color="muted" className="mt-3">
          24 components live — 12 atoms + 6 molecules + 6 organisms. Templates
          and screen-level pages next.
        </Text>
      </header>

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
