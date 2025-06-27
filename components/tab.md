---
title: Tab
slug: tab
icon: done
order: 400
apiDocs:
  - name: TabsOutletComponent
    import: '@c8y/ngx-components'
  - name: TabComponent
    import: '@c8y/ngx-components'
---


Use tabs to separate information into logical sections based on functionality or use case. Cumulocity has a main tabs outlet, which is at the top of the page. Refer to the [Hooks > Tabs](#/develop/hooks/tabs/overview) if you want to extend the main outlet. This section describes how you can create your own inline tabs.
We recommend you to opt for vertical tabs when you have more than five sections.

<!-- <p class="lead">Tabs are replaced by a custom `select` in smaller screen sizes.</p> -->

## Horizontal tabs

For horizontal tabs, create an outlet and assign the property `orientation="horizontal"` to it. It is important to name your outlet with the `outletName` property so that you can assign tabs to it. The outlet defines where your tabs are rendered. Next you can define anywhere on the page your `c8y-tabs` and assign them with the `tabsOutlet` name matching your outlet name. Content can be rendered by any logic that is added to the `onSelect` event-emitter. In this example, it simply shows or hide certain tabs by assigning a variable called `selectedTab`:

<codex-tutorial-example>
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
  <div *ngIf="!selectedTab || selectedTab === 'Tab1'" class="p-24">
    Tab 1 content
  </div>
  <div *ngIf="selectedTab === 'Tab2'" class="p-24">
    Tab 2 content
  </div>
<div>
</codex-tutorial-example>

Always wrap horizontal tabs in a relative container (for example with the class `p-relative`) as in case of too many tabs the container needs to be able to scroll horizontal.

## Vertical tabs

You can use vertical tabs the same way as horizontal tabs and only need to change the `orientation` property of the `c8y-tabs-outlet` to vertical:

<codex-tutorial-example>
<div style="min-height: 160px" class="p-relative">
  <div class="d-flex">
    <c8y-tabs-outlet orientation="vertical" outletName="exampleTabOutletVertical"></c8y-tabs-outlet>
    <div *ngIf="!selectedTabVertical || selectedTabVertical === 'Tab1'" class="p-l-24">
      Tab 1 content
    </div>
    <div *ngIf="selectedTabVertical === 'Tab2'" class="p-l-24">
      Tab 2 content
    </div>
  </div>

  <c8y-tab
    [label]="'Tab1'"
    [tabsOutlet]="'exampleTabOutletVertical'"
    (onSelect)="selectedTabVertical = 'Tab1'"
    [isActive]="!selectedTabVertical || selectedTabVertical === 'Tab1'"
  >
  </c8y-tab>
  <c8y-tab
    [label]="'Tab2'"
    [tabsOutlet]="'exampleTabOutletVertical'"
    (onSelect)="selectedTabVertical = 'Tab2'"
    [isActive]="selectedTabVertical === 'Tab2'"
  >
  </c8y-tab>
<div>
</codex-tutorial-example>

<!-- TODO: Removing this for now, as unclear if this is still a component we should support?

## Nav stacked tabs

Vertically stacked buttons can be used as an alternative for vertical tabs.

<codex-tutorial-example>
<div class="row">
  <div class="col-md-4 col-xs-12">
    <ul class="nav c8y-nav-stacked">
      <li class="c8y-stacked-item">
        <span class="text-truncate">
          <span>212</span>
          <span>Temperatur Sensor</span>
        </span>
      </li>
      <li
        class="c8y-stacked-item active"
      >
        <span class="text-truncate">
          <span>Test 2</span>
          <span>Test Message</span>
        </span>
      </li>
      <li>
        <div class="alert alert-info" translate="">
          <span>No messages. Click below to add the first one.</span>
        </div>
      </li>
    </ul>
  </div>
</div>
</codex-tutorial-example>
