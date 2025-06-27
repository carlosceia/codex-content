---
title: Element queries
slug: element-queries
icon: done
order: 90
mockdata:
  size: 51
  cflex: 51

---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

In complex layouts where components are displayed in different containers, it often becomes
necessary to have more precise control over how an individual module's contents respond relative to
the size of its parent container, rather than the viewport size.

To address this requirement, we utilize the
[Flexbox Holy Albatross](https://heydonworks.com/article/the-flexbox-holy-albatross-reincarnated)
technique.

To implement this technique, start by including a wrapper element with a class that sets the
element's size breakpoint. The class follows the pattern `content-flex-**`, where `**` represents
the desired width in pixels divided by 10. For example, `content-flex-50` will set the element's
size breakpoint to 500px, while `content-flex-51` will set it to 510px. We offer breakpoints
starting from 200px (`content-flex-20`) up to 1500px (`content-flex-150`) with a 10px interval.

All children of the wrapper element have to use the `col-**` classes, similar to our 12 column grid
but without the media queries modifier, for example, `col-2`, `col-6`, `col-4`.

To handle the element's size breakpoint, add the desired `content-flex-**` class to the parent
container.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-24">
      <div class="row d-flex">
        <div class="col-sm-6">
          <div class="form-group">
            <label>Set the container breakpoint</label>
            <div class="input-group">
              <span class="input-group-addon text-nowrap">content-flex-</span>
              <input type="number" placeholder="50" min="20" max="150" class="form-control" [(ngModel)]="route.snapshot.data.mockdata.size">  
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label>Adjust the container's width</label>
            <div class="input-group">
              <div class="flex-grow">
                <input type="range" max="150" min="20" [(ngModel)]="route.snapshot.data.mockdata.cflex">
              </div>
              <label class="m-l-4 m-t-auto m-b-auto">{{route.snapshot.data.mockdata.cflex * 10 || '500'}}px</label>
            </div>
          </div>
        </div>
      </div>

      <p class="p-b-16 text-medium">Breakpoint set to {{(route.snapshot.data.mockdata.size * 10) || '500'}}px. Below this measure, all elements are stacked.</p>
      <div class="show-grid show-grid--no-col-padding">
      <!-- important -->
<!-- content-flex-** classes range from 20 to 150 -->
<div class="content-flex-{{route.snapshot.data.mockdata.size || 50}}"  [ngStyle]="{ 'max-width.rem': route.snapshot.data.mockdata.cflex || '50' }">
    <div class="m-b-8 col-1">
    <code>col-1</code>
    </div>
    <div class="m-b-8 col-2">
    <code>col-2</code>
    </div>
    <div class="m-b-8 col-3">
    <code>col-3</code>
    </div>
    <div class="m-b-8 col-4">
    <code>col-4</code>
    </div>
    <div class="m-b-8 col-2">
    <code>col-2</code>
    </div>
    <div class="m-b-8 col-6">
    <code>col-6</code>
    </div>
    <div class="m-b-8 col-3">
    <code>col-3</code>
    </div>
    <div class="m-b-8 col-3">
    <code>col-3</code>
    </div>
    <div class="m-b-8 col-12">
    <code>col-12</code>
    </div>
</div>
<!-- /important -->
    </div>
    </div>
  </div>
</codex-tutorial-example>
