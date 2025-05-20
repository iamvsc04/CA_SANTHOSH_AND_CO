import { Helmet } from 'react-helmet-async';
import { AnimatedSection, AnimatedHeading, AnimatedText, Card, DecorativeBackground } from '../components/ui';
import { LightBulbIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'Business Growth Strategies',
    description: 'Providing strategic financial planning and advisory to help your business scale and succeed.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Tax Optimization for Individuals & Businesses',
    description: 'Developing effective tax strategies to minimize liability and ensure compliance with the latest regulations.',
    icon: LightBulbIcon,
  },
  {
    name: 'Financial Health Assessment',
    description: 'Analyzing your current financial situation to identify areas for improvement and growth.',
    icon: ShieldCheckIcon,
  },
  // Add more solution items as needed
];

export default function Solutions() {
  return (
    <>
      <Helmet>
        <title>Solutions | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Discover tailored financial solutions for your business and personal needs offered by CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Our Tailored Solutions
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Innovative approaches to complex financial challenges.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={solution.name} className="h-full p-6 text-center">
                <div className="flex justify-center mb-6">
                  <solution.icon className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {solution.name}
                </h3>
                <p className="text-secondary-600">
                  {solution.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Add a CTA section similar to other pages if desired */}
      {/* <AnimatedSection className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <AnimatedHeading className="text-white mb-6">
            Ready for a Custom Solution?
          </AnimatedHeading>
          <AnimatedText className="text-primary-100 mb-8">
            Contact us today to discuss your specific needs and how we can help.
          </AnimatedText>
          <Button variant="secondary" size="lg" as={Link} to="/contact">
            Get in Touch
          </Button>
        </div>
      </AnimatedSection> */}
    </>
  );
} 