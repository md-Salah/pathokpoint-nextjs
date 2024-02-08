import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/micro-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#ff8200",
          "primary-content": "#f5f5f5",
          secondary: "#e5e7eb",
          "secondary-content": "#9E9E9E",
          accent: "#5F0F40",
          "accent-content": "#EFECEC",
          "base-100": "#f5f5f5",
          "base-200": "#ffffff",
          info: "#1e3a8a",
          success: "#15803d",
          error: "#e11d48",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#ff8200",
          "primary-content": "#f5f5f5",
          secondary: "#15191e",
          "secondary-content": "#757575",
          accent: "#b91c1c",
          "base-100": "#36454F",
          success: "#15803d",
        },
      },
    ],
  },
  darkMode: ["class", '[data-theme="dark"]']
};
export default config;
