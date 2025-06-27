---
title: Realtime button
slug: realtime-button
icon: done
order: 370
apiDocs:
  - name: RealtimeButtonComponent
    import: '@c8y/ngx-components'
---

This component is subscribing for all realtime notifications using a wildcard subscription, which can generate a lot of load/traffic on your systems.

For that reason try to provide your `entityId` to the `onAll$()`, `onCreate$()`,`onUpdate$()` or `onDelete$()` methods where ever it is possible in your production code.

The following sample demonstrates how you can utilize the different `RealtimeServices` provided by the `@c8y/ngx-components` package to receive realtime notifications in your UI.
You can enable/disable these services by clicking on them in the list below.

<codex-tutorial-example module="RealtimeTutorialModule"
[sources]="['./packages/tutorial/src/realtime/realtime-tutorial.component.ts', 'packages/tutorial/src/realtime/realtime-tutorial.component.html']"></codex-tutorial-example>
