import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="title">{{ title() }}</h1>
    <app-recipe-list />
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My Recipe Box');
}