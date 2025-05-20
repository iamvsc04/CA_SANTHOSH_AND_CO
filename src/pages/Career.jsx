import { Helmet } from 'react-helmet-async';
import { AnimatedSection, AnimatedHeading, AnimatedText, Button, DecorativeBackground, Card } from '../components/ui';
import { BriefcaseIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const jobOpenings = [
  {
    id: 'tax-associate',
    title: 'Tax Associate',
    location: 'Nalgonda, Telangana',
    type: 'Full-time',
    description: 'Join our tax team and assist clients with various tax compliance and planning tasks.',
    link: '/career/tax-associate' // Link to a detailed job page if needed
  },
  {
    id: 'audit-assistant',
    title: 'Audit Assistant',
    location: 'Nalgonda, Telangana',
    type: 'Full-time',
    description: 'Be part of our audit team and gain experience in conducting financial audits for diverse clients.',
    link: '/career/audit-assistant'
  },
  // Add more job openings as needed
];

export default function Career() {
  return (
    <>
      <Helmet>
        <title>Career | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Explore career opportunities and join the team at CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Join Our Team
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Be a part of a dynamic and growing practice dedicated to excellence.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="p-6 rounded-lg shadow-md bg-white">
                <BriefcaseIcon className="w-12 h-12 text-primary-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Professional Growth</h3>
                <p className="text-secondary-600">Opportunities for continuous learning and career advancement.</p>
             </div>
             <div className="p-6 rounded-lg shadow-md bg-white">
                <AcademicCapIcon className="w-12 h-12 text-primary-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Learning Environment</h3>
                <p className="text-secondary-600">Work in a supportive environment that encourages knowledge sharing.</p>
             </div>
             <div className="p-6 rounded-lg shadow-md bg-white">
                <UsersIcon className="w-12 h-12 text-primary-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Collaborative Culture</h3>
                <p className="text-secondary-600">Join a team that values collaboration and mutual respect.</p>
             </div>
          </div>
        </div>
      </AnimatedSection>

      {jobOpenings.length > 0 && (
         <AnimatedSection className="py-20 bg-white">
            <div className="container">
               <AnimatedHeading className="text-center mb-12">
                  Open Positions
               </AnimatedHeading>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {jobOpenings.map((job, index) => (
                     <Card key={job.id} className="p-6" hover={true}>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">{job.title}</h3>
                        <p className="text-secondary-600 mb-4">{job.location} | {job.type}</p>
                        <p className="text-secondary-700 mb-6">{job.description}</p>
                         {job.link && (
                            <Link to={job.link} className="inline-flex items-center text-primary-600 hover:text-primary-700">
                               Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>
                         )}
                     </Card>
                  ))}
               </div>
            </div>
         </AnimatedSection>
      )}

       {/* CTA Section */}
       <AnimatedSection className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <AnimatedHeading className="text-white mb-6">
            Interested in Joining Us?
          </AnimatedHeading>
          <AnimatedText className="text-primary-100 mb-8">
            Send us your resume and cover letter to explore potential opportunities.
          </AnimatedText>
          <Button variant="secondary" size="lg" as={Link} to="/contact">
            Contact Us
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
} 