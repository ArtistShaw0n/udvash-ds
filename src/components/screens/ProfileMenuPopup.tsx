/*
 * Profile menu popup — Figma V2 node 1:11421 (light) / 1:11817 (dark).
 * With `rollNo` it becomes the "Add Roll No." variant (node 1:34926 / 1:35324):
 * a "Roll No." line is added and everything from divider 1 down shifts +21px;
 * the bubble is 21px taller.
 * Speech-bubble (267×548 / 569) pointing to the header profile icon. Contents:
 *   avatar · name · reg [· roll] · Font Size (S/M/L, M selected) · Mode toggle ·
 *   View Profile / Change Password / Log Out · app version.
 * Positions are popup-relative (Figma frame coord − [103,43]).
 */
function MenuRow({ icon, tint, label, top }: { icon: string; tint: string; label: string; top: number }) {
  return (
    <div className="absolute left-[16px] flex h-[36px] items-center gap-[12px]" style={{ top }}>
      <span className="relative block size-[36px] rounded-[5px]" style={{ backgroundColor: `${tint}1a` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/components/icons/${icon}.svg`} alt="" aria-hidden="true" className="absolute inset-0 size-full" />
      </span>
      <span className="font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]">{label}</span>
    </div>
  );
}

function SizeTab({ letter, left, top, selected }: { letter: string; left: number; top: number; selected?: boolean }) {
  return (
    <span
      className={
        selected
          ? "absolute flex size-[28px] items-center justify-center rounded-[5px] bg-[#6e3f91] font-['Inter',sans-serif] text-[16px] font-medium text-white dark:text-[#e8e8e8]"
          : "absolute flex size-[28px] items-center justify-center rounded-[5px] bg-[#6e3f91]/10 font-['Inter',sans-serif] text-[16px] font-medium text-[#616161] dark:border-[0.2px] dark:border-[#6e3f91] dark:bg-[#221e26] dark:text-[#e8e8e8]"
      }
      style={{ left, top }}
    >
      {letter}
    </span>
  );
}

export function ProfileMenuPopup({ rollNo }: { rollNo?: string }) {
  const shift = rollNo ? 21 : 0;
  const bubble = rollNo ? "popup-bubble-addroll" : "popup-bubble";
  return (
    <div className="absolute left-[103px] top-[43px] w-[267px]" style={{ height: 548 + shift }}>
      {/* bubble background — the SVG carries a built-in shadow margin (4px light / 20px dark),
          so the img bleeds out by that amount to keep the bubble shape exactly 267×(548|569). */}
      <span className="absolute inset-[-4px] block dark:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/components/icons/${bubble}.svg`} alt="" aria-hidden="true" className="block size-full max-w-none" />
      </span>
      <span className="absolute inset-[-20px] hidden dark:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/components/icons/${bubble}-dark.svg`} alt="" aria-hidden="true" className="block size-full max-w-none" />
      </span>

      {/* avatar */}
      <span className="absolute left-1/2 top-[40px] block size-[59px] -translate-x-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/icons/popup-avatar-ring.svg" alt="" aria-hidden="true" className="absolute inset-0 size-full dark:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/icons/popup-avatar-ring-dark.svg" alt="" aria-hidden="true" className="absolute inset-0 hidden size-full dark:block" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/images/popup-avatar.png" alt="Asif Mahmood Ripon" className="absolute left-1/2 top-1/2 size-[57px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover" />
      </span>

      <p className="absolute inset-x-0 top-[113px] text-center font-['Inter',sans-serif] text-[16px] font-semibold text-[#616161] dark:text-[#e8e8e8]">
        Asif Mahmood Ripon
      </p>
      <p className="absolute inset-x-0 top-[138px] text-center font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]">
        Reg. No. 1819361
      </p>
      {rollNo && (
        <p className="absolute inset-x-0 top-[159px] text-center font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]">
          {rollNo}
        </p>
      )}

      {/* divider 1 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-divider.svg" alt="" aria-hidden="true" className="absolute left-[16px] h-px w-[235px] dark:hidden" style={{ top: 175 + shift }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-divider-dark.svg" alt="" aria-hidden="true" className="absolute left-[16px] hidden h-px w-[235px] dark:block" style={{ top: 175 + shift }} />

      {/* Font Size */}
      <span className="absolute left-[16px] font-['Inter',sans-serif] text-[14px] capitalize text-[#616161] dark:text-[#e8e8e8]" style={{ top: 211 + shift }}>Font Size</span>
      <SizeTab letter="S" left={147} top={205 + shift} />
      <SizeTab letter="M" left={185} top={205 + shift} selected />
      <SizeTab letter="L" left={223} top={205 + shift} />

      {/* Mode */}
      <span className="absolute left-[16px] font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]" style={{ top: 268 + shift }}>Mode</span>
      <div className="absolute left-[185px] flex h-[34px] w-[66px] items-center rounded-[17px] border-[0.2px] border-[#eec431] bg-[#fae9b1] px-[3px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:hidden" style={{ top: 259 + shift }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/icons/popup-mode.svg" alt="" aria-hidden="true" className="size-[28px]" />
      </div>
      <div className="absolute left-[185px] hidden h-[34px] w-[66px] dark:block" style={{ top: 259 + shift }}>
        <span className="absolute inset-[-5px] block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/popup-mode-dark.svg" alt="" aria-hidden="true" className="block size-full max-w-none" />
        </span>
      </div>

      {/* divider 2 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-divider.svg" alt="" aria-hidden="true" className="absolute left-[16px] h-px w-[235px] dark:hidden" style={{ top: 313 + shift }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-divider-dark.svg" alt="" aria-hidden="true" className="absolute left-[16px] hidden h-px w-[235px] dark:block" style={{ top: 313 + shift }} />

      {/* menu */}
      <MenuRow icon="popup-viewprofile" tint="#6e3f91" label="View Profile" top={333 + shift} />
      <MenuRow icon="popup-changepw" tint="#00a511" label="Change Password" top={381 + shift} />
      <MenuRow icon="popup-logout" tint="#ff0000" label="Log Out" top={429 + shift} />

      <p className="absolute inset-x-0 text-center font-['Inter',sans-serif] text-[11px] text-[#616161] dark:text-[#e8e8e8]" style={{ top: 515 + shift }}>
        App version: 1.2.5 (Beta)
      </p>
    </div>
  );
}
