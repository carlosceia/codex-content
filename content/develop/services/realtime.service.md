---
title: RealtimeService
slug: RealtimeService
icon: done
order: 10
apiDocs:
  - name: RealtimeService
    import: '@c8y/ngx-components'
  - name: AlarmRealtimeService
    import: '@c8y/ngx-components'
  - name: DeviceBootstrapRealtimeService
    import: '@c8y/ngx-components'
  - name: EventRealtimeService
    import: '@c8y/ngx-components'
  - name: ManagedObjectRealtimeService
    import: '@c8y/ngx-components'
  - name: MeasurementRealtimeService
    import: '@c8y/ngx-components'
  - name: OperationBulkRealtimeService
    import: '@c8y/ngx-components'
  - name: OperationRealtimeService
    import: '@c8y/ngx-components'
---


The `RealtimeService` is a generic abstract class which implements the interactions with the
real-time API.

There are multiple classes based on this class to match the different real-time channels. These are
for example:

- `AlarmRealtimeService`
- `DeviceBootstrapRealtimeService`
- `EventRealtimeService`
- `ManagedObjectRealtimeService`
- `MeasurementRealtimeService`
- `OperationBulkRealtimeService`
- `OperationRealtimeService`

You must manually provide all instances of theses services as part of the providers array of your
component or module. To have these services provided per component or module allows you to manage
their state, for example, starting/stopping subscriptions, on the same level.

Note that you must avoid real-time subscription to a wildcard topic whenever possible. Otherwise
you could cause a significant amount of traffic between the browser and the platform. To avoid such
issues try to always provide an `entity` or `entityID` to the methods provided by these services.

<codex-tutorial-example module="RealtimeTutorialModule"
[sources]="['./packages/tutorial/src/realtime/realtime-tutorial.component.ts', 'packages/tutorial/src/realtime/realtime-tutorial.component.html']"></codex-tutorial-example>
