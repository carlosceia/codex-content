---
title: 'Developing custom widgets'
slug: custom-widgets
icon: done
order: 50
---

<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD001 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

This document will cover the prerequisites for widget development, explain dynamic component, and provide a step-by-step
example of building a simple widget and its usage in the dashboard.

## Prerequisites

Concepts that are crucial to the widget and dashboard development.

### Widgets

Widgets are modular components that display data and interact with other parts of the Cumulocity platform.
They can display maps, images, graphs, tables and other graphic representations of data. Widgets are useful to track
information (for example, on alarms, assets or applications), or provide maps, quick links and more in dashboards or reports.
There are multiple widgets available in `c8y/ngx-components`, but it's also possible to create your own custom widget.

See [Widgets](#/develop/feature-modules/widgets) for detailed informations.

### Dashboards

The surface where widgets are displayed. There are two types of dashboards:

- Context dashboard: The context dashboard is a dashboard which resolves its data from the current context (device or group) it is being displayed on. This dashboard type is usually created by the user.
- Named-context dashboard: This type of context dashboard has a name and is created programmatically for the device as a childAddition.

For more information see [Dashboard](#/components/dashboard). For further details on how to configure your dashboard see [Context dashboard](#/develop/feature-modules/context-dashboard).

### hookComponent and Dynamic component

The `hookComponent` is a hook function to add dynamic components to the UI (for example, widgets). To implement this function, use the `hookComponent`
and name it using the component object that implements `DynamicComponentDefinition` (or any other of these objects).

Dynamic component allows to display already registered components. It is used 'under the hood' in `ContextDashboardComponent` but
you can also use it directly in the `DashboardComponent`, see also [Context dashboard example](#/components/dashboard/context-dashboard/overview#context-dashboard).

For more information on custom dashboards see [Basic custom dashboard](#/components/dashboard/custom-dashboard/overview#basic-custom-dashboard).
For more details on component hooks, see [Dynamic component hook](#/develop/hooks/dynamic-component).

## Creating an application and adding custom widget

The following steps cover all the steps necessary to create fresh application with custom widget.

### 1. Initialize example application

Install the Angular 18 `@angular/cli` package.

```bash
npm install @angular/cli@18 -g
```

Generate a new Angular 18 application:

```bash
ng new <appName> --interactive=false --style=less 
```

Navigate to the application directory:

```bash
cd <appName>
```

Use the `ng add` command to include `@c8y/websdk`, and follow the prompts. For this example purposes, we selected the `Cockpit` application
when prompted to pick which application to add.

```bash
ng add @c8y/websdk
```

### 2. Create custom widget

In our example, the custom widget implementation consists of three elements:

#### WidgetDemo component class

This class is responsible for displaying a widget on the dashboard. It has one input for the `config` object, that can be stored in the
database, and can be configured by the `widget` config.

#### WidgetConfigDemo component class

The configuration class responsible for changing the configuration of an existing widget or new widget.
You must add a `config` object which you can fill with any serializable configuration that you want to pass to the widget.
To enable the widget configuration validation, the following option has to be added to the @Component decorator.

#### DashboardWidgetDemoModule

The module class is responsible for encapsulating the whole widget functionality and to register the widget to be used in an application.
The most important element of a module is the `hookComponent`. The hook method is called with an object that implements `DynamicComponentDefinition`
and consists of all necessary data, such as, the ID of dynamic component, view and config classes, and settings.

<codex-tutorial-example [open]="true"
[sources]="[
'./packages/tutorial/src/widget/demo-widget.component.ts',
'./packages/tutorial/src/widget/demo-widget-config.component.ts',
'./packages/tutorial/src/widget/index.ts'
]"></codex-tutorial-example>

Add these three elements to your application source folder and import the `DashboardWidgetDemoModule` in your application module.

### 3. Use new custom widget in application

As mentioned before, a widget can be used in two ways: implicitly in a context dashboard or directly in an explicit manner.

#### Using a widget in a context dashboard

In this case the dynamic component is already implemented in a context dashboard. If you have selected the `Cockpit` application during the
application creation process, you can add the custom widget (called `My angular widget`) from the list of widgets on the home dashboard.

You can also create your own context dashboard with added custom widgets. To provide an instance of our custom widget, a
suitable object must be provided to `c8y-context-dashboard`, as shown in the code example below.
Click **Add widget** to open the list of available widgets. In the list you find both default widgets and our new `My angular widget`.

<codex-tutorial-example
iframeHeight="650"
class="c8y-codex-override"
[module]="'WidgetGuideContextDashboardModule'"
[sources]="['./packages/tutorial/src/dashboard/widget-guide-context-dashboard/widget-guide-context-dashboard.component.ts']"></codex-tutorial-example>

For more details, see [Context dashboard](#/components/dashboard/context-dashboard).

#### Direct usage of dynamic component

The dynamic component can be used anywhere in the application, but is mostly used as a widget in the dashboard component.
The following example shows how the dynamic component can be used as dashboard child:

<codex-tutorial-example
iframeHeight="650"
class="c8y-codex-override"
[module]="'WidgetGuideDashboardModule'"
[sources]="['./packages/tutorial/src/dashboard/widget-guide-dashboard/widget-guide-dashboard.component.ts']"></codex-tutorial-example>

For more details, see [Basic custom dashboard](#/components/dashboard/custom-dashboard/overview#basic-custom-dashboard).
