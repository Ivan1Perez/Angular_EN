export interface Recipe {
    text: string,
    description: string,
    ingredients: Ingredient[];
}

export interface Ingredient {
    text: string,
    quantity: number,
    unit?: string
}