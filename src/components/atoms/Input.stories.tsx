import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { Icon } from "./Icon";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Enter Your Registration Number" } };

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium (default)" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <Input placeholder="Default" />
      <Input invalid defaultValue="invalid value" />
      <Input disabled placeholder="Disabled" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <Input iconLeft={<Icon name="Search" size="sm" />} placeholder="Search anything" />
      <Input iconRight={<Icon name="Eye" size="sm" />} placeholder="Password" type="password" />
    </div>
  ),
};
