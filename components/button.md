---
title: Button
slug: button
icon: done
aorder: 50
order: 70
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD036 -->
<!-- markdownlint-disable MD051 -->

Buttons play a crucial role in user interactions within web applications.

They provide a clear call-to-action and enable users to trigger in-page
functionality or navigate to different documents or sections.

> ### Links and Buttons: choosing the right element
>
> When deciding between using an `<a>` element or a `<button>` element, consider their intended
> functionalities:
>
> - Use `button` when triggering in-page functionality, such as submitting a form or executing JavaScript actions.
> - Use `a` when linking to another document or section within the current page.
>
> If, for some reason, you use an `<a>` element as a button due to limitations, make sure to provide
> an appropriate `role="button"` attribute to ensure accessibility.

## Default button

You can apply button classes to any `<a>`, `<input>`, or `<button>` element to style them as
buttons. However, when you use a `<button>` inside a `<form>` without a defined
type, it defaults to `type="submit"`. To prevent accidental form submissions, always explicitly
define the `<button>`'s type as `type="button"`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<a class="btn btn-default" href="javascript:void(0);" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input">
<input class="btn btn-default" type="submit" value="Submit">
<!-- /important -->
  </div>
</codex-tutorial-example>

## Block button

For block-level buttons that span the full width of their parent container, add the `.btn-block`
class.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button type="button" class="btn btn-default btn btn-block">Block level button</button>
<a href="javascript:void(0);" class="btn btn-primary btn-lg btn-block">Block level button</a>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Button variations

Button styles can be customized using modifier classes. The basic button styles are provided
by the `.btn` class, and you can add one of the available modifier classes to create a
styled button.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button type="button" class="btn btn-default">btn-default</button>
<button type="button" class="btn btn-primary">btn-primary</button>
<button type="button" class="btn btn-danger">btn-danger</button>
<button type="button" class="btn btn-link">btn-link</button>
<button type="button" class="btn btn-clean">btn-clean</button>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Icon button

If the button only contains an icon, you can add either the `.btn-icon` or the `.btn-dot` class to
adjust the padding and create a more compact button.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button type="button" class="btn btn-default btn-icon"><i c8yIcon="cog"></i></button>
<button type="button" class="btn btn-primary btn-icon"><i c8yIcon="cog"></i></button>
<button type="button" class="btn btn-danger btn-icon"><i c8yIcon="cog"></i></button>
<button type="button" class="btn btn-link btn-icon"><i c8yIcon="cog"></i></button>
<button type="button" class="btn btn-dot"><i c8yIcon="cog"></i></button>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Button sizing

Additional sizes for buttons matching the `.form-control` size variations and an extra small size
for using in lists and components.

Use the modifier classes `.btn-lg` or `.btn-sm` for adjusting sizes.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<a href="javascript:void(0);" class="btn btn-default btn-lg">Large button</a>
<button type="button" class="btn btn-primary btn-lg btn-icon"><i c8yIcon="cog"></i></button>
<!-- /important -->
  <br>
  <br>
<!-- important -->
<button type="button" class="btn btn-primary">Default button</button>
<a href="javascript:void(0);" class="btn btn-default">Default button</a>
<button type="button" class="btn btn-primary btn-icon"><i c8yIcon="cog"></i></button>
<!-- /important -->
  <br>
  <br>
<!-- important -->
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<a href="javascript:void(0);" class="btn btn-default btn-sm">Small button</a>
<button type="button" class="btn btn-primary btn-sm btn-icon"><i c8yIcon="cog"></i></button>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Button states

### Active state

Buttons will appear pressed when active. For `<button>` elements, this is done via `:active`. For
`<a>` elements, it's done with `.active`.

However, in case you have to replicate the `active` state programmatically, you can use `.active` on
`<button>`s (and include the `aria-pressed="true"` attribute).

**Button element**  
There's no need to add `:active`, which is handled by the browser. In this example `.active` is
added to force appearance.

**Anchor element**  
Add the `.active` class to `<a>` buttons.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button type="button" class="btn btn-default active" aria-pressed="true">Default button</button>
<button type="button" class="btn btn-primary active" aria-pressed="true">Primary button</button>
<!-- /important -->
<br><br>
<!-- important -->
<a href="javascript: void(0)" class="btn btn-default active" role="button">Default button</a>
<a href="javascript: void(0)" class="btn btn-primary active" role="button">Primary button</a>
<!-- /important -->
  </div>
</codex-tutorial-example>

### Disabled state

Make buttons look unclickable by fading them with `opacity`.

<!-- #TODO: <button> does not render ok  -->

**Button element**  
Add the `disabled` attribute to `<button>` buttons.

**Anchor element**  
Add the `.disabled` class to `<a>` buttons.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button type="button" class="btn btn-default" disabled="disabled">Default button</button>
<button type="button" class="btn btn-primary" disabled="disabled">Primary button</button>
<!-- /important -->
  <br><br>
<!-- important -->
<a href="javascript:void(0)" class="btn btn-default disabled" role="button">Link</a>
<a href="javascript:void(0)" class="btn btn-primary disabled" role="button">Primary link</a>
<!-- /important -->
</div>
</codex-tutorial-example>

### Pending state

Add `.btn-pending` to display an active process started when pressing the button.

When applied, the `pointer-events` are set to none, making the button unclickable.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<button type="button" class="btn btn-primary btn-lg btn-pending">Primary button</button>
<button type="button" class="btn btn-default btn-pending">Button</button>
<button type="button" class="btn btn-danger btn-sm btn-pending">Button</button>
<!-- /important -->
</div>
</codex-tutorial-example>
