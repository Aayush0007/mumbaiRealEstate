/* src/components/Navbar.jsx */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/data";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for nav links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
    hover: {
      scale: 1.05,
      color: "#60A5FA",
      transition: { duration: 0.3 },
    },
  };

  // Animation for mobile menu
  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`fixed w-full text-white z-50 py-4 px-4 sm:px-6 md:px-12 transition-all duration-500 ${
        isScrolled
          ? "bg-dark/70 backdrop-blur-lg shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <motion.a
            href="#home"
            aria-label="Living Luxura Home"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={Logo}
              alt="Living Luxura Logo"
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
          </motion.a>
          <a
            href="#home"
            className="text-lg sm:text-xl md:text-2xl font-cinzel font-bold text-white hover:text-blue-400 transition-colors duration-300"
          >
            Living Luxura
          </a>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <ul className="hidden md:flex space-x-8 lg:space-x-10">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                whileHover="hover"
                className="relative"
              >
                <a
                  href={link.href}
                  className="text-white font-cinzel font-medium text-lg tracking-wider"
                >
                  {link.name}
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="https://wa.me/9211560084?text=Hello,%20I'm%20interested%20in%20exploring%20properties%20with%20Living%20Luxura.%20Can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-cinzel font-medium text-base px-6 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
            }}
          >
            <FaWhatsapp className="text-lg" /> {/* WhatsApp Icon */}
            Get Started
          </motion.a>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 bg-dark/95 backdrop-blur-md py-6 px-6 min-h-screen"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                aria-label="Close menu"
              >
                <FaTimes size={32} />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center h-full space-y-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  custom={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-white hover:text-blue-400 transition-colors duration-300 font-cinzel font-medium text-xl tracking-wider drop-shadow-md"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
              >
                <motion.a
                  href="https://wa.me/9211560084?text=Hello,%20I'm%20interested%20in%20exploring%20properties%20with%20Living%20Luxura.%20Can%20you%20help%20me?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-cinzel font-medium text-base px-6 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  <FaWhatsapp className="text-lg" /> {/* WhatsApp Icon */}
                  Get Started
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
