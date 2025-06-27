---
title: 'Component styles'
slug: component-styles
icon: done
order: 30
---

In Cumulocity applications, you have flexibility in styling components, with the ability to use various technologies and approaches.

## CSS preprocessors

You can use popular CSS preprocessors such as Less or Sass. For example, Cumulocity applications use Less by default. No additional configuration is needed - simply create a file with the appropriate extension (e.g., .less or .scss) and import it in your component.

### Less

<codex-tutorial-example [open]="true"
[sources]="[
'./packages/tutorial/src/component-styles/leaner-style-sheets-example/leaner-style-sheets-example.component.less',
'./packages/tutorial/src/component-styles/leaner-style-sheets-example/leaner-style-sheets-example.component.ts',
]"></codex-tutorial-example>

### Sass

<codex-tutorial-example [open]="true"
[sources]="[
'./packages/tutorial/src/component-styles/syntactically-awesome-style-sheets-example/syntactically-awesome-style-sheets-example.component.scss',
'./packages/tutorial/src/component-styles/syntactically-awesome-style-sheets-example/syntactically-awesome-style-sheets-example.component.ts',
]"></codex-tutorial-example>

## Pure CSS
<codex-tutorial-example [open]="true"
[sources]="[
'./packages/tutorial/src/component-styles/cascading-style-sheets-example/cascading-style-sheets-example.component.css',
'./packages/tutorial/src/component-styles/cascading-style-sheets-example/cascading-style-sheets-example.component.ts',
]"></codex-tutorial-example>

## Branding and view encapsulation

To maintain consistent theming across all components, use globally defined CSS variables, described in the [Branding](#/ui-guidelines/foundations/design-tokens/branding/overview) section. By default, you cannot alter global styles from within a component due to Angular's [style scoping](https://angular.dev/guide/components/styling), which prevents styles from leaking out of components, avoiding potential visual bugs and conflicts.

While Angular provides ways to bypass this, such as using different `view encapsulation` settings or the `::ng-deep` pseudo-class, we do not recommend these approaches. Instead, modify global styles directly when needed.

For comprehensive information on theming and global style modifications, refer to the [theming](#/getting-started/guides/theming/overview) section. This provides guidelines on properly implementing global style changes while maintaining the integrity of the component-based styling system.

## Best practices

When styling components in Cumulocity applications, it's important to follow certain guidelines to ensure maintainability, consistency. These best practices will help you create a cohesive design while avoiding common pitfalls in component styling. Here are the key recommendations:

- Prefer using global [CSS variables](#/ui-guidelines/foundations/design-tokens/branding/overview) for consistent theming.
- Use component-specific styles for unique component styling needs.
- Avoid modifying global styles from components when possible.
- If global style modifications are necessary, use the [theming](#/getting-started/guides/theming/overview) options provided by Cumulocity.
