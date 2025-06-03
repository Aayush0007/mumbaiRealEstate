import { motion } from 'framer-motion';

const PropertyCard = ({ property, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200"
    >
      <motion.img
        src={property.image}
        alt={property.address}
        loading="lazy"
        className="w-full h-64 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">{property.address}</h3>
        <p className="text-accent font-sans text-lg mb-2">{property.price}</p>
        <p className="text-gray-600 text-sm mb-4">{property.description}</p>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} Sqft</span>
        </div>
        <motion.button
          onClick={onViewDetails}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-primary to-accent text-gray-800 font-sans font-medium py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          aria-label={`View details for ${property.address}`}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;