/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        258: "repeat(auto-fit, minmax(0, 258px))",

        // Complex site-specific column configuration
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
