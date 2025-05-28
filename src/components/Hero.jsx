/* src/components/Hero.jsx */
import { motion } from 'framer-motion';
import { heroContent } from '../data/data';
import Button from './common/Button';
import Section from './common/Section';

const Hero = () => {
  return (
    <Section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-royal-gradient"
    >
      {/* Overlay with a subtle gold shimmer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,60,109,0.8)] to-[rgba(10,60,58,0.6)] opacity-85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,160,23,0.15)_0%,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 p-8 max-w-5xl mx-auto"
      >
        {/* Decorative Gold Divider Above Headline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '180px' }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
        />

        <h1 className="text-5xl md:text-7xl font-serif font-extrabold leading-tight mb-6 drop-shadow-2xl tracking-tight text-light">
          {heroContent.headline}
        </h1>

        <p className="text-xl md:text-2xl font-sans font-light tracking-wide mb-10 opacity-90 text-offwhite drop-shadow-lg">
          {heroContent.subheadline}
        </p>

        <Button href={heroContent.ctaLink} className="text-lg font-medium px-10 py-4">
          {heroContent.ctaButton}
        </Button>

        {/* Decorative Gold Divider Below Button */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '180px' }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8"
        />
      </motion.div>
    </Section>
  );
};

export default Hero;