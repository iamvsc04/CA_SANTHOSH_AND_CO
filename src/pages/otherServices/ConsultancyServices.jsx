import React from "react";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

const ConsultancyServices = () => (
  <>
    <SEO
      title="Consultancy Services"
      description="Professional advice and support provided by experts or consultants in various fields."
      keywords="consultancy services, business consulting, expert advice"
      canonicalUrl="https://yourdomain.com/services/other/consultancy-services"
    />
    <div className="py-16 bg-[#F2F3EB] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#474544] tracking-wider uppercase mb-4">
            Consultancy Services
          </h1>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
          <p className="text-[#474544]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Consultancy Services refer to professional advice and support
            provided by experts or consultants in various fields to individuals,
            businesses, organizations, or governments. These services are sought
            to address specific challenges, make informed decisions, improve
            performance, and achieve objectives.
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
            Our team is here to help you with any queries about this service.
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
  </>
);

export default ConsultancyServices;
