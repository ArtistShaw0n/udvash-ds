import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StatusDot } from "./StatusDot";

const meta: Meta<typeof StatusDot> = {
  title: "Atoms/StatusDot",
  component: StatusDot,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof StatusDot>;

export const Default: Story = { args: { variant: "live", pulse: true } };

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <StatusDot variant="live" pulse />
      <StatusDot variant="success" />
      <StatusDot variant="warning" />
      <StatusDot variant="error" />
      <StatusDot variant="info" />
      <StatusDot variant="neutral" />
    </div>
  ),
};
