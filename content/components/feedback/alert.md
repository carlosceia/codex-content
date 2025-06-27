---
title: Alert
slug: alert
icon: done
order: 10
apiDocs:
  - name: AlertModule
    import: '@c8y/ngx-components/alert'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Alerts provide contextual feedback messages for typical user actions or to display a notification
that requires action from the user to proceed.

Alerts and toast notifications are a powerful way to help the user understand what is happening
after executing an action or to communicate system events.

## Default alert

To add an alert, use plain HTML. Wrap your message in a `<div>` element with an `.alert`
class and choose one of its modifier classes: `.alert-success`, `.alert-warning`, `.alert-danger`,
`.alert-info`, and `.alert-system`. These classes set the correct color and icon for the alert.

The width of the alert is determined by its parent container, but it's limited to 600px. The text
automatically wraps to as many lines as necessary without truncation.

<codex-tutorial-example>
<div class="alert alert-success"
  role="alert"
>
  <strong>Success</strong> What you did went great.
</div>

<div class="alert alert-warning"
  role="alert"
>
  <strong>Warning</strong> Better check that again…
</div>

<div class="alert alert-danger"
  role="alert"
>
  <strong>Error</strong> Something went wrong.
</div>

<div class="alert alert-info"
  role="alert"
>
  <strong>Info</strong> Just so you know, this happened.
</div>

<div class="alert alert-system"
  role="alert"
>
  <strong>System</strong> We need to talk. (Having said that, let's just keep on writing so that it's visually clear that whatever message is placed in any alert will wrap to as many lines needed without being truncated.)
</div>

</codex-tutorial-example>

## Dismissible alerts

Dismissible alerts are a type of notification that can be easily dismissed or closed by the user.
These alerts provide important information but allow the user to remove them from the screen when
they are no longer needed.

For a dismissible alert, you must add a `.close` button.

<codex-tutorial-example>
  <div [ngClass]="{'hidden': data.hideAlert}">
<!-- important -->
<div class="alert alert-danger" role="alert" >
  <button class="close" type="button" (click)="data.hideAlert = true" >
    <span aria-hidden="true">
      <i c8yIcon="times"></i>
    </span>
    <span class="sr-only">Close</span>
  </button>
  <strong>Invalid credentials.</strong>
</div>
<!-- /important -->
  </div>
  <div [ngClass]="{'hidden': !data.hideAlert }">
    <button class="btn btn-default" (click)="data.hideAlert = false">
      Show alert
    </button>
  </div>
</codex-tutorial-example>

## Toast Notifications

Toast notifications are brief feedback messages that communicate important information to users
following their actions or system events.

Designed to be unobtrusive, toast notifications typically appear briefly in the top right corner of
the screen. While some notifications automatically disappear after a short duration, others may
require user acknowledgement to dismiss them.

The easiest way to display toast notifications is using the `AlertService`. This service handles the
appearance and presentation of the alerts as toast notifications and offers multiple
methods for adding alerts, including:

- The generic `add` method, which requires an object of type `Alert`.
- Dedicated methods for each alert type, such as `success`, `danger`, `warning`, `info`,
  and `system`.
- The `addByText` method, which takes the alert type and text as parameters, with the option
  to include additional alert details.

The alert text can be a string or a `templateRef` if you require a more complex content.

By leveraging the `AlertService` and its various methods, you can add and display toast
notifications with different types and content to enhance user experience and provide important
information.

<codex-tutorial-example module="AlertExampleModule" [sources]="['./packages/tutorial/src/alert/alert-example.components.ts', './packages/tutorial/src/alert/alert-example.components.html']"></codex-tutorial-example>
