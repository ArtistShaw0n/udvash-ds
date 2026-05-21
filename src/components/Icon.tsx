import type { ReactElement, SVGProps } from "react";
import { cn } from "@/lib/cn";

export type IconName =
  | "bell"
  | "calendar"
  | "chevron-down"
  | "chevron-up"
  | "chevron-left"
  | "chevron-right"
  | "check"
  | "cross"
  | "delete"
  | "eye-on"
  | "eye-off"
  | "kebab"
  | "live-dot"
  | "map-marker"
  | "notification-dot"
  | "play"
  | "pause"
  | "return-arrow"
  | "search"
  | "speech-bubble"
  | "star"
  | "thumb-up"
  | "thumb-down"
  | "home"
  | "user"
  | "menu"
  | "download";

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  size?: number;
};

const paths: Record<IconName, ReactElement> = {
  bell: <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9Zm4 13a2 2 0 0 0 4 0" strokeLinecap="round" strokeLinejoin="round" />,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" /></>,
  "chevron-down": <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />,
  "chevron-up": <polyline points="18 15 12 9 6 15" strokeLinecap="round" strokeLinejoin="round" />,
  "chevron-left": <polyline points="15 18 9 12 15 6" strokeLinecap="round" strokeLinejoin="round" />,
  "chevron-right": <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />,
  check: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />,
  cross: <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />,
  delete: <><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" strokeLinecap="round" /></>,
  "eye-on": <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z" /><circle cx="12" cy="12" r="3" /></>,
  "eye-off": <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.85 19.85 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.5 19.5 0 0 1-2.16 3.19M1 1l22 22M14.12 14.12a3 3 0 1 1-4.24-4.24" strokeLinecap="round" />,
  kebab: <><circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /></>,
  "live-dot": <circle cx="12" cy="12" r="6" fill="currentColor" />,
  "map-marker": <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></>,
  "notification-dot": <circle cx="12" cy="12" r="4" fill="currentColor" />,
  play: <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" />,
  pause: <><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></>,
  "return-arrow": <><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" strokeLinecap="round" /></>,
  search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" /></>,
  "speech-bubble": <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" strokeLinejoin="round" />,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  "thumb-up": <path d="M7 22V11M14 9V5a3 3 0 0 0-6 0v6h-2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11.28a2 2 0 0 0 2-1.7L21 13a2 2 0 0 0-2-2h-5" strokeLinejoin="round" />,
  "thumb-down": <path d="M17 2v11M10 15v4a3 3 0 0 0 6 0v-6h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6.72a2 2 0 0 0-2 1.7L3 11a2 2 0 0 0 2 2h5" strokeLinejoin="round" />,
  home: <path d="m3 12 9-9 9 9M5 10v10h14V10" strokeLinejoin="round" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" strokeLinecap="round" /></>,
  menu: <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />,
  download: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />,
};

export function Icon({ name, size = 24, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("inline-block shrink-0", className)}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
