---
title: Button group
slug: button-group
icon: done
order: 80
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Button groups organize buttons efficiently for improved user interaction and clarity.

You can group them together on a single line, stack them in a vertical column, or even add multiple
groups in a toolbar.

## Default button group

Group a series of buttons together on a single component with a `.btn-group`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<div class="btn-group" role="group">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
  <!-- /important -->
  </div>
</codex-tutorial-example>

## Button group nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of
buttons.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24" style="min-height: 160px">
  <!-- important -->
<div class="btn-group" role="group" >
  <button type="button" class="btn btn-default">1</button>
  <button type="button" class="btn btn-default">2</button>
  <div class="btn-group dropdown" dropdown role="group">
    <button dropdownToggle type="button" class="btn btn-default dropdown-toggle c8y-dropdown">
      Dropdown <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" *dropdownMenu>
      <li><a href="#">Dropdown link</a></li>
      <li><a href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Button group sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-lg` or
`.btn-group-sm` to the `.btn-group`, including when nesting multiple groups.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <!-- important -->
<div class="btn-group btn-group-lg" role="group">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
<!-- /important -->
  <br>
  <br>
<!-- important -->
<div class="btn-group" role="group">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
<!-- /important -->
    <br>
    <br>
<!-- important -->
<div class="btn-group btn-group-sm" role="group">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
<!-- /important -->
</div>
</codex-tutorial-example>

## Justified button group

Make a group of buttons stretch at equal sizes to span the entire width of its parent group. This also works
with dropdown menus for buttons within the button group.

### With `a` elements

Just wrap a series of `.btn`s in `.btn-group.btn-group-justified`.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
<!-- important -->
<div class="btn-group btn-group-justified" role="group" >
  <a href="#" class="btn btn-default" role="button">Left</a>
  <a href="#" class="btn btn-default" role="button">Middle</a>
  <a href="#" class="btn btn-default" role="button">Right</a>
</div>
<!-- /important -->
</div>
</codex-tutorial-example>

### With `button` elements

To use justified button groups with `button` elements, you must wrap each button in a button
group. Most browsers do not properly apply our CSS for justification to `button` elements, but
since we support button dropdown menus, we offer work-arounds.

  <codex-tutorial-example class="c8y-codex-override">
    <div class="container-fluid p-24">
<!-- important -->
<div class="btn-group btn-group-justified" role="group">
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default">Left</button>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default">Middle</button>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default">Right</button>
  </div>
</div>
<!-- /important -->
</div>
  </codex-tutorial-example>

## Vertical button group

We recommend you to stack buttons vertically rather than horizontally using the following code:

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6 col-md-3">
<!-- important -->
<div class="btn-group-vertical" role="group">
  <button type="button" class="btn btn-default">Button</button>
  <div class="btn-group dropdown" dropdown role="group">
    <button type="button" dropdownToggle class="btn btn-default dropdown-toggle c8y-dropdown">
      Dropdown <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" *dropdownMenu >
      <li><a href="#">Dropdown link</a></li>
      <li><a href="#">Dropdown link</a></li>
    </ul>
  </div>
  <button type="button" class="btn btn-default">Button</button>
  <div class="btn-group dropdown" dropdown role="group">
    <button type="button" dropdownToggle class="btn btn-default dropdown-toggle c8y-dropdown">
      Dropdown <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" *dropdownMenu>
      <li><a href="#">Dropdown link</a></li>
      <li><a href="#">Dropdown link</a></li>
    </ul>
  </div>
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Button</button>
</div>
<!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Button group toolbar

For more complex elements, you can combine sets of `btn-group` wrapped in a `btn-toolbar`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<div class="btn-toolbar" role="toolbar">
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default">
      <i [c8yIcon]="'format-bold'"></i>
    </button>
    <button type="button" class="btn btn-default">
      <i [c8yIcon]="'format-italic'"></i>
    </button>
    <button type="button" class="btn btn-default">
      <i [c8yIcon]="'format-underlined'"></i>
    </button>
    <button type="button" class="btn btn-default">
      <i [c8yIcon]="'strikethrough-s'"></i>
    </button>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default">
      <i [c8yIcon]="'format-align-left'"></i>
    </button>
    <button type="button" class="btn btn-default">
      <i [c8yIcon]="'format-align-center'"></i>
    </button>
    <button type="button" class="btn btn-default">
      <i [c8yIcon]="'format-align-right'"></i>
    </button>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default">
      <i [c8yIcon]="'image-file-add'"></i>
    </button>
  </div>
</div>
<!-- /important -->
</div>
</codex-tutorial-example>
