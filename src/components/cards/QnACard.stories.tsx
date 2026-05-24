import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { QnACard } from "./QnACard";

const meta: Meta<typeof QnACard> = {
  title: "Cards/QnACard",
  component: QnACard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof QnACard>;

const base = {
  subject: "Physics",
  question: "Why does the period of a pendulum not depend on its mass? I'm confused about the derivation.",
  author: { name: "Tasnia Akter" },
  postedAt: "2 hours ago",
  answersCount: 4,
  upvotes: 7,
  onOpen: () => {},
  onUpvote: () => {},
};

export const Open: Story = { args: { ...base } };
export const Resolved: Story = { args: { ...base, hasAcceptedAnswer: true } };
export const Loading: Story = { args: { ...base, loading: true } };
