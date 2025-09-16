import React from "react";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

const StatutoryAudit = () => {
  return (
    <>
      <SEO
        title="Required Documents for Statutory Audit"
        description="Checklist of documents required for Statutory Audit. Ensure you have all necessary paperwork for a smooth audit process."
        keywords="statutory audit, required documents, audit checklist, statutory compliance"
        canonicalUrl="https://yourdomain.com/services/audit-services/statutory-audit/required-documents"
      />
      <div className="py-16 bg-[#F2F3EB] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#474544] tracking-wider uppercase mb-4">
              Statutory Audit - Required Documents
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <p className="text-[#474544]/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Please prepare the following documents for your Statutory Audit.
              Having these ready will ensure a smooth and efficient audit
              process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              "Incorporation Certificate",
              "MOA and AOA",
              "Board Meeting Minutes",
              "Shareholder Register",
              "Financial Statements",
              "Bank Statements",
              "Books of Accounts",
              "Purchase & Sales Invoices",
              "Expense Vouchers",
              "GST Returns",
              "TDS Returns",
              "Fixed Asset Register",
              "Loan Agreements (if any)",
              "Previous Year Statutory Audit Report (if applicable)",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01 }}
                className="flex items-start space-x-3 p-4 rounded-lg hover:bg-[#474544]/5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#474544] flex items-center justify-center">
                  <span className="text-[#474544] font-semibold">
                    {idx + 1}
                  </span>
                </div>
                <p className="text-[#474544]">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="p-4 bg-[#474544]/5 rounded-lg mt-8 max-w-3xl mx-auto">
            <p className="text-[#474544] text-sm text-center">
              Note: Additional documents may be required based on the company’s
              activities and statutory requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatutoryAudit;
