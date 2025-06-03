import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from './common/Button';
import Section from './common/Section';

const FormField = ({ id, label, type = 'text', name, value, onChange, error, placeholder, rows }) => (
  <div className="relative">
    <label htmlFor={id} className="block text-text text-sm font-semibold mb-2">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full py-3 px-4 rounded-lg bg-offwhite text-text shadow-cute focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all ${error ? 'border-2 border-red-500' : 'border border-offwhite/50'}`}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full py-3 px-4 rounded-lg bg-offwhite text-text shadow-cute focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all ${error ? 'border-2 border-red-500' : 'border border-offwhite/50'}`}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
    )}
    {error && (
      <motion.p
        id={`${id}-error`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-red-500 text-sm mt-1"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  const fields = [
    {
      id: 'name',
      label: 'Name',
      name: 'name',
      placeholder: 'Your Name',
      required: true,
    },
    {
      id: 'email',
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'your.email@example.com',
      required: true,
    },
    {
      id: 'phone',
      label: 'Phone (Optional)',
      name: 'phone',
      type: 'tel',
      placeholder: '+1 (123) 456-7890',
    },
    {
      id: 'message',
      label: 'Message',
      name: 'message',
      type: 'textarea',
      placeholder: 'Tell us about your needs...',
      rows: 5,
      required: true,
    },
  ];

  const validateField = (name, value) => {
    if (name === 'name' && !value.trim()) return 'Name is required';
    if (name === 'email') {
      if (!value.trim()) return 'Email is required';
      if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email format';
    }
    if (name === 'message' && !value.trim()) return 'Message is required';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required) {
        newErrors[field.name] = validateField(field.name, formData[field.name]);
      }
    });

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setIsSubmitting(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000); // Hide success message after 3s
    formRef.current.focus();
  };

  return (
    <Section id="contact" className="bg-light">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-serif text-text text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto bg-light p-8 rounded-2xl shadow-cute border border-offwhite"
        >
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-accent-light text-text p-4 rounded-lg mb-6 text-center"
            >
              Message sent successfully!
            </motion.div>
          )}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
            {fields.map((field) => (
              <FormField
                key={field.id}
                {...field}
                value={formData[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[field.name]}
              />
            ))}
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactForm;