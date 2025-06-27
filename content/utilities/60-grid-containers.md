---
title: Grid containers
slug: grid-containers
icon: done
order: 60
---
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD051 -->

CSS Grid Layout is the most powerful layout system available in CSS, offering a 2-dimensional grid
that can handle both columns and rows.

To convert an element into a grid container, simply add the class `d-grid` to it. However, to fully
leverage the capabilities of CSS Grid, we must define columns, rows, or both.

## Columns

To define columns, we provide utility classes for setting the size of 2 or 3 columns out of a
12-column grid. For example, if you want to use 2 columns with relative sizes of 8 and 4, you can
use the class `grid__col--8-4`. Similarly, for 3 columns where the first and last columns share the
same size, you can use a class like `grid__col--3-6-3`.

For specific media queries, use the appropriate suffix, such as `grid__col--8-4--md` or
`grid__col--3-6-3--md`. For more details, refer to
[using the grid](#/ui-guidelines/utilities/using-the-grid).

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-24">
<!-- important -->
<p class="m-b-24"><strong>Two columns</strong></p>
<div class="d-grid grid__col--11-1--md m-b-24">
  <div class="bg-primary-light p-16">
      11 of 12
  </div>
  <div class="bg-level-4 p-16">
    1 of 12
  </div>
</div>
<div class="d-grid grid__col--10-2--md m-b-24">
  <div class="bg-primary-light p-16">
      10 of 12
  </div>
  <div class="bg-level-4 p-16">
    2 of 12
  </div>
</div>
<div class="d-grid grid__col--9-3--md m-b-24">
  <div class="bg-primary-light p-16">
      9 of 12
  </div>
  <div class="bg-level-4 p-16">
    3 of 12
  </div>
</div>
<div class="d-grid grid__col--8-4--md m-b-24">
  <div class="bg-primary-light p-16">
      8 of 12
  </div>
  <div class="bg-level-4 p-16">
    4 of 12
  </div>
</div>
<div class="d-grid grid__col--7-5--md m-b-24">
  <div class="bg-primary-light p-16">
      7 of 12
  </div>
  <div class="bg-level-4 p-16">
    5 of 12
  </div>
</div>
<div class="d-grid grid__col--6-6--md m-b-24">
  <div class="bg-primary-light p-16">
      6 of 12
  </div>
  <div class="bg-level-4 p-16">
    6 of 12
  </div>
</div>
<div class="d-grid grid__col--5-7--md m-b-24">
  <div class="bg-primary-light p-16">
      5 of 12
  </div>
  <div class="bg-level-4 p-16">
    7 of 12
  </div>
</div>
<div class="d-grid grid__col--4-8--md m-b-24">
  <div class="bg-primary-light p-16">
      4 of 12
  </div>
  <div class="bg-level-4 p-16">
    8 of 12
  </div>
</div>
<div class="d-grid grid__col--3-9--md m-b-24">
  <div class="bg-primary-light p-16">
      3/ 12
  </div>
  <div class="bg-level-4 p-16">
    9 of 12
  </div>
</div>
<div class="d-grid grid__col--2-10--md m-b-24">
  <div class="bg-primary-light p-16">
      2/ 12
  </div>
  <div class="bg-level-4 p-16">
    10 of 12
  </div>
</div>
<div class="d-grid grid__col--1-11--md m-b-24">
  <div class="bg-primary-light p-16">
      1/ 12
  </div>
  <div class="bg-level-4 p-16">
    11 of 12
  </div>
</div>
<p class="m-t-40 m-b-24"><strong>Three columns</strong></p>
<div class="d-grid grid__col--5-2-5--md m-b-24">
  <div class="bg-primary-light p-16">
      5 of 12
  </div>
  <div class="bg-level-4 p-16">
    2 of 12
  </div>
  <div class="bg-accent p-16 text-white">
    5 of 12
  </div>
</div>
<div class="d-grid grid__col--4-4-4--md m-b-24">
  <div class="bg-primary-light p-16">
      4 of 12
  </div>
  <div class="bg-level-4 p-16">
    4 of 12
  </div>
  <div class="bg-accent p-16 text-white">
    4 of 12
  </div>
</div>
<div class="d-grid grid__col--3-6-3--md m-b-24">
  <div class="bg-primary-light p-16">
      3 of 12
  </div>
  <div class="bg-level-4 p-16">
    6 of 12
  </div>
  <div class="bg-accent p-16 text-white">
    3 of 12
  </div>
</div>
<div class="d-grid grid__col--2-8-2--md m-b-24">
  <div class="bg-primary-light p-16">
      2 of 12
  </div>
  <div class="bg-level-4 p-16">
    8 of 12
  </div>
  <div class="bg-accent p-16 text-white">
    2 of 12
  </div>
</div>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Spanning Columns

In cases where you need an element to span across all columns, simply add the class
`grid__col--fullspan` to the element.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-t-24">
<!-- important -->
<div class="d-grid grid__col--6-6--md m-b-24">
  <div class="bg-primary-light p-16">
      6 of 12
  </div>
  <div class="bg-level-4 p-16">
    6 of 12
  </div>
  <div class="grid__col--fullspan bg-accent p-16 text-white">
    <code>.grid__col--fullspan</code> spans all columns
  </div>
</div>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Rows

If you have to set 2 rows size, you can follow the same approach as with columns. We
provide utility classes for setting the size of 2 rows out of a 12-row grid. For example, if you
want to use 2 rows with relative sizes of 8 and 4, you can use the class `grid__row--8-4`.

For specific media queries, use the appropriate suffix, such as `grid__row--8-4--md`. For more
information, see [using the grid](#/ui-guidelines/utilities/using-the-grid).

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-t-24 codex-set-height" style="--min-height: 240px">
<!-- important -->
<div class="d-grid grid__row--10-2 m-b-24">
  <div class="bg-primary-light p-16">
      10 of 12
  </div>
  <div class="bg-level-4 p-16">
    2 of 12
  </div>
</div>
<div class="d-grid grid__row--9-3 m-b-24">
  <div class="bg-primary-light p-16">
      9 of 12
  </div>
  <div class="bg-level-4 p-16">
    3 of 12
  </div>
</div>
<div class="d-grid grid__row--8-4 m-b-24">
  <div class="bg-primary-light p-16">
      8 of 12
  </div>
  <div class="bg-level-4 p-16">
    4 of 12
  </div>
</div>
<div class="d-grid grid__row--7-5 m-b-24">
  <div class="bg-primary-light p-16">
      7 of 12
  </div>
  <div class="bg-level-4 p-16">
    5 of 12
  </div>
</div>
<div class="d-grid grid__row--6-6 m-b-24">
  <div class="bg-primary-light p-16">
      6 of 12
  </div>
  <div class="bg-level-4 p-16">
    6 of 12
  </div>
</div>
<div class="d-grid grid__row--5-7 m-b-24">
  <div class="bg-primary-light p-16">
      5 of 12
  </div>
  <div class="bg-level-4 p-16">
    7 of 12
  </div>
</div>
<div class="d-grid grid__row--4-8 m-b-24">
  <div class="bg-primary-light p-16">
      4 of 12
  </div>
  <div class="bg-level-4 p-16">
    8 of 12
  </div>
</div>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Auto sizing rows

You can use the class `grid__row--fit-auto` to achieve automatic sizing of
rows. This class sets the height of the first and last rows to their content height, while the
middle row takes up the remaining space. This is particularly useful for building complex
[card grid](#/ui-guidelines/layouts/detail-layouts/overview#card-grid) layouts.

Including the `grid__row--fit-auto` class in your grid container allows for dynamic row sizing based
on the content within each row.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-t-24 p-b-24 codex-set-height" style="--min-height: 240px">
<!-- important -->
<div class="card card--grid grid__row--fit-auto m-b-0">
  <div class="bg-level-1 grid__col--fullspan separator-bottom">
    <div class="p-16">
      This is the first row, which can act as a header
    </div>
  </div>
  <div class="inner-scroll">
    <div class="card-block">
      This the main content row, usually a `.inner-scroll` element to handle overflow.
    </div>
  </div>
  <div class="card-footer separator">
    This is the 3rd row, which can act as a footer
  </div>
</div>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>
