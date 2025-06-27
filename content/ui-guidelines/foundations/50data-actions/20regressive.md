---
title: Regressive
slug: regressive-actions
icon: done
order: 20
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Regressive actions, enable users to undo or remove changes.

Examples include delete, remove, cancel, and revert. These actions restore data integrity and
provide control and flexibility within the system.

## Cancel

This action stops the current action or ignores the changes and navigates back to the list.

> ### Inform the user
>
> Make sure to inform the user about possible negative consequences of stopping
> an operation from progressing, such as data corruption or data loss. For more information, check
> [Feedback](#/ui-guidelines/foundations/feedback).

### Cancel on buttons

Use the `btn-default` or a link but do not use an icon.

When used alongside other buttons, make sure this button is always the first to the left.

<codex-tutorial-example class="c8y-codex-override">
    <div class="container-fluid p-24">
<!-- important -->
<button class="btn btn-link" type="button">
  Cancel
</button>
<button class="btn btn-default" type="button">
  Cancel
</button>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Clear

Clears data from fields or remove selections. Typically, it reverts to the default selection or
value for controls that have a default selection or value.

### Clear on form fields

Wrap the `dlt-c8y-icon-times` icon on a `btn btn-clean` and place it in the right side of the field
or component. Make sure it is displayed only when it makes sense.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-md-6">
  <!-- important -->
  <div class="input-group input-group-search">
    <input
      type="search"
      class="form-control"
      placeholder="Search…"
      [(ngModel)]="data.label"
    />
    <span class="input-group-btn">
      <button class="btn btn-clean"
        *ngIf="!data.label"
      >
        <i c8yIcon="search"></i>
      </button>
      <button class="btn btn-clean"
        [attr.aria-label]="'Clear'"
        *ngIf="data.label"
        (click)="data.label=''"
      >
        <i c8yIcon="times"></i>
      </button>
    </span>
  </div>
  <!-- /important -->
    </div>
    <div class="col-md-6">
  <!-- important -->
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Placeholder"
      [(ngModel)]="data.label2"
    />
    <span class="input-group-btn">
      <button class="btn btn-clean" [attr.aria-label]="'Clear'" *ngIf="data.label2" (click)="data.label2=''">
        <i c8yIcon="times"></i>
      </button>
    </span>
  </div>
  <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Close

Action to close a modal, a component, a menu, or to dismiss a notification.

### Close on buttons

A button with the label `Close` must only be used in modals when there's no other action besides
closing.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <button type="button" class="btn btn-default">Close</button>
  </div>
</codex-tutorial-example>

### Close on components

Wrap the `dlt-c8y-icon-times` character on a button with the class `close` and place it in the top
right corner.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
  <!-- important -->
  <button type="button" class="close" title="Close">
    <i c8yIcon="times"></i>
  </button>
  <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Delete

This action eradicates an existing object from the platform. Delete operations cannot be easily
undone and are typically permanent.

> ### Ask for confirmation
>
> Be sure to notify the user about consequences of deleting an object (that is, loss of data) and always
> ask for confirmation. For more information, check
> [Feedback](#/ui-guidelines/foundations/feedback).

### Delete on buttons

Use the `btn btn-danger` variant with an optional `dlt-c8y-icon-trash-o` icon and the label. Being a
destructive action, make sure to always provide a confirmation mechanism to ensure that data is not
deleted by accident.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <button type="button" class="btn btn-danger">
      Delete
    </button>
    <button type="button" class="btn btn-danger">
      <i c8yIcon="trash-o"></i>
      Delete
    </button>
  </div>
</codex-tutorial-example>

### Delete on the action bar

Place the `dlt-c8y-icon-trash-o` icon followed by the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="c8y-ui-action-bar p-static p-r-24 p-l-24">
      <div class="navbar-nav navbar-right">
        <li>
  <!-- important -->
  <button class="btn btn-link">
    <i class="dlt-c8y-icon-trash-o"></i>
  Delete
  </button>
  <!-- /important -->
        </li>
      </div>
    </div>
  </div>
</codex-tutorial-example>

### Delete on a dropdown menu

Place the `dlt-c8y-icon-trash-o` icon followed by the label.

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
        <i c8yIcon="trash-o"></i>
        Delete
      </button>
    </li>
  </ul>
  <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

### Delete on a list of records

Place an `btn btn-dot btn-dot--danger` with a `dlt-c8y-icon-trash-o` icon inline at the end of each record.

#### Using a **table**

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
            <button
              type="button"
              class="btn btn-dot btn-dot--danger"
              tooltip="Delete"
              [attr.aria-label]="'Delete'"
              [delay]="350">
              <i c8yIcon="trash-o"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>Example record #2</td>
          <td>Type 2</td>
          <td>Just an example</td>
          <td class="text-right">
            <button
              type="button"
              class="btn btn-dot btn-dot--danger"
              tooltip="Delete"
              [attr.aria-label]="'Delete'"
              [delay]="350">
              <i c8yIcon="trash-o"></i>
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
            <button type="button" class="btn btn-dot btn-dot--danger" tooltip="Delete" [attr.aria-label]="'Delete'" [delay]="350">
              <i c8yIcon="trash-o"></i>
            </button>
          </div>
        </div>
      </c8y-li>
      <c8y-li>
        <c8y-li-icon icon="file"></c8y-li-icon>
        <div class="d-flex">
          <div>Example record #2</div>
          <div class="m-l-auto">
            <button type="button" class="btn btn-dot btn-dot--danger" tooltip="Delete" [attr.aria-label]="'Delete'" [delay]="350">
              <i c8yIcon="trash-o"></i>
            </button>
          </div>
        </div>
      </c8y-li>
    </c8y-list-group>
  </div>
</codex-tutorial-example>

## Remove

It removes an object from a list, item or component. While it removes the reference, it does not
actually destroy the object (for example, a device removed from a group remains available on the platform).

### Remove *on a list of records*

Place an `btn btn-dot btn-dot--danger` with a `dlt-c8y-icon-minus-circle` icon inline at the end of each record.

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
            <button type="button" class="btn btn-dot btn-dot--danger" tooltip="Remove" [attr.aria-label]="'Remove'" [delay]="350">
              <i c8yIcon="minus-circle"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>Example record #2</td>
          <td>Type 2</td>
          <td>Just an example</td>
          <td class="text-right">
            <button type="button" class="btn btn-dot btn-dot--danger" tooltip="Remove" [attr.aria-label]="'Remove'" [delay]="350">
              <i c8yIcon="minus-circle"></i>
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
            <button
              type="buttson"
              class="btn btn-dot btn-dot--danger"
              tooltip="Remove"
              [attr.aria-label]="'Remove'"
              [delay]="350"
            >
              <i c8yIcon="minus-circle"></i>
            </button>
          </div>
        </div>
      </c8y-li>
      <c8y-li>
        <c8y-li-icon icon="file"></c8y-li-icon>
        <div class="d-flex">
          <div>Example record #2</div>
          <div class="m-l-auto">
            <button
              type="button"
              class="btn btn-dot btn-dot--danger"
              tooltip="Remove"
              [attr.aria-label]="'Remove'"
              [delay]="350"
            >
              <i c8yIcon="minus-circle"></i>
            </button>
          </div>
        </div>
      </c8y-li>
    </c8y-list-group>
  </div>
</codex-tutorial-example>

#### Using a list

Place the `dlt-c8y-icon-minus-circle` icon, inline at the end of each entry.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-md-4">
        <div class="d-col gap-16">
  <!-- important -->
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Example input"/>
    <div class="input-group-btn">
      <button class="btn-dot btn-dot--danger" type="button"
        [attr.aria-label]="'Remove'"
        [adaptivePosition]="false"
        tooltip="Remove"
        [delay]="350"
      >
        <i class="dlt-c8y-icon-minus-circle"></i>
      </button>
    </div>
  </div>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Example input"/>
    <div class="input-group-btn">
      <button class="btn-dot btn-dot--danger" type="button"
        [attr.aria-label]="'Remove'"
        [adaptivePosition]="false"
        tooltip="Remove"
        [delay]="350"
      >
        <i class="dlt-c8y-icon-minus-circle"></i>
      </button>
    </div>
  </div>
  <!-- /important -->
        </div>
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Reset

Use this action to revert values to their last saved state. The previously saved state includes the
value stored the last time the user clicked or triggered **Apply**.

### Reset on buttons

Use the `btn btn-default` variant with an optional `dlt-c8y-icon-rotate-left` icon and the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button class="btn btn-default" type="button">
  Reset
</button>
<button class="btn btn-default" type="button">
  <i c8yIcon="rotate-left"></i>
  Reset
</button>
<!-- /important -->
  </div>
</codex-tutorial-example>

### Reset on the action bar

Place the `dlt-c8y-icon-rotate-left` icon followed by the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="c8y-ui-action-bar p-static p-r-24 p-l-24">
      <div class="navbar-nav navbar-right">
        <li>
  <!-- important -->
  <button class="btn btn-link">
    <i c8yIcon="rotate-left"></i>
    Reset
  </button>
  <!-- /important -->
        </li>
      </div>
    </div>
  </div>
</codex-tutorial-example>
