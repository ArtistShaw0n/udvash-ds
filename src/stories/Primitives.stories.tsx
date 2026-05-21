import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon, type IconName } from "@/components/Icon";
import { Stack } from "@/components/Stack";
import { Container } from "@/components/Container";
import { Grid } from "@/components/Grid";
import { Text, type TextStyle } from "@/components/Typography";
import { Logo } from "@/components/Logo";
import { Tag } from "@/components/Tag";

const meta: Meta = {
  title: "Primitives/Overview",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

const ICON_NAMES: IconName[] = [
  "bell", "calendar", "chevron-down", "chevron-up", "chevron-left", "chevron-right",
  "check", "cross", "delete", "eye-on", "eye-off", "kebab", "live-dot", "map-marker",
  "notification-dot", "play", "pause", "return-arrow", "search", "speech-bubble",
  "star", "thumb-up", "thumb-down", "home", "user", "menu", "download",
];

export const Icons: Story = {
  render: () => (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {ICON_NAMES.map((name) => (
        <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-md border border-line-subtle bg-surface">
          <Icon name={name} size={24} className="text-ink" />
          <span className="text-xs text-muted truncate w-full text-center">{name}</span>
        </div>
      ))}
    </div>
  ),
};

const TEXT_STYLES: TextStyle[] = [
  "display-lg", "heading-md", "heading-md-small",
  "body-lg", "body-lg-regular", "body-md", "body-md-strong",
  "body-sm", "body-sm-medium", "body-xs",
  "data-md", "data-sm", "button-md", "button-sm",
];

export const Typography: Story = {
  render: () => (
    <div className="space-y-3">
      {TEXT_STYLES.map((v) => (
        <div key={v} className="flex items-baseline gap-4 pb-2 border-b border-line-subtle">
          <span className="w-40 text-xs text-muted font-mono">{v}</span>
          <Text variant={v}>The quick brown fox jumps over the lazy dog</Text>
        </div>
      ))}
      <div className="flex items-baseline gap-4 pt-2">
        <span className="w-40 text-xs text-muted font-mono">bangla</span>
        <Text variant="heading-md" bangla>অধ্যায়-১ পদার্থ ও পদার্থের অবস্থা</Text>
      </div>
    </div>
  ),
};

export const LogoSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-x-6 flex items-center">
        <Logo size="sm" />
        <Logo size="md" />
        <Logo size="lg" />
      </div>
      <div className="space-x-6 flex items-center">
        <Logo size="sm" variant="icon" />
        <Logo size="md" variant="icon" />
        <Logo size="lg" variant="icon" />
      </div>
    </div>
  ),
};

export const Layout: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted mb-2">Stack — vertical, gap 3</p>
        <Stack gap={3} className="bg-surface-subtle p-3 rounded-md">
          <div className="bg-brand-subtle p-2 rounded-sm">Item 1</div>
          <div className="bg-brand-subtle p-2 rounded-sm">Item 2</div>
          <div className="bg-brand-subtle p-2 rounded-sm">Item 3</div>
        </Stack>
      </div>
      <div>
        <p className="text-sm text-muted mb-2">Stack — horizontal, gap 4, items center</p>
        <Stack direction="row" gap={4} align="center" className="bg-surface-subtle p-3 rounded-md">
          <div className="bg-brand-subtle p-2 rounded-sm">A</div>
          <div className="bg-brand-subtle p-4 rounded-sm">B (taller)</div>
          <div className="bg-brand-subtle p-2 rounded-sm">C</div>
        </Stack>
      </div>
      <div>
        <p className="text-sm text-muted mb-2">Grid — 2 cols on mobile, 4 on md+</p>
        <Grid cols={2} mdCols={4} gap={3}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className="bg-brand-subtle p-3 rounded-sm text-center">{n}</div>
          ))}
        </Grid>
      </div>
      <div>
        <p className="text-sm text-muted mb-2">Container — lg max-width</p>
        <Container size="lg" className="bg-surface-subtle py-3">
          <p className="text-md text-ink">Contained content with responsive padding</p>
        </Container>
      </div>
    </div>
  ),
};

export const Tags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>EN</Tag>
      <Tag>BN</Tag>
      <Tag variant="brand" selected>Selected</Tag>
      <Tag variant="muted">Disabled</Tag>
      <Tag size="sm">Small</Tag>
    </div>
  ),
};
