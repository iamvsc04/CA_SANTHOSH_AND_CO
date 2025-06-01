import { Helmet } from "react-helmet-async";
import {
  AnimatedSection,
  AnimatedHeading,
  AnimatedText,
  DecorativeBackground,
} from "../components/ui";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const qualifications = [
  {
    title: "Chartered Accountant",
    institution: "Institute of Chartered Accountants of India (ICAI)",
    year: "2020",
  },
  {
    title: "Bachelor of Commerce",
    institution: "Osmania University",
    year: "2018",
  },
];

const experience = [
  {
    year: "2020 - Present",
    title: "Independent Practice",
    description:
      "Established successful CA practice in Nalgonda, serving diverse clientele across various sectors.",
  },
  {
    year: "2018 - 2020",
    title: "Article Assistant",
    description:
      "Completed articleship under senior CA, gaining hands-on experience in audit, taxation, and compliance.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          About CA VEERLAPATI Santhosh | Chartered Accountant Nalgonda
        </title>
        <meta
          name="description"
          content="Learn more about CA VEERLAPATI Santhosh and his commitment to providing expert financial services in Nalgonda."
        />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>About CA VEERLAPATI Santhosh</AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Dedicated to providing expert financial guidance and solutions.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-150767979993b-ed712d830cc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image
              alt="Professional accountant working at desk"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          <div>
            <AnimatedHeading className="mb-6 text-left" delay={0.1}>
              Our Story and Commitment
            </AnimatedHeading>
            <AnimatedText className="mb-4" delay={0.2}>
              With 3-4 years of dedicated practice in Nalgonda, CA VEERLAPATI
              Santhosh has been a trusted partner for individuals and businesses
              seeking expert financial and tax solutions. His practice is built
              on a foundation of integrity, deep expertise, and a personalized
              approach to client service.
            </AnimatedText>
            <AnimatedText delay={0.3}>
              We understand the unique financial landscape of Nalgonda and are
              committed to helping our clients navigate it successfully. Our
              focus is not just on providing services, but on building lasting
              relationships based on trust and mutual respect. We strive to
              empower our clients with the knowledge and strategies they need to
              achieve their financial goals.
            </AnimatedText>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="container text-center">
          <AnimatedHeading className="mb-12">Our Core Values</AnimatedHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for values - replace with actual content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-lg shadow-md bg-primary-50"
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Integrity
              </h3>
              <p className="text-gray-700">
                Upholding the highest ethical standards in all our interactions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-lg shadow-md bg-secondary-50"
            >
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                Expertise
              </h3>
              <p className="text-gray-700">
                Continuously enhancing our knowledge to provide the best advice.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-lg shadow-md bg-primary-50"
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Client Focus
              </h3>
              <p className="text-gray-700">
                Prioritizing client needs and building strong, trusting
                relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Qualifications Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Qualifications
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Professional certifications and academic achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {qualifications.map((qualification, index) => (
              <motion.div
                key={qualification.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {qualification.title}
                </h3>
                <p className="text-secondary-600 mb-2">
                  {qualification.institution}
                </p>
                <p className="text-primary-600 font-medium">
                  {qualification.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Years of dedicated service in the field of accountancy
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experience.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600" />
                <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-secondary-200 last:hidden" />
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-primary-600 font-semibold mb-2">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you achieve your financial goals
            </p>
            <Link
              to="/book-appointment"
              className="btn bg-white text-primary-600 hover:bg-primary-50"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
