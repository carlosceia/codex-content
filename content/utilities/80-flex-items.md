---
title: Flex items
slug: flex-items
icon: done
order: 80
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->
Flex items are the direct children of a flex container. Find information on various
options for customizing their size and alignment.

## Sizing

Flex items have the ability to grow or shrink based on the available space. By default, flex items
have the `flex-grow` property set to 0 (that means, they won't grow) and `flex-shrink` set to 1 (that means,
they will shrink).

To allow a flex item to take up the available free space, simply add the class `flex-grow`. If you
want the flex item's width to fit its content, use the class `flex-no-shrink`.

You can use the grid suffixes to target specific screen sizes. For example, `flex-grow-md`. For more
information, refer to the section on [using the grid](#/ui-guidelines/utilities/using-the-grid).

Alternatively, you can use the `flex-auto` class, which sets both `flex-shrink` and `flex-grow`
properties to 1 and `flex-basis` to 1%.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-24">
<!-- important -->
<p>All flex items with 25% width.</p>
<div class="row d-flex show-grid m-b-40 border-all">
  <div class="col-xs-3"><code>col-xs-3</code></div>
  <div class="col-xs-3"><code>col-xs-3</code></div>
  <div class="col-xs-3"><code>col-xs-3</code></div>
</div>

<p>The second item has no width set.</p>
<div class="row d-flex show-grid m-b-40 border-all">
  <div class="col-xs-3"><code>col-xs-3</code></div>
  <p><code>no width set</code></p>
  <div class="col-xs-3"><code>col-xs-3</code></div>
</div>

<p>Adding <code>.flex-grow</code> or <code>flex-auto</code> to the second item, expands it to fill the available space.</p>
<div class="row d-flex show-grid m-b-24 border-all">
  <div class="col-xs-3"><code>col-xs-3</code></div>
  <p class="flex-grow"><code>flex-grow</code></p>
  <div class="col-xs-3"><code>col-xs-3</code></div>
</div>
<div class="row d-flex show-grid m-b-40 border-all">
  <div class="col-xs-3"><code>col-xs-3</code></div>
  <p class="flex-auto"><code>flex-auto</code></p>
  <div class="col-xs-3"><code>col-xs-3</code></div>
</div>

<p>Second item with <code>flex-grow</code> and last item with <code>.flex-auto</code>.</p>
<div class="row d-flex show-grid border-all m-b-40">
  <div class="col-xs-3"><code>col-xs-3</code></div>
  <div class="col-xs-3 flex-grow"><code>col-xs-3 flex-grow</code></div>
  <div class="col-xs-3 flex-auto"><code>col-xs-3 flex-auto</code></div>
</div>

<p>Adding <code>.flex-no-shrink</code> to the second item, its width adjusts to the content, potentially reducing the size of other items as necessary.</p>
<div class="row d-flex show-grid m-b-40 border-all">
  <div class="col-xs-3"><code>col-xs-3</code></div>
  <p class="flex-no-shrink">this element has the <code>flex-no-shrink</code> class and it takes way too much space</p>
  <div class="col-xs-3"><code>col-xs-3</code></div>
</div>
<!-- /important -->
  </div>
  </div>
</codex-tutorial-example>

## Alignment along the main axis

To align a flex item along the main axis of the flex container's current direction, use the
[margin utilities](#/ui-guidelines/utilities/margin-and-padding). For example, `m-l-auto`.

You can also use the grid suffixes for targeting specific screen sizes. For instance, `m-l-sm-auto`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-t-24 p-b-24" style="--min-height: 200px;">
      <div class="row m-b-40">
        <div class="col-md-8">
<!-- important -->
<code>d-flex</code>
<div style="min-height: var(--min-height)" class="d-flex a-i-start show-grid border-all">
  <p>Element 1</p>
  <p class="m-l-auto"><code>.m-l-auto</code> Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
        </div>
        <div class="col-md-4">
<!-- important -->
<code>d-col</code>
<div style="min-height: var(--min-height)" class="d-col a-i-start show-grid border-all">
  <p>Element 1</p>
  <p class="m-t-auto"><code>.m-t-auto</code> Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
<!-- important -->
<code>d-flex</code>
<div style="min-height: var(--min-height)" class="d-flex a-i-start show-grid border-all">
  <p>Element 1</p>
  <p class="m-l-auto m-r-auto"><code>.m-l-auto.m-r-auto</code> Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
        </div>
        <div class="col-md-4">
<!-- important -->
<code>d-col</code>
<div style="min-height: var(--min-height)" class="d-col a-i-start show-grid border-all">
  <p>Element 1</p>
  <p class="m-t-auto m-b-auto"><code>.m-t-auto.m-b-auto</code> Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
        </div>
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Alignment along the cross axis

By default, flex items are laid out along the cross axis on the current line with the `stretch`
option. To change the alignment of specific items, use the utility classes `.a-s-start`,
`.a-s-center`, `.a-s-end`, or `.a-s-stretch`.

Similar to before, you can utilize the grid suffixes to target specific screen sizes. For example,
`a-s-sm-start`. For more details, see
[using the grid](#/ui-guidelines/utilities/using-the-grid).

<div class="c8y-example" style="--min-height: 200px;">
  <div class="row m-b-40">
    <div class="col-md-6">
<!-- important -->
<code>d-flex</code>
<div style="min-height: var(--min-height)" class="d-flex show-grid border-all">
  <p>Element 1</p>
  <p class="a-s-start"><code>.a-s-start</code> Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
    <div class="col-md-6">
<!-- important -->
<code>d-col</code>
<div style="min-height: var(--min-height)" class="d-col show-grid border-all">
  <p>Element 1</p>
  <p class="a-s-start"><code>.a-s-start</code> Element 2</p>
  <p>Element 3</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex</code>
      <div style="min-height: var(--min-height)" class="d-flex show-grid border-all">
        <p>Element 1</p>
        <p class="a-s-center"><code>.a-s-center</code> Element 2</p>
        <p>Element 3</p>
      </div>
    </div>
    <div class="col-md-6">
      <code>d-col</code>
      <div style="min-height: var(--min-height)" class="d-col show-grid border-all">
        <p>Element 1</p>
        <p class="a-s-center"><code>.a-s-center</code> Element 2</p>
        <p>Element 3</p>
      </div>
    </div>
  </div>
  <div class="row m-b-40">
    <div class="col-md-6">
      <code>d-flex</code>
      <div style="min-height: var(--min-height)" class="d-flex show-grid border-all">
        <p>Element 1</p>
        <p class="a-s-end"><code>.a-s-end</code> Element 2</p>
        <p>Element 3</p>
      </div>
    </div>
    <div class="col-md-6">
      <code>d-col</code>
      <div style="min-height: var(--min-height)" class="d-col show-grid border-all">
        <p>Element 1</p>
        <p class="a-s-end"><code>.a-s-end</code> Element 2</p>
        <p>Element 3</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <code>d-flex</code>
      <div style="min-height: var(--min-height)" class="d-flex a-i-start show-grid border-all">
        <p>Element 1</p>
        <p class="a-s-stretch"><code>.a-s-stretch</code> Element 2</p>
        <p>Element 3</p>
      </div>
    </div>
    <div class="col-md-6">
      <code>d-col</code>
      <div style="min-height: var(--min-height)" class="d-col a-i-start show-grid border-all">
        <p>Element 1</p>
        <p class="a-s-stretch"><code>.a-s-stretch</code> Element 2</p>
        <p>Element 3</p>
      </div>
    </div>
  </div>
</div>
