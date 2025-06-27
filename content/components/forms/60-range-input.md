---
title: Range input
icon: done
slug: range-input
order: 60
apiDocs:
  - name: RangeComponent
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The range input component enables users to select a value within a specified range using an
interactive slider. This UI element is useful when users have to input values within a defined
numeric range.

To implement it wrap a default HTML input element with a `c8y-range`, our custom range component.
This enables full use of the slider functionality and consistent styling.

The range input supports four value display modes:

| valueDisplayMode | Description |
| ------ | ----------- |
| `inline` | Displays the value inside the slider handle (default) |
| `start` | Positions the value to the left of the slider |
| `end` | Positions the value to the right of the slider |
| `pop` | Shows the value in a small popover above the slider handle |

Using these different modes allows for flexibility when integrating the input into your UI.

<codex-tutorial-example  iframeHeight="450" class="c8y-codex-override" [module]="'RangeInputExampleModule'"
[sources]="['./packages/tutorial/src/input/range-input-example.component.ts']"></codex-tutorial-example>
