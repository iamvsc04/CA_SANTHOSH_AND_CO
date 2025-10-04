import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";
import SEO from "../components/SEO";
//registrations
import registrationsImage from "../assets/images/services/registrations.webp";
import partnershipRegistrationImage from "../assets/images/services/registrations/Partnership-Firm-Registration.webp";
import proprietorshipRegistrationImage from "../assets/images/services/registrations/proprietorship-firm-registration.webp";
import companyRegistrationImage from "../assets/images/services/registrations/company-registration.webp";
import llpRegistrationImage from "../assets/images/services/registrations/llp registration.webp";
import gstRegistrationImage from "../assets/images/services/registrations/gst registration.webp";
import msmeImage from "../assets/images/services/registrations/MSME.webp";
import iecImage from "../assets/images/services/registrations/IEC Registration.webp";

//licenses
import licensesImage from "../assets/images/services/licensesImage.jpg";
import labourLicenseImage from "../assets/images/services/licenses/labour license.webp";
import tradeLicenseImage from "../assets/images/services/licenses/trade license.webp";
import factoryLicenseImage from "../assets/images/services/licenses/factory license.webp";
import factoryPlanImage from "../assets/images/services/licenses/factory plan approval.webp";
import pollutionBoardImage from "../assets/images/services/licenses/pollution board approval.webp";

//audit services
import auditServiceImage from "../assets/images/services/audit_services.jpg";
import taxReturnImage from "../assets/images/services/tax_return.jpeg";
import compliancesImage from "../assets/images/services/compliancesImage.jpg";
import certificationImage from "../assets/images/services/certificationImage.webp";
import BankServicesImage from "../assets/images/services/BankServicesImage.avif";
import digitalSignatureImage from "../assets/images/services/digitalSignatureImage.jpg";
import subsidyImage from "../assets/images/services/subsidyImage.jpg";
import services from "../assets/images/services/services.avif";
import applicationImage from "../assets/images/services/applicationImage.jpg";
const Services = () => {
  const serviceCategories = [
    {
      title: "Registrations",
      description: "Explore Registrations and more detailed services.",
      link: "/services/registrations",
      category: "Registrations",
      image: registrationsImage,
      subServices: [
        {
          title: "GST Registration",
          description:
            "Simplify your GST registration process with our expert guidance.",
          link: "/services/registrations/gst-registration",
          image: gstRegistrationImage,
        },
        {
          title: "Company Registration",
          description:
            "Start your business journey with proper company registration.",
          link: "/services/registrations/company-incorporation",
          image: companyRegistrationImage,
        },
        {
          title: "Partnership Firm Registration",
          description:
            "Register your partnership firm with ease and confidence.",
          link: "/services/registrations/partnership-firm",
          image: partnershipRegistrationImage,
        },
        {
          title: "Proprietorship Registration",
          description: "Establish your sole proprietorship business legally.",
          link: "/services/registrations/proprietorship-firm",
          image: proprietorshipRegistrationImage,
        },
        {
          title: "LLP Registration",
          description:
            "Register your Limited Liability Partnership with expert guidance.",
          link: "/services/registrations/llp-registration",
          image: llpRegistrationImage,
        },
        {
          title: "MSME/Udyam Registration",
          description:
            "Register your business under MSME/Udyam for government benefits.",
          link: "/services/registrations/msme-udyam",
          image: msmeImage,
        },
        {
          title: "IEC Code Registration",
          description:
            "Obtain your Import Export Code for international trade.",
          link: "/services/registrations/iec-code",
          image: iecImage,
        },
      ],
    },
    {
      title: "Licenses",
      description: "Explore Licenses and more detailed services.",
      link: "/services/licenses",
      category: "Licenses",
      image: licensesImage,
      subServices: [
        {
          title: "Factory License",
          description:
            "Obtain your Factory License for manufacturing operations.",
          link: "/services/licenses/factory-license",
          image: factoryLicenseImage,
        },
        {
          title: "Trade License",
          description: "Get your Trade License for legal business operations.",
          link: "/services/licenses/trade-license",
          image: tradeLicenseImage,
        },
        {
          title: "Labour License",
          description:
            "Ensure compliance with labor laws through proper licensing.",
          link: "/services/licenses/labour-license",
          image: labourLicenseImage,
        },
        {
          title: "Pollution Board Approval",
          description:
            "Obtain necessary environmental clearances for your business.",
          link: "/services/licenses/pollution-board-approval",
          image: pollutionBoardImage,
        },
        {
          title: "Factory Plan Approval",
          description:
            "Get your factory plans approved by relevant authorities.",
          link: "/services/licenses/factory-plan-approval",
          image: factoryPlanImage,
        },
      ],
    },
    {
      title: "Audit Services",
      description: "Explore Audit Services and more detailed services.",
      link: "/services/audit-services",
      category: "Audit Services",
      image: auditServiceImage,
      subServices: [
        {
          title: "Tax Audit",
          description: "Comprehensive Tax Audit services for businesses.",
          link: "/services/audit-services/tax-audit",
          image: auditServiceImage,
        },
        {
          title: "Internal Audit",
          description:
            "Professional Internal Audit services for organizations.",
          link: "/services/audit-services/internal-audits",
          image: auditServiceImage,
        },
        {
          title: "Statutory Audit",
          description: "Statutory Audit services for companies and compliance.",
          link: "/services/audit-services/statutory-audits",
          image: auditServiceImage,
        },
        {
          title: "GST Audit",
          description: "Expert GST Audit services for GST compliance.",
          link: "/services/audit-services/gst-audits",
          image: auditServiceImage,
        },
        {
          title: "Concurrent Audit",
          description: "Concurrent Audit services for real-time compliance.",
          link: "/services/audit-services/concurrent-audits",
          image: auditServiceImage,
        },
        {
          title: "Stock Audit",
          description: "Stock Audit services for inventory accuracy.",
          link: "/services/audit-services/stock-audits",
          image: auditServiceImage,
        },
      ],
    },
    {
      title: "Returns Filing",
      description: "Explore Returns Filing and more detailed services.",
      link: "/services/returns-filing",
      category: "Returns Filing",
      image: taxReturnImage,
      subServices: [
        {
          title: "IT Returns",
          description: "Details about IT Returns.",
          link: "/services/returns-filing/it-returns",
          image: taxReturnImage,
        },
        {
          title: "GST Returns",
          description: "Details about GST Returns.",
          link: "/services/returns-filing/gst-returns",
          image: taxReturnImage,
        },
        {
          title: "ROC Returns",
          description: "Details about ROC Returns.",
          link: "/services/returns-filing/roc-returns",
          image: taxReturnImage,
        },
        {
          title: "ESI Returns",
          description: "Details about ESI Returns.",
          link: "/services/returns-filing/esi-returns",
          image: taxReturnImage,
        },
        {
          title: "PF Returns",
          description: "Details about PF Returns.",
          link: "/services/returns-filing/pf-returns",
          image: taxReturnImage,
        },
        {
          title: "PT Returns",
          description: "Details about PT Returns.",
          link: "/services/returns-filing/pt-returns",
          image: taxReturnImage,
        },
        {
          title: "TDS Returns",
          description: "Details about TDS Returns.",
          link: "/services/returns-filing/tds-returns",
          image: taxReturnImage,
        },
      ],
    },
    {
      title: "Compliances",
      description: "Explore Compliances and more detailed services.",
      link: "/services/compliances",
      category: "Compliances",
      image: compliancesImage,
      subServices: [
        {
          title: "Advance Tax Payment",
          description: "Details about Advance Tax Payment.",
          link: "/services/compliances/advance-tax",
          image: compliancesImage,
        },
        {
          title: "ESI Payment",
          description: "Details about ESI Payment.",
          link: "/services/compliances/esi-payment",
          image: compliancesImage,
        },
        {
          title: "PF Payment",
          description: "Details about PF Payment.",
          link: "/services/compliances/pf-payment",
          image: compliancesImage,
        },
        {
          title: "PT Payment",
          description: "Details about PT Payment.",
          link: "/services/compliances/pt-payment",
          image: compliancesImage,
        },
        {
          title: "TDS Payment",
          description: "Details about TDS Payment.",
          link: "/services/compliances/tds-payment",
          image: compliancesImage,
        },
      ],
    },
    {
      title: "Certifications",
      description: "Explore Certifications and more detailed services.",
      link: "/services/certifications",
      category: "Certifications",
      image: certificationImage,
      subServices: [
        {
          title: "Turnover Certificate",
          description: "Details about Turnover Certificate.",
          link: "/services/certifications/turnover-certificate",
          image: certificationImage,
        },
        {
          title: "Educational Visa/Visiting Visa Certificate",
          description:
            "Details about Educational Visa/Visiting Visa Certificate.",
          link: "/services/certifications/educational-visa",
          image: certificationImage,
        },
        {
          title: "Net worth Certificate",
          description: "Details about Net worth Certificate.",
          link: "/services/certifications/net-worth-certificate",
          image: certificationImage,
        },
        {
          title: "Foreign Remittance Certificate (15CA-15CB)",
          description:
            "Details about Foreign Remittance Certificate (15CA-15CB).",
          link: "/services/certifications/foreign-remittance",
          image: certificationImage,
        },
        {
          title: "Charge Certificate",
          description: "Details about Charge Certificate.",
          link: "/services/certifications/charge-certificate",
          image: certificationImage,
        },
        {
          title: "Lower Deduction Certificate U/s. 197 of IT Act 1961",
          description:
            "Details about Lower Deduction Certificate U/s. 197 of IT Act 1961.",
          link: "/services/certifications/lower-deduction",
          image: certificationImage,
        },
      ],
    },
    {
      title: "Bank Related Services",
      description: "Explore Bank Related Services and more detailed services.",
      link: "/services/bank-related",
      category: "Bank Related Services",
      image: BankServicesImage,
      subServices: [
        {
          title: "Project Reports",
          description: "Details about Project Reports.",
          link: "/services/bank-related/project-reports",
          image: BankServicesImage,
        },
        {
          title: "CMA Data",
          description: "Details about CMA Data.",
          link: "/services/bank-related/cma-data",
          image: BankServicesImage,
        },
        {
          title: "Projections",
          description: "Details about Projections.",
          link: "/services/bank-related/projections",
          image: BankServicesImage,
        },
        {
          title: "Provisionals",
          description: "Details about Provisionals.",
          link: "/services/bank-related/provisionals",
          image: BankServicesImage,
        },
        {
          title: "Estimates",
          description: "Details about Estimates.",
          link: "/services/bank-related/estimates",
          image: BankServicesImage,
        },
        {
          title: "Stock Statements",
          description: "Details about Stock Statements.",
          link: "/services/bank-related/stock-statements",
          image: BankServicesImage,
        },
        {
          title: "Loan Documentation",
          description: "Details about Loan Documentation.",
          link: "/services/bank-related/loan-documentation",
          image: BankServicesImage,
        },
      ],
    },
    {
      title: "Digital Signature Services",
      description:
        "Explore Digital Signature Services and more detailed services.",
      link: "/services/digital-signature",
      category: "Digital Signature Services",
      image: digitalSignatureImage,
      subServices: [
        {
          title: "Tenders DSC Registration",
          description: "Details about Tenders DSC Registration.",
          link: "/services/digital-signature/tenders-dsc",
          image: digitalSignatureImage,
        },
        {
          title: "DGFT DSC Registration",
          description: "Details about DGFT DSC Registration.",
          link: "/services/digital-signature/dgft-dsc",
          image: digitalSignatureImage,
        },
        {
          title: "IT/ROC/PF DSC Registration",
          description: "Details about IT/ROC/PF DSC Registration.",
          link: "/services/digital-signature/it-roc-pf-dsc",
          image: digitalSignatureImage,
        },
      ],
    },
    {
      title: "Application Services",
      description: "Explore Application Services and more detailed services.",
      link: "/services/application",
      category: "Application Services",
      image: applicationImage,
      subServices: [
        {
          title: "PAN Applications",
          description: "Details about PAN Applications.",
          link: "/services/application/pan-applications",
          image: applicationImage,
        },
        {
          title: "TAN Applications",
          description: "Details about TAN Applications.",
          link: "/services/application/tan-applications",
          image: applicationImage,
        },
        {
          title: "DSC Applications",
          description: "Details about DSC Applications.",
          link: "/services/application/dsc-applications",
          image: applicationImage,
        },
        {
          title: "DIN Applications",
          description: "Details about DIN Applications.",
          link: "/services/application/din-applications",
          image: applicationImage,
        },
      ],
    },
    {
      title: "Subsidy Services",
      description: "Explore Subsidy Services and more detailed services.",
      link: "/services/subsidy",
      category: "Subsidy Services",
      image: subsidyImage,
      subServices: [
        {
          title: "Central Subsidy",
          description: "Details about Central Subsidy.",
          link: "/services/subsidy/central-subsidy",
          image: subsidyImage,
        },
        {
          title: "State Subsidy",
          description: "Details about State Subsidy.",
          link: "/services/subsidy/state-subsidy",
          image: subsidyImage,
        },
      ],
    },
    {
      title: "Other Services",
      description: "Explore Other Services and more detailed services.",
      link: "/services/other",
      category: "Other Services",
      image: services,
      subServices: [
        {
          title: "Income Tax Scrutiny Services",
          description:
            "Providing support and guidance to taxpayers during the scrutiny process conducted by the income tax authorities. This process is initiated to ensure that taxpayers have complied with the tax laws and reported their income accurately.",
          link: "/services/other/income-tax-scrutiny",
          image: services,
        },
        {
          title: "GST Scrutiny Services",
          description:
            "Providing assistance and support to businesses and individuals during the scrutiny process conducted by the Goods and Services Tax (GST) authorities. GST scrutiny is a mechanism to ensure that taxpayers have complied with GST laws, reported their transactions accurately, and paid the correct amount of GST.",
          link: "/services/other/gst-scrutiny",
          image: services,
        },
        {
          title: "Appeal Filings",
          description:
            "Appeal Filings refer to the process of formally submitting a legal request or petition to a higher authority to review and reconsider a decision made by a lower-level administrative or judicial body. Appeals are typically filed when individuals or organizations believe that an error, injustice, or misinterpretation of the law has occurred in the original decision.",
          link: "/services/other/appeal-filings",
          image: services,
        },
        {
          title: "Accounting Services",
          description:
            "Accounting Services encompass a range of financial and bookkeeping activities provided by accounting professionals and firms to individuals, businesses, and organizations. These services involve the systematic recording, analysis, and reporting of financial transactions to ensure accurate and compliant financial records.",
          link: "/services/other/accounting-services",
          image: services,
        },
        {
          title: "Book Keeping Services",
          description:
            "Bookkeeping Services encompass the systematic and organized recording of financial transactions and maintaining accurate financial records for individuals, businesses, or organizations. Bookkeepers are responsible for tracking income, expenses, assets, and liabilities, ensuring financial data integrity.",
          link: "/services/other/book-keeping-services",
          image: services,
        },
        {
          title: "ROC Works",
          description:
            "Registrar of Companies Works, refers to the administrative and regulatory activities carried out by the office of the Registrar of Companies (ROC).",
          link: "/services/other/roc-works",
          image: services,
        },
        {
          title: "Consultancy Services",
          description:
            "Consultancy Services refer to professional advice and support provided by experts or consultants in various fields to individuals, businesses, organizations, or governments. These services are sought to address specific challenges, make informed decisions, improve performance, and achieve objectives.",
          link: "/services/other/consultancy-services",
          image: services,
        },
        {
          title: "Financial Advisory Services",
          description:
            "Financial Advisory Services involve expert guidance provided by professionals to individuals and businesses for better financial decision-making, investment, tax planning, and wealth management.",
          link: "/services/other/financial-advisory-services",
          image: services,
        },
        {
          title: "Tax Planning Services",
          description:
            "Tax Planning Services refer to the strategic and professional assistance provided to individuals and businesses. These services involve evaluating financial situations, identifying tax-saving opportunities, and creating effective tax strategies to optimize financial outcomes.",
          link: "/services/other/tax-planning-services",
          image: services,
        },
        {
          title: "Shares Transfers",
          description:
            "Shares Transfer Service refers to the process of transferring ownership of shares or stocks from one party to another. This service ensures that the transfer is conducted accurately and in compliance with relevant laws and regulations.",
          link: "/services/other/shares-transfers",
          image: services,
        },
        {
          title: "Shares Valuation",
          description:
            "Shares Valuation is the process of assigning a specific monetary value to shares or stocks for various financial purposes.",
          link: "/services/other/shares-valuation",
          image: services,
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Our Comprehensive Services - Expert Financial Solutions"
        description="Discover a wide range of financial, tax, and legal services offered by CA Services. From registrations and licenses to audits and tax planning, we provide expert solutions tailored to your business needs."
        keywords="financial services, tax services, legal services, business registration, company audit, tax filing, financial advisory, CA services"
        canonicalUrl="https://yourdomain.com/services"
        ogImage="https://picsum.photos/seed/services-overview/1024/576"
      />
      <div className="py-16 bg-[#F2F3EB]">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#474544] tracking-wider uppercase mb-4">
              Our Comprehensive Services
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <p className="text-[#474544]/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Expert financial solutions tailored to your specific needs.
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <ServiceCard
                key={index}
                title={category.title}
                description={category.description}
                link={category.link}
                category={category.category}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
