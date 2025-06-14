/* src/components/PropertyCard.jsx */
import { motion } from 'framer-motion';

// Utility function to sanitize the address for the WhatsApp URL
const sanitizeAddress = (address) => {
  if (!address) return 'Unknown Property Address';
  return encodeURIComponent(address.trim());
};

const PropertyCard = ({ property, onViewDetails }) => {
  const isFeatured = property.featured || false;

  const whatsappMessage = `Hello, I'd like to schedule a tour for this property: ${sanitizeAddress(property.address)}`;
  const whatsappUrl = `https://wa.me/9211560084?text=${whatsappMessage}`;

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center">
          <span className="text-white font-cinzel text-sm px-4 py-2">
            {property.type || 'Apartment'}
          </span>
        </div>
        {isFeatured && (
          <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-cinzel text-xs px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-cinzel font-semibold text-dark text-center">{property.address}</h3>
        <p className="text-blue-600 font-sans text-lg text-center">{property.price}</p>
        <p className="text-dark/80 text-sm font-sans text-center line-clamp-3">{property.description}</p>
        <div className="flex justify-around text-sm text-dark/80 font-sans">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} Sqft</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button
            onClick={onViewDetails}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-cinzel font-medium py-3 rounded-full shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label={`View details for ${property.address}`}
          >
            View Details
          </motion.button>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(37, 99, 235, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex-1 bg-gradient-to-r from-white to-white border-2 border-blue-600 text-blue-600 font-cinzel font-medium py-3 rounded-full hover:border-transparent hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label={`Schedule a property tour for ${property.address} via WhatsApp`}
            title={`Schedule a tour for ${property.address} via WhatsApp`}
          >
            Schedule a Tour
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;