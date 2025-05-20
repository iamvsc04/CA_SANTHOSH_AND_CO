import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedHeading, AnimatedText, Card, DecorativeBackground, Button } from '../components/ui';
import { BriefcaseIcon, ScaleIcon, BanknotesIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Taxation Services',
    description: 'Comprehensive tax planning and filing for individuals and businesses.',
    icon: ScaleIcon,
    link: '/services/taxation'
  },
  {
    name: 'Audit & Assurance',
    description: 'Independent audit and assurance services to ensure financial accuracy and compliance.',
    icon: DocumentCheckIcon,
    link: '/services/audit'
  },
  {
    name: 'Business Advisory',
    description: 'Strategic advice and support for business setup, growth, and financial management.',
    icon: BriefcaseIcon,
    link: '/services/advisory'
  },
  {
    name: 'Accounting & Bookkeeping',
    description: 'Professional accounting and bookkeeping services to maintain accurate financial records.',
    icon: BanknotesIcon,
    link: '/services/accounting'
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Explore the range of professional accounting, taxation, audit, and business advisory services offered by CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Our Comprehensive Services
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Expert financial solutions tailored to your specific needs.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={service.name}>
                <Card className="h-full p-6 text-center" hover={true}>
                  <div className="flex justify-center mb-6">
                    <service.icon className="w-12 h-12 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-secondary-600">
                    {service.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <AnimatedHeading className="text-white mb-6">
            Need a Specific Service?
          </AnimatedHeading>
          <AnimatedText className="text-primary-100 mb-8">
            Contact us today to discuss your unique requirements and how we can assist you.
          </AnimatedText>
          <Button variant="secondary" size="lg" as={Link} to="/contact">
            Get in Touch
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
} 