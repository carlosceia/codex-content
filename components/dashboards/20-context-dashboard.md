---
title: Context dashboard
slug: context-dashboard
order: 20
apiDocs:
  - name: ContextDashboardModule
    import: '@c8y/ngx-components/context-dashboard'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

## Context dashboard

A context dashboard is a dashboard type which is saved in the database. There are five types of dashboards:
- `name`
- `group`
- `device`
- `type`
- `report`
The context dashboard wraps the widgets dashboard, so it contains all functionalities of the widgets
dashboard, but also provides the functionalities responsible for editing the dashboard and widgets, saving it in database.

The following example shows a `name` context dashboard.

<codex-tutorial-example [module]="'ContextDashboardModule'"
iframeHeight="700"
class="codex-tutorial-example--wide"
[sources]="['./packages/tutorial/src/dashboard/context-dashboard',
'./packages/tutorial/src/widget/index.ts'
]"></codex-tutorial-example>

## Named-context dashboard

By adding the context here as well, the named-context dashboard is assigned to the device as a `childAddition`.
This allows you to use this dashboard also with inventory roles. The example shows a named-context dashboard with the device context provided.
In case of named-context dashboards, new dashboard will be created if context device has no device already assigned.

<codex-tutorial-example
iframeHeight="700"
class="codex-tutorial-example--wide"
[module]="'NamedContextDashboardModule'"
[sources]="['./packages/tutorial/src/dashboard/named-context-dashboard']"></codex-tutorial-example>

## Service dashboard

Service dashboards offer a way to enhance the service monitoring capabilities of your application. They allow you to define your own customizable service views and let
users choose what they want to focus on, for example, the current service status, specific metrics like CPU usage or memory consumption, matching them against events or alarms, and so on.
To do that you have to declare your component with the `hookRoute` hook using the `ViewContext.Service` context.

For example, you can use a dashboard component to allow for further customization of your service details view:

```typescript
@NgModule({
    ...,
    providers: [
       ...
        hookRoute({
          path: 'info',
          context: ViewContext.Service,
          component: ServiceDashboardComponent,
          label: 'Service info',
          priority: 900,
          icon: 'rocket'
        })
    ]
})
```

<codex-tutorial-example
iframeHeight="700"
class="codex-tutorial-example--wide"
[module]="'ServiceDashboardModule'"
[sources]="['./packages/tutorial/src/dashboard/service-dashboard']"></codex-tutorial-example>

See [Developing custom widgets](#/getting-started/guides/custom-widgets) for step-by-step guide explaining how to
add custom widgets and use them in dashboards.
