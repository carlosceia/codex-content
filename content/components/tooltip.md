---
title: Tooltip
slug: tooltip
icon: done
order: 430
---

<!-- markdownlint-disable MD001 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Tooltips are concise and informative messages or labels that appear when a user hovers their
cursor over or taps on an element, such as a button, icon, or link. They serve the primary purpose
of providing additional context about the function or purpose of that specific element.

To ensure their effectiveness, tooltip messages must be kept brief, ideally consisting of a
single, concise sentence. If more extensive information about the element is needed, consider using
a [Popover](#/components/popover) component.

## Default tooltip

You can easily add a tooltip to any element by including the `tooltip` attribute. By default,
tooltips use an `auto` placement strategy to determine the most suitable position on the screen. If
you want to manually specify the tooltip's placement, you can set the `placement` attribute to
`top`, `right`, `bottom`, or `left`.

Note that while these placement options allow customization, the tooltip's position may still
be automatically adjusted to ensure it fits within the screen boundaries. To prevent automatic
adjustments and maintain the chosen placement, you can include `[adaptivePosition]="false"`.

Refer to
[ngx-bootstrap's tooltip](https://valor-software.com/ngx-bootstrap/#/components/tooltip?tab=overview)
documentation for more options.

<codex-tutorial-example class="c8y-codex-override overflow-visible">
<div class="container-fluid p-24">
<div class="row">
  <div class="col-md-3 m-b-16">
<!-- important -->
<button
  class="btn btn-default"
  type="button"
  [attr.aria-label]="'Tooltip on top'"
  [tooltip]="'Tooltip on top'"
  placement="top"
>
  Top
</button>
<!-- /important -->
  </div>
  <div class="col-md-3 m-b-16">
<!-- important -->
<button
  class="btn btn-default"
  type="button"
  [attr.aria-label]="'Tooltip on right'"
  [tooltip]="'Tooltip on right'"
  placement="right"
>
  Right
</button>
<!-- /important -->
  </div>
  <div class="col-md-3 m-b-16">
<!-- important -->
<button
  class="btn btn-default"
  type="button"
  [attr.aria-label]="'Tooltip on bottom'"
  [tooltip]="'Tooltip on bottom'"
  placement="bottom"
>
  Bottom
</button>
<!-- /important -->
  </div>
  <div class="col-md-3 m-b-16">
<!-- important -->
<button
  class="btn btn-default"
  type="button"
  [attr.aria-label]="'Tooltip on left'"
  [tooltip]="'Tooltip on left'"
  placement="left"
>
  Left
</button>
<!-- /important -->
  </div>
  <div class="col-md-6 m-b-16">
<!-- important -->
<button
  class="btn btn-default"
  type="button"
  [attr.aria-label]="'Adaptive position'"
  [tooltip]="'Adaptive position'"
  placement="bottom"
  href="javascript:void(0)"
>
  Tooltip bottom with adaptive position
</button>
<!-- /important -->
  </div>
  <div class="col-md-6">
<!-- important -->
<button
  class="btn btn-default"
  [attr.aria-label]="'Non-adaptive position'"
  [tooltip]="'Non-adaptive position'"
  placement="bottom"
  [adaptivePosition]="false"
  href="javascript:void(0)"
>
  Tooltip bottom without adaptive position
</button>
<!-- /important -->
  </div>
</div>
</div>
</codex-tutorial-example>

> ### Tooltip overflow
>
> When used inside an element with `overflow: hidden` or `overflow: auto`, sometimes the full
> rendering of the tooltip will not be visible. To prevent this issue use the `placement` attribute
> together with `[adaptivePosition]="false"` to ensure the tooltip placement.  
> &nbsp;  
> If absolutely necessary, use the attribute `container="body"` so the tooltip will be appended to
> body and be fully visible outside its parent element.  
> Use this option only as last resort since results might not work as expected in every occasion.

## Tooltip delay

In scenarios where tooltips are applied to numerous elements within a list, it's advisable not to
display the tooltip immediately upon hovering over an element. Instead, introduce a slight delay to
improve the user experience. You can accomplish this by setting a delay of 500 milliseconds using
the `[delay]="500"` attribute on the element.

<codex-tutorial-example class="c8y-codex-override overflow-visible">
<div class="container-fluid p-24">
<div class="row">
  <div class="col-md-6">
<!-- important -->
<button
  class="btn btn-sm btn-default"
  type="button"
  [attr.aria-label]="'I\'m a tooltip with a 500ms delay'"
  [tooltip]="'I\'m a tooltip with a 500ms delay'"
  placement="right"
  [delay]="500"
>
  Tooltip with delay
</button>
<!-- /important -->
  </div>
  <div class="col-md-6">
<!-- important -->
<button
  class="btn btn-default btn-sm"
  type="button"
  [attr.aria-label]="'I\'m a tooltip without delay'"
  [tooltip]="'I\'m a tooltip without delay'"
  placement="right"
>
  Tooltip without delay
</button>
<!-- /important -->
  </div>
</div>
</div>
</codex-tutorial-example>

## Tooltip on icons

[Icon buttons](#/components/button/overview#icon-button), which typically lack a visible label,
have to include a tooltip with a 500-millisecond delay to enhance accessibility. This ensures that
users who rely on tooltips to understand the button's function have a better experience.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
<!-- important -->
<button
  class="btn btn-default btn-icon"
  type="button"
  tooltip="Settings"
  placement="top"
  [delay]="500"
>
  <i c8yIcon="cog"></i>
</button>

<button
  class="btn btn-primary btn-icon"
  type="button"
  tooltip="Settings"
  placement="top"
  [delay]="500"
>
  <i c8yIcon="cog"></i>
</button>

<button
  class="btn btn-danger btn-icon"
  type="button"
  tooltip="Settings"
  placement="top"
  [delay]="500"
>
  <i c8yIcon="cog"></i>
</button>

<button
  class="btn btn-link btn-icon"
  type="button"
  tooltip="Settings"
  placement="top"
  [delay]="500"
>
  <i c8yIcon="cog"></i>
</button>

<button
  class="btn btn-dot"
  type="button"
  tooltip="Settings"
  placement="top"
  [delay]="500"
>
  <i c8yIcon="cog"></i>
</button>
<!-- /important -->
</div>
</codex-tutorial-example>

## Accessibility

The WAI-ARIA [tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) is designed to make additional information available to users in a non-disruptive manner. According to this standard, tooltips are meant to provide contextual guidance and do not receive keyboard focus. A tooltip becomes visible when its associated control element is focused or hovered over.

### Key points for implementing accessible tooltips

- **Triggering Elements**: The control element that triggers the tooltip (for example, a button or a link) must be focusable. This ensures that keyboard users can also access the tooltip information. The trigger element needs an `aria-describedby` attribute pointing to the ID of the tooltip, linking the element and its tooltip semantically for assistive technologies.

- **Non-Focusable Tooltips**: Tooltips themselves are not focusable, nor do they contain focusable elements. This prevents them from interrupting the flow of tab navigation through a page or application.

- **Use of `aria-describedby`**: This attribute has to be added to the trigger element to reference the tooltip's content. It connects the element that receives focus or hover with the tooltip, allowing screen reader users to hear the additional information provided by the tooltip.

- **Visibility Control**: Tooltips appear automatically when their trigger element is focused or hovered over and do not require a specific action to be dismissed. They provide information as long as the user remains focused on or hovers over the trigger element, enhancing accessibility without necessitating additional interaction.

- **`aria-label` vs. Visible Text**: If the trigger element does not have visible text (for example, an icon), use `aria-label` to provide an accessible name for the element. If the trigger has visible text, ensure it is accessible to assistive technologies, potentially using `aria-labelledby` if necessary to reference the visible text.
