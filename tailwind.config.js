/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1440px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair", "sans-serif"],
        Barlow: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        darkBlueC: "#0B0D17",
        lightBlueC: "#D0D6F9",
        grayC: "#626368",
      },
      boxShadow: {
        shadowC: "1px 1px 1px 35px rgba(255, 255, 255, 0.123)",
      },
      animation: {
        fadeEsq: "fadeEsq 0.7s ease 0s 1 normal forwards",
        fadeDir: "fadeDir 0.7s ease 0s 1 normal forwards",
      },
      keyframes: {
        fadeEsq: {
          "0%": { transform: "translateX(550px)" },
          "100%": { transform: "translateX(0px)" },
        },
        fadeDir: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(550px)" },
        },
      },
    },
  },
  plugins: [],
};
