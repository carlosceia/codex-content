---
title: Loading
slug: c8y-loading
icon: done
order: 250
apiDocs:
  - name: LoadingComponent
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

It adds a loading animation, indicating that the view is either loading or requesting data from the
server.

This is used to keep users informed about the current state of information regarding the outcome of their previous actions.

## Default loading

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-t-24 p-b-24">
    <!-- important -->
    <c8y-loading></c8y-loading>
    <!-- /important -->
  </div>
</codex-tutorial-example>

Commonly the `c8y-loading` is used with the `*ngIf` directive to be shown only while something is loading.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-t-24 p-b-24">
    <!-- important -->
    <button (click)="isLoading = !isLoading" type="button" class="btn btn-default">
      Toggle loading
    </button>
    <c8y-loading *ngIf="isLoading"></c8y-loading>
    <!-- /important -->
  </div>
</codex-tutorial-example>

The default layout is suitable in most cases, as it shows that a certain component is loading.
If you require more detailed activity information, you can define it using the layout property.

### Changing the layout to display different activities

By default, the loading animation is showing a `component` activity. You can however change the
activity by defining `layout` and setting it to either `application` or `page`. For more information on when to use
which activity, see our [UI guidelines](#/ui-guidelines/foundations/feedback/overview#system-activity).

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-t-24 p-b-24" style="min-height: 214px;">
    <!-- important -->
    <label>Select a layout</label>
    <div
      class="btn-group"
      role="group"
    >
      <button
        type="button"
        class="btn btn-default"
        [ngClass]="{'active': selectedLayout === 'component' || !selectedLayout }"
        (click)="selectedLayout = 'component'"
      >
        Component
      </button>
      <button
        type="button"
        class="btn btn-default"
        [ngClass]="{'active': selectedLayout === 'application' }"
        (click)="selectedLayout = 'application'"
      >
        Application
      </button>
      <button
        type="button"
        class="btn btn-default"
          [ngClass]="{'active': selectedLayout === 'page'}"
        (click)="selectedLayout = 'page'"
      >
        Page
      </button>
    </div>
    <c8y-loading [layout]="selectedLayout || 'component'"></c8y-loading>
    <!-- /important -->
  </div>
</codex-tutorial-example>

Click the buttons to try the different activity indicators. The `page` layout is most used at top of the page or in a card.

You can also add a `message` to any layout, but the `application` layout is the only one using the
"Loading…" message by default. You can remove this default message by setting it to an empty string.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-t-24 p-b-24">
    <!-- important -->
    <c8y-loading message="Custom message"></c8y-loading>
    <c8y-loading layout="application"></c8y-loading>
    <c8y-loading layout="application" message=""></c8y-loading>
    <!-- /important -->
  </div>
</codex-tutorial-example>

### Showing a progress-bar to the user

Sometimes you have to show the progress to the user, for example, when a file is being uploaded. To do so, set the `progress` property on the `c8y-loading` indicator.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-t-24 p-b-24">
    <!-- important -->
    <c8y-loading message="80%" progress="80"></c8y-loading>
    <!-- /important -->
  </div>
</codex-tutorial-example>

In this case the layout is ignored and the indicator is always shown as a bar. The progress value is
designed to only display percentages between 0 and 100.
