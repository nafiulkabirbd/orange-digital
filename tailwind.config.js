/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      hover: {
        none: {
          "background-color": "transparent",
          color: "inherit",
        },
      },
    },
  },
  plugins: [],
};
