/* src/components/common/Section.jsx */
import { motion } from 'framer-motion';

const Section = ({ id, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-16 md:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;