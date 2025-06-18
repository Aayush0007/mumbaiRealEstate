import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(() => !localStorage.getItem('popupClosed'));
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
  const lastFocusableRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowClose(true), 10000);
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
        handleClose();
      }
      if (e.key === 'Tab' && isOpen) {
        const focusable = popupRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, showClose]);

  const validateField = useCallback((name, value) => {
    if (name === 'phone') {
      if (!value.trim()) return 'Phone number is required';
      if (!/^[6-9]\d{9}$/.test(value.replace(/\D/g, ''))) return 'Enter a valid 10-digit Indian mobile number';
    }
    // Optional fields: only validate if filled
    if (name === 'name' && value.trim() && value.length < 2) return 'Name must be at least 2 characters';
    if (name === 'lookingFor' && value && !['Property to Buy', 'Property For Investment'].includes(value)) return 'Invalid option';
    if (name === 'buyingPlan' && value && !['Soon', 'Within 4 - 6 Months', 'Later'].includes(value)) return 'Invalid option';
    return '';
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Allow only digits and limit to 10
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

  const handleClose = useCallback(() => {
    setIsOpen(false);
    localStorage.setItem('popupClosed', 'true');
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const newErrors = { phone: validateField('phone', formData.phone) };
    // Only validate optional fields if they have values
    ['name', 'lookingFor', 'buyingPlan'].forEach((field) => {
      if (formData[field]) newErrors[field] = validateField(field, formData[field]);
    });

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({}); // Clear previous form errors
    try {
      const response = await fetch('/api/macros/s/AKfycbxWToaoFBkzLC2klLCMM5yWbwrWMAUxNlkpv3txG0ckxhYxMn-y9N-Sx8OCKxtWKnIHcA/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'popup' }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setFormData({ name: '', phone: '', lookingFor: '', buyingPlan: '' });
        setErrors({});
        setSuccess(true);
        setTimeout(() => {
          handleClose();
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
  }, [formData, validateField, handleClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="popup"
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
          transition={{ duration: 0.5, type: 'spring' }}
          className="relative bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-sm w-full mx-4 border border-gray-200"
        >
          {showClose && (
            <motion.button
              type="button"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-3 right-3 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Close popup"
            >
              <FaTimes size={18} />
            </motion.button>
          )}

          <h2
            id="popup-title"
            className="text-2xl font-playfair font-bold text-gray-800 mb-3 text-center"
          >
            Welcome to Living Luxura
          </h2>
          <p className="text-center text-sm text-gray-600 mb-4 font-inter">
            Share your details to explore luxury properties!
          </p>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 text-blue-700 p-2 rounded-lg mb-3 text-center text-sm font-inter"
            >
              Thank you! We’ll contact you soon.
            </motion.div>
          )}

          {errors.form && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-600 p-2 rounded-lg mb-3 text-center text-sm font-inter"
            >
              {errors.form}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label
                htmlFor="popup-name"
                className="block text-gray-700 text-sm font-semibold mb-1 font-inter"
              >
                Name
              </label>
              <input
                ref={firstInputRef}
                type="text"
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-inter ${
                  errors.name ? 'border-2 border-red-500' : 'border border-gray-300'
                }`}
                placeholder="Your Full Name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'popup-name-error' : undefined}
              />
              {errors.name && (
                <motion.p
                  id="popup-name-error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-xs mt-1 font-inter"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div>
              <label
                htmlFor="popup-phone"
                className="block text-gray-700 text-sm font-semibold mb-1 font-inter"
              >
                Mobile No. <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="popup-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={10}
                className={`w-full py-2 px-3 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-inter ${
                  errors.phone ? 'border-2 border-red-500' : 'border border-gray-300'
                }`}
                placeholder="Enter 10-digit number"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'popup-phone-error' : undefined}
                aria-required="true"
                required
              />
              {errors.phone && (
                <motion.p
                  id="popup-phone-error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-xs mt-1 font-inter"
                >
                  {errors.phone}
                </motion.p>
              )}
            </div>

            <div>
              <label
                htmlFor="popup-lookingFor"
                className="block text-gray-700 text-sm font-semibold mb-1 font-inter"
              >
                You are looking for
              </label>
              <select
                id="popup-lookingFor"
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-inter ${
                  errors.lookingFor ? 'border-2 border-red-500' : 'border border-gray-300'
                }`}
                aria-invalid={!!errors.lookingFor}
                aria-describedby={errors.lookingFor ? 'popup-lookingFor-error' : undefined}
              >
                <option value="">Select an option (Optional)</option>
                <option value="Property to Buy">Property to Buy</option>
                <option value="Property For Investment">Property For Investment</option>
              </select>
              {errors.lookingFor && (
                <motion.p
                  id="popup-lookingFor-error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-xs mt-1 font-inter"
                >
                  {errors.lookingFor}
                </motion.p>
              )}
            </div>

            <div>
              <label
                htmlFor="popup-buyingPlan"
                className="block text-gray-700 text-sm font-semibold mb-1 font-inter"
              >
                Planning to buy
              </label>
              <select
                id="popup-buyingPlan"
                name="buyingPlan"
                value={formData.buyingPlan}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-inter ${
                  errors.buyingPlan ? 'border-2 border-red-500' : 'border border-gray-300'
                }`}
                aria-invalid={!!errors.buyingPlan}
                aria-describedby={errors.buyingPlan ? 'popup-buyingPlan-error' : undefined}
                ref={lastFocusableRef}
              >
                <option value="">Select an option (Optional)</option>
                <option value="Soon">Soon</option>
                <option value="Within 4 - 6 Months">Within 4 - 6 Months</option>
                <option value="Later">Later</option>
              </select>
              {errors.buyingPlan && (
                <motion.p
                  id="popup-buyingPlan-error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-xs mt-1 font-inter"
                >
                  {errors.buyingPlan}
                </motion.p>
              )}
            </div>

            <div className="flex justify-center mt-5">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-inter text-sm shadow-md ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-4 w-4 mr-2 text-white"
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
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;