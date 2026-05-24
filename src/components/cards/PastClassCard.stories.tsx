import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PastClassCard } from "./PastClassCard";

const meta: Meta<typeof PastClassCard> = {
  title: "Cards/PastClassCard",
  component: PastClassCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof PastClassCard>;

const base = {
  subject: "Math",
  chapter: "Chapter 4 — Quadratic Equations",
  title: "Discriminant + nature of roots — full worked examples",
  teacher: { name: "Miraz Hossain" },
  date: "May 21, 2026",
  durationMin: 78,
};

export const Default: Story = { args: { ...base } };
export const Downloaded: Story = { args: { ...base, downloaded: true } };
export const Loading: Story = { args: { ...base, loading: true } };
