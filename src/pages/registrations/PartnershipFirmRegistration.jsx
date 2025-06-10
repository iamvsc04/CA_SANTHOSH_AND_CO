import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const PartnershipFirmRegistration = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-16 bg-[#F2F3EB]">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#474544] tracking-wider uppercase mb-4"
          >
            Proprietorship Firm Registration
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[#474544]/80 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Start your business journey with a legally recognized proprietorship firm. We guide you through every step of the registration process, ensuring compliance with all regulatory requirements.
          </motion.p>
        </motion.div>

        {/* Checklist Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-sm border border-[#474544]/10 hover:shadow-md transition-shadow duration-300"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-[#474544] text-center tracking-widest uppercase mb-4"
            >
              • Required Documents Checklist •
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-12"
            />

            <motion.div 
              variants={containerVariants}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((num) => (
                    <motion.div
                      key={num}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(71, 69, 68, 0.05)" }}
                      className="flex items-start space-x-3 p-4 rounded-lg transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#474544] flex items-center justify-center">
                        <span className="text-[#474544] font-semibold">{num}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#474544]">{
                          num === 1 ? "Firm Name" :
                          num === 2 ? "Firm Objectives" :
                          num === 3 ? "Proprietor Photo" :
                          "Proprietor ID Proof"
                        }</h3>
                        <p className="text-[#474544]/70 text-sm">{
                          num === 1 ? "Proposed name of the proprietorship firm" :
                          num === 2 ? "Business objectives and activities" :
                          num === 3 ? "Passport size photo of the proprietor" :
                          "PAN Card of the proprietor"
                        }</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  {[5, 6, 7].map((num) => (
                    <motion.div
                      key={num}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(71, 69, 68, 0.05)" }}
                      className="flex items-start space-x-3 p-4 rounded-lg transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#474544] flex items-center justify-center">
                        <span className="text-[#474544] font-semibold">{num}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#474544]">{
                          num === 5 ? "Address Proof" :
                          num === 6 ? "Utility Bill" :
                          "Rental Agreement"
                        }</h3>
                        <p className="text-[#474544]/70 text-sm">{
                          num === 5 ? "AADHAR Card of the proprietor" :
                          num === 6 ? "Recent electricity bill of firm address" :
                          "If the premises is rented"
                        }</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                variants={itemVariants}
                className="mt-8 p-4 bg-[#474544]/5 rounded-lg hover:bg-[#474544]/10 transition-colors duration-300"
              >
                <p className="text-[#474544] text-sm text-center">
                  Note: All documents should be clear, legible, and up-to-date. Additional documents may be required based on specific circumstances.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-12 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10">
            <h3 className="text-2xl font-semibold text-[#474544] mb-4">
              Have Questions?
            </h3>
            <p className="text-[#474544]/80 mb-6">
              Our team is here to help you with any queries about the registration process.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-[#474544] text-white rounded-lg hover:bg-[#474544]/90 transition-colors duration-300 uppercase tracking-wider text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnershipFirmRegistration; 