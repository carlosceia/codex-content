---
title: Feedback
slug: feedback
icon: done
order: 70
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Feedback plays a crucial role in communicating the outcomes of user interactions, making them
visible and comprehensible.

Its primary purpose is to signal the completion of a task or indicate ongoing system activities such
as data retrieval or operations. Feedback informs users about any errors that may have occurred and
provides guidance on how to address them effectively.

Feedback can take various forms, ranging from attention-grabbing modal dialog prompts to subtle
indicators like icon badges that signify status. It also serves to encourage and guide users through
the different steps of a process.

## System activity

To indicate that the system is actively retrieving data or performing an operation, there are
several options available.

### Application load

When loading the application, usually there is no update on the progress, therefore we are using the
[loading component](#/components/feedback/c8y-loading/overview) with a layout set to `application` and an empty message.
It is usually centered on the viewport above the brand logo.

<div class="c8y-example">
  <div class="d-flex d-col m-b-xs-16">
    <c8y-loading layout="application" message=""></c8y-loading>
  </div>
</div>

### Page activity

Placed at the bottom of the main header or in the bottom of widgets header, the
[loading component](#/components/feedback/c8y-loading/overview) with a layout set to `page` is used to display system activity on pages.

<div class="c8y-example">
  <div class="d-flex d-col m-b-xs-16">
    <c8y-loading layout="page"></c8y-loading>
  </div>
</div>

### Component activity

The [loading](#/components/feedback/c8y-loading/overview) component is placed inside components or widgets, it is used to
display system activity on specific components and/or widgets.

<div class="c8y-example">
  <div class="d-flex d-col m-b-xs-16">
    <div class="a-s-center">
      <c8y-loading></c8y-loading>
    </div>
  </div>
</div>

On smaller components, you can use the `dlt-c8y-icon-circle-o-notch` icon with the modifier class
`icon-spin` for animation.

<div class="c8y-example">
  <div class="d-flex d-col m-b-xs-16">
    <div class="list-group separator-top">
      <div class="list-group-item">
        <i class="dlt-c8y-icon-circle-o-notch icon-spin"></i>
        Some label
      </div>
    </div>
  </div>
</div>

### Submitting a form

When submitting a form, you can also change the state of the submit button by adding the class
`btn-pending`.

<div class="c8y-example">
  <button type="button" class="btn btn-default btn-pending">
    Exporting…
  </button>
  <button type="button" class="btn btn-primary btn-pending">
    Saving…
  </button>
</div>

### Progress

Use the [loading component](#/components/feedback/c8y-loading/overview) to provide up-to-date feedback on
the progress of an action by setting the progress value.

<div class="c8y-example">
  <c8y-loading [progress]="85" message="Loading 85%"></c8y-loading>
  <c8y-loading [progress]="32" message="Loading 32%"></c8y-loading>
</div>

## System messages

System messages play a crucial role in conveying timely and essential information about the status
of an item, element, or task. These messages are designed to notify users about critical issues,
errors, or successful outcomes related to all processes within an application or a specific UI
element that users interact with.

There are four types of notifications, which can be classified into two main categories:

### 1 - Global notifications

These notifications pertain to the entire application and provide a broad overview of the system
state. For instance, an example of a global notification would be: "Unable to load the Smart Rules
list."

#### Toast Notifications

Toast notifications are concise feedback messages that communicate important information following
user or system actions. They serve to indicate the outcome of a process, provide status updates,
deliver relevant notifications, and may require user acknowledgement to dismiss.

Common uses of toast notifications include Success, Danger, Warnings, and Information.

Toast notifications are designed to be unobtrusive, appearing briefly on the top right corner of the
screen. While some automatically disappear, others may require user acknowledgement to dismiss.

<div class="c8y-example">
  <div class="d-col a-i-end">
    <div class="alerts p-static">
      <div class="alert animated fadeInRightBig alert-success">
        <strong class="message">Subscription code registered.</strong>
      </div>
      <div class="alert animated fadeInRightBig alert-danger" [ngClass]="{'expanded': expandDetails }">
        <button class="close" type="button">
          <i c8yIcon="times" aria-hidden="true"></i>
          <span class="sr-only">Close</span>
        </button>
        <strong class="message">Could not find managed object with ID "781394373".</strong>
        <p class="text-muted m-t-8">
          <button class="btn btn-clean" (click)="expandDetails = !expandDetails">
            <i c8yIcon="chevron-down"></i> <span *ngIf="!expandDetails"> Show details</span>
            <span *ngIf="expandDetails"> Hide details</span>
          </button>
        </p>
        <div [collapse]="!expandDetails" [isAnimated]="true">
          <pre class="inner-scroll">
{{ '{' }}
  "error": "inventory/Not Found",
  "message": "Finding device data from database failed : No managedObject for ID '781394373'!",
  "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
{{ '}' }}
          </pre>
        </div>
      </div>
      <div class="alert animated fadeInRightBig alert-warning">
        <strong class="message">Device with low battery, please recharge.</strong>
      </div>
      <div class="alert animated fadeInRightBig alert-info">
        <strong class="message">At least 2 active data points must be selected.</strong>
      </div>
    </div>
  </div>
</div>

#### Dialog Prompts

A dialog prompt is a type of notification that prompts the user to take a specific action in order
to proceed. These prompts are commonly used to seek confirmation for potentially destructive
operations or to inform users about upcoming maintenance activities.

When presented with a dialog prompt, the user is typically provided with one or more options to
choose from, and there is no option to simply close or dismiss the prompt. To proceed, the user must
select one of the presented options.

Dialog prompts function similarly to modals, as they appear on top of a mask that obscures the
underlying UI elements. This design ensures that the prompt grabs the user's attention and focuses
their interaction solely on the options presented, temporarily blocking access to the rest of the UI
below.

Check the [Confirmation modal](#/components/modal/overview#confirmation-modal) component .

<div class="c8y-example">
  <div style="position:relative; min-height: 380px;">
    <div class="modal-backdrop fade in p-absolute"
      style="z-index: 100;"></div>
    <div class="modal fade in d-block p-absolute"
      style="z-index: 105;">
      <div class="modal-dialog">
        <div class="c8y-prompt alert alert-danger" >
          <h3 class="m-b-32">
            <i c8y-icon="exclamation-circle" class="dlt-c8y-icon-exclamation-circle"></i>
            <span ng-show="title">Delete Smart Rule</span>
          </h3>
          <p>You are about to delete Smart Rule "Increase alarm severity when active for too long". Do you want to proceed?</p>
          <div class="alert-footer">
            <button class="btn btn-default" title="Cancel">Cancel</button>
            <button class="btn btn-primary" title="Delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### 2 - Content-related notifications

Content-related notifications are aimed at providing relevant information within a specific UI
section or component, ensuring they are contextually appropriate for the user. These notifications
encompass both inline notifications and form and form control validation.

Check the [Alert component](#/components/alert).

#### Inline notifications

Inline notifications are displayed within the immediate vicinity of the relevant content, offering
timely feedback and guidance. They assist users in understanding and resolving issues within a
specific context, such as input validation errors or incomplete form submissions.

<div class="c8y-example">
  <div role="alert" class="alert alert-warning">
    <strong>No license attached</strong> The author of the package hasn't included a license file
    in a format that can be displayed. Verify the license online, for example, with a
    website like: <a target="_blank" rel="noopener noreferrer"
    href="https://spdx.org/licenses/Apache-2.0"> https://spdx.org/licenses/Apache-2.0 </a>
  </div>
</div>

#### Input validation

Input validation inform users about any errors or invalid parameters detected before or during the
form submission process, helping them correct and submit accurate information.

<div class="c8y-example">
  <div class="row">
    <div class="col-md-6">
      <c8y-form-group [hasError]="data.email && data.email.length === 0">
        <label translate for="userEmail">Email</label>
        <input
          id="userEmail"
          class="form-control ng-dirty"
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
          <c8y-message *ngIf="data.email && data.email.length === 0" translate></c8y-message>
          <c8y-message name="required" text="The email is required"></c8y-message>
        </c8y-messages>
      </c8y-form-group>
    </div>
  </div>
</div>

## Feedback severity

Feedback can be categorized based on their severity, indicating the nature and significance of the
information being conveyed. Here are the different levels of feedback severity together with their
icons:
<ul class="list-group">
  <li class="list-group-item">
    <div class="d-flex a-i-center gap-8">
      <h3 class="text-success m-r-8"><i class="dlt-c8y-icon-success"></i></h3>
        <strong class="text-success" style="width: 200px;">Success</strong>
        <span>This level indicates that an action or process has been completed successfully. It provides
        confirmation and reassurance to the user. For example: "Action was completed successfully.".</span>
      </div>
  </li>
  <li class="list-group-item">
    <div class="d-flex a-i-center gap-8">
      <h3 class="text-danger m-r-8"><i class="dlt-c8y-icon-error"></i></h3>
        <strong class="text-danger" style="width: 200px;">Error</strong>
        <span>An error notification indicates that something has gone wrong during a process or action. It
          notifies users of an issue that needs attention or resolution. For example: "Error: Unable to save
          changes."</span>
      </div>
  </li>
  <li class="list-group-item">
    <div class="d-flex a-i-center gap-8">
      <h3 class="text-warning m-r-8"><i class="dlt-c8y-icon-warning"></i></h3>
        <strong class="text-warning" style="width: 200px;">Warning</strong>
        <span>A warning notification signals the possibility of something undesirable occurring. It
          alerts users to potential issues or risks that they have to be aware of. For example: "Warning:
          Changes made will be irreversible."</span>
      </div>
  </li>
  <li class="list-group-item">
    <div class="d-flex a-i-center gap-8">
      <h3 class="text-info m-r-8"><i class="dlt-c8y-icon-info-circle"></i></h3>
        <strong class="text-info" style="width: 200px;">Info</strong>
        <span> Information notifications provide additional details or relevant information that can
          be positive or negative in nature. They offer context or guidance to users. For example: "Info: New
          version update available."</span>
      </div>
  </li>
</ul>

## Acknowledgement

Feedback messages may require acknowledgment by the user. The available options are:

### Sticky

Remains visible until status is changed. The user cannot interact with it.

<div class="alert alert-warning m-t-8">
  <span class="message">You don't have permission to access.</span>
</div>

### Dismissible

Remains visible until the user dismisses it with the close button. Duration does not apply here.

<div class="alert alert-danger m-t-8">
  <button class="close" type="button">
    <i c8yIcon="times" aria-hidden="true"></i>
    <span class="sr-only">Close</span>
  </button>
  <div>
    <span class="message">Invalid credentials.</span>
  </div>
</div>

### Temporary

Remains visible until the user dismisses it or duration has elapsed, whichever comes first.

<div class="alert alert-success m-t-8">
  <button type="button" class="close">
    <i c8yIcon="times" aria-hidden="true"></i>
    <span class="sr-only">Close</span>
  </button>
  <span class="message">All changes saved successfully.</span>
</div>
