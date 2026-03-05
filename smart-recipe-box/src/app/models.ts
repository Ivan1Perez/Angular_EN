export interface Recipe {
    text: string,
    description: string,
    ingredients: Ingredient[];
    image?: string;
    isFavorite?: boolean;
}

export interface Ingredient {
    text: string,
    quantity: number,
    unit?: string
}