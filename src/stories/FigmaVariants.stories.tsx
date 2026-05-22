import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import {
  BadgeLive, BadgeLiveCyan, BadgeHighest, BadgeLowest,
  BadgeBranchRed, BadgeBranchSmall, BadgePastClass, BadgeDate,
  BadgeSizeS, BadgeSizeM, BadgeSizeL,
  ButtonNextMedium, ButtonNextMini, ButtonPlayOffline, ButtonWidePrimary,
  TagCountryCode, TagLanguageContainer, TagTabChipNarrow, TagTabChipWide,
  VideoTabBar,
  InFrameHeaderLight, InFrameHeaderAuth, InFrameHeaderReg, InFrameHeaderAlt,
  CardTagShort, CardTagSingle, CardTagDouble, CardViewProfile,
  CardProfileSubcardRow1, CardProfileSubcardRow2, CardCommunitySearchAvatar,
  CardCourseContentVariant19, CardCourseContentVariant20,
  DownloadStatus,
  Icon,
} from "@/components";

const meta: Meta = {
  title: "Figma Variants/Faithful 1:1",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const BadgesFromFigma: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <BadgeLive /><BadgeLiveCyan /><BadgeHighest /><BadgeLowest />
        <BadgeBranchRed /><BadgeBranchSmall /><BadgePastClass />
        <BadgeDate>12 May</BadgeDate>
      </div>
      <div className="flex items-center gap-2">
        <BadgeSizeS />
        <BadgeSizeM selected />
        <BadgeSizeL />
      </div>
    </div>
  ),
};

export const ButtonsFromFigma: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <ButtonNextMedium />
      <ButtonNextMini />
      <ButtonPlayOffline />
      <ButtonWidePrimary />
      <ButtonWidePrimary disabled>Disabled</ButtonWidePrimary>
    </div>
  ),
};

export const TagsFromFigma: Story = {
  render: () => {
    const [lang, setLang] = useState("EN");
    return (
      <div className="space-y-3">
        <TagCountryCode code="+880" countryName="Bangladesh" />
        <TagLanguageContainer
          languages={[
            { code: "EN", selected: lang === "EN" },
            { code: "BN", selected: lang === "BN" },
          ]}
          onSelect={setLang}
        />
        <div className="flex gap-2">
          <TagTabChipNarrow label="Doubt" icon={<Icon name="speech-bubble" size={12} />} />
          <TagTabChipNarrow label="Quiz" icon={<Icon name="thumb-up" size={12} />} active />
        </div>
        <TagTabChipWide label="Past Recordings" icon={<Icon name="play" size={14} />} active />
      </div>
    );
  },
};

export const VideoTabBarDemo: Story = {
  render: () => {
    const [active, setActive] = useState<"video" | "notes" | "quiz" | "doubt">("video");
    return (
      <VideoTabBar
        active={active}
        onChange={setActive}
        badges={{ notes: true, doubt: true }}
      />
    );
  },
};

export const HeaderVariants: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);
    return (
      <div className="space-y-2 max-w-[376px]">
        <p className="text-xs text-muted">Light (main app)</p>
        <InFrameHeaderLight notificationCount={3} avatarInitials="AM" />
        <p className="text-xs text-muted">Auth (login/signup)</p>
        <InFrameHeaderAuth isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
        <p className="text-xs text-muted">Reg (registration flow)</p>
        <InFrameHeaderReg title="Step 2 of 5" />
        <p className="text-xs text-muted">Alt (modal/section)</p>
        <InFrameHeaderAlt title="Filter" onClose={() => {}} />
      </div>
    );
  },
};

export const TagCards: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <CardTagShort
        title="Subjects"
        tags={[
          { label: "Physics", selected: true }, { label: "Chemistry" },
          { label: "Math" }, { label: "Biology" },
        ]}
      />
      <CardTagSingle
        title="Pick a topic"
        description="Choose one topic to focus on this week."
        tags={[
          { label: "Mechanics" }, { label: "Thermodynamics", selected: true },
          { label: "Optics" }, { label: "Waves" }, { label: "Electricity" },
        ]}
      />
      <CardTagDouble
        title="Filters"
        sectionA={{
          heading: "Subject",
          tags: [{ label: "Physics", selected: true }, { label: "Math" }],
        }}
        sectionB={{
          heading: "Difficulty",
          tags: [{ label: "Easy" }, { label: "Medium", selected: true }, { label: "Hard" }],
        }}
      />
    </div>
  ),
};

export const ViewProfile: Story = {
  render: () => (
    <CardViewProfile
      name="তানজিন রহমান"
      bangla
      avatarInitials="তা"
      rows={[
        { label: "Roll No.", value: "1234567", icon: <Icon name="user" size={14} /> },
        { label: "Branch", value: "Dhanmondi", icon: <Icon name="map-marker" size={14} /> },
        { label: "Course", value: "HSC 2026" },
        { label: "Joined", value: "Jan 2025", icon: <Icon name="calendar" size={14} /> },
        { label: "Email", value: "tanjin@example.com" },
        { label: "Phone", value: "+880 1XXX XXXXXX" },
      ]}
    />
  ),
};

export const ProfileSubcards: Story = {
  render: () => (
    <div className="space-y-2">
      <CardProfileSubcardRow1 label="Class" value="HSC" icon={<Icon name="user" size={14} />} />
      <CardProfileSubcardRow1 label="Roll No." value="1234567" />
      <CardProfileSubcardRow2 label="Updated" value="2 days ago" />
      <CardProfileSubcardRow2 label="Synced" value="Just now" />
    </div>
  ),
};

export const CommunitySearch: Story = {
  render: () => (
    <div className="space-y-1">
      <CardCommunitySearchAvatar name="Hasan Ahmed" meta="Online" />
      <CardCommunitySearchAvatar name="তানজিন রহমান" meta="Last seen 2h ago" bangla />
      <CardCommunitySearchAvatar name="Sara K." meta="Offline" />
    </div>
  ),
};

export const CourseContentVariants: Story = {
  render: () => (
    <div className="space-y-3">
      <CardCourseContentVariant19
        title="অধ্যায়-১ পদার্থ"
        index="01"
        meta="Last opened 3 days ago · 12/26 watched"
        progress={45}
        bangla
      />
      <CardCourseContentVariant20
        title="অধ্যায়-২ ভেক্টর"
        index="02"
        meta="Completed · score 18/20"
        progress={100}
        bangla
      />
    </div>
  ),
};

export const DownloadStatuses: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <DownloadStatus progress={0} label="Queued" />
      <DownloadStatus progress={35} />
      <DownloadStatus progress={75} />
      <DownloadStatus progress={100} label="Done" />
    </div>
  ),
};
