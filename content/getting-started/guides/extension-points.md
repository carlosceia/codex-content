---
title: "Extension points"
slug: extension-points
icon: done
order: 10
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD001 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

To extend and compose an application, the @c8y/ngx-components library provide three core
architecture concepts called *Extensions points*. Those extension points can be used to define how
your custom Angular Module extends the existing application frame (called shell).

They are designed to be self registering, meaning the module tells the shell where it wants to hook
into. These so called hooks can for example, extend an existing detail view by adding a component
which is called when the user clicks on a tab or adding a new section by hooking a component after a
click on a navigator node. Once hooked, components can furthermore change the frame by using content
projection. Lately, for interaction, there are several services that allow you to show a modal or an
alert to the user.

## Multi Provider hooks

The Multi Provider extension allows a declarative approach to extend the application. Instead of
defining it in the template, you extend an already defined factory via a `HOOK`. This hook gets
executed if the application state changes. The return values are then injected into the page. You
can use the normal dependency injection system of Angular and as a result you can usually return an
Observable, Promise or Array of a certain type. As an example, we can define the tabs of certain
routes by hooking into the `hookTab` provider:

```js
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Tab, TabFactory, _ } from '@c8y/ngx-components';

@Injectable({ providedIn: 'root' })
export class ExampleTabFactory implements TabFactory { // 1

  constructor(public router: Router) { }

  get() {
    const tabs: Tab[] = [];
    if (this.router.url.match(/world/g)) {            // 2
      tabs.push({
        path: 'world/awesome',
        label: 'Awesome',
        icon: 'angellist'
      } as Tab);
    }
    return tabs;                                      // 3
  }
}
```

By defining the `Injectable()` service which implements the `TabFactory` (1), you can define which
tabs you want to show on which page. By using the `Router` service of Angular, we check in this
example if the URL of the route contains the name **world** (2) and only if this matches the tab
labeled `Awesome` is returned (3). By hooking this into the provider definition of your module, you
make sure that the `get()` function is checked on each route change:

```js
@NgModule({
  declarations: [
    /* ... */
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot([/* ... */], { enableTracing: false, useHash: true }),
    CoreModule.forRoot()
  ],
  providers: [
    hookTab(ExampleTabFactory) // hook the ExampleTabFactory defined earlier
  ],
  bootstrap: [BootstrapComponent]
})
export class AppModule { }
```

Usually, you use Content Projection within a route and Multi Provider if the context is shared
across multiple routes or needs more complex logic to resolve the content.

**Examples:**
If a title is just valid for one route, you must use Content Projection. If a tab is only shown on specific routes
and under certain conditions, you must use Multi Provider. The following hooks are currently supported:

* `hookTab`: Allows to show tabs on certain conditions.
* `hookNavigator`: Enables navigator nodes to be shown.
* `hookAction`: Enables to define the global actions which is shown or enabled on certain conditions.
* `hookActionBar`: Enables to define local actions on a page.
* `hookBreadcrumb`: Can be used to show breadcrumbs in the header bar.
* `hookSearch`: Allows to define the search to be shown or not.
* `hookComponent`: A hook to add dynamic components to the UI (for example, widgets).
* `hookRoute`: A hook to add a new route.
* `hookWizard`: A hook to add a entry into a existing wizard.
* `hookStepper`: A hook to add a step into a existing stepper.

 > ### Note
 >  
 > All hooks are described in detail in the [hooks section](#/develop/hooks/guide/overview).

## Content projection

This concept allows to project content from one component to another. For example, you can configure
the title of a page by setting a `<c8y-title>` in any other component. The content of the
`<c8y-title>` tag is then projected to an outlet component, which is placed in the header bar. The
benefit of this concept is that you can place anything into the projected content, for example, you
can project another custom component into the title.  
A good example for how to use this concept is the `c8y-action-bar-item` which uses a `routerLink` directive
from Angular to route to a different context:

```html
<c8y-action-bar-item [placement]="'right'">
  <a class="btn btn-link" routerLink="add">
    <i c8yIcon="plus-square"></i>
    Add
  </a>
</c8y-action-bar-item>
```

The example above gives you an action bar item in the header bar, regardless of the component you
define it. If the component is initialized, the item is shown and it is removed on destroy.

 > ### Note
 >
 > Examples of all components can be found in the [Components](#/components/alarm-event-selection/overview) section.

## Services

A service is defined for most components of ngx-components. They can be used via the dependency
injection concept of Angular, meaning that these services can be injected in the constructor of a
component and can then add or remove certain UI elements. The following example shows how to use
that concept with an alert:

```js
constructor(private alert: AlertService) {
  try {
    // do something that might throw an exception
  } catch(ex) {
    this.alert.add({
      text: 'Something bad happened!'
      type: 'danger';
      detailedData: ex;
    } as Alert);
  }
}
```

> ### Note
>
> All important services are explained in detail in the [Services](#/develop/services/overview) section.
