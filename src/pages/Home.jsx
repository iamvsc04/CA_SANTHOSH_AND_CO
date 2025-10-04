import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';
import SEO from '../components/SEO';
import {
  ArrowRightIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  AnimatedSection,
  AnimatedElement,
  AnimatedHeading,
  AnimatedText,
  DecorativeBackground,
  Button,
  Card,
} from "../components/ui";
import heroImage from "../assets/bg.webp";  
// Import service images
import gstRegistrationImage from "../assets/images/services/gst-registration.webp";
import msmeImage from "../assets/images/services/MSME.webp";
import iecImage from "../assets/images/services/IEC Registration.webp";
import labourLicenseImage from "../assets/images/services/labour license.webp";
import tradeLicenseImage from "../assets/images/services/trade license.webp";
import factoryLicenseImage from "../assets/images/services/factory license.webp";

const features = [
  {
    name: "Tax Planning",
    description:
      "Strategic tax planning to optimize your financial position and maximize savings.",
    icon: ChartBarIcon,
  },
  {
    name: "Business Advisory",
    description:
      "Expert guidance for business growth, compliance, and financial management.",
    icon: DocumentTextIcon,
  },
  {
    name: "Client Success",
    description:
      "Dedicated support and personalized solutions for all your financial needs.",
    icon: UserGroupIcon,
  },
];

const stats = [
  { id: 1, name: "Years of Experience", value: "4+" },
  { id: 2, name: "Happy Clients", value: "2000+" },
  { id: 3, name: "Services Offered", value: "6+" },
  { id: 4, name: "Success Rate", value: "100%" },
];

const Home = () => {
  const servicesData = [
    {
      title: "Registrations",
      description: "Business registration and incorporation services including GST, Company, Partnership, and MSME registrations.",
      link: "/services/registrations",
      category: "Registrations",
      image: gstRegistrationImage,
    },
    {
      title: "Licenses",
      description: "Essential business licenses and regulatory approvals including Factory, Trade, and Labour licenses.",
      link: "/services/licenses",
      category: "Licenses",
      image: labourLicenseImage,
    },
    {
      title: "Audit Services",
      description: "Professional audit services including Tax, Internal, Statutory, and GST audits for compliance and transparency.",
      link: "/services/audit-services",
      category: "Audit Services",
      image: factoryLicenseImage,
    },
    {
      title: "Returns Filing",
      description: "Expert tax and regulatory return filing services including IT, GST, ROC, and other statutory returns.",
      link: "/services/returns-filing",
      category: "Returns Filing",
      image: tradeLicenseImage,
    },
    {
      title: "Compliances",
      description: "Regulatory compliance services including Advance Tax, ESI, PF, PT, and TDS payments and compliance.",
      link: "/services/compliances",
      category: "Compliances",
      image: msmeImage,
    },
    {
      title: "Other Services",
      description: "Additional services including Tax Planning, Financial Advisory, Consultancy, and specialized business services.",
      link: "/services/other",
      category: "Other Services",
      image: iecImage,
    },
  ];

  const testimonials = [
    {
      quote: "Their expertise in GST registration was invaluable. Quick, efficient, and hassle-free service!",
      author: "Rajesh Kumar",
      designation: "Director, RK Enterprises",
    },
    {
      quote: "We highly recommend their services for MSME registration. The team was supportive and made the process very easy for us.",
      author: "Priya Sharma",
      designation: "Founder, Priya Textiles",
    },
    {
      quote: "Obtaining our IEC code seemed daunting, but their guidance made it straightforward. Excellent service!",
      author: "Amit Singh",
      designation: "CEO, Global Exports",
    },
  ];

  const faqs = [
    {
      question: "What is GST registration and why is it important?",
      answer: "GST (Goods and Services Tax) registration is mandatory for businesses exceeding a certain turnover. It's crucial for legal operation, input tax credit claims, and maintaining compliance.",
    },
    {
      question: "How long does MSME/Udyam registration take?",
      answer: "MSME/Udyam registration is a quick and online process. With proper documentation, it can be completed within a few days, providing access to various government schemes.",
    },
    {
      question: "Do I need an IEC code for international trade?",
      answer: "Yes, an Import Export Code (IEC) is mandatory for businesses engaged in import or export activities in India. It's a key requirement for customs clearance and international transactions.",
    },
  ];

  return (
    <>
      <SEO
        title="Home - E V & Associates"
        description="E V & Associates offers comprehensive financial solutions, including tax, audit, and compliance services. Your trusted partner for business growth and financial stability."
        keywords="CA firm, financial services, tax consulting, audit services, business registration, GST, income tax, financial advisory"
        canonicalUrl="https://evassociates.in/"
        ogImage="https://picsum.photos/seed/home-page/1024/576"
      />
      <div className="bg-[#F2F3EB]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#474544] to-[#333130] text-white py-20 md:py-32 overflow-hidden h-[80vh]">
          <div className="absolute inset-0 z-0 opacity-30 h-[80vh]">
            <img src="https://picsum.photos/seed/hero-background/1920/1080" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-wider"
            >
              Your Trusted Partner for Financial Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
            >
              E V & Associates: Charting Your Path to Financial Success with Expert Tax, Audit, and Compliance Services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-[#D3AF37] text-[#474544] hover:bg-[#C29D2A] px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#474544] mb-6 leading-tight">
                About V Santhosh & Associates
              </h2>
              <p className="text-[#474544]/80 text-lg mb-6 leading-relaxed">
                Established with a vision to provide exceptional financial and advisory services, V Santhosh & Associates is a leading Chartered Accountant firm dedicated to serving individuals and businesses. Our team of experienced professionals offers personalized solutions across various domains, including taxation, auditing, and regulatory compliance.
              </p>
              <p className="text-[#474544]/80 text-lg mb-8 leading-relaxed">
                We are committed to delivering accurate, timely, and strategic advice that helps our clients achieve their financial goals and navigate the complexities of the economic landscape. Our client-centric approach ensures that every solution is tailored to meet unique needs and foster long-term success.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#474544] text-white hover:bg-[#333130] px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img src="https://picsum.photos/seed/about-us/600/400" alt="About Us" className="rounded-xl shadow-lg w-full h-auto object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 md:py-24 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#474544] mb-6 leading-tight">
              Our Core Services
            </h2>
            <p className="text-[#474544]/80 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              We offer a diverse range of financial and advisory services to cater to all your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  category={service.category}
                  image={service.image}
                />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <Link
                to="/services"
                className="inline-block bg-[#D3AF37] text-[#474544] hover:bg-[#C29D2A] px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-[#F2F3EB]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#474544] mb-6 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-[#474544]/80 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              Hear from our satisfied clients about their experience with V Santhosh & Associates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10 text-left"
                >
                  <p className="text-[#474544]/80 mb-4 italic leading-relaxed">\"{testimonial.quote}\"</p>
                  <p className="font-semibold text-[#474544]">{testimonial.author}</p>
                  <p className="text-sm text-[#474544]/70">{testimonial.designation}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#474544] mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#474544]/80 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services.
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F2F3EB] p-6 rounded-lg shadow-sm text-left border border-[#474544]/10"
                >
                  <h3 className="font-semibold text-[#474544] text-lg mb-2">{faq.question}</h3>
                  <p className="text-[#474544]/80">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
