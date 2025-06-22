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
      className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden"
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

      <header className="relative z-10 p-4 sm:p-6 md:p-8 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold leading-tight mb-4 drop-shadow-lg tracking-tight text-white"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)' }}
        >
          Luxury Homes in Thane, Mumbai.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl font-sans font-light tracking-wide mb-4 opacity-90 text-white drop-shadow-lg"
          style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)' }}
        >
          Discover your dream property in the heart of Mumbai with Living Luxura.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="text-xs sm:text-sm md:text-base font-sans font-light tracking-wide mb-6 sm:mb-8 opacity-80 text-white"
          style={{ fontSize: 'clamp(0.75rem, 3vw, 0.875rem)' }}
        >
          Exclusive Properties in Prime Locations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            href="#contact"
            className="text-base sm:text-lg font-cinzel font-medium px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg min-w-[150px]"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          >
            Book a call
          </Button>
        </motion.div>
      </header>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2" />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;