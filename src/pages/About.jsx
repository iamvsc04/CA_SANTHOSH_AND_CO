import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const About = () => {
  const founder = {
    name: "Veerlapati Santhosh",
    title: "Founder & Chartered Accountant",
    image: "https://picsum.photos/seed/santhosh-profile/400/400",
    bio: "Veerlapati Santhosh is a highly experienced Chartered Accountant and the visionary founder of V Santhosh & Associates. With a profound understanding of taxation, auditing, and corporate finance, he leads the firm with a commitment to integrity and client success. His expertise spans across various industries, providing strategic financial advice that helps businesses thrive and individuals achieve their financial goals. Santhosh is known for his meticulous approach, proactive problem-solving, and dedication to staying abreast of the latest regulatory changes, ensuring clients always receive the most accurate and beneficial guidance.",
  };

  return (
    <>
      <SEO
        title="About Us - E V & Associates, Chartered Accountants"
        description="Learn about E V & Associates, a leading CA firm in Nalgonda providing expert financial solutions, tax, audit, and compliance services. Discover our mission, values, and experienced founder."
        keywords="about CA firm, V Santhosh & Associates, Chartered Accountant Nalgonda, financial experts, tax consultants, audit firm, business advisory"
        canonicalUrl="https://evassociates.in/about"
        ogImage="https://picsum.photos/seed/about-us-page/1024/576"
      />
      <div className="py-16 bg-[#F2F3EB]">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-[#474544] tracking-wider uppercase mb-4"
            >
              About E V & Associates
            </motion.h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#474544]/80 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Established with a vision to provide exceptional financial and
              advisory services, E V & Associates is a leading Chartered
              Accountant firm dedicated to serving individuals and businesses.
              Our founder brings extensive experience in various domains,
              including taxation, auditing, and regulatory compliance.
            </motion.p>
          </div>

          {/* Mission and Values Section */}
          <section className="py-16 md:py-24 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 mb-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#474544] mb-8 leading-tight">
                Our Mission & Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold text-[#474544] mb-4">
                    Our Mission
                  </h3>
                  <p className="text-[#474544]/80 text-lg leading-relaxed">
                    To empower our clients with comprehensive financial
                    expertise and strategic advice, enabling them to achieve
                    sustainable growth and financial well-being. We are
                    committed to delivering excellence, fostering trust, and
                    building lasting relationships through personalized service.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold text-[#474544] mb-4">
                    Our Values
                  </h3>
                  <ul className="space-y-3 text-[#474544]/80 text-lg leading-relaxed list-disc list-inside">
                    <li>
                      <span className="font-semibold">Integrity:</span>{" "}
                      Upholding the highest ethical standards in all our
                      dealings.
                    </li>
                    <li>
                      <span className="font-semibold">Excellence:</span>{" "}
                      Striving for superior quality and continuous improvement
                      in our services.
                    </li>
                    <li>
                      <span className="font-semibold">Client-Centricity:</span>{" "}
                      Prioritizing client needs and delivering tailored
                      solutions.
                    </li>
                    <li>
                      <span className="font-semibold">Innovation:</span>{" "}
                      Embracing new technologies and approaches to provide
                      efficient solutions.
                    </li>
                    <li>
                      <span className="font-semibold">Accountability:</span>{" "}
                      Taking responsibility for our actions and commitments.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#474544] mb-8 leading-tight">
                Our Founder
              </h2>
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10 flex flex-col md:flex-row items-center gap-8"
                >
                  {/* <div className="flex-shrink-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-[#D3AF37]"
                    />
                  </div> */}
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-[#474544] mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-lg text-[#474544]/70 mb-4">
                      {founder.title}
                    </p>
                    <p className="text-[#474544]/80 text-lg leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
              <h3 className="text-2xl font-semibold text-[#474544] mb-4">
                Ready to Partner with Us?
              </h3>
              <p className="text-[#474544]/80 mb-6">
                Contact us today to discuss your financial needs and how we can
                help you achieve your goals.
              </p>
              <Link
                to="/book-appointment"
                className="inline-block px-8 py-3 bg-[#474544] text-white rounded-lg hover:bg-[#474544]/90 transition-colors duration-300 uppercase tracking-wider text-sm font-semibold"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
