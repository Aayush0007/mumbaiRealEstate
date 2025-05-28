
/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: '#1A3C6D', // Royal Sapphire
        secondary: '#0A5C5A', // Emerald Teal
        accent: '#D4A017', // Desert Gold
        dark: '#1F2526', // Midnight Charcoal
        light: '#F8F4E9', // Pearl Ivory
        offwhite: '#EDE4D3', // Sandstone Beige
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to bottom, #F8F4E9, #EDE4D3)', // Updated for new light and offwhite
        'royal-gradient': 'linear-gradient(to bottom, #1A3C6D, #0A3C3A)', // Royal Sapphire to a darker teal
      },
    },
  },
  plugins: [],
};