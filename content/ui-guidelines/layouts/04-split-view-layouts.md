---
title: Split view layouts
slug: split-view-layouts
icon: done
order: 40
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

It is the ideal layout for working through a queue of records by allowing users to stay on the same
screen while viewing and editing items.

The card contains a grid with two columns: the first to hold a list of records and the second to
display the record details.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid">
  <img class="img-responsive m-b-24" alt="Data grid devices" src="../../images/ui-guidelines/layouts/split-view.png">
  <!-- important -->
  <!-- use the `split-view--*-*` classes to set both column widths -->
  <div class="card content-fullpage split-view--5-7">
  <!-- Optional element using the `grid__col--fullspan` to span all columns -->
  <div class="card-block flex-no-shrink bg-level-1 separator-bottom grid__col--fullspan">
    <!-- content -->
    <em>Top area content</em>
  </div>
    <!-- The Records list. Use the `inner-scroll` to handle the overflow  -->
  <div class="inner-scroll split-view__list">
    <!-- use `bg-level-1` to set the background color and
        use `flex-grow` to take all the available height -->
    <div class="bg-level-1 flex-grow">
      <!-- use the `c8y-nav-stacked` component to display the record list -->
      <p class="p-16"><em>The records list</em></p>
    </div>
    <!-- use the `card-footer` class together with `sticky-bottom` to fix the footer at the bottom -->
    <div class="card-footer large-padding separator sticky-bottom">
      <button title="Add record" class="btn btn-default" >
        <i c8yIcon="plus-circle-o"></i>
        <span>Add record</span>
      </button>
    </div>
  </div>
    <!-- Record detail. Use the `inner-scroll` class to display a scrollbar when needed  -->
    <!-- apply the `split-view__detail--selected` when a record is selected.
          this is required for proper display in small screens (tablet and smartphone)-->
  <div class="inner-scroll split-view__detail"
    ngClass="{ 'split-view__detail--selected': selectedRecord }"
  >
  <!-- Add a `card-header` to hold a `back` button only displayed in tablet and smartphones
      use the `sticky-top` class to make it fixed to the top
  -->
    <div class="card-header separator sticky-top visible-sm visible-xs">
      <button class="btn btn-clean text-primary" title="Back">
        <i c8y-icon="chevron-left" class="dlt-c8y-icon-chevron-left"></i><span>Back</span>
      </button>
    </div>
    <!--  use `flex-grow` to take all the available height and push the footer (when it exists) to the bottom -->
    <div class="card-block flex-grow">
      <em>Record detail</em>
    </div>
    <!-- use the `card-footer` class together with `sticky-bottom` to fix the footer at the bottom -->
    <div class="card-footer separator-top sticky-bottom">
      <!-- when providing a `cancel` button, ensure that it will remove the
        `split-view__detail--selected` class from the `split-view__detail` element
        -->
      <button title="Cancel" class="btn btn-default">Cancel</button>
      <button title="Remove" class="btn btn-danger">Remove</button>
      <button title="Save" class="btn btn-primary">Save</button>
    </div>
  </div>
  </div>
  <!-- /important -->
  </div>
</codex-tutorial-example>
