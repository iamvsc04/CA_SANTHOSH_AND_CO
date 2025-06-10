import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const FactoryPlanApproval = () => {
  return (
    <>
      <SEO
        title="Factory Plan Approval - Regulatory Compliance for Factories"
        description="Secure your Factory Plan Approval with our expert assistance. We help businesses navigate the process of obtaining necessary approvals for factory layouts and construction, ensuring full compliance with regulations."
        keywords="factory plan approval, factory layout, building plan approval, industrial construction, factory compliance, regulatory approval, factory permit"
        canonicalUrl="https://yourdomain.com/services/licenses/factory-plan-approval"
        ogImage="https://picsum.photos/seed/factory-plan-approval/1024/576"
      />
      <div className="py-16 bg-[#F2F3EB]">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#474544] tracking-wider uppercase mb-4">
              Factory Plan Approval
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <p className="text-[#474544]/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Get your Factory Plan approved to ensure compliance with safety and regulatory standards. We guide you through the approval process based on your business type.
            </p>
          </div>

          {/* Checklist Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Proprietorship Section */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
              <h2 className="text-2xl font-bold text-[#474544] text-center tracking-wider uppercase mb-6">
                For Proprietorship Firm
              </h2>
              <div className="space-y-4">
                {[
                  "Passport Size Photo",
                  "PAN Card",
                  "Aadhar Card",
                  "Recent Electricity Bill & Property Tax Receipt",
                  "Mobile & Mail ID",
                  "Rental Agreement if Rented",
                  "NOC if Premises on Relatives Name",
                  "Telugu Name Board Photos of Business Premises",
                  "Detailed Factory Layout Plan",
                  "Building Plan Approval",
                  "Fire Safety Plan",
                  "UDYAM Registration Certificate or GST Certificate",
                  "Trade License"
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

            {/* LLP & Partnership Section */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
              <h2 className="text-2xl font-bold text-[#474544] text-center tracking-wider uppercase mb-6">
                For LLP & Partnership Firm
              </h2>
              <div className="space-y-4">
                {[
                  "Partnership Deed",
                  "All Partners Passport Size Photo",
                  "All Partners PAN Cards",
                  "All Partners Aadhar Cards or Voter ID or Passport or Driving License",
                  "All Partners Mobile & Mail IDs",
                  "Recent Electricity Bill & Property Tax of Business Premises",
                  "Rental Agreement if Rented",
                  "NOC if Premises on Relatives Name",
                  "Telugu Name Board Photos of Business Premises",
                  "Detailed Factory Layout Plan",
                  "Building Plan Approval",
                  "Fire Safety Plan",
                  "UDYAM Registration Certificate or GST Certificate",
                  "Trade License"
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

            {/* Companies Section */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
              <h2 className="text-2xl font-bold text-[#474544] text-center tracking-wider uppercase mb-6">
                For Companies
              </h2>
              <div className="space-y-4">
                {[
                  "Incorporation Certificate",
                  "MOA and AOA",
                  "All Directors Passport Size Photos",
                  "All Directors PAN Cards",
                  "All Directors Aadhar Cards or Voter ID or Passport or Driving License",
                  "All Directors Mobile & Mail IDs",
                  "Recent Electricity Bill & Property Tax of Business Premises",
                  "Rental Agreement if Rented",
                  "NOC if Premises on Relatives Name",
                  "Telugu Name Board Photos of Business Premises",
                  "Detailed Factory Layout Plan",
                  "Building Plan Approval",
                  "Fire Safety Plan",
                  "UDYAM Registration Certificate or GST Certificate",
                  "Trade License"
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
                Note: All documents should be clear, legible, and up-to-date. Additional documents may be required based on specific circumstances and factory type.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
              <h3 className="text-2xl font-semibold text-[#474544] mb-4">
                Have Questions?
              </h3>
              <p className="text-[#474544]/80 mb-6">
                Our team is here to help you with any queries about the Factory Plan Approval process.
              </p>
              <Link 
                to="/services/licenses/factory-plan-approval" 
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

export default FactoryPlanApproval; 