import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { footerContent, navLinks } from "../data/data";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const iconMap = {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
};

const CompanyInfo = ({ companyName, address, phone, email, tagline }) => {
  const { theme } = useTheme();
  return (
    <section aria-label="Company Information">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-cinzel font-bold text-blue-600 mb-4"
      >
        {companyName}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm text-gray-300 mb-3 font-sans"
      >
        {tagline}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-gray-300 mb-2 font-sans"
      >
        📍 {address}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-sm text-gray-300 mb-2 font-sans"
      >
        📞{" "}
        <a
          href={`tel:${phone}`}
          className="hover:text-blue-400 transition-colors"
        >
          {phone}
        </a>
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-sm text-gray-300 mb-2 font-sans"
      >
        📧{" "}
        <a
          href={`mailto:${email}`}
          className="hover:text-blue-400 transition-colors"
        >
          {email}
        </a>
      </motion.p>
      <motion.a
        href="https://wa.me/9211560084?text=Hello,%20I'd%20like%20to%20inquire%20about%20luxury%20properties%20in%20Thane%20-%20livingluxura.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors font-sans"
      >
        <FaWhatsapp className="mr-2" /> Chat on WhatsApp
      </motion.a>
    </section>
  );
};

const QuickLinks = ({ links }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const additionalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/privacy-policy" },
  ];
  const allLinks = [...links, ...additionalLinks];

  const handleLinkClick = (href) => {
    if (href.startsWith("#")) {
      if (window.location.pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <section aria-label="Quick Links">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-cinzel font-semibold text-blue-600 mb-4"
      >
        Quick Links
      </motion.h4>
      <nav>
        <ul className="space-y-2">
          {allLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => handleLinkClick(link.href)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-sans"
                aria-current={
                  window.location.pathname === link.href ? "page" : undefined
                }
              >
                {link.name}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/macros/s/AKfycbxWToaoFBkzLC2klLCMM5yWbwrWMAUxNlkpv3txG0ckxhYxMn-y9N-Sx8OCKxtWKnIHcA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, formType: 'newsletter' }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setEmail("");
        setMessage("Subscribed successfully! Stay tuned for updates.");
        setTimeout(() => setMessage(""), 3000);
      } else {
        throw new Error(result.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section aria-label="Newsletter Subscription">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-cinzel font-semibold text-blue-600 mb-4"
      >
        Stay Updated
      </motion.h4>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm text-gray-300 mb-4 font-sans"
      >
        Subscribe to our newsletter for the latest luxury property updates in
        Thane 2025.
      </motion.p>
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-sm mb-2 font-sans ${
            message.includes("success") ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </motion.p>
      )}
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <motion.input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full py-2 px-4 rounded-md bg-gray-700 text-gray-300 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Email for newsletter subscription"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md font-sans text-sm ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </motion.button>
      </form>
    </section>
  );
};

const SocialMedia = ({ socialLinks }) => {
  const { theme } = useTheme();
  return (
    <section aria-label="Social Media">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-cinzel font-semibold text-blue-600 mb-4"
      >
        Follow Us
      </motion.h4>
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => {
          const IconComponent = iconMap[link.icon];
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.2,
                rotate: 5,
                background: "linear-gradient(to right, #2563eb, #1e40af)",
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-gray-300 bg-gray-700 p-2 rounded-full shadow-md transition-colors"
              aria-label={`Follow us on ${link.name}`}
            >
              <IconComponent size={24} />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={handleScrollToTop}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-full shadow-lg"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </motion.button>
  );
};

const Footer = () => {
  const { theme } = useTheme();

  const updatedSocialLinks = [
    {
      name: "Facebook",
      icon: "FaFacebook",
      href:
        footerContent.socialLinks.find((l) => l.name === "Facebook")?.href ||
        "https://www.facebook.com/livingluxura",
    },
    {
      name: "Instagram",
      icon: "FaInstagram",
      href:
        footerContent.socialLinks.find((l) => l.name === "Instagram")?.href ||
        "https://www.instagram.com/living.luxura",
    },
    {
      name: "WhatsApp",
      icon: "FaWhatsapp",
      href: "https://wa.me/9211560084?text=Hello,%20I'd%20like%20to%20inquire%20about%20luxury%20properties%20in%20Thane%20-%20livingluxura.com",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Living Luxura",
    "url": "https://livingluxura.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kolshet Road,  Thane West",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "postalCode": "400601",
      "addressCountry": "India",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 921 156 0084",
      "contactType": "Customer Service",
      "email": "connect@marketingbirbal.com",
    },
    "sameAs": updatedSocialLinks.map((link) => link.href),
  };

  return (
    <footer
      className="bg-gray-900 text-gray-300 py-12 md:py-16 relative overflow-hidden"
      aria-label="Website Footer"
    >
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <CompanyInfo
            companyName="Living Luxura"
            tagline="Your Gateway to Luxury Real Estate in Thane 2025"
            address="Kolshet Road, Thane West, Maharashtra 400601"
            phone="+91 921 156 0084"
            email="connect@marketingbirbal.com"
          />
          <QuickLinks links={navLinks || []} />
          <Newsletter />
          <SocialMedia socialLinks={updatedSocialLinks} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 font-sans"
        >
          © 2025 Living Luxura. All rights reserved. <br />
          Managed and maintained by the team at{" "}
          <motion.a
            href="https://www.marketingbirbal.com/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Marketing Birbal
          </motion.a>
          .
        </motion.div>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;