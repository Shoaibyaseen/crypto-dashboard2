/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bitcoin: '#F7931A',
        ethereum: '#627EEA',
        cardano: '#0033AD',
        solana: '#00FFA3',
        ripple: '#27A2DB',
      },
    },
  },
  plugins: [],
}