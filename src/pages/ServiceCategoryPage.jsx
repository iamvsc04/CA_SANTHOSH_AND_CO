import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../components/layout/Navbar';
import { serviceImages } from '../data/serviceImages';

const ServiceCategoryPage = () => {
  const { categoryName } = useParams();
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const formattedCategoryName = categoryName.replace(/\-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setCurrentCategory(servicesData[formattedCategoryName]);
  }, [categoryName]);

  if (!currentCategory) {
    return <div className="flex justify-center items-center h-screen text-xl font-semibold">Service category not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold text-primary-800 mb-8">{categoryName.replace(/\-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCategory.map((subService) => (
          <div key={subService.name} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden rounded-t-lg">
              <img
                src={serviceImages[subService.name] || '/src/assets/images/services/default-service.webp'}
                alt={`${subService.name} Image`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/src/assets/images/services/default-service.webp';
                }}
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {subService.name}
              </h2>
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4">{subService.description}</p>
              <Link
                to={subService.href}
                className="inline-block bg-primary-600 text-white text-xs font-medium px-5 py-2 rounded-md hover:bg-primary-700 transition-colors"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategoryPage; 