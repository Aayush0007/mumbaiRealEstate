/* src/components/AboutUs.jsx */
import { motion } from 'framer-motion';
import Section from './common/Section';

// Simulated SEO meta tags (typically in index.html head)
{/* <meta name="description" content="Learn about Haven Global Living, your trusted partner for luxury real estate in 2025. Discover exclusive properties, modern homes, and exceptional living spaces in prime city locations." /> */}
{/* <meta name="keywords" content="luxury real estate 2025, exclusive properties, modern homes, Haven Global Living, luxury living, dream homes, city apartments, villas, real estate experts" /> */}

const AboutUs = () => {
  return (
    <Section id="about" className="bg-white py-20 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 opacity-50" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Decorative Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 text-blue-600 text-9xl opacity-20"
        >
          🏛️
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-cinzel font-bold text-dark mb-4 relative z-10"
        >
          About Haven Global Living
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-20 h-1 bg-blue-600 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-dark/80 text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-6 font-sans"
        >
          At Haven Global Living, we redefine luxury real estate in 2025 by curating exclusive properties that embody modern elegance and timeless comfort. Our mission is to transform the way you experience home, offering a seamless journey to find your dream property in prime city locations. With a team of dedicated real estate experts, we ensure every step is tailored to your unique vision.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-dark/80 text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-8 font-sans"
        >
          From luxurious city apartments to serene villas, we specialize in connecting discerning buyers with modern homes that inspire. Discover a lifestyle that’s as extraordinary as you are with Haven Global Living—your trusted partner in luxury living.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-dark/60 text-sm md:text-base font-sans italic mb-8"
        >
          Crafting Timeless Living Experiences
        </motion.p>

        <motion.a
          href="https://wa.me/9211560084?text=Hello,%20I'd%20like%20to%20learn%20more%20about%20Haven%20Global%20Living%20and%20your%20luxury%20properties."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-cinzel font-medium text-lg px-8 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
        >
          Learn More
        </motion.a>
      </div>
    </Section>
  );
};

export default AboutUs;