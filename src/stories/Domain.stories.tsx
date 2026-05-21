import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { VideoControls } from "@/components/VideoControls";
import { ScoreGauge } from "@/components/ScoreGauge";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { DownloadItem } from "@/components/DownloadItem";
import { FilterChip } from "@/components/FilterChip";
import { Sheet } from "@/components/Sheet";
import { SegmentedControl } from "@/components/SegmentedControl";
import { Popover } from "@/components/Popover";
import { LiveClassCard } from "@/components/LiveClassCard";
import { CourseContentCard } from "@/components/CourseContentCard";
import { PerformanceCard } from "@/components/PerformanceCard";
import { ProfileCard } from "@/components/ProfileCard";
import { LiveExamCard } from "@/components/LiveExamCard";
import { MasterClassCard } from "@/components/MasterClassCard";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

const meta: Meta = {
  title: "Domain/Overview",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const VideoControlsDemo: Story = {
  render: () => {
    const [playing, setPlaying] = useState(false);
    return (
      <div className="bg-gray-900 p-6 rounded-md">
        <VideoControls
          isPlaying={playing}
          onTogglePlay={() => setPlaying(!playing)}
          progress={42}
          time="01:23"
          onSettings={() => alert("settings")}
          onFullscreen={() => alert("fullscreen")}
        />
      </div>
    );
  },
};

export const ScoreGaugeDemo: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <ScoreGauge score="11.5" outOf="15" />
      <ScoreGauge score="78%" />
      <ScoreGauge score={0} outOf={100} />
    </div>
  ),
};

export const ConfirmDialogDemo: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete item</Button>
        <ConfirmDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => { alert("deleted"); setOpen(false); }}
          title="Delete download?"
          message="This file will be removed from your device."
        />
      </div>
    );
  },
};

export const DownloadList: Story = {
  render: () => (
    <div className="space-y-2 max-w-md">
      <DownloadItem title="Physics - Chapter 1" size="48 MB" downloading progress={65} onDelete={() => {}} />
      <DownloadItem title="Math - Chapter 5" size="32 MB" onDelete={() => {}} />
      <DownloadItem title="Chemistry - Past Paper" size="18 MB" onDelete={() => {}} />
    </div>
  ),
};

export const FilterChips: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return (
      <div className="flex gap-2 flex-wrap">
        {["Subject", "Date", "Status", "Difficulty"].map((label) => (
          <FilterChip
            key={label}
            label={label}
            selected={selected === label}
            onClick={() => setSelected(selected === label ? null : label)}
          />
        ))}
      </div>
    );
  },
};

export const SheetDemo: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open sheet</Button>
        <Sheet
          open={open}
          onClose={() => setOpen(false)}
          title="Revision Topics"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Apply</Button>
            </>
          }
        >
          <p className="text-md">
            This is a long sheet with body content. Add as many sections as needed —
            it scrolls when content exceeds the max height.
          </p>
        </Sheet>
      </div>
    );
  },
};

export const SegmentedDemo: Story = {
  render: () => {
    const [value, setValue] = useState("live");
    return (
      <SegmentedControl
        value={value}
        onChange={setValue}
        segments={[
          { value: "live", label: "Live" },
          { value: "past", label: "Past" },
          { value: "upcoming", label: "Upcoming" },
        ]}
      />
    );
  },
};

export const PopoverDemo: Story = {
  render: () => {
    const [res, setRes] = useState("720p");
    return (
      <div className="max-w-[200px]">
        <Popover
          selected={res}
          onSelect={setRes}
          options={[
            { value: "360p", label: "360p" },
            { value: "480p", label: "480p" },
            { value: "720p", label: "720p" },
            { value: "1080p", label: "1080p" },
          ]}
        />
        <p className="mt-3 text-sm text-muted">Selected: {res}</p>
      </div>
    );
  },
};

export const LiveClassCardDemo: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <LiveClassCard
        title="অধ্যায়-১ পদার্থ ও পদার্থের অবস্থা"
        subject="Physics"
        instructor="ড. আব্দুর রহমান"
        schedule="Today · 7:00 PM"
        isLive
        bangla
      />
      <LiveClassCard
        title="Math: Calculus Basics"
        subject="Math"
        instructor="Mr. Hasan"
        schedule="Tomorrow · 5:00 PM"
      />
      <LiveClassCard
        title="Chemistry Recap"
        subject="Chemistry"
        instructor="Ms. Nila"
        schedule="Yesterday · 6:00 PM"
        ended
      />
    </div>
  ),
};

export const CourseContent: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);
    return (
      <div className="space-y-2">
        <CourseContentCard title="অধ্যায়-১ পদার্থ ও পদার্থের অবস্থা" index="01" onClick={() => setExpanded(!expanded)} expanded={expanded} bangla />
        <CourseContentCard title="অধ্যায়-২ ভৌত রাশি ও পরিমাপ" index="02" bangla />
        <CourseContentCard title="অধ্যায়-৩ গতি" index="03" bangla disabled />
      </div>
    );
  },
};

export const PerformanceDemo: Story = {
  render: () => (
    <PerformanceCard
      title="Performance"
      rows={[
        { label: "Total Score", value: <ScoreGauge score="78" outOf="100" /> },
        { label: "Rank", value: "12 / 250" },
        { label: "Accuracy", value: "82%" },
        { label: "Time taken", value: "42m" },
      ]}
      footer={<Button variant="ghost" size="sm" className="w-full">View detailed report</Button>}
    />
  ),
};

export const ProfileDemo: Story = {
  render: () => (
    <ProfileCard
      name="তানজিন রহমান"
      avatarInitials="তা"
      bangla
      rows={[
        { label: "Roll", value: "1234567", icon: <Icon name="user" size={14} /> },
        { label: "Branch", value: "Dhanmondi", icon: <Icon name="map-marker" size={14} /> },
        { label: "Course", value: "HSC 2026" },
      ]}
      footer={<Button size="sm" variant="ghost" className="w-full">Edit Profile</Button>}
    />
  ),
};

export const LiveExamCardDemo: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <LiveExamCard
        title="Physics Mid-term"
        date="12 May 2026"
        duration="60 minutes"
        questionCount={50}
        isLive
        description="Covers chapters 1-5. Make sure you have a stable internet connection."
      />
      <LiveExamCard
        title="Math Quick Test"
        date="15 May 2026"
        duration="30 minutes"
        questionCount={25}
      />
    </div>
  ),
};

export const MasterClassCardDemo: Story = {
  render: () => (
    <MasterClassCard
      title="Master Class — Periodic Table"
      date="10 May 2026"
      duration="2 hours"
    />
  ),
};
