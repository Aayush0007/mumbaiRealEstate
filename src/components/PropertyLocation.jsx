/* src/components/PropertyLocation.jsx */
import { motion } from "framer-motion";
import Section from "./common/Section";

const PropertyLocation = () => {
  return (
    <Section id="location+" className="bg-white py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-cinzel font-bold text-center text-dark mb-4"
        >
          Our Property Location
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg font-sans text-dark/80 mb-6"
        >
          Visit us at the heart of Thane to explore luxury living at its finest.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full h-64 rounded-lg overflow-hidden shadow-md border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.983969851773!2d72.97514707598724!3d19.19445025064387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9d5a8d5a5b5%3A0xafe5b789a3f8f0a6!2sThane%20West%2C%20Thane%2C%20Maharashtra%20400601%2C%20India!5e0!3m2!1sen!2sus!4v1698771234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-dark font-sans mt-4"
        >
          📍Kholset Road, Thane West, Maharashtra
          400601, India
        </motion.p>
      </motion.div>
    </Section>
  );
};

export default PropertyLocation;
