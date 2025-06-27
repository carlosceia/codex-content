---
title: List group
slug: list-group
icon: done
order: 240
mockdata:
  - id: '#12'
    owner: 'User3'
    creationTime: '2023-06-05T00:00:00.000Z'
    lastUpdated: '2023-06-29T00:00:00.000Z'
    name: 'Smart Speaker'
    icon: exchange
    description: 'A voice-controlled speaker with AI assistant.'
    value: 'ON'
    unit: ''
    type: 'actuator'
  - id: '#11'
    owner: 'User2'
    creationTime: '2023-04-10T00:00:00.000Z'
    lastUpdated: '2023-06-25T00:00:00.000Z'
    name: 'GPS Tracker'
    icon: exchange
    description: 'Tracks the location of an object or person.'
    value: '37.7749,-122.4194'
    unit: 'LatLong'
    type: 'sensor'
  - id: '#10'
    owner: 'User1'
    creationTime: '2023-05-15T00:00:00.000Z'
    lastUpdated: '2023-06-20T00:00:00.000Z'
    name: 'Smart Lock'
    icon: exchange
    description: 'A lock that can be remotely controlled.'
    value: 'locked'
    unit: ''
    type: 'actuator'
  - id: '#9'
    owner: 'User3'
    creationTime: '2023-02-28T00:00:00.000Z'
    lastUpdated: '2023-06-10T00:00:00.000Z'
    name: 'Water Leak Sensor'
    icon: exchange
    description: 'Detects the presence of water or leaks.'
    value: 'no water'
    unit: ''
    type: 'sensor'
  - id: '#8'
    owner: 'User2'
    creationTime: '2023-01-20T00:00:00.000Z'
    lastUpdated: '2023-06-01T00:00:00.000Z'
    name: 'Air Quality Monitor'
    icon: exchange
    description: 'Monitors the air quality (CO2, VOCs, PM2.5).'
    value: Good
    unit: ''
    type: 'sensor'
  - id: '#7'
    owner: 'User1'
    creationTime: '2023-02-14T00:00:00.000Z'
    lastUpdated: '2023-05-05T00:00:00.000Z'
    name: 'Smart Thermostat'
    icon: exchange
    description: 'Controls the temperature of a room.'
    value: 22.0
    unit: '°C'
    type: 'actuator'
  - id: '#6'
    owner: 'User3'
    creationTime: '2022-12-18T00:00:00.000Z'
    lastUpdated: '2023-03-02T00:00:00.000Z'
    name: 'Door Sensor'
    icon: exchange
    description: 'Detects the status (open/close) of a door.'
    value: 'closed'
    unit: ''
    type: 'sensor'
  - id: '#5'
    owner: 'User2'
    creationTime: '2022-11-05T00:00:00.000Z'
    lastUpdated: '2023-01-10T00:00:00.000Z'
    name: 'Security Camera'
    icon: exchange
    description: 'A surveillance camera with motion detection.'
    value: '192.168.1.10'
    unit: 'IP address'
    type: 'camera'
  - id: '#4'
    owner: 'User1'
    creationTime: '2022-03-12T00:00:00.000Z'
    lastUpdated: '2022-05-20T00:00:00.000Z'
    name: 'Smart Plug'
    icon: exchange
    description: 'A plug that can be remotely controlled.'
    value: 'ON'
    unit: ''
    type: 'actuator'
  - id: '#3'
    owner: 'User3'
    creationTime: '2022-06-01T00:00:00.000Z'
    lastUpdated: '2022-09-15T00:00:00.000Z'
    name: 'Smart Light Bulb'
    icon: exchange
    description: 'A controllable light bulb with color options.'
    value: 'ON'
    unit: ''
    type: 'actuator'
  - id: '#2'
    owner: 'User2'
    creationTime: '2021-03-10T00:00:00.000Z'
    lastUpdated: '2021-04-20T00:00:00.000Z'
    name: 'Humidity Sensor'
    icon: exchange
    description: 'Measures relative humidity.'
    value: 45.8
    unit: '%'
    type: 'sensor'
  - id: '#1'
    owner: 'User1'
    creationTime: '2021-01-01T00:00:00.000Z'
    lastUpdated: '2021-02-15T00:00:00.000Z'
    name: 'Temperature Sensor'
    icon: exchange
    description: 'Measures ambient temperature.'
    value: 25.5
    unit: '°C'
    type: 'sensor'
apiDocs:
  - name: ListGroupModule
    import: '@c8y/ngx-components/list-group'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

List groups are versatile and robust components designed for showcasing simple lists of elements as
well as intricate ones with custom content.

This component offers a variety of options, making it adaptable and functional across various
scenarios.

## Simple List Group

The fundamental list group consists of a `<c8y-list-group>` wrapper and any number of `<c8y-li>`
elements.

<codex-tutorial-example>
  <c8y-list-group class="separator-top">
    <c8y-li>Item 1</c8y-li>
    <c8y-li>Item 2</c8y-li>
    <c8y-li>Item 3</c8y-li>
    <c8y-li [active]="true">Item 4 - active</c8y-li>
    <c8y-li [dense]="true">Item 5 - dense</c8y-li>
    <c8y-li [highlighted]="true">Item 6 - highlighted</c8y-li>
  </c8y-list-group>
</codex-tutorial-example>

- Setting the `active` option adds a checkmark to the right
- Setting the `dense` option reduces the vertical padding
- Setting the `highlighted` option sets the lightest brand color as the background color

## List item with icons

To include icons on the left side of each list item, add a `<c8y-li-icon>` with the `icon` input or
through content projection, within the `c8y-li`.

<codex-tutorial-example>
  <c8y-list-group class="separator-top">
    <c8y-li>
      <c8y-li-icon icon="settings"></c8y-li-icon>
      Item 1
    </c8y-li>
    <c8y-li>
      <c8y-li-icon><i c8yIcon="settings"></i></c8y-li-icon>
      Item 2
    </c8y-li>
  </c8y-list-group>
</codex-tutorial-example>

## List item with checkbox or radio button

Integrate checkboxes or radio buttons for item selection inserting a `<c8y-li-checkbox>` or
`<c8y-li-radio>` within the `c8y-li`. These elements consistently occupy the primary position within
the list item.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-b-24 p-t-24">
    <div class="row">
      <div class="col-md-6">
        <!-- important -->
        <c8y-list-group class="separator-top">
          <c8y-li>
            <c8y-li-checkbox></c8y-li-checkbox>
            Simple checkbox
          </c8y-li>
          <c8y-li>
            <c8y-li-checkbox [disabled]="true"></c8y-li-checkbox>
            Simple checkbox disabled
          </c8y-li>
          <c8y-li>
            <c8y-li-checkbox (onSelect)="showAlert($event)"></c8y-li-checkbox>
            Checkbox example with onSelect event handler
          </c8y-li>
          <c8y-li>
            <c8y-li-checkbox [displayAsSwitch]="true"></c8y-li-checkbox>
            Checkbox example displaying the checkbox as a switch
          </c8y-li>
        </c8y-list-group>
        <!-- /important -->
      </div>
      <div class="col-md-6">
        <!-- important -->
        <c8y-list-group class="separator-top">
          <c8y-li>
            <c8y-li-radio></c8y-li-radio>
            Simple radio
          </c8y-li>
          <c8y-li>
            <c8y-li-radio [disabled]="true"></c8y-li-radio>
            Radio disabled
          </c8y-li>
          <c8y-li>
            <c8y-li-radio (onSelect)="showAlert($event)"></c8y-li-radio>
            Radio with onSelect event handler
          </c8y-li>
          <c8y-li>
            <c8y-li-radio #liRadioOption1 [name]="custom_group"></c8y-li-radio>
            Radio element example belonging to a different group
          </c8y-li>
          <c8y-li>
            <c8y-li-radio #liRadioOption2 [name]="custom_group"></c8y-li-radio>
            <p>Reset via this button
              <button class="btn btn-default btn-sm"
                (click)="liRadioOption1.reset(); liRadioOption2.reset();"
              >
                Reset selection
              </button>
            </p>
          </c8y-li>
        </c8y-list-group>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

> ### ngForm
>
> The `c8y-li-checkbox` and `c8y-li-radio` elements are compatible with `ngForm`, as they implement
> `CheckboxControlValueAccessor` and `ControlValueAccessor` respectively.

## List item with columns

Organize content into columns using either the [grid system](#/utilities/using-the-grid/overview) or
the [element queries](#/utilities/element-queries/overview) utilities.

When applying the `.page-sticky-header` class, ensure that the content structure follows the same
structure as the list item to maintain proper alignment of columns, ensuring a consistent and
visually pleasing layout.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll" >
    <div class="container-fluid">
      <!-- important -->
      <c8y-list-group>
        <!-- the .page-sticky-header -->
        <c8y-li
          class="page-sticky-header hidden-xs hidden-sm"
          *ngIf="route.snapshot.data.mockdata.length > 0"
        >
          <c8y-li-icon>
            <i class="p-l-24"></i>
          </c8y-li-icon>
          <div class="d-flex">
            <div class="col-md-5">Name</div>
            <div class="col-md-2">Owner</div>
            <div class="col-md-2">Type</div>
            <div class="col-md-3">Last update</div>
          </div>
        </c8y-li>
        <!-- The record list -->
        <c8y-li
          #li
          *ngFor="let record of route.snapshot.data.mockdata"
        >
          <c8y-li-icon [icon]="record.icon"></c8y-li-icon>
          <div class="d-flex">
            <div class="col-md-5">
              <button class="btn-clean c8y-list__item__title"
              (click)="li.toggleCollapsed()">{{record.name}}</button>
            </div>
            <div class="col-md-2">
              {{record.owner}}
            </div>
            <div class="col-md-2">
              <div class="label label-info">
                {{record.type}}
              </div>
            </div>
            <div class="col-md-3">
              <small class="icon-flex">
                <i c8yIcon="calendar"></i>
                {{record.lastUpdated | c8yDate: 'medium' }}
              </small>
            </div>
          </div>
        </c8y-li>
      </c8y-list-group>
      <!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## List item with footer

To incorporate a footer, simply insert `<c8y-li-footer>` within the `c8y-li`. This can be achieved
using either content projection or a straightforward string input.

<codex-tutorial-example>
  <c8y-list-group class="separator-top">
    <c8y-li>
      <c8y-li-icon icon="c8y-connector-in"></c8y-li-icon>
      List item content
      <c8y-li-footer footer="List item footer"></c8y-li-footer>
    </c8y-li>
    <c8y-li>
      <c8y-li-icon icon="c8y-enterprise"></c8y-li-icon>
      List item content
      <c8y-li-footer>
        <div class="d-flex gap-8">
          <span>List item footer</span>
          <a href="javascript: void(0);">link in the footer</a>
        </div>
      </c8y-li-footer>
    </c8y-li>
  </c8y-list-group>
</codex-tutorial-example>

## List item with collapsible content

Collapsible list items are useful when the initial shape of the list has to be concise and compact,
but items require additional data or configuration forms.

To add collapsible content you only have to add `<c8y-list-item-collapse>` inside the `c8y-li`. All
content contained in the `<c8y-list-item-collapse>` is rendered and can be used to add complex forms
or detailed information.

<codex-tutorial-example>
  <c8y-list-group class="separator-top">
    <c8y-li>
      <c8y-li-icon icon="c8y-enterprise"></c8y-li-icon>
      Default collapse (click the chevron button to toogle the collapsed content)
      <c8y-list-item-collapse>
        <strong>Content visible only when expanded</strong>
      </c8y-list-item-collapse>
    </c8y-li>
    <c8y-li>
      <c8y-li-icon icon="c8y-enterprise"></c8y-li-icon>
      Toogle the collapsed content via row click
      <c8y-list-item-collapse collapseWay="row">
        <strong>Content visible only when expanded</strong>
      </c8y-list-item-collapse>
    </c8y-li>
    <c8y-li #li (click)="li.collapsed = !li.collapsed">
      <c8y-li-icon icon="c8y-enterprise"></c8y-li-icon>
      Toogle the collapsed content via row click and chevron button
      <c8y-list-item-collapse>
        <strong>Content visible only when expanded</strong>
      </c8y-list-item-collapse>
    </c8y-li>
    <c8y-li [collapsed]="false">
      <c8y-li-icon icon="c8y-enterprise"></c8y-li-icon>
      Collapsed content expanded by default
      <c8y-list-item-collapse>
        <strong>Content of list item by default visible.</strong>
      </c8y-list-item-collapse>
    </c8y-li>
    <c8y-li #liBtn>
      <c8y-li-icon icon="c8y-enterprise"></c8y-li-icon>
      <p>Collapse by a button
        <button class="m-l-8 btn btn-default btn-sm"
          (click)="liBtn.collapsed = !liBtn.collapsed"
        > Toggle collapse</button>
      </p>
      <c8y-list-item-collapse>
        <strong>Content visible only when expanded</strong>
      </c8y-list-item-collapse>
    </c8y-li>
    <c8y-li #liBtn>
      <c8y-li-icon icon="c8y-enterprise"></c8y-li-icon>
      Collapse change event
      <c8y-list-item-collapse (collapsedChange)="showAlert($event)">
        <strong>Content visible only when expanded</strong>
      </c8y-list-item-collapse>
    </c8y-li>
  </c8y-list-group>
</codex-tutorial-example>

## List item with drag and drop

When adding drag and drop functionality for reordering a list, include the `<c8y-li-drag-handle>`
element within the `c8y-li`, which contains an icon. This icon becomes visible when hovering over
the list item. The following example assumes the usage of the
[Drag and drop](https://material.angular.io/cdk/drag-drop/api) service from Angular Material and
add for example, the `cdkDropList`, `cdkDragHandle` and `cdkDrag` directives.

<codex-tutorial-example>
  <c8y-list-group class="separator-top" cdkDropList>
    <c8y-li
      *ngFor="let record of route.snapshot.data.mockdata | slice:0:5"
      cdkDrag
    >
      <c8y-li-drag-handle
        title="Drag to reorder"
        cdkDragHandle
      >
        <i c8yIcon="drag-reorder"></i>
      </c8y-li-drag-handle>
      <c8y-li-icon [icon]="record.icon"></c8y-li-icon>
      <div class="d-flex">
        <div class="col-md-5">
          {{record.name}}
        </div>
        <div class="col-md-2">
          {{record.owner}}
        </div>
        <div class="col-md-2">
          <div class="label label-info">
            {{record.type}}
          </div>
        </div>
        <div class="col-md-3">
          <small class="icon-flex">
            <i c8yIcon="calendar"></i>
            {{record.lastUpdated | c8yDate: 'medium' }}
          </small>
        </div>
      </div>
    </c8y-li>
  </c8y-list-group>
</codex-tutorial-example>

> ### Note
>
> The provided example does not update the data model. To do so, you can listen to the
> `cdkDropListDropped` event to update the data model once the user finishes dragging.

## List item actions

For executing actions on the list item, incorporate any number of `c8y-li-action` elements within
the `c8y-li`. This renders a vertical ellipsis button at the end of the row, providing a dropdown
with all available actions. Alongside the `(click)` event, each `c8y-li-action` requires an
`icon` and a `label` for accurate rendering.

<codex-tutorial-example>
  <c8y-list-group class="separator-top">
    <c8y-li>
      <c8y-li-icon icon="fan"></c8y-li-icon>
      Fan
      <c8y-li-action icon="edit1" label="Edit" (click)="showAlert('Edit clicked')"></c8y-li-action>
      <c8y-li-action icon="copy" label="Duplicate" (click)="showAlert('Duplicate clicked')"></c8y-li-action>
      <c8y-li-action icon="delete" label="Delete" [disabled]="true"></c8y-li-action>
    </c8y-li>
    <c8y-li>
      <c8y-li-icon icon="light"></c8y-li-icon>
      Light bulb
      <c8y-li-action icon="light-on" label="Turn On" (click)="showAlert('Lamp on')"></c8y-li-action>
      <c8y-li-action icon="light-off" label="Turn off" (click)="showAlert('Lamp off')"></c8y-li-action>
      <c8y-li-action icon="delete" label="Delete" [disabled]="true"></c8y-li-action>
    </c8y-li>
    <c8y-li>
      <c8y-li-icon icon="air-conditioner"></c8y-li-icon>
      Air conditioner
      <c8y-li-action icon="edit1" label="Edit" (click)="showAlert('Edit clicked')"></c8y-li-action>
      <c8y-li-action icon="delete" label="Delete" [disabled]="true"></c8y-li-action>
    </c8y-li-icon>
  </c8y-list-group>
</codex-tutorial-example>

## Highlight list item changes

To indicate that a change has occurred, such as a realtime update, you can invoke the `pulse()`
method on a `c8y-li`.

<codex-tutorial-example>
  <c8y-list-group class="separator-top">
    <c8y-li #liHighlight1>
      <c8y-li-icon icon="target"></c8y-li-icon>
      Trigger the pulse animation using this button:
      <button class="btn btn-default btn-sm" (click)="liHighlight1.pulse()">Highlight me</button>
    </c8y-li>
    <c8y-li #liHighlight2>
      <c8y-li-icon icon="target"></c8y-li-icon>
      Trigger the pulse animation using this button:
      <button class="btn btn-default btn-sm" (click)="liHighlight2.pulse()">Highlight me</button>
    </c8y-li>
  </c8y-list-group>
</codex-tutorial-example>

## Timeline list group

To display a list of records in chronological order, use the list group timeline variant. Simply
wrap each `<c8y-li>` in a `<c8y-li-timeline>` which will contain then the date and `c8y-li` item.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid">
    <!-- important -->
<!-- the .page-sticky-header -->
<div class="page-sticky-header hidden-xs c8y-list__item c8y-list--timeline">
  <div class="d-flex">
    <div class="c8y-list--timeline__item__date">
      <p class="m-0 text-medium text-truncate" title="Date">
        Date
      </p>
    </div>
    <div class="c8y-list__item__block flex-grow">
      <div class="c8y-list__item__body">
        <div class="d-flex">
          <div class="col-md-4">Name</div>
          <div class="col-md-2">Owner</div>
          <div class="col-md-2">Type</div>
          <div class="col-md-4">Registration date</div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- The record list -->
<c8y-list-group>
  <c8y-li-timeline
    *ngFor="let record of route.snapshot.data.mockdata"
  >
    {{record.lastUpdated | c8yDate: 'medium' }}
    <c8y-li>
      <c8y-li-body>
        <div class="d-flex">
          <div class="col-md-4">
            {{record.name}}
          </div>
          <div class="col-md-2">{{record.owner}}</div>
          <div class="col-md-2"><div class="label label-info">{{record.type}}</div></div>
          <div class="col-md-4">
            <small class="icon-flex"
              ><i c8yIcon="calendar"></i>{{record.creationTime | c8yDate: 'medium' }}</small
            >
          </div>
        </div>
      </c8y-li-body>
    </c8y-li>
  </c8y-li-timeline>
</c8y-list-group>
    <!-- /important -->
  </div>
  </div>
</codex-tutorial-example>

## Complex example with data loading

List group can be used with elements that combine multiple types of element list. The following
example shows a list-group with data loaded from the platform with the
[c8yFor](#/develop/directives/for-of-directive/overview) directive, detailed collapsed data, an
action per row and a checkbox selection:

<codex-tutorial-example
    module="ListCheckModule"
    [sources]="['./packages/tutorial/src/list/list/list-check/list-check.component.html', './packages/tutorial/src/list/list/list-check/list-check.component.ts']"
></codex-tutorial-example>

This example loads the data in the controller with the help of the
[client](#/getting-started/guides/data-access/overview#using-the-client-in-angular) and then passes
this to the default functionality of the `c8yFor` directive. This directive allows you to use
paging when used with the paged inventory API. In this example the `loadMore` strategy is set to
`show`, which leads to a button shown to the end-user to load the next items of the list. The
implemented "select-all" functionality works always only on the visible elements.

> ### c8yFor syntax
> The `c8yFor` is a so called structural directive. So usually you use the `*c8yFor=""` syntax. As this syntax does not allow any `Output()`-emitter, and this example needs to know the loaded elements from the `c8yForOfChange` to render the checkboxes correctly, the directive uses a `ng-template` without the `*` syntax.

The next example shows the same data but rendered in a timeline. The `creationTime` of the devices
is used to display the date. It is formatted by using the
[date](#/develop/pipes/date-pipe/overview). The detailed information are placed in a `c8y-li-footer`
and you can select exactly one element by using the `c8y-li-radio` button.

<codex-tutorial-example
    module="ListTimelineModule"
    [sources]="['./packages/tutorial/src/list/list/list-timeline/list-timeline.component.html', './packages/tutorial/src/list/list/list-timeline/list-timeline.component.ts']"
></codex-tutorial-example>

In this example the `c8yFor` is using the default `loadMore` strategy which is `auto`. When used the
data is automatically loaded as soon as the user reaches the end of the list.

> ### c8yFor
>
> When using the `c8yFor` with the inventory API and you want to use the "load-more"
> functionality you have to request the paging information from the API. This can be done by simply
> adding the query parameter `withTotalPages=true` to the request (in @c8y/client add a filter
> `{{'{'}} withTotalPages: true {{'}'}}`).
