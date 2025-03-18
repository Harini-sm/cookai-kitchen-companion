
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import IngredientInput from './IngredientInput';

interface RecipeFormProps {
  type: 'pantry' | 'plate' | 'nutrient';
  onGenerateRecipe: (formData: any) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ type, onGenerateRecipe }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [mealType, setMealType] = useState('');
  const [cookingTime, setCookingTime] = useState(30);
  const [skillLevel, setSkillLevel] = useState('');
  const [dietaryRequirements, setDietaryRequirements] = useState('');
  const [servings, setServings] = useState(2);
  
  // Nutrient-specific state
  const [carbs, setCarbs] = useState(50);
  const [protein, setProtein] = useState(30);
  const [fat, setFat] = useState(20);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = {
      ingredients,
      mealType,
      cookingTime,
      skillLevel,
      dietaryRequirements,
      servings,
      ...(type === 'nutrient' && {
        nutrients: {
          carbs,
          protein,
          fat
        }
      })
    };
    
    onGenerateRecipe(formData);
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Common inputs for all form types */}
          
          {/* Ingredient Input for Pantry */}
          {type === 'pantry' && (
            <div className="space-y-2">
              <Label htmlFor="ingredients">Available Ingredients</Label>
              <IngredientInput onIngredientsChange={setIngredients} />
            </div>
          )}
          
          {/* Meal Type Selection */}
          <div className="space-y-2">
            <Label htmlFor="meal-type">Meal Type</Label>
            <Select value={mealType} onValueChange={setMealType}>
              <SelectTrigger>
                <SelectValue placeholder="Select meal type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="snack">Snack</SelectItem>
                <SelectItem value="dessert">Dessert</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Servings for Plate Prodigy */}
          {type === 'plate' && (
            <div className="space-y-2">
              <Label>Servings: {servings}</Label>
              <Slider
                defaultValue={[2]}
                min={1}
                max={10}
                step={1}
                onValueChange={(value) => setServings(value[0])}
              />
            </div>
          )}
          
          {/* Cooking Time */}
          <div className="space-y-2">
            <Label>Cooking Time: {cookingTime} minutes</Label>
            <Slider
              defaultValue={[30]}
              min={5}
              max={120}
              step={5}
              onValueChange={(value) => setCookingTime(value[0])}
            />
          </div>
          
          {/* Skill Level */}
          <div className="space-y-2">
            <Label htmlFor="skill-level">Skill Level</Label>
            <Select value={skillLevel} onValueChange={setSkillLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select skill level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Dietary Requirements */}
          {(type === 'plate' || type === 'nutrient') && (
            <div className="space-y-2">
              <Label htmlFor="dietary-requirements">Dietary Requirements</Label>
              <Select value={dietaryRequirements} onValueChange={setDietaryRequirements}>
                <SelectTrigger>
                  <SelectValue placeholder="Select dietary requirement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                  <SelectItem value="dairy-free">Dairy-Free</SelectItem>
                  <SelectItem value="keto">Keto</SelectItem>
                  <SelectItem value="paleo">Paleo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          {/* Nutrient Targets for Nutrient Prodigy */}
          {type === 'nutrient' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Macronutrient Targets</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Carbs: {carbs}g</Label>
                  <span className="text-sm text-gray-500">{Math.round(carbs * 4)} kcal</span>
                </div>
                <Slider
                  defaultValue={[50]}
                  min={0}
                  max={200}
                  step={5}
                  onValueChange={(value) => setCarbs(value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Protein: {protein}g</Label>
                  <span className="text-sm text-gray-500">{Math.round(protein * 4)} kcal</span>
                </div>
                <Slider
                  defaultValue={[30]}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(value) => setProtein(value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Fat: {fat}g</Label>
                  <span className="text-sm text-gray-500">{Math.round(fat * 9)} kcal</span>
                </div>
                <Slider
                  defaultValue={[20]}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(value) => setFat(value[0])}
                />
              </div>
              
              <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <div className="font-medium">Total Calories: {Math.round(carbs * 4 + protein * 4 + fat * 9)} kcal</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Carbs: {Math.round((carbs * 4 / (carbs * 4 + protein * 4 + fat * 9)) * 100)}% | 
                  Protein: {Math.round((protein * 4 / (carbs * 4 + protein * 4 + fat * 9)) * 100)}% | 
                  Fat: {Math.round((fat * 9 / (carbs * 4 + protein * 4 + fat * 9)) * 100)}%
                </div>
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-cookblue-500 hover:bg-cookblue-600 text-white"
          >
            Generate Recipe
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RecipeForm;
