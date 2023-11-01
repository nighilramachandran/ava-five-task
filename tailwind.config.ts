import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "60px",
      l: "34px",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      header: "#FFF",
      default: "#171520",
      primary: "#1B4B66",
      secondary: "#F1F1F1",
      footer: "#1B4B66",
      card: "#C4C4C4",
      emphasis: "#626262",
      danger: "#ff0000",
      yellow: "#facc15",
      gray:"#d1d5db",
      lightText: "#B6B6B6",
      bright: "#FFFFFF",
      divider: "rgba(0, 0, 0, 0.12)",
    },
    extend: {
      spacing: {
        searchInputHeight: "44px",
        searchInputWidth: "362px",
        newsFeedHeight: "50px",
        footerHeight: "342px",
        heroHeight: "350px",
        arCardHeight: "268px",
        arCardWidth: "268px",
        naWrapperHeight: "371px",
        cartCardHeight: "80px",
        cartCardWidth: "75px",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
