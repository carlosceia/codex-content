---
title: Input fields
slug: input-fields
icon: done
order: 10
mockdata:
  dataEditable: "Hover or click me to edit"
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Input fields play a crucial role in forms, enabling users to input diverse data types like text, numbers, dates, and more.

They guide users by offering prompts and cues, streamlining interactions, and serving as essential UI components.

## Default input field

To add an input field, use the `form-control` class, it already includes support for all HTML5 input types:  
- `text`
- `password`
- `datetime`
- `datetime-local`
- `date`
- `month`
- `time`
- `week`
- `number`
- `email`
- `url`
- `search`
- `tel`
- `color`

Keep in mind that inputs will only be fully styled if their `type` is properly declared.

Additionally, you can use the `input-sm` and `input-lg` to adjust input field sizing.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <form class="col-sm-6" autocomplete="off">
        <!-- important -->
        <input class="form-control input-sm" type="text" placeholder="Text input" autocomplete="off">
        <!-- /important -->
        <br>
        <!-- important -->
        <input class="form-control" type="number" placeholder="Number input" step="5" >
        <!-- /important -->
        <br>
        <!-- important -->
        <input class="form-control input-lg" type="email" placeholder="Email input">
       <!-- /important -->
      </form>
    </div>
  </div>
</codex-tutorial-example>

## Edit on focus

To simplify the user interface, input fields can initially appear as static text with a small
pencil icon on the right side. For inline editing, users can either click on the field value or the
pencil icon. Changes made during editing are not saved unless the user submits the form.

To implement this behavior, enclose the `input.form-control` within a `label` element with an
`editable` class. Adjust the input's width by setting the `max-width` inline using the input's value
length: `[style.width.ch]="(input.value?.length || 9)"`.

When the field is hovered or focused, it expands to the full width of its parent container.
To indicate updated fields in a group of editable elements, add the `.updated` class to the
`label.editable` element, giving it the appearance of a regular input field.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- The fallback width should be the placeholder's length -->
        <label
          class="editable"
          [ngClass]="{'updated': data.editableupdated}"
        >
          <input
            class="form-control"
            type="text"
            placeholder="Editable input placeholder"
            [(ngModel)]="route.snapshot.data.mockdata.dataEditable"
            [style.width.ch]="(route.snapshot.data.mockdata.dataEditable.length || 25)"
            (change)="data.editableupdated = !data.editableupdated"
          >
        </label>
        <!-- /important -->
        <br>
        <br>
        <!-- important -->
        <div class="form-group">
          <label for="editableInput">Email</label>
          <label
            class="editable"
            [ngClass]="{'updated': data.editable2updated}"
          >
            <input
              class="form-control"
              type="email"
              id="editableInput"
              placeholder="Editable input placeholder"
              autocomplete="off"
              [(ngModel)]="data.editable2"
              [style.width.ch]="(data.editable2?.length || 25)"
              (change)="data.editable2updated = !data.editable2updated"
              >
          </label>
        </div>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>


## Disabled state

To prevent user interactions on an input, add the `disabled` boolean attribute. Disabled
inputs appear muted and replace the standard cursor with a `not-allowed` icon.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="form-group">
      <label for="disabledTextInput">Disabled input</label>
      <input
        class="form-control"
        id="disabledInput"
        type="text"
        placeholder="Disabled input"
        disabled>
    </div>
  </div>
</codex-tutorial-example>

## Readonly state

Add the `readonly` boolean attribute on an input to prevent modification of the input's value.
Read-only inputs appear muted, just like disabled inputs, but retain the standard cursor and allow value
selection.

<codex-tutorial-example>
  <div class="row">
    <div class="col-sm-6">
      <form>
        <input class="form-control" type="text" value="Readonly input" readonly>
      </form>
    </div>
  </div>
</codex-tutorial-example>

## Static controls

When you have to display plain text alongside a form label within a form, use the
`.form-control-static` class applied to a `<p>` element.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <div class="form-group">
          <label>URL address</label>
          <p class="form-control-static">
            https://www.example.com
          </p>
        </div>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>
