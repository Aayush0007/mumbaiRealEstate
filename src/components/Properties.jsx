
/* src/components/Properties.jsx */
import { motion } from 'framer-motion';
import { propertiesContent } from '../data/data';
import Section from './common/Section';

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <img
        src={property.image}
        alt={property.address}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold font-serif text-dark mb-2">
          {property.address}
        </h3>
        <p className="text-primary text-2xl font-bold mb-3">{property.price}</p>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{property.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
          <span className="flex items-center">🛏️ {property.beds} Beds</span>
          <span className="flex items-center">🛁 {property.baths} Baths</span>
          <span className="flex items-center">📏 {property.sqft} sqft</span>
        </div>
      </div>
    </motion.div>
  );
};

const Properties = () => {
  return (
    <Section id="properties" className="bg-light">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-serif text-dark text-center mb-12"
        >
          {propertiesContent.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesContent.listings.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Properties;