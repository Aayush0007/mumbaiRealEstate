
/* src/components/Features.jsx */
import { motion } from 'framer-motion';
import { featuresContent } from '../data/data';
import Section from './common/Section';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="features" className="bg-offwhite">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-serif text-dark text-center mb-12"
        >
          {featuresContent.title}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuresContent.items.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold font-serif text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Features;