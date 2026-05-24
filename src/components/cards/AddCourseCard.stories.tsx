import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { AddCourseCard } from "./AddCourseCard";

const meta: Meta<typeof AddCourseCard> = {
  title: "Cards/AddCourseCard",
  component: AddCourseCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof AddCourseCard>;

export const Standard: Story = {
  args: { variant: "standard", title: "Physics — full chapter pack", onToggle: () => {} },
};
export const WithPrice: Story = {
  args: { variant: "with-price", title: "Chemistry premium add-on", meta: "Includes weekly live Q&A", priceTaka: 1200, onToggle: () => {} },
};
export const Total: Story = {
  args: { variant: "total", title: "Total amount", priceTaka: 14500 },
};
export const Checklist: Story = {
  render: () => {
    const Demo = () => {
      const [picked, setPicked] = useState<Record<string, boolean>>({ phy: true });
      return (
        <div className="flex w-[336px] flex-col gap-2">
          <AddCourseCard
            variant="with-price"
            title="Physics — full chapter pack"
            meta="20 chapters · 12h video"
            priceTaka={2400}
            selected={picked.phy}
            onToggle={(v) => setPicked((s) => ({ ...s, phy: v }))}
          />
          <AddCourseCard
            variant="with-price"
            title="Chemistry add-on"
            meta="weekly Q&A"
            priceTaka={1200}
            selected={picked.chem}
            onToggle={(v) => setPicked((s) => ({ ...s, chem: v }))}
          />
          <AddCourseCard variant="total" title="Total" priceTaka={(picked.phy ? 2400 : 0) + (picked.chem ? 1200 : 0)} />
        </div>
      );
    };
    return <Demo />;
  },
};
