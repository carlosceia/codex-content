---
title: List layouts
slug: list-layouts
icon: done
order: 20
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

List layouts are specifically designed to optimize the user's ability to read important information
and easily perform relevant operations.

When creating a list layout, it is crucial to prioritize
readability and operability, consider the following:

- **Identify the importance of information**:  
Evaluate the context and determine the significance of different types of information. Display only
key information and relevant actions to streamline the user's focus and avoid overwhelming them with
unnecessary details.

- **Differentiate item types**:  
If your list contains multiple item types, consider separating them into different lists or clearly
labeling them within the list. This differentiation helps users quickly identify and comprehend the
content.

- **Enable progressive access to complex content**:  
When dealing with complex content within the list, allow users to access the information in a
progressive manner. This can be achieved through collapsible sections or expanding details, ensuring
a manageable display of content.

- **Use visible affordances for interactions**:  
If there are only one or two points of interaction within each record, it is recommended to add a
visible affordance, such as an icon or a button. However, if there are more than two interaction
points, it is advisable to group them within a dropdown menu to maintain a clean and organized
design.

## Tabular data

A table is the most basic format for displaying a list of records. Each record is represented by a
single row of data that starts with the record's primary field and shows additional fields in
subsequent columns. The data is labeled using column headers, which can be interactive.

This layout is best suited for sorting, filtering, and selecting a large number of records.

### Data-grid

Whenever possible, use the [Data-grid](#/components/data-grid) component as it provides advanced
interaction controls for record lists and is fully responsive. Wrap the data-grid with a
`.content-fullpage` class to ensure it uses the full height of the page while keeping both the
header and footer fixed.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid">
<!-- important -->
<div class="content-fullpage">

  <!-- place your data grid here -->
<!-- /important --><img class="img-responsive" alt="Data grid devices" src="../../images/ui-guidelines/layouts/data-grid.png"><!-- important -->
</div>
<!-- /important -->
  </div>
</codex-tutorial-example>

### Table

You can also use a [Table](#/components/table). Simply add the `.page-sticky-header` class to the
table head to freeze the column headers.

<codex-tutorial-example class="c8y-codex-override">
<div class="inner-scroll" >
  <div class="container-fluid">
<!-- important -->
<table class="table table-striped">
  <colgroup>
    <col width="5%" />
    <col width="20%" />
    <col width="30%" />
    <col width="20%" />
    <col width="25%" />
  </colgroup>
  <thead>
    <tr class="page-sticky-header">
      <th></th>
      <th>Name</th>
      <th>Description</th>
      <th>ID</th>
      <th>Last update</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let record of route.snapshot.data.mockdata">
      <td><i [c8yIcon]="record.icon"></i></td>
      <td>{{record.name}}</td>
      <td>{{record.description}}</td>
      <td>{{record.id}}</td>
      <td>{{record.lastUpdated | c8yDate: 'medium' }}</td>
    </tr>
  </tbody>
</table>
<!-- /important -->
</div>
</div>
</codex-tutorial-example>

## List group

The [List group](#/components/list-group) is suitable for displaying record lists that only present
essential information. Additional information can be placed in a collapsible container or a details
page.

Each item in the list contains a primary field and may include supporting icons, a checkbox, a
toggle switch, or additional fields.

When incorporating the `.page-sticky-header` class, ensure that you structure the content as
`c8y-li-body` so that the columns align correctly, providing a consistent and visually
appealing display.

Additionally, consider using either the [Pagination](#/components/pagination) or the
[Virtual scroll](#/components/list-group/overview#virtual-scroll--default-strategy) to handle
pagination effectively.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll" >
    <div class="container-fluid">
<!-- important -->
<c8y-list-group>
  <!-- the .page-sticky-header -->
  <c8y-li
    class="page-sticky-header hidden-xs hidden-sm c8y-list__item--empty-actions"
    *ngIf="route.snapshot.data.mockdata.length > 0"
  >
    <c8y-li-icon>
      <i class="p-l-24"></i>
    </c8y-li-icon>
    <c8y-li-body>
      <div class="d-flex">
        <div class="col-md-4">Name</div>
        <div class="col-md-2">Owner</div>
        <div class="col-md-2">Type</div>
        <div class="col-md-4">Last update</div>
      </div>
    </c8y-li-body>
  </c8y-li>
  <!-- The record list -->
  <c8y-li
    #li
    *ngFor="let record of route.snapshot.data.mockdata"
  >
    <c8y-li-icon [icon]="record.icon"></c8y-li-icon>
    <c8y-li-body>
      <div class="d-flex">
        <div class="col-md-4">
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
        <div class="col-md-4">
          <small class="icon-flex">
            <i c8yIcon="calendar"></i>
            {{record.lastUpdated | c8yDate: 'medium' }}
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
              {{record.creationTime | c8yDate: 'medium' }}
            </small>
          </p>
          <p class="text-label-small">Value</p>
          <p class="m-b-8">{{record.value}}</p>
          <span *ngIf="record.unit">
            <p class="text-label-small">Unit</p>
            <p>{{record.unit}}</p>
          </span>
        </div>
        <div class="col-md-6">
          <p class="text-label-small">Description</p>
          <p class="text-pre-wrap">{{record.description}}</p>
        </div>
      </div>
    </c8y-li-collapse>
  </c8y-li>
</c8y-list-group>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

### Timeline list

To display a list of records in chronological order, use the
[list group timeline](#/components/list-group/overview#list-item-timeline) variant. This variant is
specifically designed for presenting records in a timeline format.

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

## Cards grid/list

To enhance the user experience, you have the option to showcase records using
[cards](#/components/card) in a [grid layout](#/components/card-group). To optimize this experience
further, consider integrating the List Display Switch component into the Action Bar. This valuable
component empowers users to effortlessly select their desired display style from three options:
auto, list, and grid.

By default, when there are 13 or fewer records, they will be displayed in a grid format. If there
are more than 13 records, they will be shown in a list format similar to the list group. This
ensures optimal visibility and usability for users.

You have to include the [List display switch](#/components/list-display-switch/) component in the
[Action bar](#/develop/hooks/action-bar/overview).

The [Card](#/components/card) may contain any type of content, but in this context its primary
function is to provide access the details page.

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
