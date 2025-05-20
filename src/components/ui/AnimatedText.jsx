import { motion } from 'framer-motion';

const AnimatedText = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`text-gray-600 leading-relaxed ${className}`}
    >
      {children}
    </motion.p>
  );
};

export default AnimatedText; 