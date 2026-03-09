import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RecipeService } from '../recipe-service/recipe-service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recipe-list',
  template: `
    <div class="button-group">
      <button class="btn btn-primary" (click)="prevRecipe()">Previous recipe</button>
      <button class="btn btn-primary" (click)="nextRecipe()">Next recipe</button>
      <button class="btn btn-random-recipe" (click)="randomRecipe()">Random recipe</button>
    </div>
    <h2 class="recipe-name">
      <span class="favorite-icon">
        @if (currentRecipe().isFavorite) {
          ★
        }
      </span>
      {{ currentRecipe().text }}
      <span class="favorite-icon">
        @if (currentRecipe().isFavorite) {
          ★
        }
      </span>
    </h2>
    
    @if (currentRecipe().image) {
      <img [src]="currentRecipe().image" alt="{{ currentRecipe().text }}" class="recipe-image" />
    }

    <p class="description">{{ currentRecipe().description }}</p>

    <a [routerLink]="['/recipe', currentRecipe().id]" class="view-details-link">View details</a>
    
  `,
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  private recipeService = inject(RecipeService);
  protected currentRecipe = computed(() => this.recipeService.getFirstRecipe());

  /*======================================
  NEXT-PREV-RANDOM RECIPE LOGIC
========================================*/

  protected nextRecipe(): void {
    this.recipeService.nextRecipe();
  }
  protected prevRecipe(): void {
    this.recipeService.prevRecipe();
  }
  protected randomRecipe(): void {
    this.recipeService.randomRecipe();
  }
}
