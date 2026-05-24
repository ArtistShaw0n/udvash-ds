import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      <Avatar name="Asif Mahmood" size="xs" />
      <Avatar name="Asif Mahmood" size="sm" />
      <Avatar name="Asif Mahmood" size="md" />
      <Avatar name="Asif Mahmood" size="lg" />
      <Avatar name="Asif Mahmood" size="xl" />
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Avatar src="https://i.pravatar.cc/200" alt="Asif" size="xl" />
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex gap-3">
      <Avatar name="Asif Mahmood" shape="rounded" size="md" />
      <Avatar name="Asif Mahmood" shape="rounded" size="lg" />
    </div>
  ),
};
