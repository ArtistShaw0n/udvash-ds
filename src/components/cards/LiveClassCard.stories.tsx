import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LiveClassCard } from "./LiveClassCard";

const meta: Meta<typeof LiveClassCard> = {
  title: "Cards/LiveClassCard",
  component: LiveClassCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof LiveClassCard>;

const base = {
  subject: "Physics",
  chapter: "Chapter 7 — Newton's Laws",
  title: "Force, Mass & Acceleration — full revision",
  teacher: { name: "Sazid Ahmed" },
  scheduledAt: "Today, 6:00 PM",
  durationMin: 90,
};

export const Upcoming: Story = { args: { ...base, status: "upcoming" } };
export const Live: Story = { args: { ...base, status: "live" } };
export const Ended: Story = { args: { ...base, status: "ended" } };
export const Loading: Story = { args: { ...base, loading: true } };
