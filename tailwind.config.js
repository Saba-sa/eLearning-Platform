/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "white",
        orange: "#f48c06",
        "bg-gray": "#979797",
        primary: "#49BBBD",
        "primary-light": "#96dadb",
        "text-color": "#5B5B5B",
        "color-light": "#ACACAC",
      },
    },
  },
  plugins: [],
};
