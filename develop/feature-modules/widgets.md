---
title: Widgets
slug: widgets
icon: done
apiDocs:
  - name: WidgetsModule
    import: '@c8y/ngx-components/widgets'
---

The Widgets module provides collection of widgets that can be used, for example, in dashboards.

## Configuration object

`WidgetsModule` does not include any widgets by default.

Import this module by using the `WidgetsModule.config` method providing the following two parameters:

- `widgets`: list of widget definitions of type `DynamicComponentDefinition`
- `excludeList`: optional; list of ids of widgets that are excluded

<codex-tutorial-example [open]="true"
[sources]="[
'./packages/ngx-components/widgets/widgets.module.ts',
'./packages/ngx-components/core/dynamic-component/dynamic-component.model.ts',
'./packages/ngx-components/widgets/definitions/index.ts']"></codex-tutorial-example>

There are multiple, predefined widgets in the `@c8y/ngx-components` library that you can import, although you can also provide your own
widgets. For more information see [Developing custom widgets](#/getting-started/guides/custom-widgets) for step-by-step instructions.
