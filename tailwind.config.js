/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["dm sans", "sans-serif"],
        heading: ["horta", "impact"],
      },
    },
  },
  plugins: [],
};
