/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "9rem",
    },
    extend: {
      colors: {
        primary: "#0092E4",
        secondary: "#152c4c",
      },
    },
  },
  plugins: [],
};
