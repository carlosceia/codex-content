---
title: Popover
slug: popover
icon: done
order: 300
apiDocs:
  - name: PopoverConfirmComponent
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Popovers are small content overlays that appear on an element, typically used to display additional
or secondary information.

Popover messages are valuable when you require more context for an element than is provided by tooltips
(you can even add titles using `popoverTitle`). However, it's advisable to maintain brevity
and clarity in these messages.

To ensure proper user interaction and accessibility, consider using the `triggers="focus"` property.
This configuration allows only one popover to be displayed at a time, aligning with best practices
for accessibility.

## Default popover

You can easily add a popover to any element by including the `popover` attribute. By default,
popovers use an `auto` placement strategy to determine the most suitable position on the screen.
You can also set the `placement` attribute to `top`, `right`, `bottom`, or `left`, if
you want to manually specify the popover's placement.

Note that while these placement options allow customization, the popover's position may still
be automatically adjusted to ensure it fits within the screen boundaries. To prevent automatic
adjustments and maintain the chosen placement, use `[adaptivePosition]="false"`.

Refer to
[ngx-bootstrap's popover](https://valor-software.com/ngx-bootstrap/#/components/popover?tab=overview)
documentation for more options.

<codex-tutorial-example class="overflow-visible c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row m-b-24">
      <div class="col-sm-6">
    <!-- important -->
        <button
          class="btn btn-default d-block p-relative"
          type="button"
          [popover]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' "
          [attr.aria-label]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' "
          triggers="focus"
        >
          Popover without title
        </button>
    <!-- /important -->
      </div>
      <div class="col-sm-6">
    <!-- important -->
    <button
      class="btn btn-default d-block p-relative"
      type="button"
      [popoverTitle]="'The blind texts'"
      [popover]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' "
      [attr.aria-label]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' "
      triggers="focus"
    >
      Popover with title
    </button>
    <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
    <!-- important -->
    <button
      class="btn btn-default d-block p-relative"
      type="button"
      [popoverTitle]="'Popover top'"
      [popover]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' "
      [attr.aria-label]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' "
      placement="top"
      triggers="focus"
    >
      Popover top
    </button>
    <!-- /important -->
      </div>
      <div class="col-sm-3">
    <!-- important -->
    <button
      class="btn btn-default d-block p-relative"
      type="button"
      [popoverTitle]="'Popover left'"
      [popover]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'"
      [attr.aria-label]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'"
      triggers="focus"
      placement="left"
    >
      Popover left
    </button>
    <!-- /important -->
      </div>
      <div class="col-sm-3">
    <!-- important -->
    <button
      class="btn btn-default d-block p-relative"
      type="button"
      placement="bottom"
      [popoverTitle]="'Popover bottom'"
      [popover]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' "
      [attr.aria-label]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' "
      triggers="focus"
    >
      Popover bottom
    </button>
    <!-- /important -->
      </div>
      <div class="col-sm-3">
    <!-- important -->
        <button
      class="btn btn-default d-block p-relative"
      type="button"
      [popoverTitle]="'Popover right'"
      [popover]=" 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' "
      placement="right"
      triggers="focus"
    >
      Popover right
    </button>
    <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

> ### Popover overflow
>
> When using popovers within an element that has CSS rules like `overflow: hidden` or
> `overflow: auto`, you can encounter situations where the entire popover content is not fully
> visible. To avoid this issue, consider using the `placement` attribute together with the
> `[adaptivePosition]="false"` to adjust the popover's position.  
>
> If it is absolutely necessary to ensure that the popover is fully visible, you can use the
> `container="body"` attribute. This will append the popover to the `body` element, allowing it to
> display outside of its parent element. However, be cautious when using this option, as it may not
> always work as expected in every scenario.

<!-- # review -->
## Custom popover

Custom templates provide the flexibility to create complex layouts and include HTML content within
your popovers. To achieve this, you can supply a custom template for the popover content by binding
an `ng-template` to the popover attribute. This allows you to tailor the appearance and structure of
the popover to your specific needs.

When adding interactive elements to the popover template, remove the `trigger="focus"` and use the
`[outsideClick]="true"` instead.

<codex-tutorial-example class="overflow-visible">
<button
  class="btn btn-default"
  type="button"
  [popover]="customPopoverTemplate"
  [outsideClick]="true"
  placement="right"
>
  I have a custom popover
</button>
<ng-template #customPopoverTemplate>
  <p class="m-b-8">
    Using a <b>template</b> allows you to also include HTML content in the popover, like the button below for example.
  </p>
  <button class="btn btn-default btn-sm">I'm a button</button>
</ng-template>
</codex-tutorial-example>

<!-- maybe can be a general "extended uses" with "Popover Title" and "Popover Confirm" sections -->
## Popover confirmation

This displays a confirmation dialog in a popover.

The `confirmRemoveColumnButtons` array contains two buttons: `Cancel` and `Delete`.
When the `triggerPopover` function is invoked, the message in the popover is set, and the
`poConfirm.show()` method is called, it displays the appropriate buttons.

Any errors during the process are caught and can be handled accordingly, such as displaying a
`deletion failed` message.

<codex-tutorial-example
  [module]="'PopConfirmExampleModule'"
  iframeHeight="250"
  [sources]="['packages/tutorial/src/popconfirm/pop-confirm-example.component.ts']"
></codex-tutorial-example>


## Accessibility

The element that triggers a popover has to be a button or any other element that supports the
`focus` state, and always have the `[attr.aria-label]` property.
