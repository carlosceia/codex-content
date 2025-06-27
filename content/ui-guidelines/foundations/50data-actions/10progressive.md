---
title: Progressive
slug: progressive-actions
icon: done
order: 10
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD033 -->

Progressive actions drive forward movement within a system or application.

These actions include adding, creating, editing, and saving data. By enabling users to
contribute, evolve, and securely manage their information, these actions foster a dynamic user
experience.

## Add

It is used to create a new object of specific type and add it to a list, object, or set.

Note that creating and adding are two separate steps but in the UI both terms usually refer to the
process of creating and adding.

### Add on buttons

Use a `btn` variant, such as `btn-primary` and the label, preceded by an optional
`dlt-c8y-icon-plus-circle` icon, if needed.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button class="btn btn-link" type="button">
  Add something
</button>
<button class="btn btn-default" type="button">
  Add something
</button>
<button class="btn btn-primary" type="button">
  Add something
</button>
<!-- /important -->
  </div>
  <div class="container-fluid p-24">
<!-- important -->
<button class="btn btn-link" type="button">
  <i c8yIcon="plus-circle"></i>
  Add something
</button>
<button class="btn btn-default" type="button">
  <i c8yIcon="plus-circle"></i>
  Add something
</button>
<button class="btn btn-primary" type="button">
  <i c8yIcon="plus-circle"></i>
  Add something
</button>
<!-- /important -->
  </div>
</codex-tutorial-example>

### Add on the action bar

Place the `dlt-c8y-icon-plus-circle` icon followed by the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="c8y-ui-action-bar p-static p-r-24 p-l-24">
      <div class="navbar-nav navbar-right">
        <li>
  <!-- important -->
  <button class="btn btn-link">
    <i class="dlt-c8y-icon-plus-circle"></i>
    Add something
  </button>
  <!-- /important -->
        </li>
        <li>
          <button class="btn btn-link">
            <i class="dlt-c8y-icon-plus-circle"></i>
            Add something else
          </button>
        </li>
      </div>
    </div>
  </div>
</codex-tutorial-example>

### Add on a dropdown menu

Place the `dlt-c8y-icon-plus-circle` icon followed by the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div style="min-height: 130px; max-width: 300px; text-align: right;">
      <!-- important -->
      <div class="dropdown open">
        <button class="dropdown-toggle c8y-dropdown">
          <i c8yIcon="ellipsis-v"></i>
        </button>
  <!-- important -->
  <ul class="dropdown-menu dropdown-menu-right">
    <li>
      <button>
        <i c8yIcon="plus-circle"></i>
        Add something
      </button>
    </li>
    <li>
      <button>
        <i c8yIcon="plus-circle"></i>
        Add something else
      </button>
    </li>
  </ul>
  <!-- /important -->
      </div>
      <!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

### Add on a list

Place the `dlt-c8y-icon-plus-circle` icon, set in the brand primary color, inline at the end of the last entry.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-md-4">
        <div class="d-col gap-16">
  <!-- important -->
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Example input"/>
    <div class="input-group-btn">
      <button class="btn-dot text-primary invisible" type="button"
        [attr.aria-label]="'Add'"
        [adaptivePosition]="false"
        tooltip="Add"
        [delay]="350"
      >
        <i class="dlt-c8y-icon-plus-circle"></i>
      </button>
    </div>
  </div>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Example input"/>
    <div class="input-group-btn">
      <button class="btn-dot text-primary" type="button"
        [attr.aria-label]="'Add'"
        [adaptivePosition]="false"
        tooltip="Add"
        [delay]="350"
      >
        <i class="dlt-c8y-icon-plus-circle"></i>
      </button>
    </div>
  </div>
  <!-- /important -->
        </div>
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Duplicate

Action used to create a second instance of an object to be used as a "template" for a new instance.

### Duplicate on buttons

Use a `btn` variant with an optional `dlt-c8y-icon-copy` icon and the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button class="btn btn-link" type="button">
  Duplicate
</button>
<button class="btn btn-default" type="button">
  Duplicate
</button>
<button class="btn btn-primary" type="button">
  Duplicate
</button>
<!-- /important -->
  </div>
  <div class="container-fluid p-24">
<!-- important -->
<button class="btn btn-link" type="button">
  <i c8yIcon="copy"></i>
  Duplicate
</button>
<button class="btn btn-default" type="button">
  <i c8yIcon="copy"></i>
  Duplicate
</button>
<button class="btn btn-primary" type="button">
  <i c8yIcon="copy"></i>
  Duplicate
</button>
<!-- /important -->
  </div>
</codex-tutorial-example>

### Duplicate on the action bar

Place the `dlt-c8y-icon-copy` icon followed by the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="c8y-ui-action-bar p-static p-r-24 p-l-24">
      <div class="navbar-nav navbar-right">
        <li>
  <!-- important -->
  <button class="btn btn-link">
    <i c8yIcon="copy"></i>
    Duplicate
  </button>
  <!-- /important -->
        </li>
      </div>
    </div>
  </div>
</codex-tutorial-example>

### Duplicate on a dropdown menu

Place the `dlt-c8y-icon-copy` icon followed by the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div style="min-height: 130px; max-width: 300px; text-align: right;">
      <div class="dropdown open">
        <button class="dropdown-toggle c8y-dropdown">
          <i c8yIcon="ellipsis-v"></i>
        </button>
  <!-- important -->
  <ul class="dropdown-menu dropdown-menu-right">
    <li>
      <button>
        <i c8yIcon="copy"></i>
        Duplicate
      </button>
    </li>
  </ul>
  <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Edit

Allows for objects, data or values to be changed. It can trigger either a state change in the
component or open an editor view.

### Edit on buttons

Use a `btn` variant with an optional `dlt-c8y-icon-pencil` icon and the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button class="btn btn-link" type="button">
  Edit
</button>
<button class="btn btn-default" type="button">
  Edit
</button>
<button class="btn btn-primary" type="button">
  Edit
</button>
<!-- /important -->
  </div>
  <div class="container-fluid p-24">
<!-- important -->
<button class="btn btn-link" type="button">
  <i c8yIcon="pencil"></i>
  Edit
</button>
<button class="btn btn-default" type="button">
  <i c8yIcon="pencil"></i>
  Edit
</button>
<button class="btn btn-primary" type="button">
  <i c8yIcon="pencil"></i>
  Edit
</button>
<!-- /important -->
  </div>
</codex-tutorial-example>

### Edit on the action bar

Place the `dlt-c8y-icon-pencil` icon followed by the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
  <div class="c8y-ui-action-bar p-static p-r-24 p-l-24">
    <div class="navbar-nav navbar-right">
      <li>
<!-- important -->
<button class="btn btn-link">
  <i c8yIcon="pencil"></i>
  Edit
</button>
<!-- /important -->
      </li>
    </div>
  </div>
  </div>
</codex-tutorial-example>

### Edit on a dropdown menu

Place the `dlt-c8y-icon-pencil` icon followed by the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div style="min-height: 130px; max-width: 300px; text-align: right;">
      <div class="dropdown open">
        <button class="dropdown-toggle c8y-dropdown">
          <i c8yIcon="ellipsis-v"></i>
        </button>
        <!-- important -->
        <ul class="dropdown-menu dropdown-menu-right">
          <li>
            <button>
              <i c8yIcon="pencil"></i>
              Edit
            </button>
          </li>
        </ul>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

### Edit on a list of records

Place an `btn btn-dot` with a `dlt-c8y-icon-pencil` icon set in the brand primary color, inline at
the end of each record.

Whenever possible, also place the edit link in the name of the record.

#### Using a table

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <table class="table separator-bottom">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Example record #1</td>
          <td>Type 1</td>
          <td>Just an example</td>
          <td class="text-right">
            <button type="button" class="btn btn-dot" tooltip="Edit" [attr.aria-label]="'Edit'" [delay]="350">
              <i class="dlt-c8y-icon-pencil text-primary"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>Example record #2</td>
          <td>Type 2</td>
          <td>Just an example</td>
          <td class="text-right">
            <button type="button" class="btn btn-dot" tooltip="Edit" [attr.aria-label]="'Edit'" [delay]="350">
              <i class="dlt-c8y-icon-pencil text-primary"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</codex-tutorial-example>

#### Using a list-group

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <c8y-list-group class="separator-top">
      <c8y-li>
        <c8y-li-icon icon="file"></c8y-li-icon>
        <div class="d-flex">
          <div>Example record #1</div>
          <div class="m-l-auto">
            <button type="button" class="btn btn-dot" tooltip="Edit" [attr.aria-label]="'Edit'" [delay]="350">
              <i class="dlt-c8y-icon-pencil text-primary"></i>
            </button>
          </div>
        </div>
      </c8y-li>
      <c8y-li>
        <c8y-li-icon icon="file"></c8y-li-icon>
        <div class="d-flex">
          <div>Example record #2</div>
          <div class="m-l-auto">
            <button type="button" class="btn btn-dot" tooltip="Edit" [attr.aria-label]="'Edit'" [delay]="350">
              <i class="dlt-c8y-icon-pencil text-primary"></i>
            </button>
          </div>
        </div>
      </c8y-li>
    </c8y-list-group>
  </div>
</codex-tutorial-example>

### Edit on forms

When displaying a form as read-only, you can enable editing the whole form by placing an edit button
at the bottom.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <!-- important -->
    <form
      class="form-editable hidden-labels"
      [ngClass]="{'form-read-only': !data.editable }"
      name="groupDetailsForm"
    >
    <!-- […] -->
    <!-- /important -->
      <div class="form-group">
        <label for="group-name">Group name</label>
        <input
          id="group-name"
          type="text"
          class="form-control"
          value="Group A"
          maxlength="254"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" rows="2" class="form-control" placeholder="add some notes">
          Some description text.
        </textarea>
      </div>
    <!-- important -->
      <button (click)="data.editable=!data.editable" class="btn btn-link form-edit-btn">
        <i c8yIcon="pencil"></i>
        <span translate>
          Edit
        </span>
      </button>
      <div class="form-actions">
        <button type="button" class="btn btn-default" (click)="data.editable=!data.editable">
          <span translate>Cancel</span>
        </button>
        <button type="submit" class="btn btn-primary" translate>
          Save
        </button>
      </div>
    </form>
    <!-- /important -->
  </div>
</codex-tutorial-example>

### Edit on form fields

To simplify and remove clutter, you can display input fields as static text with a pencil icon on
the right-hand side. Hovering or focusing the field will render the regular input taking the full
width of the parent container. To ensure signaling the updated fields on a group of editable fields,
you can either rely on the existence of the class `ng-pristine` on the input field, or add the class
`updated` to the `label.editable` so it's rendered as a regular input field.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
  <!-- important -->
  <div class="form-group">
    <label class="sr-only">Label</label>
  <label class="editable" [ngClass]="{'updated': false}">
    <input
      type="text"
      class="form-control"
      placeholder="Placeholder"
      [(ngModel)]="data.label"
      [style.width.ch]="(data.label?.length || 9) + 2"
    />
  </label>
  </div>
  <div class="form-group">
    <label>Label</label>
    <label class="editable" [ngClass]="{'updated': false}">
      <input
      type="text"
      class="form-control"
      placeholder="Placeholder"
      [ngModel]="data.anotherlabel"
      [style.width.ch]="(data.anotherlabel?.length || 9) + 2"
      />
    </label>
  </div>
  <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Reload

Reloads the view of a list or data set. It's recommended to add this action when the displayed
content may become unsynchronized with the source.

### Reload on the action bar

Place the `dlt-c8y-icon-refresh` icon followed by the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="c8y-ui-action-bar p-static p-r-24 p-l-24">
      <div class="navbar-nav navbar-right">
        <li>
  <!-- important -->
  <button class="btn btn-link">
    <i c8yIcon="refresh"></i>
    Reload
  </button>
  <!-- /important -->
        </li>
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Next

This action takes the user to the next step in its current sequence (for example, as in a stepper).

### Next on buttons

Use a `btn-primary` button with the label "Next", and do not use an icon.

Make sure the button is disabled when required fields are not filled in.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <button type="button" class="btn btn-primary">
      Next
    </button>
  </div>
</codex-tutorial-example>

## Save

The "Save" action is used to submit a field or a form when editing or creating a new record.

When used alongside other buttons, it is recommended to position it at the end. Placing it last
ensures a logical flow and makes it easily accessible for users.

### Save on buttons

Use a `btn-primary` button with the label "Save", and don't use an icon.

Make sure the button is disabled when required fields are not filled in.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <button type="button" class="btn btn-primary">
      Save
    </button>
  </div>
</codex-tutorial-example>
