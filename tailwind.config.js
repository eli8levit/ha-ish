/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#072308",
      },
      fontFamily: {
        serif: ["Noto Serif Hebrew"],
        ser: ["Heebo"],
        caravan: ["caravan"],
        frankRe: ["frank-re"],
      },
      backgroundImage: {
        grad: "url('../sources/images/grad.png')",
      },
      boxShadow: {
        postHover: "0 0 0 2px black",
        post: "0 0 0 2px rgba(0,0,0, 0.08)",
      },
      lineHeight: {
        10: "3.2rem",
      },
    },
  },
  plugins: [],
};
