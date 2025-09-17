/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [],
  theme: {
    extend: {},
    screens: {
      xs523: "523px",
      maxXs523: { max: "522px" },

      md832: "832px",
      maxMd832: { max: "831px" }
    }
  },
  plugins: [],
};
