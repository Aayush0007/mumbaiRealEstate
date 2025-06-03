import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Button = ({ children, href, onClick, className = '', type = 'button' }) => {
  const { theme } = useTheme();
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 1 }}
      className={`relative inline-flex items-center justify-center bg-gradient-to-r from-${theme.primary} to-${theme.secondary} text-${theme.text} font-semibold py-3 px-6 rounded-2xl shadow-cute hover:shadow-cute-hover hover:bg-gradient-to-r hover:from-accent hover:to-accent-light font-medium text-sm transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-${theme.dark} border border-${theme.accent}/60 hover:border-${theme.accent} ${className}`}
      style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
    >
      {/* Subtle Sparkle Effect */}
      <motion.span
        className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(232,185,35,0.2)_0%,transparent_70%)]"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.6, scale: 1.1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      />
      {children}
    </Component>
  );
};

export default Button;