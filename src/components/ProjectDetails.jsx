import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./common/Button";

const AmenitiesSection = ({ amenities }) => {
  const isZoned = amenities.zones && Array.isArray(amenities.zones);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
        Premium Amenities
      </h3>
      {isZoned ? (
        <div className="space-y-8">
          {amenities.zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
              className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <h4 className="text-xl font-cinzel font-medium text-blue-600 mb-2">
                {zone.name}
              </h4>
              <p className="text-dark/80 text-sm mb-4 font-sans">{zone.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {zone.list.map((item, idx) => (
                  <li key={idx} className="text-dark/80 text-sm flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {amenities.map((amenity, index) => (
            <li key={index} className="text-dark/80 text-sm flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
              {amenity}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

const GallerySection = ({ gallery }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
        Property Gallery
      </h3>
      <div className="relative">
        <motion.img
          key={currentImage}
          src={gallery[currentImage]}
          alt={`Luxury Property Gallery Image ${currentImage + 1} - Haven Global Living`}
          loading="lazy"
          className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600/80 p-3 rounded-full text-white hover:bg-blue-600 transition-colors"
          aria-label="Previous Image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600/80 p-3 rounded-full text-white hover:bg-blue-600 transition-colors"
          aria-label="Next Image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="flex justify-center mt-4 space-x-2 overflow-x-auto">
          {gallery.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                currentImage === index ? 'border-2 border-blue-600' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setCurrentImage(index)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ReraSection = ({ rera }) => (
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

const FaqSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
        Frequently Asked Questions
      </h3>
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200/50 last:border-b-0"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left py-3 flex justify-between items-center text-dark text-sm font-medium font-sans"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>
            <motion.div
              id={`faq-answer-${index}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-dark/80 text-sm pb-3 font-sans">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const QuickLinksSidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const sections = [
    { name: "Property Details", href: "#property-details" },
    { name: "Pricing", href: "#pricing" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Benefits", href: "#benefits" },
    { name: "Location", href: "#location" },
    { name: "Specifications", href: "#specifications" },
    { name: "RERA Details", href: "#rera" },
    { name: "FAQs", href: "#faqs" },
    { name: "Virtual Tour", href: "#virtual-tour" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-32 right-8 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 ${
        isMinimized ? "w-12" : "w-64"
      } lg:block hidden`}
    >
      <div className="flex justify-between items-center mb-4">
        {!isMinimized && (
          <h4 className="text-lg font-cinzel font-semibold text-dark">Quick Links</h4>
        )}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-dark focus:outline-none"
          aria-label={isMinimized ? "Maximize Quick Links" : "Minimize Quick Links"}
        >
          {isMinimized ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>
      {!isMinimized && (
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={section.href}
                className="text-dark/80 hover:text-blue-600 text-sm font-sans transition-colors duration-300"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

const ProjectDetails = ({ project, onBack }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const shareUrl = `${window.location.origin}/properties/${id}`;
  const shareText = `Check out ${project.projectSummary.name} - ${project.projectSummary.tagline}! A luxurious property in Thane by Haven Global Living.`;

  const shareLinks = [
    {
      platform: "Facebook",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      platform: "Twitter",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareText)}`,
    },
    {
      platform: "WhatsApp",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
    },
    {
      platform: "LinkedIn",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733561.png",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        shareUrl
      )}&title=${encodeURIComponent(
        project.projectSummary.name
      )}&summary=${encodeURIComponent(shareText)}`,
    },
    {
      platform: "Instagram",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
      url: `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      platform: "Pinterest",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733567.png",
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        shareUrl
      )}&description=${encodeURIComponent(shareText)}`,
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  const handleNavigation = (functionality) => {
    if (functionality === "#contact") {
      // Navigate to the homepage and scroll to #contact
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector("#contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (functionality === "whatsapp") {
      // Redirect to WhatsApp
      window.location.href = "https://wa.me/9211560084?text=Hello,%20I'd%20like%20to%20schedule%20a%20visit%20for%20a%20luxury%20property%20in%20Thane%20-%20livingluxura.com";
    }
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${project.gallery[0]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4">
              {project.projectSummary.name} - Luxury Living in Thane 2025
            </h1>
            <p className="text-xl font-sans">{project.projectSummary.tagline}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-16 relative"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <Button onClick={() => navigate("/")} className="px-6 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md hover:shadow-lg">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Properties
          </Button>

          <div className="flex flex-wrap items-center gap-2 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg">
            {shareLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                aria-label={`Share on ${link.platform}`}
              >
                <img
                  src={link.icon}
                  alt={`${link.platform} icon`}
                  className="w-8 h-8"
                />
              </motion.a>
            ))}
            <motion.button
              onClick={copyLink}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              aria-label="Copy Link"
            >
              <svg
                className="w-8 h-8 text-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <img
            src={project.projectSummary.logo}
            alt={`${project.projectSummary.name} Logo - Haven Global Living`}
            loading="lazy"
            className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-blue-600 shadow-lg object-cover"
          />
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-dark mb-2 tracking-wide">
            {project.projectSummary.name}
          </h2>
          <p className="text-xl text-blue-600 font-sans mb-4">
            {project.projectSummary.tagline}
          </p>
          <p className="text-dark/80 text-base max-w-3xl mx-auto font-sans">
            {project.projectSummary.description}
          </p>
          <ul className="flex flex-wrap justify-center gap-4 mt-6">
            {project.projectSummary.highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-dark/80 text-sm shadow-lg"
              >
                {highlight}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          id="property-details"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
            Property Details
          </h3>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
            <h4 className="text-xl font-cinzel font-medium text-blue-600 mb-2">
              Overview
            </h4>
            <p className="text-dark/80 text-sm mb-4 font-sans">{project.details.overview}</p>
            <h4 className="text-xl font-cinzel font-medium text-blue-600 mb-2">
              Configuration
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-dark border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left font-cinzel font-medium border-b border-gray-200/50">
                      Type
                    </th>
                    <th className="px-4 py-2 text-left font-cinzel font-medium border-b border-gray-200/50">
                      Size
                    </th>
                    <th className="px-4 py-2 text-left font-cinzel font-medium border-b border-gray-200/50">
                      Layout
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {project.details.configuration.map((config, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200/50 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-sans">{config.type}</td>
                      <td className="px-4 py-3 font-sans">{config.size}</td>
                      <td className="px-4 py-3 font-sans">{config.layout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h4 className="text-xl font-cinzel font-medium text-blue-600 mt-6 mb-2">
              Floor Plans
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.details.plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-4 rounded-lg shadow-lg"
                >
                  {plan.mediaType === "image" ? (
                    <img
                      src={plan.url}
                      alt={`${plan.type} Floor Plan - ${project.projectSummary.name}`}
                      loading="lazy"
                      className="w-full h-40 object-cover rounded-md mb-2"
                    />
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        plan.url.split("v=")[1].split("&")[0]
                      }`}
                      title={`${plan.type} Video - ${project.projectSummary.name}`}
                      className="w-full h-40 rounded-md mb-2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  <p className="text-dark text-sm font-medium text-center font-sans">
                    {plan.type}
                  </p>
                </motion.div>
              ))}
            </div>
            <h4 className="text-xl font-cinzel font-medium text-blue-600 mt-6 mb-2">
              Features
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.details.features.map((feature, index) => (
                <li key={index} className="text-dark/80 text-sm flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          id="pricing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
            Pricing & Offers
          </h3>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-dark border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left font-cinzel font-medium border-b border-gray-200/50">
                      Type
                    </th>
                    <th className="px-4 py-2 text-left font-cinzel font-medium border-b border-gray-200/50">
                      Carpet Area
                    </th>
                    <th className="px-4 py-2 text-left font-cinzel font-medium border-b border-gray-200/50">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {project.pricing.pricingTable.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200/50 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-sans">{row.type}</td>
                      <td className="px-4 py-3 font-sans">{row.carpetArea}</td>
                      <td className="px-4 py-3 font-sans text-blue-600">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {project.pricing.offers && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-6"
              >
                <h4 className="text-xl font-cinzel font-medium text-blue-600 mb-2">
                  Special Offers
                </h4>
                <ul className="space-y-2">
                  {project.pricing.offers.map((offer, index) => (
                    <li
                      key={index}
                      className="text-dark/80 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                      {offer}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        <div id="amenities">
          <AmenitiesSection amenities={project.amenities} />
        </div>
        <div id="gallery">
          <GallerySection gallery={project.gallery} />
        </div>

        <motion.div
          id="benefits"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
            Exclusive Benefits
          </h3>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.benefits.map((benefit, index) => (
                <li key={index} className="text-dark/80 text-sm flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          id="location"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
            Prime Location in Thane
          </h3>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
            <p className="text-dark/80 font-cinzel mb-2">{project.location.address}</p>
            <p className="text-dark/80 text-sm max-w-2xl mb-6 font-sans">
              {project.location.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-cinzel font-medium text-blue-600 mb-4">
                  Connectivity
                </h4>
                <ul className="space-y-3">
                  {project.location.connectivity.map((item, index) => (
                    <li
                      key={index}
                      className="text-dark/80 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                      {item.landmark} - {item.distance}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-cinzel font-medium text-blue-600 mb-4">
                  Nearby Landmarks
                </h4>
                <ul className="space-y-3">
                  {project.location.nearbyLandmarks.map((item, index) => (
                    <li key={index} className="text-dark/80 text-sm">
                      <span className="font-medium font-sans">{item.category}:</span>{" "}
                      {item.names.join(", ")}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="specifications"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
            Specifications
          </h3>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
            <ul className="space-y-3">
              <li className="text-dark/80 text-sm">
                <span className="font-medium font-sans">Flooring:</span>{" "}
                {project.specifications.flooring}
              </li>
              <li className="text-dark/80 text-sm">
                <span className="font-medium font-sans">Kitchen:</span>{" "}
                {project.specifications.kitchen}
              </li>
              <li className="text-dark/80 text-sm">
                <span className="font-medium font-sans">Doors:</span> {project.specifications.doors}
              </li>
              <li className="text-dark/80 text-sm">
                <span className="font-medium font-sans">Electrical:</span>{" "}
                {project.specifications.electrical}
              </li>
            </ul>
          </div>
        </motion.div>

        <div id="rera">
          <ReraSection rera={project.rera} />
        </div>
        <div id="faqs">
          <FaqSection faqs={project.faqs} />
        </div>

        <motion.div
          id="virtual-tour"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
            Experience a Virtual Tour
          </h3>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <p className="text-dark/80 text-sm mb-4 font-sans">{project.virtualTour.description}</p>
            <Button
              href={project.virtualTour.link}
              className="px-6 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md hover:shadow-lg"
              aria-label="Take a Virtual Tour"
            >
              Take a Virtual Tour
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-4xl font-cinzel font-semibold text-dark mb-6">
            Take the Next Step with Haven Global Living
          </h3>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {project.ctaOptions.map((cta, index) => (
              <Button
                key={index}
                onClick={() => handleNavigation(cta.functionality)}
                className="px-8 py-3 text-base bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md hover:shadow-lg"
                aria-label={cta.type}
              >
                {cta.type}
              </Button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <QuickLinksSidebar />
    </div>
  );
};

export default ProjectDetails;