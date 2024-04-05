/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        btnColor: "#62BE4D",
        bgexpertise: "#007CAF",
        bgfooter: "#003E58",
      },
      fontFamily: {
        gilroy: ["gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
