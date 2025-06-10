import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import AnimatedHeading from '../components/ui/AnimatedHeading';
import AnimatedText from '../components/ui/AnimatedText';
import { EMAILJS_CONFIG } from '../config/emailjs';
import SEO from '../components/SEO';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS Response:', response);
      
      if (response.status === 200) {
        setSubmitSuccess(true);
        reset();
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Detailed error:', error);
      setSubmitError(`Failed to send message: ${error.message || 'Please try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with V Santhosh & Associates"
        description="Reach out to V Santhosh & Associates for expert financial advice, tax consultation, audit services, and business solutions. Contact us via phone, email, or our online form."
        keywords="contact CA firm, financial advice, tax consultation, audit services, business solutions, Nalgonda CA, contact V Santhosh & Associates"
        canonicalUrl="https://yourdomain.com/contact"
        ogImage="https://picsum.photos/seed/contact-us/1024/576"
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
              Contact Us
            </motion.h1>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#474544] to-transparent mx-auto mb-8 w-20" />
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#474544]/80 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              We'd love to hear from you! Whether you have a question, a project, or just want to chat, our team is ready to assist.
            </motion.p>
        </div>

          {/* Contact Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#474544]/10"
            >
              <div className="w-12 h-12 bg-[#474544]/10 rounded-lg flex items-center justify-center mb-4">
                <PhoneIcon className="w-6 h-6 text-[#474544]" />
                    </div>
              <h3 className="text-xl font-semibold text-[#474544] mb-2">Phone</h3>
              <p className="text-[#474544]/80">+91 79894 88080</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#474544]/10"
            >
              <div className="w-12 h-12 bg-[#474544]/10 rounded-lg flex items-center justify-center mb-4">
                <EnvelopeIcon className="w-6 h-6 text-[#474544]" />
              </div>
              <h3 className="text-xl font-semibold text-[#474544] mb-2">Email</h3>
              <p className="text-[#474544]/80">casanthosh211@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#474544]/10"
            >
              <div className="w-12 h-12 bg-[#474544]/10 rounded-lg flex items-center justify-center mb-4">
                <MapPinIcon className="w-6 h-6 text-[#474544]" />
              </div>
              <h3 className="text-xl font-semibold text-[#474544] mb-2">Location</h3>
              <p className="text-[#474544]/80">1082/1, Ramagiri Rd, opposite RDO office, near Clock Tower Road, Savarkar Nagar, Nalgonda, Telangana 508001</p>
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="border-3 border-[#474544] rounded-lg p-8 md:p-12 bg-white/80 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-[#474544] text-center tracking-widest uppercase mb-4">
                • Send us a Message •
              </h2>
              <div className="w-20 h-0.5 bg-[#474544] mx-auto mb-12"></div>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-800 text-center"
                >
                  <h4 className="text-lg font-semibold mb-2">Message Sent Successfully!</h4>
                  <p>Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        {...register('name', { required: true })}
                        placeholder="My name is"
                        className="w-full bg-transparent border-b-2 border-[#474544] text-[#474544] py-2 focus:outline-none focus:border-[#474544] placeholder-[#474544] uppercase tracking-wider"
                      />
                      {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                    </div>

                    <div>
                      <input
                        type="email"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        placeholder="My e-mail is"
                        className="w-full bg-transparent border-b-2 border-[#474544] text-[#474544] py-2 focus:outline-none focus:border-[#474544] placeholder-[#474544] uppercase tracking-wider"
                      />
                      {errors.email && <span className="text-red-600 text-sm">Valid email is required</span>}
                    </div>
                      </div>

                  <div>
                      <input
                        type="text"
                        {...register('subject', { required: true })}
                        placeholder="Subject"
                      className="w-full bg-transparent border-b-2 border-[#474544] text-[#474544] py-2 focus:outline-none focus:border-[#474544] placeholder-[#474544] uppercase tracking-wider"
                      />
                    {errors.subject && <span className="text-red-600 text-sm">Subject is required</span>}
                    </div>

                  <div>
                      <textarea
                        {...register('message', { required: true })}
                      placeholder="I'd like to chat about"
                      rows="5"
                      className="w-full bg-transparent border-b-2 border-[#474544] text-[#474544] py-2 focus:outline-none focus:border-[#474544] placeholder-[#474544] uppercase tracking-wider resize-none"
                      ></textarea>
                    {errors.message && <span className="text-red-600 text-sm">Message is required</span>}
                    </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-center">
                      {submitError}
                    </div>
                  )}

                  <div className="text-center">
                    <button
                      type="submit" 
                      disabled={isSubmitting} 
                      className="inline-block border-2 border-[#474544] text-white font-bold py-4 px-8 uppercase tracking-wider hover:bg-[#474544] hover:text-[#F2F3EB] transition-all duration-300"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#474544]/10"
          >
            <h2 className="text-2xl font-bold text-[#474544] mb-6 text-center">Find Us on Map</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7628.380221077051!2d79.26220431326864!3d17.063351084807607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb291bf8db7fa9%3A0xe219d5b27afe1efd!2sV%20Santhosh%20and%20Associates!5e0!3m2!1sen!2sin!4v1749571252826!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="V Santhosh & Associates Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact; 