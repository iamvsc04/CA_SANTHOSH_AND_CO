import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { BriefcaseIcon, MapPinIcon, CurrencyRupeeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// This would typically come from an API
const jobOpenings = {
  1: {
    id: 1,
    title: "Senior Tax Consultant",
    location: "Nalgonda, Telangana",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹6L - ₹8L per annum",
    description: "We are looking for an experienced tax consultant to join our team. The ideal candidate should have strong knowledge of tax laws and regulations.",
    requirements: [
      "CA qualification or equivalent",
      "Strong knowledge of tax laws",
      "Excellent communication skills",
      "Experience in tax planning and compliance",
      "Proficiency in tax software"
    ],
    responsibilities: [
      "Handle tax planning and compliance for clients",
      "Prepare and review tax returns",
      "Provide tax advisory services",
      "Stay updated with tax laws and regulations",
      "Train and mentor junior team members"
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance coverage",
      "Professional development opportunities",
      "Flexible working hours",
      "Performance-based incentives"
    ],
    skills: [
      "Tax Planning",
      "Tax Compliance",
      "Client Management",
      "Team Leadership",
      "Problem Solving"
    ]
  }
};

export default function CareerDetail() {
  const { jobId } = useParams();
  const job = jobOpenings[jobId];

  if (!job) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">
            Job Opening Not Found
          </h1>
          <Link to="/career" className="btn btn-primary">
            View All Openings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{job.title} - Career Opportunities | CA Veerlapati Santhosh</title>
        <meta name="description" content={`Join our team as a ${job.title} in ${job.location}. ${job.description}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/career"
              className="inline-flex items-center text-primary-100 hover:text-white mb-6"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Careers
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-100">
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center">
                <BriefcaseIcon className="w-5 h-5 mr-2" />
                {job.experience}
              </div>
              <div className="flex items-center">
                <CurrencyRupeeIcon className="w-5 h-5 mr-2" />
                {job.salary}
              </div>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {job.type}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <h2>Job Description</h2>
              <p>{job.description}</p>

              <h2>Responsibilities</h2>
              <ul>
                {job.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>

              <h2>Requirements</h2>
              <ul>
                {job.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>

              <h2>Required Skills</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h2>Benefits</h2>
              <ul>
                {job.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Join our team and grow your career with us
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Other Openings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">
              Other Openings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.values(jobOpenings)
                .filter((opening) => opening.id !== job.id)
                .map((opening) => (
                  <Link
                    key={opening.id}
                    to={`/career/${opening.id}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-secondary-900">
                          {opening.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
                          {opening.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-secondary-600">
                        <div className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {opening.location}
                        </div>
                        <div className="flex items-center">
                          <BriefcaseIcon className="w-4 h-4 mr-1" />
                          {opening.experience}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 