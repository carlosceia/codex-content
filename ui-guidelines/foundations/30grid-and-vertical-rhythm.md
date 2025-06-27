---
title: Grid and vertical rhythm
slug: grid-and-vertical-rhythm
icon: done
order: 30
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD037 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD051 -->

Uncover essential guidelines for UI construction with our insights into grid and vertical rhythm.
Learn how visual grids, responsive design, and vertical rhythm contribute to a streamlined user
interface.

## Grid

We are using a responsive, mobile first, fluid grid system that appropriately scales up to 12 columns
as the device or viewport size increases. It includes predefined classes to enable easy layout
options.

<div class="row show-grid">
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
  <div class="col-xs-1">1</div>
</div>
<div class="row show-grid">
  <div class="col-xs-1">1</div>
  <div class="col-xs-11">11</div>
</div>
<div class="row show-grid">
  <div class="col-xs-2">2</div>
  <div class="col-xs-10">10</div>
</div>
<div class="row show-grid">
  <div class="col-xs-3">3</div>
  <div class="col-xs-9">9</div>
</div>
<div class="row show-grid">
  <div class="col-xs-4">4</div>
  <div class="col-xs-8">8</div>
</div>
<div class="row show-grid">
  <div class="col-xs-5">5</div>
  <div class="col-xs-7">7</div>
</div>
<div class="row show-grid">
  <div class="col-xs-6">6</div>
  <div class="col-xs-6">6</div>
</div>
<div class="row show-grid">
  <div class="col-xs-4">4</div>
  <div class="col-xs-4">4</div>
  <div class="col-xs-4">4</div>
</div>
<div class="row show-grid">
  <div class="col-xs-3">3</div>
  <div class="col-xs-3">3</div>
  <div class="col-xs-3">3</div>
  <div class="col-xs-3">3</div>
</div>

All layouts are nested in a full-width container optimized for using the grid system, so you do not
have to worry about margins and paddings.

Keep in mind that some layouts may use horizontal tabs, vertical tabs or no tabs at all, which
influences the width of the page.

## How the grid system works

- Use rows to create horizontal groups of columns
- Content has to be placed within columns. Only columns can be immediate children of rows
- Quickly make a grid by using either `.row` (using floats) or `.row.d-flex` (using flexbox) to wrap
  groups of `.col-**-**`s
- Columns create gutters (gaps between column content) via `padding`. This padding is offset in rows
  for the first and last column via negative margin on `.row`s
- Grid columns are created by specifying the number of the available columns you wish to span. For
  example, to add three equal columns out of 12 would use three `.col-xs-4`
- If more than 12 columns are placed within a single row, each group of extra columns wraps onto a
  new line. To achieve the same effect using flexbox, you'll have to add the classes `.d-flex` and
  `.flex-wrap`

## Responsive grid

Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes,
overriding grid classes targeted at smaller devices. Therefore, applying any `.col-md-*` class to an
element will not only affect its styling on medium devices but also on large devices if a
`.col-lg-*` class is not present.

For example, `<div class="col-xs-12 col-md-6">` will take parent container's full width up to 991px
screen width and half above that.

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th></th>
        <th> Extra small devices <small>Phones (&lt;768px)</small> </th>
        <th> Small devices <small>Tablets (≥768px)</small> </th>
        <th> Medium devices <small>Desktops (≥992px)</small> </th>
        <th> Large devices <small>Desktops (≥1200px)</small> </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Grid behavior</th>
        <td>Horizontal at all times</td>
        <td colspan="3">Collapsed to start, horizontal above breakpoints</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Class prefix</th>
        <td><code>.col-xs-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"># of columns</th>
        <td colspan="4">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Default gutter width</th>
        <td colspan="4">24px (12px on each side of a column)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Tight gutter width</th>
        <td colspan="4">8px (4px on each side of a column)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Nestable</th>
        <td colspan="4">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Offsets</th>
        <td colspan="4">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column ordering</th>
        <td colspan="4">Yes</td>
      </tr>
    </tbody>
  </table>
</div>

Check [Using the grid](#/utilities/using-the-grid/overview) for more details on how to use the grid
and available options for flex-containers, flex items and element queries.

### Nesting

To nest your content with the grid, add a new `.row` and/or `.d-flex` and set of `.col-**-*` columns
within an existing `.col-**-*` column. Nested rows have to include a set of columns that can add up
to 12.

<div>
  <codex-tutorial-example class="show-grid">
<div class="row">
  <div class="col-sm-9">
    <p>Level 1: .col-sm-9</p>
    <div class="row">
      <div class="col-xs-8 col-sm-6"> Level 2: .col-xs-8 .col-sm-6 </div>
      <div class="col-xs-4 col-sm-6"> Level 2: .col-xs-4 .col-sm-6 </div>
    </div>
  </div>
</div>
  </codex-tutorial-example>
</div>

### Media queries

Use the following media queries to create the key breakpoints in the grid system.

<pre class="open-pre"><code class="css">/* Extra small devices (phones, less than 768px) */
/* No media query since this is the default */

/* Small devices (tablets, 768px and up) */
@media (min-width: @screen-sm-min) {{ '{' }} ... {{ '}' }}

/* Medium devices (desktops, 992px and up) */
@media (min-width: @screen-md-min) {{ '{' }} ... {{ '}' }}

/* Large devices (large desktops, 1200px and up) */
@media (min-width: @screen-lg-min) {{ '{' }} ... {{ '}' }}</code></pre>

<p><br>Occasionally we expand on these media queries to include a <code>max-width</code> to limit CSS to a narrower set of devices.</p>

<pre class="open-pre m-b-16">
  <code class="css">@media (max-width: @screen-xs-max) {{ '{' }} ... {{ '}' }}
@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) {{ '{' }} ... {{ '}' }}
@media (min-width: @screen-md-min) and (max-width: @screen-md-max) {{ '{' }} ... {{ '}' }}
@media (min-width: @screen-lg-min) {{ '{' }} ... {{ '}' }}</code>
</pre>

For more details on media queries, check [Using the grid](#/utilities/using-the-grid/overview).

## Vertical Rhythm

Vertical Rhythm is the relation between the structural height and spacing of vertically stacked
elements. Just like a horizontal grid achieves harmony by restricting the layout to a set of
predefined unit sizes, the vertical rhythm solidifies the structure by offering consistent,
predictable measures as the user scrolls down the content.

To keep the layout in rhythm, use the <a
href="https://uxplanet.org/the-bottomline-on-measuring-hard-and-soft-grids-part-i-7ff52d7bc458"
target="_blank" rel="noopener noreferrer"> soft grid </a> method by setting multiples of 8 to define
padding, margin and increments between both block and inline elements. Check
[Margin and padding](#/utilities/size-margin-and-padding/overview) for more details.

<div class="c8y-example demo" style="height: 400px; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAYAAAA4GpVBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Njk3RDE3OTBCM0YxMUU4QkM2OEY4NjM5NTNBNDI2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Njk3RDE3QTBCM0YxMUU4QkM2OEY4NjM5NTNBNDI2MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2OTdEMTc3MEIzRjExRThCQzY4Rjg2Mzk1M0E0MjYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2OTdEMTc4MEIzRjExRThCQzY4Rjg2Mzk1M0E0MjYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m0RIiQAAABlJREFUeNpiYPjw/z/DfyBmYgACnARAgAEAz+4F+KSlwLoAAAAASUVORK5CYII=') 0 0 repeat;"></div>
