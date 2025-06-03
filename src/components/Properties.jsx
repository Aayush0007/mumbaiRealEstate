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
    autoplaySpeed: 6000,
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
                    ? 'bg-gradient-to-r from-primary to-accent scale-125'
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
    <Section id="properties" className="relative py-20 bg-gradient-to-b from-royal-dark to-royal-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_70%)] opacity-50" />
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
          className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800 mb-12 tracking-wide"
        >
          Our Properties
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"
          />
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {developers.map((developer) => (
            <motion.button
              key={developer.name}
              onClick={() => setSelectedDeveloper(developer.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-sans font-medium text-base transition-colors duration-300 ${
                selectedDeveloper === developer.name
                  ? 'bg-gradient-to-r from-primary to-accent text-gray-800 shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              aria-label={`Select ${developer.name} properties`}
            >
              {developer.name}
              {selectedDeveloper === developer.name && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"
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
      </motion.div>
    </Section>
  );
};

export default Properties;