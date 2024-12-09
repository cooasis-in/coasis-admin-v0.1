/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glowLeft: "0px 0px 8px #FCFCD8, -5px 0px 15px #FCFCD8",
      },
      colors: {
        glow: "#FCFCD8",
      },
      backdropBlur: {
        custom: "9.1px",
        60: "60px",
        30: "30px",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
