---
title: Tabs
icon: done
slug: tabs
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->


This hook allows you to show tabs on certain conditions.

Tabs can be used for a secondary navigation inside a certain view. Usually your entry point is a certain [NavigatorNode](#/develop/hooks/navigator-route/overview) which you bind to a Angular route.


The Web SDK places on each route automatically a default `c8y-router-outlet` which allows you to use `hookTab` to hook in every page a certain tab. Usually you don't want to hook in every page a tab, but just in specific pages. That is why `hookTab` is recommended to be used with a tabs factory:

<codex-tutorial-example [open]="true" [sources]="['./packages/tutorial/src/hooks/tabs/tab.ts', './packages/tutorial/src/hooks/tabs/tabs.module.ts']"></codex-tutorial-example>

The following example shows the above factory in use. Additionally it adds inline tabs to the view:

<codex-tutorial-example module="TabsModule" noAppSwitcher=true hideNavigator=true hideHeader=true [sources]="['./packages/tutorial/src/hooks/tabs/outstanding/', './packages/tutorial/src/hooks/tabs/awesome/', './packages/tutorial/src/hooks/tabs/tab.ts', './packages/tutorial/src/hooks/tabs/tabs.module.ts']"></codex-tutorial-example>

Tabs can be shown in two directions: `horizontal` or `vertical`. You can define on an outlet the direction by setting the `orientation` property. The root tabs outlet by default shows tabs horizontal. However you can change this, by changing the `tabsOrientation` setting on the [OptionService](#/develop/services/OptionsService/overview).

> ### Note
>
> Tabs are displayed only when more than one tab is added for a given path or if you add `showAlways` property to the tab.

## Inline tabs

Inline tabs needs to define an own `c8y-router-outlet` with a certain `outletName`. This name must match the `tabsOutlet` property that you provide in a factory to match the outlet. Usually you use it in combination with a `router-outlet` which let you navigate over the child-routes.

```html
<div class="p-relative">
  <c8y-tabs-outlet orientation="horizontal" outletName="inline-example"></c8y-tabs-outlet>
</div>
<div class="p-16">
  <router-outlet></router-outlet>
</div>
```

You should always wrap the inline tabs in a `p-relative` styled container, to allow scrolling when there are more tabs to display then available horizontal space. You can see an example of inline tabs used in the "Outstanding"-tab in the above factory tabs example.

## Tabs as component

Alternative you can also use tabs without routing. Therefore you can use directly the `c8y-tab` component:

<codex-tutorial-example class="c8y-codex-override" >
  <div style="min-height: 160px">
    <div class="p-relative">
      <c8y-tabs-outlet orientation="horizontal" outletName="exampleTabOutlet"></c8y-tabs-outlet>
    </div>
    <c8y-tab
      [label]="'Tab1'"
      [tabsOutlet]="'exampleTabOutlet'"
      (onSelect)="selectedTab = 'Tab1'"
      [isActive]="!selectedTab || selectedTab === 'Tab1'"
    >
    </c8y-tab>
    <c8y-tab
      [label]="'Tab2'"
      [tabsOutlet]="'exampleTabOutlet'"
      (onSelect)="selectedTab = 'Tab2'"
      [isActive]="selectedTab === 'Tab2'"
    >
    </c8y-tab>
    <c8y-tab
      [label]="'Tab3'"
      [tabsOutlet]="'exampleTabOutlet'"
      (onSelect)="selectedTab = 'Tab3'"
      [isActive]="selectedTab === 'Tab3'"
    >
    </c8y-tab>
    <div *ngIf="!selectedTab || selectedTab === 'Tab1'" class="p-24">
      Tab 1 content
    </div>
    <div *ngIf="selectedTab === 'Tab2'" class="p-24">
      Tab 2 content
    </div>
    <div *ngIf="selectedTab === 'Tab3'" class="p-24">
      Tab 3 content
    </div>
  <div>
</codex-tutorial-example>

In this example, you basically define an `c8y-tabs-outlet` to tell, where the tabs should get rendered. Next you define all the `c8y-tabs` and define, that they should belong to a certain outlet. If the `c8y-tab` component is used without a outlet, always the "main" outlet is used. Last you define to show or hide the content, based on the `onSelect` emitter. 

 > **Info:** Try to avoid inline tabs without routing as others would not be able to "hook" into them and add functionality.

You can read more about the usage of tabs as a component in the [Component > Tabs](#/components/tab/overview) section.
