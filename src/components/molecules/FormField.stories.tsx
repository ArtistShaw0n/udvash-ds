import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";
import { Input } from "../atoms/Input";

const meta: Meta<typeof FormField> = {
  title: "Molecules/FormField",
  component: FormField,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <FormField label="Registration Number" helper="Provided in your enrollment email">
      <Input placeholder="Enter Your Registration Number" />
    </FormField>
  ),
};

export const Required: Story = {
  render: () => (
    <FormField label="Phone" required>
      <Input type="tel" placeholder="+880" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField
      label="Password"
      error="Password must be at least 8 characters"
    >
      <Input type="password" defaultValue="abc" />
    </FormField>
  ),
};
