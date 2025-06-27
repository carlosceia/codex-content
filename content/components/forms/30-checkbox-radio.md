---
title: Checkboxes and radio buttons
slug: checkboxes-and-radio-buttons
icon: done
order: 30
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Checkboxes allow users to select one or multiple options from a list, while radio buttons enable the selection of a single option from several choices.

They are used for presenting options to users and allowing them to make selections.


## Default checkbox and radio button

For consistent styling across different browsers, it is essential to override the default appearance.
To achieve this, enclose the `input` element within a `label` element and apply the appropriate
class: `c8y-checkbox` for checkboxes or `c8y-radio` for radio buttons. Then, add an empty `span`, followed
by another `span` containing the label text.

Ensure proper styling by declaring the `type` attribute of the `input` element as either `checkbox`
or `radio`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <form class="col-sm-6">
        <!-- important -->
        <label class="c8y-checkbox" title="Checkbox One" >
          <input type="checkbox" checked="checked">
          <span></span>
          <span>Checkbox One</span>
        </label>
        <!-- /important -->
        <br>
        <!-- important -->
        <label class="c8y-checkbox" title="Checkbox Two" >
          <input type="checkbox">
          <span></span>
          <span>Checkbox Two</span>
        </label>
        <!-- /important -->
        <br>
        <!-- important -->
        <label title="Checkbox Three" class="c8y-checkbox">
          <input type="checkbox" [indeterminate]="true">
          <span></span>
          <span>Checkbox Three</span>
        </label>
        <!-- /important -->
      </form>
      <form class="col-sm-6">
        <!-- important -->
        <label class="c8y-radio" title="Radio One">
          <input type="radio" name="rgroup1" checked="checked">
          <span></span>
          <span>Radio One</span>
        </label>
        <!-- /important -->
        <br>
        <!-- important -->
        <label class="c8y-radio" title="Radio Two">
          <input type="radio" name="rgroup1">
          <span></span>
          <span>Radio Two</span>
        </label>
        <!-- /important -->
        <br>
        <!-- important -->
        <label title="Radio Three" class="c8y-radio">
          <input type="radio" name="rgroup1">
          <span></span>
          <span>Radio Three</span>
        </label>
        <!-- /important -->
      </form>
    </div>
  </div>
</codex-tutorial-example>

## Without a label

If your `<label>` doesn't contain any text, the input will be positioned as expected. This feature
is applicable only to non-inline checkboxes and radio buttons.

It is important to note that you can still provide some form of label for assistive technologies.
This can be achieved using the `title` attribute or the `aria-label` attribute.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <!-- important -->
    <label class="c8y-checkbox" title="Another checkbox without a label'">
      <input type="checkbox">
      <span></span>
    </label>
    <!-- /important -->
    <br>
    <!-- important -->
    <label class="c8y-checkbox" title="Another checkbox without a label">
      <input type="checkbox">
      <span></span>
    </label>
    <!-- /important -->
    <br>
    <!-- important -->
    <label class="c8y-radio input-sm" title="Radio button without a label">
      <input type="radio" name="nolabel">
      <span></span>
    </label>
    <!-- /important -->
    <br>
    <!-- important -->
    <label class="c8y-radio" [attr.aria-label]="'Another radio button without a label'">
      <input type="radio" name="nolabel">
      <span></span>
    </label>
    <!-- /important -->
  </div>
</codex-tutorial-example>

## Inline checkboxes and radios

For controls that have to be displayed in the same line, use the `.checkbox-inline` or `.radio-inline` classes on a series of checkboxes or radio buttons.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-8">
        <!-- Checkboxes -->
        <!-- important -->
        <label class="c8y-checkbox checkbox-inline" title="Checkbox one">
          <input type="checkbox" checked="checked">
          <span></span>
          <span>Checkbox one</span>
        </label>
        <label title="Checkbox two" class="c8y-checkbox checkbox-inline">
          <input type="checkbox">
          <span></span>
          <span>Checkbox two</span>
        </label>
        <label title="Checkbox three" class="c8y-checkbox checkbox-inline">
          <input type="checkbox" [indeterminate]="true">
          <span></span>
          <span>Checkbox three</span>
        </label>
        <!-- /important -->
        <br>
        <br>
        <br>
        <!-- Radion buttons -->
        <!-- important -->
        <label class="c8y-radio radio-inline" title="Radio One">
          <input type="radio" checked="checked" name="c8y-group">
          <span></span>
          <span>Radio One</span>
        </label>

        <label class="c8y-radio radio-inline" title="Radio Two">
          <input type="radio" name="c8y-group">
          <span></span>
          <span>Radio Two</span>
        </label>

        <label class="c8y-radio radio-inline" title="Radio Three">
          <input type="radio" name="c8y-group">
          <span></span>
          <span>Radio Three</span>
        </label>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Disabled state

Disabled checkboxes and radios are supported, but to provide a "not-allowed" cursor while hover on its parent `<label>`, you have to add the `.disabled` class to the parent `.radio` `.radio-inline`, `.checkbox`, `.c8y-checkbox`, or `.checkbox-inline`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <label class="c8y-checkbox disabled">
          <input type="checkbox" disabled>
          <span></span>
          <span>Disabled checkbox</span>
        </label>
        <!-- /important -->
        <br>
        <!-- important -->
        <label class="c8y-radio disabled">
          <input type="radio" disabled>
          <span></span>
          <span>Disabled radio button</span>
        </label>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <label class="c8y-checkbox disabled">
          <input type="checkbox" checked disabled>
          <span></span>
          <span>Disabled checkbox</span>
        </label>
        <!-- /important -->
        <br>
        <!-- important -->
        <label class="c8y-radio disabled">
          <input type="radio" checked disabled>
          <span></span>
          <span>Disabled radio button</span>
        </label>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>
