import { Recipe } from './models';
export const RECIPES: Recipe[] = [
  { 
    text: 'CarrotCake',
    description: 'A delicious carrot cake recipe with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
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
    image: 'https://plus.unsplash.com/premium_photo-1712678665743-15e3833da37e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
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