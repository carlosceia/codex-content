---
title: Application tokens
slug: application-tokens
icon: done
order: 20
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->
The application tokens define the core visual elements and layout structure of the
application. These tokens establish the base styling for primary navigation components and
fundamental design properties that create a consistent visual framework across the platform.

Unlike component-specific tokens that style individual UI elements, application tokens control:

- Primary navigation structures (Main header, Navigator, Right drawer)
- Global action patterns (Action bar)
- Core visual properties (typography, colors, spacing)
- Layout fundamentals (elevation, borders, backgrounds)

> ### Accessibility matters
>
> We prioritize accessibility in our color selections, adhering to WCAG 2.1 level AA standards.  
> While it's crucial for all elements, our focus on achieving accessibility is through the contrast
> between text and its background color. Normal text maintains a 4.5:1 contrast ratio, while large
> text holds a 3:1 ratio. For contrast calculations, we use `#ffffff` — the light theme default
> component background color, and `#23262A` — the dark theme default component background color.

## Main header

Holds the navigator toggle button, page title, breadcrumbs, optional search, application switcher,
and the user badge that also toggles the right drawer.

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
      <td><code>--c8y-main-header-background-default</code></td>
      <td><code>--c8y-palette-high</code></td>
      <td><code>--c8y-palette-low</code></td>
      <td>Default background color</td>
    </tr>
    <tr>
      <td><code>--c8y-main-header-background-hover</code></td>
      <td><code>inherit</code></td>
      <td><code>inherit</code></td>
      <td>Background color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-main-header-background-active</code></td>
      <td><code>--c8y-brand-70</code></td>
      <td><code>--c8y-brand-20</code></td>
      <td>Background color when active</td>
    </tr>
    <tr>
      <td><code>--c8y-main-header-text-color-default</code></td>
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
      <td><code>--c8y-main-header-text-color-hover</code></td>
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
      <td><code>--c8y-main-header-border-color</code></td>
      <td><code>transparent</code></td>
      <td><code>transparent</code></td>
      <td>Border color</td>
    </tr>
    <tr>
      <td><code>--c8y-main-header-shadow</code></td>
      <td><code>--c8y-elevation-md-bottom</code></td>
      <td><code>inset 0 -1px 0 var(--c8y-global-separator</code></td>
      <td>Shadow effect</td>
    </tr>
  </tbody>
</table>

## Navigator

The application's main navigation. A tree indicates the content's hierarchy.

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
      <td><code>--c8y-navigator-background-default</code></td>
      <td><code>--c8y-palette-gray-100</code></td>
      <td><code>--c8y-palette-low</code></td>
      <td>Default background color</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-background-selected</code></td>
      <td><code>--c8y-palette-gray-80</code></td>
      <td><code>--c8y-palette-gray-90</code></td>
      <td>Background color for selected items</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-background-active</code></td>
      <td><code>--c8y-brand-70</code></td>
      <td><code>--c8y-brand-20</code></td>
      <td>Background color when active</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-text-color-default</code></td>
      <td>
        <code>--c8y-palette-gray-10</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-gray-20</code>
        <c8y-colortip codeDark="#dedee0" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default text color</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-text-color-selected</code></td>
      <td>
        <code>--c8y-navigator-text-color-default</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-navigator-text-color-default</code>
        <c8y-colortip codeDark="#dedee0" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color for selected items</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-text-color-active</code></td>
      <td>
        <code>--c8y-navigator-text-color-default</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-navigator-text-color-default</code>
        <c8y-colortip codeDark="#dedee0" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color when active</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-separator-color</code></td>
      <td><code>--c8y-palette-gray-70</code></td>
      <td><code>--c8y-palette-gray-80</code></td>
      <td>Color for separators</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-border-selected</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Border color for selected items</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-header-color</code></td>
      <td>
        <code>--c8y-navigator-text-color-default</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-navigator-text-color-default</code>
        <c8y-colortip codeDark="#dedee0" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Header text color</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-header-background</code></td>
      <td><code>--c8y-navigator-background-default</code></td>
      <td><code>--c8y-navigator-background-default</code></td>
      <td>Header background color</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-scrollbar-thumb-default</code></td>
      <td><code>--c8y-root-component-scrollbar-thumb-default</code></td>
      <td><code>--c8y-root-component-scrollbar-thumb-default</code></td>
      <td>Default scrollbar thumb color</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-scrollbar-thumb-hover</code></td>
      <td><code>--c8y-root-component-scrollbar-thumb-hover</code></td>
      <td><code>--c8y-root-component-scrollbar-thumb-hover</code></td>
      <td>Scrollbar thumb color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-scrollbar-track</code></td>
      <td><code>--c8y-root-component-scrollbar-track</code></td>
      <td><code>--c8y-root-component-scrollbar-track</code></td>
      <td>Scrollbar track color</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-font-size</code></td>
      <td><code>--c8y-font-size-base</code></td>
      <td><code>--c8y-font-size-base</code></td>
      <td>Font size</td>
    </tr>
    <tr>
      <td><code>--c8y-navigator-font-family</code></td>
      <td><code>--c8y-font-family-base</code></td>
      <td><code>--c8y-font-family-base</code></td>
      <td>Font family</td>
    </tr>
  </tbody>
</table>

## Right drawer

The right drawer holds access to the user profile and other settings.

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
      <td><code>--c8y-right-drawer-background-default</code></td>
      <td><code>--c8y-palette-gray-100</code></td>
      <td><code>--c8y-palette-low</code></td>
      <td>Default background color</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-background-selected</code></td>
      <td><code>--c8y-palette-gray-80</code></td>
      <td><code>--c8y-palette-gray-90</code></td>
      <td>Background color for selected items</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-background-active</code></td>
      <td><code>--c8y-brand-70</code></td>
      <td><code>--c8y-brand-20</code></td>
      <td>Background color when active</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-text-color-default</code></td>
      <td>
        <code>--c8y-palette-gray-10</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-gray-20</code>
        <c8y-colortip codeDark="#dedee0" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default text color</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-text-color-selected</code></td>
      <td>
        <code>--c8y-right-drawer-text-color-default</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-right-drawer-text-color-default</code>
        <c8y-colortip codeDark="#dedee0" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color for selected items</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-text-color-active</code></td>
      <td>
        <code>--c8y-right-drawer-text-color-default</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-right-drawer-text-color-default</code>
        <c8y-colortip codeDark="#dedee0" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Text color when active</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-separator-color</code></td>
      <td><code>--c8y-palette-gray-70</code></td>
      <td><code>--c8y-palette-gray-80</code></td>
      <td>Color for separators</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-border-selected</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td><code>--c8y-brand-primary</code></td>
      <td>Border color for selected items</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-text-color-muted</code></td>
      <td>
        <code>--c8y-root-component-color-text-muted</code>
        <c8y-colortip codeLight="#657381" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-text-muted</code>
        <c8y-colortip codeDark="#b5b7b9" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Color for muted text</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-link-color-default</code></td>
      <td>
        <code>--c8y-root-component-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default link color</td>
    </tr>
    <tr>
      <td><code>--c8y-right-drawer-link-color-hover</code></td>
      <td>
        <code>--c8y-root-component-brand-primary</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Link color on hover</td>
    </tr>
  </tbody>
</table>

## Action bar

The action bar offers a user-friendly interface for global action patterns.

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
      <td><code>--c8y-action-bar-background-default</code></td>
      <td><code>--c8y-root-component-background-default</code></td>
      <td><code>--c8y-palette-low</code></td>
      <td>Default background color</td>
    </tr>
    <tr>
      <td><code>--c8y-action-bar-border-color</code></td>
      <td><code>--c8y-root-component-border-color</code></td>
      <td><code>--c8y-root-component-border-color</code></td>
      <td>Border color</td>
    </tr>
    <tr>
      <td><code>--c8y-action-bar-color-default</code></td>
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
      <td><code>--c8y-action-bar-color-text-muted</code></td>
      <td>
        <code>--c8y-root-component-color-text-muted</code>
        <c8y-colortip codeLight="#657381" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-text-muted</code>
        <c8y-colortip codeDark="#b5b7b9" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Muted text color</td>
    </tr>
    <tr>
      <td><code>--c8y-action-bar-color-actions</code></td>
      <td>
        <code>--c8y-root-component-color-actions</code>
        <c8y-colortip codeLight="#4C5967" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-actions</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Actions color</td>
    </tr>
    <tr>
      <td><code>--c8y-action-bar-color-actions-hover</code></td>
      <td>
        <code>--c8y-root-component-color-actions-hover</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-actions-hover</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Actions hover color</td>
    </tr>
    <tr>
      <td><code>--c8y-action-bar-color-focus</code></td>
      <td>
        <code>--c8y-root-component-color-focus</code>
        <c8y-colortip codeLight="#119d11" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-root-component-color-focus</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Focus state color</td>
    </tr>
    <tr>
      <td><code>--c8y-action-bar-icon-color</code></td>
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
      <td><code>--c8y-action-bar-disabled-opacity</code></td>
      <td><code>--c8y-root-component-opacity-disabled</code></td>
      <td><code>--c8y-root-component-opacity-disabled</code></td>
      <td>Disabled state opacity</td>
    </tr>
    <tr>
      <td><code>--c8y-action-bar-actions-opacity</code></td>
      <td><code>--c8y-root-component-actions-opacity</code></td>
      <td><code>--c8y-root-component-actions-opacity</code></td>
      <td>Actions opacity</td>
    </tr>
  </tbody>
</table>

## Text colors & Typography

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
      <td><code>--c8y-text-color</code></td>
      <td>
        <code>--c8y-palette-gray-10</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-gray-30</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Primary text color</td>
    </tr>
    <tr>
      <td><code>--c8y-text-muted</code></td>
      <td>
        <code>--c8y-palette-gray-40</code>
        <c8y-colortip codeLight="#657381" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-palette-gray-40</code>
        <c8y-colortip codeDark="#b5b7b9" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Secondary/muted text color</td>
    </tr>
    <tr>
      <td><code>--c8y-headings-color</code></td>
      <td>
        <code>inherit</code>
        <c8y-colortip codeLight="#212121" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>inherit</code>
        <c8y-colortip codeDark="#cacbcc" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Color for headings</td>
    </tr>
    <tr>
      <td><code>--c8y-link-color</code></td>
      <td>
        <code>#1481b8</code>
        <c8y-colortip codeLight="#1481b8" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Default link color</td>
    </tr>
    <tr>
      <td><code>--c8y-link-hover-color</code></td>
      <td>
        <code>#1481b8</code>
        <c8y-colortip codeLight="#1481b8" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>
        <code>--c8y-brand-primary</code>
        <c8y-colortip codeDark="#ffbe00" [contrastOnly]="true"></c8y-colortip>
      </td>
      <td>Link color on hover</td>
    </tr>
    <tr>
      <td><code>--c8y-font-family-base</code></td>
      <td><code>--c8y-font-family-sans-serif</code></td>
      <td><code>--c8y-font-family-sans-serif</code></td>
      <td>Base font family</td>
    </tr>
    <tr>
      <td><code>--c8y-font-family-sans-serif</code></td>
      <td><code>'Public Sans', Helvetica, Arial, sans-serif</code></td>
      <td><code>'Public Sans', Helvetica, Arial, sans-serif</code></td>
      <td>Sans-serif font stack</td>
    </tr>
    <tr>
      <td><code>--c8y-font-family-mono-spaced</code></td>
      <td><code>Menlo, Monaco, Consolas, 'Courier New', monospace</code></td>
      <td><code>Menlo, Monaco, Consolas, 'Courier New', monospace</code></td>
      <td>Monospace font stack</td>
    </tr>
    <tr>
      <td><code>--c8y-font-size-base</code></td>
      <td><code>14px</code></td>
      <td><code>14px</code></td>
      <td>Base font size</td>
    </tr>
    <tr>
      <td><code>--c8y-font-weight-base</code></td>
      <td><code>400</code></td>
      <td><code>400</code></td>
      <td>Base font weight</td>
    </tr>
    <tr>
      <td><code>--c8y-font-weight-headings</code></td>
      <td><code>600</code></td>
      <td><code>600</code></td>
      <td>Headings font weight</td>
    </tr>
    <tr>
      <td><code>--c8y-line-height-base</code></td>
      <td><code>1.42857142857</code></td>
      <td><code>1.42857142857</code></td>
      <td>Base line height</td>
    </tr>
    <tr>
      <td><code>--c8y-line-height-headings</code></td>
      <td><code>1.1</code></td>
      <td><code>1.1</code></td>
      <td>Headings line height</td>
    </tr>
  </tbody>
</table>

## Background & Surface

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
      <td><code>--c8y-body-background-color</code></td>
      <td><code>--c8y-palette-high</code></td>
      <td><code>--c8y-palette-low</code></td>
      <td>Main body background color</td>
    </tr>
    <tr>
      <td><code>--c8y-global-odd</code></td>
      <td><code>linear-gradient(to top,var(--c8y-palette-gray-90), var(--c8y-palette-gray-90)</code></td>
      <td><code>linear-gradient(to top,rgba(255, 255, 255, .03), rgba(255, 255, 255, 0.03)</code></td>
      <td>Global alternate background</td>
    </tr>
    <tr>
      <td><code>--c8y-level-0</code></td>
      <td><code>--c8y-body-background-color</code></td>
      <td><code>--c8y-palette-gray-100</code></td>
      <td>Base level background</td>
    </tr>
    <tr>
      <td><code>--c8y-level-1</code></td>
      <td><code>--c8y-palette-gray-100</code></td>
      <td><code>--c8y-palette-gray-90</code></td>
      <td>First level surface</td>
    </tr>
    <tr>
      <td><code>--c8y-level-2</code></td>
      <td><code>--c8y-palette-gray-90</code></td>
      <td><code>--c8y-palette-gray-80</code></td>
      <td>Second level surface</td>
    </tr>
    <tr>
      <td><code>--c8y-level-3</code></td>
      <td><code>--c8y-palette-gray-80</code></td>
      <td><code>--c8y-palette-gray-70</code></td>
      <td>Third level surface</td>
    </tr>
    <tr>
      <td><code>--c8y-level-4</code></td>
      <td><code>--c8y-palette-gray-70</code></td>
      <td><code>--c8y-palette-gray-60</code></td>
      <td>Fourth level surface</td>
    </tr>
  </tbody>
</table>

## Border & Separator

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
      <td><code>--c8y-global-separator</code></td>
      <td><code>--c8y-palette-gray-80</code></td>
      <td><code>--c8y-palette-gray-70</code></td>
      <td>Color for separators and dividers</td>
    </tr>
    <tr>
      <td><code>--c8y-code-border-color</code></td>
      <td><code>transparent</code></td>
      <td><code>transparent</code></td>
      <td>Border color for code elements</td>
    </tr>
    <tr>
      <td><code>--c8y-code-border-radius</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td>Border radius for code elements</td>
    </tr>
    <tr>
      <td><code>--c8y-pre-border-radius</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td>Border radius for pre elements</td>
    </tr>
    <tr>
      <td><code>--c8y-blockquote-border-color</code></td>
      <td><code>transparent</code></td>
      <td><code>transparent</code></td>
      <td>Border color for blockquotes</td>
    </tr>
  </tbody>
</table>


## Spacing & Layout

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
      <td><code>--c8y-unit-base</code></td>
      <td><code>8px</code></td>
      <td><code>8px</code></td>
      <td>Base unit for spacing calculations</td>
    </tr>
    <tr>
      <td><code>--c8y-global-disabled-opacity</code></td>
      <td><code>.55</code></td>
      <td><code>.55</code></td>
      <td>Global disabled opacity value</td>
    </tr>
    <tr>
      <td><code>--c8y-table-cell-padding-default</code></td>
      <td><code>13px</code></td>
      <td><code>13px</code></td>
      <td>Default table cell padding</td>
    </tr>
    <tr>
      <td><code>--c8y-table-cell-padding-condensed</code></td>
      <td><code>--c8y-unit-base</code></td>
      <td><code>--c8y-unit-base</code></td>
      <td>Condensed table cell padding</td>
    </tr>
    <tr>
      <td><code>--c8y-dl-horizontal-offset</code></td>
      <td><code>180</code></td>
      <td><code>180</code></td>
      <td>Horizontal offset for description lists</td>
    </tr>
  </tbody>
</table>

## Elevation & Shadows

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
      <td><code>--c8y-elevation-color</code></td>
      <td><code>1, 31, 61</code></td>
      <td><code>1, 31, 61</code></td>
      <td>RGB values for elevation shadows</td>
    </tr>
    <tr>
      <td><code>--c8y-elevation-sm</code></td>
      <td><code>0 0 1px 1px rgba(var(--c8y-elevation-color), .05), 0 2px 2px rgba(var(--c8y-elevation-color), .15</code></td>
      <td><code>none</code></td>
      <td>Small elevation for cards, dropdowns</td>
    </tr>
    <tr>
      <td><code>--c8y-elevation-md-bottom</code></td>
      <td><code>0 2px 12px 2px rgba(var(--c8y-elevation-color), .08), 0 2px 18px 4px rgba(var(--c8y-elevation-color), .1</code></td>
      <td><code>none</code></td>
      <td>Medium elevation bottom shadow</td>
    </tr>
    <tr>
      <td><code>--c8y-elevation-md-top</code></td>
      <td><code>0 -2px 12px 2px rgba(var(--c8y-elevation-color), .08), 0 -4px 18px 4px rgba(var(--c8y-elevation-color), .1</code></td>
      <td><code>none</code></td>
      <td>Medium elevation top shadow</td>
    </tr>
    <tr>
      <td><code>--c8y-elevation-md-left</code></td>
      <td><code>-4px 0 12px 2px rgba(var(--c8y-elevation-color), .08), -4px 0 18px 4px rgba(var(--c8y-elevation-color), .1</code></td>
      <td><code>none</code></td>
      <td>Medium elevation left shadow</td>
    </tr>
    <tr>
      <td><code>--c8y-elevation-md-right</code></td>
      <td><code>4px 0 12px 2px rgba(var(--c8y-elevation-color), .08), 4px 0 18px 4px rgba(var(--c8y-elevation-color), .1</code></td>
      <td><code>none</code></td>
      <td>Medium elevation right shadow</td>
    </tr>
    <tr>
      <td><code>--c8y-elevation-lg</code></td>
      <td><code>0 0 4px rgba(var(--c8y-elevation-color), .10), 0 8px 16px rgba(var(--c8y-elevation-color), .12), 0 0 16px rgba(var(--c8y-elevation-color), .04), 0 36px 52px rgba(var(--c8y-elevation-color), .05), 0 8px 36px rgba(var(--c8y-elevation-color), .16</code></td>
      <td><code>none</code></td>
      <td>Large elevation for modals</td>
    </tr>
    <tr>
      <td><code>--c8y-elevation-hover</code></td>
      <td><code>0 0 0 1px rgba(var(--c8y-elevation-color), .05), 0 4px 4px rgba(var(--c8y-elevation-color), 0.01), 0 8px 8px rgba(var(--c8y-elevation-color), 0.01), 0 16px 16px rgba(var(--c8y-elevation-color), 0.03), 0 32px 32px rgba(var(--c8y-elevation-color), 0.05), 0 16px 64px rgba(var(--c8y-elevation-color), .1</code></td>
      <td><code>none</code></td>
      <td>Hover state elevation</td>
    </tr>
    <tr>
      <td><code>--c8y-elevation-border</code></td>
      <td><code>inset 0 0 0 1px var(--c8y-palette-gray-80</code></td>
      <td><code>inset 0 0 0 1px var(--c8y-palette-gray-80</code></td>
      <td>Border elevation for menus, tooltips</td>
    </tr>
  </tbody>
</table>
