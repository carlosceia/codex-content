---
title: Range Display
slug: range-display
icon: done
order: 350
apiDocs:
  - name: RangeDisplayComponent
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The `RangeDisplay` represents a display component that can be used within a silo or a linear gauge.

It provides various configuration options for customizing the display behavior. These options
include:
- Setting the minimum and maximum values,
- Specifying a target value and current value,
- Defining time for the measurement,
- Setting ranges for different colors (yellow and red),
- Specifying the unit of measurement,
- Determining the decimal places, and
- Choosing the widget orientation (horizontal or vertical).

## Configuration options

Allows the creation of flexible and visually informative range displays for monitoring and
visualizing measurements. The interface of the `RangeDisplay` is as follows:

| option                    | type                         | default       | description                                       |
| ------------------------- | ---------------------------- | ---------     | ------------------------------------------------- |
| `min`                     | `number`                     |  0            | The minimum value of the range display. (optional)|
| `max`                     | `number`                     |  100          | The maximum value of the range display. (optional)|
| `target`                  | `number`                     |  `undefined`  | Target value of the measurement. (optional)       |
| `current`                 | `number`                     |  `undefined`  | Current value of the measurement. (optional)      |
| `time`                    | `string`                     |  `undefined`  | Current time of the measurement. (optional)       |
| `yellowRangeMin`          | `number`                     |  `undefined`  | Minimum value for the yellow range. (optional)    |
| `yellowRangeMax`          | `number`                     |  `undefined`  | Maximum value for the yellow range. (optional)    |
| `redRangeMin`             | `number`                     |  `undefined`  | Minimum value for the red range. (optional)       |
| `redRangeMax`             | `number`                     |  `undefined`  | Maximum value for the red range. (optional)       |
| `unit`                    | `string`                     |  `undefined`  | Unit of the measurement. For example, 'C'. (optional)     |
| `fractionSize`            | `number`                     |  `undefined`  | The number of decimal places. (optional)          |
| `orientation`             | `'horizontal' / 'vertical'`  |  `horizontal` | Widget orientation. (optional)                    |

## Silo / linear gauge

Easily switch between a silo (range display with vertical orientation) and a linear gauge (range
display with horizontal orientation) by setting the `orientation` to either vertical or horizontal.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <div class="row">
    <div class="col-md-4">
      <c8y-range-display [config]="{
        current: 20,
        orientation: 'vertical',
        unit: 'C',
        min: -20,
        max: 50,
        target: 25,
        fractionSize: 0,
        yellowRangeMin: 30,
        yellowRangeMax: 40,
        redRangeMin: 40,
        redRangeMax: 50
      }"></c8y-range-display>
    </div>
    <div class="col-md-8 p-t-24">
      <c8y-range-display [config]="{
        orientation: 'horizontal',
        current: 20,
        unit: 'C',
        min: -20,
        max: 50,
        target: 25,
        fractionSize: 0,
        yellowRangeMin: 30,
        yellowRangeMax: 40,
        redRangeMin: 40,
        redRangeMax: 50
      }"></c8y-range-display>
    </div>
  </div>
</div>
</codex-tutorial-example>
