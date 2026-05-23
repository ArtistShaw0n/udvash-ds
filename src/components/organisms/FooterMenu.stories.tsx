import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { FooterMenu, type FooterTab } from "./FooterMenu";

const tabs: FooterTab[] = [
  { id: "home", label: "Home", icon: "LayoutGrid" },
  { id: "downloads", label: "Downloads", icon: "Download" },
  { id: "qa", label: "Q&A", icon: "MessageCircleQuestionMark" },
  { id: "community", label: "Community", icon: "Users" },
];

const meta: Meta<typeof FooterMenu> = {
  title: "Organisms/FooterMenu",
  component: FooterMenu,
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof FooterMenu>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState("home");
    return (
      <div className="w-[376px] border border-line-subtle">
        <FooterMenu tabs={tabs} activeId={active} onChange={setActive} />
      </div>
    );
  },
};
