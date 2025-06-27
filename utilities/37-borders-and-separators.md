---
title: Borders and separators
slug: borders-and-separators
icon: done
order: 37
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD051 -->

Borders and separators play a crucial role in UI design, providing visual structure and delineation
between different elements, sections, or components within the user interface.

By strategically implementing them, you can significantly enhance readability and
organization, allowing users to navigate through the interface with ease and efficiency.

## Borders

Utility classes to set any border on every element: `border-top`, `border-right`, `border-bottom`,
`border-left`, and `border-all`.

Use the grid suffixes for targeting specific screen sizes, for example, `border-top-sm`. Check
[grid and vertical rythm](#/ui-guidelines/foundations/grid-and-vertical-rhythm/overview#responsive-grid).

> Adding a border to any element increases it's size. If you need more control over spacing,
> consider using a `separator` which won't affect the element's size.

<codex-tutorial-example class="c8y-codex-override">
<div class="hidden">
  <!-- important -->
<div class="border-top"></div>
<div class="border-right"></div>
<div class="border-bottom"></div>
<div class="border-left"></div>
<div class="border-all"></div>
<!-- /important -->
</div>
  <div class="inner-scroll">
    <div class="container-fluid p-24 p-relative bg-level-1">
      <div class="row m-b-24">
        <div class="col-sm-6">
          <div class="bg-component border-top">
            <div style="height: 200px" class="p-16">
              <code>border-top</code>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="bg-component border-right">
            <div style="height: 200px" class="p-16">
              <code>border-right</code>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-b-24">
        <div class="col-sm-6">
          <div class="bg-component border-bottom">
            <div style="height: 200px" class="p-16">
              <code>border-bottom</code>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="bg-component border-left">
            <div style="height: 200px" class="p-16">
              <code>border-left</code>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="bg-component border-all">
            <div style="height: 200px" class="p-16">
              <code>border-all</code>
            </div>
          </div>
        </div>
    </div>
  </div>
</codex-tutorial-example>

## Separators

Utility classes to display a subtle border on elements without any effect on it is size by using the
`box-shadow` property.

Use the grid suffixes for targeting specific screen sizes, for example, `separator-top-sm`. Check
[grid and vertical rythm](#/ui-guidelines/foundations/grid-and-vertical-rhythm/overview#responsive-grid).

<codex-tutorial-example class="c8y-codex-override">
<div class="hidden">
  <!-- important -->
<div class="separator-top"></div>
<div class="separator-bottom"></div>
<div class="separator-top-bottom"></div>

<!-- /important -->
</div>
  <div class="inner-scroll">
    <div class="container-fluid p-24 p-relative bg-level-1">
      <div class="m-b-24">
        <div class="bg-component separator-top">
          <div style="height: 200px" class="p-16">
            <code>separator-top</code>
          </div>
        </div>
      </div>
      <div class="m-b-24">
        <div class="bg-component separator-bottom">
          <div style="height: 200px" class="p-16">
            <code>separator-bottom</code>
          </div>
        </div>
      </div>
      <div class="m-b-24">
        <div class="bg-component separator-top-bottom">
          <div style="height: 200px" class="p-16">
            <code>separator-top-bottom</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</codex-tutorial-example>
