/* src/components/Footer.jsx */
import { footerContent, navLinks } from '../data/data'; // Add navLinks import
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const iconMap = {
  FaFacebook: FaFacebook,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
};

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-10 md:py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold font-serif text-primary mb-4">
            {footerContent.companyName}
          </h3>
          <p className="text-sm mb-2">{footerContent.address}</p>
          <p className="text-sm mb-2">Phone: {footerContent.phone}</p>
          <p className="text-sm">Email: {footerContent.email}</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-primary">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-primary">Follow Us</h4>
          <div className="flex space-x-4">
            {footerContent.socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-primary transition-colors duration-200 text-2xl"
                  aria-label={link.name}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        {footerContent.copyright}
      </div>
    </footer>
  );
};

export default Footer;