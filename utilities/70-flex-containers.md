---
title: Flex containers
slug: flex-containers
icon: done
order: 70
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Flex containers provide a powerful and responsive way of arranging and aligning their child elements, known as flex items, either along a single line or in multiple directions.

They offer flexible and dynamic control over the sizing, positioning, and spacing of the flex items within the container, making it easier to implement complex and adaptable layouts.

If you're looking for available options for the child elements, refer to [flex items](#/ui-guidelines/utilities/flex-items).

## Direction and wrap

To turn any element into a flex container, simply add the class `d-flex` for a row direction or `d-inline-flex` for a column direction. For specific media queries, use the appropriate suffix, such as `d-flex-md`. For more information, see [using the grid](#/ui-guidelines/utilities/using-the-grid).

By default, wrap is set to `nowrap`. If you want to enable wrapping, use the modifier class `.flex-wrap` or `.flex-wrap-**` for specific media queries.

> When using `flex-direction: column` and you want to enable wrap, you must explicitly set the `height` or `max-height` of the flex container.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-t-24 p-b-24">

  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex</code>
<!-- important -->
<div class="d-flex show-grid border-all">
  <div class="col-xs-4">Element 1</div>
  <div class="col-xs-4">Element 2</div>
  <div class="col-xs-4">Element 3</div>
  <div class="col-xs-4">Element 4</div>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-col</code>
<!-- important -->
<div class="d-flex d-col show-grid border-all">
  <div class="col-xs-4">Element 1</div>
  <div class="col-xs-4">Element 2</div>
  <div class="col-xs-4">Element 3</div>
  <div class="col-xs-4">Element 4</div>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <code>d-flex flex-wrap</code>
<!-- important -->
<div class="d-flex show-grid flex-wrap border-all" >
  <div class="col-xs-4">Element 1</div>
  <div class="col-xs-4">Element 2</div>
  <div class="col-xs-4">Element 3</div>
  <div class="col-xs-4">Element 4</div>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-col flex-wrap</code>
<!-- important -->
<div class="d-col flex-wrap show-grid border-all" style="max-height: 120px">
  <div class="col-xs-4">Element 1</div>
  <div class="col-xs-4">Element 2</div>
  <div class="col-xs-4">Element 3</div>
  <div class="col-xs-4">Element 4</div>
</div>
<!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

## Alignment along the main axis

Aligns flex items along the main axis of the current direction of the flex container using one of
the available classes: `j-c-start`, `j-c-center`, `j-c-end`, `j-c-between`,
`j-c-around`, or `j-c-evenly`.

To target specific screen sizes, add a `-**` modifier at the end of the classes (for example, `j-c-center-md`).  
Check [using the grid](#/ui-guidelines/utilities/using-the-grid) for more information.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
  <div class="container-fluid p-t-24 p-b-24" style="--min-height: 200px;">
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex j-c-start</code>
<!-- important -->
<div class="d-flex j-c-start a-i-start show-grid border-all " style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-col j-c-start</code>
<!-- important -->
<div class="d-col j-c-start a-i-start show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex j-c-center</code>
<!-- important -->
<div class="d-flex j-c-center a-i-start show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-col j-c-center</code>
<!-- important -->
<div class="d-col j-c-center a-i-start show-grid border-all" style="min-height: var(--min-height)">
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex j-c-end</code>
      <div class="d-flex j-c-end a-i-start show-grid border-all" style="min-height: var(--min-height)" >
        <p>Element 1</p>
        <p>Element 2</p>
        <p>Element 3</p>
      </div>
    </div>
    <div class="col-md-6">
      <code>d-col j-c-end</code>
<!-- important -->
<div class="d-col j-c-end a-i-start show-grid border-all" style="min-height: var(--min-height)">
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex j-c-between</code>
      <p><em>contained items are evenly distributed in the line; first item is on the left, last item on the right.</em></p>
<!-- important -->
<div class="d-flex j-c-between a-i-start show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-col j-c-between</code>
      <p><em>contained items are evenly distributed in the column; first item is on the top, last item on the bottom.</em></p>
<!-- important -->
<div class="d-col j-c-between a-i-start show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex j-c-around</code>
      <p><em>contained items are distributed in the line with equal space around them.
        Note that visually the spaces aren’t equal, since all the items have equal space on both sides.</em></p>
<!-- important -->
<div class="d-flex j-c-around a-i-start show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-col j-c-around</code>
      <p><em>contained items are distributed in the column with equal space around them.
        Note that visually the spaces aren’t equal, since all the items have equal space on both sides.</em></p>
<!-- important -->
<div class="d-col j-c-around a-i-start show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <code>d-flex j-c-evenly</code>
      <p><em>contained items are distributed so that the spacing between any two items
        (and the space to the edges) is equal.</em></p>
<!-- important -->
<div class="d-flex j-c-evenly a-i-start show-grid border-all" style="min-height: var(--min-height)">
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-col j-c-evenly</code>
      <p><em>contained items are distributed so that the spacing between any two items
        (and the space to the edges) is equal.</em></p>
<!-- important -->
<div class="d-col j-c-evenly a-i-start show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
</div>
</div>
</codex-tutorial-example>

## Alignment along the cross axis

Aligns flex items along the cross axis of the current direction of the flex container using one of
the available classes: `a-i-start`, `a-i-center`, or `a-i-end`.

To target specific screen sizes, add a `-**` modifier at the end of the classes (for example, `a-i-start-xs`).  
Check [using the grid](#/ui-guidelines/utilities/using-the-grid) for more information.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
  <div class="container-fluid p-t-24 p-b-24" style="--min-height: 200px">
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex a-i-start</code>
<!-- important -->
<div class="d-flex a-i-start show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-col a-i-start</code>
<!-- important -->
<div class="d-col a-i-start show-grid border-all" style="min-height: var(--min-height)">
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex a-i-center</code>
      <div class="d-flex a-i-center show-grid border-all" style="min-height: var(--min-height)" >
        <p>Element 1</p>
        <p>Element 2</p>
        <p>Element 3</p>
      </div>
    </div>
    <div class="col-md-6">
      <code>d-col a-i-center</code>
<!-- important -->
<div class="d-col a-i-center show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex a-i-end</code>
<!-- important -->
<div class="d-flex a-i-end show-grid border-all" style="min-height: var(--min-height)">
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-col a-i-end</code>
<!-- important -->
<div class="d-col a-i-end show-grid border-all" style="min-height: var(--min-height)">
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <code>d-flex a-i-stretch</code>
      <p><em>contained items are expanded to take the full available height.</em></p>
<!-- important -->  
<div  class="d-flex a-i-stretch show-grid border-all" style="min-height: var(--min-height)">
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <code>d-flex d-col a-i-stretch</code>
      <p><em>contained items are expanded to take the full available width.</em></p>
<!-- important -->
<div class="d-col a-i-stretch show-grid border-all" style="min-height: var(--min-height)" >
  <p>Element 1</p>
  <p>Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
</div>
</div>
</codex-tutorial-example>
