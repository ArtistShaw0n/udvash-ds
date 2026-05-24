import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Sizes: Story = {
  render: () => (
    <div className="space-y-1">
      <Text size="display" weight="semibold">Display 26</Text>
      <Text size="xl" weight="semibold">Heading XL 24</Text>
      <Text size="lg" weight="semibold">Heading LG 20</Text>
      <Text size="md">Body MD 16</Text>
      <Text size="base">Body BASE 14 · Figma default</Text>
      <Text size="sm" color="muted">Caption SM 12</Text>
      <Text size="xs" color="muted">Micro XS 10</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-1">
      <Text weight="regular">Inter Regular — body</Text>
      <Text weight="medium">Inter Medium — emphasis</Text>
      <Text weight="semibold">Inter SemiBold — headings</Text>
      <Text weight="bold">Inter Bold — display</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-1">
      <Text color="primary">primary — body text</Text>
      <Text color="secondary">secondary</Text>
      <Text color="muted">muted — captions</Text>
      <Text color="link">link — anchor</Text>
      <Text color="danger">danger — error message</Text>
      <Text color="success">success</Text>
      <Text color="warning">warning</Text>
      <Text color="info">info</Text>
    </div>
  ),
};

export const Bangla: Story = {
  render: () => (
    <div className="space-y-1">
      <Text size="lg" weight="semibold">উদ্ভাস–উন্মেষ — Bangla heading</Text>
      <Text size="base">ভর্তি পরীক্ষার রোল লিখুন — body text</Text>
    </div>
  ),
};
