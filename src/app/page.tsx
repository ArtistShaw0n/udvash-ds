"use client";

import { useState } from "react";
import { House, Download, MessageCircleQuestionMark, Users, Bell } from "lucide-react";
import {
  Button,
  Input,
  Checkbox,
  Dropdown,
  ProgressBar,
  Spinner,
  Tag,
  Card,
  Modal,
  Header,
  FooterMenu,
  LiveClassCard,
  LiveExamCard,
  PastClassCard,
  MasterClassCard,
  type FooterTab,
} from "@/components";

/* Raw-value component library showcase — 1:1 from Figma V2.
   Grows batch by batch as components are rebuilt. */

const footerTabs: FooterTab[] = [
  { id: "home", label: "Home", icon: <House size={20} /> },
  { id: "downloads", label: "Downloads", icon: <Download size={20} /> },
  { id: "qa", label: "Q&A", icon: <MessageCircleQuestionMark size={20} /> },
  { id: "community", label: "Community", icon: <Users size={20} /> },
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
        <h1 className="mt-2 text-[26px] font-semibold text-[#616161]">
          1:1 from Figma V2 — raw values
        </h1>
        <p className="mt-2 text-[14px] text-[#999999]">Batch R1 (atoms) + R2 (structural) + R3 (class cards)</p>
      </header>

      <Section title="Class cards — R3 (nodes 1:9602 / 1:8574 / 1:7819 / 1:8518)">
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

      <Section title="Spinner — node 1:10369">
        <Spinner />
      </Section>

      <Section title="Tag — node 1:17311">
        <div className="flex items-center gap-3">
          <Tag>বাং</Tag>
          <Tag>EN</Tag>
          <Tag color="#55347b">Live</Tag>
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

      <Section title="Header — node 1:12014">
        <Header
          logo={<span className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#55347b]">উদ্ভাস–উন্মেষ</span>}
          right={
            <>
              <Bell size={24} color="#616161" />
              <span className="flex size-[28px] items-center justify-center rounded-full bg-[#55347b] text-[12px] text-white">AR</span>
            </>
          }
        />
      </Section>

      <Section title="FooterMenu — node 1:4435">
        <FooterMenu tabs={footerTabs} activeId={footerActive} onChange={setFooterActive} />
      </Section>

      <Section title="Modal — node 1:32594">
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Revision Settings">
          <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">
            Modal body — bg #ffffff · rounded-[20px] · w-[328px] · scrim rgba(25,28,29,0.6) blur 4px.
          </p>
          <div className="mt-[16px] flex justify-center">
            <Button onClick={() => setModalOpen(false)}>Start Revision</Button>
          </div>
        </Modal>
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
