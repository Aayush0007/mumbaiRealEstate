/* src/components/Hero.jsx */
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './common/Button';
import Section from './common/Section';
import HeroSection from "../assets/HeroSection.png";

// Simulated SEO meta tags (typically in index.html head)
{/* <meta name="description" content="Discover luxury homes in 2025 with Living Luxura. Find modern living spaces, dream properties, and exclusive real estate in prime city locations." /> */}
{/* <meta name="keywords" content="luxury homes 2025, modern living spaces, dream properties, exclusive real estate, Living Luxura, luxury apartments, penthouses, villas, city living" /> */}

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]); // Parallax effect

  return (
    <Section
      id="home"
      className="relative h-screen flex items-center bg-cover bg-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroSection})`,
          y,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/60 to-transparent opacity-90" />

      <header className="relative z-10 p-8 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-cinzel font-bold leading-tight mb-4 drop-shadow-lg tracking-tight text-white"
        >
          Luxury Homes for Modern Living in 2025
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-lg md:text-2xl font-sans font-light tracking-wide mb-4 opacity-90 text-white drop-shadow-lg"
        >
          Discover your dream property in the heart of the city with Living Luxura.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="text-sm md:text-base font-sans font-light tracking-wide mb-8 opacity-80 text-white"
        >
          Exclusive Properties in Prime Locations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button
            href="#properties"
            className="text-lg font-cinzel font-medium px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          >
            Explore Dream Properties
          </Button>
          <Button
            href="https://wa.me/9211560084?text=Hello,%20I'd%20like%20to%20schedule%20a%20tour%20with%Living%20Luxura%20Living."
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-cinzel font-medium px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-dark rounded-md transition-all duration-300"
          >
            Schedule a Tour
          </Button>
        </motion.div>
      </header>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;