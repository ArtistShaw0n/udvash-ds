import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { SolveSheetCard } from "@/components/SolveSheetCard";
import { ProgramListCard } from "@/components/ProgramListCard";
import { PositionLabel } from "@/components/PositionLabel";
import { TotalRow } from "@/components/TotalRow";
import { PhotoPicker } from "@/components/PhotoPicker";
import { ImageUpload } from "@/components/ImageUpload";
import { SubjectWiseSummary } from "@/components/SubjectWiseSummary";
import { AnalysisSolutionCard } from "@/components/AnalysisSolutionCard";
import { BackLink } from "@/components/BackLink";
import { AddRollCard } from "@/components/AddRollCard";
import { MCQRow } from "@/components/MCQRow";
import { Button } from "@/components/Button";

const meta: Meta = {
  title: "Domain/Batch 3",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const SolveSheet: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <SolveSheetCard
        title="Math Solve Sheet 1"
        score="42/50"
        total={25}
        correct={20}
        status="highest"
      />
      <SolveSheetCard
        title="Physics Solve Sheet 3"
        score="18/50"
        total={25}
        correct={9}
        status="lowest"
        size="sm"
      />
    </div>
  ),
};

export const ProgramList: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ProgramListCard
        title="HSC 2026 Premium"
        subtitle="Physics · Chemistry · Math"
        description="Comprehensive coverage with live + recorded sessions, past paper analysis, and weekly assessments."
      />
      <ProgramListCard
        title="Engineering Admission"
        subtitle="BUET · IUT · KUET"
        description="Specialized prep for engineering entrance with mock tests and personal mentoring."
        enrolled
      />
    </div>
  ),
};

export const Position: Story = {
  render: () => (
    <div className="space-y-2">
      <PositionLabel position={5} />
      <PositionLabel position="12 / 250" />
      <PositionLabel position={1} prefix="Rank:" />
    </div>
  ),
};

export const Totals: Story = {
  render: () => (
    <div className="w-[280px] p-4 bg-surface rounded-md border border-line">
      <MCQRow letter="A" letterVariant="success" label="MCQ" score="10/15" />
      <MCQRow letter="B" letterVariant="info" label="Short Answer" score="8/10" />
      <MCQRow letter="C" letterVariant="warning" label="Long Answer" score="5/10" />
      <TotalRow total="23/35" />
    </div>
  ),
};

export const PhotoPickerDemo: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Change Photo</Button>
        <PhotoPicker
          open={open}
          onClose={() => setOpen(false)}
          onTakePhoto={() => { alert("camera"); setOpen(false); }}
          onUploadFromGallery={() => { alert("gallery"); setOpen(false); }}
        />
      </div>
    );
  },
};

export const ImageUploadDemo: Story = {
  render: () => {
    const [src, setSrc] = useState<string | undefined>(undefined);
    return (
      <div className="flex gap-3">
        <ImageUpload imageSrc={src} onSelect={(f) => setSrc(URL.createObjectURL(f))} onRemove={() => setSrc(undefined)} />
        <ImageUpload loading />
        <ImageUpload error label="Upload failed" />
        <ImageUpload disabled label="Locked" />
      </div>
    );
  },
};

export const SubjectWise: Story = {
  render: () => (
    <SubjectWiseSummary
      subject="Physics"
      score="11.5"
      outOf="15"
      position={5}
      breakdown={[
        { label: "MCQ", value: 10, total: 15 },
        { label: "Short Answer", value: 7, total: 10 },
        { label: "Numerical", value: 5, total: 10 },
      ]}
    />
  ),
};

export const AnalysisSolution: Story = {
  render: () => (
    <AnalysisSolutionCard
      solutionText="Apply the chain rule: d/dx[f(g(x))] = f'(g(x)) · g'(x). Here g(x) = x² so g'(x) = 2x, and f'(u) = cos(u), giving the final answer cos(x²) · 2x."
    />
  ),
};

export const BackLinkDemo: Story = {
  render: () => (
    <div className="space-y-2">
      <BackLink href="#" label="Return to Chapter" />
      <BackLink href="#" label="Back to Course" />
    </div>
  ),
};

export const AddRoll: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 max-w-md">
      <AddRollCard label="Class" defaultValue="11" />
      <AddRollCard label="Section" defaultValue="A" />
      <AddRollCard label="Roll No." defaultValue="1234567" />
      <AddRollCard label="Branch" placeholder="Dhanmondi" />
    </div>
  ),
};
