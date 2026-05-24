import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ImageUpload } from "./ImageUpload";

const meta: Meta<typeof ImageUpload> = {
  title: "Molecules/ImageUpload",
  component: ImageUpload,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof ImageUpload>;

export const Empty: Story = {
  args: { label: "Upload student photo", maxSizeBytes: 5 * 1024 * 1024 },
};

export const PreFilled: Story = {
  args: {
    defaultValue: "https://i.pravatar.cc/240",
    label: "Replace photo",
    maxSizeBytes: 5 * 1024 * 1024,
  },
};

export const Disabled: Story = {
  args: { label: "Upload locked", disabled: true },
};
