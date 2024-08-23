import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#00A9E0",
          hover: "#028AC5",
          pressed: "#006089",
          disable: "#00A9E07F",
          20: "#CCEEF9",
          10: "E5F6FB",
        },

        secondary:{
          default: "#1D1D1D",
          hover:"#1A1A1A",
          pressed: "#000000",
          disabled: "#1D1D1D80"
        },

        info:{
          default:"#1184E0",
          hover:"#0F76C8",
          presed:"#0C61A5",
          40: "#A0CEF3",
          20: "#CFE6F9",
        },

        success:{
          default:"#08875D",
          hover:"#036746",
          presed:"#03583C",
          40: "#9CCFBE",
          20: "#CEE7DF",
        },
        Warning:{
          default:"#F6BD11",
          hover:"#E0AC10",
          presed:"#BC910E",
          40: "#FBE5A0",
          20: "#FDF2CF",
        },
        Error:{
          default:"#E02D3C",
          hover:"#BA2532",
          presed:"#981B25",
          40: "#F3ABB1",
          20: "#F9D5D8",
        },


                         

        body:{
          10: "#E5E5E5",
          20: "#E5E5E5",
          30:"#B2B2B2",
          40: "#999999",
          50: "#7F7F7F",
          60: "#666666",
          70: "#4D4D4D",
          80: "#333333",
          90: "#1A1A1A",
          100:"#000000"
        }
      },

      fontFamily: {
        montserrat: ["var(--font-monserrat)"],
        "qwiter-gryper": ["var(--font-qwiter-gryper)"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

const wMTConfig = withMT(config)

export default wMTConfig;
