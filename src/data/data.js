/* src/data/data.js */
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Properties', href: '#properties' },
  // { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const heroContent = {
  headline: 'Find Your Perfect Home',
  subheadline: 'Discover luxury properties tailored to your lifestyle with Dream Estates.',
  ctaButton: 'Contact Us',
  ctaLink: '#contact',
  image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
};

export const featuresContent = {
  title: 'Why Choose Dream Estates?',
  items: [
    {
      icon: '🏡',
      title: 'Exclusive Properties',
      description: 'Handpicked homes in prime locations for all lifestyles.',
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'Expert agents guide you every step of the way.',
    },
    {
      icon: '🌟',
      title: 'Prime Locations',
      description: 'Properties in vibrant, sought-after neighborhoods.',
    },
    {
      icon: '💸',
      title: 'No Hidden Fees',
      description: 'Transparent pricing for a stress-free experience.',
    },
  ],
};

export const propertiesContent = {
  title: 'Featured Properties',
  listings: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      address: '123 Coastal Dr, Malibu, CA',
      price: '$3,500,000',
      beds: 4,
      baths: 3.5,
      sqft: 3500,
      description: 'Luxury beachfront villa with stunning ocean views.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      address: '456 Mountain View, Aspen, CO',
      price: '$2,200,000',
      beds: 5,
      baths: 4,
      sqft: 4000,
      description: 'Modern chalet with panoramic mountain vistas.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      address: '789 Urban Loft, New York, NY',
      price: '$1,250,000',
      beds: 2,
      baths: 2,
      sqft: 1500,
      description: 'Sleek city apartment in a prime location.',
    },
  ],
};

export const testimonialsContent = {
  title: 'What Our Clients Say',
  testimonials: [
    {
      id: 1,
      quote: 'Dream Estates made our home-buying journey effortless!',
      author: 'Emily Carter',
      title: 'Homeowner',
    },
    {
      id: 2,
      quote: 'Their professionalism and expertise are unmatched.',
      author: 'Michael Lee',
      title: 'Investor',
    },
  ],
};

export const footerContent = {
  companyName: 'Dream Estates',
  address: '456 Realty Ave, Grand City, GC 12345',
  phone: '+1 (555) 987-6543',
  email: 'contact@dreamestates.com',
  socialLinks: [
    { name: 'Facebook', icon: 'FaFacebook', href: 'https://facebook.com' },
    { name: 'Twitter', icon: 'FaTwitter', href: 'https://twitter.com' },
    { name: 'Instagram', icon: 'FaInstagram', href: 'https://instagram.com' },
  ],
  copyright: `© ${new Date().getFullYear()} Dream Estates. All Rights Reserved.`,
};