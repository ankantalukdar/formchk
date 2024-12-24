/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        secondary: {
          light: "#FAFAFA",
          DEFAULT: "#CCCCCC",
          dark: "#4F4F4F",
        },
        accent: {
          DEFAULT: "#1BB14E",
          dark: "#00AA3A",
        },
      },
    },
  },
  plugins: [],
}
