import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MeritRankings } from "./MeritRankings";

const meta: Meta<typeof MeritRankings> = {
  title: "Molecules/MeritRankings",
  component: MeritRankings,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof MeritRankings>;

export const Default: Story = {
  args: {
    rows: [
      { position: 1, name: "Tasnia Akter", score: 96 },
      { position: 2, name: "Sazid Ahmed", score: 94 },
      { position: 3, name: "Miraz Hossain", score: 91 },
      { position: 4, name: "Riya Sultana", score: 88 },
      { position: 12, name: "Asif Mahmood Ripon", score: 76, isCurrentUser: true },
    ],
  },
};

export const Loading: Story = { args: { rows: [], loading: true } };
