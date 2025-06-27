---
title: Form
slug: form
icon: done
order: 100
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

A form enables users to input data for various purposes.

It uses simple interactions, enabling users to effortlessly add, edit, and
remove information according to their needs.

## Default form

Wrap all labels and controls in a `.form-group` or a `c8y-form-group` for optimum spacing.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <div class="row">
    <div class="col-md-8">
      <!-- important -->
      <form>
        <c8y-form-group>
          <label for="exampleName">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleName"
            placeholder="e.g. Jane Doe"
          />
        </c8y-form-group>
        <c8y-form-group>
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="e.g. jane.doe@mail.com"
          />
        </c8y-form-group>
        <c8y-form-group>
          <label for="exampleSelect">Role</label>
          <div class="c8y-select-wrapper">
            <select
              id="exampleSelect"
              class="form-control"
            >
              <option
                disabled
                selected
              >
                Select…
              </option>
              <option>Administrator</option>
              <option>Business</option>
              <option>Global manager</option>
              <option>Tenant manager</option>
            </select>
          </div>
        </c8y-form-group>
        <c8y-form-group>
          <label class="c8y-checkbox">
            <input type="checkbox" />
            <span></span>
            <span>Enable user</span>
          </label>
        </c8y-form-group>
        <button
          class="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
      <!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

## Inline form

Add `.form-inline` to your form, which doesn't have to be a `<form>`, for left-aligned and
inline-block controls.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <!-- important -->
  <form class="form-inline">
    <div class="form-group">
      <label for="exampleInputName2">Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputName2"
        placeholder="e.g. Jane Doe"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail2">Email</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail2"
        placeholder="e.g. jane.doe@mail.com"
        autocomplete="off"
      />
    </div>
    <button
      type="submit"
      class="btn btn-primary"
    >
      Send invitation
    </button>
  </form>
  <!-- /important -->
  <br />
  <br />
  <!-- important -->
  <form class="form-inline">
    <div class="form-group">
      <label
        class="sr-only"
        for="exampleInputAmount"
      >
        Amount (in Euros)
      </label>
      <div class="input-group">
        <div class="input-group-addon">€</div>
        <input
          type="text"
          class="form-control"
          id="exampleInputAmount"
          placeholder="Amount"
        />
        <div class="input-group-addon">,00</div>
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
    >
      Transfer cash
    </button>
  </form>
  <!-- /important -->
</div>
</codex-tutorial-example>

> ### Note
>
> This only applies to forms within viewports that are at least 768px wide, below this size
> form-groups revert back to their default layout.

## Horizontal form

Use predefined grid classes (for example, `.col-sm-10`,`.col-md-6`) to align labels and groups of form
controls in a horizontal layout by adding `.form-horizontal` to the form. This enables the `.form-group` to behave as grid rows, so no need to add a `.row`.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <div class="row">
    <div class="col-md-8">
      <!-- important -->
      <form class="form-horizontal">
        <div class="form-group">
          <label
            for="inputEmail3"
            class="col-sm-2 control-label"
          >
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="e.g. jane.doe@mail.com"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="form-group">
          <label
            for="inputPassword3"
            class="col-sm-2 control-label"
          >
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              placeholder="Password"
              class="form-control"
              id="inputPassword3"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <label class="c8y-checkbox input-sm">
              <input type="checkbox" />
              <span></span>
              <span>Remember me</span>
            </label>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button
              type="submit"
              class="btn btn-primary"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
      <!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

## Display form fields using a grid

Use the [grid system](#/ui-guidelines/utilities/using-the-grid/overview) to create the grid and
distribute space.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <!-- important -->
  <form class="row">
    <div class="col-xs-12">
      <c8y-form-group>
        <label for="companyName">Company name</label>
        <input
          type="text"
          id="companyName"
          class="form-control"
          placeholder="e.g. Company A (required)"
          required
        />
      </c8y-form-group>
    </div>
    <div class="col-xs-12 col-md-6">
      <c8y-form-group>
        <label for="contactName">Contact name</label>
        <input
          type="text"
          class="form-control"
          id="contactName"
          required
          placeholder="e.g. Jane Doe (required)"
        />
      </c8y-form-group>
    </div>
    <div class="col-xs-12 col-md-6">
      <c8y-form-group>
        <label for="contactPhone">Contact phone</label>
        <input
          type="text"
          class="form-control"
          id="contactPhone"
          placeholder="e.g. +49 9 876 543 210 (required)"
          required
        />
      </c8y-form-group>
    </div>
    <div class="col-xs-12 col-md-6">
      <c8y-form-group>
        <label for="adminEmail">Administrator's email</label>
        <input
          type="email"
          class="form-control"
          id="adminEmail"
          placeholder="e.g. jane.doe@example.com (required)"
          required
        />
      </c8y-form-group>
    </div>
    <div class="col-xs-12 col-md-6">
      <c8y-form-group>
        <label for="adminName">Administrator's username</label>
        <input
          type="text"
          class="form-control"
          id="adminName"
          placeholder="e.g. jane (required)"
          required
        />
      </c8y-form-group>
    </div>
  </form>
  <!-- /important -->
</div>
</codex-tutorial-example>

## Readonly forms

To display input fields as plain text and disallow editing, add the `form-read-only` class to the
`form` or to wrapper, and disable all inputs.

If you also want to hide the labels, add the class `hidden-labels`.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <c8y-form-group class="row">
    <div class="col-md-5">
      <p class="legend form-block">With visible labels</p>
      <!-- important -->
      <!-- Visible labels -->
      <form class="form-read-only">
        <c8y-form-group>
          <label for="group-name1">Group name</label>
          <input
            id="group-name1"
            disabled
            type="text"
            class="form-control"
            value="Temperature sensors"
            maxlength="254"
            required
          />
        </c8y-form-group>
        <c8y-form-group>
          <label for="description1">Description</label>
          <textarea id="description1" disabled rows="2" class="form-control">Group holding all temperature sensors
          </textarea>
        </c8y-form-group>
        <div class="form-actions">
          <button
            type="button"
            class="btn btn-default"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-primary"
          >
            Save
          </button>
        </div>
      </form>
      <!-- /important -->
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
      <p class="legend form-block">With hidden labels</p>
      <!-- important -->
      <!-- Hidden labels -->
      <form class="form-read-only hidden-labels">
        <c8y-form-group>
          <label for="group-name2">Group name</label>
          <input
            id="group-name2"
            type="text"
            disabled
            class="form-control"
            value="Temperature sensors"
            maxlength="254"
            required
          />
        </c8y-form-group>
        <div class="form-group">
          <label for="description2">Description</label>
          <textarea
            id="description2"
            rows="2"
            disabled
            class="form-control">Group holding all temperature sensors</textarea>
        </div>
        <div class="form-actions">
          <button
            type="button"
            class="btn btn-default"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-primary"
          >
            Save
          </button>
        </div>
      </form>
      <!-- /important -->
    </div>
  </c8y-form-group>
</div>
</codex-tutorial-example>

### Toggle readonly

To allow editing, just provide a `.form-edit-btn` button after the last `form-group` and add some
logic to toggle the `form-read-only` class and the `disabled` attribute on the form-controls.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <c8y-form-group class="row">
    <div class="col-md-5">
      <p class="legend form-block">With visible labels</p>
      <!-- important -->
      <!-- Visible labels -->
      <form
        class="form-read-only"
        [ngClass]="{'form-read-only': !data.editable }"
      >
        <c8y-form-group>
          <label for="group-name12">Group name</label>
          <input
            id="group-name12"
            [disabled]="!data.editable"
            type="text"
            class="form-control"
            value="Temperature sensors"
            maxlength="254"
            required
          />
        </c8y-form-group>
        <c8y-form-group>
          <label for="description333">Description</label>
          <textarea
            id="description333"
            rows="2"
            class="form-control">Group holding all temperature sensors</textarea>
        </c8y-form-group>
        <button
          type="button"
          (click)="data.editable=!data.editable"
          class="form-edit-btn btn btn-clean"
        >
          <i
            c8yIcon="pencil"
            class="m-r-4"
          ></i>
          <span >Edit</span>
        </button>
        <div class="form-actions">
          <button
            type="button"
            class="btn btn-default"

            (click)="data.editable=!data.editable"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-primary"

          >
            Save
          </button>
        </div>
      </form>
      <!-- /important -->
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
      <p class="legend form-block">With hidden labels</p>
      <!-- important -->
      <!-- Hidden labels -->
      <form
        class="form-read-only hidden-labels"
        [ngClass]="{'form-read-only': !data.editable2 }"
      >
        <c8y-form-group>
          <label for="group-name22">Group name</label>
          <input
            id="group-name22"
            type="text"
            [disabled]="!data.editable2"
            class="form-control"
            value="Temperature sensors"
            maxlength="254"
            required
          />
        </c8y-form-group>
        <div class="form-group">
          <label for="description4">Description</label>
          <textarea
            id="description4"
            rows="2"
            class="form-control">Group holding all temperature sensors</textarea>
        </div>
        <button
          type="button"
          (click)="data.editable2 = !data.editable2"
          class="form-edit-btn btn btn-clean"
        >
          <i
            c8yIcon="pencil"
            class="m-r-4"
          ></i>
          <span >Edit</span>
        </button>
        <div class="form-actions">
          <button
            type="button"
            class="btn btn-default"

            (click)="data.editable2 = !data.editable2"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-primary"

          >
            Save
          </button>
        </div>
      </form>
      <!-- /important -->
    </div>
  </c8y-form-group>
</div>
</codex-tutorial-example>

## Fieldsets

Enhance the organization and clarity of your forms with `fieldsets`. They provide an effective way
to group related inputs and create visual distinctions within forms.

If you're looking for a visual separation, add the `.c8y-fieldset` class to the `fieldset`, and add
a proper `legend`, otherwise, you can replace the `legend` by a `div.legend`. Optionally, you can add
two modifier classes:

- `.form-block` to make it left aligned with a line
- `.form-block` and `.center` to make it centered with a line.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <div class="row d-flex a-i-end">
    <div class="col-md-6">
      <!-- important -->
      <!-- Plain fieldset -->
      <fieldset>
        <!-- Default -->
        <div class="legend">Device info</div>
        <!-- Left aligned with line -->
        <div class="legend form-block">Device info</div>
        <!-- Centered with line -->
        <div class="legend form-block center">Device info</div>
        <div class="form-group">
          <label for="input101">IMEI</label>
          <input
            type="text"
            id="input101"
            class="form-control"
            placeholder="e.g. 35882"
          />
        </div>
        <div class="form-group">
          <label for="input201">ICCID</label>
          <input
            type="text"
            id="input201"
            class="form-control"
            placeholder="e.g. 88194"
          />
        </div>
      </fieldset>
      <!-- /important -->
    </div>
    <div class="col-md-6">
      <!-- important -->
      <!-- fieldset with `c8y_fieldset` -->
      <fieldset class="c8y-fieldset">
        <legend>Device info</legend>
        <div class="form-group">
          <label for="input102">IMEI</label>
          <input
            type="text"
            id="input102"
            class="form-control"
            placeholder="e.g. 35882"
          />
        </div>
        <div class="form-group">
          <label for="input202">ICCID</label>
          <input
            type="text"
            id="input202"
            class="form-control"
            placeholder="e.g. 88194"
          />
        </div>
      </fieldset>
      <!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

## Form validation

This example showcases form validation:

<codex-tutorial-example module="FormsTutorialModule"
[sources]="['./packages/tutorial/src/forms/form-validation/forms-validation.component.ts',
'packages/tutorial/src/forms/form-validation/forms-validation.component.html']"></codex-tutorial-example>
