/* src/components/NextArrow.jsx */
import { motion } from 'framer-motion';

const NextArrow = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    aria-label="Next Property"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
  >
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </motion.button>
);

export default NextArrow;