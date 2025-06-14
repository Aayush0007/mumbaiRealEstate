import { motion } from 'framer-motion';

const Section = ({ id, children, className = '', style = {} }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-16 md:py-24 ${className}`}
      style={style} // Pass the style prop here ✅
    >
      {children}
    </motion.section>
  );
};

export default Section;
