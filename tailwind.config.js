/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      default: ["Ropa Sans", "sans-serif"],
    },
    screens: {
      sm: "1060px",
    },
  },
  plugins: [],
};
