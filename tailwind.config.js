/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        sora: ["var(--font-sora)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        blob: {
          "0%" : {
            transform: " scale(1)",
          },
          "33%" : {
            transform: " scale(1.05)",
          },
          "66%" : {
            transform: " scale(0.95)",
          },
          "100%" : {
            transform: " scale(1)",
          },
        }
      },
      animation: {
        blob:"blob 10s infinite"
      }
    },
  },
  plugins: [],
};
