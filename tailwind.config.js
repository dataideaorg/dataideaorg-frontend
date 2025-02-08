/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["dm sans", "sans-serif"],
        heading: ["horta", "impact"],
      },
      animation: {
        'updown': 'updown 2s ease-in-out infinite alternate-reverse both'
      },
      keyframes: {
        updown: {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
