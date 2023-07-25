/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        small: "450px",
      },
      colors: {
        "main-blue": "var(--main-blue)",
        "main-gray": "var(--main-gray)",
        "main-white": "var(--main-white)",
        "main-gold": "var(--main-gold)",
      }
    },
  },
  plugins: [],
};
