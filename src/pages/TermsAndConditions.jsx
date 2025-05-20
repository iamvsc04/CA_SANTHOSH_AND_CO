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
                These Terms and Conditions govern your use of the website and services provided by CA VEERLAPATI Santhosh. By accessing our website or using our services, you agree to comply with and be bound by these terms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Services Offered</h3>
              <p>
                We provide professional accounting, taxation, audit, and business advisory services as described on our website. The scope of services for each client will be defined in a separate engagement letter.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Client Responsibilities</h3>
              <p>
                Clients are responsible for providing accurate and complete information necessary for the provision of services. Delays or inaccuracies in information may impact the services provided.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Confidentiality</h3>
              <p>
                We maintain strict confidentiality regarding all client information. Your personal and financial data will be handled with the utmost care and in accordance with applicable laws and professional standards.
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
                Our liability for any errors or omissions in the services provided is limited to the extent permitted by law and as outlined in our engagement letter. We are not liable for any indirect or consequential damages.
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
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Nalgonda, Telangana.
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
                We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of our website and services after any such changes constitutes your acceptance of the new terms.
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
                If you have any questions about these Terms and Conditions, please contact us using the information on our Contact page.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 