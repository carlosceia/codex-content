---
title: Custom dashboard
slug: custom-dashboard
order: 10
apiDocs:
  - name: DashboardModule
    import: '@c8y/ngx-components/dashboard'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Dashboards are used for presenting high-level information and guiding users to related
details and actions.

They allow users to understand key details as well as the overall situation in an intuitive way.

## Basic custom dashboard

It's a core functionality that can be used for many Drag & Drop scenarios. It contains only the
basic functionalities and does not provide any helper for the well known widget dashboards.

The core part of this type of dashboard is the `c8y-dashboard` element that displays a customizable CSS grid.
On this grid, you can set the `c8y-dashboard-child` components or position any element by setting the grid properties.

<codex-tutorial-example
iframeHeight="700"
class="c8y-codex-override codex-tutorial-example--wide"
[module]="'CustomDashboardModule'"
[sources]="['./packages/tutorial/src/dashboard/custom-dashboard/custom-dashboard.component.ts',
'./packages/tutorial/src/dashboard/custom-dashboard/custom-dashboard.component.html']"></codex-tutorial-example>

The example above utilizes the `c8y-dynamic-component` to embed a widget added via a hook. For an example on how to use the `c8y-dynamic-component`, see [Dynamic component](#/develop/hooks/dynamic-component).

The usage in this case is slightly more complex, as it allows for switching between the widget view,
with the mode set to `component`, and the widget configuration, with the mode input set to `config`.

In the case of widget configuration, the dynamic component expects an instance of the `ngForm`
directive to be provided. Therefore, if you wish to use the dynamic component directly in `config`
mode, it must be enclosed within a `<form>` tag.

## Widget dashboard

The widget dashboard is a component that wraps the core dashboard component and enhances its functionalities even further.

This dashboard already contains the basic functions, such as to add, or to remove, but only defines events without
specifying each event further. Functionality is added only when an event handler
is implemented. In the following example, the delete event handler has not been implemented.

<codex-tutorial-example
iframeHeight="700"
class="codex-tutorial-example--wide"
[module]="'WidgetDashboardModule'"
[sources]="['./packages/tutorial/src/dashboard/widget-dashboard/widget-dashboard.component.ts']"></codex-tutorial-example>

See [Developing custom widgets](#/getting-started/guides/custom-widgets) for a step-by-step guide explaining how to
add custom widgets and use them in dashboards.
