import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — Already Registered (message screen).
 *   light node 1:14811 · dark node 1:14970 (exact raw values, light + dark via .dark)
 *   frame 376×812 · header 50 · card 360×277 @ (8,150) — absolute Figma-coord layout.
 *   Login button uses brand #55347b (enabled) -> dark #9061c8. Text "Your are
 *   already registered." reproduced verbatim from Figma (incl. its typo).
 */
export default function AlreadyRegisteredPage() {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AuthHeader />

      <div className="relative mx-auto mt-[100px] h-[277px] w-[360px] rounded-[20px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <p className="absolute inset-x-0 top-[40px] text-center font-['Inter',sans-serif] text-[26px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
          Already Registered!
        </p>

        <div className="absolute inset-x-0 top-[91px] text-center font-['Inter',sans-serif]">
          <p className="text-[14px] leading-[20px] text-[#616161] dark:text-[#e8e8e8]">
            Dear <span className="font-bold">Asif,</span>
          </p>
          <p className="text-[14px] leading-[10px]">&nbsp;</p>
          <p className="text-[14px] leading-[20px] text-[#616161] dark:text-[#e8e8e8]">Your are already registered.</p>
          <p className="text-[14px] leading-[20px] text-[#616161] dark:text-[#e8e8e8]">
            Your registration number is{" "}
            <span className="text-[16px] font-bold text-[#55347b] dark:text-[#9061c8]">1819361</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/components/icons/copy.svg" alt="" aria-hidden="true" className="ml-[4px] inline-block h-[15.5px] w-[15.5px] align-middle dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/components/icons/copy-dark.svg" alt="" aria-hidden="true" className="ml-[4px] hidden h-[15.5px] w-[15.5px] align-middle dark:inline-block" />
          </p>
        </div>

        <div className="absolute left-1/2 top-[201px] flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] px-[30px] py-[8px] dark:bg-[#9061c8]">
          <span className="font-['Inter',sans-serif] text-[14px] text-white">Login</span>
        </div>
      </div>
    </main>
  );
}
