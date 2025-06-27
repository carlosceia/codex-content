---
title: Position
slug: position
icon: done
order: 35
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD051 -->

The position CSS property sets how an element is positioned in a document. The top,
right, bottom, and left properties determine the final location of positioned elements.

We often have to manipulate the position of elements, to achieve this we provide utility classes to
set the position of the container: `p-static`, `p-relative`, `p-sticky` and `p-absolute`, but you have to set the `top`, `right`, `bottom` and `left` properties.

Use the grid suffixes for targeting specific screen sizes, for example, `p-absolute-sm`. Check
[grid and vertical rythm](#/ui-guidelines/foundations/grid-and-vertical-rhythm/overview#responsive-grid).

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll" >
    <div class="container-fluid p-24 p-relative" style="min-height: 700px;">
<!-- important -->
<div class="p-static">
  <div class="border-all p-16 m-b-40">
    <p class="m-b-4"><code>p-static</code></p>
    <em>The element is positioned according to the normal flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.</em>
  </div>
</div>

<div class="p-relative border-all p-16 m-b-40" style="top: 20px; left: 20px;">
  <p class="m-b-4"><code>p-relative</code></p>
  <em>The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.</em>
  <code>top: 20px; left: 20px;</code>
</div>

<div class="p-sticky p-16 border-all m-b-40" style="top: 0">
  <p class="m-b-4"><code>p-sticky</code></p>
  <em>The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements.</em>
  <code>top: 0</code>
</div>

<div class="p-relative">
  <div class="p-absolute p-16 border-all" style="top: 20px; left: 20px;">
    <p class="m-b-4"><code>p-absolute</code></p>
    <em>The element is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its closest containing block. Its final position is determined by the values of top, right, bottom, and left.</em>
    <code>top: 20px; left: 20px;</code>
  </div>
</div>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>
