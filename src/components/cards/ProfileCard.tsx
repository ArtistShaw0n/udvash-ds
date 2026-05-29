/*
 * 1:1 from Figma V2 — node 1:9714 ("view-profile")
 * Raw values, no semantic tokens:
 *   card:   bg #ffffff · rounded-[10px] · shadow 0 0 4px rgba(255,255,255,0.25)
 *   avatar: 96px circle, centered
 *   name:   Inter SemiBold 16px #616161, centered
 *   reg:    Inter Regular 14px #616161, centered
 *   divider line, then "Personal Info" / "Contact Info" 14px semibold #616161
 *   rows:   "Label:  " Inter Regular 14px #535353 · value Inter SemiBold 14px #535353
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

export function ProfileCard({
  name,
  registrationNo,
  avatarSrc,
  personalInfo = [],
  contactInfo = [],
  className,
}: ProfileCardProps) {
  return (
    <article
      className={`w-[360px] rounded-[10px] bg-white p-[16px] shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] ${className ?? ""}`}
    >
      <div className="flex flex-col items-center">
        <span className="size-[96px] overflow-hidden rounded-full bg-[#e4eaf4]">
          {avatarSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarSrc} alt={name} className="size-full object-cover" />
          )}
        </span>
        <p className="mt-[12px] text-center font-['Inter',sans-serif] text-[16px] font-semibold text-[#616161]">
          {name}
        </p>
        <p className="text-center font-['Inter',sans-serif] text-[14px] text-[#616161]">
          Reg. No. {registrationNo}
        </p>
      </div>

      <div className="my-[16px] h-px w-full bg-[#e5e7eb]" />

      {personalInfo.length > 0 && (
        <div className="mb-[16px]">
          <p className="mb-[8px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">Personal Info</p>
          <FieldRows fields={personalInfo} />
        </div>
      )}
      {contactInfo.length > 0 && (
        <div>
          <p className="mb-[8px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">Contact Info</p>
          <FieldRows fields={contactInfo} />
        </div>
      )}
    </article>
  );
}

function FieldRows({ fields }: { fields: ProfileField[] }) {
  return (
    <div className="flex flex-col gap-[6px]">
      {fields.map((f) => (
        <p key={f.label} className="font-['Inter',sans-serif] text-[14px] text-[#535353]">
          {f.label}:{"  "}
          <span className="font-semibold">{f.value ?? "-"}</span>
        </p>
      ))}
    </div>
  );
}
