import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recipe } from './models';
import { RECIPES } from './mock-recipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="title">{{ title() }}</h1>

    <h2 class="recipe-name">{{ recipe().text }}</h2>
    <p class="description">{{ recipe().description }}</p>

    <div class="button-group">
    <button class="btn btn-primary" (click)="logPrevRecipe()">Previous recipe</button>
    <button class="btn btn-primary" (click)="logNextRecipe()">Next recipe</button>
    </div>

    <div class="count-section">
      <span class="count-label">Servings</span>
      <div class="count-buttons">
        <button class="btn-count" (click)="decrementServings()">−</button>
        <span class="count-value">{{ count() }}</span>
        <button class="btn-count" (click)="incrementServings()">+</button>
      </div>
    </div>

    <p class="ingredients-title">Ingredients:</p>
    <ul class="ingredients-list">
      @for (ingredient of adjustedIngredients(); track ingredient.text) {
        <li>{{ ingredient.text }}: {{ ingredient.quantity }} {{ ingredient.unit }}</li>
      }
    </ul>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My Recipe Box');

  /*======================================
  NEXT-PREV RECIPE LOGIC
========================================*/
  private index = 0;
  protected readonly recipe = signal<Recipe>(RECIPES[0]);

  protected logNextRecipe(): void {
    this.index = (this.index + 1) % RECIPES.length;
    this.recipe.set(RECIPES[this.index]);
    console.log('Next recipe');
  }

  protected logPrevRecipe(): void {
    this.index = (this.index - 1 + RECIPES.length) % RECIPES.length;
    this.recipe.set(RECIPES[this.index]);
    console.log('Previous recipe');
  }

  /*======================================
  SERVINGS COUNTER LOGIC
========================================*/
  protected readonly count = signal<number>(1);

  protected readonly adjustedIngredients = computed(() => {
    const servings = this.count();

    const ingredientsPerServing = this.recipe().ingredients.map((i) => ({
      ...i,
      quantity: i.quantity * (servings),
    }));
    console.log(ingredientsPerServing);
    
    return ingredientsPerServing;
  });

  protected incrementServings(): void {
    this.count.update((current) => current + 1);
  }

  protected decrementServings(): void {
    this.count.update((current) => Math.max(1, current - 1));
  }
}
