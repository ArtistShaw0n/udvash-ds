import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MasterClassCard } from "./MasterClassCard";

const meta: Meta<typeof MasterClassCard> = {
  title: "Cards/MasterClassCard",
  component: MasterClassCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof MasterClassCard>;

const base = {
  title: "Crack HSC Physics — Mechanics in one shot",
  description: "Special 3-hour live workshop covering 80% of HSC Mechanics questions.",
  tutor: {
    name: "Dr. Sazid Ahmed",
    credential: "BUET alum · 12+ years HSC coaching",
  },
  scheduledAt: "Sat, May 30 · 7 PM",
  durationMin: 180,
};

export const Default: Story = { args: { ...base, seatsLeft: 24 } };
export const ScarceSeats: Story = { args: { ...base, seatsLeft: 4 } };
export const Enrolled: Story = { args: { ...base, enrolled: true } };
export const Loading: Story = { args: { ...base, loading: true } };
