import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Recipe } from "../models";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipe-service/recipe-service";

@Component({
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recipe-detail',
  template: `
    @if (currentRecipe().image) {
      <img [src]="currentRecipe().image" alt="{{ currentRecipe().text }}" class="recipe-image" />
    }

    <p class="description">{{ currentRecipe().description }}</p>
    
    <div class="count-section">
      <span class="count-label">Servings</span>
      <div class="count-buttons">
        <button class="btn-count" (click)="decrementServings()">−</button>
        <input type="number" class="count-value editable-count" [(ngModel)]="count" />
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
  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);

  protected readonly count = signal<number>(1);

  protected currentRecipe = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.recipeService.getRecipeById(id) ?? this.recipe();
  });

  public readonly adjustedIngredients = computed(() => {
    const servings = this.count();
    const recipe = this.currentRecipe();
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
