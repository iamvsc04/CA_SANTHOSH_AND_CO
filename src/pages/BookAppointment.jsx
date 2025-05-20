import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { AnimatedSection, AnimatedHeading, AnimatedText, Button, DecorativeBackground } from '../components/ui';
import { UserIcon, EnvelopeIcon, PhoneIcon, CalendarIcon, ClockIcon, TagIcon, PencilIcon } from '@heroicons/react/24/outline';
import { EMAILJS_CONFIG } from '../config/emailjs';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

const services = [
  {
    id: 'tax',
    name: 'Income Tax Filing',
    duration: 60
  },
  {
    id: 'gst',
    name: 'GST Services',
    duration: 45
  },
  {
    id: 'company',
    name: 'Company Formation',
    duration: 90
  },
  {
    id: 'bookkeeping',
    name: 'Bookkeeping',
    duration: 45
  },
  {
    id: 'audit',
    name: 'Audit & Assurance',
    duration: 60
  },
  {
    id: 'consultation',
    name: 'General Consultation',
    duration: 30
  }
];

export default function BookAppointment() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { register, handleSubmit, reset, formState: { errors }, setError } = useForm();

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  
  // Get maximum date (3 months from today)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const onSubmit = async (data) => {
    if (!selectedDate) {
      setError('date', { type: 'required', message: 'Please select a date' });
      return;
    }
    if (!selectedTime) {
      setError('time', { type: 'required', message: 'Please select a time slot' });
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        date: selectedDate,
        time: selectedTime,
        message: data.message || 'No additional notes provided',
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.APPOINTMENT_TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS Response:', response);
      
      if (response.status === 200) {
        setSubmitSuccess(true);
        reset();
        setSelectedDate('');
        setSelectedTime('');
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Detailed error:', error);
      setSubmitError(`Failed to book appointment: ${error.message || 'Please try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment | CA Veerlapati Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Schedule a consultation with CA Veerlapati Santhosh for expert financial and tax advice in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 mx-auto px-4 flex flex-col items-center justify-center">
          <AnimatedHeading className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Book Your Consultation
          </AnimatedHeading>
          <AnimatedText className="max-w-3xl text-xl text-secondary-600">
            Schedule a convenient time to discuss your financial needs.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">Appointment Details</h3>
            
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-800 text-center"
              >
                <h4 className="text-lg font-semibold mb-2">Appointment Booked Successfully!</h4>
                <p>Thank you for booking an appointment. We will confirm the details shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
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

                    {/* Phone Input */}
                    <motion.div whileHover={{ scale: 1.01 }} className="relative">
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PhoneIcon className="h-5 w-5 text-primary-500" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone', { required: true })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white"
                          placeholder="Your Phone Number"
                        />
                      </div>
                      {errors.phone && <span className="mt-1 text-sm text-red-600">Phone number is required</span>}
                    </motion.div>

                    {/* Service Select */}
                    <motion.div whileHover={{ scale: 1.01 }} className="relative">
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">Service of Interest</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <TagIcon className="h-5 w-5 text-primary-500" />
                        </div>
                        <select
                          id="service"
                          {...register('service', { required: true })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 appearance-none text-gray-900 bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service.id} value={service.id}>{service.name}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                      {errors.service && <span className="mt-1 text-sm text-red-600">Service selection is required</span>}
                    </motion.div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Date Input */}
                    <motion.div whileHover={{ scale: 1.01 }} className="relative">
                      <label htmlFor="date" className="block text-sm font-medium text-secondary-700 mb-2">Preferred Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CalendarIcon className="h-5 w-5 text-primary-500" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          min={today}
                          max={maxDateStr}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 bg-white"
                        />
                      </div>
                      {errors.date && <span className="mt-1 text-sm text-red-600">{errors.date.message}</span>}
                    </motion.div>

                    {/* Time Input */}
                    <motion.div whileHover={{ scale: 1.01 }} className="relative">
                      <label htmlFor="time" className="block text-sm font-medium text-secondary-700 mb-2">Preferred Time</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <ClockIcon className="h-5 w-5 text-primary-500" />
                        </div>
                        <select
                          id="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 appearance-none text-gray-900 bg-white"
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                      {errors.time && <span className="mt-1 text-sm text-red-600">{errors.time.message}</span>}
                    </motion.div>

                    {/* Notes Textarea */}
                    <motion.div whileHover={{ scale: 1.01 }} className="relative">
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">Additional Notes</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none align-top mt-3">
                          <PencilIcon className="h-5 w-5 text-primary-500" />
                        </div>
                        <textarea
                          id="message"
                          rows="4"
                          {...register('message')}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-white"
                          placeholder="Any additional notes?"
                        ></textarea>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800 text-center">
                    {submitError}
                  </div>
                )}

                <div className="mt-8">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    disabled={isSubmitting} 
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    {isSubmitting ? 'Booking...' : 'Book Now'}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}