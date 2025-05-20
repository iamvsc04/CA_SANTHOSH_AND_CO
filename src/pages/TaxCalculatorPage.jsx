import { Helmet } from 'react-helmet-async';
import { AnimatedSection, AnimatedHeading, AnimatedText, DecorativeBackground } from '../components/ui';
import TaxCalculator from '../components/TaxCalculator';

export default function TaxCalculatorPage() {
  return (
    <>
      <Helmet>
        <title>Income Tax Calculator | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Calculate your income tax liability with our easy-to-use tax calculator. Get instant estimates based on the latest Indian tax slabs and deductions." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Income Tax Calculator
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Calculate your tax liability based on the latest Indian tax slabs and available deductions.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container">
          <TaxCalculator />
        </div>
      </AnimatedSection>
    </>
  );
} 