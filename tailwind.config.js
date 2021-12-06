module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),

        blue: "#23212d",
      }),
    },
  },
  variants: {},
  plugins: [],
};
