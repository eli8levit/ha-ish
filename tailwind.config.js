/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js,jpg}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#3d863d",
        greenSecondary: "#113e25",
        greenLight: "#828200",
        beige: "#ffffeb",
        beigeDarker: "#efefd4",
      },
      fontFamily: {
        serif: ["Noto Serif Hebrew"],
        ser: ["Heebo"],
        caravan: ["caravan"],
        frankRe: ["frank-re"],
      },
      fontSize: {
        "10xl": "10rem",
      },
      boxShadow: {
        postHover: "0 0 0 2px black",
      },
      lineHeight: {
        1: 1,
      },
      screens: {
        md: "812px",
        lg: "1200px",
      },
      letterSpacing: {
        50: "50px",
      },
    },
  },
  plugins: [],
};
