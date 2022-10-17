module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    fontFamily: {
      exo: ["exo", "sans-serif"],
      quicksand: ["quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        default: "#FFF8F8",
        defaultDark: "#97266D",

        bordermaroon: "#97266D",
        textmaroon: "#9F4040",
        headermaroon: "#6B243F",
        textpink: "#BB5194",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
