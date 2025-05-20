import { Helmet } from 'react-helmet-async';
import { AnimatedSection, AnimatedHeading, AnimatedText, DecorativeBackground } from '../components/ui';
import { motion } from 'framer-motion';

export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Read the disclaimer for the website and services provided by CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Disclaimer
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Important information regarding the use of this website and our services.
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
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">General Information</h3>
              <p className="mb-4">
                The information provided on this Website is for general informational purposes only. All information on the Website is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.
              </p>
              <p className="mt-4">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Website or reliance on any information provided on the Website. Your use of the Website and your reliance on any information on the Website is solely at your own risk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Professional Advice</h3>
              <p className="mb-4">
                The Website cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice, especially legal, tax, or accounting advice, on the Website.
              </p>
              <p className="mt-4">
                The use or reliance of any information contained on this Website is solely at your own risk.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Limitation of Liability</h3>
              <p>
                In no event shall CA VEERLAPATI Santhosh, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Website; (ii) any conduct or content of any third party on the Website; (iii) any content obtained from the Website; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">External Links</h3>
              <p>
                This website may contain links to external websites that are not provided or maintained by or in any way affiliated with CA VEERLAPATI Santhosh. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any external websites.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Changes to Disclaimer</h3>
              <p>
                We reserve the right to modify this Disclaimer at any time. We will let you know via a prominent notice on our Website. Any changes to this Disclaimer will be effective immediately upon posting on this page.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Contact Us</h3>
              <p>
                If you have any questions about this Disclaimer, please contact us using the information on our Contact page or by email at [Your Contact Email Address].
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 