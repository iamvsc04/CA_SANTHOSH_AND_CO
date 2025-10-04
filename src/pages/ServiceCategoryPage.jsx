import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { servicesData } from "../components/layout/Navbar";

const ServiceCategoryPage = () => {
  const { categoryName } = useParams();
  
  // Convert URL parameter to match our data structure
  const formatCategoryName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const categoryKey = formatCategoryName(categoryName);
  const categoryData = servicesData[categoryKey];

  if (!categoryData) {
    return (
      <div className="py-16 bg-[#F2F3EB]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#474544] mb-4">Service Not Found</h1>
          <p className="text-[#474544]/80 mb-8">The requested service category could not be found.</p>
          <Link 
            to="/services" 
            className="inline-block bg-[#474544] text-white hover:bg-[#333130] px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryDescription = (category) => {
    const descriptions = {
      "Registrations": "Comprehensive business registration and incorporation services to help you establish your business legally and efficiently.",
      "Licenses": "Essential business licenses and regulatory approvals to ensure your business operates in compliance with local and national regulations.",
      "Audit Services": "Professional audit services to ensure financial accuracy, regulatory compliance, and business transparency.",
      "Returns Filing": "Expert tax and regulatory return filing services to keep your business compliant and up-to-date.",
      "Compliances": "Regulatory compliance services to help your business meet all legal requirements and avoid penalties.",
      "Certifications": "Business and financial certificates required for various business operations and regulatory purposes.",
      "Bank Related Services": "Banking and financial documentation services to support your business financing and banking needs.",
      "Digital Signature Services": "Digital signature certificate services for secure online transactions and document authentication.",
      "Application Services": "Government application and registration services for various business requirements.",
      "Subsidy Services": "Government subsidy and incentive services to help your business access financial benefits and support.",
      "Other Services": "Additional financial and advisory services to support your business growth and success."
    };
    return descriptions[category] || "Professional services to support your business needs.";
  };

  return (
    <>
      <SEO
        title={`${categoryKey} - Professional Services`}
        description={`Expert ${categoryKey.toLowerCase()} services by V Santhosh & Associates. Professional, reliable, and comprehensive solutions for your business needs.`}
        keywords={`${categoryKey.toLowerCase()}, business services, professional services, CA services, Nalgonda`}
        canonicalUrl={`https://yourdomain.com/services/${categoryName}`}
        ogImage="https://picsum.photos/seed/service-category/1024/576"
      />
      
      <div className="py-16 bg-[#F2F3EB]">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-[#474544] tracking-wider uppercase mb-4"
            >
              {categoryKey}
            </motion.h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#474544]/80 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              {getCategoryDescription(categoryKey)}
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 overflow-hidden hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#474544] mb-3 group-hover:text-[#D3AF37] transition-colors duration-200">
                      {service.name}
                    </h3>
                    <p className="text-[#474544]/80 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-sm font-medium text-[#474544] hover:text-[#D3AF37] transition-colors duration-200"
                    >
                      Learn More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-[#474544] mb-4">
                Need Help with {categoryKey}?
              </h3>
              <p className="text-[#474544]/80 mb-6">
                Our expert team is ready to assist you with professional {categoryKey.toLowerCase()} services. 
                Get in touch for a consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block bg-[#474544] text-white hover:bg-[#333130] px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/book-appointment"
                  className="inline-block bg-[#D3AF37] text-[#474544] hover:bg-[#C29D2A] px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServiceCategoryPage;