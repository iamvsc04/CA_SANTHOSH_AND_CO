import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PartnershipFirmRegistration = () => {
  return (
    <>
      <SEO
        title="Partnership Firm Registration - Business Collaboration Setup"
        description="Register your Partnership Firm with our expert assistance. We streamline the process for businesses looking to collaborate, ensuring legal compliance and smooth operations."
        keywords="partnership firm registration, business partnership, firm registration, collaboration, legal business setup, partnership deed"
        canonicalUrl="https://yourdomain.com/services/registrations/partnership-firm"
        ogImage="https://picsum.photos/seed/partnership-firm/1024/576"
      />
      <div className="py-16 bg-[#F2F3EB]">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#474544] tracking-wider uppercase mb-4">
              Partnership Firm Registration
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <p className="text-[#474544]/80 text-lg max-w-3xl mx-auto leading-relaxed">
              A Partnership Firm is a popular business structure where two or more individuals manage and operate a business in accordance with the terms and objectives set out in a Partnership Deed. We assist you in registering your partnership firm.
            </p>
          </div>

          {/* Checklist Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
              <h2 className="text-2xl font-bold text-[#474544] text-center tracking-wider uppercase mb-6">
                Documents Required
              </h2>
              <div className="space-y-4">
                {[
                  "All Partners PAN Cards",
                  "All Partners Aadhar Cards or Voter ID or Passport or Driving License",
                  "All Partners Bank Statements (last 6 months)",
                  "All Partners Mobile Numbers & Email IDs",
                  "Business Address Proof (Electricity Bill, Rent Agreement, NOC)",
                  "Partnership Deed (draft will be prepared by us)",
                  "Nature of Business & Business Activity"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-[#474544]/5 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#474544] flex items-center justify-center">
                      <span className="text-[#474544] font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-[#474544]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages Section */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
              <h2 className="text-2xl font-bold text-[#474544] text-center tracking-wider uppercase mb-6">
                Advantages of Partnership Firm
              </h2>
              <div className="space-y-4">
                {[
                  "Easy to form with minimal formalities.",
                  "Relatively low cost of registration.",
                  "Flexible management and decision-making.",
                  "Shared responsibilities and risks among partners."
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-[#474544]/5 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#474544] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <p className="text-[#474544]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
              <h2 className="text-2xl font-bold text-[#474544] text-center tracking-wider uppercase mb-6">
                Our Registration Process
              </h2>
              <div className="space-y-4">
                {[
                  "Partnership Deed Drafting & Notarization",
                  "PAN & TAN Application for Firm",
                  "MSME/Udyam Registration (Optional)",
                  "GST Registration (if applicable)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-[#474544]/5 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#474544] flex items-center justify-center">
                      <span className="text-[#474544] font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-[#474544]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Note Section */}
            <div className="p-4 bg-[#474544]/5 rounded-lg">
              <p className="text-[#474544] text-sm text-center">
                Note: The above information is a general guide. Specific requirements may vary based on various factors.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
              <h3 className="text-2xl font-semibold text-[#474544] mb-4">
                Ready to Register Your Partnership Firm?
              </h3>
              <p className="text-[#474544]/80 mb-6">
                Our experts are here to provide personalized assistance for your partnership firm registration.
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3 bg-[#474544] text-white rounded-lg hover:bg-[#474544]/90 transition-colors duration-300 uppercase tracking-wider text-sm font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipFirmRegistration; 