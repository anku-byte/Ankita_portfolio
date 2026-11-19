import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // User custom palette: #15370D, #728E6D, #E5CD82
        forest: {
          DEFAULT: "#15370D",
          dark: "#0E2508",
          deep: "#091705",
          light: "#204E14",
        },
        sage: {
          DEFAULT: "#728E6D",
          dark: "#577252",
          light: "#8FA88A",
          muted: "#A9BAA5",
        },
        gold: {
          DEFAULT: "#E5CD82",
          light: "#F4E5B3",
          dark: "#CDB05F",
          pale: "#FAF5E4",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
