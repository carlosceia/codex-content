---
title: Services
description: Angular services that helps to communicate.
icon: done
slug: services
pageOrder: 10
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The package `@c8y/ngx-components` exports a number of services that you can use to interact with
the Cumulocity platform or to configure the application behavior. Those services are used via the Angular
Dependency injection system and are mostly exported by the `CoreModule`.

The usage of services is simple, you only have to inject it in your component or service you want to
implement:

```ts
constructor(public c8yOptionsService: OptionsService) {

}

doSomethingWithTheService() {
  // e.g. read an option
  this.c8yOptionsService.get('supportUrl');
}
```

Remember that the service type needs to be imported. In the example you have to add a
`import {{'{'}} OptionsService {{'}'}} from '@c8y/ngx-components';` at the top of the file.

> ### Note
>
> If you are unfamiliar with the dependency injection system of Angular, take a look at the
> [Angular documentation](https://angular.io/guide/dependency-injection-overview).

## List of important services

The following gives you an overview and a short description about the most important services used
in the Cumulocity platform. When navigating to the detail page, you can read up the full API and some detail
examples.

| Name | Export Module <abbr title="The module where the service is implemented">*</abbr> | Shared Module <abbr title="The module which a consumer has to import to use the service">**</abbr> | Description | State service? |
| --- | --- | --- | ------ | -- |
| [AlertService](#/develop/services/AlertService/overview) | `CommonModule` | `CoreModule` | Allows to notify the user about an operation status | no |
| [AppStateService](#/develop/services/AppStateService/overview) | `CommonModule` | `CoreModule` | Contains the current application state like user login and application configuration | yes |
| [OptionsService](#/develop/services/OptionsService/overview) | `CommonModule` | `CoreModule` | A service to access or change all the application options | no |
| [ApiService](#/develop/services/ApiService/overview) | `DataModule` | `CoreModule` | A service to interact with API requests and responses | no |
| [Permissions](#/develop/services/PermissionsService/overview) | `CommonModule` | `CoreModule` | A service verify if the user has a certain permission to access something | no |
| [RealtimeService](#/develop/services/RealtimeService/overview) | `RealtimeModule` | `CoreModule` | A service to access the notification 1.0 capabilities of the Platform | no |
| [UserPreferencesService](#/develop/services/UserPreferencesService/overview) | `CommonModule` | `CoreModule` | Allows to access the current user preference settings | no |
| [TranslateService](#/components/internationalization/overview) | `I18nModule` | `CoreModule` | Allows to translate text or change the language | no |

<p>
  <small>*: The module where the service is implemented</small><br>
  <small>**: The module which a consumer imports to use the service</small>
</p>

There are more services and all of them are exported, but mostly they are only used to share a certain state inside the component tree and do not have to be
used by external developers. However, each [hook](#/develop/hooks/guide/overview) has an
associated state service, for example, a the `hookTab` is implemented in the `TabService`. Those state services are standardized.

## State services

Are services that contain the application state. For example, they know which tabs, navigator nodes,
action bar items are shown to the current user. Normally, you do not have to care about those
states, as you define them via the [hook](#/develop/hooks/guide/overview) concept. However,
sometimes it is handy to add a certain hook via a service.

There basically exist two types of state services, which depends on the usage:

- Static state service: Are services like the
   [AppStateService](#/develop/services/AppStateService/overview). They are static for the overall
   browsing session and usually not refreshed. An example is the current logged in user data which
   is stored in this states.
- Dynamic state service: They update as soon as a navigation happens. This means the state is
   cleared on each navigation and all hooks are requested to provide additional data for the new
   route. A good example of this state is the `hookTab` and `TabService` which refreshes on each
   refresh.

Each state service has the following default abstract class:
<codex-tutorial-example [open]="true" [hideToggleButton]="true" ngNonBindable [sources]="['packages/ngx-components/core/common/state-service.abstract.ts']"></codex-tutorial-example>

You can therefore easily via `rxjs` subscribe to a state service and listen to changes or emit a new value by changing the state:

```ts
this.appState.state$.subscribe(state => {
  console.log('Application state changed', state);
}

this.appState.state$.next({ ...this.state, lang: 'de' });
```

Or without the use of `rxjs`:

```ts
console.log('current state snapshot', this.appState.state);

this.appState.state = {
  ...this.appState.state
  lang: 'de'
}
this.appState.emitNewState();

console.log('new state snapshot', this.appState.state);
```

The [AppStateService](#/develop/services/AppStateService/overview) has many useful convenience
methods that you have to use instead of accessing the state directly. In fact, the state there only has to
be maintained by the service itself. However the example explains the concept of a
stateful services and the next chapter will explain how you can use them for extension points.

### State services and extension points

Each `hookX` is a usually implements the `StateServiceAbstract` as well as an `ExtensionPoint`. They
are combining both concepts, meaning you can either add an extension via a service or via a hook.
The service implementation usually stores three kind of items:

1. `state`: The items added via a state service call.
2. `factories`: The item factories, added via a `hookX` provider.
3. `items$`: The current items shown on the page.

Usually you have to use hooks to add an extension point as it takes care of cleaning up the factories
(similar to the `async` pipe in Angular) and allows you to use injectable services in which you can
access any other injectable (for example, if you need some data before you can show the item).
However, sometimes using the service is useful, for example, when you add something dynamically on the
current page. The following example shows how you can add an item to the state based on the
`ActionService`:

<codex-tutorial-example module="HookStateModule" [sources]="['./packages/tutorial/src/hooks/state']" [hideHeader]="false"></codex-tutorial-example>

## Data services

To access data from the Cumulocity backend you can use the client services from `@c8y/client`. They
are provided by default in all Web SDK based Angular application and can be used by simply using
dependency injection:

```ts
constructor(public inventoryService: InventoryService) {
  // only use the service here if you are sure the user is
  // logged in
}

async ngOnInit() {
  console.log(this.inventoryService.list());
}
```

The data services are documented in the
[@c8y/client documentation](https://resources.cumulocity.com/documentation/websdk/client/). However,
if used in an Angular based Web SDK application authentication is already handled for you if the
user has logged in already. If you are not sure if the user has logged in already (for example, if
used in a constructor of a service), use the
[AppState Service](#/develop/services/AppStateService/overview) to verify the user is already logged
in.
