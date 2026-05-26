"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Divider } from "../atoms/Divider";
import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type ProfileField = {
  label: string;
  value: React.ReactNode;
  icon?: IconName;
};

export type ProfileCardProps = {
  name: string;
  registrationNo: string | number;
  avatarSrc?: string;
  personalInfo?: ProfileField[];
  contactInfo?: ProfileField[];
  onEdit?: () => void;
  onLogout?: () => void;
  className?: string;
};

/*
 * Figma source: V2 view-profile card (parent 1:9710 light / 1:9715 dark).
 * 360×605 — large card with hero avatar + name + reg-no + edit/logout +
 * Personal Info + Contact Info field lists.
 */
export function ProfileCard({
  name,
  registrationNo,
  avatarSrc,
  personalInfo = [],
  contactInfo = [],
  onEdit,
  onLogout,
  className,
}: ProfileCardProps) {
  return (
    <article
      className={cn(
        "w-full max-w-[360px] rounded-md bg-surface p-4 shadow-card",
        className,
      )}
    >
      <div className="mb-4 flex flex-col items-center text-center">
        <Avatar src={avatarSrc} name={name} size="xl" />
        <h3 className="mt-3 text-lg font-semibold text-primary">{name}</h3>
        <p className="text-sm text-muted">Reg. No. {registrationNo}</p>
        <div className="mt-2 flex gap-2">
          {onEdit && (
            <Button variant="ghost" size="sm" iconLeft={<Icon name="Pencil" size="xs" />} onClick={onEdit}>
              Edit
            </Button>
          )}
          {onLogout && (
            <Button variant="ghost" size="sm" iconLeft={<Icon name="LogOut" size="xs" />} onClick={onLogout}>
              Log out
            </Button>
          )}
        </div>
      </div>

      {personalInfo.length > 0 && (
        <>
          <Divider className="my-4" />
          <p className="mb-2 text-sm font-semibold text-primary">Personal Info</p>
          <FieldList fields={personalInfo} />
        </>
      )}

      {contactInfo.length > 0 && (
        <>
          <Divider className="my-4" />
          <p className="mb-2 text-sm font-semibold text-primary">Contact Info</p>
          <FieldList fields={contactInfo} />
        </>
      )}
    </article>
  );
}

function FieldList({ fields }: { fields: ProfileField[] }) {
  return (
    <dl className="space-y-2">
      {fields.map((f) => (
        <div key={f.label} className="flex items-baseline gap-2 text-sm">
          {f.icon && <Icon name={f.icon} size="xs" className="text-muted" />}
          <dt className="text-muted">{f.label}:</dt>
          <dd className="font-medium text-primary">{f.value ?? "—"}</dd>
        </div>
      ))}
    </dl>
  );
}
