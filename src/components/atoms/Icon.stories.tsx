import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4 text-primary">
      <Icon name="Bell" size="xs" />
      <Icon name="Bell" size="sm" />
      <Icon name="Bell" size="md" />
      <Icon name="Bell" size="lg" />
      <Icon name="Bell" size="xl" />
    </div>
  ),
};

export const Gallery: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4 text-primary">
      {([
        "Bell", "Calendar", "Clock", "Eye", "EyeOff", "Search",
        "User", "Users", "House", "BookOpen", "GraduationCap", "Newspaper",
        "Play", "Pause", "Download", "Upload", "Share2", "Settings",
        "Plus", "Minus", "X", "Check", "ChevronRight", "ChevronDown",
      ] as const).map((n) => (
        <div key={n} className="flex flex-col items-center gap-1 text-xs">
          <Icon name={n} size="md" />
          <span className="text-muted">{n}</span>
        </div>
      ))}
    </div>
  ),
};
