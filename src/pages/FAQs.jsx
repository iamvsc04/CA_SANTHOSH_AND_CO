import { Helmet } from 'react-helmet-async';
import { AnimatedSection, AnimatedHeading, AnimatedText, DecorativeBackground } from '../components/ui';
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: 'What services do you offer?',
    answer: "We offer a comprehensive range of services including Income Tax Filing, GST Services, Company Formation, Bookkeeping & Accounting, TDS & Payroll Services, and Audit & Assurance."
    ,
  },
  {
    question: 'How long have you been practicing?',
    answer: "CA VEERLAPATI Santhosh has been practicing for 3-4 years, providing expert financial services in Nalgonda.",
  },
  {
    question: 'Where is your office located?',
    answer: 'Our office is located in Nalgonda, Telangana.', // Use the confirmed location
  },
  {
    question: 'How can I book a consultation?',
    answer: "You can book a consultation through our website's Book Appointment page or by contacting us directly via phone or email.",
  },
  {
    question: 'What should I bring to my consultation?',
    answer: "It's helpful to bring any relevant financial documents, previous tax returns, and a list of your specific questions or concerns.",
  },
];

export default function FAQs() {
  return (
    <>
      <Helmet>
        <title>FAQs | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Find answers to frequently asked questions about accounting, taxation, and our services at CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Frequently Asked Questions
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Find answers to common questions about our services.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-secondary-600">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 