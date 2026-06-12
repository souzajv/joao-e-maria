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
    "-bottom-[2.4rem]",
    "-right-[3.6rem]",
    "sm:-bottom-12",
    "sm:-right-[4.2rem]",
    "-top-[1.8rem]",
    "-left-[3.6rem]",
    "sm:-top-10",
    "sm:-left-[4.2rem]",
    "-scale-x-100",
  ],
};

export default config;
