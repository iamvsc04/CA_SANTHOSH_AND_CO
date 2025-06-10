import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../components/layout/Navbar'; // Import servicesData

const SubServiceDetailPage = () => {
  const { categoryName, subServiceName } = useParams();
  const [subService, setSubService] = useState(null);

  useEffect(() => {
    const formattedCategoryName = categoryName.replace(/\-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const selectedCategory = servicesData[formattedCategoryName];

    if (selectedCategory) {
      const foundSubService = selectedCategory.find(
        (service) => service.href.endsWith(`/${subServiceName}`)
      );
      setSubService(foundSubService);
    }
  }, [categoryName, subServiceName]);

  if (!subService) {
    return <div className="flex justify-center items-center h-screen text-xl font-semibold">Sub-service not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold text-primary-800 mb-4">{subService.name}</h1>
      <p className="text-lg text-gray-700 mb-6">{subService.description}</p>
      {/* Add more detailed content here if available in servicesData or fetched from an API */}
      <Link 
        to={`/services/${categoryName}`}
        className="inline-block bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-300 transition-colors"
      >
        Back to {categoryName.replace(/\-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Services
      </Link>
    </div>
  );
};

export default SubServiceDetailPage; 