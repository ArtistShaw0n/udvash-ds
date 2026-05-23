import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Organisms/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

const items = [
  {
    id: "1",
    title: "What is Udvash-Unmesh?",
    content: "A coaching and education platform for HSC students in Bangladesh.",
  },
  {
    id: "2",
    title: "How do live classes work?",
    content: "Live classes stream at scheduled times. You can join up to 5 minutes early.",
  },
  {
    id: "3",
    title: "Can I download videos?",
    content: "Yes — past classes are available in the Downloads tab.",
  },
];

export const Single: Story = {
  args: { items, defaultOpen: ["1"] },
};

export const Multiple: Story = {
  args: { items, multiple: true, defaultOpen: ["1", "2"] },
};
