import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "./common/Button";
import Section from "./common/Section";

const FormField = ({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required,
  icon,
}) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="block text-dark text-sm font-semibold mb-2 font-sans"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark/50">
          {icon}
        </span>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full py-3 ${
          icon ? "pl-10" : "pl-4"
        } pr-4 rounded-lg bg-white/80 text-dark shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${
          error ? "border-2 border-red-500" : "border border-gray-200"
        }`}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        required={required}
      />
    </div>
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
    name: "",
    mobile: "",
    livingIn: "",
    propertyLocation: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  const fields = [
    {
      id: "name",
      label: "Name",
      name: "name",
      placeholder: "Your Full Name",
      required: true,
      icon: "👤",
    },
    {
      id: "mobile",
      label: "Mobile No.",
      name: "mobile",
      type: "tel",
      placeholder: "9876543210",
      required: true,
      icon: "📞",
    },
  ];

  const livingInOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Outside Mumbai", label: "Outside Mumbai" },
  ];

  const propertyLocationOptions = [
    { value: "Rent", label: "Rent" },
    { value: "Buy", label: "Buy" },
  ];

  const validateField = (name, value) => {
    if (name === "name" && !value.trim()) return "Name is required";
    if (name === "mobile") {
      if (!value.trim()) return "Mobile number is required";
      const cleanValue = value.replace(/\D/g, "");
      if (!/^[6-9]\d{9}$/.test(cleanValue)) {
        return "Mobile number must be a valid 10-digit Indian number starting with 6, 7, 8, or 9";
      }
    }
    if (name === "livingIn" && !value) return "Please select an option";
    if (name === "propertyLocation" && !value) return "Please select an option";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;
    if (name === "mobile") {
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, sanitizedValue),
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;
    if (name === "mobile") {
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, sanitizedValue),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    ["name", "mobile", "livingIn", "propertyLocation"].forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "/api/macros/s/AKfycbwn30pcr7SqpkGFGqWp3H-obDdFiqqNk9cuAywpXTaxP60xpitIgCcKmv4m8NFMP-Y/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, formType: "contactUs" }),
        }
      );
      const result = await response.json();
      if (result.status === "success") {
        setFormData({
          name: "",
          mobile: "",
          livingIn: "",
          propertyLocation: "",
        });
        setErrors({});
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        formRef.current.focus();
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ form: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-white to-gray-50"
    >
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
          className="text-4xl md:text-5xl font-cinzel font-bold text-center text-dark mb-4"
        >
          Contact Us for Luxury Properties in Thane, Mumbai
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg md:text-xl font-sans text-dark/80 max-w-3xl mx-auto mb-8"
        >
          Let’s find your dream home! Share your details to inquire about
          exclusive homes with Living Luxura.
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-blue-100 text-dark p-4 rounded-lg mb-6 text-center flex items-center justify-center"
            >
              <motion.svg
                className="w-6 h-6 text-green-500 mr-2"
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
              Form submitted successfully! We’ll get back to you soon.
            </motion.div>
          )}
          {errors.form && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 text-red-500 p-4 rounded-lg mb-6 text-center"
            >
              {errors.form}
            </motion.div>
          )}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
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

            <div>
              <label className="block text-dark text-sm font-semibold mb-2 font-sans">
                You are living in? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {livingInOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="livingIn"
                      value={option.value}
                      checked={formData.livingIn === option.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="hidden"
                      required
                    />
                    <span
                      className={`flex items-center px-4 py-2 rounded-md border cursor-pointer transition-all ${
                        formData.livingIn === option.value
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white/80 border-gray-200 hover:border-blue-600"
                      }`}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.livingIn && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.livingIn}
                </motion.p>
              )}
            </div>

            <div>
              <label className="block text-dark text-sm font-semibold mb-2 font-sans">
                Looking for property in Thane to...{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {propertyLocationOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="propertyLocation"
                      value={option.value}
                      checked={formData.propertyLocation === option.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="hidden"
                      required
                    />
                    <span
                      className={`flex items-center px-4 py-2 rounded-md border cursor-pointer transition-all ${
                        formData.propertyLocation === option.value
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white/80 border-gray-200 hover:border-blue-600"
                      }`}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.propertyLocation && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.propertyLocation}
                </motion.p>
              )}
            </div>

            <div className="flex items-center justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md hover:shadow-lg ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
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
                    Sending...
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ContactForm;
