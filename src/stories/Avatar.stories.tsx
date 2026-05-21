import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "@/components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    initials: { control: "text" },
    src: { control: "text" },
  },
  args: { size: "md", initials: "AM" },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {};
export const WithImage: Story = {
  args: { src: "https://i.pravatar.cc/100", alt: "Sample person" },
};
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm" initials="A" />
      <Avatar size="md" initials="AM" />
      <Avatar size="lg" initials="AMR" />
    </div>
  ),
};
