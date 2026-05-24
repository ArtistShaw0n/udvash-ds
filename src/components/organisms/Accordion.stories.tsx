import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Organisms/Accordion",
  component: Accordion,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  { id: "1", title: "What is Udvash-Unmesh?", content: "A coaching platform for HSC students in Bangladesh." },
  { id: "2", title: "How do live classes work?", content: "Live classes stream at scheduled times." },
  { id: "3", title: "Can I download videos?", content: "Yes — past classes are available in Downloads." },
];

export const Single: Story = {
  render: () => (
    <div className="w-96">
      <Accordion items={items} defaultOpen={["1"]} />
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-96">
      <Accordion items={items} multiple defaultOpen={["1", "3"]} />
    </div>
  ),
};
