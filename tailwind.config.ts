import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#3b82f6", // Customize as needed
          700: "#1d4ed8", // Customize as needed
        },
        greyscale: {
          700: "#374151", // Customize as needed
        },
      },
    },
  },
  plugins: [],
};
export default config;
