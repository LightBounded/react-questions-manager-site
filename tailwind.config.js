module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ["Nunito"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
