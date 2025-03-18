
import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface IngredientInputProps {
  onIngredientsChange: (ingredients: string[]) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onIngredientsChange }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState('');

  const addIngredient = () => {
    if (currentIngredient.trim() !== '' && !ingredients.includes(currentIngredient.trim())) {
      const updatedIngredients = [...ingredients, currentIngredient.trim()];
      setIngredients(updatedIngredients);
      onIngredientsChange(updatedIngredients);
      setCurrentIngredient('');
    }
  };

  const removeIngredient = (index: number) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
    onIngredientsChange(updatedIngredients);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addIngredient();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Add an ingredient (e.g., tomato, rice, chicken)"
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
        />
        <Button
          type="button"
          onClick={addIngredient}
          variant="outline"
          className="text-cookblue-500 border-cookblue-500 hover:bg-cookblue-50"
        >
          <Plus size={16} className="mr-1" /> Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {ingredients.map((ingredient, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="flex items-center gap-1 px-3 py-1.5 bg-cookblue-100 text-cookblue-600 dark:bg-cookblue-900/30 dark:text-cookblue-300"
          >
            {ingredient}
            <button
              type="button"
              onClick={() => removeIngredient(index)}
              className="ml-1 hover:text-red-500 focus:outline-none"
            >
              <X size={14} />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default IngredientInput;
