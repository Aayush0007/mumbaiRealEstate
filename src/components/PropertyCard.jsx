/* src/components/PropertyCard.jsx */
import { motion } from 'framer-motion';

const PropertyCard = ({ property, onViewDetails }) => {
  const isFeatured = property.featured || false; // Assuming a 'featured' property in your data

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 max-w-md mx-auto"
    >
      <div className="relative">
        <motion.img
          src={property.image}
          alt={`${property.address} - Luxury Property in Thane 2025`}
          loading="lazy"
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <span className="text-white font-cinzel text-sm px-4 py-2">
            {property.type || 'Apartment'} {/* Assuming a 'type' property in your data */}
          </span>
        </div>
        {isFeatured && (
          <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-cinzel text-xs px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-cinzel font-semibold text-dark mb-2">{property.address}</h3>
        <p className="text-blue-600 font-sans text-lg mb-2">{property.price}</p>
        <p className="text-dark/80 text-sm mb-4 font-sans">{property.description}</p>
        <div className="flex justify-between text-sm text-dark/80 mb-4">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} Sqft</span>
        </div>
        <div className="flex space-x-4">
          <motion.button
            onClick={onViewDetails}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-cinzel font-medium py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label={`View details for ${property.address}`}
          >
            View Details
          </motion.button>
          <motion.a
            href="https://wa.me/9211560084?text=Hello,%20I'd%20like%20to%20schedule%20a%20tour%20for%20this%20property:%20${property.address}"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 border-2 border-blue-600 text-blue-600 font-cinzel font-medium py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            aria-label={`Schedule a tour for ${property.address}`}
          >
            Schedule Tour
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;