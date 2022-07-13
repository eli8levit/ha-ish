/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#001800",
      },
    },
    fontFamily: {
      serif: ["Noto Serif Hebrew"],
      ser: ["Miriam Libre"],
    },
    backgroundImage: {
      grad: "url('../sources/images/grad.png')",
    },
  },
  plugins: [],
};
