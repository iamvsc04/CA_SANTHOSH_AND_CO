import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, link, category, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#474544]/10 overflow-hidden hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/src/assets/images/services/default-service.webp';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <span className="text-sm text-white/80">{category}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[#474544]/80 mb-4 line-clamp-3">{description}</p>
        <Link
          to={link}
          className="inline-block px-6 py-2 bg-[#474544] text-white rounded-lg hover:bg-[#474544]/90 transition-colors duration-300 uppercase tracking-wider text-sm font-semibold"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 