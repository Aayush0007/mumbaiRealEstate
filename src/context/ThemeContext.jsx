import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = {
    primary: '#2B4A8F', // Vibrant Sapphire
    secondary: '#1A7A78', // Soft Teal
    accent: '#D4A017', // Desert Gold
    accentLight: '#E8B923', // Light Gold
    dark: '#2D3436', // Slate Charcoal
    light: '#FFF8E7', // Warm Cream
    offwhite: '#F5EDE0', // Neutral Beige
    text: '#2D3436', // Primary Text
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