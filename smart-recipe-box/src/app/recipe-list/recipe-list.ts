import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { Recipe } from "../models";
import { RECIPES } from "../mock-recipes";
import { RecipeDetail } from "../recipe-detail/recipe-detail";

@Component({
  standalone: true,
  imports: [RecipeDetail],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recipe-list',
  template: `
    <div class="button-group">
      <button class="btn btn-primary" (click)="prevRecipe()">Previous recipe</button>
      <button class="btn btn-primary" (click)="nextRecipe()">Next recipe</button>
      <button class="btn btn-random-recipe" (click)="randomRecipe()">Random recipe</button>
    </div>
    <app-recipe-detail [recipe]="recipe()" />
  `,
  styleUrl: './recipe-list.css'
})

export class RecipeList {
  /*======================================
  NEXT-PREV-RANDOM RECIPE LOGIC
========================================*/
  private index = 0;
  protected readonly recipe = signal<Recipe>(RECIPES[0]);

  protected nextRecipe(): void {
    this.index = (this.index + 1) % RECIPES.length;
    this.recipe.set(RECIPES[this.index]);
    console.log('Next recipe');
  }

  protected prevRecipe(): void {
    this.index = (this.index - 1 + RECIPES.length) % RECIPES.length;
    this.recipe.set(RECIPES[this.index]);
    console.log('Previous recipe');
  }

  protected randomRecipe(): void {
    this.index = Math.floor(Math.random() * RECIPES.length);
    this.recipe.set(RECIPES[this.index]);
    console.log('Random recipe: ', this.recipe().text);
  }
}