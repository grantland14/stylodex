import type { Config } from "tailwindcss";

// Direction: thingtesting.com. White page, near-black type, hairline rules,
// grotesk sans for headings and UI, a serif only for section titles.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#ffffff",
        soft: "#f6f6f4",
        ink: "#18191a",
        body: "#313335",
        muted: "#6e7175",
        rule: "#e3e3e3",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
