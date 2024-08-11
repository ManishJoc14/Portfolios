import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        "primary-light": "#233554",
      },
      boxShadow: {
        "primary-shadow": "4px 4px 0 0 #64ffda",
      },
      keyframes: {
        // top
        hamburgerOpenTop: {
          "0%": { top: "0", transform: "rotate(0)", width: "100%" },
          "100%": { top: "0.5rem", transform: "rotate(315deg)", width: "100%" },
        },
        hamburgerCloseTop: {
          "100%": { top: "0", transform: "rotate(0)", width: "100%" },
          "0%": { top: "0.5rem", transform: "rotate(315deg)", width: "100%" },
        },
        // middle
        hamburgerOpenMiddle: {
          "0%": { transform: "scaleX(1)", opacity: "1" },
          "100%": { transform: "scaleX(0)", opacity: "0" },
        },
        hamburgerCloseMiddle: {
          "100%": { transform: "scaleX(1)", opacity: "1" },
          "0%": { transform: "scaleX(0)", opacity: "0" },
        },
        // bottom
        hamburgerOpenBottom: {
          "0%": { top: "1rem", transform: "rotate(0)", width: "76%" },
          "100%": { top: "0.5rem", transform: "rotate(405deg)", width: "100%" },
        },
        hamburgerCloseBottom: {
          "100%": { top: "1rem", transform: "rotate(0)", width: "76%" },
          "0%": { top: "0.5rem", transform: "rotate(405deg)", width: "100%" },
        },
      },
      animation: {
        // open
        hamburgerOpenTop: "hamburgerOpenTop 0.3s forwards",
        hamburgerOpenMiddle: "hamburgerOpenMiddle 0.3s forwards",
        hamburgerOpenBottom: "hamburgerOpenBottom 0.3s forwards",
        // close
        hamburgerCloseTop: "hamburgerCloseTop 0.3s forwards",
        hamburgerCloseMiddle: "hamburgerCloseMiddle 0.3s forwards",
        hamburgerCloseBottom: "hamburgerCloseBottom 0.3s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
