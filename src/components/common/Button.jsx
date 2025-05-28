
/* src/components/common/Button.jsx */
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center bg-gradient-to-r from-[${theme.primary}] to-[${theme.secondary}] text-[${theme.light}] font-semibold py-3 px-6 rounded-full shadow-xl shadow-[${theme.primary}]/40 hover:shadow-[${theme.accent}]/60 hover:bg-gradient-to-l hover:from-[${theme.accent}] hover:to-[${theme.primary}] focus:ring-4 focus:ring-offset-2 focus:ring-offset-[${theme.dark}] focus:ring-[${theme.accent}] border border-[${theme.accent}/60] hover:border-[${theme.accent}] transition-all duration-500 ease-in-out ${className}`}
      style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
    >
      {/* Gold Shine Effect */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.3)_0%,transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      {children}
    </Component>
  );
};

export default Button;