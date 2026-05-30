/*
 * 1:1 from Figma V2 — node 1:9714 ("view-profile"), light + dark via .dark.
 * Absolute Figma-coord layout (card-relative px) so the card envelope is exact:
 *   avatar 100px ring + 96px photo @ (130,30) · name 16px @ y140 · reg 14px @ y167
 *   divider #cacaca w328 @ (16,204) · "Personal Info" @ (16,234) · fields from y265
 *   "Contact Info" + contact fields below · field pitch 25px (Figma).
 * Raw values, no semantic tokens. Heights derive from field counts (605 for 7+4).
 */

export type ProfileField = { label: string; value?: string };

export type ProfileCardProps = {
  name: string;
  registrationNo: string | number;
  avatarSrc?: string;
  personalInfo?: ProfileField[];
  contactInfo?: ProfileField[];
  className?: string;
};

const PITCH = 25;
const PERSONAL_BASE = 265;

export function ProfileCard({
  name,
  registrationNo,
  avatarSrc,
  personalInfo = [],
  contactInfo = [],
  className,
}: ProfileCardProps) {
  const contactHeadingY = PERSONAL_BASE + personalInfo.length * PITCH + 12;
  const contactBase = contactHeadingY + 31;
  const cardHeight = contactBase + Math.max(contactInfo.length - 1, 0) * PITCH + 47;

  return (
    <article
      className={`relative w-[360px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] ${className ?? ""}`}
      style={{ height: cardHeight }}
    >
      {avatarSrc && (
        <span className="absolute left-1/2 top-[30px] block size-[100px] -translate-x-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/profile-ring.svg" alt="" aria-hidden="true" className="absolute inset-0 size-full" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatarSrc} alt={name} className="absolute left-1/2 top-1/2 size-[96px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full object-cover" />
        </span>
      )}

      <p className="absolute inset-x-0 top-[140px] text-center font-['Inter',sans-serif] text-[16px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        {name}
      </p>
      <p className="absolute inset-x-0 top-[167px] text-center font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Reg. No. {registrationNo}
      </p>

      <div className="absolute left-[16px] top-[204px] h-px w-[328px] bg-[#cacaca]" />

      {personalInfo.length > 0 && (
        <>
          <p className="absolute left-[16px] top-[234px] font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Personal Info</p>
          {personalInfo.map((f, i) => (
            <Field key={f.label} field={f} top={PERSONAL_BASE + i * PITCH} />
          ))}
        </>
      )}
      {contactInfo.length > 0 && (
        <>
          <p className="absolute left-[16px] font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]" style={{ top: contactHeadingY }}>Contact Info</p>
          {contactInfo.map((f, i) => (
            <Field key={f.label} field={f} top={contactBase + i * PITCH} />
          ))}
        </>
      )}
    </article>
  );
}

function Field({ field, top }: { field: ProfileField; top: number }) {
  return (
    <p className="absolute left-[16px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#535353] dark:text-[#e8e8e8]" style={{ top }}>
      {field.label}:{"  "}
      <span className="font-semibold">{field.value ?? "-"}</span>
    </p>
  );
}
