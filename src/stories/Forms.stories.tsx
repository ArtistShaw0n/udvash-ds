import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Dropdown } from "@/components/Dropdown";
import { OTPInput } from "@/components/OTPInput";
import { PhoneInput } from "@/components/PhoneInput";
import { SearchBar } from "@/components/SearchBar";
import { Checkbox } from "@/components/Checkbox";
import { RadioGroup } from "@/components/RadioGroup";
import { Switch } from "@/components/Switch";

const meta: Meta = {
  title: "Form/Overview",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const DropdownDemo: Story = {
  render: () => {
    const [v, setV] = useState<"sm" | "md" | "lg">("md");
    return (
      <Dropdown
        options={[
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
        ]}
        value={v}
        onChange={setV}
      />
    );
  },
};

export const OTPDemo: Story = {
  render: () => {
    const [otp, setOtp] = useState("");
    return <OTPInput length={6} value={otp} onChange={setOtp} />;
  },
};

export const PhoneDemo: Story = {
  render: () => {
    const [phone, setPhone] = useState("");
    return <PhoneInput countryCode="+880" value={phone} onChange={setPhone} />;
  },
};

export const SearchDemo: Story = {
  render: () => {
    const [v, setV] = useState("");
    return (
      <SearchBar
        value={v}
        onChange={(e) => setV(e.target.value)}
        onClear={() => setV("")}
        placeholder="Search courses, chapters…"
      />
    );
  },
};

export const CheckboxDemo: Story = {
  render: () => {
    const [c, setC] = useState(false);
    return <Checkbox checked={c} onChange={setC} label="I agree to the terms" />;
  },
};

export const SwitchDemo: Story = {
  render: () => {
    const [v, setV] = useState(true);
    return <Switch checked={v} onChange={setV} label="Email notifications" />;
  },
};

export const RadioDemo: Story = {
  render: () => {
    const [v, setV] = useState<"basic" | "pro" | "max">("basic");
    return (
      <RadioGroup
        name="plan"
        value={v}
        onChange={setV}
        options={[
          { value: "basic", label: "Basic" },
          { value: "pro", label: "Pro" },
          { value: "max", label: "Max" },
        ]}
      />
    );
  },
};
