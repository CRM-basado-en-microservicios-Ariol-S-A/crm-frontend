import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

import { lightTheme } from "./src/config";


const config: Config = {
  content: [
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: 'light',
    layout: {

      radius: {
        small: '3px',
        large: '9px',
        medium: '6px',
      },
      
    },
    themes: {
      ...lightTheme
    }
  })]
};
export default config;
