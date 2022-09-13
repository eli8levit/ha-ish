/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js,jpg}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#3d863d",
        greenSecondary: "#113e25",
        beige: "#ffffeb",
        beigeDarker: "#efefd4",
      },
      fontFamily: {
        caravan: ["caravan", ...defaultTheme.fontFamily.serif],
        frankRe: ["frank-re", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "10xl": "10rem",
      },
      boxShadow: {
        postHover: "0 0 0 2px black",
      },
      lineHeight: {
        1: 1,
        12: 1.4,
      },
      screens: {
        md: "812px",
        lg: "1200px",
      },
      letterSpacing: {
        40: "40px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("paragraph", "& > p");
    },
  ],
};
