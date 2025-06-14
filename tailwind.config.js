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
        cinzel: ['"Cinzel"', 'serif'],
      },
      colors: {
        primary: '#3B82F6', // Blue for buttons
        secondary: '#1A2C5A', // Dark background
        accent: '#FFFFFF', // White for text
        'accent-light': '#E5E7EB', // Light gray for hover effects
        dark: '#1A2C5A', // Dark background
        light: '#FFFFFF', // White background for sections
        offwhite: '#F5F5F5', // Light gray for borders
        text: '#2D3436', // Dark text for white backgrounds
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(to bottom, #1A2C5A, #1A2C5A)', // Simplified gradient
      },
      boxShadow: {
        'cute': '0 4px 10px rgba(0, 0, 0, 0.1)', // Softer shadow
        'cute-hover': '0 6px 15px rgba(0, 0, 0, 0.15)', // Hover shadow
      },
    },
  },
  plugins: [],
};