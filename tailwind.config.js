/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        primary: '#2B4A8F', // Vibrant Sapphire
        secondary: '#1A7A78', // Soft Teal
        accent: '#D4A017', // Desert Gold
        'accent-light': '#E8B923', // Light Gold
        dark: '#2D3436', // Slate Charcoal
        light: '#FFF8E7', // Warm Cream
        offwhite: '#F5EDE0', // Neutral Beige
        text: '#2D3436', // Primary Text
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to bottom, #FFF8E7, #F5EDE0)', // Warm Cream to Neutral Beige
        'royal-gradient': 'linear-gradient(to bottom, #2B4A8F, #1A7A78)', // Vibrant Sapphire to Soft Teal
        'gradient-cute': 'linear-gradient(to right, #D4A017, #E8B923)', // Desert Gold to Light Gold
      },
      boxShadow: {
        'cute': '0 4px 15px rgba(212, 160, 23, 0.3)', // Soft gold glow
        'cute-hover': '0 6px 20px rgba(232, 185, 35, 0.4)', // Brighter glow on hover
      },
    },
  },
  plugins: [],
};