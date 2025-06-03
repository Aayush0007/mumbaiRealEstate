import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { footerContent, navLinks } from '../data/data';
import { useTheme } from '../context/ThemeContext';

const iconMap = {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
};

const CompanyInfo = ({ companyName, address, phone, email }) => {
  const { theme } = useTheme();
  return (
    <section aria-label="Company Information">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold font-serif text-primary mb-4"
      >
        {companyName}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm text-offwhite mb-2"
      >
        {address}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-offwhite mb-2"
      >
        Phone: <a href={`tel:${phone}`} className="hover:text-accent transition-colors">{phone}</a>
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-sm text-offwhite"
      >
        Email: <a href={`mailto:${email}`} className="hover:text-accent transition-colors">{email}</a>
      </motion.p>
    </section>
  );
};

const QuickLinks = ({ links }) => {
  const { theme } = useTheme();
  return (
    <section aria-label="Quick Links">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold text-primary mb-4"
      >
        Quick Links
      </motion.h4>
      <nav>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={link.href}
                className="text-offwhite hover:text-accent transition-colors duration-200 text-sm"
                aria-current={window.location.pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
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
        className="text-xl font-semibold text-primary mb-4"
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
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-offwhite hover:text-accent bg-light/10 p-2 rounded-full shadow-cute transition-colors"
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

const Footer = () => {
  const { theme } = useTheme();

  const updatedSocialLinks = [
    { name: 'Facebook', icon: 'FaFacebook', href: footerContent.socialLinks.find(l => l.name === 'Facebook')?.href || '#' },
    { name: 'Twitter', icon: 'FaTwitter', href: footerContent.socialLinks.find(l => l.name === 'Twitter')?.href || '#' },
    { name: 'Instagram', icon: 'FaInstagram', href: footerContent.socialLinks.find(l => l.name === 'Instagram')?.href || '#' },
    { name: 'LinkedIn', icon: 'FaLinkedin', href: 'https://www.linkedin.com/company/yourcompany' },
    { name: 'Pinterest', icon: 'FaPinterest', href: 'https://www.pinterest.com/yourcompany' },
  ];

  return (
    <footer
      className="bg-dark text-offwhite py-12 md:py-16 relative overflow-hidden"
      aria-label="Website Footer"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <CompanyInfo
            companyName={footerContent.companyName || 'Mumbai Real Estate'}
            address={footerContent.address || '123 Thane Road, Mumbai, India'}
            phone={footerContent.phone || '+91 123 456 7890'}
            email={footerContent.email || 'info@mumbairealestate.com'}
          />
          <QuickLinks links={navLinks || []} />
          <SocialMedia socialLinks={updatedSocialLinks} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-offwhite/20 mt-10 pt-6 text-center text-sm text-offwhite/70"
        >
          {footerContent.copyright || `© ${new Date().getFullYear()} Mumbai Real Estate. All rights reserved.`}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;