import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaEnvelope, FaComment, FaTimes } from 'react-icons/fa';
import Button from './common/Button';
import Section from './common/Section';

const FormField = ({ id, label, type = 'text', name, value, onChange, onBlur, error, placeholder, rows, required, icon }) => (
  <div className="relative">
    <label htmlFor={id} className="block text-gray-700 text-sm font-semibold mb-2 font-inter">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {icon}
        </span>
      )}
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={rows}
          className={`w-full py-3 ${icon ? 'pl-10' : 'pl-4'} pr-4 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-inter ${error ? 'border-2 border-red-600' : 'border border-gray-300'}`}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-required={required}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full py-3 ${icon ? 'pl-10' : 'pl-4'} pr-4 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-inter ${error ? 'border-2 border-red-600' : 'border border-gray-300'}`}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-required={required}
          required={required}
          maxLength={type === 'tel' ? 10 : undefined}
        />
      )}
    </div>
    {error && (
      <motion.p
        id={`${id}-error`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-red-600 text-sm mt-1 font-inter"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    lookingFor: '',
    planningToBuy: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);
  const firstInputRef = useRef(null);
  const lastFocusableRef = useRef(null);

  const fields = [
    {
      id: 'name',
      label: 'Name',
      name: 'name',
      placeholder: 'Your Full Name',
      required: true,
      icon: <FaUser />,
    },
    {
      id: 'mobile',
      label: 'Mobile No.',
      name: 'mobile',
      type: 'tel',
      placeholder: 'Enter 10-digit number',
      required: true,
      icon: <FaPhone />,
    },
    {
      id: 'email',
      label: 'Email (Optional)',
      name: 'email',
      type: 'email',
      placeholder: 'your.email@example.com',
      required: false,
      icon: <FaEnvelope />,
    },
    {
      id: 'message',
      label: 'Message',
      name: 'message',
      type: 'textarea',
      placeholder: 'Tell us about your property needs...',
      rows: 5,
      required: true,
      icon: <FaComment />,
    },
  ];

  const lookingForOptions = [
    { value: 'Property to Buy', label: 'Property to Buy' },
    { value: 'Property for Investment', label: 'Property for Investment' },
  ];

  const planningToBuyOptions = [
    { value: 'Soon', label: 'Soon' },
    { value: 'Within 4-6 Months', label: 'Within 4-6 Months' },
    { value: 'Later', label: 'Later' },
  ];

  const validateField = useCallback((name, value) => {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required';
      if (value.length < 2) return 'Name must be at least 2 characters';
    }
    if (name === 'mobile') {
      if (!value.trim()) return 'Mobile number is required';
      if (!/^[6-9]\d{9}$/.test(value.replace(/\D/g, ''))) return 'Enter a valid 10-digit Indian mobile number';
    }
    if (name === 'email' && value.trim() && !/\S+@\S+\.\S+/.test(value)) return 'Invalid email format';
    if (name === 'lookingFor' && !value) return 'Please select an option';
    if (name === 'planningToBuy' && !value) return 'Please select an option';
    if (name === 'message' && !value.trim()) return 'Message is required';
    return '';
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      const cleanedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: cleanedValue }));
      setErrors((prev) => ({ ...prev, [name]: validateField(name, cleanedValue) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }, [validateField]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }, [validateField]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const newErrors = {};
    ['name', 'mobile', 'lookingFor', 'planningToBuy', 'message'].forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });
    if (formData.email) newErrors.email = validateField('email', formData.email);

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    try {
      const response = await fetch('/api/macros/s/AKfycbxWToaoFBkzLC2klLCMM5yWbwrWMAUxNlkpv3txG0ckxhYxMn-y9N-Sx8OCKxtWKnIHcA/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'contactUs' }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setFormData({ name: '', mobile: '', email: '', lookingFor: '', planningToBuy: '', message: '' });
        setErrors({});
        setSuccess(true);
        firstInputRef.current.focus();
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ form: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateField]);

  const dismissSuccess = useCallback(() => {
    setSuccess(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        const focusable = formRef.current.querySelectorAll(
          'button, input, textarea, [type="radio"], [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    formRef.current.addEventListener('keydown', handleKeyDown);
    return () => formRef.current.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Section id="contact" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
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
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center text-gray-800 mb-4"
        >
          Contact Us for Luxury Properties in Thane 2025
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg md:text-xl font-inter text-gray-600 max-w-3xl mx-auto mb-8"
        >
          Let’s find your dream home! Schedule a property tour or inquire about exclusive homes with Living Luxura.
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '200px' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200"
        >
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-blue-50 text-blue-700 p-4 rounded-lg mb-6 text-center flex items-center justify-between relative"
            >
              <div className="flex items-center justify-center w-full">
                <motion.svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </motion.svg>
                Message sent successfully! We’ll get back to you soon.
              </div>
              <motion.button
                type="button"
                onClick={dismissSuccess}
                className="absolute right-2 text-blue-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label="Dismiss success message"
              >
                <FaTimes size={16} />
              </motion.button>
            </motion.div>
          )}
          {errors.form && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-center font-inter"
            >
              {errors.form}
            </motion.div>
          )}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
            {fields.map((field, index) => (
              <FormField
                key={field.id}
                {...field}
                value={formData[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[field.name]}
                ref={index === 0 ? firstInputRef : undefined}
              />
            ))}

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2 font-inter">
                You are looking for <span className="text-red-600">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {lookingForOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="lookingFor"
                      value={option.value}
                      checked={formData.lookingFor === option.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="hidden"
                      aria-invalid={!!errors.lookingFor}
                      aria-describedby={errors.lookingFor ? 'lookingFor-error' : undefined}
                      aria-required="true"
                      required
                    />
                    <span
                      className={`flex items-center px-4 py-2 rounded-md border cursor-pointer transition-all font-inter text-sm ${
                        formData.lookingFor === option.value
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white border-gray-300 hover:border-blue-600'
                      } focus-within:ring-2 focus-within:ring-blue-600`}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.lookingFor && (
                <motion.p
                  id="lookingFor-error"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-600 text-sm mt-1 font-inter"
                >
                  {errors.lookingFor}
                </motion.p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2 font-inter">
                When are you planning to buy property <span className="text-red-600">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {planningToBuyOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="planningToBuy"
                      value={option.value}
                      checked={formData.planningToBuy === option.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="hidden"
                      aria-invalid={!!errors.planningToBuy}
                      aria-describedby={errors.planningToBuy ? 'planningToBuy-error' : undefined}
                      aria-required="true"
                      required
                      ref={option.value === planningToBuyOptions[planningToBuyOptions.length - 1].value ? lastFocusableRef : undefined}
                    />
                    <span
                      className={`flex items-center px-4 py-2 rounded-md border cursor-pointer transition-all font-inter text-sm ${
                        formData.planningToBuy === option.value
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white border-gray-300 hover:border-blue-600'
                      } focus-within:ring-2 focus-within:ring-blue-600`}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.planningToBuy && (
                <motion.p
                  id="planningToBuy-error"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-600 text-sm mt-1 font-inter"
                >
                  {errors.planningToBuy}
                </motion.p>
              )}
            </div>

            <div className="flex items-center justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-inter text-base shadow-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z" />
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
            Other Ways to Reach Us
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 font-inter text-gray-600">
            <p>📍 Kolshet Road, Thane West, Maharashtra 400601</p>
            <p>
              📧 <a href="mailto:connect@marketingbirbal.com" className="hover:text-blue-600">connect@marketingbirbal.com</a>
            </p>
            <motion.a
              href="https://wa.me/9211560084?text=Hello,%20I'd%20like%20to%20inquire%20about%20luxury%20properties%20in%20Thane%20-%20livingluxura.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              whileHover={{ scale: 1.05 }}
              className="hover:text-blue-600"
            >
              📲 Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ContactForm;