const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        lg: "0 0px 20px -10px rgba(0, 0, 0, 0.02), 0 4px 7px -4px rgba(0,0,0,0.2)",
      },
      colors: {
        transparent: "transparent",
        "light-grey": "#FAFAFA",
      },
      fontFamily: {
        sans: ["Readex Pro", ...defaultTheme.fontFamily.sans],
        serif: ["Readex Pro", ...defaultTheme.fontFamily.serif],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
