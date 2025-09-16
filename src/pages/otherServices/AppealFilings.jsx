import React from "react";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

const AppealFilings = () => (
  <>
    <SEO
      title="Appeal Filings"
      description="Formal submission of legal requests or petitions to higher authorities for review and reconsideration of decisions."
      keywords="appeal filings, legal appeal, tax appeal"
      canonicalUrl="https://yourdomain.com/services/other/appeal-filings"
    />
    <div className="py-16 bg-[#F2F3EB] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#474544] tracking-wider uppercase mb-4">
            Appeal Filings
          </h1>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
          <p className="text-[#474544]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Appeal Filings refer to the process of formally submitting a legal
            request or petition to a higher authority to review and reconsider a
            decision made by a lower-level administrative or judicial body.
            Appeals are typically filed when individuals or organizations
            believe that an error, injustice, or misinterpretation of the law
            has occurred in the original decision.
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

export default AppealFilings;
