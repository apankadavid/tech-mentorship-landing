/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#14233B",
        brand: "#005BEA",
        teal: { DEFAULT: "#099EAB", dark: "#0A7C87" },
        slate: "#41566B",
        ice: "#EDF8FC",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

