
/* src/components/Testimonials.jsx */
import { motion } from 'framer-motion';
import { testimonialsContent } from '../data/data';
import Section from './common/Section';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <p className="text-gray-700 italic text-lg mb-6 flex-grow">
        "{testimonial.quote}"
      </p>
      <div className="text-right border-t pt-4 border-gray-100">
        <p className="font-semibold text-dark text-lg">{testimonial.author}</p>
        <p className="text-primary text-sm">{testimonial.title}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-offwhite">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-serif text-dark text-center mb-12"
        >
          {testimonialsContent.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsContent.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;