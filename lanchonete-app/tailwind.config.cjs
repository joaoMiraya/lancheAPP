/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".perspective": {
      perspective: "62rem"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    },
  });
});

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lanchebg': "url('/src/assets/images/lanchebg.png')",
        'lancheHomebg': "url('/src/assets/images/lancheHomebg.png')",
      },
      maxWidth: {
        '150px': '150px',
        '250px': '250px',
        '350px': '350px',
        '450px': '450px',
      },
      minHeigth: {
        '150px': '150px',
        '250px': '250px',
        '350px': '350px',
        '450px': '450px',
      },
      maxHeigth: {
        '150px': '150px',
        '250px': '250px',
        '350px': '350px',
        '450px': '450px',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
    },
  },
  plugins: [Myclass],
}
