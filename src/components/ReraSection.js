import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./common/Button"; // Adjust path as needed

const ReraSection = ({ rera }) => {
  const [imageError, setImageError] = useState({}); // State to track image errors

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true })); // Mark image at index as failed
  };

  console.log("RERA QR Codes:", rera.qrCodes); // Debug log

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
        RERA Details
      </h3>
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
        <p className="text-dark/80 text-sm mb-4 font-sans">{rera.description}</p>
        <ul className="space-y-2 mb-4">
          {rera.registrationNumbers.map((number, index) => (
            <li key={index} className="text-dark/80 text-sm flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
              {number}
            </li>
          ))}
        </ul>
        {rera.qrCodes && rera.qrCodes.length > 0 ? (
          <>
            <h4 className="text-xl font-cinzel font-medium text-blue-600 mb-2">RERA QR Codes</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {rera.qrCodes.map((qrCode, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-32 h-32"
                >
                  {!imageError[index] ? (
                    <img
                      src={qrCode.url}
                      alt={`RERA QR Code ${index + 1}`}
                      className="w-full h-full object-contain rounded-md hover:shadow-lg"
                      loading="lazy"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-md text-dark/80 text-sm font-sans">
                      QR Code Unavailable
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-dark/80 text-sm mb-4 font-sans">No RERA QR codes available.</p>
        )}
        <Button
          href={rera.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md hover:shadow-lg"
          aria-label="Visit MahaRERA Website"
        >
          Visit MahaRERA Website
        </Button>
      </div>
    </motion.div>
  );
};

export default ReraSection;