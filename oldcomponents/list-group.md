---
title: List group
icon: adjust
slug: list-group
aorder: 120
---

<!-- markdownlint-disable MD033 -->

# List group

<p class="lead m-b-40">

List groups are a flexible and powerful component for displaying both simple lists of elements and complex ones with custom content.</p>

## Basic list group

The most basic `.list-group` is simply an unordered list with `.list-group-items`.

<div class="c8y-example">
  <div class="row">
    <div class="col-sm-6">
      <ul class="list-group">
        <li class="list-group-item">Something</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
</div>

```html
<ul class="list-group">
  <li class="list-group-item">Something</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
```

## Adding badges

Add the badge elements inside a `span` to any list group item and it automatically positions the item on the right.

<div class="c8y-example">
  <div class="row">
    <div class="col-sm-6">
      <ul class="list-group">
        <li class="list-group-item"><span class="badge">14</span> Something</li>
        <li class="list-group-item"><span class="badge badge-system">10</span> Dapibus ac facilisis in</li>
        <li class="list-group-item"><span class="badge badge-success">5</span>Morbi leo risus</li>
        <li class="list-group-item"><span class="badge badge-danger">8</span>Porta ac consectetur ac</li>
        <li class="list-group-item"><span class="badge badge-warning">3</span> Vestibulum at eros</li>
      </ul>
    </div>
  </div>
</div>

```html
<ul class="list-group">
  <li class="list-group-item"><span class="badge">14</span> Something</li>
  <li class="list-group-item"><span class="badge badge-system">10</span> Dapibus ac facilisis in</li>
  <li class="list-group-item"><span class="badge badge-success">5</span>Morbi leo risus</li>
  <li class="list-group-item"><span class="badge badge-danger">8</span>Porta ac consectetur ac</li>
  <li class="list-group-item"><span class="badge badge-warning">3</span> Vestibulum at eros</li>
</ul>
```

## List group of links

Add links to list group items by using anchor tags or button tags instead of list items (that also means a parent <code>&lt;div&gt;</code> instead of an <code>&lt;ul&gt;</code>). No need for individual parents around each element.

Add <code>.list-group-links</code> to <code>.list-group</code> to display a chevron on the right.

Do not use <code>.btn</code> classes.

<div class="c8y-example">
  <div class="row">
    <div class="col-sm-6">
      <div class="list-group list-group-links">
        <button type="button" class="list-group-item">Button </button>
        <a href="javascript:void(0);" class="list-group-item">Button </a>
        <button type="button" class="list-group-item">Button </button>
        <button type="button" class="list-group-item">Button </button>
      </div>
    </div>
  </div>
</div>

```html
<div class="list-group list-group-links">
  <button type="button" class="list-group-item">Button</button>
  <a href="javascript:void(0);" class="list-group-item">Button </a>
  <button type="button" class="list-group-item">Button</button>
  <button type="button" class="list-group-item">Button</button>
</div>
```

## Custom content

List group items can contain custom content. To enable proper alignment, add `.d-flex` to the `.list-group-item`.

### Icon

Wrap the icon in a `.list-item-icon` as a direct child of the `.list-group-item`, and place the content in a `.list-item-body`.

<div class="c8y-example">
  <div class="list-group">
    <div class="list-group-item d-flex">
      <div class="list-item-icon">
        <i c8yIcon="warning" class="status critical" tooltip="Severity: CRITICAL" tooltip-placement="right"></i>
      </div>
      <div class="list-item-body">Critical alarm</div>
    </div>
    <div class="list-group-item d-flex">
      <div class="list-item-icon">
        <i c8yIcon="exclamation-circle" class="status major" tooltip="Severity: MAJOR" tooltip-placement="right"></i>
      </div>
      <div class="list-item-body">Major alarm</div>
    </div>
    <div class="list-group-item d-flex">
      <div class="list-item-icon">
        <i c8yIcon="exclamation-circle" class="status minor" tooltip="Severity: MINOR" tooltip-placement="right"></i>
      </div>
      <div class="list-item-body">Minor alarm</div>
    </div>
  </div>
</div>

```html
<div class="list-group">
  <div class="list-group-item d-flex">
    <div class="list-item-icon">
      <i
        c8yIcon="warning"
        class="status critical"
        tooltip="Severity: CRITICAL"
        tooltip-placement="right"
      ></i>
    </div>
    <div class="list-item-body">Critical alarm</div>
  </div>
  <div class="list-group-item d-flex">
    <div class="list-item-icon">
      <i
        c8yIcon="exclamation-circle"
        class="status major"
        tooltip="Severity: MAJOR"
        tooltip-placement="right"
      ></i>
    </div>
    <div class="list-item-body">Major alarm</div>
  </div>
  <div class="list-group-item d-flex">
    <div class="list-item-icon">
      <i
        c8yIcon="exclamation-circle"
        class="status minor"
        tooltip="Severity: MINOR"
        tooltip-placement="right"
      ></i>
    </div>
    <div class="list-item-body">Minor alarm</div>
  </div>
</div>
```

### Selectable

Wrap the checkbox in a `.list-item-checkbox` and place the label after filling the `for` attribute for better accessibility.

<div class="c8y-example">
  <ul class="list-group">
    <li class="list-group-item d-flex">
      <div class="list-item-checkbox">
        <label class="c8y-checkbox">
          <input type="checkbox" id="groupcheckbox3">
          <span></span>
        </label>
      </div>
      <label for="groupcheckbox3">
        CEP Manager
        <br><small class="text-muted">Has full access to all deployed CEP modules and SmartRules</small>
      </label>
    </li>
    <li class="list-group-item d-flex">
      <div class="list-item-checkbox">
        <label class="c8y-checkbox">
          <input type="checkbox" id="groupcheckbox4">
          <span></span>
        </label>
      </div>
      <label for="groupcheckbox4">
        Cockpit User
        <br><small class="text-muted">User to work in Cockpit application. This does not include the access to any device data.</small>
      </label>
    </li>
    <li class="list-group-item d-flex">
      <div class="list-item-checkbox">
        <label class="c8y-checkbox">
          <input type="checkbox" id="groupcheckbox5">
          <span></span>
        </label>
      </div>
      <label for="groupcheckbox5">
        Devicemanagement User
        <br><small class="text-muted">Gives access to bulk operations and device management application. This does not include access to any device data.</small>
      </label>
    </li>
  </ul>
</div>

```html
<ul class="list-group">
  <li class="list-group-item d-flex">
    <div class="list-item-checkbox">
      <label class="c8y-checkbox">
        <input type="checkbox" id="groupcheckbox3" />
        <span></span>
      </label>
    </div>
    <label for="groupcheckbox3">
      CEP Manager
      <br /><small class="text-muted"
        >Has full access to all deployed CEP modules and SmartRules</small
      >
    </label>
  </li>

  <li class="list-group-item d-flex">
    <div class="list-item-checkbox">
      <label class="c8y-checkbox">
        <input type="checkbox" id="groupcheckbox4" />
        <span></span>
      </label>
    </div>
    <label for="groupcheckbox4">
      Cockpit User
      <br /><small class="text-muted"
        >User to work in Cockpit application. This does not include the access to any device
        data.</small
      >
    </label>
  </li>
</ul>
```

### Actions

To allow record actions like editing and deleting, wrap a <a href="#/components/dropdowns/">dropdown</a> in a `.list-item-actions`.

Optionally, add a checkbox for performing bulk operations wrapping the `.c8y-checkbox` in a `.list-item-checkbox`.

<div class="c8y-example">
  <div class="list-group">
    <div class="list-group-item d-flex">
      <div class="list-item-actions">
        <div class="settings dropdown" dropdown>
          <button type="button" title="Options" dropdownToggle class="dropdown-toggle c8y-dropdown">
            <i c8yIcon="ellipsis-v"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
            <li>
              <button title="Edit">
                <i c8y-icon="pencil" class="dlt-c8y-icon-pencil"></i>&nbsp;<span translate>Edit</span>
              </button>
            </li>
            <li>
              <button title="Clone">
                <i c8y-icon="clone" class="dlt-c8y-icon-clone"></i>&nbsp;<span translate>Clone</span>
              </button>
            </li>
            <li>
              <button title="Delete">
                <i c8y-icon="trash" class="dlt-c8y-icon-trash"></i>&nbsp;<span translate>Delete</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="list-item-checkbox">
        <label title="Select" class="c8y-checkbox">
          <input type="checkbox">
          <span></span>
        </label>
      </div>
      <div class="list-item-icon">
        <i title="XLS file" c8yIcon="file-excel-o"></i>
      </div>
      <div class="list-item-body">
        <div class="d-flex row">
          <span class="col-sm-4 col-xs-12">Alarms report</span>
          <div class="col-sm-6 col-xs-12 text-muted">
            <i c8yIcon="calendar"></i>&nbsp;<span translate>Last week</span>
          </div>
        </div>
      </div>
    </div>
    <div class="list-group-item d-flex">
        <div class="list-item-actions">
          <div class="settings dropdown" dropdown>
            <button type="button" title="Options" dropdownToggle class="dropdown-toggle c8y-dropdown">
              <i c8yIcon="ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
              <li>
                <button title="Edit">
                  <i c8y-icon="pencil" class="dlt-c8y-icon-pencil"></i>&nbsp;<span translate>Edit</span>
                </button>
              </li>
              <li>
                <button title="Clone">
                  <i c8y-icon="clone" class="dlt-c8y-icon-clone"></i>&nbsp;<span translate>Clone</span>
                </button>
              </li>
              <li>
                <button title="Delete">
                  <i c8y-icon="trash" class="dlt-c8y-icon-trash"></i>&nbsp;<span translate>Delete</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="list-item-checkbox">
          <label title="Select" class="c8y-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="list-item-icon">
          <i title="XLS file" c8yIcon="file-excel-o"></i>
        </div>
        <div class="list-item-body">
          <div class="d-flex row">
            <span class="col-sm-4 col-xs-12">Another alarms report</span>
            <div class="col-sm-6 col-xs-12 text-muted">
              <i c8yIcon="calendar"></i>&nbsp;<span translate>Last Month</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>

```html
<div class="list-group">
  <div class="list-group-item d-flex">
    <div class="list-item-actions">
      <div class="settings dropdown" dropdown>
        <button type="button" title="Options" dropdownToggle class="dropdown-toggle c8y-dropdown">
          <i c8yIcon="ellipsis-v"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
          <li>
            <button title="Edit">
              <i c8y-icon="pencil" class="dlt-c8y-icon-pencil"></i>&nbsp;<span translate>Edit</span>
            </button>
          </li>
          <li>
            <button title="Clone">
              <i c8y-icon="clone" class="dlt-c8y-icon-clone"></i>&nbsp;<span translate>Clone</span>
            </button>
          </li>
          <li>
            <button title="Delete">
              <i c8y-icon="trash" class="dlt-c8y-icon-trash"></i>&nbsp;<span translate>Delete</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="list-item-checkbox">
      <label title="Select" class="c8y-checkbox">
        <input type="checkbox">
        <span></span>
      </label>
    </div>

    <div class="list-item-icon">
      <i title="XLS file" c8yIcon="file-excel-o"></i>
    </div>

    <div class="list-item-body"
      <div class="d-flex row">
        <span class="col-sm-4 col-xs-12">Alarms report</span>
        <div class="col-sm-6 col-xs-12 text-muted">
          <i c8yIcon="calendar"></i>&nbsp;<span translate>Last week</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Collapsible content

Add the `.collapsible` class to the `.list-group-item` to use a collapsible element. Refer to [Angular UI Bootstrap](https://valor-software.com/ngx-bootstrap/#/collapse) for more information on adding a collapse.

<div class="c8y-example">
  <div class="c8y-data-point-list list-group borderless-top">
    <div class="c8y-data-point list-group-item d-flex collapsible" [ngClass]="{'expanded': isCollapsed}" style="z-index: initial;">
      <div class="list-item-actions">
        <button type="button" title="Expand" class="collapse-btn" (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed">
          <i c8yIcon="chevron-down"></i>
        </button>
        <span class="dropdown settings" dropdown >
            <button type="button" title="Actions" dropdownToggle class="dropdown-toggle c8y-dropdown">
              <i c8y-icon="ellipsis-v" class="dlt-c8y-icon-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
              <li>
                <button type="button">
                  <i c8y-icon="cogs" class="dlt-c8y-icon-cogs"></i> Create Smart Rule
                </button>
              </li>
              <li>
                <button type="button">
                  <i c8y-icon="trash" class="dlt-c8y-icon-trash"></i> Remove from list
                </button>
              </li>
              <li>
                <button type="button">
                  <i c8y-icon="floppy-o" class="dlt-c8y-icon-floppy-o"></i>
                  Save to library
                </button>
              </li>
            </ul>
          </span>
      </div>
      <div class="list-item-switch">
        <label class="c8y-switch">
            <input name="active" type="checkbox" >
            <span></span>
          </label>
      </div>
      <div class="list-item-colorpicker">
        <div class="minicolors minicolors-theme-cumulocity minicolors-position-top minicolors-position-left">
          <input c8y-color-picker="" name="color" type="hidden" class="colorpicker minicolors-input" ng-model="dp.color" uib-tooltip="Change color" autocomplete="off" size="7" value="#b4e7c0">
          <span class="minicolors-swatch minicolors-sprite minicolors-input-swatch">
            <span class="minicolors-swatch-color" style="background-color: rgb(180, 231, 192); height: 20px; display:block;"></span>
          </span>
          <div class="minicolors-panel minicolors-slider-hue">
            <div class="minicolors-slider minicolors-sprite">
              <div class="minicolors-picker"></div>
            </div>
            <div class="minicolors-opacity-slider minicolors-sprite">
              <div class="minicolors-picker"></div>
            </div>
            <div class="minicolors-grid minicolors-sprite"
              style="background-color: rgb(0, 255, 60);">
              <div class="minicolors-grid-inner"></div>
              <div class="minicolors-picker"
                style="top: 14px; left: 34px;">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="list-item-body text-truncate">
        <div class="data-point-label text-truncate" title="Show details" (click)="isCollapsed = !isCollapsed">
          <span name="label">c8y_gatewayMemory =&gt; free</span>
        </div>
      </div>
      <div [collapse]="!isCollapsed" [isAnimated]="true" class="collapse">
        <div class="data-point-details" ng-form="singleDpForm">
          <div class="data-point-target">
            <label translate="">Source</label>
            <p class="m-b-8">jsobolewskiGateway1
              <br><small class="text-muted hidden-xs">c8y_gatewayMemory &gt; free</small></p>
          </div>
          <div class="form-group ">
            <label translate="">Label</label>
            <input name="label" class="input-sm form-control">
          </div>
          <div class="tight-grid">
            <div class="col-xs-6">
              <div class="form-group form-group-sm">
                <label for="unit" translate="">Default unit</label>
                <input name="unit" class="form-control">
              </div>
            </div>
            <div class="col-xs-6">
              <div class="form-group form-group-sm">
                <label for="target"><translate>Target value</translate> <a href="" tooltip="Expected target value for datapoint"><i c8y-icon="question-circle-o" class="dlt-c8y-icon-question-circle-o"></i></a></label>
                <input name="target" type="number" class="form-control">
              </div>
            </div>
            <div class="col-xs-6 ">
              <div class="form-group form-group-sm" >
                <label for="min" translate="">Min</label>
                <input name="min" type="number" ng-model="dp.min" c8y-model-options="{preserveNumericStrings: true}" class="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-max" ng-change="setRangesFieldsAsTouched()">
                <c8y-error-feedback field="singleDpForm.min"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                </c8y-error-feedback>
              </div>
            </div>
            <div class="col-xs-6">
              <div class="form-group form-group-sm">
                <label for="max" translate="">Max</label>
                <input name="max" type="number" ng-model="dp.max" c8y-model-options="{preserveNumericStrings: true}" class="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-min" ng-change="setRangesFieldsAsTouched()">
                <c8y-error-feedback field="singleDpForm.max"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                </c8y-error-feedback>
              </div>
            </div>
            <div class="col-xs-12">
              <div>
                <label for="yellowRange" translate="">Yellow range</label>
                <div class="tight-grid">
                  <div class="col-xs-6">
                    <div class="form-group form-group-sm">
                      <input name="yellowRangeMin" type="number" ng-max="undefined" c8y-model-options="{preserveNumericStrings: true}" placeholder="e.g. 25" ng-required="isNumber(dp.yellowRangeMax) &amp;&amp; hasLimits(dp)" ng-model="dp.yellowRangeMin" class="form-control ng-pristine ng-untouched ng-empty ng-valid-min ng-valid-max ng-valid ng-valid-required" ng-change="setRangesFieldsAsTouched()">
                      <c8y-error-feedback field="singleDpForm.yellowRangeMin"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                      </c8y-error-feedback>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="form-group form-group-sm">
                      <input name="yellowRangeMax" type="number" ng-min="undefined" c8y-model-options="{preserveNumericStrings: true}" placeholder="e.g. 50" ng-required="isNumber(dp.yellowRangeMin) &amp;&amp; hasLimits(dp)" ng-model="dp.yellowRangeMax" class="form-control ng-pristine ng-untouched ng-empty ng-valid-min ng-valid-max ng-valid ng-valid-required" ng-change="setRangesFieldsAsTouched()">
                      <c8y-error-feedback field="singleDpForm.yellowRangeMax"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                      </c8y-error-feedback>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div ng-if="!isBasicList">
                <label for="redRange" translate="">Red range</label>
                <div class="tight-grid">
                  <div class="col-xs-6">
                    <div class="form-group form-group-sm">
                      <input name="redRangeMin" type="number" ng-max="undefined" c8y-model-options="{preserveNumericStrings: true}" placeholder="e.g. 50" ng-required="isNumber(dp.redRangeMax) &amp;&amp; hasLimits(dp)" ng-model="dp.redRangeMin" class="form-control ng-pristine ng-untouched ng-empty ng-valid-min ng-valid-max ng-valid ng-valid-required" ng-change="setRangesFieldsAsTouched()">
                      <c8y-error-feedback field="singleDpForm.redRangeMin"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                      </c8y-error-feedback>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="form-group form-group-sm">
                      <input name="redRangeMax" type="number" ng-min="undefined" c8y-model-options="{preserveNumericStrings: true}" placeholder="e.g. 75" ng-required="isNumber(dp.redRangeMin) &amp;&amp; hasLimits(dp)" ng-model="dp.redRangeMax" class="form-control ng-pristine ng-untouched ng-empty ng-valid-min ng-valid-max ng-valid ng-valid-required" ng-change="setRangesFieldsAsTouched()">
                      <c8y-error-feedback field="singleDpForm.redRangeMax"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                      </c8y-error-feedback>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-4">
              <div class="form-group form-group-sm" ng-if="!isBasicList &amp;&amp; !noChart">
                <label for="display"><translate>Display</translate> <a href="" uib-tooltip="Value displayed when data is aggregated"><i c8y-icon="question-circle-o" class="dlt-c8y-icon-question-circle-o"></i></a></label>
                <div class="c8y-select-wrapper">
                  <select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" ng-options="type.val as (type.text | translate) for type in chartTypes" ng-model="dp.renderType" ng-init="dp.renderType = dp.renderType || chartTypes[0].val"><option label="Minimum" value="string:min" selected="selected">Minimum</option><option label="Maximum" value="string:max">Maximum</option><option label="Minimum and maximum" value="string:area">Minimum and maximum</option></select>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-4">
              <div class="form-group form-group-sm" ng-if="!isBasicList &amp;&amp; !noChart">
                <label for="chartType" translate="">Chart type</label>
                <div class="c8y-select-wrapper">
                  <select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" ng-options="type.val as (type.text | translate) for type in lineTypes" ng-model="dp.lineType" ng-init="dp.lineType = dp.lineType || lineTypes[0].val"><option label="Line" value="string:line" selected="selected">Line</option><option label="Points" value="string:points">Points</option><option label="Line and points" value="string:linePoints">Line and points</option><option label="Bars" value="string:bars">Bars</option><option label="Step before" value="string:step-before">Step before</option><option label="Step after" value="string:step-after">Step after</option></select>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-4">
              <div class="form-group form-group-sm" ng-if="!isBasicList &amp;&amp; !noChart">
                <label for="yAxis" translate="">Y-axis</label>
                <div class="c8y-select-wrapper">
                  <select class="form-control ng-pristine ng-untouched ng-valid ng-empty" ng-options="axis.val as (axis.text | translate) for axis in axisTypes" ng-model="dp.yAxisType"><option label="Auto" value="undefined:undefined" selected="selected">Auto</option><option label="Left" value="string:left">Left</option><option label="Right" value="string:right">Right</option></select>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c8y-data-point list-group-item d-flex collapsible" [ngClass]="{'expanded': isCollapsed2}" style="z-index: initial;">
        <div class="list-item-actions">
          <button type="button" title="Expand" class="collapse-btn" (click)="isCollapsed2 = !isCollapsed2" [attr.aria-expanded]="!isCollapsed2">
            <i c8yIcon="chevron-down"></i>
          </button>
          <span class="dropdown settings" dropdown >
              <button type="button" title="Actions" dropdownToggle class="dropdown-toggle c8y-dropdown">
                <i c8y-icon="ellipsis-v" class="dlt-c8y-icon-ellipsis-v"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-right" *dropdownMenu>
                <li>
                  <button type="button">
                    <i c8y-icon="cogs" class="dlt-c8y-icon-cogs"></i> Create Smart Rule
                  </button>
                </li>
                <li>
                  <button type="button">
                    <i c8y-icon="trash" class="dlt-c8y-icon-trash"></i> Remove from list
                  </button>
                </li>
                <li>
                  <button type="button">
                    <i c8y-icon="floppy-o" class="dlt-c8y-icon-floppy-o"></i>
                    Save to library
                  </button>
                </li>
              </ul>
            </span>
        </div>
        <div class="list-item-switch">
          <label class="c8y-switch">
              <input name="active" type="checkbox" >
              <span></span>
            </label>
        </div>
        <div class="list-item-colorpicker">
          <div class="minicolors minicolors-theme-cumulocity minicolors-position-top minicolors-position-left">
            <input c8y-color-picker="" name="color" type="hidden" class="colorpicker minicolors-input" ng-model="dp.color" uib-tooltip="Change color" autocomplete="off" size="7" value="#b4e7c0">
            <span class="minicolors-swatch minicolors-sprite minicolors-input-swatch">
              <span class="minicolors-swatch-color" style="background-color: rgb(228, 215, 35); height: 20px; display:block;"></span>
            </span>
            <div class="minicolors-panel minicolors-slider-hue">
              <div class="minicolors-slider minicolors-sprite">
                <div class="minicolors-picker"></div>
              </div>
              <div class="minicolors-opacity-slider minicolors-sprite">
                <div class="minicolors-picker"></div>
              </div>
              <div class="minicolors-grid minicolors-sprite"
                style="background-color: rgb(0, 255, 60);">
                <div class="minicolors-grid-inner"></div>
                <div class="minicolors-picker"
                  style="top: 14px; left: 34px;">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item-body text-truncate">
          <div class="data-point-label text-truncate" title="Show details" (click)="isCollapsed2 = !isCollapsed2">
            <span name="label">c8y_pumpdata =&gt; inputFlow</span>
          </div>
        </div>
        <div [collapse]="!isCollapsed2" [isAnimated]="true" class="collapse">
          <div class="data-point-details" ng-form="singleDpForm">
            <div class="data-point-target">
              <label translate="">Source</label>
              <p class="m-b-8">jsobolewskiGateway1
                <br><small class="text-muted hidden-xs">c8y_gatewayMemory &gt; free</small></p>
            </div>
            <div class="form-group ">
              <label translate="">Label</label>
              <input name="label" class="input-sm form-control">
            </div>
            <div class="tight-grid">
              <div class="col-xs-6">
                <div class="form-group form-group-sm">
                  <label for="unit" translate="">Default unit</label>
                  <input name="unit" class="form-control">
                </div>
              </div>
              <div class="col-xs-6">
                <div class="form-group form-group-sm">
                  <label for="target"><translate>Target value</translate> <a href="" tooltip="Expected target value for datapoint"><i c8y-icon="question-circle-o" class="dlt-c8y-icon-question-circle-o"></i></a></label>
                  <input name="target" type="number" class="form-control">
                </div>
              </div>
              <div class="col-xs-6 ">
                <div class="form-group form-group-sm" >
                  <label for="min" translate="">Min</label>
                  <input name="min" type="number" ng-model="dp.min" c8y-model-options="{preserveNumericStrings: true}" class="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-max" ng-change="setRangesFieldsAsTouched()">
                  <c8y-error-feedback field="singleDpForm.min"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                  </c8y-error-feedback>
                </div>
              </div>
              <div class="col-xs-6">
                <div class="form-group form-group-sm">
                  <label for="max" translate="">Max</label>
                  <input name="max" type="number" ng-model="dp.max" c8y-model-options="{preserveNumericStrings: true}" class="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-min" ng-change="setRangesFieldsAsTouched()">
                  <c8y-error-feedback field="singleDpForm.max"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                  </c8y-error-feedback>
                </div>
              </div>
              <div class="col-xs-12">
                <div>
                  <label for="yellowRange" translate="">Yellow range</label>
                  <div class="tight-grid">
                    <div class="col-xs-6">
                      <div class="form-group form-group-sm">
                        <input name="yellowRangeMin" type="number" ng-max="undefined" c8y-model-options="{preserveNumericStrings: true}" placeholder="e.g. 25" ng-required="isNumber(dp.yellowRangeMax) &amp;&amp; hasLimits(dp)" ng-model="dp.yellowRangeMin" class="form-control ng-pristine ng-untouched ng-empty ng-valid-min ng-valid-max ng-valid ng-valid-required" ng-change="setRangesFieldsAsTouched()">
                        <c8y-error-feedback field="singleDpForm.yellowRangeMin"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                        </c8y-error-feedback>
                      </div>
                    </div>
                    <div class="col-xs-6">
                      <div class="form-group form-group-sm">
                        <input name="yellowRangeMax" type="number" ng-min="undefined" c8y-model-options="{preserveNumericStrings: true}" placeholder="e.g. 50" ng-required="isNumber(dp.yellowRangeMin) &amp;&amp; hasLimits(dp)" ng-model="dp.yellowRangeMax" class="form-control ng-pristine ng-untouched ng-empty ng-valid-min ng-valid-max ng-valid ng-valid-required" ng-change="setRangesFieldsAsTouched()">
                        <c8y-error-feedback field="singleDpForm.yellowRangeMax"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                        </c8y-error-feedback>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12">
                <div ng-if="!isBasicList">
                  <label for="redRange" translate="">Red range</label>
                  <div class="tight-grid">
                    <div class="col-xs-6">
                      <div class="form-group form-group-sm">
                        <input name="redRangeMin" type="number" ng-max="undefined" c8y-model-options="{preserveNumericStrings: true}" placeholder="e.g. 50" ng-required="isNumber(dp.redRangeMax) &amp;&amp; hasLimits(dp)" ng-model="dp.redRangeMin" class="form-control ng-pristine ng-untouched ng-empty ng-valid-min ng-valid-max ng-valid ng-valid-required" ng-change="setRangesFieldsAsTouched()">
                        <c8y-error-feedback field="singleDpForm.redRangeMin"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                        </c8y-error-feedback>
                      </div>
                    </div>
                    <div class="col-xs-6">
                      <div class="form-group form-group-sm">
                        <input name="redRangeMax" type="number" ng-min="undefined" c8y-model-options="{preserveNumericStrings: true}" placeholder="e.g. 75" ng-required="isNumber(dp.redRangeMin) &amp;&amp; hasLimits(dp)" ng-model="dp.redRangeMax" class="form-control ng-pristine ng-untouched ng-empty ng-valid-min ng-valid-max ng-valid ng-valid-required" ng-change="setRangesFieldsAsTouched()">
                        <c8y-error-feedback field="singleDpForm.redRangeMax"><i c8y-icon="warning" class="form-control-feedback ng-hide dlt-c8y-icon-warning" ng-show="!vm.isFieldHidden() &amp;&amp; vm.shouldShowWarningIcon()"></i>
                        </c8y-error-feedback>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-6 col-sm-4">
                <div class="form-group form-group-sm" ng-if="!isBasicList &amp;&amp; !noChart">
                  <label for="display"><translate>Display</translate> <a href="" uib-tooltip="Value displayed when data is aggregated"><i c8y-icon="question-circle-o" class="dlt-c8y-icon-question-circle-o"></i></a></label>
                  <div class="c8y-select-wrapper">
                    <select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" ng-options="type.val as (type.text | translate) for type in chartTypes" ng-model="dp.renderType" ng-init="dp.renderType = dp.renderType || chartTypes[0].val"><option label="Minimum" value="string:min" selected="selected">Minimum</option><option label="Maximum" value="string:max">Maximum</option><option label="Minimum and maximum" value="string:area">Minimum and maximum</option></select>
                    <span></span>
                  </div>
                </div>
              </div>
              <div class="col-xs-6 col-sm-4">
                <div class="form-group form-group-sm" ng-if="!isBasicList &amp;&amp; !noChart">
                  <label for="chartType" translate="">Chart type</label>
                  <div class="c8y-select-wrapper">
                    <select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" ng-options="type.val as (type.text | translate) for type in lineTypes" ng-model="dp.lineType" ng-init="dp.lineType = dp.lineType || lineTypes[0].val"><option label="Line" value="string:line" selected="selected">Line</option><option label="Points" value="string:points">Points</option><option label="Line and points" value="string:linePoints">Line and points</option><option label="Bars" value="string:bars">Bars</option><option label="Step before" value="string:step-before">Step before</option><option label="Step after" value="string:step-after">Step after</option></select>
                    <span></span>
                  </div>
                </div>
              </div>
              <div class="col-xs-6 col-sm-4">
                <div class="form-group form-group-sm" ng-if="!isBasicList &amp;&amp; !noChart">
                  <label for="yAxis" translate="">Y-axis</label>
                  <div class="c8y-select-wrapper">
                    <select class="form-control ng-pristine ng-untouched ng-valid ng-empty" ng-options="axis.val as (axis.text | translate) for axis in axisTypes" ng-model="dp.yAxisType"><option label="Auto" value="undefined:undefined" selected="selected">Auto</option><option label="Left" value="string:left">Left</option><option label="Right" value="string:right">Right</option></select>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
