import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { AnimatedSection, AnimatedHeading, AnimatedText, DecorativeBackground, Button } from '../components/ui';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

// Placeholder data for services - replace with actual data source
const servicesData = {
  taxation: {
    title: 'Taxation Services',
    description: 'Comprehensive tax planning, preparation, and filing services for individuals and businesses. Stay compliant and optimize your tax liability with our expert assistance.',
    details: [
      'Income Tax Filing (Individual & Corporate)',
      'GST Registration & Compliance',
      'TDS/TCS Compliance',
      'Tax Planning & Advisory',
      'Representation before Tax Authorities',
    ],
    cta: 'Schedule a Tax Consultation',
    ctaLink: '/book-appointment'
  },
  audit: {
    title: 'Audit & Assurance',
    description: 'Providing independent audit and assurance services to ensure the accuracy and reliability of your financial statements. Build confidence with our thorough and professional audits.',
    details: [
      'Statutory Audit',
      'Internal Audit',
      'Tax Audit',
      'GST Audit',
      'Due Diligence',
    ],
    cta: 'Discuss Your Audit Needs',
    ctaLink: '/contact'
  },
  advisory: {
    title: 'Business Advisory',
    description: 'Offering strategic advice and support to help your business grow, improve performance, and navigate complex challenges. From startup to expansion, we are your trusted advisor.',
    details: [
      'Business Setup & Registration',
      'Financial Planning & Analysis',
      'Working Capital Management',
      'Business Valuation',
      'Mergers & Acquisitions Support',
    ],
    cta: 'Get Business Advisory',
    ctaLink: '/book-appointment'
  },
  accounting: {
    title: 'Accounting & Bookkeeping',
    description: 'Providing professional accounting and bookkeeping services to maintain accurate financial records, ensure compliance, and provide valuable insights into your business performance.',
    details: [
      'Chart of Accounts Setup',
      'Transaction Recording',
      'Bank Reconciliation',
      'Financial Statement Preparation',
      'Payroll Processing',
    ],
    cta: 'Inquire About Accounting Services',
    ctaLink: '/contact'
  },
  // Add more service data as needed
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <AnimatedSection className="py-20 text-center">Service not found.</AnimatedSection>;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            {service.title}
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            {service.description}
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Placeholder for image or illustration - replace with actual asset */}
          <div className="flex justify-center">
             <img
              src={`/placeholder-${serviceId}.jpg`} // Example: /placeholder-taxation.jpg
              alt={service.title}
              className="rounded-xl shadow-lg w-full h-auto object-cover max-w-sm"
            />
          </div>
          <div>
            <AnimatedHeading className="mb-6 text-left" delay={0.1}>
              Key Aspects of Our {service.title}
            </AnimatedHeading>
            <ul className="space-y-4">
              {service.details.map((detail, index) => (
                <AnimatedText key={index} delay={0.2 + index * 0.1} className="flex items-start text-secondary-700">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <span>{detail}</span>
                </AnimatedText>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

       {/* CTA Section */}
       <AnimatedSection className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <AnimatedHeading className="text-white mb-6">
            Ready to Get Started?
          </AnimatedHeading>
          <AnimatedText className="text-primary-100 mb-8">
            Contact us today to discuss your needs or book a consultation.
          </AnimatedText>
          <Button variant="secondary" size="lg" as={Link} to={service.ctaLink}>
            {service.cta}
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
} 