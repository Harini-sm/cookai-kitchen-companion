
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, Heart, Share, Utensils, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

interface Ingredient {
  name: string;
  amount: string;
  substitutes?: string[];
}

interface RecipeStep {
  instruction: string;
  time?: string;
}

interface RecipeProps {
  title: string;
  image: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  cookingTime: string;
  servings: number;
  calories: number;
  macros?: {
    carbs: number;
    protein: number;
    fat: number;
  };
}

const RecipeDisplay: React.FC<RecipeProps> = ({
  title,
  image,
  ingredients,
  steps,
  cookingTime,
  servings,
  calories,
  macros,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const { toast } = useToast();

  const playVoiceInstructions = () => {
    setIsPlayingVoice(true);
    toast({
      title: "Voice Instructions",
      description: `Playing step ${currentStep + 1} in Tamil and English`,
    });
    
    // Simulate voice playing
    setTimeout(() => {
      setIsPlayingVoice(false);
    }, 3000);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite ? "Recipe removed from your favorites" : "Recipe added to your favorites",
    });
  };

  const shareRecipe = () => {
    toast({
      title: "Share Recipe",
      description: "Sharing functionality will be available soon!",
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card className="w-full overflow-hidden">
      <div className="relative h-64 md:h-80">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            size="icon"
            variant="outline"
            className="bg-white/80 hover:bg-white text-red-500 hover:text-red-600"
            onClick={toggleFavorite}
          >
            <Heart className={isFavorite ? "fill-current" : ""} size={20} />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="bg-white/80 hover:bg-white"
            onClick={shareRecipe}
          >
            <Share size={20} />
          </Button>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock size={16} className="mr-1" />
            <span>{cookingTime}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Utensils size={16} className="mr-1" />
            <span>{servings} servings</span>
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            {calories} kcal / serving
          </div>
        </div>
        
        {macros && (
          <div className="flex gap-2 mt-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
              Carbs: {macros.carbs}g
            </Badge>
            <Badge variant="outline" className="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-300">
              Protein: {macros.protein}g
            </Badge>
            <Badge variant="outline" className="bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-300">
              Fat: {macros.fat}g
            </Badge>
          </div>
        )}
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-3">Ingredients</h3>
            <ul className="space-y-2">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="flex justify-between">
                  <span>{ingredient.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{ingredient.amount}</span>
                </li>
              ))}
            </ul>
            
            {ingredients.some(i => i.substitutes && i.substitutes.length > 0) && (
              <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-md">
                <h4 className="font-medium mb-2">Substitution Options</h4>
                <ul className="space-y-1 text-sm">
                  {ingredients
                    .filter(i => i.substitutes && i.substitutes.length > 0)
                    .map((ingredient, index) => (
                      <li key={index}>
                        <span className="font-medium">{ingredient.name}:</span>{' '}
                        {ingredient.substitutes?.join(', ')}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Instructions</h3>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={playVoiceInstructions}
                disabled={isPlayingVoice}
              >
                <Volume2 size={16} />
                <span>{isPlayingVoice ? "Playing..." : "Play Voice"}</span>
              </Button>
            </div>

            <div className="border rounded-md p-4 min-h-[200px] mb-4 relative">
              <div className="absolute top-2 right-2 text-sm text-gray-500">
                Step {currentStep + 1} of {steps.length}
              </div>
              <p className="mt-4">{steps[currentStep].instruction}</p>
              {steps[currentStep].time && (
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  <Clock size={14} className="inline mr-1" />
                  {steps[currentStep].time}
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center"
              >
                <ChevronLeft size={16} className="mr-1" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="flex items-center"
              >
                Next
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeDisplay;
