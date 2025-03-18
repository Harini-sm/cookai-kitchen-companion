
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import RecipeForm from '@/components/recipe/RecipeForm';
import RecipeDisplay from '@/components/recipe/RecipeDisplay';
import { Utensils } from 'lucide-react';

// Example recipe data (normally would come from an API)
const sampleRecipe = {
  title: "Mediterranean Quinoa Bowl",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  ingredients: [
    { name: "Quinoa", amount: "1 cup" },
    { name: "Cherry tomatoes", amount: "1 cup", substitutes: ["Diced regular tomatoes"] },
    { name: "Cucumber", amount: "1/2, diced" },
    { name: "Red onion", amount: "1/4, finely sliced", substitutes: ["Shallots", "Green onions"] },
    { name: "Kalamata olives", amount: "1/3 cup", substitutes: ["Black olives"] },
    { name: "Feta cheese", amount: "100g", substitutes: ["Goat cheese", "Tofu (for vegan)"] },
    { name: "Extra virgin olive oil", amount: "2 tbsp" },
    { name: "Lemon juice", amount: "1 tbsp", substitutes: ["White vinegar"] },
    { name: "Fresh parsley", amount: "1/4 cup", substitutes: ["Fresh mint"] },
    { name: "Salt & pepper", amount: "to taste" },
  ],
  steps: [
    { instruction: "Rinse quinoa under cold water. In a medium saucepan, combine quinoa with 2 cups of water. Bring to a boil, then reduce heat to low, cover, and simmer until water is absorbed.", time: "15-20 minutes" },
    { instruction: "Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork and set aside to cool slightly.", time: "5 minutes" },
    { instruction: "In a large bowl, combine the cooked quinoa, halved cherry tomatoes, diced cucumber, sliced red onion, and olives.", time: "2 minutes" },
    { instruction: "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper to make the dressing.", time: "1 minute" },
    { instruction: "Pour the dressing over the quinoa mixture and toss gently to combine.", time: "1 minute" },
    { instruction: "Add crumbled feta cheese and chopped parsley, toss again lightly.", time: "1 minute" },
    { instruction: "Taste and adjust seasoning if needed. Serve at room temperature or chilled.", time: "Immediately" },
  ],
  cookingTime: "30 minutes",
  servings: 4,
  calories: 320,
};

const PlateProdigy = () => {
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
              <Utensils size={24} className="text-cookblue-600 dark:text-cookblue-400" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Plate Prodigy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Inspire MasterChef with Your Taste!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {!recipe ? (
              <>
                <RecipeForm type="plate" onGenerateRecipe={handleGenerateRecipe} />
                
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

export default PlateProdigy;
