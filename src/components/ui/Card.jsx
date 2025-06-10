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
        scale: 1.05,
        rotateY: 8,
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      } : {}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 15,
        mass: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card; 