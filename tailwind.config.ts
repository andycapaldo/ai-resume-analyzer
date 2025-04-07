import type { Config } from "tailwindcss";

export default {
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
        softNavy: '#2E3A59',
        skyMist: '#E7EEF7',
        coolGray: '#B0B8C1',
        accentCoral: '#FF6B6B',
        crispWhite: '#FFFFFF',
        oceanBlue: '#4C8EDA',
        oceanBlueDark: '#3B73B9',
      },
    },
  },
  plugins: [],
} satisfies Config;
