import { BrandLogo } from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";

/*
 * organisms/app-header — Figma V2 auth screens (light 1:11906 · dark 1:12155). 376×50.
 *   light: bg #ffffff · shadow 0 1px 4px rgba(0,0,0,0.06)
 *   dark:  bg #1a1a1a · shadow 0 0 20px #000
 *   logo left-[12px] top-[10px] (144×30) · theme-toggle left-[336px] top-[11px] (28×28)
 */
export function AuthHeader() {
  return (
    <header className="relative h-[50px] w-[376px] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.06)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
      <BrandLogo height={30} className="absolute left-[12px] top-[10px]" />
      <ThemeToggle className="absolute left-[336px] top-[11px]" />
    </header>
  );
}
