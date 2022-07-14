/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
      },
    },
    fontFamily: {
      serif: ["Noto Serif Hebrew"],
      ser: ["Heebo"],
    },
    backgroundImage: {
      grad: "url('../sources/images/grad.png')",
    },
    boxShadow: {
      postHover: "0 0 0 1px black",
      post: "0 0 0 1px rgba(0,0,0, 0.08)",
    },
  },
  plugins: [],
};
