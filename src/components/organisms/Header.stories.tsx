import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./Header";
import { Text } from "../atoms/Text";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <div className="w-[376px] border border-line-subtle">
      <Header
        logo={<Text bangla weight="semibold">উদ্ভাস-উন্মেষ</Text>}
        actions={[{ icon: "Bell", label: "Notifications", badge: 3 }]}
        avatar={{ name: "Shawon Ahmed" }}
      />
    </div>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <div className="w-[376px] border border-line-subtle">
      <Header
        title="Live Class"
        actions={[{ icon: "Settings", label: "Settings" }]}
      />
    </div>
  ),
};

export const MultipleActions: Story = {
  render: () => (
    <div className="w-[376px] border border-line-subtle">
      <Header
        title="Downloads"
        actions={[
          { icon: "Search", label: "Search" },
          { icon: "Funnel", label: "Filter" },
        ]}
        avatar={{ name: "SA" }}
      />
    </div>
  ),
};
