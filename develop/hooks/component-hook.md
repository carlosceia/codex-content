---
title: Dynamic component
slug: dynamic-component
icon: done
---

This hook adds dynamic components, for example, widgets, to the UI.

It is strictly related to `c8y-dynamic-component`, which allows to use component registered with `hookComponent` in application.

Example below shows simple usage of `hookComponent`. To register a new dynamic component it needs to be added to
module providers array. It takes two arguments- first one is component, or array of components, that implements
`DynamicComponentDefinition`, second one is optional options object.

Most important parts of `DynamicComponentDefinition` are:

- `id` - Unique identifier, necessary to use registered widget in application
- `loadComponent` or `component` - Reference to component class. While `component` loads class (or standalone component)
  eagerly, `loadComponent` is meant to load it lazily and this is recommended way of loading component.

For more info about `DynamicComponentDefinition`, see the [Widgets feature module](#/develop/feature-modules/widgets).

To use this component in your app, just place `c8y-dynamic-component` in your application template
and provide `componentId` as an input- it matches the ID of object passed to `hookComponent`

<codex-tutorial-example module="ComponentModule" [sources]="[
'./packages/ngx-components/core/dynamic-component/dynamic-component.model.ts',
'./packages/tutorial/src/hooks/component/basic-view/',
'./packages/tutorial/src/hooks/component/component.module.ts']"></codex-tutorial-example>

Dynamic components are utilized mainly for adding widgets for dashboards. For examples of the widget dynamic component, refer to
[Custom widget](#/getting-started/guides/custom-widgets/overview#creating-app-and-adding-custom-widget).

## Dynamic resolvers

Dynamic component are usually used to display widgets on dashboards. These dashboards (and widgets that dashboard consists of)
might be stored in database. Widgets holds information like dynamic component ID and widget configuration.

In multiple cases, data required to display component cannot be stored in widget configuration only as some
necessary entities are independent from widgets and can change in time. For example, a widget can have a device applied
to display its device details, but it only holds the ID of this device. Details of this device have to be resolved every time
this widget is displayed, as some of these details may change.

Here, dynamic resolvers come in handy. To benefit from resolvers, add a suitable `resolve` property
to the `DynamicComponentDefinition` object instance that you call the `hookComponent` with. Keys of this object have to match
widget configuration object keys that we want to populate with data from resolvers.

Resolver class can be imported from `@c8y/ngx-components` like `DynamicManagedObjectResolver`, but it can be also
custom class that implements `DynamicDetailsResolver`, just like `DynamicEventResolver` from the example below.

When data is resolved successfully, properties are set to the widget configuration and can be accessed in the `config` property of the
widget view class - `WidgetResolversComponent`.

<codex-tutorial-example [open]="true"
[sources]="['./packages/ngx-components/core/dynamic-component/dynamic-details-resolver.ts',
'./packages/tutorial/src/widget-resolvers/index.ts',
'./packages/tutorial/src/widget-resolvers/event.resolver.ts',
'./packages/tutorial/src/widget-resolvers/widget-resolvers.component.ts'
]"></codex-tutorial-example>

For a detailed use case of features above, see [Developing custom widgets](#/getting-started/guides/custom-widgets) for a
step-by-step guide.

## Dynamic component error strategy

Another useful property of the `DynamicComponentDefinition` is `errorStrategy`. It determines if dynamic component or widget
itself renders alerts. It is possible to pick one option from listed below:

- `NOT_RENDER`: Will not render/initialize the Widget in case an error was detected.
- `OVERLAY_ERROR`: Will add an overlay over the Widget, displaying the error message.
- `CUSTOM`: The widget implements error handling on its own.

A dynamic component errors strictly corresponds with the `DynamicComponentComponent` property `alerts`. This property is a
`DynamicComponentAlertAggregator` instance class that aggregates errors, allows to add and dismiss alerts. It can be
accessed both from `DynamicComponentComponent`, which is wrapper for the widget and the widget class itself.

<codex-tutorial-example
[module]="'WidgetGuideContextDashboardModule'"
[sources]="[
'./packages/tutorial/src/dashboard/widget-guide-context-dashboard/widget-guide-context-dashboard.component.ts',
'./packages/tutorial/src/widget/demo-widget.component.ts',
'./packages/ngx-components/core/dynamic-component/dynamic-component-alert-aggregator.ts',
]"></codex-tutorial-example>
