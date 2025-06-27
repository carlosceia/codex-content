---
title: Progress and activity
icon: adjust
slug: progress_and_activity
aorder: 130
---

<!-- markdownlint-disable MD033 -->

# Progress and activity

<p class="lead m-b-40">Use flexible progress bars and activity indicators to provide up-to-date feedback on the progress of an action, when the system is actively retrieving data or performing an operation.</p>

## Progress Bars

<p>Show the percentage or change the color using the color status by adding <code>.progress-bar-info</code>, <code>.progress-bar-success</code>, <code>.progress-bar-warning</code> or <code>.progress-bar-danger</code> to <code>.progress-bar</code>.</p>

<div class="c8y-example">
  <div class="row">
    <div class="col-sm-6">
      <div class="progress progress-striped active ">
        <div class="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 45%;"></div>
      </div>
      <div class="progress progress-striped active ">
        <div class="progress-bar progress-bar-info"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 63%;">
          63%
        </div>
      </div>
      <div class="progress progress-striped active ">
        <div class="progress-bar progress-bar-success"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 82%;">
        </div>
      </div>
      <div class="progress progress-striped active ">
        <div class="progress-bar progress-bar-warning"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 77%;">
          77%
        </div>
      </div>
      <div class="progress progress-striped active ">
        <div class="progress-bar progress-bar-danger"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 55%;">
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="progress progress-striped active ">
  <div
    class="progress-bar"
    role="progressbar"
    aria-valuenow="0"
    aria-valuemin="0"
    aria-valuemax="100"
    style="width: 45%;"
  ></div>
</div>

<div class="progress progress-striped active ">
  <div
    class="progress-bar progress-bar-info"
    role="progressbar"
    aria-valuenow="0"
    aria-valuemin="0"
    aria-valuemax="100"
    style="width: 63%;"
  >
    63%
  </div>
</div>
```

## Activity indicators

Help to reassure the user that the system is actively retrieving data or performing an operation.

<div class="c8y-example">
  <div class="row">
    <div class="col-md-6">
      <p>Loading content in components</p>
      <c8y-loading></c8y-loading>
    </div>
    <div class="col-md-6">
      <p>For navigator buttons and small sized elements.</p>
      <div class="d-inline-block">
        <i class="dlt-c8y-icon-circle-o-notch icon-spin"></i>
      </div>
    </div>
  </div>
</div>

```html
<c8y-loading></c8y-loading>

<i class="dlt-c8y-icon-circle-o-notch icon-spin"></i>
```

## Background activity

Let users know when there is an ongoing activity running in the background, for example, real-time is enabled or disabled.

Swap the classes `active` and `inactive` to toggle the appearance.

Use the component in a button to enable toggling.

<div class="c8y-example">
  <div class="row">
    <div class="col-sm-4">
      <div class="c8y-realtime"><span class="c8y-pulse active"></span> Realtime</div>
      <br>
      <div class="c8y-realtime"><span class="c8y-pulse inactive"></span> Realtime</div>
    </div>
    <div class="col-sm-4">
      <button class="btn btn-link c8y-realtime"><span class="c8y-pulse active"></span> Realtime</button>
      <br>
      <button class="btn btn-link c8y-realtime"><span class="c8y-pulse inactive"></span> Realtime</button>
    </div>  
  </div>  
</div>

```html
<div class="c8y-realtime"><span class="c8y-pulse active"></span> Realtime</div>
<div class="c8y-realtime"><span class="c8y-pulse inactive"></span> Realtime</div>

<button class="btn btn-link c8y-realtime"><span class="c8y-pulse active"></span> Realtime</button>
<button class="btn btn-link c8y-realtime"><span class="c8y-pulse inactive"></span> Realtime</button>
```
