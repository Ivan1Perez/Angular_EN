import { Recipe } from './models';
export const RECIPES: Recipe[] = [
  { 
    text: 'CarrotCake',
    description: 'A delicious carrot cake recipe with cream cheese frosting.',
    ingredients: [
      { text: 'All-purpose flour', quantity: 2, unit: 'cups' },
      { text: 'Sugar', quantity: 1.5, unit: 'cups' },
      { text: 'Grated carrots', quantity: 2, unit: 'cups' },
      { text: 'Eggs', quantity: 3, unit: 'pcs' },
      { text: 'Butter', quantity: 0.5, unit: 'cup' },
      { text: 'Cream cheese', quantity: 225, unit: 'g' },
      { text: 'Baking powder', quantity: 2, unit: 'tsp' },
      { text: 'Cinnamon', quantity: 1, unit: 'tsp' }
    ]
  },
  { 
    text: 'Lentejas de la iaia',
    description: 'A traditional Spanish lentil stew with vegetables and spices.',
    ingredients: [
      { text: 'Lentils', quantity: 1, unit: 'cup' },
      { text: 'Carrots', quantity: 2, unit: 'pcs' },
      { text: 'Celery stalk', quantity: 1, unit: 'pcs' },
      { text: 'Onion', quantity: 1, unit: 'pcs' },
      { text: 'Garlic cloves', quantity: 3, unit: 'pcs' },
      { text: 'Olive oil', quantity: 2, unit: 'tbsp' },
      { text: 'Bay leaf', quantity: 1, unit: 'pcs' },
      { text: 'Salt', quantity: 1, unit: 'tsp' }
    ]
  },
  { 
    text: 'Pasta Carbonara',
    description: 'Classic Italian pasta with eggs, cheese, pancetta, and black pepper.',
    ingredients: [
      { text: 'Spaghetti', quantity: 400, unit: 'g' },
      { text: 'Eggs', quantity: 4, unit: 'pcs' },
      { text: 'Pancetta', quantity: 200, unit: 'g' },
      { text: 'Parmesan cheese', quantity: 100, unit: 'g' },
      { text: 'Black pepper', quantity: 1, unit: 'tsp' },
      { text: 'Salt', quantity: 1, unit: 'tsp' }
    ]
  },
  { 
    text: 'Chicken Curry',
    description: 'Aromatic curry with tender chicken pieces in a rich spiced sauce.',
    ingredients: [
      { text: 'Chicken breast', quantity: 500, unit: 'g' },
      { text: 'Curry powder', quantity: 2, unit: 'tbsp' },
      { text: 'Coconut milk', quantity: 400, unit: 'ml' },
      { text: 'Onion', quantity: 1, unit: 'pcs' },
      { text: 'Garlic cloves', quantity: 3, unit: 'pcs' },
      { text: 'Ginger', quantity: 1, unit: 'inch' },
      { text: 'Tomato', quantity: 2, unit: 'pcs' },
      { text: 'Vegetable oil', quantity: 2, unit: 'tbsp' }
    ]
  },
  { 
    text: 'Greek Salad',
    description: 'Fresh Mediterranean salad with tomatoes, cucumbers, olives, and feta cheese.',
    ingredients: [
      { text: 'Tomatoes', quantity: 4, unit: 'pcs' },
      { text: 'Cucumber', quantity: 1, unit: 'pcs' },
      { text: 'Kalamata olives', quantity: 0.5, unit: 'cup' },
      { text: 'Feta cheese', quantity: 150, unit: 'g' },
      { text: 'Red onion', quantity: 0.5, unit: 'pcs' },
      { text: 'Olive oil', quantity: 3, unit: 'tbsp' },
      { text: 'Oregano', quantity: 1, unit: 'tsp' }
    ]
  },
];