# Form Design System Components

This document outlines the form components used across the Smart Recipe Box application. These building blocks ensure consistency, accessibility, and a polished user experience when working with forms.

## Core Principles

- **Accessibility first**: All form elements must be keyboard-navigable and include proper ARIA attributes.
- **Consistent styling**: Components use shared CSS variables and follow the design tokens defined in the global styles.
- **Reactive forms**: Forms are built using Angular Reactive Forms with typed `FormGroup` and `FormControl`.
- **Validation feedback**: Error messages appear inline and are easy to understand.

## Available Components

### `<sr-form-field>`
A wrapper for form controls that includes label, hint, and error message slots.

Usage:
```html
<sr-form-field label="Recipe name" hint="Enter the name of the recipe">
  <input srInput formControlName="name" />
  <sr-error *ngIf="form.controls.name.invalid">Name is required.</sr-error>
</sr-form-field>
```

### `<sr-input>`
A styled input element (text, email, number, etc.). Applies consistent padding, border, and focus styles.

### `<sr-textarea>`
A textarea with autosize support and styling.

### `<sr-select>`
A select dropdown with accessible keyboard support and custom styling.

### `<sr-checkbox>` / `<sr-radio>`
Custom checkbox and radio button components with associated label handling.

### `<sr-button>`
Primary action button; accepts `type` attribute (`submit`, `button`, etc.) and variant inputs (`primary`, `secondary`). Disabled state managed via `[disabled]` binding.

## Form Patterns

- **Typed form groups**: Always define an interface for form value shape.
- **Default values**: Initialize controls with default values to avoid `null` errors.
- **Custom validators**: Place reusable validators in `validators/` directory and export functions and error keys.
- **Error messages**: Use a shared `FormErrorComponent` or directive to display validation messages.

Example typed form in a component:
```ts
interface RecipeForm {
  name: string;
  description: string;
  servings: number;
}

this.form = this.fb.group<RecipeForm>({
  name: ['', [Validators.required]],
  description: [''],
  servings: [1, [Validators.min(1)]],
});
```

By following this design system, form implementation remains predictable, robust, and accessible throughout the app.