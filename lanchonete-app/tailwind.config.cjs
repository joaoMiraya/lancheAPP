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
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 25px 55px rgba(0, 0, 0, 5)',
          '0 25px 55px rgba(0, 0, 0, 5)'
      ]
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'chamabghome': "url('/src/assets/images/chamabghome.png')",
        'pizzabg': "url('/src/assets/images/pizzabg.jpg')",
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
        black: '900',
      },
      rotate: {
        '360': '360deg',
      }
    },
    
  },
  plugins: [Myclass],
}
