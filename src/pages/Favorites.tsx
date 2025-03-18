
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ChevronLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Favorites = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Sample favorite recipes
  const favoriteRecipes = [
    {
      id: 1,
      title: 'Garlic Butter Pasta with Herbs',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
      dateAdded: '2023-06-15',
      category: 'Dinner',
      cookingTime: '15 minutes',
    },
    {
      id: 2,
      title: 'Mediterranean Quinoa Bowl',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      dateAdded: '2023-07-22',
      category: 'Lunch',
      cookingTime: '30 minutes',
    },
    {
      id: 3,
      title: 'High-Protein Chicken & Quinoa Bowl',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
      dateAdded: '2023-08-10',
      category: 'Dinner',
      cookingTime: '45 minutes',
    },
    {
      id: 4,
      title: 'Blueberry Overnight Oats',
      image: 'https://images.unsplash.com/photo-1541511553836-1b7f9eb52b3f',
      dateAdded: '2023-09-05',
      category: 'Breakfast',
      cookingTime: '5 minutes + overnight',
    },
    {
      id: 5,
      title: 'Spicy Tofu Stir Fry',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
      dateAdded: '2023-10-01',
      category: 'Dinner',
      cookingTime: '20 minutes',
    },
  ];

  const removeFavorite = (id: number) => {
    toast({
      title: 'Recipe Removed',
      description: 'Recipe has been removed from favorites.',
    });
  };

  const viewRecipe = (title: string) => {
    toast({
      title: 'Recipe Opened',
      description: `Viewing ${title}`,
    });
  };

  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              className="mr-4"
              onClick={() => navigate('/profile')}
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Profile
            </Button>
            <h1 className="text-3xl font-bold">My Favorite Recipes</h1>
          </div>
          
          {favoriteRecipes.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500 mb-4">You haven't saved any favorite recipes yet.</p>
                <Button 
                  className="bg-cookblue-500 hover:bg-cookblue-600"
                  onClick={() => navigate('/')}
                >
                  Explore Recipes
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteRecipes.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <h3 className="text-white font-medium">{recipe.title}</h3>
                        <p className="text-white/80 text-sm">Added: {recipe.dateAdded}</p>
                      </div>
                    </div>
                    <button 
                      className="absolute top-3 right-3 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
                      onClick={() => removeFavorite(recipe.id)}
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-1">{recipe.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                      <span>{recipe.category}</span>
                      <span>{recipe.cookingTime}</span>
                    </div>
                    <Button 
                      className="w-full bg-cookblue-500 hover:bg-cookblue-600"
                      onClick={() => viewRecipe(recipe.title)}
                    >
                      View Recipe
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Favorites;
