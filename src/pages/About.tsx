
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About CookAI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Revolutionizing the way you cook with AI-powered recipes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 h-full">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="mb-4">
                  CookAI was born from a simple problem: standing in front of an open refrigerator, wondering what to cook with the available ingredients.
                </p>
                <p className="mb-4">
                  We created CookAI to solve this universal challenge by leveraging the power of artificial intelligence to transform how people approach cooking at home.
                </p>
                <p>
                  Our platform intelligently analyzes your available ingredients, dietary preferences, and nutritional goals to recommend the perfect recipes, complete with voice instructions in multiple languages.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 h-full">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-4">
                  At CookAI, we believe that cooking should be accessible, enjoyable, and personalized for everyone, regardless of skill level or dietary restrictions.
                </p>
                <p className="mb-4">
                  Our mission is to reduce food waste, encourage healthy eating habits, and make cooking an enjoyable experience by providing smart, personalized recipe recommendations.
                </p>
                <p>
                  By combining cutting-edge AI technology with a passion for good food, we're creating a platform that adapts to your needs and preferences, making every meal an opportunity to enjoy cooking.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold mb-4 text-center">Our Technology</h2>
                <p className="mb-4">
                  CookAI uses advanced machine learning algorithms, including collaborative filtering and random forest models, to analyze thousands of recipes and user preferences.
                </p>
                <p className="mb-4">
                  Our system intelligently matches ingredients, suggests substitutions, and optimizes recipes to meet your specific requirements, whether you're cooking with limited ingredients, following a special diet, or targeting specific macronutrient goals.
                </p>
                <p>
                  With our multilingual voice integration feature, you can follow recipe instructions hands-free in both Tamil and English, making cooking more convenient and accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
