import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="title" routerLink="/">{{ title() }}</h1>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My Recipe Box');
}