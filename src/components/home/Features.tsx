
import React from 'react';
import FeatureCard from './FeatureCard';
import { Apple, Utensils, Scale } from 'lucide-react';

const Features = () => {
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
            imageSrc="https://images.unsplash.com/photo-1542838132-92c53300491e"
            buttonText="Explore Pantry"
          />
          <FeatureCard
            title="Plate Prodigy"
            description="Discover recipes that match your taste preferences and dietary requirements. From vegan to keto, we've got you covered."
            icon={<Utensils className="text-cookblue-500" size={20} />}
            link="/plate-prodigy"
            imageSrc="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2"
            buttonText="Explore Plate"
          />
          <FeatureCard
            title="Nutrient Prodigy"
            description="Meet your macronutrient goals with recipes optimized for your dietary needs. Perfect for fitness enthusiasts and health-conscious cooks."
            icon={<Scale className="text-cookblue-500" size={20} />}
            link="/nutrient-prodigy"
            imageSrc="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            buttonText="Explore Nutrient"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
