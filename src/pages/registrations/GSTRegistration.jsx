import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

const GSTRegistration = () => {
  return (
    <>
      <SEO
        title="GST Registration - Expert GST Services"
                          description="Professional GST registration services by E V & Associates. Get your GST registration done quickly and efficiently with expert guidance and support."
          keywords="GST registration, GST services, business registration, tax compliance, CA services, Nalgonda"
          canonicalUrl="https://evassociates.in/services/registrations/gst-registration"
          ogImage="https://picsum.photos/seed/gst-registration/1024/576"
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
              <li><Link to="/services/registrations" className="text-[#474544]/60 hover:text-[#474544]">Registrations</Link></li>
              <li className="text-[#474544]/40">/</li>
              <li className="text-[#474544]">GST Registration</li>
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
            GST Registration
            </motion.h1>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#474544]/80 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Simplify your GST registration process with our expert guidance. We help businesses register for Goods and Services Tax (GST) seamlessly, ensuring compliance and smooth operations.
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
                <h3 className="text-2xl font-semibold text-[#474544] mb-6">Our GST Services Include</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D3AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Online GST registration application</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D3AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Document verification and submission</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D3AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">GST number generation and certificate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D3AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Compliance guidance and support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D3AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Return filing assistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D3AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Post-registration compliance support</span>
                  </li>
                </ul>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 p-8"
              >
                <h3 className="text-2xl font-semibold text-[#474544] mb-6">Registration Process</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#474544] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">1</div>
                    <span className="text-[#474544]/80">Business details collection and verification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#474544] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">2</div>
                    <span className="text-[#474544]/80">Document preparation and verification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#474544] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">3</div>
                    <span className="text-[#474544]/80">Online application submission</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#474544] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">4</div>
                    <span className="text-[#474544]/80">GST officer verification and approval</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#474544] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">5</div>
                    <span className="text-[#474544]/80">GST certificate issuance and delivery</span>
                  </li>
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
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#474544] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">PAN card of business/individual</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#474544] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Address proof of business place</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#474544] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Bank account details and statement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#474544] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Business registration documents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#474544] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Digital signature certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#474544] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#474544]/80">Identity and address proof of authorized signatory</span>
                  </li>
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
                  <div className="text-4xl font-bold text-[#D3AF37] mb-2">5-7 Days</div>
                  <p className="text-[#474544]/80">Average processing time</p>
                  </div>
                <div className="mt-6 p-4 bg-[#F2F3EB] rounded-lg">
                  <p className="text-sm text-[#474544]/70">
                    *Timeline may vary based on GST officer verification and document requirements.
                  </p>
                </div>
              </motion.div>
          </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 p-8"
            >
              <h3 className="text-2xl font-semibold text-[#474544] mb-6 text-center">Benefits of GST Registration</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D3AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#474544] mb-2">Legal Compliance</h4>
                  <p className="text-sm text-[#474544]/80">Ensure your business operates legally and complies with tax regulations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D3AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
            </div>
                  <h4 className="font-semibold text-[#474544] mb-2">Input Tax Credit</h4>
                  <p className="text-sm text-[#474544]/80">Claim input tax credit on purchases and reduce your tax liability</p>
          </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D3AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#474544] mb-2">Business Growth</h4>
                  <p className="text-sm text-[#474544]/80">Expand your business opportunities with proper tax registration</p>
                </div>
            </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#474544] mb-4">
                Ready to Register for GST?
            </h3>
            <p className="text-[#474544]/80 mb-6">
                Get your GST registration done quickly and efficiently with our expert team. 
                We'll handle all the paperwork and ensure smooth processing.
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

export default GSTRegistration;