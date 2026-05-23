import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Organisms/Tabs",
  component: Tabs,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const items = [
  { id: "live", label: "Live" },
  { id: "past", label: "Past" },
  { id: "upcoming", label: "Upcoming" },
];

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState("live");
    return <Tabs items={items} activeId={active} onChange={setActive} />;
  },
};

export const FullWidth: Story = {
  render: () => {
    const [active, setActive] = useState("live");
    return (
      <div className="max-w-md">
        <Tabs items={items} activeId={active} onChange={setActive} fullWidth />
      </div>
    );
  },
};
