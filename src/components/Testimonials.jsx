import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { testimonialsContent } from '../data/data';
import Section from './common/Section';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components for Carousel
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-primary to-accent p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
  >
    <svg
      className="w-5 h-5 text-light"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-primary to-accent p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
  >
    <svg
      className="w-5 h-5 text-light"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const TestimonialCard = ({ testimonial }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: {
      scale: 1.03,
      boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)', // Subtle Desert Gold glow
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="relative bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-md border border-royal-light/20 flex flex-col h-64 max-w-sm mx-auto"
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-light/5 to-transparent rounded-xl" />
      
      <p className="text-dark/80 italic text-base mb-4 flex-grow font-sans leading-relaxed">
        "{testimonial.quote}"
      </p>
      <div className="text-right border-t pt-3 border-dark/10">
        <p className="font-semibold text-dark text-base font-serif tracking-tight">{testimonial.author}</p>
        <p className="text-primary text-xs font-sans">{testimonial.title}</p>
      </div>
      {/* Glowing Border Animation */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-xl"
        animate={{
          borderColor: ['rgba(212,175,55,0)', 'rgba(212,175,55,0.3)', 'rgba(212,175,55,0)'],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

const Testimonials = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section id="testimonials" className="relative py-20 bg-gradient-to-b from-royal-dark to-royal-gradient overflow-hidden">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title with Glowing Underline */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center text-dark mb-16 tracking-wide"
        >
          {testimonialsContent.title}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4"
          />
        </motion.h2>

        {/* Carousel */}
        <Slider {...settings} className="relative">
          {testimonialsContent.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonials;