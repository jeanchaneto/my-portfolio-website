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
            transform: " translate(0px, 0px) scale(1)",
          },
          "33%" : {
            transform: " translate(50px, -80px) scale(1.2)",
          },
          "66%" : {
            transform: " translate(-60px, -60px) scale(0.8)",
          },
          "100%" : {
            transform: " translate(0px, 0px) scale(1)",
          },
        }
      },
      animation: {
        blob:"blob 15s infinite"
      }
    },
  },
  plugins: [],
};
