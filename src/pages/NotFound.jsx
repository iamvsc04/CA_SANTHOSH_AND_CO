import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedHeading, AnimatedText, Button, DecorativeBackground } from '../components/ui';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Not Found | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Page not found on the CA VEERLAPATI Santhosh website." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden min-h-screen flex items-center justify-center text-center">
        <DecorativeBackground />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          </motion.div>
          <AnimatedHeading className="mb-6">
            Page Not Found
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-xl mx-auto text-xl mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </AnimatedText>
          <Button variant="primary" size="lg" as={Link} to="/">
            Go to Home
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
} 