import { Text, Button, Input, Icon } from "@/components";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-12">
        <Text size="xs" weight="medium" color="muted" className="uppercase tracking-widest">
          Udvash–Unmesh
        </Text>
        <Text as="h1" size="3xl" weight="semibold" className="mt-2">
          Design System — V2
        </Text>
        <Text color="muted" className="mt-3">
          Atomic library in progress. Tokens, atoms (Text, Icon, Button, Input)
          are live. Molecules and organisms next.
        </Text>
      </header>

      <Section title="Text">
        <div className="space-y-2">
          <Text size="3xl" weight="semibold">Heading 3xl</Text>
          <Text size="2xl" weight="semibold">Heading 2xl</Text>
          <Text size="xl" weight="medium">Heading xl</Text>
          <Text size="lg">Body lg — 16px</Text>
          <Text size="md">Body md — 14px (default)</Text>
          <Text size="sm" color="muted">Body sm muted — 12px</Text>
          <Text size="xs" color="muted">Caption xs — 11px</Text>
          <Text bangla size="lg">উদ্ভাস-উন্মেষ — Bangla via Hind Siliguri</Text>
        </div>
      </Section>

      <Section title="Icon">
        <div className="flex items-center gap-4 text-ink">
          <Icon name="Play" size="xs" />
          <Icon name="Play" size="sm" />
          <Icon name="Play" size="md" />
          <Icon name="Play" size="lg" />
          <Icon name="Play" size="xl" />
        </div>
        <div className="mt-4 flex items-center gap-4 text-brand">
          <Icon name="Bell" />
          <Icon name="User" />
          <Icon name="Search" />
          <Icon name="Settings" />
          <Icon name="Download" />
          <Icon name="MessageSquare" />
        </div>
      </Section>

      <Section title="Button — variants">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </Section>

      <Section title="Button — sizes (mobile / tablet / desktop)">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Button size="md" iconLeft={<Icon name="Play" size="sm" />}>Start Class</Button>
          <Button size="md" variant="secondary" iconRight={<Icon name="ArrowRight" size="sm" />}>Next</Button>
        </div>
      </Section>

      <Section title="Input">
        <div className="space-y-3">
          <Input placeholder="Enter Your Registration Number" />
          <Input size="sm" placeholder="Small input" />
          <Input size="lg" placeholder="Large input" />
          <Input invalid placeholder="Invalid state" defaultValue="invalid value" />
          <Input disabled placeholder="Disabled" />
          <Input
            iconLeft={<Icon name="Search" size="sm" />}
            placeholder="Search anything"
          />
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
