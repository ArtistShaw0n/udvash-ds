import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: { name: "Play" } };

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="Play" size="xs" />
      <Icon name="Play" size="sm" />
      <Icon name="Play" size="md" />
      <Icon name="Play" size="lg" />
      <Icon name="Play" size="xl" />
    </div>
  ),
};

export const AppIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-6 text-ink">
      <Icon name="Bell" />
      <Icon name="User" />
      <Icon name="Search" />
      <Icon name="Settings" />
      <Icon name="Download" />
      <Icon name="MessageSquare" />
      <Icon name="Calendar" />
      <Icon name="BookOpen" />
      <Icon name="Video" />
      <Icon name="FileText" />
      <Icon name="Award" />
      <Icon name="Users" />
    </div>
  ),
};
