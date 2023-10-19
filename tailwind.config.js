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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, #4338CA 0deg, #0EA5E9 67.5deg, #7E22CE 198.75deg, #1D4ED8 251.25deg, #0284C7 301.88deg, #691EFF 360deg)",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: " scale(1)",
          },
          "33%": {
            transform: " scale(1.05)",
          },
          "66%": {
            transform: " scale(0.95)",
          },
          "100%": {
            transform: " scale(1)",
          },
        },
        "image-rotate": {
          "0%": { transform: "rotateX(25deg)" },
          "25%": { transform: "rotateX(25deg) scale(0.9)" },
          "60%": { transform: "none" },
          "100%": { transform: "none" },
        },
        "image-glow": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "image-fade": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        blob: "blob 10s infinite",
        "image-rotate": "image-rotate 1400ms 1s ease forwards",
        "image-glow": "image-glow 2000ms 1.5s ease-out both",
        "image-fade": "image-fade 1s 1400ms ease-out both"
      },
    },
  },
  plugins: [],
};
