import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Popover } from "./Popover";
import { Button } from "../atoms/Button";

const meta: Meta<typeof Popover> = {
  title: "Molecules/Popover",
  component: Popover,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Popover>;

export const RenderProp: Story = {
  render: () => (
    <Popover
      trigger={(triggerProps) => (
        <Button variant="secondary" {...triggerProps}>Open popover</Button>
      )}
    >
      <div className="p-2 text-sm">
        <p className="font-medium">Popover content</p>
        <p className="text-xs text-muted">Click outside or Esc to close.</p>
      </div>
    </Popover>
  ),
};

export const StaticTrigger: Story = {
  render: () => (
    <Popover trigger={<span className="rounded-sm border border-border px-3 py-1.5 text-sm">Settings</span>}>
      <div className="p-2 text-sm">Settings menu</div>
    </Popover>
  ),
};
