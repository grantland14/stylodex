import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16130f",
        paper: "#faf8f4",
        rule: "#e6e1d8",
        muted: "#6b645a",
        accent: "#1f4d3a",
      },
    },
  },
  plugins: [],
};
export default config;
