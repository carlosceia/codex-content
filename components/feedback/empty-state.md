---
title: Empty state
slug: empty-state
icon: done
order: 180
apiDocs:
  - name: EmptyStateComponent
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Empty states are shown when an usually populated list or dashboard reveals no items.  
These states hold the potential to be more than just placeholders, they are integral components of a holistic onboarding experience.

Leverage an "initial use" empty state to complement a seamless onboarding journey. Use this moment to inform users, ensuring that an empty canvas becomes an opportunity for action and engagement.

Effective empty states also find their footing when search efforts yield no results.
They act as guides, illuminating the next course of action.

Facilitate navigation by embedding primary action shortcuts. Make sure users have a clear launchpad. Additionally, consider embedding links to Help or User guide to provide deeper context or insights.


## Vertical empty state

Use this version for full-page lists or sizable elements. Typically, it furnishes shortcuts for frequently used actions like adding new items. It is also a place to house links to help resources and documentation.

If your setup incorporates search or filtering capabilities, you must account for empty states when these processes do not yield any results.

If the user does not have permissions to perform an action, you have to disable the action button and adjust the subtitle message to inform the user of the reasons behind it being disabled.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid p-24">
  <div class="row">
   <div class="col-sm-6">
<!-- important -->
<c8y-ui-empty-state
  [icon]="'c8y-smart-rules'"
  [title]="'No smart rules to display.'"
  [subtitle]="'Click below to add your first smart rule.'"
>
  <button
    class="btn btn-primary"
    title="Add smart rule"
  >
    Add smart rule
  </button>
  <p c8y-guide-docs>
    <small>
      Find out more in the
      <a>User guide</a>.
    </small>
  </p>
</c8y-ui-empty-state>
<!-- /important -->
  </div>
    <div class="col-sm-6">
<!-- important -->
<c8y-ui-empty-state
  [icon]="'c8y-smart-rules'"
  [title]="'No smart rules to display.'"
  [subtitle]="'You have no permissions to add a smart rule.'"
>
  <button
    class="btn btn-primary"
    title="Add smart rule"
    disabled
  >
    Add smart rule
  </button>
  <p c8y-guide-docs>
    <small>
      Find out more in the
      <a>User guide</a>.
    </small>
  </p>
</c8y-ui-empty-state>
<!-- /important -->
  </div>
</div>
<br />
<br />
<!-- important -->
<c8y-ui-empty-state
  [icon]="'search'"
  [title]="'No results to display.'"
  [subtitle]="'Adjust or reset the filter.'"
>
  <button
    class="btn btn-primary"
    title="Add smart rule"
  >
    Reset filter
  </button>
</c8y-ui-empty-state>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Horizontal empty state

To follow this approach add `[horizontal]="true"` and use it for components like dashboard widgets, cards, and panels.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
<!-- important -->
<div class="card">
  <div class="card-header separator">
    <span class="card-title">Alarms</span>
  </div>
  <div class="card-block">
    <c8y-ui-empty-state
        [icon]="'c8y-alert-idle'"
        [title]="'No alarms to display.'"
        [horizontal]="true"
      >
        <p c8y-guide-docs>
          <small
            ngNonBindable
          >
            Find out more in the
            <a>user documentation</a>.
          </small>
        </p>
      </c8y-ui-empty-state>
  </div>
</div>
<!-- /important -->
      </div>
      <div class="col-sm-6">
<!-- important -->
<div class="card">
  <div class="card-header separator">
    <span class="card-title">Data points</span>
  </div>
  <div class="card-block">
    <c8y-ui-empty-state
      [icon]="'c8y-data-points'"
      [title]="'No data points to display.'"
      [subtitle]="'You must add at least one data point.'"
      [horizontal]="true"
    >
      <p c8y-guide-docs>
        <small>
          Find out more in the
          <a>User guide</a>.
        </small>
      </p>
    </c8y-ui-empty-state>
  </div>
</div>
<!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>
