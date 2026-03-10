import { ChangeDetectionStrategy, Component, computed, inject, input } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { RecipeService } from "../recipe-service/recipe-service";

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
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
        <input type="number" class="count-value editable-count" [formControl]="countControl" />
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
  public readonly id = input.required<number>();
  private recipeService = inject(RecipeService);

  protected readonly countControl = new FormControl(1, { nonNullable: true });
  protected readonly count = toSignal(this.countControl.valueChanges, { initialValue: 1 });

  protected currentRecipe = computed(() => {
    return this.recipeService.getRecipeById(this.id()) ?? this.recipeService.getFirstRecipe();
  });

  protected adjustedIngredients = computed(() => {
    const servings = this.count() ?? 1;
    const recipe = this.currentRecipe();
    const ingredientsPerServing = recipe.ingredients.map((i) => ({
      ...i,
      quantity: i.quantity * servings,
    }));
    return ingredientsPerServing;
  });

  protected incrementServings(): void {
    this.countControl.setValue(this.countControl.value + 1);
  }

  protected decrementServings(): void {
    this.countControl.setValue(Math.max(1, this.countControl.value - 1));
  }
}
