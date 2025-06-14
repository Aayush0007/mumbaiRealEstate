/* src/context/ThemeContext.jsx */
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = {
    primary: '#3B82F6', // Blue for buttons
    secondary: '#1A2C5A', // Dark background
    accent: '#FFFFFF', // White for text
    accentLight: '#E5E7EB', // Light gray for hover effects
    dark: '#1A2C5A', // Dark background
    light: '#FFFFFF', // White background for sections
    offwhite: '#F5F5F5', // Light gray for borders
    text: '#2D3436', // Dark text for white backgrounds
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};