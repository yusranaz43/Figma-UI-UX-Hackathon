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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#0b0a40",
        customSky: "#2ac8d4",
        customSeaGreen: "#90e2e8",
        customLightBlue: "rgba(45, 139, 192, 0.75)",
        cSky: "#23A6F0",
        cGreen: "#23856D",
        cOrange: "#E77C40",
        cBlue: "#252B42",
        cRed: "#E74040",
        cDarkSky: "#2A7CC7",
        cLightPurple: "#977DF4",
        cLightWhite: "#FFE9EA",
        cLightSky: "#8EC2F2",
        customHero2: "#23856D",
        customButtonHero2: "#2DC071",
        customGrey: "#BDBDBD",
        customGrey2: "#737373",
      },
    },
  },
  plugins: [],
};
export default config;
