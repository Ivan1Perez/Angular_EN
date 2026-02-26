import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recipe } from './models';
import { RECIPES } from './mock-recipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
      <h1 class="title">{{ title() }}</h1>

      <h2 class="recipe-name">{{ recipe().text }}</h2>
      <p class="description">{{ recipe().description }}</p>

      <div class="button-group">
        <button class="btn btn-primary" (click)="logNextRecipe()">Next recipe</button>
        <button class="btn btn-primary" (click)="logPrevRecipe()">Previous recipe</button>
      </div>
  `,
  // templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Recipe Box');
  private index = 0;

  protected logNextRecipe(): void {
    this.index = (this.index + 1) % RECIPES.length;
    this.recipe.set(RECIPES[this.index]);
    console.log("Next recipe");
  }

  protected logPrevRecipe(): void {
    this.index = (this.index - 1 + RECIPES.length) % RECIPES.length;
    this.recipe.set(RECIPES[this.index]);
    console.log("Previous recipe");
  }

  protected readonly recipe = signal<Recipe>(RECIPES[0])
}
