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
      serif: ["Tinos"],
      ser: ["Miriam Libre"],
    },
  },
  plugins: [],
};
