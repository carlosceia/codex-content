---
title: Card group
slug: card-group
icon: done
order: 100
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

As mentioned in [List layouts](#/ui-guidelines/layouts/list-layouts/overview), records can be
displayed using cards in a grid layout by wrapping the cards in a `.card-group`.

## Default card-group

The use of the flexbox model balances the height of every card in the same row. Adding the modifier
class `.interact-grid` to the `.card-group` adds a slight hover animation to every `.card` with an
`href` or with the class `pointer`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<div class="card-group interact-grid">
  <div class="col-md-4">
    <div class="card pointer">
      <div class="card-actions">
        <div class="dropdown" dropdown>
          <button type="button" title="dropdown-toggle" dropdownToggle class="dropdown-toggle c8y-dropdown">
            <i c8yIcon="ellipsis-v"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
            <li>
              <button title="Edit" type="button">
                <i c8yIcon="edit"></i>
                Edit
              </button>
            </li>
            <li>
              <button
                title="Duplicate"
                type="button"
              >
                <i c8yIcon="clone"></i>
                Duplicate
              </button>
            </li>
            <li>
              <button
                title="Delete"
                type="button"
              >
                <i c8yIcon="delete"></i>
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-header separator">
        <div class="card-icon">
          <i c8yIcon="c8y-simulator" class="c8y-icon-duocolor"></i>
        </div>
        <p class="card-title">Simulator #1</p>
      </div>
      <div class="card-block card-column-30 m-r-0">
        <div>
          <label
            title="Toggle simulator state"
            class="c8y-switch c8y-switch--inline"
          >
            <input
              type="checkbox"
            />
            <span></span>
            <span class="text-capitalize"> Running </span>
          </label>
        </div>
      </div>
      <div class="card-footer separator card-column-30">
        <div class="d-flex fit-w">
          <div class="card-column-50 flex-grow">
            <span class="text-label-small m-r-4">Instances</span> <span title=" 1 Instances">
              <i c8yIcon="c8y-simulator"></i> 1
            </span>
          </div>
          <div class="card-column-50">
            <span class="text-label-small m-r-4" >Instructions</span>
            <span title="60 Instructions">
              <i c8yIcon="installing-updates"></i>
              60
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /important -->
      <div class="col-md-4">
        <div class="card pointer">
          <div class="card-actions">
            <div class="dropdown" dropdown>
              <button type="button" title="dropdown-toggle" dropdownToggle class="dropdown-toggle c8y-dropdown">
                <i c8yIcon="ellipsis-v"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
                <li>
                  <button title="Edit" type="button">
                    <i c8yIcon="edit"></i>
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    title="Duplicate"
                    type="button"
                  >
                    <i c8yIcon="clone"></i>
                    Duplicate
                  </button>
                </li>
                <li>
                  <button
                    title="Delete"
                    type="button"
                  >
                    <i c8yIcon="delete"></i>
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="card-header separator">
            <div class="card-icon">
              <i c8yIcon="c8y-simulator" class="c8y-icon-duocolor"></i>
            </div>
            <p class="card-title">Simulator #2</p>
          </div>
          <div class="card-block card-column-30 m-r-0">
            <div>
              <label
                title="Toggle simulator state"
                class="c8y-switch c8y-switch--inline"
              >
                <input
                  type="checkbox"
                />
                <span></span>
                <span class="text-capitalize"> Running </span>
              </label>
            </div>
          </div>
          <div class="card-footer separator card-column-30">
            <div class="d-flex fit-w">
              <div class="card-column-50 flex-grow">
                <span class="text-label-small m-r-4">Instances</span> <span title=" 1 Instances">
                  <i c8yIcon="c8y-simulator"></i> 1
                </span>
              </div>
              <div class="card-column-50">
                <span class="text-label-small m-r-4" >Instructions</span>
                <span title="60 Instructions">
                  <i c8yIcon="installing-updates"></i>
                  60
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card pointer">
          <div class="card-actions">
            <div class="dropdown" dropdown>
              <button type="button" title="dropdown-toggle" dropdownToggle class="dropdown-toggle c8y-dropdown">
                <i c8yIcon="ellipsis-v"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
                <li>
                  <button title="Edit" type="button">
                    <i c8yIcon="edit"></i>
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    title="Duplicate"
                    type="button"
                  >
                    <i c8yIcon="clone"></i>
                    Duplicate
                  </button>
                </li>
                <li>
                  <button
                    title="Delete"
                    type="button"
                  >
                    <i c8yIcon="delete"></i>
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="card-header separator">
            <div class="card-icon">
              <i c8yIcon="c8y-simulator" class="c8y-icon-duocolor"></i>
            </div>
            <p class="card-title">Simulator #3</p>
          </div>
          <div class="card-block card-column-30 m-r-0">
            <div>
              <label
                title="Toggle simulator state"
                class="c8y-switch c8y-switch--inline"
              >
                <input
                  type="checkbox"
                />
                <span></span>
                <span class="text-capitalize"> Running </span>
              </label>
            </div>
          </div>
          <div class="card-footer separator card-column-30">
            <div class="d-flex fit-w">
              <div class="card-column-50 flex-grow">
                <span class="text-label-small m-r-4">Instances</span> <span title=" 1 Instances">
                  <i c8yIcon="c8y-simulator"></i> 1
                </span>
              </div>
              <div class="card-column-50">
                <span class="text-label-small m-r-4" >Instructions</span>
                <span title="60 Instructions">
                  <i c8yIcon="installing-updates"></i>
                  60
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
<!-- important -->
<!-- [...] -->
</div>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Card-group without gutter

To remove the default gutter, replace the `.card-group` by the `.card-group-block` modifier class
and add the grid classes `.col-**-**` directly on the `.card`. This option can be used only in
widgets or cards.

Adding the `.interact-grid` to the `.card-group-block` displays a thick border on
hover in every `.card` with an `href` or with the class `pointer`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<div class="card">
  <div class="card-group-block interact-grid m-b-0">
    <a
      class="col-sm-4 col-xs-6 card text-center"
      href="javascript: void(0)">
      <div class="card-block">
        <div class="h1">
          <i c8yIcon="c8y-user" class="c8y-icon c8y-icon-duocolor"></i>
        </div>
        <p class="text-muted">Users</p>
      </div>
    </a>
    <a
      class="col-sm-4 col-xs-6 card text-center"
      href="javascript: void(0)">
      <div class="card-block">
        <div class="h1">
          <i c8yIcon="c8y-users" class="c8y-icon c8y-icon-duocolor"></i>
        </div>
        <p class="text-muted">Roles</p>
      </div>
    </a>
    <a
      class="col-sm-4 col-xs-6 card text-center"
      href="javascript: void(0)">
      <div class="card-block">
        <div class="h1">
          <i c8yIcon="c8y-modules" class="c8y-icon c8y-icon-duocolor"></i>
        </div>
        <p class="text-muted">Applications</p>
      </div>
    </a>
    <a
      class="col-sm-4 col-xs-6 card text-center"
      href="javascript: void(0)">
      <div class="card-block">
        <div class="h1">
          <i c8yIcon="c8y-event-processing" class="c8y-icon c8y-icon-duocolor"></i>
        </div>
        <p class="text-muted">Event processing</p>
      </div>
    </a>
    <a
      class="col-sm-4 col-xs-6 card text-center"
      href="javascript: void(0)">
      <div class="card-block">
        <div class="h1">
          <i c8yIcon="c8y-tools" class="c8y-icon c8y-icon-duocolor"></i>
        </div>
        <p class="text-muted">Application settings</p>
      </div>
    </a>
    <a
      class="col-sm-4 col-xs-6 card text-center"
      href="javascript: void(0)">
      <div class="card-block">
        <div class="h1">
          <i c8yIcon="c8y-usage-statistics" class="c8y-icon c8y-icon-duocolor"></i>
        </div>
        <p class="text-muted">Usage statistics</p>
      </div>
    </a>
  </div>
</div>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Cards grid/list

This allows the user to choose between a grid layout and a list layout by adding the
[List Display Switch](#/components/list-display-switch/) component in the
[Action Bar](#/develop/hooks/action-bar/overview). Select from three display styles: auto (adjusted
based on records), grid, and list.

The auto style defaults to a grid for 12 or fewer records and switches to a list above this number.
Users can always change to their preferred layout for the best experience.

Customize cards with 10 `card-column-**` classes, (from 10 to 100) spanning from 10% to
100% width on the list layout, without any effect on the grid layout. Additionally, use the
`.card-hidden-grid` to show elements only in the list layout.

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
        <span>Name</span>
      </div>
      <div class="card-block card-column-40">
        <span>Description</span>
      </div>
      <div class="card-block card-column-20">
        <span>Owner</span>
      </div>
      <div class="card-block card-column-20">
        <span>Genre</span>
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
      <div class="card-block card-column-40">
        <small>
            {{record.description}}
        </small>
      </div>
      <!-- this element is only displayed on the list layout -->
      <div class="card-block card-column-20 card-hidden-grid">
        <span>{{record.owner}}</span>
      </div>
      <div class="card-footer card-column-20">
        <span class="label label-info m-r-auto"> {{ record.type}}</span>
      </div>
    </div>
  </div>
</div>
<!-- /important -->
  </div>
</div>
</codex-tutorial-example>
