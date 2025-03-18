
import React from 'react';
import { Brain, Database, Sparkles, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AIModels = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Advanced AI Recipe Generation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our cutting-edge AI models provide personalized recipe recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="rounded-full bg-cookblue-100 dark:bg-cookblue-900/30 p-3 mr-4">
                  <Brain size={24} className="text-cookblue-600 dark:text-cookblue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Collaborative Filtering</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our collaborative filtering algorithm analyzes user preferences and behavior patterns to recommend recipes 
                    that similar users have enjoyed. This creates a personalized experience that improves over time.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      Implemented with TensorFlow and Matrix Factorization techniques
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="rounded-full bg-cookblue-100 dark:bg-cookblue-900/30 p-3 mr-4">
                  <Database size={24} className="text-cookblue-600 dark:text-cookblue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Random Forest Model</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our random forest algorithm classifies and predicts the best recipes based on your available ingredients, 
                    dietary preferences, and cooking time constraints with high accuracy.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      Trained on over 10,000 Indian and international recipes
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="rounded-full bg-cookblue-100 dark:bg-cookblue-900/30 p-3 mr-4">
                  <Sparkles size={24} className="text-cookblue-600 dark:text-cookblue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">NLP for Indian Recipes</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our natural language processing models are specially trained on Indian cuisine, understanding regional 
                    ingredients, cooking techniques, and flavor profiles from across the subcontinent.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      Supports 8 regional Indian cuisines and dialects
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="rounded-full bg-cookblue-100 dark:bg-cookblue-900/30 p-3 mr-4">
                  <Lightbulb size={24} className="text-cookblue-600 dark:text-cookblue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ingredient Substitution AI</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our smart substitution system suggests alternative ingredients based on flavor profiles, 
                    nutritional content, and availability. It's especially useful for adapting international recipes 
                    to use locally available Indian ingredients.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      Database includes 500+ Indian ingredient alternatives
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIModels;
