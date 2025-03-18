
import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import { Apple, Utensils, Scale } from 'lucide-react';

const featureImages = [
  'https://images.unsplash.com/photo-1542838132-92c53300491e',
  'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061'
];

const Features = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState([0, 0, 0]);
  
  useEffect(() => {
    const intervals = featureImages.map((_, index) => {
      return setInterval(() => {
        setCurrentImageIndexes(prev => {
          const newIndexes = [...prev];
          newIndexes[index] = (prev[index] + 1) % featureImages.length;
          return newIndexes;
        });
      }, 4000 + (index * 1000)); // Staggered timing for each slideshow
    });
    
    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Smart Recipe Generation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Flavors tailored to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Pantry Prodigy"
            description="Generate delicious recipes using ingredients you already have at home. No more wasted food or unnecessary shopping trips."
            icon={<Apple className="text-cookblue-500" size={20} />}
            link="/pantry-prodigy"
            imageSrc={featureImages[currentImageIndexes[0]]}
          />
          <FeatureCard
            title="Plate Prodigy"
            description="Discover recipes that match your taste preferences and dietary requirements. From vegan to keto, we've got you covered."
            icon={<Utensils className="text-cookblue-500" size={20} />}
            link="/plate-prodigy"
            imageSrc={featureImages[currentImageIndexes[1]]}
          />
          <FeatureCard
            title="Nutrient Prodigy"
            description="Meet your macronutrient goals with recipes optimized for your dietary needs. Perfect for fitness enthusiasts and health-conscious cooks."
            icon={<Scale className="text-cookblue-500" size={20} />}
            link="/nutrient-prodigy"
            imageSrc={featureImages[currentImageIndexes[2]]}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
