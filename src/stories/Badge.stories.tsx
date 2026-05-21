import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@/components/Badge";

const meta: Meta<typeof Badge> = {
  title: "Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["info", "success", "warning", "error", "brand", "neutral"] },
    children: { control: "text" },
  },
  args: { variant: "info", children: "Live" },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Info: Story = {};
export const Success: Story = { args: { variant: "success", children: "Done" } };
export const Warning: Story = { args: { variant: "warning", children: "Warning" } };
export const Error: Story = { args: { variant: "error", children: "In Branch" } };
export const Brand: Story = { args: { variant: "brand", children: "Brand" } };
export const Neutral: Story = { args: { variant: "neutral", children: "Neutral" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="brand">Brand</Badge>
      <Badge variant="info">Live</Badge>
      <Badge variant="success">Done</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">In Branch</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};
