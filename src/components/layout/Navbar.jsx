import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navLogo from "../../assets/navlogo.webp";

export const servicesData = {
  Registrations: [
    {
      name: "Partnership Firm Registration",
      description: "Details about Partnership Firm Registration.",
      href: "/services/registrations/partnership-firm",
    },
    {
      name: "Proprietorship Firm Registration",
      description: "Details about Proprietorship Firm Registration.",
      href: "/services/registrations/proprietorship-firm",
    },
    {
      name: "Company Incorporation",
      description: "Details about Company Incorporation.",
      href: "/services/registrations/company-incorporation",
    },
    {
      name: "LLP Registration",
      description: "Details about LLP Registration.",
      href: "/services/registrations/llp-registration",
    },
    {
      name: "GST Registration",
      description: "Details about GST Registration.",
      href: "/services/registrations/gst-registration",
    },
    {
      name: "MSME/Udyam Registrations",
      description: "Details about MSME/Udyam Registrations.",
      href: "/services/registrations/msme-udyam",
    },
    {
      name: "IEC Code Registration",
      description: "Details about IEC Code Registration.",
      href: "/services/registrations/iec-code",
    },
  ],
  Licenses: [
    {
      name: "Labour License",
      description: "Details about Labour License.",
      href: "/services/licenses/labour-license",
    },
    {
      name: "Trade License",
      description: "Details about Trade License.",
      href: "/services/licenses/trade-license",
    },
    {
      name: "Factory License",
      description: "Details about Factory License.",
      href: "/services/licenses/factory-license",
    },
    {
      name: "Factory Plan Approval",
      description: "Details about Factory Plan Approval.",
      href: "/services/licenses/factory-plan-approval",
    },
    {
      name: "Pollution Board License",
      description: "Details about Pollution Board License.",
      href: "/services/licenses/pollution-board-approval",
    },
  ],
  "Audit Services": [
    {
      name: "Tax Audit",
      description: "Details about Tax Audit.",
      href: "/services/audit/tax-audit",
    },
    {
      name: "Internal Audits",
      description: "Details about Internal Audits.",
      href: "/services/audit/internal-audits",
    },
    {
      name: "Statutory Audits",
      description: "Details about Statutory Audits.",
      href: "/services/audit/statutory-audits",
    },
    {
      name: "GST Audits",
      description: "Details about GST Audits.",
      href: "/services/audit/gst-audits",
    },
    {
      name: "Concurrent Audits",
      description: "Details about Concurrent Audits.",
      href: "/services/audit/concurrent-audits",
    },
    {
      name: "Stock Audits",
      description: "Details about Stock Audits.",
      href: "/services/audit/stock-audits",
    },
  ],
  "Returns Filing": [
    {
      name: "IT Returns",
      description: "Details about IT Returns.",
      href: "/services/returns/it-returns",
    },
    {
      name: "GST Returns",
      description: "Details about GST Returns.",
      href: "/services/returns/gst-returns",
    },
    {
      name: "ROC Returns",
      description: "Details about ROC Returns.",
      href: "/services/returns/roc-returns",
    },
    {
      name: "ESI Returns",
      description: "Details about ESI Returns.",
      href: "/services/returns/esi-returns",
    },
    {
      name: "PF Returns",
      description: "Details about PF Returns.",
      href: "/services/returns/pf-returns",
    },
    {
      name: "PT Returns",
      description: "Details about PT Returns.",
      href: "/services/returns/pt-returns",
    },
    {
      name: "TDS Returns",
      description: "Details about TDS Returns.",
      href: "/services/returns/tds-returns",
    },
  ],
  Compliances: [
    {
      name: "Advance Tax Payment",
      description: "Details about Advance Tax Payment.",
      href: "/services/compliances/advance-tax",
    },
    {
      name: "ESI Payment",
      description: "Details about ESI Payment.",
      href: "/services/compliances/esi-payment",
    },
    {
      name: "PF Payment",
      description: "Details about PF Payment.",
      href: "/services/compliances/pf-payment",
    },
    {
      name: "PT Payment",
      description: "Details about PT Payment.",
      href: "/services/compliances/pt-payment",
    },
    {
      name: "TDS Payment",
      description: "Details about TDS Payment.",
      href: "/services/compliances/tds-payment",
    },
  ],
  Certifications: [
    {
      name: "Turnover Certificate",
      description: "Details about Turnover Certificate.",
      href: "/services/certifications/turnover-certificate",
    },
    {
      name: "Educational Visa/Visiting Visa Certificate",
      description: "Details about Educational Visa/Visiting Visa Certificate.",
      href: "/services/certifications/educational-visa",
    },
    {
      name: "Net worth Certificate",
      description: "Details about Net worth Certificate.",
      href: "/services/certifications/net-worth-certificate",
    },
    {
      name: "Foreign Remittance Certificate (15CA-15CB)",
      description: "Details about Foreign Remittance Certificate (15CA-15CB).",
      href: "/services/certifications/foreign-remittance",
    },
    {
      name: "Charge Certificate",
      description: "Details about Charge Certificate.",
      href: "/services/certifications/charge-certificate",
    },
    {
      name: "Lower Deduction Certificate U/s. 197 of IT Act 1961",
      description:
        "Details about Lower Deduction Certificate U/s. 197 of IT Act 1961.",
      href: "/services/certifications/lower-deduction",
    },
  ],
  "Bank Related Services": [
    {
      name: "Project Reports",
      description: "Details about Project Reports.",
      href: "/services/bank-related/project-reports",
    },
    {
      name: "CMA Data",
      description: "Details about CMA Data.",
      href: "/services/bank-related/cma-data",
    },
    {
      name: "Projections",
      description: "Details about Projections.",
      href: "/services/bank-related/projections",
    },
    {
      name: "Provisionals",
      description: "Details about Provisionals.",
      href: "/services/bank-related/provisionals",
    },
    {
      name: "Estimates",
      description: "Details about Estimates.",
      href: "/services/bank-related/estimates",
    },
    {
      name: "Stock Statements",
      description: "Details about Stock Statements.",
      href: "/services/bank-related/stock-statements",
    },
    {
      name: "Loan Documentation",
      description: "Details about Loan Documentation.",
      href: "/services/bank-related/loan-documentation",
    },
  ],
  "Digital Signature Service": [
    {
      name: "Tenders DSC Registration",
      description: "Details about Tenders DSC Registration.",
      href: "/services/digital-signature/tenders-dsc",
    },
    {
      name: "DGFT DSC Registration",
      description: "Details about DGFT DSC Registration.",
      href: "/services/digital-signature/dgft-dsc",
    },
    {
      name: "IT/ROC/PF DSC Registration",
      description: "Details about IT/ROC/PF DSC Registration.",
      href: "/services/digital-signature/it-roc-pf-dsc",
    },
  ],
  "Application Services": [
    {
      name: "PAN Applications",
      description: "Details about PAN Applications.",
      href: "/services/application/pan-applications",
    },
    {
      name: "TAN Applications",
      description: "Details about TAN Applications.",
      href: "/services/application/tan-applications",
    },
    {
      name: "DSC Applications",
      description: "Details about DSC Applications.",
      href: "/services/application/dsc-applications",
    },
    {
      name: "DIN Applications",
      description: "Details about DIN Applications.",
      href: "/services/application/din-applications",
    },
  ],
  "Subsidy Services": [
    {
      name: "Central Subsidy",
      description: "Details about Central Subsidy.",
      href: "/services/subsidy/central-subsidy",
    },
    {
      name: "State Subsidy",
      description: "Details about State Subsidy.",
      href: "/services/subsidy/state-subsidy",
    },
  ],
  "Other Services": [
    {
      name: "Income Tax Scrutiny Services",
      description:
        "Providing support and guidance to taxpayers during the scrutiny process conducted by the income tax authorities. This process is initiated to ensure that taxpayers have complied with the tax laws and reported their income accurately.",
      href: "/services/other/income-tax-scrutiny",
    },
    {
      name: "GST Scrutiny Services",
      description:
        "Providing assistance and support to businesses and individuals during the scrutiny process conducted by the Goods and Services Tax (GST) authorities. GST scrutiny is a mechanism to ensure that taxpayers have complied with GST laws, reported their transactions accurately, and paid the correct amount of GST.",
      href: "/services/other/gst-scrutiny",
    },
    {
      name: "Appeal Filings",
      description:
        "Appeal Filings refer to the process of formally submitting a legal request or petition to a higher authority to review and reconsider a decision made by a lower-level administrative or judicial body. Appeals are typically filed when individuals or organizations believe that an error, injustice, or misinterpretation of the law has occurred in the original decision.",
      href: "/services/other/appeal-filings",
    },
    {
      name: "Accounting Services",
      description:
        "Accounting Services encompass a range of financial and bookkeeping activities provided by accounting professionals and firms to individuals, businesses, and organizations. These services involve the systematic recording, analysis, and reporting of financial transactions to ensure accurate and compliant financial records.",
      href: "/services/other/accounting-services",
    },
    {
      name: "Book Keeping Services",
      description:
        "Bookkeeping Services encompass the systematic and organized recording of financial transactions and maintaining accurate financial records for individuals, businesses, or organizations. Bookkeepers are responsible for tracking income, expenses, assets, and liabilities, ensuring financial data integrity.",
      href: "/services/other/book-keeping-services",
    },
    {
      name: "ROC Works",
      description:
        "Registrar of Companies Works, refers to the administrative and regulatory activities carried out by the office of the Registrar of Companies (ROC).",
      href: "/services/other/roc-works",
    },
    {
      name: "Consultancy Services",
      description:
        "Consultancy Services refer to professional advice and support provided by experts or consultants in various fields to individuals, businesses, organizations, or governments. These services are sought to address specific challenges, make informed decisions, improve performance, and achieve objectives.",
      href: "/services/other/consultancy-services",
    },
    {
      name: "Financial Advisory Services",
      description:
        "Financial Advisory Services involve expert guidance provided by professionals to individuals and businesses for better financial decision-making, investment, tax planning, and wealth management.",
      href: "/services/other/financial-advisory-services",
    },
    {
      name: "Tax Planning Services",
      description:
        "Tax Planning Services refer to the strategic and professional assistance provided to individuals and businesses. These services involve evaluating financial situations, identifying tax-saving opportunities, and creating effective tax strategies to optimize financial outcomes.",
      href: "/services/other/tax-planning-services",
    },
    {
      name: "Shares Transfers",
      description:
        "Shares Transfer Service refers to the process of transferring ownership of shares or stocks from one party to another. This service ensures that the transfer is conducted accurately and in compliance with relevant laws and regulations.",
      href: "/services/other/shares-transfers",
    },
    {
      name: "Shares Valuation",
      description:
        "Shares Valuation is the process of assigning a specific monetary value to shares or stocks for various financial purposes.",
      href: "/services/other/shares-valuation",
    },
  ],
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    isDropdown: true,
    subServices: servicesData,
  },
  { name: "Solutions", href: "/solutions" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="w-full">
        <nav className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  className="h-16 w-auto"
                  src={navLogo}
                  alt="CA Santhosh Logo"
                  loading="lazy"
                />
                {/* <span className="text-2xl font-bold text-primary-600">CA Santhosh</span> */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navigation.map((item) =>
                  item.isDropdown ? (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <Link
                        to={item.href}
                        className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                      >
                        {item.name}
                      </Link>
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-md py-1 z-10"
                          >
                            {Object.keys(item.subServices).map((category) => (
                              <Link
                                key={category}
                                to={`/services/${category
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                                className="block px-4 py-2 text-sm text-secondary-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                {category}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                  )
                )}
                <Link to="/book-appointment" className="btn btn-primary">
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 hover:bg-secondary-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) =>
                item.isDropdown ? (
                  <div key={item.name}>
                    <button
                      className="block w-full text-left px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 rounded-md"
                      onClick={() =>
                        setIsServicesDropdownOpen(!isServicesDropdownOpen)
                      }
                    >
                      {item.name}
                    </button>
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 pr-2 pt-2 pb-1 space-y-1"
                        >
                          {Object.keys(item.subServices).map((category) => (
                            <Link
                              key={category}
                              to={`/services/${category
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                              className="block px-3 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 rounded-md"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsServicesDropdownOpen(false);
                              }}
                            >
                              {category}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                )
              )}
              <Link
                to="/book-appointment"
                className="block w-full text-center btn btn-primary mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
