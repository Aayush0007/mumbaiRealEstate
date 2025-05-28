
/* src/components/common/LoadingSpinner.jsx */
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-screen"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full" />
    </motion.div>
  );
};

export default LoadingSpinner;