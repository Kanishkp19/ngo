import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1C3F",
          hover: "#122A57",
          10: "#0A1C3F1A",
        },
        gold: {
          DEFAULT: "#B89C65",
          10: "#B89C651A",
        },
        cream: "#F3ECE0",
        charcoal: "#4A4A4A",
        success: "#3F6B4A",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        hindi: ["var(--font-hindi)", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "4px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(10,28,63,0.06)",
      },
      maxWidth: {
        section: "640px",
      },
      spacing: {
        "section-y": "96px",
        "section-y-mobile": "56px",
      },
    },
  },
  plugins: [],
};

export default config;
