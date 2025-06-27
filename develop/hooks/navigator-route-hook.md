---
title: Navigator & route
slug: navigator-route
icon: done
apiDocs:
  - name: NavigatorNode
    import: '@c8y/ngx-components'
  - name: Route
    import: '@c8y/ngx-components'
---
To add a menu entry in the navigator and register a route for it, you have to utilize two hooks:
* `hookNavigator`: This hook allows for the registration and display of navigator nodes.
* `hookRoute`: A hook used to add new routes.

As shown in the example below, both hooks have been utilized together. Their common denominator is that they refer to the same `path`.

<codex-tutorial-example [open]="true" [sources]="['./packages/tutorial/src/hooks/navigator-route/navigator-route.module.ts', './packages/ngx-components/core/navigator/navigator-node-data.ts']"></codex-tutorial-example>
