import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"] },
    weight: { control: "select", options: ["regular", "medium", "semibold", "bold"] },
    color: {
      control: "select",
      options: ["ink", "muted", "placeholder", "link", "brand", "onbrand", "error", "success", "warning", "info"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "The quick brown fox jumps over the lazy dog." },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Text size="3xl" weight="semibold">Heading 3xl — 30px</Text>
      <Text size="2xl" weight="semibold">Heading 2xl — 24px</Text>
      <Text size="xl" weight="medium">Heading xl — 20px</Text>
      <Text size="lg">Body lg — 16px</Text>
      <Text size="md">Body md — 14px (default)</Text>
      <Text size="sm">Body sm — 12px</Text>
      <Text size="xs">Caption xs — 11px</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-1">
      <Text color="ink">ink — primary text</Text>
      <Text color="muted">muted — secondary text</Text>
      <Text color="placeholder">placeholder — disabled/hint</Text>
      <Text color="link">link — interactive</Text>
      <Text color="brand">brand — emphasis</Text>
      <Text color="error">error — danger</Text>
      <Text color="success">success</Text>
      <Text color="warning">warning</Text>
      <Text color="info">info</Text>
    </div>
  ),
};

export const Bangla: Story = {
  args: { bangla: true, size: "lg", children: "উদ্ভাস-উন্মেষ — Hind Siliguri font" },
};
