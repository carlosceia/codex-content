---
title: Service
slug: service
icon: done
---

This hook adds services that can be shared between plugins and host app.

`hookService` is a type-safe extension mechanism that allows services to be injected from a plugin and shared across the entire application, including the host app and other plugins. To declare the contract for a service provided via `hookService`, define an interface that will be used to bind the service to a key for providing and retrieving instances. By extending the `ExtensionKeys` interface in the `CumulocityServiceRegistry` namespace, you declare the key, ensuring `hookService` enforces type safety, allowing only services implementing the corresponding interface to be provided for that key.

<codex-tutorial-example module=ServiceHookCodexSampleModule [sources]="[
'packages/tutorial/src/hooks/service/counter/counter.module.ts',
'packages/tutorial/src/hooks/service/counter/counter.model.ts',
'packages/tutorial/src/hooks/service/counter/counter.service.ts',
'packages/tutorial/src/hooks/service/client/counter.component.ts',
'packages/tutorial/src/hooks/service/client/counter.component.html',
'packages/tutorial/src/hooks/service/client/service-hook.module.ts'
]"></codex-tutorial-example>
