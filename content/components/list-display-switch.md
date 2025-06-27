---
title: List display switch
slug: list-display-switch
icon: done
order: 230
apiDocs:
  - name: ListDisplaySwitchModule
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

The list display switch allows users to switch between list and grid view layouts.

The default value is set to `Auto`, dynamically adjusting the display based on the length of the
records list. Although adjustable, the default behavior is to display the grid view if the record
list is less than 12 and switch to list view if it exceeds 12.

<codex-tutorial-example class="c8y-codex-override">
  <div class="p-l-16 p-r-16 p-t-8 p-b-8 c8y-ui-action-bar p-relative" style="top:0">
<!-- important -->
<!-- Include in the action bar -->
<c8y-list-display-switch
  class="form-inline"
  (onListClassChange)="listClass = $event"
  [listLength]="route.snapshot.data.mockdata.length"
></c8y-list-display-switch>
<!-- /important -->
  </div>
  <div class="inner-scroll">
    <div class="container-fluid p-t-16">
<!-- important -->
<!-- The record list wrapper -->
<div class="card-group" [ngClass]="listClass">

  <!-- The sticky header -->
  <div class="page-sticky-header hidden-xs">
    <div class="d-flex">
      <div class="card-header card-column-20">
        <p>Name</p>
      </div>
      <div class="card-block card-column-50">
        <p>Description</p>
      </div>
      <div class="card-block card-column-30">
        <p>Genre</p>
      </div>
    </div>
  </div>
  <!-- The records list -->
  <div *ngFor="let record of route.snapshot.data.mockdata"
    class="col-sm-6 col-md-4 col-lg-4 col-xs-12"
  >
    <div class="card pointer">
      <div class="card-header separator card-column-20">
        <div class="card-icon">
          <i c8yIcon="{{record.icon}}" class="c8y-icon"></i>
        </div>
        <span class="card-title text-truncate" title="{{record.name}}">{{record.name}}</span>
      </div>
      <div class="card-block card-column-50">
        <small>
            {{record.description}}
        </small>
      </div>
      <div class="card-footer card-column-30">
        <span class="label label-info m-r-auto"> {{ record.type}}</span>
      </div>
    </div>
  </div>
</div>
<!-- /important -->
  </div>
</div>
</codex-tutorial-example>
