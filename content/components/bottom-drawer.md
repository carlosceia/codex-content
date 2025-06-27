---
title: Bottom drawer
slug: bottom-drawer
icon: done
order: 50
apiDocs:
  - name: BottomDrawerService
    import: '@c8y/ngx-components'
  - name: BottomDrawerComponent
    import: '@c8y/ngx-components'
  - name: BottomDrawerRef
    import: '@c8y/ngx-components'
mockdata:
  - id: "#12"
    owner: "User3"
    creationTime: "2023-06-05T00:00:00.000Z"
    lastUpdated: "2023-06-29T00:00:00.000Z"
    name: "Smart Speaker"
    icon: exchange
    description: "A voice-controlled speaker with AI assistant."
    value: "ON"
    unit: ""
    type: "actuator"
  - id: "#11"
    owner: "User2"
    creationTime: "2023-04-10T00:00:00.000Z"
    lastUpdated: "2023-06-25T00:00:00.000Z"
    name: "GPS Tracker"
    icon: exchange
    description: "Tracks the location of an object or person."
    value: "37.7749,-122.4194"
    unit: "LatLong"
    type: "sensor"
  - id: "#10"
    owner: "User1"
    creationTime: "2023-05-15T00:00:00.000Z"
    lastUpdated: "2023-06-20T00:00:00.000Z"
    name: "Smart Lock"
    icon: exchange
    description: "A lock that can be remotely controlled."
    value: "locked"
    unit: ""
    type: "actuator"
  - id: "#9"
    owner: "User3"
    creationTime: "2023-02-28T00:00:00.000Z"
    lastUpdated: "2023-06-10T00:00:00.000Z"
    name: "Water Leak Sensor"
    icon: exchange
    description: "Detects the presence of water or leaks."
    value: "no water"
    unit: ""
    type: "sensor"
  - id: "#8"
    owner: "User2"
    creationTime: "2023-01-20T00:00:00.000Z"
    lastUpdated: "2023-06-01T00:00:00.000Z"
    name: "Air Quality Monitor"
    icon: exchange
    description: "Monitors the air quality (CO2, VOCs, PM2.5)."
    value: Good
    unit: ""
    type: "sensor"
  - id: "#7"
    owner: "User1"
    creationTime: "2023-02-14T00:00:00.000Z"
    lastUpdated: "2023-05-05T00:00:00.000Z"
    name: "Smart Thermostat"
    icon: exchange
    description: "Controls the temperature of a room."
    value: 22.0
    unit: "°C"
    type: "actuator"
  - id: "#6"
    owner: "User3"
    creationTime: "2022-12-18T00:00:00.000Z"
    lastUpdated: "2023-03-02T00:00:00.000Z"
    name: "Door Sensor"
    icon: exchange
    description: "Detects the status (open/close) of a door."
    value: "closed"
    unit: ""
    type: "sensor"
  - id: "#5"
    owner: "User2"
    creationTime: "2022-11-05T00:00:00.000Z"
    lastUpdated: "2023-01-10T00:00:00.000Z"
    name: "Security Camera"
    icon: exchange
    description: "A surveillance camera with motion detection."
    value: "192.168.1.10"
    unit: "IP address"
    type: "camera"
  - id: "#4"
    owner: "User1"
    creationTime: "2022-03-12T00:00:00.000Z"
    lastUpdated: "2022-05-20T00:00:00.000Z"
    name: "Smart Plug"
    icon: exchange
    description: "A plug that can be remotely controlled."
    value: "ON"
    unit: ""
    type: "actuator"
  - id: "#3"
    owner: "User3"
    creationTime: "2022-06-01T00:00:00.000Z"
    lastUpdated: "2022-09-15T00:00:00.000Z"
    name: "Smart Light Bulb"
    icon: exchange
    description: "A controllable light bulb with color options."
    value: "ON"
    unit: ""
    type: "actuator"
  - id: "#2"
    owner: "User2"
    creationTime: "2021-03-10T00:00:00.000Z"
    lastUpdated: "2021-04-20T00:00:00.000Z"
    name: "Humidity Sensor"
    icon: exchange
    description: "Measures relative humidity."
    value: 45.8
    unit: "%"
    type: "sensor"
  - id: "#1"
    owner: "User1"
    creationTime: "2021-01-01T00:00:00.000Z"
    lastUpdated: "2021-02-15T00:00:00.000Z"
    name: "Temperature Sensor"
    icon: exchange
    description: "Measures ambient temperature."
    value: 25.5
    unit: "°C"
    type: "sensor"
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

While similar to modals, the bottom drawer can serve as an alternative when you need more room for content.

It smoothly appears from the bottom of the viewport, covering the main view content. It is perfect for
presenting focused information, lists, forms, or interactions without leaving the current page.

To use the bottom drawer, use the `BottomDrawerService` `showDrawer` method. You can pass the component to be rendered in the bottom drawer, pass initial properties, and access the created instance for receiving feedback. Additionally, you can close the drawer from the rendered component by calling the `close` method.

<codex-tutorial-example  class="c8y-codex-override" [module]="'bottomDrawerExampleModuleProviders'" [sources]="['packages/tutorial/src/bottom-drawer/bottom-drawer-example.component.ts', 'packages/tutorial/src/bottom-drawer/bottom-drawer-example.component.html', 'packages/tutorial/src/bottom-drawer/bottom-drawer-content-example.component.ts', 'packages/tutorial/src/bottom-drawer/bottom-drawer-content-example.component.html']"></codex-tutorial-example>

Available options:

- `backdrop`: Blocks interaction with all elements outside the bottom drawer, focusing user actions
  exclusively on drawer content - *default false*.
- `closeOnNavigation`: Will close the navigator if the user navigates to a different view - *default
  true*.
- `initialState`: The data you want to pass over to the component opened.

## Custom markup

You can also use the bottom drawer without the `BottomDrawerService`. In this case, you can place
the `.bottom-drawer` component within a `<div>` and control its visibility by toggling the
`.drawerOpen` class on the wrapper.

Structure your content as you would within a [card](#/components/card).

<codex-tutorial-example class="c8y-codex-override">
  <div class="p-24">
    <!-- important -->
    <button
      class="btn btn-primary"
      (click)="data.drawerOpen = !data.drawerOpen"
    >
      Show bottom drawer
    </button>
    <!-- /important -->
  </div>

  <!-- important -->
  <div [ngClass]="{ drawerOpen: data.drawerOpen }">
    <div class="bottom-drawer d-col backdrop">
      <div class="card-header j-c-center separator flex-no-shrink p-24">
        <p class="card-title">Select devices</p>
      </div>
      <c8y-list-group class="inner-scroll flex-grow">
        <!-- the sticky-header -->
        <c8y-li
          class="sticky-top hidden-xs hidden-sm c8y-list__item--empty-actions"
          *ngIf="route.snapshot.data.mockdata.length > 0"
        >
          <c8y-li-checkbox></c8y-li-checkbox>
          <c8y-li-icon>
            <i class="p-l-24"></i>
          </c8y-li-icon>
          <c8y-li-body>
            <div class="d-flex">
              <div class="col-md-4 text-medium">Name</div>
              <div class="col-md-2 text-medium">Owner</div>
              <div class="col-md-2 text-medium">Type</div>
              <div class="col-md-4 text-medium">Last update</div>
            </div>
          </c8y-li-body>
        </c8y-li>
        <!-- The record list -->
        <c8y-li
          #li
          *ngFor="let record of route.snapshot.data.mockdata"
        >
          <c8y-li-checkbox></c8y-li-checkbox>
          <c8y-li-icon [icon]="record.icon"></c8y-li-icon>
          <c8y-li-body>
            <div class="d-flex">
              <div class="col-md-4">
                <button
                  class="btn-clean c8y-list__item__title"
                  (click)="li.toggleCollapsed()"
                >
                  {{ record.name }}
                </button>
              </div>
              <div class="col-md-2">
                {{ record.owner }}
              </div>
              <div class="col-md-2">
                <div class="label label-info">
                  {{ record.type }}
                </div>
              </div>
              <div class="col-md-4">
                <small class="icon-flex">
                  <i c8yIcon="calendar"></i>
                  {{ record.lastUpdated | c8yDate: 'medium' }}
                </small>
              </div>
            </div>
          </c8y-li-body>
          <c8y-li-collapse>
            <div class="row">
              <div class="col-md-6">
                <p class="text-label-small">Registration date</p>
                <p class="m-b-8">
                  <small class="icon-flex">
                    <i c8yIcon="calendar"></i>
                    {{ record.creationTime | c8yDate: 'medium' }}
                  </small>
                </p>
                <p class="text-label-small">Value</p>
                <p class="m-b-8">{{ record.value }}</p>
                <span *ngIf="record.unit">
                  <p class="text-label-small">Unit</p>
                  <p>{{ record.unit }}</p>
                </span>
              </div>
              <div class="col-md-6">
                <p class="text-label-small">Description</p>
                <p class="text-pre-wrap">{{ record.description }}</p>
              </div>
            </div>
          </c8y-li-collapse>
        </c8y-li>
        <c8y-li
          #li
          *ngFor="let record of route.snapshot.data.mockdata"
        >
          <c8y-li-checkbox></c8y-li-checkbox>
          <c8y-li-icon [icon]="record.icon"></c8y-li-icon>
          <c8y-li-body>
            <div class="d-flex">
              <div class="col-md-4">
                <button
                  class="btn-clean c8y-list__item__title"
                  (click)="li.toggleCollapsed()"
                >
                  {{ record.name }}
                </button>
              </div>
              <div class="col-md-2">
                {{ record.owner }}
              </div>
              <div class="col-md-2">
                <div class="label label-info">
                  {{ record.type }}
                </div>
              </div>
              <div class="col-md-4">
                <small class="icon-flex">
                  <i c8yIcon="calendar"></i>
                  {{ record.lastUpdated | c8yDate: 'medium' }}
                </small>
              </div>
            </div>
          </c8y-li-body>
          <c8y-li-collapse>
            <div class="row">
              <div class="col-md-6">
                <p class="text-label-small">Registration date</p>
                <p class="m-b-8">
                  <small class="icon-flex">
                    <i c8yIcon="calendar"></i>
                    {{ record.creationTime | c8yDate: 'medium' }}
                  </small>
                </p>
                <p class="text-label-small">Value</p>
                <p class="m-b-8">{{ record.value }}</p>
                <span *ngIf="record.unit">
                  <p class="text-label-small">Unit</p>
                  <p>{{ record.unit }}</p>
                </span>
              </div>
              <div class="col-md-6">
                <p class="text-label-small">Description</p>
                <p class="text-pre-wrap">{{ record.description }}</p>
              </div>
            </div>
          </c8y-li-collapse>
        </c8y-li>
      </c8y-list-group>
      <div class="card-footer text-center p-24 separator flex-no-shrink">
        <button
          class="btn btn-default"
          (click)="data.drawerOpen = !data.drawerOpen"
        >
          Cancel
        </button>
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
  <!-- /important -->
</codex-tutorial-example>
