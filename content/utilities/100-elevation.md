---
title: Elevation
slug: elevation
icon: done
order: 100
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD051 -->

By strategically utilizing surfaces and shadows, elevations bring a sense of lift and
three-dimensionality to the user interface.

These layered elements not only enhance the visual appeal but also contribute to the overall user
experience by providing a visual hierarchy and intuitive interaction cues.

We provide four levels of elevation, with four different directions to the `elevation-md`.

<codex-tutorial-example class="c8y-codex-override">
<div class="inner-scroll">
<div class="container-fluid p-24">
  <div class="card-group row">
    <div class="col-sm-6">
      <div class="m-b-40 fit-w elevation-sm">
        <div class="card-block"
          style="min-height: 120px;">
          <code>elevation-sm</code>
          <p><small><em>Used in cards and other flat components</em></small></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="elevation-sm--border fit-w m-b-40">
        <div class="card-block"
          style="min-height: 120px;">
          <code>elevation-sm--border</code>
          <p><small><em>Just adds a subtle border to the elevation-sm</em></small></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="elevation-md fit-w m-b-40">
        <div class="card-block"
          style="min-height: 120px;">
          <code>elevation-md</code>
          <p><small><em>Default direction is down, used in dropdown menus, popovers, toasts, and other components</em></small></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="elevation-md--top fit-w m-b-40">
        <div class="card-block"
          style="min-height: 120px;">
          <code>.elevation-md--top</code>
          <p><small><em>Direction top. Used in the bottom drawer</em></small></p>
        </div>
      </div>
    </div>
      <div class="col-sm-6">
        <div class="elevation-md--left fit-w m-b-40">
          <div class="card-block"
          style="min-height: 120px;">
          <code>.elevation-md--left</code>
          <p><small><em>Direction left. Used in the right drawer panel</em></small></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="elevation-md--right fit-w m-b-40">
        <div class="card-block"
          style="min-height: 120px;">
          <code>.elevation-md--right</code>
          <p><small><em>Direction right. Used in navigator panel on small viewports</em></small></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="elevation-lg fit-w m-b-40">
        <div class="card-block"
          style="min-height: 120px;">
          <code>elevation-lg</code>
          <p><small><em>Used in Modals</em></small></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="elevation-hover fit-w m-b-40">
        <div class="card-block"
          style="min-height: 120px;">
          <code>elevation-hover</code>
          <p><small><em>Used as the hover effect in cards inside an interactive grid.</em></small></p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</codex-tutorial-example>

### Usage

| Class | Direction| Components |
| --- | --- | --- |
| `elevation-sm` | *Down* | Cards |
| `elevation-md` | *Down* | Dropdown menus, Popovers, Toasts |
| `elevation-md--top` | *Top* | Bottom drawer, Popovers, Toasts |
| `elevation-md--right` | *Right* | Navigator panel |
| `elevation-md--left` | *Left* | Right drawer panel |
| `elevation-lg` | *Down* | Modals |
| `elevation-hover` | *Down* | Hovered card |
