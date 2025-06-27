---
title: Data actions
slug: data-actions
icon: done
order: 50
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Data actions are essential guidelines for designing user interfaces that effectively handle data.

When organizing the user interface for data actions, it is important to prioritize forward movement.
To ensure a sense of progression within the system, it is recommended to position components
associated with progressive actions, such as saving or submitting changes, towards the end of the
sequence. This arrangement follows the natural reading order and reinforces the idea of advancing
through the workflow.

On the other hand, components related to regressive actions, such as canceling or undoing changes, have to be
positioned before the forward-moving components. This placement supports the logical flow of
reverting or discarding modifications and enables users to easily navigate back or cancel their
actions if necessary.

By organizing interactive components this way, the user interface intuitively guides users
along the path of forward progression while allowing flexibility for backward movement or action
cancellation when required.

Adhering to these guidelines, you will create consistent and user-friendly interfaces for managing
data on the Cumulocity platform.

<div class="card-group interact-grid">
  <div class="col-xs-12 col-md-4">
    <div class="card text-default" >
      <div class="card-block">
        <div class="c8y-svgicon m-b-16" style="font-size: 80px; line-height: 1;">
          <i class="dlt-c8y-icon-arrow-right"></i>
        </div>
        <div class="m-t-16">
          <h3>Progressive actions</h3>
          <p class="m-t-8 m-b-8 text-16">Progressive actions are those that drive forward movement within a
          system or application.</p>
          <p>These actions include adding, creating, editing, and saving data. They
          provide a dynamic user experience by enabling users to contribute, evolve, and securely manage their information.</p>
          <p class="m-t-8"><a href="#/ui-guidelines/foundations/data-actions/progressive-actions">Learn more</a></p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-md-4">
    <div class="card text-default" >
      <div class="card-block">
        <div class="c8y-svgicon m-b-16" style="font-size: 80px; line-height: 1;">
          <i class="dlt-c8y-icon-arrow-left "></i>
        </div>
        <div class="m-t-16">
          <h3>Regressive actions</h3>
          <p class="m-t-8 m-b-8 text-16">Regressive actions enable users to undo or remove
          changes.</p>
          <p>Examples include delete, remove, cancel, and revert. These actions restore data
          integrity and provide control and flexibility within the system.</p>
          <p class="m-t-8"><a href="#/ui-guidelines/foundations/data-actions/regressive-actions">Learn more</a></p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-md-4">
    <div class="card text-default">
      <div class="card-block">
        <div class="c8y-svgicon m-b-16" style="font-size: 80px; line-height: 1;">
          <i class="dlt-c8y-icon-arrow-down"></i>
        </div>
        <div class="m-t-16">
          <h3>Selection actions</h3>
          <p class="m-t-8 m-b-8 text-16">Selection actions involve choosing, toggling, and filtering options.</p>
            <p>Users can select from a list, toggle between choices, and apply filters to refine their view
            and interact with specific data elements. These actions enhance usability and facilitate
            efficient data navigation and manipulation.</p>
            <p class="m-t-8"><a href="#/ui-guidelines/foundations/data-actions/selection-actions">Learn more</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
