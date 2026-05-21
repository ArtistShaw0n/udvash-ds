import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs } from "@/components/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Segment: Story = {
  args: {
    variant: "segment",
    tabs: [
      { id: "live", label: "Live", content: <p className="text-md text-muted">Currently live classes appear here.</p> },
      { id: "upcoming", label: "Upcoming", content: <p className="text-md text-muted">Upcoming sessions appear here.</p> },
      { id: "past", label: "Past", content: <p className="text-md text-muted">Past recordings appear here.</p> },
    ],
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
    tabs: [
      { id: "notes", label: "Notes", content: <p className="text-md text-muted">Notes content.</p> },
      { id: "quiz", label: "Quiz", content: <p className="text-md text-muted">Quiz content.</p> },
      { id: "doubt", label: "Doubts", content: <p className="text-md text-muted">Doubts content.</p> },
    ],
  },
};
