---
title: Branding tokens
slug: branding-tokens
icon: done
order: 40
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD037 -->

To accommodate diverse aesthetics and meet unique branding needs, Cumulocity features a
theme-able user interface.

The tokens listed below allow for seamless customization, ensuring alignment with each customer
visual identity for a cohesive and personalized user experience.

For easier customization, the brand editor is available in the administration settings. Check the
[documentation](https://cumulocity.com/docs/enterprise-tenant/customization/#branding) for more
information.

## Logo

The logo displayed in the login page and on the navigator. If the dark theme is supported, it is
required to provide versions for both light and dark themes.

| Branding var | fallback light theme | fallback dark theme |
|-------------------------------|------------------------------|----------------------------|
| `--brand-logo-img`              | img/logo-platform.svg        | img/logo-platform-white.svg |
| `--brand-logo-img-height`       | `--c8y-brand-logo-img-height` | n/a  |
| `--navigator-platform-logo`     | img/logo-platform.svg       | img/logo-platform-white.svg |
| `--navigator-platform-logo-height` | `--c8y-navigator-platform-logo-height` | n/a |

## Brand colors

At the core of our design, these colors can be customized to match the customer brand.

When using the brand editor, the shades are automatically generated based on the primary color.

| Branding var | fallback var |
|-----------------------|-----------------|
|`--brand-dark` | `--c8y-brand-dark` |
|`--brand-light` | `--c8y-brand-light` |
|`--brand-primary` | `--c8y-brand-primary` |
| `--brand-10` | `--c8y-brand-10` |
| `--brand-20` | `--c8y-brand-20` |
| `--brand-30` | `--c8y-brand-30` |
| `--brand-40` | `--c8y-brand-40` |
| `--brand-50` | `--c8y-brand-50` |
| `--brand-60` | `--c8y-brand-60` |
| `--brand-70` | `--c8y-brand-70` |
| `--brand-80` | `--c8y-brand-80` |

## Neutrals

Customize neutrals to set the backdrop, allowing customer's brand elements to shine with a
personalized touch.

| Branding var | fallback var |
|------------------|-----------|
| `--palette-gray-10`| `--c8y-palette-gray-10` |
| `--palette-gray-20` | `--c8y-palette-gray-20`|
| `--palette-gray-30` | `--c8y-palette-gray-30`|
| `--palette-gray-40` | `--c8y-palette-gray-40`|
| `--palette-gray-50` | `--c8y-palette-gray-50`|
| `--palette-gray-60` | `--c8y-palette-gray-60`|
| `--palette-gray-70` | `--c8y-palette-gray-70`|
| `--palette-gray-80` | `--c8y-palette-gray-80`|
| `--palette-gray-90` | `--c8y-palette-gray-90`|
| `--palette-gray-100` | `--c8y-palette-gray-100` |
| `--palette-high` | `--c8y-palette-high`|
| `--palette-low` | `--c8y-palette-low` |

## Status

Define the messaging tone by personalizing each color to suit the customers brand unique language.

| Branding var | fallback var |
|------------------|-----------|
| `--palette-status-danger-dark` | `--c8y-palette-status-danger-dark` |
| `--palette-status-danger-light` | `--c8y-palette-status-danger-light` |
| `--palette-status-danger` | `--c8y-palette-status-danger` |
| `--palette-status-info-dark` | `--c8y-palette-status-info-dark` |
| `--palette-status-info-light` | `--c8y-palette-status-info-light` |
| `--palette-status-info` | `--c8y-palette-status-info` |
| `--palette-status-realtime` | `--c8y-palette-status-realtime` |
| `--palette-status-success-dark` | `--c8y-palette-status-success-dark` |
| `--palette-status-success-light` | `--c8y-palette-status-success-light` |
| `--palette-status-success` | `--c8y-palette-status-success` |
| `--palette-status-system` | `--c8y-palette-status-system` |
| `--palette-status-warning-dark` | `--c8y-palette-status-warning-dark` |
| `--palette-status-warning-high` | `--c8y-palette-status-warning-high` |
| `--palette-status-warning-light` | `--c8y-palette-status-warning-light`|
| `--palette-status-warning` | `--c8y-palette-status-warning` |

## Generic

Versatile yet distinctive – generic tokens set the background color, the font face, text color,
links color, and the buttons border radius — to match the customer brand.

| Branding var | fallback var |
|------------------|-----------|
| `--body-background-color` | `--c8y-body-background-color` |
| `--text-color` | `--c8y-text-color` |
| `--text-muted` | `--c8y-text-muted` |
| `--link-color` | `--c8y-link-color` |
| `--link-hover-color` | `--c8y-link-hover-color` |
| `--font-family-base` | `--c8y-font-family-base` |
| `--btn-border-radius-base` | `--c8y-btn-border-radius-base` |

## Action bar

This flexible component holds the main actions available for each view.

| Branding var | fallback var |
|------------------|-----------|
| `--action-bar-background-default` | `--c8y-action-bar-background-default` |
| `--action-bar-color-actions-hover` | `--c8y-action-bar-color-actions-hover` |
| `--action-bar-color-actions` | `--c8y-action-bar-color-actions` |
| `--action-bar-color-default` | `--c8y-action-bar-color-default` |
| `--action-bar-icon-color` | `--c8y-action-bar-icon-color` |

## Main header

Holds the navigator toggle button, page title, breadcrumbs, optional search, application switcher,
and the user badge that also toggles the right drawer.

| Branding var | fallback var |
|------------------|-----------|
| `--header-color` | `--c8y-main-header-background-default` |
| `--header-text-color` | `--c8y-main-header-text-color-default` |
| `--header-hover-color` | `--c8y-main-header-text-color-hover` |

## Navigator bar

The application's main navigation. A tree indicates the content's hierarchy.

| Branding var | fallback var |
|------------------|-----------|
| `--navigator-bg-color` | `--c8y-navigator-background-default` |
| `--navigator-active-bg`| `--c8y-navigator-background-selected` |
| `--navigator-border-active` | `--c8y-navigator-border-selected`|
| `--navigator-font-family` | `--c8y-navigator-font-family` |
| `--navigator-header-bg` | `--c8y-navigator-header-background` |
| `--navigator-title-color` | `--c8y-navigator-header-color` |
| `--navigator-separator-color` | `--c8y-navigator-separator-color` |
| `--navigator-text-color` | `--c8y-navigator-text-color-default` |
| `--navigator-color-active` | `--c8y-navigator-text-color-selected` |
| `--navigator-app-icon-size` | `--c8y-navigator-app-icon-size` |

## Right drawer

The right drawer holds access to the user profile and other settings.

| Branding var | fallback var |
|------------------|-----------|
| `--right-drawer-background-default` | `--c8y-right-drawer-background-default` |
| `--right-drawer-text-color-default` | `--c8y-right-drawer-text-color-default` |
| `--right-drawer-separator-color` | `--c8y-right-drawer-separator-color` |
| `--right-drawer-background-active` | `--c8y-right-drawer-background-active` |
| `--right-drawer-border-selected` | `--c8y-right-drawer-border-selected` |
| `--right-drawer-text-muted` | `--c8y-right-drawer-text-color-muted` |
