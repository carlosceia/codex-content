---
title: Text
slug: text
icon: done
order: 20
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The appearance and behavior of text play a crucial role in user experience.

Our text utilities offer a range of classes to help you manipulate typography,
apply text styles, and enhance readability in your designs.

## Font weight

Change the font weight by using `text-normal`, `text-medium`, or `text-bold`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-16">
      <div class="row">
        <div class="col-md-6">
          <h4 class="m-b-8 "><code>text-normal</code></h4>
<!-- important -->
<p class="text-normal">Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
<!-- /important -->
<h4 class="m-b-8 m-t-24"><code>text-medium</code></h4>
<!-- important -->
<p class="text-medium">Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
    <!-- /important -->
        </div>
        <div class="col-md-6">
        <h4 class="m-b-8"><code>text-bold</code></h4>
<!-- important -->
<p class="text-bold">Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
    <!-- /important -->
        </div>
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Font size

Get a more granular approach to font size by using `text-10`, `text-12`, `text-14`, and `text-16`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-16">
      <div class="row">
        <div class="col-md-6">
        <h4 class="m-b-8"><code>text-10</code></h4>
<!-- important -->
<p class="text-10">Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
  <!-- /important -->
        <h4 class="m-b-8 m-t-24"><code>text-12</code></h4>
<!-- important -->
<p class="text-12">Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
  <!-- /important -->
      </div>
      <div class="col-md-6">
        <h4 class="m-b-8"><code>text-14</code></h4>
  <!-- important -->
<p class="text-14">Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
  <!-- /important -->
        <h4 class="m-b-8 m-t-24"><code>text-16</code></h4>
  <!-- important -->
<p class="text-16">Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
  <!-- /important -->
        </div>
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Line height

Adjust the text line-height using `l-h-1`, `l-h-base` and `l-h-inherit`, useful for aligning
different font sizes.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-16">
      <div class="row">
        <div class="col-md-4">
          <h4 class="m-b-8"><code>l-h-base</code></h4>
  <!-- important -->
<p class="l-h-base">This text has the base line-height (1.42857143). Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
<!-- /important -->
        </div>
        <div class="col-md-4">
          <h4 class="m-b-8"><code>l-h-1</code></h4>
        <!-- important -->
<p class="l-h-1">This text has a line-height of 1. Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
<!-- /important -->
        </div>
        <div class="col-md-4">
          <h4 class="m-b-8"><code>l-h-inherit</code></h4>
    <!-- important -->
<p class="l-h-inherit">This text inherits the line-height of the parent container. Into the final frontiers, our journey begins. Where stars beckon us with celestial grins. With joy as our fuel and silliness as our guide, we traverse the cosmos, side by side.</p>
<!-- /important -->
        </div>
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Letter case

Easily convert text between different letter cases: lower case, UPPER CASE, and Capitalized Case, using
`text-lowercase`, `text-uppercase`, and `text-capitalize`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-16">
      <div class="row">
        <div class="col-md-4">
          <h4 class="m-b-8"><code>text-lowercase</code></h4>
<!-- important -->
<p class="text-lowercase">When you leave this meeting today you will go to your office and the first thing you will do there is to write ‘Tough and Competent’ on your blackboards.</p>
<!-- /important -->
        </div>
        <div class="col-md-4">
          <h4 class="m-b-8"><code>text-uppercase</code></h4>
<!-- important -->
<p class="text-uppercase">When you leave this meeting today you will go to your office and the first thing you will do there is to write ‘Tough and Competent’ on your blackboards.</p>
<!-- /important -->
        </div>
        <div class="col-md-4">
          <h4 class="m-b-8"><code>text-capitalize</code></h4>
<!-- important -->
<p class="text-capitalize">When you leave this meeting today you will go to your office and the first thing you will do there is to write ‘Tough and Competent’ on your blackboards.</p>
<!-- /important -->
        </div>
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Tabular numerals

Tabular numbers are monospaced, which keeps their sizes consistent and keeps numbers with the same
amount of digits aligned.

They ensure that columns of numbers are easy to read and compare, enhancing the clarity and
professionalism of numerical data presentation.

Simply add the `text-tabular` class to use tabular numerals.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-16">
    <div class="row">
    <div class="col-md-6">
<!-- important -->
<table class="table text-right">
  <thead>
    <tr>
      <th class="text-right">Regular</th>
      <th class="text-right">Tabular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>24,903.32</td>
      <td class="text-tabular">24,903.32</td>
    </tr>
    <tr>
      <td>71,234.42</td>
      <td class="text-tabular">71,234.42</td>
    </tr>
    <tr>
      <td>11,301.22</td>
      <td class="text-tabular">11,301.22</td>
    </tr>
    <tr>
      <td>84,192.94</td>
      <td class="text-tabular">84,192.94</td>
    </tr>
    <tr>
      <td>8,785.60</td>
      <td class="text-tabular">8,785.60</td>
    </tr>
    <tr>
      <td>112,082.95</td>
      <td class="text-tabular">112,082.95</td>
    </tr>
  </tbody>
</table>
<!-- /important -->
    </div>
    </div>
    </div>
  </div>
</codex-tutorial-example>

## Text alignment

Easily realign text with text alignment classes, `text-left`, `text-center`, and `text-right`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-16">
      <!-- important -->
      <p class="text-left">Left aligned text.</p>
      <p class="text-center">Center aligned text.</p>
      <p class="text-right">Right aligned text.</p>
      <!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## White space and truncation

Control text display by adjusting white space, word breaks, and truncation within elements. These
utilities can be applied to specific text elements or to all text within a container.

Use `.text-truncate` for truncation in a single line, or `.text-truncate-wrap` to truncate
long words on a multiline container (for example, an URL).

Use the `text-rtl` to change the text direction to right-to-left and shows the ellipsis at the
beginning.

Always add a `title` attribute with the full text so it is displayed in a tooltip.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-16">
  <div class="row">
    <div class="col-md-6">
      <h4 class="m-b-8"><code>text-nowrap</code></h4>
<!-- important -->
<p class="text-nowrap">This text won't wrap, it's always displayed even if when it's wider than the container.</p>
<!-- /important -->
<h4 class="m-b-8 m-t-24"><code>text-pre-wrap</code></h4>
<!-- important -->
<p class="text-pre-wrap">This text will render the content line breaks,
like it is in a &lt;pre&gt;.</p>
<!-- /important -->
      <h4 class="m-b-8 m-t-24"><code>text-break-all</code></h4>
<!-- important -->
<p class="text-break-all">This_will_wrap_splitting_words_not_considering_spelling._It_is_useful_for_example_when_you_have_a_long_url.</p>
<!-- /important -->

<!-- /important -->
<h4 class="m-b-8 m-t-24"><code>text-break-word</code></h4>
<!-- important -->
<p class="text-break-word">This will wrap splitting_words considering spelling._It_is_also_useful_for_long_urls.</p>
<!-- /important -->
    </div>
    <div class="col-md-6">
      <h4 class="m-b-8"><code>text-truncate</code></h4>
<!-- important -->
<p class="text-truncate" title="Use text-truncate to truncate a long sentence or a label when there's no available space.">
  Use text-truncate to truncate a long sentence or a label when there's no available space.
</p>
<!-- /important -->

<div class="text-truncate m-t-24">
  <span title="This is also a somewhat long sentence so you can see that it gets truncated.">
    This is also a somewhat long sentence so you can see that it gets truncated.
  </span><br>
  <span title="This is another long sentence, a bit longer than the previous one, so you can see that is gets truncated too.">
    This is another long sentence, a bit longer than the previous one, so you can see that is gets truncated too.
  </span>
</div>
<h4 class="m-b-8 m-t-24"><code>text-truncate</code><code>text-rtl</code></h4>
<div class="text-truncate text-rtl m-t-24">
  <span title="This is also a somewhat long sentence so you can see that it gets truncated.">
    This is also a somewhat long sentence so you can see that it gets truncated at the begining.
  </span>
</div>
  <h4 class="m-b-8 m-t-24"><code>text-truncate-wrap</code></h4>
<!-- important -->
<p class="text-truncate-wrap" title="Use text-truncate-wrap when one word doesn't fit in the available space of a multiline container, for example: https://demos.cumulocity.com/apps/devicemanagement/index.html#/device/635236265/info ">
  Use text-truncate-wrap when one word doesn't fit in the available space of a multiline container, for example: https://demos.cumulocity.com/apps/devicemanagement/index.html#/device/635236265/info
</p>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Responsive modifiers

Use the grid suffixes for targeting specific screen sizes, for example, `text-truncate-md`, `l-h-1-xs`.  
For more info, check [grid and vertical rythm](#/ui-guidelines/foundations/grid-and-vertical-rhythm/overview#responsive-grid).
