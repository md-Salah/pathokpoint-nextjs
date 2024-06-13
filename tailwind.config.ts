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
      colors: {
        black02: "#363739",
        black04: "#9B9B9C",
        black05: "#CDCDCD",
        black06: "#E6E6E6",
        black07: "#F2F2F2",
        highlight: "#F2213A",
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FF8200",
          "primary-content": "#FFFFFF",
          "base-content": "#363739",
          secondary: "#2B3440",
          "secondary-content": "#9B9B9C",
          accent: "#b91c1c",
          "base-100": "#f5f5f5",
          "base-200": "#F2F2F2",
          info: "#1e3a8a",
          success: "#02BF6C",
          error: "#F2213A",

          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.25rem"
        },
      },
    ],
    styled: true,
  },
};
export default config;
