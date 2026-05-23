import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Molecules/SearchBar",
  component: SearchBar,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = { args: { placeholder: "Search anything" } };

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <SearchBar size="sm" placeholder="Small" />
      <SearchBar size="md" placeholder="Medium (default)" />
      <SearchBar size="lg" placeholder="Large" />
    </div>
  ),
};

export const WithValue: Story = {
  args: { defaultValue: "Physics chapter 5", onClear: () => {} },
};
