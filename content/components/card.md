---
title: Card
slug: card
icon: done
order: 90
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

The card component is a highly versatile and flexible content container designed to accommodate various types of content.

With options for headers, footers, contextual background colors, and powerful display modifiers, this component is one of the most used and useful on the platform.

## Default card

A card consists of four primary elements: a `.card` wrapper containing a `.card-header`, a
`.card-block`, and a `.card-footer`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
<!-- important -->
<div class="card">
  <div class="card-header separator">
    <p class="card-title">Card title</p>
  </div>
  <div class="card-block">
    <p>Add <code>.separator</code> to the <code>.card-header</code> to display a border between <code>.card-header</code> and <code>.card-block</code>.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Button in footer</button>
  </div>
</div>
  <!-- /important -->
      </div>
      <div class="col-sm-6">
<!-- important -->
<div class="card">
  <div class="card-header">
    <span>
      <p class="card-title">Card title</p>
      <p class="card-subtitle">Card optional subtitle</p>
    </span>
  </div>
  <div class="card-block">
    <p>When adding a subtitle don't forget to wrap both <code>.card-title</code> and <code>.card-subtitle</code> in a <code>span</code>.</p><br>
    <p>Add <code>.separator</code> to the <code>.card-footer</code> to display a border between <code>.card-block</code> and <code>.card-footer</code>.</p>
  </div>
  <div class="card-footer separator">
    <button class="btn btn-primary">Button in footer</button>
  </div>
</div>
<!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Icon and actions

In case you have to add an icon next to the title of each card, you can simply include a `.card-icon` containing the icon, to the `.card-header`.

To include a list of actions, place a `.card-actions` as a direct child of the `.card` holding a
[dropdown](#/components/dropdown) inside. The `.card-actions` must always precede the
`.card-header` element to make it properly spaced.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<div class="row">
  <div class="col-md-4">
<!-- important -->
    <div class="card">
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
<!-- /important -->
    </div>
  </div>
</div>
</div>
</codex-tutorial-example>

## Special content and overflow

The card component can effortlessly handle various types of content, such as images,
[List groups](#/components/list-group), and [Tables](#/components/table). For proper padding, ensure
that these elements are direct children of the `.card` container.

### Card with an image

Placing an image as a direct child of the card, you can add it either before or after the
`.card-header`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
<!-- important -->
<div class="card">
  <img src="../images/card-example-image.jpeg" alt="" class="img-responsive">
  <div class="card-header">
    <p class="card-title">Card holding an image on top</p>
  </div>
  <div class="card-block">
    <p><code>img</code> before <code>.card-header</code>.</p>
  </div>
</div>
<!-- /important -->
      </div>
      <div class="col-sm-6">
<!-- important -->
<div class="card">
  <div class="card-header">
    <p class="card-title">Card holding an image after the header</p>
  </div>
  <img src="../images/card-example-image.jpeg" alt="" class="img-responsive">
  <div class="card-block">
    <p><code>img</code> after <code>.card-header</code>.</p>
  </div>
</div>
<!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

### Content overflow

If the content inside the card overflows, follow these steps:

1. Add an `.inner-scroll` class as a direct child of the `.card` container.
2. Place the overflowing content inside the `.inner-scroll` container.
3. If necessary, you can set the `max-height` CSS property to manage the scrolling behavior.

For example, when incorporating a [list-group](#/components/list-group), you can add the
`.inner-scroll` class directly to the `.list-group`. However, when working with a `table`, you'll
need to wrap it in a `.inner-scroll` container.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-md-10">
<!-- important -->
<div class="card">
  <div class="card-header separator">
    <p class="card-title">Card holding a list-group</p>
  </div>
  <c8y-list-group class="inner-scroll" style="max-height: 30vh;">
    <!-- the sticky-header -->
    <c8y-li
      class="sticky-top hidden-xs hidden-sm c8y-list__item--empty-actions"
      *ngIf="route.snapshot.data.mockdata.length > 0"
    >
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
</div>
<!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-10">
<!-- important -->
<div class="card">
  <div class="card-header separator">
    <p class="card-title">Card holding a table</p>
  </div>
  <div class="inner-scroll" style="max-height: 30vh;">
    <table class="table table-striped">
      <colgroup>
        <col width="5%" />
        <col width="20%" />
        <col width="30%" />
        <col width="20%" />
        <col width="25%" />
      </colgroup>
      <thead>
        <tr class="sticky-top bg-component">
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
  </div>
</div>
<!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Card holding a form

To integrate forms or form elements within a card, place it inside the `.card-block` container.
In case that you want the submit button in the footer, either add the `.card` class to the form or
nest the form inside the `.card` with the `.d-contents` class containing both `.card-block` and
`.card-footer`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
<!-- important -->
<form name="wanForm2" class="card">
  <div class="card-header separator">
    <p class="card-title">Card form</p>
  </div>
  <div class="card-block">
    <div class="form-group">
      <label for="simStatus">SIM status</label>
      <input id="simStatus"
        type="text"
        class="form-control"
        disabled>
    </div>
    <div class="form-group">
      <label for="apn">APN</label>
      <input id="apn"
        type="text"
        class="form-control"
        >
    </div>
    <div class="form-group">
      <label for="user">User</label>
      <input id="user"
        type="text"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password"
        type="text"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="authType">Auth type</label>
      <div class="c8y-select-wrapper">
        <select id="authType"
          class="form-control"
          >
          <option label="PAP" value="string:pap">PAP</option>
          <option label="CHAP" value="string:chap" selected="selected">CHAP</option>
        </select>
        <span></span>
      </div>
    </div>
  </div>
  <div class="card-footer separator">
    <button class="btn btn-primary">
      Save changes
    </button>
    <button class="btn btn-primary">
      Save changes (SMS)
    </button>
  </div>
</form>
<!-- /important -->
      </div>
      <div class="col-sm-6">
<!-- important -->
<div class="card">
  <div class="card-header separator">
    <p class="card-title">Containing the form</p>
  </div>
  <form name="wanForm" class="d-contents">
    <div class="card-block">
      <div class="form-group">
        <label for="simStatus">SIM status</label>
        <input id="simStatus"
          type="text"
          class="form-control"
          disabled>
      </div>
      <div class="form-group">
        <label for="apn">APN</label>
        <input id="apn"
          type="text"
          class="form-control"
          >
      </div>
      <div class="form-group">
        <label for="user">User</label>
        <input id="user"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="authType">Auth type</label>
        <div class="c8y-select-wrapper">
          <select id="authType"
            class="form-control"
            >
            <option label="PAP" value="string:pap">PAP</option>
            <option label="CHAP" value="string:chap" selected="selected">CHAP</option>
          </select>
          <span></span>
        </div>
      </div>
    </div>
    <div class="card-footer separator">
      <button class="btn btn-primary">
        Save changes
      </button>
      <button class="btn btn-primary">
        Save changes (SMS)
      </button>
    </div>
  </form>
</div>
<!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Modifier classes

Use `.success`, `.warning`, `.danger`, `.highlight`, and `.info` modifier classes to change the
appearance of a card.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
  <div class="row">
    <div class="col-sm-4">
<!-- important -->
<div class="card warning">
  <div class="card-header">
    <span>
      <p class="card-title">Warning Card</p>
      <p class="card-subtitle">Identify pain points</p>
    </span>
  </div>
  <div class="card-block">
    <p>Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <p>Separated, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
  </div>
  <div class="card-footer separator">
    <button class="btn btn-default">Card Button</button>
  </div>
</div>
<!-- /important -->
    </div>
    <div class="col-sm-4">
<!-- important -->
<div class="card info">
  <div class="card-header">
    <span>
      <p class="card-title">Info Card</p>
      <p class="card-subtitle">Let's take this offline</p>
    </span>
  </div>
  <div class="card-block">
    <p>Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
  </div>
</div>

<div class="card card-highlight">
  <div class="card-header">
    <p class="card-title">Card highlight</p>
  </div>
  <div class="card-block">
    Adds a thick border around the card.
  </div>
</div>
  <!-- /important -->
    </div>
    <div class="col-sm-4">
<!-- important -->
<div class="card danger">
  <div class="card-header separator">
    <span>
      <p class="card-title"><i c8yIcon="exclamation-circle"></i> Watch out</p>
      <p class="card-subtitle">Pay close attention</p>
    </span>
  </div>
  <div class="card-block">
    <p>Check your self, you aren't looking too good.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-default">Take some time off</button>
  </div>
</div>
<div class="card success">
  <div class="card-header separator">
    <p class="card-title"> <i c8yIcon="check-circle"></i> Well done!</p>
  </div>
  <div class="card-block">
    <p>That's how we do things around here.</p>
  </div>
</div>
<!-- /important -->
    </div>
  </div>
</div>
</codex-tutorial-example>
