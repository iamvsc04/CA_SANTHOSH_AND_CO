import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';
import SEO from '../components/SEO';

// Import service category images
import registrationsImage from '../assets/images/services/registrations.webp';
import gstRegistrationImage from '../assets/images/services/registrations/gst registration.webp';
import companyRegistrationImage from '../assets/images/services/registrations/company-registration.webp';
import partnershipRegistrationImage from '../assets/images/services/registrations/Partnership-Firm-Registration.webp';
import proprietorshipRegistrationImage from '../assets/images/services/registrations/proprietorship-firm-registration.webp';
import llpRegistrationImage from '../assets/images/services/registrations/llp registration.webp';
import msmeImage from '../assets/images/services/registrations/MSME.webp';
import iecImage from '../assets/images/services/registrations/IEC Registration.webp';

import factoryLicenseImage from '../assets/images/services/licenses/factory license.webp';
import tradeLicenseImage from '../assets/images/services/licenses/trade license.webp';
import labourLicenseImage from '../assets/images/services/licenses/labour license.webp';
import pollutionBoardImage from '../assets/images/services/licenses/pollution board approval.webp';
import factoryPlanImage from '../assets/images/services/licenses/factory plan approval.webp';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Registrations',
      description: 'Explore Registrations and more detailed services.',
      link: '/services/registrations',
      category: 'Registrations',
      image: registrationsImage,
      subServices: [
        {
          title: 'GST Registration',
          description: 'Simplify your GST registration process with our expert guidance.',
          link: '/services/gst-registration',
          image: gstRegistrationImage,
        },
        {
          title: 'Company Registration',
          description: 'Start your business journey with proper company registration.',
          link: '/services/company-registration',
          image: companyRegistrationImage,
        },
        {
          title: 'Partnership Firm Registration',
          description: 'Register your partnership firm with ease and confidence.',
          link: '/services/partnership-registration',
          image: partnershipRegistrationImage,
        },
        {
          title: 'Proprietorship Registration',
          description: 'Establish your sole proprietorship business legally.',
          link: '/services/proprietorship-registration',
          image: proprietorshipRegistrationImage,
        },
        {
          title: 'LLP Registration',
          description: 'Register your Limited Liability Partnership with expert guidance.',
          link: '/services/llp-registration',
          image: llpRegistrationImage,
        },
        {
          title: 'MSME/Udyam Registration',
          description: 'Register your business under MSME/Udyam for government benefits.',
          link: '/services/msme-registration',
          image: msmeImage,
        },
        {
          title: 'IEC Code Registration',
          description: 'Obtain your Import Export Code for international trade.',
          link: '/services/iec-registration',
          image: iecImage,
        },
      ],
    },
    {
      title: 'Licenses',
      description: 'Explore Licenses and more detailed services.',
      link: '/services/licenses',
      category: 'Licenses',
      image: factoryLicenseImage,
      subServices: [
        {
          title: 'Factory License',
          description: 'Obtain your Factory License for manufacturing operations.',
          link: '/services/factory-license',
          image: factoryLicenseImage,
        },
        {
          title: 'Trade License',
          description: 'Get your Trade License for legal business operations.',
          link: '/services/trade-license',
          image: tradeLicenseImage,
        },
        {
          title: 'Labour License',
          description: 'Ensure compliance with labor laws through proper licensing.',
          link: '/services/labour-license',
          image: labourLicenseImage,
        },
        {
          title: 'Pollution Board Approval',
          description: 'Obtain necessary environmental clearances for your business.',
          link: '/services/pollution-board-approval',
          image: pollutionBoardImage,
        },
        {
          title: 'Factory Plan Approval',
          description: 'Get your factory plans approved by relevant authorities.',
          link: '/services/factory-plan-approval',
          image: factoryPlanImage,
        },
      ],
    },
    {
      title: 'Audit Services',
      description: 'Explore Audit Services and more detailed services.',
      link: '/services/audits',
      category: 'Audit Services',
      image: registrationsImage, // Placeholder image
    },
    {
      title: 'Returns Filing',
      description: 'Explore Returns Filing and more detailed services.',
      link: '/services/returns-filing',
      category: 'Returns Filing',
      image: registrationsImage, // Placeholder image
    },
    {
      title: 'Compliances',
      description: 'Explore Compliances and more detailed services.',
      link: '/services/compliances',
      category: 'Compliances',
      image: registrationsImage, // Placeholder image
    },
    {
      title: 'Certifications',
      description: 'Explore Certifications and more detailed services.',
      link: '/services/certifications',
      category: 'Certifications',
      image: registrationsImage, // Placeholder image
    },
    {
      title: 'Bank Related Services',
      description: 'Explore Bank Related Services and more detailed services.',
      link: '/services/bank-related-services',
      category: 'Bank Related Services',
      image: registrationsImage, // Placeholder image
    },
    {
      title: 'Digital Signature Service',
      description: 'Explore Digital Signature Service and more detailed services.',
      link: '/services/digital-signature-service',
      category: 'Digital Signature Service',
      image: registrationsImage, // Placeholder image
    },
    {
      title: 'Application Services',
      description: 'Explore Application Services and more detailed services.',
      link: '/services/application-services',
      category: 'Application Services',
      image: registrationsImage, // Placeholder image
    },
    {
      title: 'Subsidy Services',
      description: 'Explore Subsidy Services and more detailed services.',
      link: '/services/subsidy-services',
      category: 'Subsidy Services',
      image: registrationsImage, // Placeholder image
    },
    {
      title: 'Other Services',
      description: 'Explore Other Services and more detailed services.',
      link: '/services/other-services',
      category: 'Other Services',
      image: registrationsImage, // Placeholder image
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