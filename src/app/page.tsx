"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Checkbox,
  Dropdown,
  ProgressBar,
  Tag,
  Logo,
  Card,
  Modal,
  Header,
  FooterMenu,
  LiveClassCard,
  LiveExamCard,
  PastClassCard,
  MasterClassCard,
  CourseContentCard,
  SolveSheetCard,
  PracticeExamCard,
  PerformanceCard,
  ProgramListCard,
  HomeGridCard,
  ServiceBlockedCard,
  ProfileCard,
  AddRollCard,
  SubjectWiseSummaryCard,
  AnalysisBlockCard,
  AnalysisSolutionCard,
  QnACard,
  AddCourseCard,
  CommunityRowCard,
  DownloadItemCard,
  type FooterTab,
} from "@/components";

/* Raw-value component library showcase — 1:1 from Figma V2.
   Phase 1 = only values extracted directly from Figma. Anything that is a
   Figma SVG/image asset (icons, logo, avatars, hero images) is intentionally
   skipped here and will be added in Phase 2. */

const footerTabs: FooterTab[] = [
  { id: "home", label: "Home" },
  { id: "downloads", label: "Downloads" },
  { id: "qa", label: "Q&A" },
  { id: "community", label: "Community" },
];

export default function Page() {
  const [footerActive, setFooterActive] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-widest text-[#999999]">
          Udvash–Unmesh · Master Component Library
        </p>
        <h1 className="mt-2 text-[26px] font-semibold text-[#616161]">1:1 from Figma V2 — raw values</h1>
        <p className="mt-2 text-[14px] text-[#999999]">
          Phase 1 — Figma-extracted values only (icons / logo / images skipped → Phase 2)
        </p>
      </header>

      <Section title="Button — node 1:4433">
        <div className="flex flex-wrap items-center gap-4">
          <Button>Browse</Button>
          <Button>Next</Button>
          <Button disabled>Disabled</Button>
          <div className="w-[280px]"><Button fullWidth>Full width</Button></div>
        </div>
      </Section>

      <Section title="Input — node 1:4360">
        <div className="flex flex-wrap gap-6">
          <Input placeholder="Enter Admission Roll" />
          <Input label="ভর্তি পরীক্ষার রোল" required placeholder="Enter Admission Roll" />
          <Input defaultValue="1819361" />
        </div>
      </Section>

      <Section title="Dropdown — node 1:4352">
        <Dropdown
          label="যে প্রতিষ্ঠানে ভর্তি হয়েছ / ভর্তি হতে যাচ্ছ"
          required
          options={[
            { value: "u", label: "Udvash" },
            { value: "un", label: "Unmesh" },
            { value: "ut", label: "Uttoron" },
          ]}
        />
      </Section>

      <Section title="Checkbox — node 1:5011 (MUI #1976d2)">
        <div className="flex flex-col gap-2">
          <Checkbox label="Start From Beginning" defaultChecked />
          <Checkbox label="Resume From Previous" />
        </div>
      </Section>

      <Section title="ProgressBar — node 1:32648">
        <div className="w-[264px] space-y-3">
          <ProgressBar value={5} />
          <ProgressBar value={45} />
          <ProgressBar value={80} />
        </div>
      </Section>

      <Section title="Tag — node 1:17311">
        <div className="flex items-center gap-3">
          <Tag>বাং</Tag>
          <Tag>EN</Tag>
          <Tag>Live</Tag>
        </div>
      </Section>

      <Section title="Card — node 1:9722">
        <Card className="w-[328px] p-[16px]">
          <p className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#616161]">Card title</p>
          <p className="mt-1 font-['Inter',sans-serif] text-[14px] text-[#999999]">
            bg #ffffff · rounded-[10px] · shadow 0 0 5px rgba(0,0,0,0.1)
          </p>
        </Card>
      </Section>

      <Section title="Logo — Figma node 1:11908 (public/components/logo/logo.svg)">
        <Logo height={30} />
      </Section>

      <Section title="Header — node 1:12014 (right-side icons = Figma assets, skipped)">
        <Header logo={<Logo height={28} />} />
      </Section>

      <Section title="FooterMenu — node 1:4435 (icons = Figma assets, skipped)">
        <FooterMenu tabs={footerTabs} activeId={footerActive} onChange={setFooterActive} />
      </Section>

      <Section title="Modal — node 1:32594">
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Revision Settings">
          <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">
            Modal body — bg #ffffff · rounded-[20px] · w-[328px] · scrim rgba(25,28,29,0.6) blur 4px. (Esc / click outside to close.)
          </p>
          <div className="mt-[16px] flex justify-center">
            <Button onClick={() => setModalOpen(false)}>Start Revision</Button>
          </div>
        </Modal>
      </Section>

      <Section title="Class cards — nodes 1:9602 / 1:8574 / 1:7819 / 1:8518">
        <div className="flex flex-wrap gap-6">
          <LiveClassCard
            type="Phy"
            title="Marathon Live Class Physics-03"
            dateTime="21 Sep, 2025 07:30 PM to 11:00 PM"
            chapter="১ম পত্র অধ্যায়-০৫: কাজ, শক্তি ও ক্ষমতা"
            courseLines={["Varsity 'KA' Online Class Service", "Varsity 'KA' Admission Program 2025"]}
          />
          <LiveExamCard
            title="Varsity KA Weekly MCQ and Written Live Exam W-02"
            dateTime="20 Sep, 2025 11:00 PM to 21 Sep, 2025 11:00 PM"
            duration="1h 45 min"
            courseLines={["Varsity 'KA' Online Exam Service", "Varsity 'KA' Admission Program 2025"]}
            statusNote="You haven't taken the exam yet"
          />
          <PastClassCard
            type="Chemistry"
            title="Engineering Daily MCQ Practice Exam"
            chapter="মৌলের পর্যায়বৃত্ত ধর্ম (পর্যায়বৃত্ত ধর্ম পর্যন্ত)"
            dateTime="20 Sep, 2025 07:30 PM to 11:00 PM"
            courseLines={["Engineering Full Course 2025 [Online]", "Engineering Admission Program (Online) 2025"]}
          />
          <MasterClassCard
            type="Phy-1"
            title="লেকচার - ১"
            topics={[
              "মাত্রা সমীকরণ দ্বারা সমীকরণের শুদ্ধতা যাচাই।",
              "পরিমাপের ত্রুটি",
              "স্ক্রু গজ, ভার্নিয়ার স্কেল, স্ফেরোমিটার ও নিক্তি",
            ]}
          />
        </div>
      </Section>

      <Section title="Course / Performance — nodes 1:8406 / 1:7466 / 1:7599 / 1:6586 / 1:7406">
        <div className="flex flex-wrap gap-6">
          <CourseContentCard title="অধ্যায়-১ : ভৌতজগৎ ও পরিমাপ" onClick={() => {}} />
          <SolveSheetCard
            title="VAP Daily MCQ and Written Live Exam Bio-03 Part-01 and 02"
            courseLines={["Varsity 'KA' Online Exam Service", "Varsity 'KA' Admission Program 2025"]}
          />
          <PracticeExamCard
            title="Engineering Daily MCQ Practice Exam"
            dateTime="20 Sep, 2025 11:00 PM to 21 Sep, 2025 11:00 PM"
            duration="30 min"
            courseLines={["Varsity 'KA' Online Exam Service", "Varsity 'KA' Admission Program 2025"]}
            statusNote="Exam not started yet"
          />
          <PerformanceCard title="Employee Training Program 2021 (Online)" />
          <ProgramListCard title="Engineering Admission Program (Online) 2025" />
        </div>
      </Section>

      <Section title="Profile / Home / Misc — nodes 1:9714 / 1:11095 / 1:6664 / 1:4642 / 1:12549">
        <div className="flex flex-wrap items-start gap-6">
          <div className="grid w-[368px] grid-cols-2 gap-3">
            <HomeGridCard title="Live Class" meta="1 Live, 2 Upcoming" accent="#fc5a5a" onClick={() => {}} />
            <HomeGridCard title="Live Exam" meta="3 Upcoming" accent="#24c182" onClick={() => {}} />
            <HomeGridCard title="Past Class" meta="124 saved" accent="#2496c1" onClick={() => {}} />
            <HomeGridCard title="Announcements" meta="2 New" accent="#8a5ba4" onClick={() => {}} />
          </div>
          <ProfileCard
            name="Asif Mahmood Ripon"
            registrationNo={1819361}
            personalInfo={[
              { label: "Nick Name", value: "Asif" },
              { label: "Gender", value: "Male" },
              { label: "Religion", value: "Islam" },
              { label: "Group" },
              { label: "Date of Birth" },
              { label: "Father's Name" },
              { label: "Mother's Name" },
            ]}
            contactInfo={[
              { label: "Personal Mobile", value: "8801713787805" },
              { label: "Father's Mobile" },
              { label: "Mother's Mobile" },
              { label: "Email" },
            ]}
          />
          <SubjectWiseSummaryCard title="1. MAP Practice Exam OMR Scan" date="Mar 1, 2025" onCta={() => {}} />
          <AddRollCard onCta={() => {}} />
          <ServiceBlockedCard>
            <p className="mb-0 leading-[22px]">প্রিয় Mahfuz,</p>
            <p className="mb-0 leading-[22px]">দুঃখিত! তথ্য সঠিক না হওয়ায় তোমার আবেদনটি Reject করা হয়েছে।</p>
            <p className="leading-[22px]">প্রয়োজনে - 09666775566</p>
          </ServiceBlockedCard>
        </div>
      </Section>

      <Section title="Content / Analysis — nodes 1:5045 / 1:4811 / 1:27678 / 1:16812 / 1:22623 / 1:17305">
        <div className="flex flex-wrap items-start gap-6">
          <div className="grid grid-cols-2 gap-[10px]">
            <AnalysisBlockCard label="Correct" value="12" accent="#00ba00" />
            <AnalysisBlockCard label="Skipped" value="1" accent="#25b7d3" />
            <AnalysisBlockCard label="Incorrect" value="3" accent="#f95959" />
            <AnalysisBlockCard label="Neg. Mark" value="0.75" accent="#f59e0b" />
          </div>
          <AnalysisSolutionCard
            questionNo={1}
            verdict="Correct"
            question="মৌলিক একক হলো- [RU'18-19]"
            optionLines={["(i) কি.গ্রা., মিটার ও সেকেন্ড", "(ii) সেকেন্ড ও ভোল্ট", "(iii) কেলভিন, ক্যান্ডেলা ও নিউটন"]}
            choices={[
              { key: "A", text: "i, iii", state: "correct" },
              { key: "B", text: "ii", state: "wrong" },
              { key: "C", text: "i, ii, iii" },
              { key: "D", text: "i" },
            ]}
            solution="ত্বরণ ধ্রুব বলে, s = ut+1/2 at^2 সমীকরণটি y = ax + bx^2 সমীকরণের অনুরূপ।"
            distribution={[
              { key: "A", percent: "48%" },
              { key: "B", percent: "24%" },
              { key: "C", percent: "14%" },
              { key: "D", percent: "20%" },
            ]}
          />
          <QnACard question="কোন দেশের সংবিধান অলিখিত? কোন দেশের সংবিধান অলিখিত?" hasAttachment />
          <div className="flex w-[360px] flex-col gap-3">
            <AddCourseCard title="UDVASH Varsity Math Course 2025 [Offline]" onToggle={() => {}} />
            <AddCourseCard title="UDVASH Varsity Physics Course 2025 [Online]" checked onToggle={() => {}} />
            <CommunityRowCard
              groupName="উদ্ভাস ইঞ্জিনিয়ারিং ব্যাচ'২৫ (Boys)"
              lastMessage="Miraz (Muhammad Miraz) : তুখোড় ব্..."
              time="10:05 AM"
              unread="100+"
              onClick={() => {}}
            />
            <DownloadItemCard title="HSC Final Revision Class Biology-08" dateTime="Jan 17, 2025, 2:30 PM to 5:00 PM" onLanguageChange={() => {}} />
          </div>
        </div>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-[16px] font-semibold text-[#616161]">{title}</h2>
      {children}
    </section>
  );
}
