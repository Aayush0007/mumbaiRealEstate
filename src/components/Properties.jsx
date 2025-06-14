/* src/components/Properties.jsx */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { developers } from '../data/developers';
import Section from './common/Section';
import PropertyCard from './PropertyCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Simulated SEO meta tags (typically in index.html head)
{/* <meta name="description" content="Explore luxury properties in Thane with Haven Global Living in 2025. Discover exclusive homes, modern real estate, and dream apartments in prime locations." /> */}
{/* <meta name="keywords" content="luxury properties 2025, exclusive homes in Thane, modern real estate, dream apartments, Haven Global Living, luxury villas, penthouses, real estate Thane" /> */}

const Properties = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState(developers[0].name);
  const navigate = useNavigate();

  const selectedDevProperties = useMemo(
    () => developers.find((dev) => dev.name === selectedDeveloper)?.properties || [],
    [selectedDeveloper]
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
    ],
    appendDots: (dots) => (
      <div className="mt-6">
        <ul className="flex justify-center space-x-3">
          {dots.map((dot, index) => (
            <li key={index} className={dot.props.className}>
              <button
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  dot.props.className.includes('slick-active')
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 scale-125'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: () => <div className="w-4 h-4 rounded-full" />,
  };

  return (
    <Section id="properties" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-cinzel font-bold text-center text-dark mb-4 tracking-wide"
        >
          Explore Luxury Properties in Thane 2025
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-lg md:text-xl font-sans text-dark/80 max-w-3xl mx-auto mb-8"
        >
          Discover exclusive homes, modern apartments, and luxury villas in prime Thane locations with Haven Global Living.
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '200px' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-12"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {developers.map((developer) => (
            <motion.button
              key={developer.name}
              onClick={() => setSelectedDeveloper(developer.name)}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full font-cinzel font-medium text-base transition-colors duration-300 ${
                selectedDeveloper === developer.name
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                  : 'bg-gray-200 text-dark hover:bg-gray-300'
              }`}
              aria-label={`Select ${developer.name} properties`}
            >
              {developer.name}
              {selectedDeveloper === developer.name && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <Slider {...settings}>
          {selectedDevProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
            >
              <PropertyCard property={property} onViewDetails={() => navigate(`/properties/${property.id}`)} />
            </motion.div>
          ))}
        </Slider>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => navigate('/all-properties')}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-cinzel font-medium text-lg rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Properties
          </motion.button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Properties;