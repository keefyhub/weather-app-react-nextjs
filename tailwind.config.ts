import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'ebony': '#0D0C21',
      'manhattan': '#F4D091',
      'river-bed': '#48525B',
      'shadow-green': '#9EC6C5',
    },
    fontFamily: {
      roboto: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
