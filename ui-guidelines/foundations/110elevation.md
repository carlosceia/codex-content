---
title: Elevation
icon: done
slug: elevation
order: 110
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The concept of elevation in design signifies the spatial relationship between surfaces. By
manipulating the background color and/or the depth of shadows, an element's elevation establishes a
sense of hierarchy among UI components, indicating permanence or temporality.

## Levels reference

Using levels help create a sense of depth and provide hints for the information hierarchy. Besides
the default component background color, we use four more shades of light gray to create levels of
lightness. Refer to the [color utilities](#/utilities/color/overview#background-color)
section.

<div class="c8y-example">
  <div class="row">
    <div class="col-md-3 bg-level-1" style="min-height:120px">
      <code>bg-level-1</code>
    </div>
    <div class="col-md-3 bg-level-2" style="min-height:120px">
      <code>bg-level-2</code>
    </div>
    <div class="col-md-3 bg-level-3" style="min-height:120px">
      <code>bg-level-3</code>
    </div>
    <div class="col-md-3 bg-level-4" style="min-height:120px">
      <code>bg-level-4</code>
    </div>
  </div>
</div>


## Shadows reference

The following examples showcase shadows used in components that already incorporate elevation as an
inherent feature.

For detailed instructions on applying elevation to custom components, refer to the [elevation
utilities](#/utilities/elevation) section for further information and guidance on utilizing
shadows effectively.

<div class="c8y-example">
  <div class="card-group row d-col-xs a-i-stretch">
    <div class="card-group row">
      <div class="col-sm-6">
        <div class="m-b-40 fit-w elevation-sm">
          <div
            class="card-block"
            style="min-height: 120px;"
          >
            <code>elevation-sm</code>
            <p>
              <small><em>Used in cards and other flat components</em></small>
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="elevation-md fit-w m-b-40">
          <div
            class="card-block"
            style="min-height: 120px;"
          >
            <code>elevation-md</code>
            <p>
              <small>
                <em>
                  Default direction is down, used in dropdown menus, popovers,
                  toasts, and other components. but you can use multiple direction modifiers.
                </em>
              </small>
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="elevation-lg fit-w m-b-40">
          <div
            class="card-block"
            style="min-height: 120px;"
          >
            <code>elevation-lg</code>
            <p>
              <small><em>Used in Modals and confirmation dialogs</em></small>
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="elevation-hover fit-w m-b-40">
          <div
            class="card-block"
            style="min-height: 120px;"
          >
            <code>elevation-hover</code>
            <p>
              <small>
                <em>
                  Used as the hover effect in cards inside an interactive grid.
                </em>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
