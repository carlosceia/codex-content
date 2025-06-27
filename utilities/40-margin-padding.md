---
title: Size, margin and padding
slug: size-margin-and-padding
icon: done
order: 40
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD051 -->

The CSS box model contains block boxes and defines how the various components — margin, border,
padding, and content — interact to form a visible box on a page.

<img src="../images/ui-guidelines/box-model.svg" alt="CSS box model" class="img-responsive m-b-16 m-l-64 m-l-xs-0">

While inline boxes adhere to certain aspects of the box model, their behavior differs to some extent.

Below you can find the utility classes designed to streamline the handling of size, margin, and padding
properties. With these classes, you can effortlessly manage element sizes, create consistent spacing
with margins, and align content using padding.

If you are looking for more advanced layout options, such as aligning and distributing space between
items within a container, we recommend exploring the [grid system](#/ui-guidelines/utilities/using-the-grid/overview).
It provides powerful tools for creating responsive and organized layouts.

## Width and Height

We provide utility classes to conveniently adjust the width and height of elements. These classes may override size constraints set by other.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-t-24 p-b-24">
<!-- important -->
<div class="d-inline-block bg-level-4 p-16 m-b-24 fit-w">
  <code>fit-w</code>
  <p>When applied in block-level elements, takes 100% width of the parent container.</p>
</div>

<div class="bg-level-2 p-16 m-b-24" style="height: 200px;">
  <div class="d-inline-block bg-level-4 p-16 fit-h">
    <code>fit-h</code>
    <p>When applied in block-level elements, takes 100% height of the parent container.</p>
  </div>
</div>

<div class="bg-level-2 d-flex gap-8 p-16 m-b-24">
    <code>fit-h-20</code>
    <div class="bg-primary d-inline-block fit-h-20" style="width: 20px;"></div>
    <p>When applied in block-level elements, sets the elements' height to match the text line-height.</p>
  </div>
</div>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Max-width, Min-width, Max-height, and Min-height

To control the size of elements in relation to their parent container, we must handle the properties
`max-width`, `min-width`, `max-height`, and `min-height`:

- `max-width` sets the upper limit for the element's width, preventing it from exceeding the specified value.
- `min-width` ensures the element's width does not go below the specified value, providing a minimum width.
- `max-height` limits the element's height to the specified value, preventing it from surpassing it.
- `min-height` guarantees the element has a minimum height, ensuring it won't become too small.

You can take advantage of our utility classes to conveniently manage these size properties and
adapt elements within their containers as needed.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-t-24 p-b-24">
<!-- important -->
<div class="max-width-100 bg-level-4 p-16 m-b-24" style="width: 3000px">
  <code>max-width-100</code>
  <p class="m-t-8">
    The width of this element is set to 3000px, but it's limited to 100% width of the parent
    container.
  </p>
</div>

<div class="bg-level-2 d-contents" style="max-width: 300px;">
  <div class="max-width-inherit p-16 bg-level-4 m-b-24">
    <code>max-width-inherit</code>
    <p class="m-t-8">
      This element has 300px of max-width inherited from the parent container, although the
      parent container has the display property set to <code>contents</code>.
    </p>
  </div>
</div>

<div class="max-width-unset p-16 bg-level-4 m-b-24">
  <code>max-width-unset</code>
  <p class="m-t-8">This element has the max-width set to the default value (<em>auto</em>).</p>
</div>

<div class="max-width-fit p-16 bg-level-4 m-b-24">
  <code>max-width-fit</code>
  <p class="m-t-8">This element's max-width matches the content width.</p>
</div>

<div class="d--inline-block">
  <div class="min-width-100 p-16 bg-level-4 m-b-24">
    <code>min-width-100</code>
    <p class="m-t-8">
      The minimum width of this element is 100% width of the parent container, but it may be wider.
    </p>
  </div>
</div>

<div class="min-width-unset p-16 bg-level-4 m-b-24">
  <code>min-width-unset</code>
  <p class="m-t-8">This element has the min-width set to the default value (<em>auto</em>).</p>
</div>

<div class="d-flex">
  <div class="min-width-0 p-16 bg-level-4 m-b-24">
    <code>min-width-0</code>
    <p class="m-t-8">
      By default, flex items won't shrink below their minimum content size (the length of the
      longest word or fixed-size element). Use this class to override that.
    </p>
  </div>
</div>

<div class="min-height-unset p-16 bg-level-4 m-b-24">
  <code>min-height-unset</code>
  <p class="m-t-8">This element has the min-height set to the default value (<em>auto</em>).</p>
</div>

<div class="d--inline-block m-b-24" style="height: 200px;">
  <div class="min-height-100 p-16 bg-level-4">
    <code>min-height-100</code>
    <p class="m-t-8">
      The minimum height of this element is 100% height of the parent container, but it may be taller.
    </p>
  </div>
</div>

<div class="d-flex">
  <div class="min-height-0 p-16 bg-level-4 m-b-24">
    <code>min-height-0</code>
    <p class="m-t-8">
      By default, flex items won't shrink below their minimum content size (the height of the text
       or fixed-size element). Use this class to override that.
    </p>
  </div>
</div>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Margin

Class names for margin are composed of 2, 3 or 4 blocks, for example, `m-t-8` or `m-t-md-32`:

- The first block indicates the `m`argin.
- The second block represents the side: `t`op, `r`ight, `b`ottom, or `l`eft. Omitting the second
  block will apply the margin to all sides.
- The third block (for example, `md`) is optional and can be used to target specific screen sizes responsively. Alternatively, you
  can omit it to apply the margin to all screen sizes.
- The fourth block indicates the amount (for example, `8`), starting with 4px, followed by increments of 8px up to
  a maximum of 80px.

<codex-tutorial-example class="c8y-codex-override">
<div class="inner-scroll">
  <div class="container-fluid">
  <div class="card-group-block show-grid">
      <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-4">
  <code>.m-4</code>
  <p class="small">margin: 4px</p>
</div>
<!-- /important -->
      </div>
      <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-8" >
  <code>.m-8</code>
  <p class="small">margin: 8px</p>
</div>
<!-- /important -->
      </div>
      <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-16">
  <code>.m-16</code>
  <p class="small">margin: 16px</p>
</div>
<!-- /important -->
      </div>
      <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-24">
  <code>.m-24</code>
  <p class="small">margin: 24px</p>
</div>
<!-- /important -->
      </div>
      <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-32">
  <code>.m-32</code>
  <p class="small">margin: 32px</p>
</div>
<!-- /important -->
      </div>
      <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-40">
  <code>.m-40</code>
  <p class="small">margin: 40px</p>
</div>
<!-- /important -->
      </div>
    </div>
  <div class="card-group-block show-grid">
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-t-4">
  <code>.m-t-4</code>
  <p class="small">margin-top: 4px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-t-8" >
  <code>.m-t-8</code>
  <p class="small">margin-top: 8px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-t-16">
  <code>.m-t-16</code>
  <p class="small">margin-top: 16px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-t-24">
  <code>.m-t-24</code>
  <p class="small">margin-top: 24px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-t-32">
  <code>.m-t-32</code>
  <p class="small">margin-top: 32px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-t-40">
  <code>.m-t-40</code>
  <p class="small">margin-top: 40px</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="card-group-block show-grid">
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-r-4">
  <code>.m-r-4</code>
  <p class="small">margin-right: 4px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-r-8" >
  <code>.m-r-8</code>
  <p class="small">margin-right: 8px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-r-16">
  <code>.m-r-16</code>
  <p class="small">margin-right: 16px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-r-24">
  <code>.m-r-24</code>
  <p class="small">margin-right: 24px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-r-32">
  <code>.m-r-32</code>
  <p class="small">margin-right: 32px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-r-40">
  <code>.m-r-40</code>
  <p class="small">margin-right: 40px</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="card-group-block show-grid">
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-b-4">
  <code>.m-b-4</code>
  <p class="small">margin-bottom: 4px</p>
</div>
<!-- /important -->
      <div class="bg-accent text-white">Other element</div>
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-b-8" >
  <code>.m-b-8</code>
  <p class="small">margin-bottom: 8px</p>
</div>
<!-- /important -->
      <div class="bg-accent text-white">Other element</div>
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-b-16">
  <code>.m-b-16</code>
  <p class="small">margin-bottom: 16px</p>
</div>
<!-- /important -->
      <div class="bg-accent text-white">Other element</div>
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-b-24">
  <code>.m-b-24</code>
  <p class="small">margin-bottom: 24px</p>
</div>
<!-- /important -->
      <div class="bg-accent text-white">Other element</div>
    </div>
    <div class="card col-md-2">
      <!-- important -->
<div class="bg-primary-light m-b-32">
  <code>.m-b-32</code>
  <p class="small">margin-bottom: 32px</p>
</div>
<!-- /important -->
      <div class="bg-accent text-white">Other element</div>
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-b-40">
  <code>.m-b-40</code>
  <p class="small">margin-bottom: 40px</p>
</div>
<!-- /important -->
      <div class="bg-accent text-white">Other element</div>
    </div>
  </div>
  <div class="card-group-block show-grid">
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-l-4">
  <code>.m-l-4</code>
  <p class="small">margin-left: 4px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-l-16" >
  <code>.m-l-16</code>
  <p class="small">margin-left: 8px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-l-16">
  <code>.m-l-16</code>
  <p class="small">margin-left: 16px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-l-24">
  <code>.m-l-24</code>
  <p class="small">margin-left: 24px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-l-32">
  <code>.m-l-32</code>
  <p class="small">margin-left: 32px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light m-l-40">
  <code>.m-l-40</code>
  <p class="small">margin-left: 40px</p>
</div>
<!-- /important -->
    </div>
  </div>
</div>
</div>
</codex-tutorial-example>

## Padding

The class names are composed by 2, 3 blocks or 4 blocks, for example, <code>p-t-24</code> or <code>p-t-xs-0</code>:

- The first block refers to the `p`adding.
- The second to the side, `t`op, `r`ight, `b`ottom, and `l`eft. Just like in CSS, omitting it will
  apply on all sides.
- The third block is optional (for example, `xs`), you can either use it to targets specific screen sizes responsively or you can
  omit to target all screen sizes.
- The fourth refers to amount (for example, `24`), starting with `4px`, then `8px` followed by multiples of `8` up to
  `80`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid">
  <div class="card-group-block show-grid">
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-4">
  <code>.p-4</code>
  <p class="small">padding: 4px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-8" >
  <code>.p-8</code>
  <p class="small">padding: 8px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-16">
  <code>.p-16</code>
  <p class="small">padding: 16px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-24">
  <code>.p-24</code>
  <p class="small">padding: 24px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-32">
  <code>.p-32</code>
  <p class="small">padding: 32px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-40">
  <code>.p-40</code>
  <p class="small">padding: 40px</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="card-group-block show-grid">
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-t-4">
  <code>.p-t-4</code>
  <p class="small">padding-top: 4px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-t-8" >
  <code>.p-t-8</code>
  <p class="small">padding-top: 8px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-t-16">
  <code>.p-t-16</code>
  <p class="small">padding-top: 16px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-t-24">
  <code>.p-t-24</code>
  <p class="small">padding-top: 24px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-t-32">
  <code>.p-t-32</code>
  <p class="small">padding-top: 32px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-t-40">
  <code>.p-t-40</code>
  <p class="small">padding-top: 40px</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="card-group-block show-grid">
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-r-4">
  <code>.p-r-4</code>
  <p class="small">padding-right: 4px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-r-8" >
  <code>.p-r-8</code>
  <p class="small">padding-right: 8px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-r-16">
  <code>.p-r-16</code>
  <p class="small">padding-right: 16px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-r-24">
  <code>.p-r-24</code>
  <p class="small">padding-right: 24px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-r-32">
  <code>.p-r-32</code>
  <p class="small">padding-right: 32px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-r-40">
  <code>.p-r-40</code>
  <p class="small">padding-right: 40px</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="card-group-block show-grid">
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-b-4">
  <code>.p-b-4</code>
  <p class="small">padding-bottom: 4px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-b-8" >
  <code>.p-b-8</code>
  <p class="small">padding-bottom: 8px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-b-16">
  <code>.p-b-16</code>
  <p class="small">padding-bottom: 16px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-b-24">
  <code>.p-b-24</code>
  <p class="small">padding-bottom: 24px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-b-32">
  <code>.p-b-32</code>
  <p class="small">padding-bottom: 32px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-b-40">
  <code>.p-b-40</code>
  <p class="small">padding-bottom: 40px</p>
</div>
<!-- /important -->
    </div>
  </div>
  <div class="card-group-block show-grid">
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-l-4">
  <code>.p-l-4</code>
  <p class="small">padding-left: 4px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-l-16" >
  <code>.p-l-16</code>
  <p class="small">padding-left: 8px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-l-16">
  <code>.p-l-16</code>
  <p class="small">padding-left: 16px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-l-24">
  <code>.p-l-24</code>
  <p class="small">padding-left: 24px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-l-32">
  <code>.p-l-32</code>
  <p class="small">padding-left: 32px</p>
</div>
<!-- /important -->
    </div>
    <div class="card col-md-2">
<!-- important -->
<div class="bg-primary-light p-l-40">
  <code>.p-l-40</code>
  <p class="small">padding-left: 40px</p>
</div>
<!-- /important -->
    </div>
  </div>
</div>
</div>
</codex-tutorial-example>
