import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#faf6f4",
        card: "#fffdfa",
        primary: {
          DEFAULT: "#7b2d3b",
          light: "#a64d5e",
          dark: "#5c2230",
        },
        body: "#475569",
        gold: {
          DEFAULT: "#eab308",
          muted: "rgba(234, 179, 8, 0.8)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        card: "0 20px 25px -5px rgba(123, 45, 59, 0.08)",
      },
    },
  },
  plugins: [],
  safelist: [
    "-bottom-8",
    "-right-12",
    "sm:-bottom-10",
    "sm:-right-14",
    "-top-6",
    "-left-12",
    "sm:-top-8",
    "sm:-left-14",
    "-bottom-8",
    "-left-12",
    "sm:-bottom-10",
    "sm:-left-14",
    "-top-6",
    "-right-12",
    "sm:-top-8",
    "sm:-right-14",
    "-scale-x-100",
  ],
};

export default config;
