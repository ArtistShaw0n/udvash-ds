import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Counts: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge>3</Badge>
      <Badge>{12}</Badge>
      <Badge>{99}</Badge>
      <Badge>{120}</Badge>
      <Badge variant="brand">{5}</Badge>
      <Badge variant="success">{1}</Badge>
    </div>
  ),
};

export const Dots: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge dot variant="danger" />
      <Badge dot variant="success" />
      <Badge dot variant="warning" />
      <Badge dot variant="brand" />
    </div>
  ),
};

export const OnIcon: Story = {
  render: () => (
    <div className="relative inline-flex items-center justify-center rounded-full bg-subtle p-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-primary">
        <path d="M10 2a6 6 0 00-6 6v3l-2 2v1h16v-1l-2-2V8a6 6 0 00-6-6zM8 17a2 2 0 004 0H8z" />
      </svg>
      <span className="absolute -right-0.5 -top-0.5">
        <Badge>{7}</Badge>
      </span>
    </div>
  ),
};
