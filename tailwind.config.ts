import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/micro-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ff8200",
          "primary-content": "#f5f5f5",
          secondary: "#374151",
          "secondary-content": "#f5f5f5",
          accent: "#b91c1c",
          neutral: "#ff8200",
          "neutral-content": "#f5f5f5",
          "base-100": "#f5f5f5",
          "base-200": "#ffffff",
          info: "#1e3a8a",
          success: "#15803d",
          warning: "#fcd34d",
          error: "#e11d48",
        },
      },
    ],
  },
};
export default config;
