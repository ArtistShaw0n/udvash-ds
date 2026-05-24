import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DownloadItemCard } from "./DownloadItemCard";

const meta: Meta<typeof DownloadItemCard> = {
  title: "Cards/DownloadItemCard",
  component: DownloadItemCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof DownloadItemCard>;

const base = {
  title: "Physics — Chapter 4 — Quadratic equations",
  fileSizeMB: 145.2,
  onAction: () => {},
};

export const Downloading: Story = { args: { ...base, status: "downloading", progress: 65 } };
export const Completed: Story = { args: { ...base, status: "completed", meta: "May 21" } };
export const Failed: Story = { args: { ...base, status: "failed", meta: "Network error" } };
export const Queued: Story = { args: { ...base, status: "queued", meta: "Position 3" } };
export const Loading: Story = { args: { ...base, status: "queued", loading: true } };
