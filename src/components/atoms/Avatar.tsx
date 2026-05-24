import { cn } from "@/lib/cn";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "rounded";

export type AvatarProps = {
  src?: string;
  alt?: string;
  /** Name used to derive initials when no src is provided. */
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  className?: string;
};

/*
 * Avatar — profile image with initials fallback.
 * Size scale grounded in V2 observations:
 *   xs 24 (inline byline)
 *   sm 28 (header avatar — 7 hits)
 *   md 40 (community row)
 *   lg 60
 *   xl 100 (Profile screen hero)
 */

const sizeClass: Record<AvatarSize, string> = {
  xs: "size-6 text-xs",
  sm: "size-7 text-xs",      // 28px Figma header
  md: "size-10 text-sm",
  lg: "size-15 text-md",
  xl: "size-[100px] text-xl", // 100px Figma profile hero
};

function initials(name?: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  shape = "circle",
  className,
}: AvatarProps) {
  const radius = shape === "circle" ? "rounded-full" : "rounded-md";
  return (
    <span
      role="img"
      aria-label={alt ?? name ?? "Avatar"}
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden bg-brand-subtle font-semibold text-brand",
        sizeClass[size],
        radius,
        className,
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? name ?? ""}
          className="size-full object-cover"
        />
      ) : (
        <span>{initials(name)}</span>
      )}
    </span>
  );
}
