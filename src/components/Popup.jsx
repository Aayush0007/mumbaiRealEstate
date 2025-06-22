import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showClose, setShowClose] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    lookingFor: '',
    buyingPlan: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const popupRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowClose(true), 11000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

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
      const cleaned = value.replace(/\D/g, '');
      if (!cleaned) return 'Phone number is required';
      if (!/^[6-9]\d{9}$/.test(cleaned)) return 'Enter a valid 10-digit Indian phone number';
    }
    if (name === 'lookingFor' && !value) return 'Please select an option';
    if (name === 'buyingPlan' && !value) return 'Please select an option';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit phone to digits only and max 10 characters
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length > 10) return;
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      setErrors((prev) => ({ ...prev, [name]: validateField(name, cleaned) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    ['name', 'phone', 'lookingFor', 'buyingPlan'].forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/macros/s/AKfycbwdsD5WMs2vlP-GOUPB-LZeIOcW4hmAkTgmydg1uWzPApUvf1z5Bvouv3wXDjk_vtfbaw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'popup' }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setFormData({ name: '', phone: '', lookingFor: '', buyingPlan: '' });
        setErrors({});
        setSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setSuccess(false);
        }, 2000);
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ form: error.message || 'Failed to submit. Please try again later.' });
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
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-inter"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <motion.div
          ref={popupRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-sm w-full mx-4 border border-gray-100 font-inter"
        >
          {showClose && (
            <motion.button
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-3 right-3 text-dark hover:text-blue-600"
              aria-label="Close popup"
            >
              <FaTimes size={18} />
            </motion.button>
          )}

          <h2 id="popup-title" className="text-xl font-bold text-dark mb-3 text-center">
            Welcome to Living Luxura
          </h2>
          <p className="text-center text-xs text-dark/80 mb-4">
            Share your details to explore luxury properties!
          </p>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-100 text-dark p-2 rounded-lg mb-3 text-center text-xs"
            >
              Thank you! We’ll contact you soon.
            </motion.div>
          )}

          {errors.form && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 text-red-500 p-2 rounded-lg mb-3 text-center text-xs"
            >
              {errors.form}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3" noValidate>
            <div>
              <label htmlFor="popup-name" className="block text-dark text-xs font-semibold mb-1">
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
                className={`w-full py-1 px-2 rounded-lg bg-white/80 text-dark shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm ${
                  errors.name ? 'border-2 border-red-500' : 'border border-gray-200'
                }`}
                placeholder="Your Full Name"
                required
              />
              {errors.name && (
                <motion.p className="text-red-500 text-xs mt-1">{errors.name}</motion.p>
              )}
            </div>

            <div>
              <label htmlFor="popup-phone" className="block text-dark text-xs font-semibold mb-1">
                Mobile No. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="popup-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength="10"
                pattern="[6-9]{1}[0-9]{9}"
                className={`w-full py-1 px-2 rounded-lg bg-white/80 text-dark shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm ${
                  errors.phone ? 'border-2 border-red-500' : 'border border-gray-200'
                }`}
                placeholder="Enter 10-digit phone number"
                required
              />
              {errors.phone && (
                <motion.p className="text-red-500 text-xs mt-1">{errors.phone}</motion.p>
              )}
            </div>

            <div>
              <label htmlFor="popup-lookingFor" className="block text-dark text-xs font-semibold mb-1">
                You are looking for <span className="text-red-500">*</span>
              </label>
              <select
                id="popup-lookingFor"
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-1 px-2 rounded-lg bg-white/80 text-dark shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm ${
                  errors.lookingFor ? 'border-2 border-red-500' : 'border border-gray-200'
                }`}
                required
              >
                <option value="">Select an option</option>
                <option value="Property to Buy">Property to Buy</option>
                <option value="Property For Investment">Property For Investment</option>
              </select>
              {errors.lookingFor && (
                <motion.p className="text-red-500 text-xs mt-1">{errors.lookingFor}</motion.p>
              )}
            </div>

            <div>
              <label htmlFor="popup-buyingPlan" className="block text-dark text-xs font-semibold mb-1">
                Planning to buy <span className="text-red-500">*</span>
              </label>
              <select
                id="popup-buyingPlan"
                name="buyingPlan"
                value={formData.buyingPlan}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-1 px-2 rounded-lg bg-white/80 text-dark shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm ${
                  errors.buyingPlan ? 'border-2 border-red-500' : 'border border-gray-200'
                }`}
                required
              >
                <option value="">Select an option</option>
                <option value="Soon">Soon</option>
                <option value="Within 4 - 6 Months">Within 4 - 6 Months</option>
              </select>
              {errors.buyingPlan && (
                <motion.p className="text-red-500 text-xs mt-1">{errors.buyingPlan}</motion.p>
              )}
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md text-sm ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-4 w-4 mr-1 text-white"
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
                  'Submit'
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
