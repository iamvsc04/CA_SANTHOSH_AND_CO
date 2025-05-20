import { Helmet } from 'react-helmet-async';
import { AnimatedSection, AnimatedHeading, AnimatedText, Card, DecorativeBackground } from '../components/ui';
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    quote: 'CA VEERLAPATI Santhosh provided exceptional service and expert guidance for my tax filing. Highly recommended!',
    name: 'Client Name 1',
    title: 'Business Owner',
  },
  {
    quote: 'The team at CA VEERLAPATI Santhosh is professional, knowledgeable, and always available to answer my questions.',
    name: 'Client Name 2',
    title: 'Individual Client',
  },
  {
    quote: 'Their business advisory services were invaluable in helping me navigate complex financial decisions.',
    name: 'Client Name 3',
    title: 'Startup Founder',
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Client Testimonials | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Read what our clients say about the professional accounting and tax services provided by CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            What Our Clients Say
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Hear directly from those who have benefited from our services.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 flex flex-col justify-between h-full" hover={true}>
                <div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-secondary-700 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">{testimonial.name}</p>
                  <p className="text-sm text-secondary-600">{testimonial.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Add a CTA section similar to other pages if desired */}
      {/* <AnimatedSection className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <AnimatedHeading className="text-white mb-6">
            Ready to Share Your Experience?
          </AnimatedHeading>
          <AnimatedText className="text-primary-100 mb-8">
            If you've been happy with our services, we'd love to hear from you!
          </AnimatedText>
          <Button variant="secondary" size="lg" as={Link} to="/contact">
            Submit a Testimonial
          </Button>
        </div>
      </AnimatedSection> */}
    </>
  );
} 