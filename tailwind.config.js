/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      // Colors
      colors: {
        success: {
          100: "#65BC7B",
          200: "#58A058",
          900: "#41873E",
        },
      },

      // Fonts
      fontFamily: {
        Titillium: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
