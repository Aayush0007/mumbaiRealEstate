import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showClose, setShowClose] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    lookingFor: '',
    buyingPlan: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const popupRef = useRef(null);
  const firstInputRef = useRef(null);

  // Show close icon after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowClose(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Focus on first input when popup opens
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  // Close popup with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showClose) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showClose]);

  const validateField = (name, value) => {
    if (name === 'name' && !value.trim()) return 'Name is required';
    if (name === 'phone') {
      if (!value.trim()) return 'Phone number is required';
      if (!/^\+?[1-9]\d{1,14}$/.test(value.replace(/\D/g, ''))) return 'Invalid phone number format';
    }
    if (name === 'email' && value.trim()) {
      if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email format';
    }
    if (name === 'lookingFor' && !value) return 'Please select an option';
    if (name === 'buyingPlan' && !value) return 'Please select an option';
    if (name === 'message' && value.length > 500) return 'Message cannot exceed 500 characters';
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
    ['name', 'phone', 'email', 'lookingFor', 'buyingPlan', 'message'].forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setFormData({ name: '', phone: '', email: '', lookingFor: '', buyingPlan: '', message: '' });
        setErrors({});
        setSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setSuccess(false);
        }, 2000); // Auto-close after 2 seconds
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ form: 'Failed to submit. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <motion.div
          ref={popupRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 border border-gray-100 max-h-[90vh] overflow-y-auto"
        >
          {showClose && (
            <motion.button
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 right-4 text-dark hover:text-blue-600"
              aria-label="Close popup"
            >
              <FaTimes size={20} />
            </motion.button>
          )}

          <h2
            id="popup-title"
            className="text-2xl font-cinzel font-bold text-dark mb-4 text-center"
          >
            Welcome to Living Luxura
          </h2>
          <p className="text-center text-sm text-dark/80 mb-6 font-sans">
            Share your details to explore luxury properties in Thane 2025!
          </p>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-100 text-dark p-3 rounded-lg mb-4 text-center flex items-center justify-center"
            >
              <motion.svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
              Thank you! We’ll contact you soon.
            </motion.div>
          )}

          {errors.form && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 text-red-500 p-3 rounded-lg mb-4 text-center"
            >
              {errors.form}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label
                htmlFor="popup-name"
                className="block text-dark text-sm font-semibold mb-1 font-sans"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                ref={firstInputRef}
                type="text"
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg bg-white/80 text-dark shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  errors.name
                    ? "border-2 border-red-500"
                    : "border border-gray-200"
                }`}
                placeholder="Your Full Name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "popup-name-error" : undefined}
                required
              />
              {errors.name && (
                <motion.p
                  id="popup-name-error"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div>
              <label
                htmlFor="popup-phone"
                className="block text-dark text-sm font-semibold mb-1 font-sans"
              >
                Mobile No. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="popup-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg bg-white/80 text-dark shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  errors.phone
                    ? "border-2 border-red-500"
                    : "border border-gray-200"
                }`}
                placeholder="+91 921 156 0084"
                aria-invalid={!!errors.phone}
                aria-describedby={
                  errors.phone ? "popup-phone-error" : undefined
                }
                required
              />
              {errors.phone && (
                <motion.p
                  id="popup-phone-error"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.phone}
                </motion.p>
              )}
            </div>

            <div>
              <label
                htmlFor="popup-email"
                className="block text-dark text-sm font-semibold mb-1 font-sans"
              >
                Email (Optional)
              </label>
              <input
                type="email"
                id="popup-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg bg-white/80 text-dark shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  errors.email
                    ? "border-2 border-red-500"
                    : "border border-gray-200"
                }`}
                placeholder="your.email@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={
                  errors.email ? "popup-email-error" : undefined
                }
              />
              {errors.email && (
                <motion.p
                  id="popup-email-error"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div>
              <label
                className="block text-dark text-sm font-semibold mb-1 font-sans"
              >
                You are looking for <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="lookingFor"
                    value="Property to Buy"
                    checked={formData.lookingFor === "Property to Buy"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mr-2"
                    required
                  />
                  <span className="text-dark text-sm font-sans">Property to Buy</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="lookingFor"
                    value="Property For Investment"
                    checked={formData.lookingFor === "Property For Investment"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mr-2"
                    required
                  />
                  <span className="text-dark text-sm font-sans">Property For Investment</span>
                </label>
              </div>
              {errors.lookingFor && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.lookingFor}
                </motion.p>
              )}
            </div>

            <div>
              <label
                className="block text-dark text-sm font-semibold mb-1 font-sans"
              >
                When are you planning to buy property <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="buyingPlan"
                    value="Soon"
                    checked={formData.buyingPlan === "Soon"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mr-2"
                    required
                  />
                  <span className="text-dark text-sm font-sans">Soon</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="buyingPlan"
                    value="Within 4 - 6 Months"
                    checked={formData.buyingPlan === "Within 4 - 6 Months"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mr-2"
                    required
                  />
                  <span className="text-dark text-sm font-sans">Within 4 - 6 Months</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="buyingPlan"
                    value="Just Looking"
                    checked={formData.buyingPlan === "Just Looking"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mr-2"
                    required
                  />
                  <span className="text-dark text-sm font-sans">Just Looking</span>
                </label>
              </div>
              {errors.buyingPlan && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.buyingPlan}
                </motion.p>
              )}
            </div>

            <div>
              <label
                htmlFor="popup-message"
                className="block text-dark text-sm font-semibold mb-1 font-sans"
              >
                Message (Optional)
              </label>
              <textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg bg-white/80 text-dark shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  errors.message
                    ? "border-2 border-red-500"
                    : "border border-gray-200"
                }`}
                placeholder="Your message or additional details..."
                rows="3"
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? "popup-message-error" : undefined
                }
              />
              <p className="text-dark/80 text-xs mt-1 font-sans">
                {formData.message.length}/500 characters
              </p>
              {errors.message && (
                <motion.p
                  id="popup-message-error"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md font-sans text-sm ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
                      />
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;