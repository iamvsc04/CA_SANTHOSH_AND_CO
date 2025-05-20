import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedHeading, AnimatedText, DecorativeBackground } from '../components/ui';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircleIcon, CalculatorIcon, DocumentTextIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function SalariedIndividuals() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const features = [
    {
      icon: CalculatorIcon,
      title: "Tax Planning",
      description: "Personalized tax planning to optimize your tax liability"
    },
    {
      icon: DocumentTextIcon,
      title: "ITR Filing",
      description: "Accurate and timely filing of income tax returns"
    },
    {
      icon: ShieldCheckIcon,
      title: "Compliance Support",
      description: "Ensuring adherence to tax regulations and deadlines"
    },
    {
      icon: ChartBarIcon,
      title: "Financial Advisory",
      description: "Guidance on personal finance and investments"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions for Salaried Individuals | CA VEERLAPATI Santhosh</title>
        <meta name="description" content="Expert tax planning and compliance solutions tailored for salaried individuals by CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <div ref={containerRef} className="relative">
        <AnimatedSection className="relative min-h-[60vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
          <motion.div 
            style={{ opacity, scale }}
            className="absolute inset-0 bg-[url('/src/assets/bg-ca.jpg')] bg-cover bg-center mix-blend-overlay opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-900/95" />
          <DecorativeBackground />
          <div className="container relative z-10 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <AnimatedHeading className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Solutions for Salaried Individuals
              </AnimatedHeading>
              <AnimatedText className="mt-4 text-lg md:text-xl text-white drop-shadow-md">
                Personalized tax planning and compliance support for a stress-free financial life
              </AnimatedText>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6"
              >
                <Link to="/book-appointment">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-primary-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">{feature.title}</h3>
                  <p className="text-secondary-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-xl border border-primary-100"
              >
                <h3 className="text-3xl font-bold text-primary-800 mb-6 flex items-center">
                  <CheckCircleIcon className="w-8 h-8 mr-3 text-primary-600" />
                  Our Approach for Salaried Individuals
                </h3>
                <p className="leading-relaxed text-secondary-700 text-lg">
                  We understand that managing personal finances and complying with tax regulations can be challenging for salaried individuals. Our services are designed to simplify this process, offering personalized tax planning to minimize your liability, accurate and timely income tax return filing, and expert guidance on investments and financial matters. We aim to provide you with peace of mind and help you achieve your financial goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
              >
                <h3 className="text-3xl font-bold text-primary-800 mb-6">Key Services Offered</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ "Income Tax Return (ITR) filing", "Tax planning and optimization", "Assistance with investment proofs and documentation", "Responding to tax notices", "Capital Gains tax calculation and advisory", "General financial advisory"].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-secondary-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-xl border border-primary-100"
              >
                <h3 className="text-3xl font-bold text-primary-800 mb-6">Benefits of Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[ "Maximized tax savings", "Ensured compliance", "Reduced stress and complexity", "Timely filing", "Expert financial guidance", "Peace of mind"].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    >
                      <span className="text-primary-800 font-semibold">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="p-8 bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl shadow-xl text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">Simplify Your Personal Taxes</h3>
                <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                  Let us help you with your tax planning and filing for a stress-free financial life. Contact us today or book an appointment.
                </p>
                <Link to="/book-appointment">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-primary-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Appointment
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
} 