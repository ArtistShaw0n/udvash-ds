import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — Registration Form (primary / empty state).
 *   light node 1:15023 · dark node 1:16747 (exact raw values, light + dark via .dark)
 *   frame 376×812 · header 50 · card 360×418 @ (8,150) — absolute Figma-coord layout.
 *   Other Figma state-frames (filled / validation / set-password / congratulations)
 *   are deferred to a later state-pass.
 */
export default function RegisterPage() {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AuthHeader />

      <div className="relative mx-auto mt-[100px] h-[418px] w-[360px] rounded-[20px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <p className="absolute inset-x-0 top-[40px] text-center font-['Inter',sans-serif] text-[26px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
          Registration Form
        </p>
        <p className="absolute inset-x-0 top-[75px] text-center font-['Inter',sans-serif] text-[14px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
          It’s Simple &amp; Easy
        </p>

        <p className="absolute left-[20px] top-[152px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Nick Name</p>
        <div className="absolute left-[20px] top-[177px] flex h-[40px] w-[320px] items-center rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">Enter Your Nick Name</span>
        </div>

        <p className="absolute left-[20px] top-[237px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Mobile Number</p>
        <div className="absolute left-[20px] top-[262px] flex h-[40px] w-[320px] items-center rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">Enter Your Mobile Number</span>
        </div>

        <div className="absolute left-1/2 top-[342px] flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#c6c6c6] px-[30px] py-[8px] dark:bg-[#2c2c2c]">
          <span className="font-['Inter',sans-serif] text-[14px] text-white">Next</span>
        </div>
      </div>
    </main>
  );
}
