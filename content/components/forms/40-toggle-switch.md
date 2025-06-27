---
title: Toggle switch
slug: toggle-switch
icon: done
order: 40
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The toggle switch is an UI element that provides a simple and intuitive way to toggle between two states, typically representing "On" and "Off" options.

It offers a more compact and visually appealing alternative to checkboxes for binary choices.

## Default toggle switch

This component uses a checkbox and the `:checked` pseudo-selector to enable toggling functionality without requiring Javascript.

While the label is optional, it's important to ensure accessibility by providing some form of label for assistive technologies. This can be achieved using the `title` attribute or the `aria-label`.

The regular `c8y-switch` component has a default height matching that of input fields. If you wish to incorporate it inline with text, you can use the `c8y-switch--inline` class to ensure proper vertical alignment.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="p-b-16">
      <!-- important -->
      <label class="c8y-switch">
        <input type="checkbox" checked="checked">
        <span></span> Toggle switch label
      </label>
      <!-- /important -->
    </div>
    <div class="p-b-16">
      <!-- important -->
      <label class="c8y-switch"
      title="Switch on/off">
      <input type="checkbox">
      <span></span>
      </label>
      <!-- /important -->
    </div>
    <div>
    <!-- important -->
    <p>
      Some text with the toggle switch aligned
      <label class="c8y-switch c8y-switch--inline">
        <input type="checkbox" >
        <span></span> Toggle switch label
      </label>
    </p>
    <!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Large toggle switch containing the label

For a more visually impactful toggle switch, consider the toggle switch concept where the
label is inside the toggle handle itself. To achieve this effect, we leverage the
`btnCheckbox` directive available in [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/components/buttons?tab=overview%23checkbox).

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- /important -->
<button type="button"
  class="btn active"
  [ngClass]="{'active': btntoggle1}"
  btnCheckbox
  (click)="btntoggle1 = !btntoggle1">
  <i c8yIcon="warning" class="status critical stroked-icon"></i>
  Critical
</button>
<!-- /important -->
  <button type="button"
    class="btn"
    [ngClass]="{'active': btntoggle2}"
    btnCheckbox
    (click)="btntoggle2 = !btntoggle2">
    <i c8yIcon="exclamation-circle" class="status major stroked-icon"></i>
    Major
  </button>
  <button type="button"
    class="btn active"
    [ngClass]="{'active': btntoggle3}"
    btnCheckbox
      (click)="btntoggle3 = !btntoggle3">
    <i c8yIcon="high-priority" class="status minor stroked-icon"></i>
    Minor
  </button>
  <button type="button"
    class="btn active"
    [ngClass]="{'active': btntoggle4}"
    btnCheckbox
    (click)="btntoggle4 = !btntoggle4">
    <i c8yIcon="circle" class="status warning stroked-icon"></i>
    Warning
  </button>
</div>
</codex-tutorial-example>
