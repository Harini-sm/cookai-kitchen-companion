
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const foodImages = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', // Healthy colorful meal
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1', // Indian food
  'https://images.unsplash.com/photo-1625807774813-d3b94b9de4e8', // South Indian Dosa
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', // Pizza
  'https://images.unsplash.com/photo-1588866312499-7f7f536e6dc2'  // Indian thali
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % foodImages.length);
        setIsTransitioning(false);
      }, 1000); // Transition time
      
    }, 7000); // Image change interval

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${foodImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isTransitioning ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 7s ease-out, opacity 1s ease-in-out',
        }}
      />

      {/* Next Image (Preloaded) */}
      <div
        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${foodImages[nextImageIndex]})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          transform: isTransitioning ? 'scale(1)' : 'scale(1.05)',
          transition: 'transform 7s ease-out, opacity 1s ease-in-out',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          The Smart Way to Find Recipes!
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover delicious meals based on your ingredients, preferences, and nutritional goals.
        </p>
        <Button 
          className="bg-cookblue-500 hover:bg-cookblue-600 text-white text-lg px-8 py-6 rounded-full shadow-lg animate-fade-in"
          style={{ animationDelay: '0.4s' }}
          onClick={() => navigate('/pantry-prodigy')}
        >
          Generate Your Recipe Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
