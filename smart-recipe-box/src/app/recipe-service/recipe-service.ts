import { Injectable, signal } from '@angular/core';
import { RECIPES } from '../mock-recipes';
import { Recipe } from '../models';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private index = 0;
  protected readonly recipe = signal<Recipe>(RECIPES[0]);

  getFirstRecipe(): Recipe {
    return this.recipe();
  }

    getRecipeById(id: number): Recipe | undefined {
    return RECIPES.find(r => r.id === id);
    }

  getAll(): Recipe[] {
    return RECIPES;
  }

  setRecipe(recipe: Recipe): void {
    this.recipe.set(recipe);
  }

  nextRecipe(): void {
    this.index = (this.index + 1) % this.getAll().length;
    this.setRecipe(RECIPES[this.index]);
  }

  prevRecipe(): void {
    this.index = (this.index - 1 + this.getAll().length) % this.getAll().length;
    this.setRecipe(this.getAll()[this.index]);
  }
  randomRecipe(): void {
    this.index = Math.floor(Math.random() * this.getAll().length);
    this.setRecipe(this.getAll()[this.index]);
  }
}
