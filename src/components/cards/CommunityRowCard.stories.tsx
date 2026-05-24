import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CommunityRowCard } from "./CommunityRowCard";

const meta: Meta<typeof CommunityRowCard> = {
  title: "Cards/CommunityRowCard",
  component: CommunityRowCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof CommunityRowCard>;

export const Default: Story = {
  args: {
    groupName: "উদ্ভাস ইঞ্জিনিয়ারিং ব্যাচ '২৫ (Boys)",
    lastSender: "Miraz",
    lastMessage: "তুখোড় ব্যাচের জন্য নতুন পদার্থবিজ্ঞান পেপার আপলোড করা হয়েছে",
    time: "10:05",
    unreadCount: 100,
    onClick: () => {},
  },
};
export const Quiet: Story = {
  args: {
    groupName: "Physics Study Group",
    lastSender: "Sazid",
    lastMessage: "see you tomorrow at 6",
    time: "Yesterday",
    onClick: () => {},
  },
};
export const Loading: Story = {
  args: { groupName: "", lastSender: "", lastMessage: "", time: "", loading: true },
};
