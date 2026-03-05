import { ChangeDetectionStrategy, Component, computed, input, signal } from "@angular/core";
import { Recipe } from "../models";

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recipe-detail',
  template: `
    @if (recipe().image) {
      <img [src]="recipe().image" alt="{{ recipe().text }}" class="recipe-image" />
    }

    <p class="description">{{ recipe().description }}</p>

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
        <li>{{ ingredient.text }}: {{ ingredient.quantity }} {{ ingredient.unit ?? '' }}</li>
      }
    </ul>
  `,
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  public readonly recipe = input.required<Recipe>();
  protected readonly count = signal<number>(1);

  public readonly adjustedIngredients = computed(() => {
    const servings = this.count();
    const recipe = this.recipe();
    const ingredientsPerServing = recipe.ingredients.map((i) => ({
      ...i,
      quantity: i.quantity * servings,
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
