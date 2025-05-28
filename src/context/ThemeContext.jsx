/* src/context/ThemeContext.jsx */
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = {
    primary: '#1A3C6D', // Royal Sapphire
    secondary: '#0A5C5A', // Emerald Teal
    accent: '#D4A017', // Desert Gold
    dark: '#1F2526', // Midnight Charcoal
    light: '#F8F4E9', // Pearl Ivory
    offwhite: '#EDE4D3', // Sandstone Beige
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
