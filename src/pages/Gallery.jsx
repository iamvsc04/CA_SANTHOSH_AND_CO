import { Helmet } from 'react-helmet-async';
import { AnimatedSection, AnimatedHeading, AnimatedText, Card, DecorativeBackground } from '../components/ui';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const galleryCategories = [
  {
    id: 'office',
    title: 'Office',
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Modern office reception',
        description: 'Our welcoming reception area'
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Conference room',
        description: 'State-of-the-art conference room'
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Work area',
        description: 'Comfortable work environment'
      }
    ]
  },
  {
    id: 'team',
    title: 'Team',
    images: [
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Team meeting',
        description: 'Our dedicated team in action'
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Team collaboration',
        description: 'Collaborative work environment'
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Professional team',
        description: 'Our expert team members'
      }
    ]
  },
  {
    id: 'events',
    title: 'Events',
    images: [
      {
        id: 7,
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Client meeting',
        description: 'Client consultation session'
      },
      {
        id: 8,
        src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Training session',
        description: 'Team training workshop'
      },
      {
        id: 9,
        src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Networking event',
        description: 'Business networking event'
      }
    ]
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('office');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Gallery | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="View the gallery showcasing our office and team at CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Our Gallery
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            A glimpse into our office and team.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container">
          {galleryCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryCategories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: category.id * 0.1 }}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={category.images[0].src}
                    alt={category.images[0].alt}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <AnimatedText className="text-center">No gallery images available yet.</AnimatedText>
          )}
        </div>
      </AnimatedSection>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </>
  );
} 