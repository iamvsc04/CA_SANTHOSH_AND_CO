import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const SubServiceDetailPage = () => {
  const { categoryName, subServiceName } = useParams();
  
  // Convert URL parameters to readable format
  const formatName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const categoryKey = formatName(categoryName);
  const serviceKey = formatName(subServiceName);

  // Service details data
  const getServiceDetails = (category, service) => {
    const serviceDetails = {
      "Registrations": {
        "Partnership Firm Registration": {
          title: "Partnership Firm Registration",
          description: "Register your partnership firm with ease and confidence. Our expert team guides you through the complete registration process, ensuring compliance with all legal requirements.",
          features: [
            "Complete partnership deed preparation",
            "Registration with Registrar of Firms",
            "PAN and TAN application assistance",
            "Bank account opening support",
            "GST registration guidance"
          ],
          process: [
            "Initial consultation and document collection",
            "Partnership deed drafting and review",
            "Application submission to Registrar of Firms",
            "Follow-up and status updates",
            "Certificate delivery and post-registration support"
          ],
          documents: [
            "Partnership deed",
            "Address proof of business",
            "Identity proof of partners",
            "Passport size photographs",
            "Business commencement certificate"
          ],
          timeline: "7-10 business days"
        },
        "GST Registration": {
          title: "GST Registration",
          description: "Simplify your GST registration process with our expert guidance. We help businesses register for Goods and Services Tax (GST) seamlessly, ensuring compliance and smooth operations.",
          features: [
            "Online GST registration application",
            "Document verification and submission",
            "GST number generation",
            "Compliance guidance and support",
            "Return filing assistance"
          ],
          process: [
            "Business details collection",
            "Document preparation and verification",
            "Online application submission",
            "GST officer verification",
            "GST certificate issuance"
          ],
          documents: [
            "PAN card of business/individual",
            "Address proof of business place",
            "Bank account details",
            "Business registration documents",
            "Digital signature certificate"
          ],
          timeline: "5-7 business days"
        }
      },
      "Licenses": {
        "Factory License": {
          title: "Factory License",
          description: "Obtain your Factory License to legally operate your manufacturing unit. We guide you through the complete process, ensuring compliance with all regulatory requirements.",
          features: [
            "Factory license application preparation",
            "Document compilation and verification",
            "Government liaison and follow-up",
            "Compliance guidance and support",
            "License renewal assistance"
          ],
          process: [
            "Factory inspection and documentation",
            "Application preparation and submission",
            "Government department processing",
            "Inspection and approval",
            "License issuance"
          ],
          documents: [
            "Factory layout plan",
            "Safety and health certificates",
            "Fire safety clearance",
            "Pollution control board approval",
            "Land ownership documents"
          ],
          timeline: "15-30 business days"
        }
      },
      "Audit Services": {
        "Tax Audit": {
          title: "Tax Audit Services",
          description: "Comprehensive Tax Audit services for businesses to ensure compliance with tax laws and regulations. Our experienced auditors provide thorough examination and reporting.",
          features: [
            "Comprehensive tax audit planning",
            "Financial records examination",
            "Compliance verification and reporting",
            "Tax optimization recommendations",
            "Audit report preparation and submission"
          ],
          process: [
            "Initial audit planning and scope definition",
            "Document collection and verification",
            "On-site audit and examination",
            "Findings analysis and reporting",
            "Follow-up and compliance recommendations"
          ],
          documents: [
            "Financial statements and records",
            "Tax returns and supporting documents",
            "Bank statements and reconciliations",
            "Purchase and sales registers",
            "Vouchers and receipts"
          ],
          timeline: "10-15 business days"
        }
      }
    };

    return serviceDetails[category]?.[service] || {
      title: service,
      description: `Professional ${service.toLowerCase()} services by E V & Associates. Expert guidance and comprehensive support for all your business needs.`,
      features: [
        "Expert consultation and guidance",
        "Document preparation and verification",
        "Government liaison and follow-up",
        "Compliance monitoring and support",
        "Post-service assistance"
      ],
      process: [
        "Initial consultation and requirement analysis",
        "Document collection and preparation",
        "Application submission and processing",
        "Follow-up and status updates",
        "Service completion and support"
      ],
      documents: [
        "Business registration documents",
        "Identity and address proof",
        "Financial statements and records",
        "Other supporting documents as required"
      ],
      timeline: "7-15 business days"
    };
  };

  const serviceDetails = getServiceDetails(categoryKey, serviceKey);

  return (
    <>
      <SEO
        title={`${serviceDetails.title} - Professional Services`}
        description={serviceDetails.description}
        keywords={`${serviceKey.toLowerCase()}, ${categoryKey.toLowerCase()}, business services, professional services, CA services, Nalgonda`}
        canonicalUrl={`https://evassociates.in/services/${categoryName}/${subServiceName}`}
        ogImage="https://picsum.photos/seed/subservice-detail/1024/576"
      />
      
      <div className="py-16 bg-[#F2F3EB]">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-[#474544]/60 hover:text-[#474544]">Home</Link></li>
              <li className="text-[#474544]/40">/</li>
              <li><Link to="/services" className="text-[#474544]/60 hover:text-[#474544]">Services</Link></li>
              <li className="text-[#474544]/40">/</li>
              <li><Link to={`/services/${categoryName}`} className="text-[#474544]/60 hover:text-[#474544]">{categoryKey}</Link></li>
              <li className="text-[#474544]/40">/</li>
              <li className="text-[#474544]">{serviceKey}</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-[#474544] tracking-wider mb-4"
            >
              {serviceDetails.title}
            </motion.h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#474544]/80 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              {serviceDetails.description}
            </motion.p>
          </div>

          {/* Service Details */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 p-8"
              >
                <h3 className="text-2xl font-semibold text-[#474544] mb-6">Our Services Include</h3>
                <ul className="space-y-4">
                  {serviceDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#D3AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[#474544]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 p-8"
              >
                <h3 className="text-2xl font-semibold text-[#474544] mb-6">Our Process</h3>
                <ol className="space-y-4">
                  {serviceDetails.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#474544] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-[#474544]/80">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>

            {/* Documents and Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Required Documents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 p-8"
              >
                <h3 className="text-2xl font-semibold text-[#474544] mb-6">Required Documents</h3>
                <ul className="space-y-3">
                  {serviceDetails.documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#474544] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[#474544]/80">{doc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 p-8"
              >
                <h3 className="text-2xl font-semibold text-[#474544] mb-6">Timeline</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#D3AF37] mb-2">{serviceDetails.timeline}</div>
                  <p className="text-[#474544]/80">Average processing time</p>
                </div>
                <div className="mt-6 p-4 bg-[#F2F3EB] rounded-lg">
                  <p className="text-sm text-[#474544]/70">
                    *Timeline may vary based on government processing and document verification requirements.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center mt-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-[#474544] mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-[#474544]/80 mb-6">
                Contact our expert team for professional {serviceKey.toLowerCase()} services. 
                We'll guide you through every step of the process.
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

export default SubServiceDetailPage; 