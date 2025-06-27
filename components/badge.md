---
title: Badge
slug: badge
icon: done
order: 40
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

A badge is a small circular component used to display a concise count or label, designed to grab
attention and provide information efficiently.

Positioned near icons or text, badges offer a visually distinct way to communicate important details
within a user interface.


## Default badge

Commonly used to indicate different states, each state is associated with a specific color scheme
for clear visual differentiation. Simply add the `.badge` class along with one of the modifier
classes like `.badge-default`, `.badge-success`, `.badge-warning`, `.badge-danger`, `.badge-system`,
or `.badge-info`.

In cases where there are no items to display (if there is no content within them), badges
automatically collapse using CSS's `:empty` selector.

<codex-tutorial-example>
<div class="container-fluid">
  <div class="c8y-list__item__footer m-b-24">
    <div class="span m-r-4" ng-if="alarm.count > 1">
<!-- important -->
<button class="btn-clean"
  type="button"
  [attr.aria-label]="'Number of occurrences. First occurrence 19, Feb 2023, 03:55:38 (device time).'"
  tooltip="Number of occurrences. First occurrence 19 Feb 2023, 03:55:38 (device time)."
  placement="right"
  [delay]="500"
>
  <span class="badge badge-info">
    994
  </span>
</button>
<!-- /important -->
    </div>
    <small class="text-muted icon-flex m-r-8" title="Last occurrence of this alarm (device time).">
      <i c8yIcon="clock-o"></i>
      12 Jul 2023, 11:48:52
    </small>
    <div class="flex-grow m-r-8">
      <a class="text-muted"  title="On geofence send email" href="#">
        <small class="icon-flex">
          <i c8yIcon="exchange"></i>
          On geofence send email
        </small>
      </a>
    </div>
  </div>

  <div class="m-b-24">
<!-- important -->
<div class="btn-group btn-group-sm">
  <button
      title="Critical"
      type="button"
      class="btn btn-default btn-sm d-flex a-i-center active"
    >
      <i
        c8yIcon="exclamation-circle"
        class="status m-r-4 icon-14 stroked-icon critical"
      ></i>
      <span class="hidden-md hidden-sm text-truncate m-r-4">Critical</span>
    <span class="badge badge-info flex-no-shrink">
      1
    </span>
  </button>
  <button
    title="Major"
    type="button"
    class="btn btn-default btn-sm d-flex a-i-center active"
  >
    <i c8yIcon="warning"
      class="status m-r-4 icon-14 stroked-icon major"
    ></i>
    <span class="hidden-md hidden-sm text-truncate m-r-4">Major</span>
    <span class="badge badge-info flex-no-shrink">28</span>
  </button>
  <button
    title="Minor"
    type="button"
    class="btn btn-default btn-sm d-flex a-i-center active"
  >
    <i c8yIcon="high-priority"
      class="status m-r-4 icon-14 stroked-icon minor"
    ></i>
    <span class="hidden-md hidden-sm text-truncate m-r-4">Minor</span>
    <span class="badge badge-info flex-no-shrink">6</span>
  </button>
  <button
    title="Warning"
    type="button"
    class="btn btn-default btn-sm d-flex a-i-center active"
  >
    <i c8yIcon="circle"
      class="status m-r-4 icon-14 stroked-icon warning"
    ></i>
    <span class="hidden-md hidden-sm text-truncate m-r-4">Warning</span>
  <span class="badge badge-info flex-no-shrink">6</span>
  </button>
</div>
<!-- /important -->
  </div>

<!-- important -->
<button type="button" class="btn btn-default">
  Default <span class="badge badge-default">3</span>
</button>

<button type="button" class="btn btn-default">
  Success <span class="badge badge-success">23</span>
</button>

<button type="button" class="btn btn-default">
  Warning <span class="badge badge-warning">89</span>
</button>

<button type="button" class="btn btn-default">
  Danger <span class="badge badge-danger">4</span>
</button>

<button type="button" class="btn btn-default">
  System <span class="badge badge-system">18</span>
</button>

<button type="button" class="btn btn-default">
  Info <span class="badge badge-info">72</span>
</button>
<!-- /important -->
</div>
</codex-tutorial-example>

## Icon badge

In addition to the standard badge, you can use the `.icon-badge` wrapper, which combines an icon and
a badge, creating a compact and impactful visual representation.

<codex-tutorial-example>
  <div class="container-fluid">
<!-- important -->
<span class="c8y-icon-badge">
  <i c8yIcon="clock"></i>
  <span class="badge badge-success">
    <i c8yIcon="link"></i>
  </span>
</span>

<span class="c8y-icon-badge" title="1 Major alarm">
  <i c8yIcon="warning" class="status major stroked-icon"></i>
  <span class="badge badge-info">1</span>
</span>

<span class="c8y-icon-badge" title="14 Critical alarms">
  <i c8yIcon="exclamation-circle" class="status critical stroked-icon"></i>
  <span class="badge badge-info">14</span>
</span>

<span class="c8y-icon-badge" title="3 Resources">
  <i c8yIcon="tasks"></i>
  <span class="badge badge-info">3</span>
</span>
<!-- /important -->
  </div>
</codex-tutorial-example>
