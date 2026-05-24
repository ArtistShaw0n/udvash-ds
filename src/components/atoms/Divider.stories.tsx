import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-80 space-y-3 text-sm">
      <p>Above</p>
      <Divider />
      <p>Below</p>
    </div>
  ),
};

export const Strong: Story = {
  render: () => (
    <div className="w-80 space-y-3 text-sm">
      <p>Above</p>
      <Divider strong />
      <p>Below (strong divider)</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-6 items-center gap-3 text-sm">
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Middle</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};
