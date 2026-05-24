import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Switch label="Off" />
      <Switch label="On" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled + on" disabled defaultChecked />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Switch size="sm" defaultChecked label="sm" />
      <Switch size="md" defaultChecked label="md" />
      <Switch size="lg" defaultChecked label="lg" />
    </div>
  ),
};
