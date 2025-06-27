---
title: Typography
slug: typography
icon: done
order: 20
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->

The default Font Type used in Cumulocity is <a href="https://fonts.google.com/specimen/Public+Sans" target="_blank" rel="noopener noreferrer">Public Sans</a>. It is a modern font that provides excellent browser rendering and readability, even at small sizes.

## Font face

Available in three weights:  400, 600, and 700.

<table class="table m-b-40">
<tbody>
<tr>
<th class="text-normal">Public Sans 400 (normal)</th>
<td><p class="text-normal">The default font used across the interface. </p></td>
</tr>
<tr>
<th class="text-medium">Public Sans 600 (semibold)</th>
<td><p class="text-medium">The default font used in form labels. It also can be used when Bold might look overly prominent.</p>
</td>
</tr>
<tr>
<th class="text-bold">Public Sans 700 (bold)</th>
<td>
<p class="text-bold">To focus attention on essential interface elements that might go unnoticed otherwise.</p>
</td>
</tr>
</tbody>
</table>
<div>
<hr>
<h5 style="font-weight: 400;margin-bottom: 8px;">Public Sans 400</h5>
<h3 style="font-weight:400; margin-bottom:0; border-bottom:0;">
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
  <br>0123456789</h3>
<p>
  <small>
    <em>Weight: 400</em>
  </small>
</p>
<hr>
<h5 style="font-weight: 600;margin-bottom: 8px;">Public Sans 600</h5>
<h3 style="font-weight:600; margin-bottom:0; border-bottom:0;">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
  <br>0123456789</h3>
<p>
  <small>
    <em>Weight: 600</em>
  </small>
</p>
<hr>
<h5 style="font-weight: 700;margin-bottom: 8px;">Public Sans 700</h5>
<h3 style="font-weight:700; margin-bottom:0; border-bottom:0;">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
  <br>0123456789</h3>
<p>
  <small>
    <em>Weight: 700</em>
  </small>
</p>
<br>
</div>
<hr>

## Line height

In the context of our application, we primarily focus on smaller text snippets representing data. The need for long-form text is quite rare.

We take a pragmatic approach to spacing and line height by resetting all margins and paddings to 0, using a line height of `1.1` for all headings and `1.42857143` for the remaining elements.

## Headings

All HTML headings, from `<h1>` to `<h6>` are available. `.h1` to `.h6` classes are also available,
for when you want to match the font styling of a heading but still want your text to be displayed
inline.

For lighter, secondary text in any heading, use the generic `<small>` tag or the `.small` class.

<codex-tutorial-example>
  <h1><em>H1</em> Heading 1 <small>36px</small></h1>

  <h2><em>H2</em> Heading 2 <small>30px</small></h2>

  <h3><em>H3</em> Heading 3 <small>24px</small></h3>

  <h4><em>H4</em> Heading 4 <small>18px</small></h4>

  <h5><em>H5</em> Heading 5 <small>14px</small></h5>

  <h6><em>H6</em> Heading 6 <small>12px</small></h6>
</codex-tutorial-example>

## Body copy

The global default font-size is **14px**, with a line-height of **1.42857143**. This is applied to
the `<body>` and all paragraphs.

<codex-tutorial-example>
  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
  there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
  Semantics, a large language ocean. </p>
  <p>A small river named Duden flows by their place and supplies it with the necessary regalia.
  It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
</codex-tutorial-example>

### Lead

Make a paragraph stand out by adding the `.lead` class.

<codex-tutorial-example>
  <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and
  Consonantia, there live the blind texts.</p>
</codex-tutorial-example>

### Delete

For indicating blocks of text that have been deleted, use the `<del>` tag.

<codex-tutorial-example>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
</codex-tutorial-example>

### Underline

To underline text, use the `<u>` tag.

<codex-tutorial-example>
  <p><u>This line of text will render as underlined</u></p>
</codex-tutorial-example>

### Bold

For emphasizing a snippet of text with a heavier font-weight, use either `<b>` or `<strong>`.

> #### Note
>  
> While both have the same visual effect, `<b>` is a text decoration, but `<strong>` is actually
> read by the browser as an element of higher importance in the page.

<codex-tutorial-example>
  <p>The following text is <b>rendered as bold text</b>.</p>
  <p>The following text is <strong>rendered as bold text</strong>.</p>
</codex-tutorial-example>

### Italic

For emphasizing a snippet of text with italics, use `<em>`.

<codex-tutorial-example>
  <p>The following text is <em>rendered as italic text</em>.</p>
</codex-tutorial-example>

### Small

For de-emphasizing inline or blocks of text, use the `<small>` tag. This will set the text to 85% the size of its parent. Heading elements receive their own `font-size` for nested `<small>` elements.

You may alternatively use an inline element with `.small` in place of any `<small>`.

<codex-tutorial-example>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p class="small">This line of text is meant to be treated as fine print.</p>
</codex-tutorial-example>

## Abbreviations

Use the `<abbr>` tag for abbreviations and acronyms, an expanded version will show when hovering
them. Abbreviations with a `title` attribute have a light dotted bottom border and a help cursor on
hover, providing additional context on hover and to users of assistive technologies.

<codex-tutorial-example>
  <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
</codex-tutorial-example>

### Initialism

Add `.initialism` to an abbreviation for a slightly smaller font-size.

<div>
  <codex-tutorial-example>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr> is the best thing since sliced bread.</p>
   </codex-tutorial-example>
</div>

## Addresses

Display contact information wrapped in a `<address>` tag. Preserve formatting by ending all lines
with `<br>`.

<codex-tutorial-example>
<div>
  <address>
    <strong>Company GmbH.</strong><br>
    Straße 1999<br>
    Düsseldorf<br>
    Germany<br>
    </address>
    <br>
    <address>
    <strong>Jane Doe</strong><br>
    <abbr title="Mobile">M:</abbr> <a href="tel:1234567890"> (123) 456-8590</a><br>
    <abbr title="Telephone">T:</abbr> <a href="tel:1234567891"> (123) 626-3341</a>
  </address>
</div>
</codex-tutorial-example>

## Lists

Use lists to group related pieces of information together, easy to read and clearly associated with each other.

### Unordered lists

A list of items in which the order does not explicitly matter.

<codex-tutorial-example>
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
</codex-tutorial-example>

### Ordered lists

A list of items in which the order does explicitly matter.

<codex-tutorial-example>
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
</codex-tutorial-example>

### Unstyled lists

Remove the default `list-style` and `margin-left` on list items. It only applies to immediate children list items, meaning you must add the class for any nested lists as well.

<codex-tutorial-example>
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
</codex-tutorial-example>

### Inline lists

Place all list items on a single line with some light padding using `.list-inline`.

<codex-tutorial-example>
<ul class="list-inline">
  <li>Lorem ipsum</li>
  <li>Phasellus iaculis</li>
  <li>Nulla volutpat</li>
</ul>
</codex-tutorial-example>

## Description lists

A list of terms with associated descriptions.

<codex-tutorial-example>
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
</codex-tutorial-example>

### Horizontal description list

Make terms and descriptions line up side-by-side using `<dl>` tag and `.dl-horizontal` class.

<codex-tutorial-example>
<dl class="dl-horizontal">
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt>Felis euismod semper eget lacinia</dt>
  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
</dl>
</codex-tutorial-example>

> ### Auto-truncating
>
> In horizontal description lists, terms that are too long to fit in the left column will be
> truncated with `text-overflow`. In narrower viewports, they will change to the default stacked
> layout.

## Code

### Inline

Wrap inline snippets of code with `<code>`.

<codex-tutorial-example>
<p> For example, <code>section</code> has to be wrapped as inline.</p>
</codex-tutorial-example>

### User input

Use the `<kbd>` to indicate input that is typically entered via keyboard.

<codex-tutorial-example>
<p>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<p>

<p>To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd></p>
</codex-tutorial-example>

### Basic block

Use `<pre>` for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering.

You may optionally add the `.pre-scrollable` class, which will set a max-height of 350px and provide a y-axis scrollbar.

<codex-tutorial-example>
  <pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
</codex-tutorial-example>

### Variables

For indicating variables, use the `<var>` tag.

<codex-tutorial-example>
<p><var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>
</codex-tutorial-example>

### Sample output

To represent blocks as sample output from a program, use the `<samp>` tag.

If you just want to style text as sample output, use the `.text-monospace` class.

<codex-tutorial-example>
<p><samp>This text is read by the browser as sample output from a computer program.</samp></p>
<p class="text-monospace">This text is styled as sample output from a computer program.</p>
</codex-tutorial-example>
