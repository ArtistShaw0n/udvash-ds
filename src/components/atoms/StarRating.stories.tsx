import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { StarRating } from "./StarRating";

const meta: Meta<typeof StarRating> = {
  title: "Atoms/StarRating",
  component: StarRating,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof StarRating>;

export const ReadOnly: Story = { args: { value: 4, readOnly: true } };
export const Interactive: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState(3);
      return (
        <div className="flex flex-col items-center gap-2">
          <StarRating value={v} onChange={setV} />
          <span className="text-sm text-muted">{v} / 5</span>
        </div>
      );
    };
    return <Demo />;
  },
};
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2">
      <StarRating value={4} size="sm" readOnly />
      <StarRating value={4} size="md" readOnly />
      <StarRating value={4} size="lg" readOnly />
    </div>
  ),
};
