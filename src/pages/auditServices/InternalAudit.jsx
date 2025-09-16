import React from "react";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

const InternalAudit = () => {
  return (
    <>
      <SEO
        title="Required Documents for Internal Audit"
        description="Checklist of documents required for Internal Audit. Ensure you have all necessary paperwork for a smooth audit process."
        keywords="internal audit, required documents, audit checklist, internal controls"
        canonicalUrl="https://yourdomain.com/services/audit-services/internal-audit/required-documents"
      />
      <div className="py-16 bg-[#F2F3EB] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#474544] tracking-wider uppercase mb-4">
              Internal Audit - Required Documents
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <p className="text-[#474544]/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Please prepare the following documents for your Internal Audit.
              Having these ready will ensure a smooth and efficient audit
              process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              "Organizational Chart",
              "Internal Control Policies",
              "Financial Statements",
              "Bank Statements",
              "Books of Accounts",
              "Purchase & Sales Invoices",
              "Expense Vouchers",
              "Inventory Records",
              "HR & Payroll Records",
              "Compliance Reports",
              "Previous Internal Audit Reports (if any)",
              "Management Representation Letter",
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
              Note: Additional documents may be required based on the scope and
              objectives of the internal audit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternalAudit;
