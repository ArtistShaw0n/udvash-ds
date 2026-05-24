import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
import { Icon } from "./Icon";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: "Browse" } };

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium · Figma</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button iconLeft={<Icon name="Plus" size="xs" />}>Add</Button>
      <Button iconRight={<Icon name="ArrowRight" size="xs" />}>Continue</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button fullWidth>Full-width primary</Button>
    </div>
  ),
};
