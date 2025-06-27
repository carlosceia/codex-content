---
title: Display and visibility
slug: display-and-visibility
icon: done
order: 30
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD051 -->

Controlling the display and visibility of elements is crucial for creating responsive and adaptive
layouts.

Our display utilities offer classes to toggle the visibility and display properties of your
elements, ensuring they appear and behave as intended across different devices and screen sizes.

## Display

The `display` CSS property sets whether an element is treated as a block or inline element and the
layout used for its children, such as flow layout, grid or flex.

Change this property with responsive display utility classes supporting a subset of the possible
values.

Use the grid suffixes for targeting specific screen sizes, for example, `d-block-sm`. Check
[grid and vertical rythm](#/ui-guidelines/foundations/grid-and-vertical-rhythm/overview#responsive-grid).

<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Class</th>
        <th>Property</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row"><code>d-inline</code></th>
        <td class="text-nowrap"><pre>display: inline</pre></td>
        <td>Wrapping those elements within a string of text doesn’t break the flow of the text.
            Margin and padding will only push other elements horizontally away, not vertically.
        </td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"><code>d-inline-block</code></th>
        <td class="text-nowrap"><pre>display: inline-block</pre></td>
        <td>Similar to inline, that means, it will set inline with the natural flow of text
          (on the “baseline”). The difference is that you are able to set a width and height
          which will be respected.</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"><code>d-block</code></th>
        <td class="text-nowrap"><pre>display: block</pre></td>
        <td>Block level elements do not sit inline but break past them. By default (without setting
          a width) they take up as much horizontal space as they can.</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"><code>d-flex</code></th>
        <td class="text-nowrap"><pre>display: flex</pre></td>
        <td>Displays an element as a block-level flex container. Check
          <a href="#/ui-guidelines/utilities/flex-containers"> flex containers</a> for more details.</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"><code>d-col</code></th>
        <td class="text-nowrap"><pre>display:flex; flex-direction: column</pre></td>
        <td>A flex container with direction column.
          Check <a href="#/ui-guidelines/utilities/flex-containers"> flex containers</a> for details.
        </td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"><code>d-grid</code></th>
        <td class="text-nowrap"><pre>display: grid</pre></td>
        <td>Displays an element as a block-level grid container. Check
          <a href="#/ui-guidelines/utilities/grid-containers">grid containers</a> for details.</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"><code>d-contents</code></th>
        <td class="text-nowrap"><pre>display: contents</pre></td>
        <td>Ignores the container as it doesn't exist, making the child elements children of the
          current element parent.</td>
      </tr>
    </tbody>
  </table>
</div>

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid">
    <div class="m-b-24 p-t-24">
    <p class="m-b-16"><code>d-inline</code></p>
<!-- important -->
<div class="d-inline bg-gray-30 p-8 text-white">
  Content
</div>
<div class="d-inline bg-primary p-8 text-white">
  More content
</div>
<!-- /important -->
  </div>
  <div class="m-b-24">
    <p class="m-b-4"><code>d-inline-block</code></p>
<!-- important -->
<div class="d-inline-block bg-gray-30 p-8 text-white">
  Content
</div>
<div class="d-inline-block bg-primary p-8 text-white">
  More content
</div>
<!-- /important -->
</div>
<div class="m-b-24">
  <p class="m-b-4"><code>d-block</code></p>
<!-- important -->
<div class="d-block bg-gray-30 p-8 text-white">
  Content
</div>
<div class="d-block bg-primary p-8 text-white">
  More content
</div>
<!-- /important -->
</div>
<div class="m-b-24">
    <p class="m-b-4"><code>d-flex</code></p>
<!-- important -->
<div class="d-flex bg-gray-30 p-8 text-white">
  Content
</div>
<div class="d-flex bg-primary p-8 text-white">
  More content
</div>
<!-- /important -->
</div>
<div class="m-b-24">
    <p class="m-b-4"><code>d-col</code></p>
<!-- important -->
<div class="d-col bg-gray-30 p-8 text-white">
  Content
</div>
<div class="d-col bg-primary p-8 text-white">
  More content
</div>
<!-- /important -->
</div>
<div class="m-b-24">
    <p class="m-b-4"><code>d-grid</code></p>
<!-- important -->
<div class="d-grid bg-gray-30 p-8 text-white">
  Content
</div>
<div class="d-grid bg-primary p-8 text-white">
  More content
</div>
<!-- /important -->
</div>
<div class="m-b-24">
    <p class="m-b-4"><code>d-contents</code></p>
<!-- important -->
<div class="d-contents bg-gray-30 p-8">
  Content
</div>
<div class="d-contents bg-primary p-8">
  More content
</div>
<!-- /important -->
  </div>
  </div>
</div>
</codex-tutorial-example>

## Show/hide

Force an element to be shown or hidden, **including for screen readers**, with the use of `.show`
and `.hidden` or `.sr-only` classes. These classes use `!important` to avoid specificity conflicts,
just like quick floats. They're only available for block level toggling.

The `.invisible` class can be used to toggle only the visibility of an element, meaning its
`display` is not modified and the element can still affect the flow of the document.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-t-16 p-b-24">
<!-- important -->
<div class="show">Display block in this one. Click the "show code" button to check the other examples</div>
<div class="hidden">Display none on this one.</div>
<div class="sr-only">Not displayed, but available for screen readers.</div>
<div class="invisible">Completely invisible but affecting the flow of the document.</div>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Responsive visibility

Use a single or combination of the available classes for toggling content across viewport
breakpoints.

<div class="table-responsive">
  <table class="table table-striped responsive-utilities">
    <thead>
      <tr>
        <th></th>
        <th> Extra small devices
          <small>Phones (&lt;768px)</small>
        </th>
        <th> Small devices
          <small>Tablets (≥768px)</small>
        </th>
        <th> Medium devices
          <small>Desktops (≥992px)</small>
        </th>
        <th> Large devices
          <small>Desktops (≥1200px)</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="text-nowrap">
          <code>.visible-xs-*</code>
        </th>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.visible-sm-*</code>
        </th>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.visible-md-*</code>
        </th>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.visible-lg-*</code>
        </th>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <th scope="row">
          <code>.hidden-xs</code>
        </th>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.hidden-sm</code>
        </th>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.hidden-md</code>
        </th>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.hidden-lg</code>
        </th>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
      </tr>
    </tbody>
  </table>
</div>

The `.visible-**` classes for each breakpoint come in five variations, one for each CSS `display`
property value listed below.

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Group of classes</th>
        <th>Display property
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <code>.visible-**-block</code>
        </th>
        <td>
          <pre>display: block;</pre>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <code>.visible-**-inline</code>
        </th>
        <td>
          <pre>display: inline;</pre>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <code>.visible-**-inline-block</code>
        </th>
        <td>
          <pre>display: inline-block;</pre>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <code>.visible-**-flex</code>
        </th>
        <td>
          <pre>display: flex;</pre>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <code>.visible-**-grid</code>
        </th>
        <td>
          <pre>display: grid;</pre>
        </td>
      </tr>
    </tbody>
  </table>
</div>
