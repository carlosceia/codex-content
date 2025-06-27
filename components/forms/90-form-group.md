---
title: Form group
slug: form-group
icon: done
order: 90
apiDocs:
  - name: FormGroupComponent
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Simplify structuring forms with the `c8y-form-group` component.

This component acts as a container,
bringing together form controls, their labels, and validation/help messages in a cohesive unit.


## Default form group
Individual form controls receive global styling. All textual `input`, `textarea`, and `select`
elements with `.form-control`, checkboxes, radio buttons, and input-groups are set to
`width: 100%;` by default. Spacing and support for validation messages are provided by the
`c8y-form-group`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-md-6">
        <!-- important -->
        <c8y-form-group>
          <label for="userEmail-1">Email</label>
          <input
            id="userEmail-1"
            class="form-control"
            type="email"
            name="email"
            [maxlength]="254"
            autocomplete="off"
            placeholder="e.g. joe.doe@example.com"
            [(ngModel)]="data.user"
          >
        </c8y-form-group>
        <c8y-form-group>
          <label  for="exampleSelect">Select one option</label>
          <div class="c8y-select-wrapper">
          <select id="exampleSelect" class="form-control">
            <option selected disabled>Select…</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          </div>
        </c8y-form-group>
        <c8y-form-group>
          <label for="inputGroupExample">User name</label>
          <div class="input-group">
            <input type="text" id="inputGroupExample" class="form-control" placeholder="e.g. johndoe">
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button">Submit</button>
            </span>
          </div>
        </c8y-form-group>
        <!-- /important -->
      </div>
      <div class="col-md-6">
        <!-- important -->
        <c8y-form-group>
          <label for="rangeExample">Range</label>
          <c8y-range>
            <input id="rangeExample" type="range" min="0" max="100" steps="1" />
          </c8y-range>
        </c8y-form-group>
        <c8y-form-group>
          <label>Pick a option</label>
          <label
            title="Option 1"
            class="c8y-radio radio-inline"
          >
            <input
              type="radio"
              name="rgroup1"
            />
            <span></span>
            <span>Option 1</span>
          </label>
          <label
            title="Option 2"
            class="c8y-radio radio-inline"
          >
            <input
              type="radio"
              name="rgroup1"
            />
            <span></span>
            <span>Option 2</span>
          </label>
        </c8y-form-group>
        <c8y-form-group>
          <label>Check all that apply</label>
          <label
            title="Option A"
            class="c8y-checkbox checkbox-inline"
          >
            <input
              type="checkbox"
            />
            <span></span>
            <span>Option A</span>
          </label>
          <label
            title="Option B"
            class="c8y-checkbox checkbox-inline"
          >
            <input
              type="checkbox"
            />
            <span></span>
            <span>Option B</span>
          </label>
        </c8y-form-group>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Input validation

Include the `c8y-messages` into the `c8y-form-group` to deal with input validation.

### Required input

The `required` attribute is fundamental for mandating users to fill in essential fields. This
prevents incomplete submissions and ensures you capture vital information. In this example, the
email field becomes mandatory, prompting the user to enter their email before submitting the form:

<codex-tutorial-example>
<div class="row">
  <div class="col-md-6">
    <!-- important -->
    <!-- using `required` on an input type="email" -->
    <c8y-form-group>
      <label for="userEmail">Email</label>
      <input
        id="userEmail"
        class="form-control"
        type="email"
        name="email"
        [maxlength]="254"
        autocomplete="off"
        placeholder="e.g. joe.doe@example.com"
        [(ngModel)]="data.email"
        email
        required
      >
      <c8y-messages>
      </c8y-messages>
    </c8y-form-group>
<!-- /important -->
  </div>
</div>
</codex-tutorial-example>

### Character limit input

Often there is a need to restrict the number of characters a user can enter to prevent overly
verbose responses or adhere to database constraints. The `maxlength` attribute provides this
control. Here, the text field allows a maximum of 50 characters, indicated by the `maxlength`
attribute:

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <div class="row">
    <div class="col-md-6">
  <!-- important -->
  <!-- using `maxlength` on an input type="text" -->
    <c8y-form-group>
      <label for="userName">Name</label>
      <input
        id="userName"
        class="form-control"
        type="text"
        name="name"
        maxlength="10"
        autocomplete="off"
        placeholder="e.g. John Doe"
        [(ngModel)]="data.name"
        required
      >
      <c8y-messages>
      </c8y-messages>
    </c8y-form-group>
  <!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

In other cases it's crucial to enforce a minimum character length. The `minlength` attribute can be used as follows:

<codex-tutorial-example>
<div class="row">
  <div class="col-md-6">
<!-- important -->
<!-- username input with required attribute and minimum length of 8 characters -->
  <c8y-form-group>
    <label>Username</label>
    <input
      id="userName"
      class="form-control"
      name="username"
      autocomplete="off"
      placeholder="Enter your userName"
      [(ngModel)]="data.username"
      minlength="8"
      required
    >
    <c8y-messages>
    </c8y-messages>
  </c8y-form-group>
<!-- /important -->
  </div>
</div>
</codex-tutorial-example>

### Enforcing numerical boundaries

When crafting forms that deal with numbers, it is important to ensure that the users stay within
desired limits. This is where the min and max validators come in as valuable tools.

The `min` validator acts as a threshold that users must cross. On the other hand the `max` attribute
sets a ceiling for the allowed numerical input. In the input below the numerical value which can be
entered have to be between 10 and 20:

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
<div class="row">
  <div class="col-md-6">
<!-- important -->
<!-- Input field now must have a value less than 20 and more than 10 -->
  <c8y-form-group>
    <label for="number1">Value</label>
    <input
      id="number1"
      class="
      form-control"
      type="number"
      name="number"
      autocomplete="off"
      placeholder="Enter a number between 10 and 20"
      [(ngModel)]="data.number"
      min="10"
      max="20"
      required
    >
    <c8y-messages>
    </c8y-messages>
  </c8y-form-group>
<!-- /important -->
  </div>
</div>
</div>
</codex-tutorial-example>

## Help text

Help text must be explicitly associated with the form control it relates to using the
`aria-describedby` attribute. This will ensure that assistive technologies – such as
screen readers – will announce this help text when the user focuses or enters the control.

<codex-tutorial-example>
<div class="row">
  <div class="col-md-6">
<!-- important -->
<!-- using `required` on an input type="email" -->
<c8y-form-group>
  <label for="userEmail-2">Email</label>
  <input
    id="userEmail-2"
    class="form-control"
    type="email"
    name="email"
    [maxlength]="254"
    autocomplete="off"
    placeholder="e.g. joe.doe@example.com"
    [(ngModel)]="data.email"
    email
    required
  >
  <c8y-messages [helpMessage]="'A block of help text.'">
  </c8y-messages>
</c8y-form-group>
<!-- /important -->
  </div>
</div>
<!-- important -->
<div class="form-group">
  <label for="inputHelpBlock2">IMEI</label>
  <input type="text"
    id="inputHelpBlock2"
    class="form-control"
    aria-describedby="helpBlock2"
    placeholder="e.g. 154827859688154">
  <c8y-messages [helpMessage]="'A long block of help text that fits below the input field.'">
  </c8y-messages>
</div>
<!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

## Form group sizing

To properly set the size on the `c8y-form-group`, you can use add `.form-group-sm` form the small
size, and `form-group-lg` for the large size. No need to add modifier classes on form controls.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-md-6">
        <!-- important -->
        <!-- Small size -->
        <c8y-form-group class="form-group-sm">
          <label for="userEmail1">Email</label>
          <input
            id="userEmail1"
            class="form-control"
            type="email"
            name="email"
            [maxlength]="254"
            autocomplete="off"
            placeholder="e.g. joe.doe@example.com"
            [(ngModel)]="data.email1"
            email
            required
          >
          <c8y-messages>
          </c8y-messages>
        </c8y-form-group>
        <!-- Regular size -->
        <c8y-form-group>
          <label for="userEmail2">Email</label>
          <input
            id="userEmail2"
            class="form-control"
            type="email"
            name="email"
            [maxlength]="254"
            autocomplete="off"
            placeholder="e.g. joe.doe@example.com"
            [(ngModel)]="data.email2"
            email
            required
          >
          <c8y-messages>
          </c8y-messages>
        </c8y-form-group>
        <!-- Large size -->
        <c8y-form-group class="form-group-lg">
          <label for="userEmail3">Email</label>
          <input
            id="userEmail3"
            class="form-control"
            type="email"
            name="email"
            [maxlength]="254"
            autocomplete="off"
            placeholder="e.g. joe.doe@example.com"
            [(ngModel)]="data.email3"
            email
            required
          >
          <c8y-messages>
          </c8y-messages>
        </c8y-form-group>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>
