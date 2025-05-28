/* src/components/Navbar.jsx */
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../data/data";
import Button from "./common/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed w-full bg-white bg-opacity-95 shadow-lg z-50 py-4 px-6 md:px-12"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold font-serif text-dark hover:text-primary transition-colors duration-300"
          aria-label="Dream Estates Home"
        >
          Dream Estates
        </a>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-dark hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Button href="#contact" className="hidden md:block">
          Get Started
        </Button>
        <button
          onClick={toggleMenu}
          className="md:hidden text-dark focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white py-4 mt-2 border-t border-gray-200"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-dark hover:text-primary transition-colors duration-300 font-medium text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button
              href="#contact"
              onClick={toggleMenu}
              className="border-2 border-[${theme.accent}] hover:border-[${theme.dark}] text-[${theme.dark}] font-bold py-2 px-6 animate-pulse-button"
            >
              Get Started
            </Button>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
