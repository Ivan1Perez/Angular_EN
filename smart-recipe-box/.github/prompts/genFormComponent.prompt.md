---
agent: 'agent'
tools: ['web/githubRepo', 'search/codebase']
description: 'Generate a new Angular form component'
---
Your goal is to generate a new Angular form component based on the templates in #tool:web/githubRepo contoso/angular-templates.

Ask for the form name and fields if not provided.

Requirements for the form:
* Use form design system components: [design-system/Form.md](../../docs/design-system/Form.md)
* Use Angular Reactive Forms for form state management
* Always define TypeScript interfaces for your form data
* Prefer strongly typed FormGroup and FormControl (Typed Forms)
* Initialize the form with default values to prevent unnecessary change detection cycles
* Use Angular Validators for validation
* Create reusable validation logic in separate files (custom validators)
* Use TypeScript types to ensure type safety
* Customize UX-friendly validation rules and error messages
* Follow Angular style guide and best practices