import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  AnimatedSection,
  AnimatedElement,
  AnimatedHeading,
  AnimatedText,
  DecorativeBackground,
  Button,
  Card,
} from "../components/ui";
import heroImage from "../assets/bg ca.jpg";

const features = [
  {
    name: "Tax Planning",
    description:
      "Strategic tax planning to optimize your financial position and maximize savings.",
    icon: ChartBarIcon,
  },
  {
    name: "Business Advisory",
    description:
      "Expert guidance for business growth, compliance, and financial management.",
    icon: DocumentTextIcon,
  },
  {
    name: "Client Success",
    description:
      "Dedicated support and personalized solutions for all your financial needs.",
    icon: UserGroupIcon,
  },
];

const stats = [
  { id: 1, name: "Years of Experience", value: "4+" },
  { id: 2, name: "Happy Clients", value: "2000+" },
  { id: 3, name: "Services Offered", value: "6+" },
  { id: 4, name: "Success Rate", value: "100%" },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>CA Veerlapati Santhosh | Chartered Accountant in Nalgonda</title>
        <meta
          name="description"
          content="Professional accounting and tax services in Nalgonda. Expert solutions for individuals and businesses."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="CA Office Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Your Trusted Financial Partner
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Expert accounting and tax services tailored to your needs. Let's
                build your financial success together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment" className="btn btn-primary">
                  Book a Consultation
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Why Choose CA Veerlapati Santhosh?
              </h2>
              <ul className="space-y-3 text-primary-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                  Expert guidance in tax planning and compliance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                  Comprehensive business advisory services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                  Personalized solutions for your financial needs
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-600">{stat.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary-50 relative">
        <DecorativeBackground />
        <div className="container relative z-10">
          <AnimatedHeading className="text-center mb-12">
            Why Choose Us?
          </AnimatedHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedElement
                key={feature.name}
                delay={index * 0.2}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-primary-600 mb-6" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.name}
                </h3>
                <p className="text-secondary-600">{feature.description}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedHeading className="text-white mb-6">
              Ready to Get Started?
            </AnimatedHeading>
            <AnimatedText className="text-primary-100 mb-8">
              Schedule a consultation today and take the first step towards
              financial success.
            </AnimatedText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/book-appointment"
                className="inline-flex items-center btn bg-white text-primary-600 hover:bg-primary-50"
              >
                Book Your Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
