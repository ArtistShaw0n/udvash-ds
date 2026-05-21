import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Alert } from "@/components/Alert";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Pagination } from "@/components/Pagination";
import { Tooltip } from "@/components/Tooltip";
import { Drawer } from "@/components/Drawer";
import { Accordion } from "@/components/Accordion";
import { Chip } from "@/components/Chip";
import { Stepper } from "@/components/Stepper";
import { EmptyState } from "@/components/EmptyState";
import { Stat } from "@/components/Stat";
import { Slider } from "@/components/Slider";
import { Button } from "@/components/Button";

const meta: Meta = {
  title: "More Components/Overview",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Alerts: Story = {
  render: () => (
    <div className="space-y-3 max-w-lg">
      <Alert variant="info" title="Live class starting soon">Class begins in 5 minutes.</Alert>
      <Alert variant="success" title="Downloaded successfully" />
      <Alert variant="warning" title="Service Blocked">Contact your branch coordinator.</Alert>
      <Alert variant="error" title="No internet connection" />
    </div>
  ),
};

export const Breadcrumbs: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Physics", href: "/physics" },
        { label: "অধ্যায়-১" },
      ]}
    />
  ),
};

export const PaginationDemo: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} pageCount={12} onPageChange={setPage} />;
  },
};

export const TooltipDemo: Story = {
  render: () => (
    <div className="flex gap-8 p-8">
      <Tooltip label="Top tooltip" placement="top"><Button size="sm">Top</Button></Tooltip>
      <Tooltip label="Bottom tooltip" placement="bottom"><Button size="sm">Bottom</Button></Tooltip>
      <Tooltip label="Right tooltip" placement="right"><Button size="sm">Right</Button></Tooltip>
    </div>
  ),
};

export const DrawerDemo: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Side Panel" side="right">
          <p className="text-md">Drawer content goes here.</p>
        </Drawer>
      </div>
    );
  },
};

export const AccordionDemo: Story = {
  render: () => (
    <Accordion
      items={[
        { id: "a", title: "What is included?", content: "All chapters + practice exams." },
        { id: "b", title: "Can I download offline?", content: "Yes, downloads work without internet." },
        { id: "c", title: "Refund policy", content: "7-day refund window." },
      ]}
      defaultOpen="a"
    />
  ),
};

export const Chips: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>("Live");
    return (
      <div className="flex flex-wrap gap-2">
        {["Live", "Past", "Upcoming"].map((label) => (
          <Chip key={label} selected={selected === label} onClick={() => setSelected(label)}>
            {label}
          </Chip>
        ))}
        <Chip removable onRemove={() => alert("removed")}>Removable</Chip>
      </div>
    );
  },
};

export const StepperDemo: Story = {
  render: () => (
    <Stepper
      current={1}
      steps={[
        { label: "Account", description: "Set your registration number" },
        { label: "Verify", description: "Enter the OTP" },
        { label: "Password", description: "Create a password" },
        { label: "Done" },
      ]}
    />
  ),
};

export const EmptyStateDemo: Story = {
  render: () => (
    <EmptyState
      title="No downloads yet"
      description="Live class recordings you download will appear here."
      action={<Button>Browse Live Classes</Button>}
      icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" aria-hidden><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" strokeLinecap="round" /></svg>}
    />
  ),
};

export const Stats: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <Stat label="Total Classes" value="124" delta={{ value: "+12 this week", direction: "up" }} />
      <Stat label="Avg Score" value="78%" delta={{ value: "-3%", direction: "down" }} />
      <Stat label="Pending Doubts" value="6" hint="Across all subjects" />
      <Stat label="Streak" value="🔥 14 days" delta={{ value: "Personal best", direction: "neutral" }} />
    </div>
  ),
};

export const SliderDemo: Story = {
  render: () => {
    const [v, setV] = useState(40);
    return <Slider value={v} onChange={setV} label="Playback speed" />;
  },
};
