---
title: Components tokens
slug: components-tokens
icon: done
order: 30
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->

## Root component tokens

These variables define the base styling properties that are inherited and used across all
components, ensuring consistency throughout the application.

Components typically implement these variables using a fallback pattern:

```css
.component {
  color: var(--c8y-component-color-default, var(--c8y-root-component-color-default));
  background: var(--c8y-component-background-default, var(--c8y-root-component-background-default));
  border-color: var(--c8y-component-border-color, var(--c8y-root-component-border-color));
}
```

This pattern allows components to:

- Use their own specific styling when defined (`--c8y-component-*`)
- Fall back to the root component values when no specific styling is set (`--c8y-root-component-*`)

The root variables cover fundamental aspects such as:

- Base colors for text, backgrounds, and interactive states
- Core spacing and padding values
- Default border styles and radiuses
- Icon colors and variations
- Scrollbar styling
- Common state definitions (active, hover, disabled, etc.)

This approach ensures a consistent visual hierarchy while allowing for component-specific
customization when needed.

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Background tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-root-component-background-default</code></td>
      <td>
        <code>--c8y-palette-high</code>
      </td>
      <td>
        <code>--c8y-palette-gray-100</code>
      </td>
      <td>Default background color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-background-active</code></td>
      <td>
        <code>--c8y-root-component-background-default</code>
      </td>
      <td>
        <code>--c8y-root-component-background-default</code>
      </td>
      <td>Background when active</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-background-disabled</code></td>
      <td>
        <code>rgba(0,0,0,.1)</code>
      </td>
      <td>
        <code>rgba(255,255,255,.1)</code>
      </td>
      <td>Background when disabled</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-background-expanded</code></td>
      <td>
        <code>--c8y-palette-gray-100</code>
      </td>
      <td>
        <code>--c8y-palette-gray-90</code>
      </td>
      <td>Background when expanded</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-background-expanded-gradient</code></td>
      <td><code>linear-gradient(0deg, rgba(0, 0, 0, 0.03) 0px, var(--c8y-root-component-background-expanded) 12px, var(--c8y-root-component-background-expanded) calc(100% - 12px), rgba(0, 0, 0, 0.03) 100%</code></td>
      <td><code>linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0px, var(--c8y-root-component-background-expanded) 12px, var(--c8y-root-component-background-expanded) calc(100% - 12px), rgba(0, 0, 0, 0.03) 100%</code></td>
      <td>Gradient for expanded components</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-background-focus</code></td>
      <td>
        <code>--c8y-root-component-background-default</code>
      </td>
      <td>
        <code>--c8y-root-component-background-default</code>
      </td>
      <td>Background when focused</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-background-hover</code></td>
      <td>
        <code>--c8y-brand-80</code>
      </td>
      <td>
        <code>--c8y-brand-10</code>
      </td>
      <td>Background on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-background-odd</code></td>
      <td>
        <code>--c8y-global-odd</code>
      </td>
      <td>
        <code>--c8y-global-odd</code>
      </td>
      <td>Background for alternate rows</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Color & Text tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-root-component-color-default</code></td>
      <td>
        <code>--c8y-text-color</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-text-color</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default text color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-color-active</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color when active</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-color-disabled</code></td>
      <td>
        <code>--c8y-palette-gray-70</code>
        <c8y-colortip codeLight="#E3E5E8" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-gray-70</code>
        <c8y-colortip codeDark="#4e5154" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color when disabled</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-color-expanded</code></td>
      <td>
        <code>inherit</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>inherit</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color when expanded</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-color-focus</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color when focused</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-color-link</code></td>
      <td>
        <code>--c8y-link-color</code>
        <c8y-colortip codeLight="#1481b8" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-link-color</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Link color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-color-link-hover</code></td>
      <td>
        <code>--c8y-link-hover-color</code>
        <c8y-colortip codeLight="#1481b8" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-link-hover-color</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Link hover color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-color-text-muted</code></td>
      <td>
        <code>--c8y-text-muted</code>
        <c8y-colortip codeLight="#657381" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-text-muted</code>
        <c8y-colortip codeDark="#b5b7b9" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Muted text color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-color-actions</code></td>
      <td>
        <code>--c8y-palette-gray-30</code>
        <c8y-colortip codeLight="#4C5967" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-text-color</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Actions color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-color-actions-hover</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Actions hover color</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th> Border & Radius tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-root-component-border-color</code></td>
      <td><code>--c8y-global-separator</code></td>
      <td><code>--c8y-global-separator</code></td>
      <td>Default border color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-border-style</code></td>
      <td><code>solid</code></td>
      <td><code>solid</code></td>
      <td>Default border style</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-border-width</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td>Default border width</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-border-radius-base</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td>Base border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-border-radius-small</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td>Small border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-border-radius-large</code></td>
      <td><code>2px</code></td>
      <td><code>2px</code></td>
      <td>Large border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-border-radius-focus</code></td>
      <td><code>4px</code></td>
      <td><code>4px</code></td>
      <td>Focus state border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-border-caret-width</code></td>
      <td><code>6px</code></td>
      <td><code>6px</code></td>
      <td>Caret border width</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Icon tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-root-component-icon-color</code></td>
      <td>
        <code>--c8y-palette-gray-30</code>
        <c8y-colortip codeLight="#4C5967" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-gray-30</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default icon color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-icon-dark-color-dark</code></td>
      <td>
        <code>--c8y-text-color</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-dark</code>
        <c8y-colortip codeDark="#bf8e00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Dark variant of icon color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-icon-dark-color-light</code></td>
      <td>
        <code>--c8y-brand-light</code>
        <c8y-colortip codeLight="#a5daa5" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-light</code>
        <c8y-colortip codeDark="#FBD462" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Light variant of icon color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-icon-white-color-dark</code></td>
      <td>
        <code>--c8y-palette-high</code>
        <c8y-colortip codeLight="#ffffff" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-dark</code>
        <c8y-colortip codeDark="#bf8e00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Dark variant of white icon color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-icon-white-color-light</code></td>
      <td>
        <code>--c8y-brand-light</code>
        <c8y-colortip codeLight="#a5daa5" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Light variant of white icon color</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Padding & Spacing tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-root-component-padding</code></td>
      <td><code>calc(var(--c8y-unit-base) * 2</code></td>
      <td><code>calc(var(--c8y-unit-base) * 2</code></td>
      <td>Default padding</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-padding-base-vertical</code></td>
      <td><code>calc(var(--c8y-unit-base) * 0.625</code></td>
      <td><code>calc(var(--c8y-unit-base) * 0.625</code></td>
      <td>Base vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-padding-base-horizontal</code></td>
      <td><code>--c8y-unit-base</code></td>
      <td><code>--c8y-unit-base</code></td>
      <td>Base horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-padding-small-vertical</code></td>
      <td><code>5px</code></td>
      <td><code>5px</code></td>
      <td>Small vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-padding-small-horizontal</code></td>
      <td><code>--c8y-unit-base</code></td>
      <td><code>--c8y-unit-base</code></td>
      <td>Small horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-padding-large-vertical</code></td>
      <td><code>9px</code></td>
      <td><code>9px</code></td>
      <td>Large vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-padding-large-horizontal</code></td>
      <td><code>calc(var(--c8y-unit-base) * 2</code></td>
      <td><code>calc(var(--c8y-unit-base) * 2</code></td>
      <td>Large horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-padding-xs-vertical</code></td>
      <td><code>1px</code></td>
      <td><code>1px</code></td>
      <td>Extra small vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-padding-xs-horizontal</code></td>
      <td><code>5px</code></td>
      <td><code>5px</code></td>
      <td>Extra small horizontal padding</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Scrollbar tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-root-component-scrollbar-thumb-default</code></td>
      <td><code>rgba(57, 72, 82, .2</code></td>
      <td><code>--c8y-palette-gray-80</code></td>
      <td>Default scrollbar thumb color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-scrollbar-thumb-hover</code></td>
      <td><code>--c8y-palette-gray-40</code></td>
      <td><code>--c8y-palette-gray-70</code></td>
      <td>Scrollbar thumb hover color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-scrollbar-track</code></td>
      <td><code>--c8y-component-background-default</code></td>
      <td><code>--c8y-component-background-default</code></td>
      <td>Scrollbar track color</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>State & Special tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-root-component-brand-primary</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Primary brand color</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-opacity-disabled</code></td>
      <td><code>--c8y-global-disabled-opacity</code></td>
      <td><code>--c8y-global-disabled-opacity</code></td>
      <td>Opacity for disabled state</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-actions-opacity</code></td>
      <td><code>--c8y-global-disabled-opacity</code></td>
      <td><code>--c8y-global-disabled-opacity</code></td>
      <td>Opacity for actions</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-pulse-color</code></td>
      <td>
        <code>--c8y-palette-status-realtime</code>
        <c8y-colortip codeLight="#00bb00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-status-realtime</code>
        <c8y-colortip codeDark="#00bb00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Color for pulse/realtime indicators</td>
    </tr>
    <tr>
      <td><code>--c8y-root-component-spinner-color</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Spinner color</td>
    </tr>
  </tbody>
</table>

## Alerts

<table class="table">
  <thead>
    <tr cass="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-alert-border-style</code></td>
      <td><code>solid</code></td>
      <td><code>solid</code></td>
      <td>Border style</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-border-width</code></td>
      <td><code>4px</code></td>
      <td><code>4px</code></td>
      <td>Border width</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-color-default</code></td>
      <td>
        <code>--c8y-root-component-color-default</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-default</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default text color</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-background-default</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td><code>--c8y-palette-gray-70</code></td>
      <td>Default background color</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-max-width</code></td>
      <td><code>600px</code></td>
      <td><code>600px</code></td>
      <td>Maximum width</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-padding</code></td>
      <td><code>16px 16px 16px 48px</code></td>
      <td><code>16px 16px 16px 48px</code></td>
      <td>Padding</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-status-symbol-font-family</code></td>
      <td><code>'dlt-c8y-icons'</code></td>
      <td><code>'dlt-c8y-icons'</code></td>
      <td>Status icon font family</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-status-symbol-size</code></td>
      <td><code>24px</code></td>
      <td><code>24px</code></td>
      <td>Status icon size</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-status-success</code></td>
      <td><code>--c8y-palette-status-success</code></td>
      <td><code>--c8y-palette-status-success</code></td>
      <td>Success status color</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-status-danger</code></td>
      <td><code>--c8y-palette-status-danger</code></td>
      <td><code>--c8y-palette-status-danger</code></td>
      <td>Danger status color</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-status-warning</code></td>
      <td><code>--c8y-palette-status-warning</code></td>
      <td><code>--c8y-palette-status-warning</code></td>
      <td>Warning status color</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-status-info</code></td>
      <td><code>--c8y-palette-status-info</code></td>
      <td><code>--c8y-palette-status-info</code></td>
      <td>Info status color</td>
    </tr>
    <tr>
      <td><code>--c8y-alert-status-system</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>System status color</td>
    </tr>
  </tbody>
</table>

## Badges

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-badge-border-radius</code></td>
      <td><code>10px</code></td>
      <td><code>10px</code></td>
      <td>Border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-badge-font-size</code></td>
      <td><code>--c8y-font-size-small</code></td>
      <td><code>--c8y-font-size-small</code></td>
      <td>Font size</td>
    </tr>
    <tr>
      <td><code>--c8y-badge-font-weight</code></td>
      <td><code>bold</code></td>
      <td><code>bold</code></td>
      <td>Font weight</td>
    </tr>
    <tr>
      <td><code>--c8y-badge-line-height</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td>Line height</td>
    </tr>
    <tr>
      <td><code>--c8y-badge-padding</code></td>
      <td><code>0.25em 0.4em 0.15em</code></td>
      <td><code>0.25em 0.4em 0.15em</code></td>
      <td>Padding</td>
    </tr>
  </tbody>
</table>

## Buttons

### General button tokens

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-btn-border-radius-base</code></td>
      <td><code>--btn-border-radius-base, 2px</code></td>
      <td><code>--btn-border-radius-base, 2px</code></td>
      <td>Base border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-border-radius-large</code></td>
      <td><code>calc(var(--btn-border-radius-base, 0) * 1.25px</code></td>
      <td><code>calc(var(--btn-border-radius-base, 0) * 1.25px</code></td>
      <td>Large button border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-border-radius-small</code></td>
      <td><code>calc(var(--btn-border-radius-base, 0) * 0.75px</code></td>
      <td><code>calc(var(--btn-border-radius-base, 0) * 0.75px</code></td>
      <td>Small button border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-border-radius-xs</code></td>
      <td><code>12px</code></td>
      <td><code>12px</code></td>
      <td>Extra small button border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-border-radius-pill</code></td>
      <td><code>24px</code></td>
      <td><code>24px</code></td>
      <td>Pill-shaped button border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-font-family</code></td>
      <td><code>--c8y-font-family-base</code></td>
      <td><code>--c8y-font-family-base</code></td>
      <td>Font family</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-font-size-base</code></td>
      <td><code>--c8y-font-size-base</code></td>
      <td><code>--c8y-font-size-base</code></td>
      <td>Base font size</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-font-size-large</code></td>
      <td><code>--c8y-font-size-large</code></td>
      <td><code>--c8y-font-size-large</code></td>
      <td>Large button font size</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-font-size-small</code></td>
      <td><code>--c8y-font-size-small</code></td>
      <td><code>--c8y-font-size-small</code></td>
      <td>Small button font size</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-font-size-xs</code></td>
      <td><code>--c8y-font-size-xs</code></td>
      <td><code>--c8y-font-size-xs</code></td>
      <td>Extra small button font size</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-font-weight</code></td>
      <td><code>--c8y-font-weight-base</code></td>
      <td><code>--c8y-font-weight-base</code></td>
      <td>Font weight</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-line-height-base</code></td>
      <td><code>--c8y-line-height-base</code></td>
      <td><code>--c8y-line-height-base</code></td>
      <td>Base line height</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-line-height-large</code></td>
      <td><code>1.2</code></td>
      <td><code>1.2</code></td>
      <td>Large button line height</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-line-height-small</code></td>
      <td><code>1.2</code></td>
      <td><code>1.2</code></td>
      <td>Small button line height</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-line-height-xs</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td>Extra small button line height</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-base-horizontal</code></td>
      <td><code>--c8y-root-component-padding-base-horizontal</code></td>
      <td><code>--c8y-root-component-padding-base-horizontal</code></td>
      <td>Base horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-base-vertical</code></td>
      <td><code>--c8y-root-component-padding-base-vertical</code></td>
      <td><code>--c8y-root-component-padding-base-vertical</code></td>
      <td>Base vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-large-horizontal</code></td>
      <td><code>16px</code></td>
      <td><code>16px</code></td>
      <td>Large button horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-large-vertical</code></td>
      <td><code>9px</code></td>
      <td><code>9px</code></td>
      <td>Large button vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-small-horizontal</code></td>
      <td><code>14px</code></td>
      <td><code>14px</code></td>
      <td>Small button horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-small-vertical</code></td>
      <td><code>5px</code></td>
      <td><code>5px</code></td>
      <td>Small button vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-xs-horizontal</code></td>
      <td><code>10px</code></td>
      <td><code>10px</code></td>
      <td>Extra small button horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-xs-vertical</code></td>
      <td><code>1px</code></td>
      <td><code>1px</code></td>
      <td>Extra small button vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-icon-horizontal</code></td>
      <td><code>9px</code></td>
      <td><code>9px</code></td>
      <td>Icon button horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-padding-icon-vertical</code></td>
      <td><code>--c8y-root-component-padding-base-vertical</code></td>
      <td><code>--c8y-root-component-padding-base-vertical</code></td>
      <td>Icon button vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-shadow-default</code></td>
      <td><code>none</code></td>
      <td><code>none</code></td>
      <td>Default button shadow</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-transition-default</code></td>
      <td><code>all 0.15s ease-out</code></td>
      <td><code>all 0.15s ease-out</code></td>
      <td>Default transition</td>
    </tr>
  </tbody>
</table>

### Primary button

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-btn-primary-color-default</code></td>
      <td>
        <code>--c8y-palette-high</code>
        <c8y-colortip codeLight="#ffffff" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-low</code>
        <c8y-colortip codeDark="#1e2124" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default text color</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-primary-color-hover</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-primary-color-active</code></td>
      <td>
        <code>--c8y-palette-high</code>
        <c8y-colortip codeLight="#ffffff" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-high</code>
        <c8y-colortip codeDark="#ffffff" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color when active</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-primary-background-default</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Default background</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-primary-background-hover</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td>Background on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-primary-background-active</code></td>
      <td><code>--c8y-brand-10</code></td>
      <td><code>--c8y-brand-70</code></td>
      <td>Background when active</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-primary-border-color-default</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Default border color</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-primary-border-color-hover</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Border color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-primary-border-color-active</code></td>
      <td><code>--c8y-brand-20</code></td>
      <td><code>--c8y-brand-70</code></td>
      <td>Border color when active</td>
    </tr>
  </tbody>
</table>

### Default button

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-btn-default-color-default</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default text color</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-default-color-hover</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-default-color-active</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-10</code>
        <c8y-colortip codeDark="#4e3a00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color when active</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-default-background-default</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td><code>transparent</code></td>
      <td>Default background</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-default-background-hover</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td><code>transparent</code></td>
      <td>Background on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-default-background-active</code></td>
      <td><code>--c8y-brand-70</code></td>
      <td><code>--c8y-brand-40</code></td>
      <td>Background when active</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-default-border-color-default</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Default border color</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-default-border-color-hover</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Border color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-default-border-color-active</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Border color when active</td>
    </tr>
  </tbody>
</table>

### Danger button

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-btn-danger-color-default</code></td>
      <td>
        <code>--c8y-palette-status-danger</code>
        <c8y-colortip codeLight="#d70f0f" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-high</code>
        <c8y-colortip codeDark="#ffffff" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default text color</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-danger-color-hover</code></td>
      <td>
        <code>--c8y-palette-status-danger</code>
        <c8y-colortip codeLight="#d70f0f" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-status-danger</code>
        <c8y-colortip codeDark="#DC5B68" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-danger-color-active</code></td>
      <td>
        <code>--c8y-palette-high</code>
        <c8y-colortip codeLight="#ffffff" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-high</code>
        <c8y-colortip codeDark="#ffffff" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color when active</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-danger-background-default</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td><code>--c8y-palette-status-danger</code></td>
      <td>Default background</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-danger-background-hover</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td><code>--c8y-palette-high</code></td>
      <td>Background on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-danger-background-active</code></td>
      <td><code>--c8y-palette-status-danger-dark</code></td>
      <td><code>--c8y-palette-status-danger-dark</code></td>
      <td>Background when active</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-danger-border-color-default</code></td>
      <td><code>--c8y-palette-status-danger</code></td>
      <td><code>--c8y-palette-status-danger</code></td>
      <td>Default border color</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-danger-border-color-hover</code></td>
      <td><code>--c8y-palette-status-danger</code></td>
      <td><code>--c8y-palette-status-danger</code></td>
      <td>Border color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-btn-danger-border-color-active</code></td>
      <td><code>--c8y-palette-status-danger-dark</code></td>
      <td><code>--c8y-palette-status-danger-dark</code></td>
      <td>Border color when active</td>
    </tr>
  </tbody>
</table>


## Form controls

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-form-control-color-default</code></td>
      <td>
        <code>--c8y-root-component-color-default</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-default</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default text color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-color-disabled</code></td>
      <td>
        <code>--c8y-root-component-color-disabled</code>
        <c8y-colortip codeLight="#E3E5E8" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-disabled</code>
        <c8y-colortip codeDark="#4e5154" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Disabled text color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-color-focus</code></td>
      <td>
        <code>--c8y-component-color-default</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-component-color-default</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Focus text color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-background-default</code></td>
      <td><code>--c8y-component-background-default</code></td>
      <td><code>--c8y-component-background-default</code></td>
      <td>Default background</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-background-disabled</code></td>
      <td><code>--c8y-component-background-disabled</code></td>
      <td><code>--c8y-component-background-disabled</code></td>
      <td>Disabled background</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-background-focus</code></td>
      <td><code>--c8y-component-background-default</code></td>
      <td><code>--c8y-component-background-default</code></td>
      <td>Focus background</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-border-color-default</code></td>
      <td><code>--c8y-palette-gray-60</code></td>
      <td><code>--c8y-palette-gray-70</code></td>
      <td>Default border color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-border-color-focus</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Focus border color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-border-width</code></td>
      <td><code>1px</code></td>
      <td><code>1px</code></td>
      <td>Border width</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-border-radius</code></td>
      <td><code>--c8y-root-component-border-radius-base</code></td>
      <td><code>--c8y-root-component-border-radius-base</code></td>
      <td>Border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-disabled-opacity</code></td>
      <td><code>--c8y-global-disabled-opacity</code></td>
      <td><code>--c8y-global-disabled-opacity</code></td>
      <td>Disabled state opacity</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-font-family</code></td>
      <td><code>--c8y-font-family-base</code></td>
      <td><code>--c8y-font-family-base</code></td>
      <td>Font family</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-font-weight</code></td>
      <td><code>normal</code></td>
      <td><code>normal</code></td>
      <td>Font weight</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-height-base</code></td>
      <td><code>32px</code></td>
      <td><code>32px</code></td>
      <td>Base height</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-height-sm</code></td>
      <td><code>28px</code></td>
      <td><code>28px</code></td>
      <td>Small height</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-height-lg</code></td>
      <td><code>40px</code></td>
      <td><code>40px</code></td>
      <td>Large height</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-icon-color</code></td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Icon color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-line-height</code></td>
      <td><code>1.42857143</code></td>
      <td><code>1.42857143</code></td>
      <td>Line height</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-padding-base-horizontal</code></td>
      <td><code>--c8y-root-component-padding-base-horizontal</code></td>
      <td><code>--c8y-root-component-padding-base-horizontal</code></td>
      <td>Base horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-padding-base-vertical</code></td>
      <td><code>--c8y-root-component-padding-base-vertical</code></td>
      <td><code>--c8y-root-component-padding-base-vertical</code></td>
      <td>Base vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-placeholder-color</code></td>
      <td>
        <code>--c8y-palette-gray-40</code>
        <c8y-colortip codeLight="#657381" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-gray-40</code>
        <c8y-colortip codeDark="#b5b7b9" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Placeholder text color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-control-placeholder-font-style</code></td>
      <td><code>italic</code></td>
      <td><code>italic</code></td>
      <td>Placeholder font style</td>
    </tr>
  </tbody>
</table>

## Form labels

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-form-label-color</code></td>
      <td>
        <code>--c8y-palette-gray-20</code>
        <c8y-colortip codeLight="#2A3846" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-text-color</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Label text color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-label-font-size</code></td>
      <td><code>--c8y-font-size-base</code></td>
      <td><code>--c8y-font-size-base</code></td>
      <td>Label font size</td>
    </tr>
    <tr>
      <td><code>--c8y-form-label-font-weight</code></td>
      <td><code>600</code></td>
      <td><code>600</code></td>
      <td>Label font weight</td>
    </tr>
    <tr>
      <td><code>--c8y-form-label-text-transform</code></td>
      <td><code>none</code></td>
      <td><code>none</code></td>
      <td>Label text transform</td>
    </tr>
  </tbody>
</table>

## Form legends

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-form-legend-color</code></td>
      <td>
        <code>--c8y-palette-gray-40</code>
        <c8y-colortip codeLight="#657381" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-text-color</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Legend text color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-legend-font-size</code></td>
      <td><code>--c8y-font-size-small</code></td>
      <td><code>--c8y-font-size-small</code></td>
      <td>Legend font size</td>
    </tr>
    <tr>
      <td><code>--c8y-form-legend-font-weight</code></td>
      <td><code>400</code></td>
      <td><code>400</code></td>
      <td>Legend font weight</td>
    </tr>
    <tr>
      <td><code>--c8y-form-legend-text-transform</code></td>
      <td><code>uppercase</code></td>
      <td><code>uppercase</code></td>
      <td>Legend text transform</td>
    </tr>
  </tbody>
</table>

## Form validation

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-form-validation-color-success</code></td>
      <td><code>--c8y-palette-status-success</code></td>
      <td><code>--c8y-palette-status-success</code></td>
      <td>Success validation color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-validation-color-error</code></td>
      <td><code>--c8y-palette-status-danger</code></td>
      <td><code>--c8y-palette-status-danger</code></td>
      <td>Error validation color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-validation-color-warning</code></td>
      <td><code>--c8y-palette-status-warning</code></td>
      <td><code>--c8y-palette-status-warning</code></td>
      <td>Warning validation color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-validation-color-info</code></td>
      <td><code>--c8y-palette-status-info</code></td>
      <td><code>--c8y-palette-status-info</code></td>
      <td>Info validation color</td>
    </tr>
    <tr>
      <td><code>--c8y-form-validation-bottom-margin</code></td>
      <td><code>24px</code></td>
      <td><code>24px</code></td>
      <td>Bottom margin for validation messages</td>
    </tr>
  </tbody>
</table>

## Nav tabs

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-nav-tabs-background-default</code></td>
      <td><code>transparent</code></td>
      <td><code>transparent</code></td>
      <td>Default background</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-background-hover</code></td>
      <td><code>transparent</code></td>
      <td><code>transparent</code></td>
      <td>Background on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-background-active</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td>Background when active</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-background-focus</code></td>
      <td><code>--c8y-navlink-background-focus</code></td>
      <td><code>--c8y-navlink-background-focus</code></td>
      <td>Background when focused</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-border-width-default</code></td>
      <td><code>1px</code></td>
      <td><code>1px</code></td>
      <td>Default border width</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-border-width-active</code></td>
      <td><code>4px</code></td>
      <td><code>4px</code></td>
      <td>Active border width</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-vertical-width</code></td>
      <td><code>170px</code></td>
      <td><code>170px</code></td>
      <td>Width for vertical tabs</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-border-color-default</code></td>
      <td><code>--c8y-root-component-border-color</code></td>
      <td><code>--c8y-root-component-border-color</code></td>
      <td>Default border color</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-border-color-active</code></td>
      <td><code>--c8y-root-component-brand-primary</code></td>
      <td><code>--c8y-root-component-brand-primary</code></td>
      <td>Active border color</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-padding-vertical</code></td>
      <td><code>--c8y-navlink-padding-vertical</code></td>
      <td><code>--c8y-navlink-padding-vertical</code></td>
      <td>Vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-padding-horizontal</code></td>
      <td><code>calc(var(--c8y-unit-base) * 2</code></td>
      <td><code>calc(var(--c8y-unit-base) * 2</code></td>
      <td>Horizontal padding</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-icon-color-default</code></td>
      <td><code>--c8y-palette-gray-40</code></td>
      <td><code>--c8y-palette-gray-40</code></td>
      <td>Default icon color</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-icon-color-hover</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Icon color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-icon-color-focus</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Icon color when focused</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-tabs-icon-color-active</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Icon color when active</td>
    </tr>
  </tbody>
</table>

## Nav pills

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-nav-pills-background-default</code></td>
      <td><code>--c8y-navlink-background-default</code></td>
      <td><code>--c8y-navlink-background-default</code></td>
      <td>Default background</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-pills-background-hover</code></td>
      <td><code>--c8y-navlink-background-hover</code></td>
      <td><code>--c8y-navlink-background-hover</code></td>
      <td>Background on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-pills-background-active</code></td>
      <td><code>--c8y-navlink-background-active</code></td>
      <td><code>--c8y-navlink-background-active</code></td>
      <td>Background when active</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-pills-background-focus</code></td>
      <td><code>--c8y-navlink-background-focus</code></td>
      <td><code>--c8y-navlink-background-focus</code></td>
      <td>Background when focused</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-pills-border-radius</code></td>
      <td><code>calc(var(--c8y-unit-base) * 2</code></td>
      <td><code>calc(var(--c8y-unit-base) * 2</code></td>
      <td>Border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-pills-padding-vertical</code></td>
      <td><code>--c8y-navlink-padding-vertical</code></td>
      <td><code>--c8y-navlink-padding-vertical</code></td>
      <td>Vertical padding</td>
    </tr>
    <tr>
      <td><code>--c8y-nav-pills-padding-horizontal</code></td>
      <td><code>--c8y-navlink-padding-horizontal</code></td>
      <td><code>--c8y-navlink-padding-horizontal</code></td>
      <td>Horizontal padding</td>
    </tr>
  </tbody>
</table>

## Tooltips

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-tooltip-width</code></td>
      <td><code>200px</code></td>
      <td><code>200px</code></td>
      <td>Maximum width</td>
    </tr>
    <tr>
      <td><code>--c8y-tooltip-border-radius</code></td>
      <td><code>3px</code></td>
      <td><code>3px</code></td>
      <td>Border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-tooltip-arrow-width</code></td>
      <td><code>5px</code></td>
      <td><code>5px</code></td>
      <td>Arrow width</td>
    </tr>
    <tr>
      <td><code>--c8y-tooltip-opacity</code></td>
      <td><code>.95</code></td>
      <td><code>.95</code></td>
      <td>Tooltip opacity</td>
    </tr>
  </tbody>
</table>

## Popovers

<table class="table">
  <thead>
    <tr class="page-sticky-header">
      <th>Tokens</th>
      <th>Light Theme</th>
      <th>Dark Theme</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--c8y-popover-width</code></td>
      <td><code>276px</code></td>
      <td><code>276px</code></td>
      <td>Maximum width</td>
    </tr>
    <tr>
      <td><code>--c8y-popover-border-radius</code></td>
      <td><code>4px</code></td>
      <td><code>4px</code></td>
      <td>Border radius</td>
    </tr>
    <tr>
      <td><code>--c8y-popover-arrow-width</code></td>
      <td><code>10px</code></td>
      <td><code>10px</code></td>
      <td>Arrow width</td>
    </tr>
    <tr>
      <td><code>--c8y-popover-padding</code></td>
      <td><code>--c8y-root-component-padding</code></td>
      <td><code>--c8y-root-component-padding</code></td>
      <td>Padding</td>
    </tr>
    <tr>
      <td><code>--c8y-popover-icon-color</code></td>
      <td>
        <code>--c8y-root-component-icon-color</code>
        <c8y-colortip codeLight="#4C5967" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-icon-color</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Icon color</td>
    </tr>
    <tr>
      <td><code>--c8y-popover-color-link</code></td>
      <td>
        <code>--c8y-root-component-color-link</code>
        <c8y-colortip codeLight="#1481b8" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-link</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Link color</td>
    </tr>
    <tr>
      <td><code>--c8y-popover-color-link-hover</code></td>
      <td>
        <code>--c8y-root-component-color-link-hover</code>
        <c8y-colortip codeLight="#1481b8" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-link-hover</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Link hover color</td>
    </tr>
    <tr>
      <td><code>--c8y-popover-label-color</code></td>
      <td>
        <code>--c8y-root-component-form-label-color</code>
        <c8y-colortip codeLight="#2A3846" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-form-label-color</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Label color</td>
    </tr>
  </tbody>
</table>
