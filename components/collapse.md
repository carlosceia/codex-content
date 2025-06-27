---
title: Collapse
slug: collapse
icon: done
order: 110
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The collapse component allows you to place content in a collapsible container.

The component is composed by two elements:

1. An element to toggle the collapse
2. The collapse wrapper

Given how CSS handles animations, do not use padding directly on a `.collapse` element, use
the class as an independent wrapping element instead, and ensure that you always set the `isAnimated`
attribute to `true`, to provide a smooth animation.

For more information how to use this component, see [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/components/collapse?tab=overview).

<codex-tutorial-example>
<button class="btn btn-default"
  aria-controls="collapseBasic"
  [attr.aria-expanded]="isExpanded"
  (click)="isExpanded = !isExpanded"
>
  Toggle collapse
</button>
<div class="collapse bg-level-2"
  id="collapseBasic"
  [collapse]="!isExpanded"
  [isAnimated]="true"
>
  <div class="p-24">
    <p>
      <strong>Cumulocity</strong> is an independent device and application management Internet of Things (IoT)
      platform. It connects and manages devices and assets efficiently, controlling them remotely.
    </p>
  </div>
</div>
</codex-tutorial-example>

## Accessibility

Make sure you added `aria-expanded` to the control element. This attribute explicitly conveys the current
state of the collapsible element tied to the control to screen readers and similar assistive
technologies.

If the collapsible element is closed by default, the attribute on the control element must have a
value of `aria-expanded="false"`. If you have set the collapsible element to be open by default using
the `show` class, set `aria-expanded="true"` on the control instead. The plugin automatically
toggles this attribute on the control based on whether or not the collapsible element has been opened
or closed. If the control element’s HTML element is not a button (for example, an <code>&lt;a&gt;</code> or
<code>&lt;div&gt;</code>), the attribute `role="button"` must be added to the element.

If your control element is targeting a single collapsible element, you must add the aria-controls
attribute to the control element containing the ID of the collapsible element.

Modern screen readers and similar assistive technologies make use of this attribute to provide users
with additional shortcuts to navigate directly to the collapsible element itself.
