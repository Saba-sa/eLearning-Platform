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
        "text-blue": "#494c8d",
        "color-light": "#ACACAC",
        calanderbg: "#1fd0c0",
        filebg: "#5b72ee",
        peoplebg: "#29b9e7",
      },
    },
  },
  plugins: [],
};
