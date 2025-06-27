---
title: Input groups
slug: input-group
order: 80
icon: done
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Elevate text-based inputs with input groups.

Easily add text, icons, or buttons before and/or
after input fields for enhanced functionality and design.

## Default input-group

Use `.input-group` with an `.input-group-addon` or `.input-group-btn` to prepend or append elements
to a single input field.

Place one add-on or button on either side of an input. You may also place them on both sides of an input.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <form class="col-md-8">
        <!-- important -->
        <div class="input-group">
          <span
            class="input-group-addon"
            id="basic-addon1"
          > @ </span>
          <input
            class="form-control"
            type="text"
            placeholder="e.g. johndoe"
            [attr.aria-describedby]="'basic-addon1'"
          >
        </div>
        <!-- /important -->
        <br>
        <!-- important -->
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="e.g. www.example"
            [attr.aria-describedby]="'basic-addon2'"
          >
          <span class="input-group-addon" id="basic-addon2">.com</span>
        </div>
        <!-- /important -->
        <br>
        <!-- important -->
        <div class="input-group">
          <span class="input-group-addon">
            <i c8yIcon="euro"></i>
          </span>
          <input
            class="form-control"
            type="text"
            placeholder="e.g. 1000"
          >
            <span class="input-group-addon">.00</span>
          </div>
        <!-- /important -->
          <br>
        <!-- important -->
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon3">https://example.com/users/</span>
          <input
            class="form-control"
            type="text"
            id="basic-url"
            [attr.aria-describedby]="'basic-addon3'"
            placeholder="e.g. johndoe"
            >
          <div class="input-group-btn">
            <button class="btn btn-primary" type="button">Submit</button>
          </div>
        </div>
        <!-- /important -->
      </form>
    </div>
  </div>
</codex-tutorial-example>

> ### Do not mix with other elements
>
> Instead of mixing form groups or grid column classes directly with input groups, nest the input
> group inside of the [form group](#/components/form-controls/form-group) or grid-related element.

## Search input-group

Search input groups have specific styling, append `.input-group-search` to the `.input-group` to
place the button inside the input field and adding round corners.

If you're looking to implement a search funcionality, check the
[search feature module](#/develop/feature-modules/search/overview).

Don't forget to include some logic to handle the submit/clear buttons.

<codex-tutorial-example>
  <div class="row">
    <div class="col-md-6">
       <!-- important -->
      <div class="input-group input-group-search" id="example">
        <input
          class="form-control"
          type="search"
          placeholder="Search…"
          [(ngModel)]="data.searchString"
        />
        <span class="input-group-btn">
          <button
            class="btn btn-clean"
            type="button"
            title="Search"
            *ngIf="!data.searchString || data.searchString.length === 0"
          >
            <i c8yIcon="search"></i>
          </button>
          <button
            class="btn btn-clean"
            type="button"
            title="Clear search"
            *ngIf="data.searchString && data.searchString.length > 0"
            (click)="data.searchString = ''"
          >
            <i c8yIcon="times"></i>
          </button>
        </span>
      </div>
      <!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Input group sizing

Add the relative form sizing classes to the `.input-group` itself and contents within
will automatically resize—no need for repeating the form control size classes on each element.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small size -->
        <div class="input-group input-group-sm">
          <span class="input-group-addon" id="sizing-addon3"> @ </span>
          <input
            class="form-control"
            type="text"
            placeholder="Username"
            [attr.aria-describedby]="'sizing-addon3'"
          >
        </div>
        <!-- /important -->
        <br>
        <!-- important -->
        <!-- Regular size -->
        <div class="input-group">
          <span class="input-group-addon" id="sizing-addon2"> @ </span>
          <input type="text"
            class="form-control"
            placeholder="Username"
            [attr.aria-describedby]="'sizing-addon2'"
          >
        </div>
         <!-- /important -->
         <br>
         <!-- important -->
         <!-- Large size -->
        <div class="input-group input-group-lg">
          <span class="input-group-addon" id="sizing-addon1"> @ </span>
          <input
            class="form-control"
            type="text"
            placeholder="Username"
            [attr.aria-describedby]="'sizing-addon1'"
            >
        </div>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Checkboxes and radio addons

Place any `.c8y-checkbox`or `.c8y-radio` option within an `.input-group-addon` instead of text.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-md-6">
        <!-- important -->
        <!-- Small size -->
        <div class="input-group">
          <span class="input-group-addon input-sm">
            <label class="c8y-checkbox ">
              <input type="checkbox" aria-label="Checkbox for following text input" >
              <span></span>
          </label>
          </span>
          <input class="form-control input-sm" type="text" aria-label="Text input with checkbox" placeholder="example" input>
        </div>
        <!-- /important -->
        <br>
          <!-- important -->
        <!-- Regular size -->
        <div class="input-group">
          <span class="input-group-addon">
            <label class="c8y-checkbox">
              <input type="checkbox" aria-label="Checkbox for following text input" ><span></span>
          </label>
          </span>
          <input class="form-control" type="text"  aria-label="Text input with checkbox" placeholder="example" input>
        </div>
        <!-- /important -->
        <br>
          <!-- important -->
        <!-- Large size -->
        <div class="input-group input-group-lg">
          <span class="input-group-addon">
            <label class="c8y-checkbox">
              <input type="checkbox" aria-label="Checkbox for following text input"><span></span>
          </label>
          </span>
          <input class="form-control" type="text" aria-label="Text input with checkbox" placeholder="example" input>
        </div>
        <!-- /important -->
      </div>
      <div class="col-md-6">
        <!-- important -->
        <!-- Small size -->
        <div class="input-group">
          <span class="input-group-addon input-sm">
            <label class="c8y-radio">
              <input type="radio" aria-label="Radio button for following text input">
              <span></span>
          </label>
          </span>
          <input class="form-control input-sm" type="text" aria-label="Text input with radio button" placeholder="example" input>
        </div>
        <!-- /important -->
        <br>
        <!-- important -->
        <!-- Regular size -->
        <div class="input-group">
          <span class="input-group-addon">
            <label class="c8y-radio">
              <input type="radio" aria-label="Radio button for following text input">
              <span></span>
          </label>
          </span>
          <input class="form-control" type="text" aria-label="Text input with radio button" placeholder="example" input>
        </div>
        <!-- /important -->
        <br>
        <!-- important -->
        <!-- Large size -->
        <div class="input-group input-group-lg">
          <span class="input-group-addon">
            <label class="c8y-radio">
              <input type="radio" aria-label="Radio button for following text input">
              <span></span>
          </label>
          </span>
          <input type="text" class="form-control" aria-label="Text input with radio button" placeholder="example" input>
        </div>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Button addons

Buttons in input groups are a bit different and require one extra level of nesting. Instead of
`.input-group-addon`, you have to use `.input-group-btn` to wrap the buttons. This is required
due to default browser styles that cannot be overridden.

> ### Buttons with icon
>
> When adding a button with an icon, always add a [tooltip](#/components/tooltip) with the label.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-md-6">
        <!-- important -->
        <div class="input-group">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">Verify</button>
          </span>
          <input class="form-control" type="text" placeholder="e.g. John">
        </div>
        <!-- /important -->
        <br>
        <!-- important -->
        <div class="input-group">
          <input class="form-control" type="email" placeholder="e.g. email@example.com">
          <span class="input-group-btn">
            <button class="btn btn-primary" type="button">Submit</button>
          </span>
        </div>
        <!-- /important -->
      </div>
      <div class="col-md-6">
        <!-- important -->
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="e.g. 10"
          />
          <div class="input-group-btn">
            <button
              class="btn-dot btn-dot--danger"
              tooltip="Remove"
              placement="top"
              [delay]="500"
              [attr.aria-label]="Remove"
            >
              <i c8yIcon="minus-circle"></i>
            </button>
          </div>
        </div>
        <!-- /important -->
        <br>
        <!-- important -->
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            placeholder="e.g. 100"
          />
          <div class="input-group-btn">
            <button
              class="btn-dot btn-dot--danger"
              tooltip="Remove"
              placement="top"
              [delay]="500"
              [attr.aria-label]="Remove"
            >
              <i c8yIcon="minus-circle"></i>
            </button>
            <button
              class="btn-dot text-primary"
              tooltip="Add"
              placement="top"
              [delay]="500"
              [attr.aria-label]="Add"
            >
              <i c8yIcon="plus-circle"></i>
            </button>
          </div>
        </div>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>
