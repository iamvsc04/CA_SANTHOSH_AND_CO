import { Helmet } from 'react-helmet-async';
import { AnimatedSection, AnimatedHeading, AnimatedText, DecorativeBackground } from '../components/ui';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Read our privacy policy regarding the collection, use, and protection of your personal information at CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Privacy Policy
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Your privacy is important to us.
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
                This Privacy Policy describes how CA VEERLAPATI Santhosh collects, uses, and protects your personal information when you visit our website and use our services. By using our website or services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Information We Collect</h3>
              <p className="mb-4">
                We collect several types of information for various purposes to provide and improve our Service to you.
              </p>
              <h4 className="text-lg font-medium text-secondary-800 mb-2">Personal Data</h4>
              <p className="mb-4">
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address</li>
                <li>Any other information you voluntarily provide when contacting us or booking an appointment.</li>
              </ul>
              <h4 className="text-lg font-medium text-secondary-800 mb-2 mt-4">Usage Data</h4>
              <p>
                We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">How We Use Your Information</h3>
              <p className="mb-4">
                CA VEERLAPATI Santhosh uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To respond to your inquiries and appointment requests.</li>
              </ul>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Information Sharing and Disclosure</h3>
              <p className="mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>**With Service Providers:** We may share your personal information with service providers to monitor and analyze the use of our Service, to contact you.</li>
                <li>**For Business Transfers:** We may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li>**With Affiliates:** We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any other subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</li>
                <li>**With Business Partners:** We may share your information with our business partners to offer you certain products, services or promotions.</li>
                <li>**With other users:** when you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                <li>**With your consent:** We may disclose your personal information for any other purpose with your consent.</li>
              </ul>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Data Security</h3>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Your Consent</h3>
              <p>
                By using our site, you consent to our website's privacy policy.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Changes to our Privacy Policy</h3>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Contacting Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us using the information on our Contact page or by email at [Your Contact Email Address].
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 