import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '',
  onClick,
  hover = true
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}
      whileHover={hover ? {
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card; 