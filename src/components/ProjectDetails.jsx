import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";

const AmenitiesSection = ({ amenities }) => {
  const isZoned = amenities.zones && Array.isArray(amenities.zones);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h3 className="text-3xl font-serif font-semibold text-text mb-6">
        Amenities
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
              className="bg-light p-6 rounded-xl shadow-cute border border-offwhite"
            >
              <h4 className="text-xl font-sans font-medium text-accent mb-2">
                {zone.name}
              </h4>
              <p className="text-text text-sm mb-4">{zone.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {zone.list.map((item, idx) => (
                  <li key={idx} className="text-text text-sm flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2" />
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
            <li key={index} className="text-text text-sm flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2" />
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
      className="mb-12"
    >
      <h3 className="text-3xl font-serif font-semibold text-text mb-6">
        Gallery
      </h3>
      <div className="relative">
        <motion.img
          key={currentImage}
          src={gallery[currentImage]}
          alt={`Gallery Image ${currentImage + 1}`}
          loading="lazy"
          className="w-full h-96 object-cover rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/80 p-3 rounded-full text-text hover:bg-primary transition-colors"
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
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/80 p-3 rounded-full text-text hover:bg-primary transition-colors"
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
        <div className="flex justify-center mt-4 space-x-2">
          {gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full ${
                currentImage === index
                  ? "bg-accent"
                  : "bg-offwhite hover:bg-accent-light"
              }`}
              aria-label={`Go to image ${index + 1}`}
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
    className="mb-12"
  >
    <h3 className="text-3xl font-serif font-semibold text-text mb-6">
      RERA Details
    </h3>
    <div className="bg-light p-6 rounded-xl shadow-cute border border-offwhite">
      <p className="text-text text-sm mb-4">{rera.description}</p>
      <ul className="space-y-2 mb-4">
        {rera.registrationNumbers.map((number, index) => (
          <li key={index} className="text-text text-sm flex items-center">
            <span className="w-2 h-2 bg-accent rounded-full mr-2" />
            {number}
          </li>
        ))}
      </ul>
      <Button
        href={rera.link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 text-sm"
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
      className="mb-12"
    >
      <h3 className="text-3xl font-serif font-semibold text-text mb-6">
        Frequently Asked Questions
      </h3>
      <div className="bg-light p-6 rounded-xl shadow-cute border border-offwhite">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-offwhite/50 last:border-b-0"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left py-3 flex justify-between items-center text-text text-sm font-medium"
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
              <p className="text-text text-sm pb-3">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectDetails = ({ project, onBack }) => {
  const navigate = useNavigate();
  const {
    projectSummary,
    details,
    pricing,
    amenities,
    gallery,
    benefits,
    location,
    specifications,
    virtualTour,
    ctaOptions,
    rera,
    faqs,
  } = project;

  const shareUrl = `${window.location.origin}/properties/${projectSummary.name
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
  const shareText = `Check out ${projectSummary.name} - ${projectSummary.tagline}! A luxurious property in Thane.`;

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
        projectSummary.name
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-16"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <Button onClick={() => navigate("/")} className="px-6 py-2 text-sm">
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

        <div className="flex flex-wrap items-center gap-2 bg-light p-3 rounded-xl shadow-cute">
          {shareLinks.map((link) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-offwhite hover:bg-accent-light transition-colors"
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
            className="p-2 rounded-full bg-offwhite hover:bg-accent-light transition-colors"
            aria-label="Copy Link"
          >
            <svg
              className="w-8 h-8 text-text"
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
        className="text-center mb-12"
      >
        <img
          src={projectSummary.logo}
          alt={`${projectSummary.name} Logo`}
          loading="lazy"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-accent shadow-cute object-cover"
        />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text mb-2 tracking-wide">
          {projectSummary.name}
        </h2>
        <p className="text-xl text-accent font-sans mb-4">
          {projectSummary.tagline}
        </p>
        <p className="text-text text-base max-w-2xl mx-auto">
          {projectSummary.description}
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          {projectSummary.highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              className="bg-light px-4 py-2 rounded-full text-text text-sm shadow-cute"
            >
              {highlight}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-serif font-semibold text-text mb-6">
          Property Details
        </h3>
        <div className="bg-light p-6 rounded-xl shadow-cute border border-offwhite">
          <h4 className="text-xl font-sans font-medium text-accent mb-2">
            Overview
          </h4>
          <p className="text-text text-sm mb-4">{details.overview}</p>
          <h4 className="text-xl font-sans font-medium text-accent mb-2">
            Configuration
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-text border-collapse">
              <thead>
                <tr className="bg-offwhite">
                  <th className="px-4 py-2 text-left font-sans font-medium border-b border-offwhite/50">
                    Type
                  </th>
                  <th className="px-4 py-2 text-left font-sans font-medium border-b border-offwhite/50">
                    Size
                  </th>
                  <th className="px-4 py-2 text-left font-sans font-medium border-b border-offwhite/50">
                    Layout
                  </th>
                </tr>
              </thead>
              <tbody>
                {details.configuration.map((config, index) => (
                  <tr
                    key={index}
                    className="border-b border-offwhite/50 hover:bg-offwhite/30"
                  >
                    <td className="px-4 py-3 font-sans">{config.type}</td>
                    <td className="px-4 py-3 font-sans">{config.size}</td>
                    <td className="px-4 py-3 font-sans">{config.layout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h4 className="text-xl font-sans font-medium text-accent mt-6 mb-2">
            Floor Plans
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {details.plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-offwhite p-4 rounded-lg shadow-cute"
              >
                {plan.mediaType === "image" ? (
                  <img
                    src={plan.url}
                    alt={`${plan.type} Floor Plan`}
                    loading="lazy"
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${
                      plan.url.split("v=")[1].split("&")[0]
                    }`}
                    title={`${plan.type} Video`}
                    className="w-full h-40 rounded-md mb-2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                <p className="text-text text-sm font-medium text-center">
                  {plan.type}
                </p>
              </motion.div>
            ))}
          </div>
          <h4 className="text-xl font-sans font-medium text-accent mt-6 mb-2">
            Features
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {details.features.map((feature, index) => (
              <li key={index} className="text-text text-sm flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-serif font-semibold text-text mb-6">
          Pricing
        </h3>
        <div className="bg-light p-6 rounded-xl shadow-cute border border-offwhite">
          <div className="overflow-x-auto">
            <table className="w-full text-text border-collapse">
              <thead>
                <tr className="bg-offwhite">
                  <th className="px-4 py-2 text-left font-sans font-medium border-b border-offwhite/50">
                    Type
                  </th>
                  <th className="px-4 py-2 text-left font-sans font-medium border-b border-offwhite/50">
                    Carpet Area
                  </th>
                  <th className="px-4 py-2 text-left font-sans font-medium border-b border-offwhite/50">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.pricingTable.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-offwhite/50 hover:bg-offwhite/30"
                  >
                    <td className="px-4 py-3 font-sans">{row.type}</td>
                    <td className="px-4 py-3 font-sans">{row.carpetArea}</td>
                    <td className="px-4 py-3 font-sans text-accent">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pricing.offers && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <h4 className="text-xl font-sans font-medium text-accent mb-2">
                Special Offers
              </h4>
              <ul className="space-y-2">
                {pricing.offers.map((offer, index) => (
                  <li
                    key={index}
                    className="text-text text-sm flex items-center"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                    {offer}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>

      <AmenitiesSection amenities={amenities} />
      <GallerySection gallery={gallery} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-serif font-semibold text-text mb-6">
          Benefits
        </h3>
        <div className="bg-light p-6 rounded-xl shadow-cute border border-offwhite">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-text text-sm flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-serif font-semibold text-text mb-6">
          Location
        </h3>
        <div className="bg-light p-6 rounded-xl shadow-cute border border-offwhite">
          <p className="text-text font-sans mb-2">{location.address}</p>
          <p className="text-text text-sm max-w-2xl mb-6">
            {location.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-sans font-medium text-accent mb-4">
                Connectivity
              </h4>
              <ul className="space-y-3">
                {location.connectivity.map((item, index) => (
                  <li
                    key={index}
                    className="text-text text-sm flex items-center"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                    {item.landmark} - {item.distance}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-sans font-medium text-accent mb-4">
                Nearby Landmarks
              </h4>
              <ul className="space-y-3">
                {location.nearbyLandmarks.map((item, index) => (
                  <li key={index} className="text-text text-sm">
                    <span className="font-medium">{item.category}:</span>{" "}
                    {item.names.join(", ")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-serif font-semibold text-text mb-6">
          Specifications
        </h3>
        <div className="bg-light p-6 rounded-xl shadow-cute border border-offwhite">
          <ul className="space-y-3">
            <li className="text-text text-sm">
              <span className="font-medium">Flooring:</span>{" "}
              {specifications.flooring}
            </li>
            <li className="text-text text-sm">
              <span className="font-medium">Kitchen:</span>{" "}
              {specifications.kitchen}
            </li>
            <li className="text-text text-sm">
              <span className="font-medium">Doors:</span> {specifications.doors}
            </li>
            <li className="text-text text-sm">
              <span className="font-medium">Electrical:</span>{" "}
              {specifications.electrical}
            </li>
          </ul>
        </div>
      </motion.div>

      <ReraSection rera={rera} />
      <FaqSection faqs={faqs} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-serif font-semibold text-text mb-6">
          Virtual Tour
        </h3>
        <div className="bg-light p-6 rounded-xl shadow-cute border border-offwhite text-center">
          <p className="text-text text-sm mb-4">{virtualTour.description}</p>
          <Button
            href={virtualTour.link}
            className="px-6 py-2 text-sm"
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
        <h3 className="text-3xl font-serif font-semibold text-text mb-6">
          Take the Next Step
        </h3>
        <div className="flex justify-center space-x-4">
          {ctaOptions.map((cta, index) => (
            <Button
              key={index}
              href={cta.functionality}
              className="px-8 py-3 text-base"
              aria-label={cta.type}
            >
              {cta.type}
            </Button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
