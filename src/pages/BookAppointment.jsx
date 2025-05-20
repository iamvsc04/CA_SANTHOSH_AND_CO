import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

      {/* Redesigned Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-800 via-purple-800 to-purple-900 text-white">
        {/* Background gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/90 via-purple-800/90 to-purple-900/90 z-0"></div>

        {/* Floating elements container - Add more elements and animations */}
        <div className="absolute inset-0 z-10">
          {/* Example bubbles - more to be added */}
          <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full top-[10%] left-[15%] animate-float-1"></div>
          <div className="absolute w-12 h-12 bg-white opacity-10 rounded-full bottom-[20%] right-[10%] animate-float-2"></div>
           <div className="absolute w-16 h-16 bg-white opacity-10 rounded-full top-[50%] left-[80%] animate-float-3"></div>
            <div className="absolute w-14 h-14 bg-white opacity-10 rounded-full bottom-[10%] left-[40%] animate-float-4"></div>
             <div className="absolute w-18 h-18 bg-white opacity-10 rounded-full top-[30%] right-[20%] animate-float-5"></div>

          {/* Plus signs - add more as needed */}
           <div className="absolute text-white text-4xl opacity-10 top-[30%] left-[40%] animate-float-6">+</div>
           <div className="absolute text-white text-3xl opacity-10 bottom-[30%] left-[20%] animate-float-7">+</div>

          {/* Coin placeholders - will need proper icons/SVGs */}
           <div className="absolute text-yellow-400 text-3xl opacity-30 top-[20%] right-[30%] animate-float-8">$</div> {/* Placeholder coin */}
           <div className="absolute text-yellow-400 text-2xl opacity-30 bottom-[15%] right-[40%] animate-float-9">$</div> {/* Placeholder coin */}
        </div>

        {/* Content (Heading and Text) */}
        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <AnimatedHeading className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl text-white">
              Secure Your Expert Consultation
            </AnimatedHeading>
            <AnimatedText className="max-w-4xl mx-auto text-xl md:text-2xl opacity-95 drop-shadow-lg text-white">
              Take the first step towards clear financial guidance. Book your personalized appointment today.
            </AnimatedText>
          </motion.div>
        </div>
      </div>

      {/* Redesigned Form Section */}
      <div className="relative py-16 md:py-24 bg-gradient-to-br from-white to-gray-100">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 transform transition-all duration-500 hover:shadow-primary-300/50"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-10 text-center">Appointment Details</h3>

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 border border-green-400 rounded-xl p-8 text-green-800 text-center shadow-md"
              >
                <h4 className="text-xl font-semibold mb-3">Appointment Booked Successfully!</h4>
                <p className="text-lg">Thank you for booking an appointment. We have received your request and will get back to you shortly to confirm the details. You can close this window now.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Name Input */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-0 group"
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-primary-600 transition-colors">
                          <UserIcon className="h-6 w-6 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          {...register('name', { required: true })}
                          className="w-full pl-11 pr-4 py-3 border-b-2 border-gray-300 focus:border-primary-600 outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-transparent text-lg"
                          placeholder="Your Full Name"
                        />
                      </div>
                      {errors.name && <span className="mt-2 text-sm text-red-600 flex items-center"><ExclamationCircleIcon className="h-5 w-5 mr-1" /> Name is required</span>}
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative z-0 group"
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-primary-600 transition-colors">
                          <EnvelopeIcon className="h-6 w-6 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                          className="w-full pl-11 pr-4 py-3 border-b-2 border-gray-300 focus:border-primary-600 outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-transparent text-lg"
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && <span className="mt-2 text-sm text-red-600 flex items-center"><ExclamationCircleIcon className="h-5 w-5 mr-1" /> Valid email is required</span>}
                    </motion.div>

                    {/* Phone Input */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative z-0 group"
                    >
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-primary-600 transition-colors">
                          <PhoneIcon className="h-6 w-6 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })} // Example pattern for 10 digit phone number
                          className="w-full pl-11 pr-4 py-3 border-b-2 border-gray-300 focus:border-primary-600 outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-transparent text-lg"
                          placeholder="e.g., 9876543210"
                        />
                      </div>
                      {errors.phone && <span className="mt-2 text-sm text-red-600 flex items-center"><ExclamationCircleIcon className="h-5 w-5 mr-1" /> Valid phone number is required</span>}
                    </motion.div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Service Select */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative z-0 group"
                    >
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service of Interest</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-primary-600 transition-colors">
                          <TagIcon className="h-6 w-6 text-gray-400" />
                        </div>
                        <select
                          id="service"
                          {...register('service', { required: true })}
                          className="w-full pl-11 pr-4 py-3 border-b-2 border-gray-300 focus:border-primary-600 outline-none transition-colors duration-300 appearance-none text-gray-900 bg-transparent text-lg"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service.id} value={service.id}>{service.name}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                      {errors.service && <span className="mt-2 text-sm text-red-600 flex items-center"><ExclamationCircleIcon className="h-5 w-5 mr-1" /> Service selection is required</span>}
                    </motion.div>

                    {/* Date Input */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="relative z-0 group"
                    >
                      <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-primary-600 transition-colors">
                          <CalendarIcon className="h-6 w-6 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          {...register('date', { required: true })}
                          onChange={(e) => {
                            setSelectedDate(e.target.value);
                            if (errors.date) {
                              setError('date', { type: undefined, message: '' });
                            }
                          }}
                          min={today}
                          max={maxDateStr}
                          className="w-full pl-11 pr-4 py-3 border-b-2 border-gray-300 focus:border-primary-600 outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-transparent text-lg"
                        />
                      </div>
                      {errors.date && errors.date.type === 'required' && <span className="mt-2 text-sm text-red-600 flex items-center"><ExclamationCircleIcon className="h-5 w-5 mr-1" /> Date is required</span>}
                    </motion.div>

                    {/* Time Select */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="relative z-0 group"
                    >
                      <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time Slot</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-primary-600 transition-colors">
                          <ClockIcon className="h-6 w-6 text-gray-400" />
                        </div>
                        <select
                          id="time"
                          {...register('time', { required: true })}
                          onChange={(e) => {
                            setSelectedTime(e.target.value);
                            if (errors.time) {
                              setError('time', { type: undefined, message: '' });
                            }
                          }}
                          className="w-full pl-11 pr-4 py-3 border-b-2 border-gray-300 focus:border-primary-600 outline-none transition-colors duration-300 appearance-none text-gray-900 bg-transparent text-lg"
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                      {errors.time && errors.time.type === 'required' && <span className="mt-2 text-sm text-red-600 flex items-center"><ExclamationCircleIcon className="h-5 w-5 mr-1" /> Time slot is required</span>}
                    </motion.div>
                  </div>
                </div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="relative z-0 group md:col-span-2"
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes (Optional)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 top-3 left-0 pl-3 flex items-start pointer-events-none group-focus-within:text-primary-600 transition-colors">
                      <PencilIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      rows="5"
                      {...register('message')}
                      className="w-full pl-11 pr-4 py-3 border-b-2 border-gray-300 focus:border-primary-600 outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-transparent text-lg"
                      placeholder="Any specific questions or requirements?"
                    ></textarea>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-10 text-center"
                >
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-16 py-4 font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                  >
                    {isSubmitting ? 'Sending...' : 'Book Appointment'}
                  </Button>
                </motion.div>

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center text-red-600 text-base font-medium"
                  >
                    {submitError}
                  </motion.div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}