
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import RecipeForm from '@/components/recipe/RecipeForm';
import RecipeDisplay from '@/components/recipe/RecipeDisplay';
import { Apple } from 'lucide-react';

// Example recipe data (normally would come from an API)
const sampleRecipe = {
  title: "Garlic Butter Pasta with Herbs",
  image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
  ingredients: [
    { name: "Pasta", amount: "250g", substitutes: ["Rice", "Quinoa"] },
    { name: "Butter", amount: "60g", substitutes: ["Olive Oil", "Coconut Oil"] },
    { name: "Garlic", amount: "4 cloves" },
    { name: "Fresh herbs (parsley, basil)", amount: "1/4 cup" },
    { name: "Parmesan cheese", amount: "50g", substitutes: ["Nutritional Yeast"] },
    { name: "Salt & Black pepper", amount: "to taste" },
  ],
  steps: [
    { instruction: "Bring a large pot of salted water to a boil. Add pasta and cook according to package instructions until al dente.", time: "8-10 minutes" },
    { instruction: "Meanwhile, in a large skillet, melt butter over medium heat. Add minced garlic and sauté until fragrant, but not browned.", time: "1-2 minutes" },
    { instruction: "Reserve 1/2 cup of pasta water, then drain the pasta.", time: "30 seconds" },
    { instruction: "Add the drained pasta to the skillet with the garlic butter. Toss to coat, adding reserved pasta water as needed to create a silky sauce.", time: "1 minute" },
    { instruction: "Remove from heat. Add chopped fresh herbs and grated parmesan. Season with salt and freshly ground black pepper to taste.", time: "1 minute" },
    { instruction: "Serve immediately with extra parmesan cheese if desired.", time: "Immediately" },
  ],
  cookingTime: "15 minutes",
  servings: 4,
  calories: 380,
};

const PantryProdigy = () => {
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
              <Apple size={24} className="text-cookblue-600 dark:text-cookblue-400" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Pantry Prodigy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Smart Cooking with What You Have!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {!recipe ? (
              <>
                <RecipeForm type="pantry" onGenerateRecipe={handleGenerateRecipe} />
                
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

export default PantryProdigy;
