import { Helmet } from 'react-helmet-async';
import { AnimatedSection, AnimatedHeading, AnimatedText, DecorativeBackground } from '../components/ui';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Read the terms and conditions for using the website and services of CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Terms & Conditions
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Please read these terms carefully before using our services.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-8 text-secondary-700">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Introduction</h3>
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of the website and services provided by CA VEERLAPATI Santhosh ("we," "our," or "us"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Services Offered</h3>
              <p className="mb-4">
                We provide professional accounting, taxation, audit, and business advisory services as described on our website. The specific scope of services provided to each client will be outlined in a separate engagement letter or service agreement. Our services are provided based on the information and documentation supplied by you.
              </p>
              <h4 className="text-lg font-medium text-secondary-800 mb-2 mt-4">Nature of Advice</h4>
              <p>
                Any information or advice provided on this website is for general guidance only and does not constitute professional advice. Professional advice is provided through a formal engagement process, which includes a thorough understanding of your specific circumstances.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Client Responsibilities</h3>
              <p className="mb-4">
                By using our Service, you agree to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Provide accurate, complete, and timely information and documentation required for the provision of services.</li>
                <li>Cooperate with us in a timely and efficient manner.</li>
                <li>Inform us of any changes in your circumstances that may affect the services provided.</li>
                <li>Comply with all applicable laws and regulations.</li>
              </ul>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Confidentiality</h3>
              <p>
                We are committed to maintaining the confidentiality of your information. All non-public information shared with us in the course of our engagement will be treated as confidential and will not be disclosed to third parties without your consent, except as required by law or professional standards. You also agree to keep confidential any proprietary information you may gain access to through the use of our Service.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by applicable law, in no event shall CA VEERLAPATI Santhosh, its affiliates, directors, employees, or agents be liable for any indirect, punitive, special, incidental, or consequential damages whatsoever arising out of or in connection with the use of this website or services, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="mt-4">
                Our total liability to you for any damages arising out of or related to your use of the Service will not exceed the amount paid by you, if any, for accessing the Service, or [Specify a maximum liability amount, e.g., the fee paid for the specific service], whichever is less.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Governing Law</h3>
              <p>
                These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction, e.g., India], without regard to its conflict of law provisions.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Changes to Terms</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Contact Us</h3>
              <p>
                If you have any questions about these Terms and Conditions, please contact us using the information on our Contact page or by email at [Your Contact Email Address].
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 