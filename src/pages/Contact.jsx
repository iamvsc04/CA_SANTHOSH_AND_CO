import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { AnimatedSection, AnimatedHeading, AnimatedText, Button, DecorativeBackground } from '../components/ui';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, UserIcon, DocumentTextIcon, PencilIcon } from '@heroicons/react/24/outline';
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

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
      <Helmet>
        <title>Contact Us | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Get in touch with CA VEERLAPATI Santhosh for professional accounting, tax, and business advisory services in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 mx-auto px-4 flex flex-col items-center justify-center">
          <AnimatedHeading className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Get in Touch
          </AnimatedHeading>
          <AnimatedText className="max-w-3xl text-xl text-secondary-600">
            Have questions or need assistance? Contact us today.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary-50 transition-colors">
                    <div className="flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-secondary-900">Email</h4>
                      <p className="text-secondary-600">casanthosh211@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary-50 transition-colors">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-secondary-900">Phone</h4>
                      <p className="text-secondary-600">+91 79894 88080</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary-50 transition-colors">
                    <div className="flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-secondary-900">Address</h4>
                      <p className="text-secondary-600">1082/1, Ramagiri Rd, opposite RDO office, near Clock Tower Road, Savarkar Nagar, Nalgonda, Telangana 508001</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">Send us a Message</h3>
              
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
                  {/* Name Input */}
                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon className="h-5 w-5 text-primary-500" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white"
                        placeholder="Your Name"
                      />
                    </div>
                    {errors.name && <span className="mt-1 text-sm text-red-600">Name is required</span>}
                  </motion.div>

                  {/* Email Input */}
                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <EnvelopeIcon className="h-5 w-5 text-primary-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white"
                        placeholder="Your Email"
                      />
                    </div>
                    {errors.email && <span className="mt-1 text-sm text-red-600">Valid email is required</span>}
                  </motion.div>

                  {/* Subject Input */}
                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">Subject</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DocumentTextIcon className="h-5 w-5 text-primary-500" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        {...register('subject', { required: true })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white"
                        placeholder="Subject"
                      />
                    </div>
                    {errors.subject && <span className="mt-1 text-sm text-red-600">Subject is required</span>}
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">Message</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none align-top mt-3">
                        <PencilIcon className="h-5 w-5 text-primary-500" />
                      </div>
                      <textarea
                        id="message"
                        rows="4"
                        {...register('message', { required: true })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    {errors.message && <span className="mt-1 text-sm text-red-600">Message is required</span>}
                  </motion.div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800 text-center">
                      {submitError}
                    </div>
                  )}

                  <div>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      disabled={isSubmitting} 
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 