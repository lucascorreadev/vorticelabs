/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'vortice-background': "url('./images/background-vortice.png)",
      },
    },
    fontFamily:{
      sans: [
        'Century Gothic', 'Arial', 'sans-serif'
      ]
    }
  },
  plugins: [
    function ({ addUtilities }) {
        const newUtilities = {
            ".no-scrollbar::-webkit-scrollbar": {
                display: "none",
            },
            ".no-scrollbar": {
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
            },
        };
        addUtilities(newUtilities);
    },
],
}