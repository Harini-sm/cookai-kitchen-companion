
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import RecipeForm from '@/components/recipe/RecipeForm';
import RecipeDisplay from '@/components/recipe/RecipeDisplay';
import { Scale } from 'lucide-react';

// Example recipe data (normally would come from an API)
const sampleRecipe = {
  title: "High-Protein Chicken & Quinoa Bowl",
  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  ingredients: [
    { name: "Chicken breast", amount: "200g" },
    { name: "Quinoa", amount: "100g" },
    { name: "Broccoli", amount: "150g", substitutes: ["Cauliflower", "Brussels sprouts"] },
    { name: "Sweet potato", amount: "100g", substitutes: ["Butternut squash"] },
    { name: "Olive oil", amount: "1 tbsp" },
    { name: "Lemon", amount: "1/2" },
    { name: "Garlic", amount: "2 cloves" },
    { name: "Fresh rosemary", amount: "1 sprig", substitutes: ["Dried rosemary (1 tsp)"] },
    { name: "Salt & pepper", amount: "to taste" },
  ],
  steps: [
    { instruction: "Preheat oven to 200°C (400°F). Line a baking sheet with parchment paper.", time: "2 minutes" },
    { instruction: "Cube sweet potato into 1-inch pieces. Toss with 1/2 tbsp olive oil, salt, and pepper. Arrange on one side of the baking sheet.", time: "3 minutes" },
    { instruction: "Cut broccoli into florets. Toss with remaining olive oil, salt, and pepper. Arrange on the other side of the baking sheet.", time: "2 minutes" },
    { instruction: "Roast vegetables in preheated oven until tender and lightly browned.", time: "20-25 minutes" },
    { instruction: "Meanwhile, rinse quinoa under cold water. In a medium saucepan, combine quinoa with 2 cups of water. Bring to a boil, then reduce heat to low, cover, and simmer until water is absorbed.", time: "15 minutes" },
    { instruction: "Season chicken breast with salt, pepper, and minced garlic. Place rosemary sprig on top.", time: "2 minutes" },
    { instruction: "Heat a skillet over medium-high heat. Cook chicken until golden brown on both sides and cooked through.", time: "6-8 minutes per side" },
    { instruction: "Slice chicken and arrange in a bowl with quinoa and roasted vegetables. Squeeze fresh lemon juice over everything before serving.", time: "3 minutes" },
  ],
  cookingTime: "45 minutes",
  servings: 2,
  calories: 520,
  macros: {
    carbs: 50,
    protein: 40,
    fat: 15,
  },
};

const NutrientProdigy = () => {
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateRecipe = (formData: any) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setRecipe(sampleRecipe);
      setLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-cookblue-100 dark:bg-cookblue-900/30 rounded-full mb-4">
              <Scale size={24} className="text-cookblue-600 dark:text-cookblue-400" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Nutrient Prodigy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your Personalized Macronutrient Guide!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {!recipe ? (
              <>
                <RecipeForm type="nutrient" onGenerateRecipe={handleGenerateRecipe} />
                
                {loading && (
                  <div className="mt-8 text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Generating your recipe...</p>
                  </div>
                )}
              </>
            ) : (
              <div className="mt-8">
                <RecipeDisplay {...recipe} />
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => setRecipe(null)} 
                    className="text-cookblue-600 hover:text-cookblue-700 underline"
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NutrientProdigy;
