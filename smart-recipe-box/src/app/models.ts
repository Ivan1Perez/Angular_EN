export interface Recipe {
    text: string,
    description: string,
    ingredients: Ingredient[];
    image?: string;
}

export interface Ingredient {
    text: string,
    quantity: number,
    unit?: string
}