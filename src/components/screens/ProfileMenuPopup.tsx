/*
 * Profile menu popup — Figma V2 node 1:11421 (light) / 1:11817 (dark).
 * Speech-bubble (267×548) pointing to the header profile icon. Contents:
 *   avatar · name · reg · Font Size (S/M/L, M selected) · Mode toggle ·
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

function SizeTab({ letter, left, selected }: { letter: string; left: number; selected?: boolean }) {
  return (
    <span
      className={
        selected
          ? "absolute top-[205px] flex size-[28px] items-center justify-center rounded-[5px] bg-[#6e3f91] font-['Inter',sans-serif] text-[16px] font-medium text-white dark:text-[#e8e8e8]"
          : "absolute top-[205px] flex size-[28px] items-center justify-center rounded-[5px] bg-[#6e3f91]/10 font-['Inter',sans-serif] text-[16px] font-medium text-[#616161] dark:border-[0.2px] dark:border-[#6e3f91] dark:bg-[#221e26] dark:text-[#e8e8e8]"
      }
      style={{ left }}
    >
      {letter}
    </span>
  );
}

export function ProfileMenuPopup() {
  return (
    <div className="absolute left-[103px] top-[43px] h-[548px] w-[267px]">
      {/* bubble background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-bubble.svg" alt="" aria-hidden="true" className="absolute inset-0 size-full dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-bubble-dark.svg" alt="" aria-hidden="true" className="absolute inset-0 hidden size-full dark:block" />

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

      {/* divider 1 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-divider.svg" alt="" aria-hidden="true" className="absolute left-[16px] top-[175px] w-[235px] dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-divider-dark.svg" alt="" aria-hidden="true" className="absolute left-[16px] top-[175px] hidden w-[235px] dark:block" />

      {/* Font Size */}
      <span className="absolute left-[16px] top-[211px] font-['Inter',sans-serif] text-[14px] capitalize text-[#616161] dark:text-[#e8e8e8]">Font Size</span>
      <SizeTab letter="S" left={147} />
      <SizeTab letter="M" left={185} selected />
      <SizeTab letter="L" left={223} />

      {/* Mode */}
      <span className="absolute left-[16px] top-[268px] font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]">Mode</span>
      <div className="absolute left-[185px] top-[259px] flex h-[34px] w-[66px] items-center rounded-[17px] border-[0.2px] border-[#eec431] bg-[#fae9b1] px-[3px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/icons/popup-mode.svg" alt="" aria-hidden="true" className="size-[28px]" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-mode-dark.svg" alt="" aria-hidden="true" className="absolute left-[185px] top-[259px] hidden h-[34px] w-[66px] dark:block" />

      {/* divider 2 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-divider.svg" alt="" aria-hidden="true" className="absolute left-[16px] top-[313px] w-[235px] dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/popup-divider-dark.svg" alt="" aria-hidden="true" className="absolute left-[16px] top-[313px] hidden w-[235px] dark:block" />

      {/* menu */}
      <MenuRow icon="popup-viewprofile" tint="#6e3f91" label="View Profile" top={333} />
      <MenuRow icon="popup-changepw" tint="#00a511" label="Change Password" top={381} />
      <MenuRow icon="popup-logout" tint="#ff0000" label="Log Out" top={429} />

      <p className="absolute inset-x-0 top-[515px] text-center font-['Inter',sans-serif] text-[11px] text-[#616161] dark:text-[#e8e8e8]">
        App version: 1.2.5 (Beta)
      </p>
    </div>
  );
}
