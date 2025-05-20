import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedHeading, AnimatedText, DecorativeBackground } from '../components/ui';
import { motion } from 'framer-motion';

// Define the main navigation links (can be imported from a central config later)
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Knowledge Center (Blog)', href: '/blog' },
  { name: 'Career', href: '/career' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
  { name: 'Book Appointment', href: '/book-appointment' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export default function SiteMap() {
  return (
    <>
      <Helmet>
        <title>Site Map | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Explore the site map for easy navigation of the CA VEERLAPATI Santhosh website." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Site Map
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Find your way around our website.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="block p-4 bg-white rounded-lg shadow-md text-secondary-700 hover:bg-primary-50 hover:text-primary-800 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 