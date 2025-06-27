---
title: Using the grid
slug: using-the-grid
icon: done
order: 50
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

A set of classes to provide an efficient way to lay out, align, and distribute space between items
in a container.

Since browser support for flexbox is universal, we've deprecated the usage of floats to build the
grid. To ensure the correct usage, add to the `row` container the display modifier class `d-flex` to
turn the row into a flex-container.

Besides the default grid and the [grid containers](#/ui-guidelines/utilities/grid-containers), you
can also use another set of utilities for greater flexibility building layouts.

Check the available options on [flex-containers](#/ui-guidelines/utilities/flex-containers),
[flex items](#/ui-guidelines/utilities/flex-items), and
[element queries](#/ui-guidelines/utilities/element-queries).

## Grid options

See how the different aspects of the grid system work across multiple devices.

<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th></th>
        <th> Extra small devices <p class="text-normal">Phones (&lt;768px)</p> </th>
        <th> Small devices <p class="text-normal">Tablets (≥768px)</p> </th>
        <th> Medium devices <p class="text-normal">Desktops (≥992px)</p> </th>
        <th> Large devices <p class="text-normal">Desktops (≥1200px)</p> </th>
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

## Basic grid

Using a single set of `.col-md-*` grid classes inside a `.row .d-flex` container, creates a layout that starts stacked on mobile devices and tablet devices (the extra small to small range) and switches to horizontal on desktop (medium) devices.

The default gutter is 24px (12px on each side). To reduce the gutter to 8px (4px on each side), add `.tight-grid` to the `.row .d-flex`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-t-24">
<!-- important -->
<p><em>Default gutter (24px)</em></p>
<p><code>row d-flex</code></p>

<div class="row d-flex show-grid">
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
</div>

<p><em>Small gutter (8px)</em></p>
<p><code>row d-flex tight-grid</code></p>

<div class="tight-grid row d-flex show-grid">
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
  <div class="col-md-1"><div class="card m-b-0"><code>.col-md-1</code></div></div>
</div>

<h4 class="m-t-40">Example layouts</h4>

<div class="row d-flex show-grid">
  <div class="col-md-8"><div class="card m-b-0"><code>.col-md-8</code></div></div>
  <div class="col-md-4"><div class="card m-b-0"><code>.col-md-4</code></div></div>
</div>

<div class="row d-flex show-grid">
  <div class="col-md-4"><div class="card m-b-0"><code>.col-md-4</code></div></div>
  <div class="col-md-4"><div class="card m-b-0"><code>.col-md-4</code></div></div>
  <div class="col-md-4"><div class="card m-b-0"><code>.col-md-4</code></div></div>
</div>

<div class="row d-flex show-grid">
  <div class="col-md-6"><div class="card m-b-0"><code>.col-md-6</code></div></div>
  <div class="col-md-6"><div class="card m-b-0"><code>.col-md-6</code></div></div>
</div>
  <!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Mixed column sizes grid

If you do not want your columns to simply stack in smaller devices, use the extra small, small, medium, and
large device grid classes by adding `.col-xs-*`, `.col-sm-*`, `.col-md-*`, and `.col-lg-*` to your
columns.

See the example below and try resizing your browser window.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-t-24">
<!-- important -->
<p class="visible-xs"><code>col-xs-12</code> <em>100% width > 0px</em></p>
<p class="visible-sm"><code>col-sm-8</code> <em>66.66% width > 768px</em></p>
<p class="visible-md"><code>col-md-6</code> <em>50% width > 992px</em></p>
<p class="visible-lg"><code>col-lg-5</code> <em>41.66% width > 1200px</em></p>
<div class="row d-flex show-grid">
  <div class="col-xs-12 col-sm-8 col-md-6 col-lg-5">
    <div class="card m-0" >
      <p><code>col-xs-12</code></p>
      <p><code>col-sm-8</code></p>
      <p><code>col-md-6</code></p>
      <p><code>col-lg-5</code></p>
    </div>
  </div>
</div>
<div class="p-t-24">
  <p class="visible-xs"><code>col-xs-8</code> <em>66.66% width > 0px</em></p>
  <p class="visible-sm"><code>col-sm-6</code> <em>50% width > 768px</em></p>
  <p class="visible-md"><code>col-md-5</code> <em>41.66% width > 992px</em></p>
  <p class="visible-lg"><code>col-lg-4</code> <em>33.33%% width > 1200px</em></p>
</div>
<div class="row d-flex show-grid">
  <div class="col-xs-8 col-sm-6 col-md-5 col-lg-4">
    <div class="card m-0">
      <p><code>col-xs-8</code></p>
      <p><code>col-sm-6</code></p>
      <p><code>col-md-5</code></p>
      <p><code>col-lg-4</code></p>
    </div>
  </div>
</div>

<p class="m-t-24"><em>Stack the columns on mobile by making one full-width and the other half-width</em></p>
<div class="row d-flex show-grid">
  <div class="col-xs-12 col-md-8"><div class="card m-0"><p><code>col-xs-12 col-md-8</code></p></div></div>
  <div class="col-xs-6 col-md-4"><div class="card m-0"><p><code>col-xs-6 col-md-4</code></p></div></div>
</div>
<p class="m-t-16"><em>Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop</em></p>
<div class="row d-flex show-grid">
  <div class="col-xs-6 col-md-4"><div class="card m-0"><p><code>col-xs-6 col-md-4</code></p></div></div>
  <div class="col-xs-6 col-md-4"><div class="card m-0"><p><code>col-xs-6 col-md-4</code></p></div></div>
  <div class="col-xs-6 col-md-4"><div class="card m-0"><p><code>col-xs-6 col-md-4</code></p></div></div>
</div>
<p><em>Columns are always 50% wide, on mobile and desktop</em></p>
<div class="row d-flex show-grid">
  <div class="col-xs-6"><div class="card m-0"><p><code>col-xs-6</code></p></div></div>
  <div class="col-xs-6"><div class="card m-0"><p><code>col-xs-6</code></p></div></div>
</div>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Offseting columns

In addition to column resize at responsive breakpoints, you might have to set the left margin offset.

To move columns to the right use `.col-**-offset-*` classes. These classes increase the left margin
of a column by `*` columns. For example, `.col-md-offset-4` moves `.col-md-4` over four columns.

You can also override offsets from lower grid tiers with `.col-**-offset-0` classes.

<codex-tutorial-example  class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-t-24">
<!-- important -->
<div class="row d-flex show-grid">
  <div class="col-md-4"><div class="card m-0"><code>.col-md-4</code></div></div>
  <div class="col-md-4 col-md-offset-4"><div class="card m-0"><code>.col-md-4 .col-md-offset-4</code></div></div>
</div>
<div class="row d-flex show-grid">
  <div class="col-md-3 col-md-offset-3"><div class="card m-0"><code>.col-md-3 .col-md-offset-3</code></div></div>
  <div class="col-md-3 col-md-offset-3"><div class="card m-0"><code>.col-md-3 .col-md-offset-3</code></div></div>
</div>
<div class="row d-flex show-grid">
  <div class="col-md-6 col-md-offset-3"><div class="card m-0"><code>.col-md-6 .col-md-offset-3</code></div></div>
  <div class="col-md-2 col-md-offset-1"><div class="card m-0"><code>.col-md-2 .col-md-offset-1</code></div></div>
</div>
<!-- /important -->
  </div>
  </div>
</codex-tutorial-example>

## Quick floats

Float an element to the left or right with a class. `!important` is included to avoid
specificity issues.

Easily clear a `float` by adding `.clearfix` to its parent element.

Utilizes [the micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) as popularized by
Nicolas Gallagher.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-t-24 p-b-24">
    <!-- important -->
<div class="row">
  <div class="col-sm-6">
    <p class="clearfix">This paragraph contains a badge with
      <code>.pull-left</code>
      <span class="badge badge-info pull-left">2</span>
    </p>
  </div>
  <div class="col-sm-6">
    <p class="clearfix">This paragraph contains a badge with
      <code>.pull-right</code>
      <span class="badge badge-success pull-right">2</span>
    </p>
  </div>
</div>
<!-- /important -->
  </div>
</codex-tutorial-example>
