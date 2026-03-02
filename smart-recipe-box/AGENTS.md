# AGENTS.md - Smart Recipe Box Development Guide

This document provides guidelines for agents working on the Smart Recipe Box Angular application.

## Project Overview

- **Framework**: Angular 21 (latest) with standalone components
- **Language**: TypeScript (strict mode enabled)
- **Testing**: Vitest
- **Styling**: Tailwind CSS
- **State Management**: Angular Signals

---

## Build, Test, and Development Commands

### Development
```bash
npm start           # Start dev server (ng serve)
npm run watch       # Build with watch mode (ng build --watch --configuration development)
```

### Build
```bash
npm run build       # Production build (ng build)
```

### Testing
```bash
npm test            # Run all tests (ng test - uses Vitest)
```

**Running a single test:**
```bash
# Run tests matching a pattern
npx vitest run --testNamePattern="test-name"

# Run a specific test file
npx vitest run src/app/app.spec.ts

# Run tests in watch mode (interactive)
npx vitest
```

### Linting & Formatting
- Uses Prettier (see package.json: printWidth: 100, singleQuote: true)
- TypeScript strict mode enforced in tsconfig.json

---

## Code Style Guidelines

### General Principles
- Write functional, maintainable, performant, and accessible code
- **MUST pass all AXE accessibility checks**
- **MUST follow WCAG AA minimums** (focus management, color contrast, ARIA attributes)

### Components
- Use standalone components by default
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms over Template-driven forms
- **DO NOT use `ngClass`** - use `class` bindings instead
- **DO NOT use `ngStyle`** - use `style` bindings instead
- Keep components small and focused on a single responsibility
- Use paths relative to the component TS file for external templates/styles

### State Management (Angular Signals)
- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- **DO NOT use `mutate` on signals** - use `update` or `set` instead

### Templates
- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like `new Date()` are available
- Do not write arrow functions in templates (not supported)

### Services
- Design services around a single responsibility
- Use `providedIn: 'root'` for singleton services
- Use the `inject()` function instead of constructor injection

### TypeScript
- Strict mode enabled in tsconfig.json
- Define clear interfaces and types for components, services, and models
- Use type guards and union types for robust type checking
- Implement proper error handling with RxJS operators (e.g., `catchError`)
- Use typed forms (`FormGroup`, `FormControl`) for reactive forms

**Compiler options enforced:**
- `noImplicitOverride: true`
- `noPropertyAccessFromIndexSignature: true`
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`

**Angular Compiler Options:**
- `strictInjectionParameters: true`
- `strictInputAccessModifiers: true`
- `strictTemplates: true`

### File Naming Conventions
- Feature components: `feature.ts`
- Services: `feature.service.ts`
- Models: `models.ts` (shared), or `feature.models.ts`
- Follow Angular Style Guide: https://angular.dev/style-guide

### Imports
- Use path aliases if configured
- Group imports: Angular first, then third-party, then local
- Use explicit imports (no barrel files unless necessary)

### Styling (Tailwind CSS)
- Use Tailwind utility classes for styling
- Follow Tailwind best practices for responsive design
- Use semantic HTML with appropriate Tailwind classes for accessibility

### Error Handling
- Handle API errors with global interceptors for consistent error handling
- Use RxJS operators like `catchError` for Observable error handling
- Handle loading and error states with signals and proper UI feedback

### Security
- Sanitize user inputs using Angular's built-in sanitization
- Implement route guards for authentication/authorization
- Use Angular's `HttpInterceptor` for CSRF protection and API auth headers
- Validate form inputs with reactive forms and custom validators
- Avoid direct DOM manipulation

### Performance
- Use lazy loading for routes to reduce initial bundle size
- Optimize change detection with `OnPush` strategy and signals
- Enable production builds for optimization
- Use `trackBy` in `@for` loops for better rendering performance

### Testing
- Write unit tests using Vitest
- Use Angular's `TestBed` for component testing with mocked dependencies
- Test signal-based state updates using Angular's testing utilities
- Mock HTTP requests using `provideHttpClientTesting`

---

## Architecture

- Organized as standalone feature domains
- Uses Angular's built-in dependency injection
- Structure: smart (container) vs. presentational (dumb) components
- Lazy loading for feature modules/routes

---

## Additional Guidelines

- Use Angular CLI commands for generating boilerplate code
- Document components and services with clear JSDoc comments
- Keep code DRY by creating reusable utilities
- Use signals consistently for state management
