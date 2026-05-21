import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { FooterMenu, type FooterTab } from "@/components/FooterMenu";

const meta: Meta<typeof FooterMenu> = {
  title: "Navigation/FooterMenu",
  component: FooterMenu,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FooterMenu>;

export const Default: Story = {
  render: () => {
    const [tab, setTab] = useState<FooterTab>("home");
    return (
      <div className="w-full max-w-[480px] mx-auto border border-line rounded-md">
        <FooterMenu active={tab} onTabChange={setTab} />
      </div>
    );
  },
};

export const AllActiveStates: Story = {
  render: () => (
    <div className="space-y-4">
      {(["home", "downloads", "qa", "community"] as FooterTab[]).map((t) => (
        <div key={t} className="w-full max-w-[480px] mx-auto">
          <p className="text-sm text-muted mb-1">Active: {t}</p>
          <FooterMenu active={t} />
        </div>
      ))}
    </div>
  ),
};
