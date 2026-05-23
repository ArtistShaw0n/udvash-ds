"use client";

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
} from "@/components";

export default function Home() {
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
          18 components live — 12 atoms + 6 molecules. Organisms (Header,
          FooterMenu, Cards) and templates next.
        </Text>
      </header>

      <Section title="Atoms — Text">
        <div className="space-y-2">
          <Text size="3xl" weight="semibold">Heading 3xl</Text>
          <Text size="2xl" weight="semibold">Heading 2xl</Text>
          <Text size="xl" weight="medium">Heading xl</Text>
          <Text size="lg">Body lg — 16px</Text>
          <Text size="md">Body md — 14px (default)</Text>
          <Text size="sm" color="muted">Body sm muted — 12px</Text>
          <Text bangla size="lg">উদ্ভাস-উন্মেষ — Bangla via Hind Siliguri</Text>
        </div>
      </Section>

      <Section title="Atoms — Icon">
        <div className="flex flex-wrap items-center gap-4 text-brand">
          <Icon name="Bell" /> <Icon name="User" /> <Icon name="Search" />
          <Icon name="Settings" /> <Icon name="Download" /> <Icon name="MessageSquare" />
          <Icon name="Calendar" /> <Icon name="BookOpen" /> <Icon name="Video" />
        </div>
      </Section>

      <Section title="Atoms — Button">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </div>
      </Section>

      <Section title="Atoms — Input">
        <div className="space-y-3 max-w-sm">
          <Input placeholder="Enter Your Registration Number" />
          <Input invalid defaultValue="invalid value" />
          <Input disabled placeholder="Disabled" />
          <Input iconLeft={<Icon name="Search" size="sm" />} placeholder="Search anything" />
        </div>
      </Section>

      <Section title="Atoms — Avatar / Badge / Tag">
        <div className="flex flex-wrap items-center gap-3">
          <Avatar name="SA" size="xs" />
          <Avatar name="Shawon Ahmed" />
          <Avatar name="Shawon Ahmed" size="lg" />
          <Avatar src="https://i.pravatar.cc/100" alt="image avatar" size="lg" />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Badge variant="brand">Brand</Badge>
          <Badge variant="error">3</Badge>
          <Badge variant="success">Success</Badge>
          <Badge dot variant="error" />
          <Badge dot variant="success" />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Tag variant="brand">HSC 2026</Tag>
          <Tag variant="info">Physics</Tag>
          <Tag variant="success">Completed</Tag>
          <Tag variant="brand" onRemove={() => {}}>Removable</Tag>
        </div>
      </Section>

      <Section title="Atoms — Checkbox / Switch / Radio">
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <Text size="xs" color="muted">Checkbox</Text>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Indeterminate" indeterminate />
            <Checkbox label="Disabled" disabled />
          </div>
          <div className="space-y-2">
            <Text size="xs" color="muted">Switch</Text>
            <Switch label="Off" />
            <Switch label="On" defaultChecked />
            <Switch label="Disabled" disabled />
          </div>
          <div className="space-y-2">
            <Text size="xs" color="muted">Radio</Text>
            <Radio name="demo" value="a" label="Option A" defaultChecked />
            <Radio name="demo" value="b" label="Option B" />
            <Radio name="demo" value="c" label="Disabled" disabled />
          </div>
        </div>
      </Section>

      <Section title="Atoms — Spinner / Divider">
        <div className="flex items-center gap-6 text-brand">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </div>
        <div className="mt-6 w-full max-w-sm">
          <Text size="sm">Above the divider</Text>
          <Divider className="my-3" />
          <Text size="sm">Below the divider</Text>
        </div>
      </Section>

      <Section title="Molecules — Card">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Card variant="elevated"><Text>Elevated</Text></Card>
          <Card variant="outlined"><Text>Outlined</Text></Card>
          <Card variant="filled"><Text>Filled</Text></Card>
        </div>
        <Card className="mt-4 max-w-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar name="Shawon Ahmed" size="sm" />
              <Text weight="medium">Shawon Ahmed</Text>
            </div>
            <Badge variant="success">Active</Badge>
          </CardHeader>
          <CardBody>
            <Text size="sm" color="muted">
              Composed card with header, body, footer slots.
            </Text>
          </CardBody>
          <CardFooter>
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button size="sm">Confirm</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Molecules — SearchBar & FormField">
        <div className="space-y-3 max-w-sm">
          <SearchBar placeholder="Search subjects" />
          <FormField label="Registration Number" required helper="Provided in your enrollment email">
            <Input placeholder="Enter Your Registration Number" />
          </FormField>
          <FormField label="Password" error="Password must be at least 8 characters">
            <Input type="password" defaultValue="abc" />
          </FormField>
        </div>
      </Section>

      <Section title="Molecules — Alert">
        <div className="space-y-3 max-w-md">
          <Alert variant="info" title="Heads up">Your next live class starts at 6 PM.</Alert>
          <Alert variant="success" title="Submitted">Your answer was recorded.</Alert>
          <Alert variant="warning" title="Pending payment" onClose={() => {}}>
            Renew enrollment by tomorrow.
          </Alert>
          <Alert variant="error" title="Login failed">Invalid registration number.</Alert>
        </div>
      </Section>

      <Section title="Molecules — Toast & Tooltip">
        <div className="space-y-3">
          <Toast variant="success" title="Saved">Profile updated.</Toast>
          <Toast variant="error" title="Failed to upload" onClose={() => {}}>
            Try again with a smaller image.
          </Toast>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Tooltip content="Save your answer"><Button>Hover (top)</Button></Tooltip>
          <Tooltip content="Bottom tooltip" placement="bottom"><Button variant="secondary">Hover (bottom)</Button></Tooltip>
          <Tooltip content="Right" placement="right"><Button variant="ghost">Right</Button></Tooltip>
        </div>
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
