import type { Preview } from '@storybook/nextjs-vite'
import "../src/app/globals.css";
import { Inter, Hind_Siliguri } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "#FFFFFF" },
        { name: "dark", value: "#1A1A1A" },
        { name: "page-dark", value: "#111111" },
      ],
    },
    a11y: { test: "todo" },
  },
  globalTypes: {
    theme: {
      description: "Color scheme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      const theme = ctx.globals.theme === "dark" ? "dark" : "";
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
      return (
        <div className={`${inter.variable} ${hindSiliguri.variable} bg-surface text-ink min-h-screen p-6`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
