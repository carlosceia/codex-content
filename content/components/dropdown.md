---
title: Dropdown
slug: dropdown
icon: done
order: 170
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

A toggleable contextual menu designed to present lists of links or HTML content. The implementation 
is based on the `BsDropdownModule` from `ngx-bootstrap/dropdown`, so ensure that it is imported in
your component.

While it is possible to attach a dropdown to any element, it is advisable to prioritize its usage
within a button for improved accessibility.

## Basic dropdown

To enhance accessibility and manage keyboard focus effectively, use the
`isOpen` property provided by the dropdown component. This property indicates whether the dropdown
is open or closed. By using the `[cdkTrapFocus]` directive from `@angular/cdk/a11y`, you can control
focus trapping based on the `isOpen` property.

> ### Important
>
> Remember that if you set the dropdown's `container` property to `body`, it might
> disrupt the focus trap functionality as it relies on elements within the dropdown's content. Avoid
> doing this to ensure the focus trap works seamlessly.

For comprehensive usage guidelines and configuration options, check the
[ngx-bootstrap documentation](https://valor-software.com/ngx-bootstrap/components/dropdowns?tab=overview).

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24" style="min-height: 180px;">
    <div class="row">
      <div class="col-md-6">
        <!-- important -->
        <div class="dropdown"
          dropdown
          #basicDropdown="bs-dropdown"
          [cdkTrapFocus]="basicDropdown.isOpen"
          >
          <button type="button" title="dropdown-toggle" dropdownToggle class="btn btn-default dropdown-toggle c8y-dropdown">
              <span>Dropdown</span>
              <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" *dropdownMenu>
            <li>
              <button type="button">
              <i c8yIcon="cogs"></i>
              Create Smart Rule
              </button>
            </li>
            <li>
              <button type="button">
              <i c8yIcon="delete" ></i>
              Remove from list
              </button>
            </li>
            <li>
              <button type="button">
              <i c8yIcon="floppy-o"> </i>
              Save to library
              </button>
            </li>
          </ul>
        </div>
        <!-- /important -->
      </div>
      <div class="col-md-6">
        <!-- important -->
        <div
          class="dropdown"
          dropdown
          #basicSettingsDropdown="bs-dropdown"
          [cdkTrapFocus]="basicSettingsDropdown.isOpen"
          >
        <button type="button" title="Actions" dropdownToggle class="dropdown-toggle c8y-dropdown btn btn-dot">
          <i c8yIcon="ellipsis-v"></i>
        </button>
        <ul class="dropdown-menu" *dropdownMenu>
          <li>
            <button type="button">
            <i c8yIcon="cogs"></i>
            Create Smart Rule
            </button>
          </li>
          <li>
            <button type="button">
            <i c8yIcon="trash"></i>
            Remove from list
            </button>
          </li>
          <li>
            <button type="button">
            <i c8yIcon="floppy-o"> </i>
            Save to library
            </button>
          </li>
        </ul>
        </div>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Dropdown menu direction

Dropdown menus can be adjusted to expand upwards instead of downwards. This can be achieved through
any of the following methods:

- By setting the `dropup` property to `true`
- By applying the `dropup` class to the dropdown
- By utilizing the `c8yDropdownDirection` directive. This directive dynamically adjusts the
  direction based on the current position within a parent container with the class `inner-scroll`.
  If there's no parent container with this class, it defaults to the viewport position.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24" style="min-height: 180px">
  <div class="row">
    <div class="col-md-4 p-t-80 p-b-112">
      <!-- important -->
      <!-- `dropup` property -->
      <div
        class="dropdown"
        dropdown
        #dropUpAttr="bs-dropdown"
        [dropup]="true"
        [cdkTrapFocus]="dropUpAttr.isOpen"
      >
        <button type="button"
          dropdownToggle class="btn btn-default dropdown-toggle c8y-dropdown">
          <span>Dropup property</span> <span class="dlt-c8yIcon-caret-down m-l-4"></span>
        </button>
        <ul class="dropdown-menu" *dropdownMenu>
          <li>
            <button type="button">
              <i c8yIcon="cogs"></i>
              Create Smart Rule
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="trash"></i>
              Remove from list
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="floppy-o"> </i>
              Save to library
            </button>
          </li>
        </ul>
      </div>
      <!-- /important -->
    </div>
    <div class="col-md-4 p-t-80 p-b-112">
      <!-- important -->
      <!-- `dropup` class -->
      <div
        class="dropdown dropup"
        dropdown
        #dropupClass="bs-dropdown"
        [cdkTrapFocus]="dropupClass.isOpen"
      >
        <button type="button"
          dropdownToggle class="btn btn-default dropdown-toggle c8y-dropdown">
          <span>Dropup CSS class</span> <span class="dlt-c8yIcon-caret-down m-l-4"></span>
        </button>
        <ul class="dropdown-menu" *dropdownMenu>
          <li>
            <button type="button">
              <i c8yIcon="cogs"></i>
              Create Smart Rule
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="trash"></i>
              Remove from list
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="floppy-o"> </i>
              Save to library
            </button>
          </li>
        </ul>
      </div>
      <!-- /important -->
    </div>
    <div class="col-md-4 p-t-80 p-b-112">
      <!-- important -->
      <!--`c8yDropdownDirection` directive -->
      <div
        class="dropdown dropup"
        dropdown
        c8yDropdownDirection
        #dropDirection="bs-dropdown"
        [cdkTrapFocus]="dropDirection.isOpen"
      >
        <button type="button"
          dropdownToggle class="btn btn-default dropdown-toggle c8y-dropdown">
          <span>Dropdown direction directive</span> <span class="dlt-c8yIcon-caret-down m-l-4"></span>
        </button>
        <ul class="dropdown-menu" *dropdownMenu>
          <li>
            <button type="button">
              <i c8yIcon="cogs"></i>
              Create Smart Rule
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="trash"></i>
              Remove from list
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="floppy-o"> </i>
              Save to library
            </button>
          </li>
        </ul>
      </div>
      <!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

## Dropdown menu alignment

By default, a dropdown menu is automatically positioned to the bottom left of its parent. Add
`.dropdown-menu-right` to a `.dropdown-menu` to right align the dropdown menu.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <div class="row">
    <div class="col-md-6 col-md-offset-2 p-b-112">
      <!-- important -->
      <div class="dropdown" dropdown>
        <button
          type="button"
          title="dropdown-toggle"
          dropdownToggle
          class="btn btn-default dropdown-toggle c8y-dropdown"
        >
          Dropdown <span class="caret"></span>
        </button>
        <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
          <li>
            <button type="button">
              <i c8yIcon="cogs"></i>
              Create Smart Rule
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="trash" ></i>
              Remove from list
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="floppy-o"> </i>
              Save to library
            </button>
          </li>
        </ul>
      </div>
      <!-- /important -->
    </div>
    <div class="col-md-2 col-md-offset-2 p-b-112">
      <!-- important -->
      <div
        class="dropdown"
        dropdown
        #basicSettingsDropdown="bs-dropdown"
        [cdkTrapFocus]="basicSettingsDropdown.isOpen"
      >
        <button type="button"
          title="Actions"
          dropdownToggle
          class="dropdown-toggle c8y-dropdown btn btn-dot"
        >
          <i c8yIcon="ellipsis-v"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
          <li>
            <button type="button">
              <i c8yIcon="cogs"></i>
              Create Smart Rule
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="trash"></i>
              Remove from list
            </button>
          </li>
          <li>
            <button type="button">
            <i c8yIcon="floppy-o"> </i>
            Save to library
            </button>
          </li>
        </ul>
      </div>
      <!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

## Disabled links

Add `.disabled` to a `<li>` in the dropdown menu to disable the link.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <div class="row">
    <div class="col-md-6 p-b-112">
      <!-- important -->
      <div class="dropdown"
        #disabledLinkDropdown="bs-dropdown"
        [cdkTrapFocus]="disabledLinkDropdown.isOpen"
        dropdown
      >
        <button
          type="button"
          title="dropdown-toggle"
          dropdownToggle
          class="btn btn-default dropdown-toggle c8y-dropdown"
        >
          Dropdown <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" *dropdownMenu>
          <li>
            <button type="button">
              <i c8yIcon="cogs"></i>
              Create Smart Rule
            </button>
          </li>
          <li class="disabled">
            <button type="button">
              <i c8yIcon="trash"></i>
              Remove from list
            </button>
          </li>
          <li class="disabled">
            <button type="button">
              <i c8yIcon="floppy-o"> </i>
              Save to library
            </button>
          </li>
        </ul>
      </div>
      <!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

## Headers

Add a header to label sections of actions in any dropdown menu.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <div class="row">
    <div class="col-md-6 p-b-112 m-b-72">
      <!-- important -->
      <div
        class="dropdown"
        dropdown
      >
        <button
          type="button"
          title="dropdown-toggle"
          dropdownToggle
          class="btn btn-default dropdown-toggle c8y-dropdown"
        >
          Dropdown
          <span class="caret"></span>
        </button>
        <ul
          class="dropdown-menu"
          *dropdownMenu
        >
          <li class="dropdown-header">Section header</li>
          <li>
            <button type="button">
              <i c8yIcon="cogs"></i>
              Create Smart Rule
            </button>
          </li>
          <li>
            <button type="button">
              <i c8yIcon="trash"></i>
              Remove from list
            </button>
          </li>
          <li class="dropdown-header">Another header</li>
          <li>
            <button type="button">
              <i c8yIcon="floppy-o"></i>
              Save to library
            </button>
          </li>
        </ul>
      </div>
      <!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>

## Dropdown with embedded form

If you want to incorporate a form within a dropdown, follow these steps:

1. Add the `dropdown-form` class to the form.
2. Place the form as a direct child of the `dropdown-menu`.
3. Set the `insideClick` property of the `dropdown` to `true` (so the dropdown menu won't close
   after clicking inside).
4. Wrap the action buttons of the form within a `.dropdown-footer` container.

By employing these instructions, you can seamlessly integrate a form into your dropdown. Note that
the `dropdown-form` has no default `max-height`, if you have to customize it you can apply an inline
style. Furthermore, the `dropdown-footer` element is anchored at the bottom of the `dropdown-form`,
ensuring it is visible whenever the `dropdown-menu` is open.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24" style="min-height: 440px;">
    <div class="row">
      <div class="col-md-6 p-b-112 m-b-112">
        <!-- important -->
        <div
          class="dropdown"
          dropdown
          [insideClick]="true"
          #formDropdown="bs-dropdown"
          [cdkTrapFocus]="formDropdown.isOpen"
        >
          <button class="dropdown-toggle c8y-dropdown" dropdownToggle type="button" title="Add alarm mapping" >
            <span>
              <i c8yIcon="plus-circle"></i>
              Add mapping
            </span>
          </button>
          <div class="dropdown-menu" *dropdownMenu>
            <form name="newOptionForm" class="dropdown-form" style="max-height: 350px;">
              <p class="legend form-block m-t-8 m-b-16 hidden-sm hidden-md hidden-lg">
                Add mapping
              </p>
              <div class="form-group">
                <label for="newAlarmType" class="text-truncate" title="Alarm type to match">
                  Alarm type to match
                </label>
                <input id="newAlarmType" type="text" class="form-control" placeholder="e.g. c8y_Alarm (required)" required>
              </div>
              <div class="form-group">
                <label for="newAlarmDescription" class="text-truncate" title="New description">
                  New description
                </label>
                <input id="newAlarmDescription" type="text" class="form-control" placeholder="e.g. map alarm to warning">
              </div>
              <div class="form-group m-b-0">
                <label class="text-truncate" title="New severity">
                  New severity
                </label>
                <label for="newSeverityValue0" title="Drop" class="c8y-radio input-sm">
                  <input id="newSeverityValue0" type="radio" name="c8y-options-group" value="NONE">
                  <span></span>
                  <i c8yIcon="circle" class="m-r-4 m-l-4 text-16 stroked-icon text-muted"></i>
                  <span>Drop</span>
                </label>
                <label for="newSeverityValue1" title="Critical" class="c8y-radio input-sm">
                  <input id="newSeverityValue1" type="radio" name="c8y-options-group" value="CRITICAL">
                  <span></span>
                  <i c8yIcon="exclamation-circle" class="m-r-4 m-l-4 text-16 stroked-icon status critical"></i>
                  <span>Critical</span>
                </label>
                <label for="newSeverityValue2" title="Major" class="c8y-radio input-sm">
                  <input id="newSeverityValue2" type="radio" name="c8y-options-group" value="MAJOR">
                  <span></span>
                  <i c8yIcon="warning" class="m-r-4 m-l-4 text-16 stroked-icon status major"></i>
                  <span>Major</span>
                </label>
                <label for="newSeverityValue3" title="Minor" class="c8y-radio input-sm">
                  <input id="newSeverityValue3" type="radio" name="c8y-options-group" value="MINOR">
                  <span></span>
                  <i c8yIcon="high-priority" class="m-r-4 m-l-4 text-16 stroked-icon status minor"></i>
                  <span>Minor</span>
                </label>
                <label for="newSeverityValue4" title="Warning" class="c8y-radio input-sm">
                  <input id="newSeverityValue4" type="radio" name="c8y-options-group" value="WARNING">
                  <span></span>
                  <i c8yIcon="circle" class="m-r-4 m-l-4 text-16 stroked-icon status warning"></i>
                  <span>Warning</span>
                </label>
              </div>
              <div class="dropdown-footer sticky-bottom">
                <button class="btn btn-primary btn-sm" type="submit" title="Add alarm mapping">
                  Add mapping
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>


## Accessibility

The [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) standard defines an actual
`role="menu"` widget, but this is specific to application-like menus which trigger actions or
functions. ARIA menus can only contain:
- Menu items,
- Checkbox menu items,
- Radio button menu items,
- Radio button groups, and
- Sub-menus.

Dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations
and markup structures. For instance, it is possible to create dropdowns that contain additional
inputs and form controls, such as search fields or login forms. For this reason, we do not
automatically add any of the role and aria-attributes required for true ARIA menus, developers will
have to include these more specific attributes themselves.
