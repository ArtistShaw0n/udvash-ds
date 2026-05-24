import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { Icon } from "./Icon";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Input placeholder="Enter Admission Roll" />
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div className="w-80">
      <Input defaultValue="1819361" />
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Input invalid defaultValue="bad-value" />
      <span className="text-xs text-danger">Registration number not found</span>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <Input disabled defaultValue="Locked" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium · Figma" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Input iconLeft={<Icon name="Search" size="sm" />} placeholder="Search subjects" />
      <Input iconRight={<Icon name="Calendar" size="sm" />} placeholder="Pick a date" />
    </div>
  ),
};
