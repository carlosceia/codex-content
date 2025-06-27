---
title: Timeline list
icon: adjust
slug: timeline-list
aorder: 170
---

<!-- markdownlint-disable MD033 -->

# Timeline list

As an alternative to `.list-group`, you can use `.timeline-list` for displaying record lists in chronological order.

Use the `.active` class if you have to highlight a specific record.

<div class="c8y-example">
  <ul class="timeline-list">
    <li class="timeline-list-item d-flex active"
      ng-repeat="archive in vm.archives | orderBy:'-created'"
      ng-class="{'active': vm.isActive(archive)}"
      style="">
      <small class="timeline-item-date text-right">
        <strong ng-bind="archive.created |  absoluteDateTimeFormat:'D MMM YYYY'">27 Nov 2018</strong><br>
        <span class="text-muted"
          ng-bind="archive.created | absoluteTime">07:51</span>
      </small>
      <div class="timeline-item-content d-flex">
        <div class="list-item-icon">
          <i c8y-icon="file-zip-o"
            class="dlt-c8y-icon-file-zip-o"></i>
        </div>
        <div class="list-item-body">
          <span class="text-truncate"><span ng-bind="archive.name">tracking-some-version.zip</span> <small class="text-muted"
              ng-bind="archive.length | bytes">-</small></span>
          <small class="text-muted"
            ng-bind="archive.description"></small>
        </div>
        <div class="list-item-actions"
          ng-if="!vm.requestInProgress">
          <div class="dropdown clearfix"
            dropdown
            ng-if="!vm.isActiveArchive(archive)"
            uib-dropdown="">
            <button type="button"
              class="dropdown-toggle c8y-dropdown"
              dropdownToggle
              aria-haspopup="true"
              aria-expanded="false"
              uib-dropdown-toggle="">
              <i c8y-icon="ellipsis-v"
                class="dlt-c8y-icon-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-right"
              *dropdownMenu
              aria-labelledby="dropdownMenu1"
              uib-dropdown-menu="">
              <li>
                <a href=""
                  ng-click="vm.setActive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8y-icon="check-square-o"
                    class="dlt-c8y-icon-check-square-o"></i> Set as active
                </a>
              </li>
              <li ng-if="!$last">
                <a href=""
                  ng-click="vm.deleteArchive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8yIcon="trash"></i> Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="timeline-list-item d-flex"
      ng-repeat="archive in vm.archives | orderBy:'-created'"
      ng-class="{'active': vm.isActive(archive)}"
      style="">
      <small class="timeline-item-date text-right">
        <strong ng-bind="archive.created |  absoluteDateTimeFormat:'D MMM YYYY'">26 Nov 2018</strong><br>
        <span class="text-muted"
          ng-bind="archive.created | absoluteTime">20:41</span>
      </small>
      <div class="timeline-item-content d-flex">
        <div class="list-item-icon">
          <i c8y-icon="file-zip-o"
            class="dlt-c8y-icon-file-zip-o"></i>
        </div>
        <div class="list-item-body">
          <span class="text-truncate"><span ng-bind="archive.name">tracking-some-version.zip</span> <small class="text-muted"
              ng-bind="archive.length | bytes">-</small></span>
          <small class="text-muted"
            ng-bind="archive.description"></small>
        </div>
        <div class="list-item-actions"
          ng-if="!vm.requestInProgress">
          <div class="dropdown clearfix"
            dropdown
            ng-if="!vm.isActiveArchive(archive)"
            uib-dropdown="">
            <button type="button"
              class="dropdown-toggle c8y-dropdown"
              dropdownToggle
              aria-haspopup="true"
              aria-expanded="false"
              uib-dropdown-toggle="">
              <i c8y-icon="ellipsis-v"
                class="dlt-c8y-icon-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-right"
              *dropdownMenu
              aria-labelledby="dropdownMenu1"
              uib-dropdown-menu="">
              <li>
                <a href=""
                  ng-click="vm.setActive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8y-icon="check-square-o"
                    class="dlt-c8y-icon-check-square-o"></i> Set as active
                </a>
              </li>
              <li ng-if="!$last">
                <a href=""
                  ng-click="vm.deleteArchive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8yIcon="trash"></i> Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="timeline-list-item d-flex"
      ng-repeat="archive in vm.archives | orderBy:'-created'"
      ng-class="{'active': vm.isActive(archive)}"
      style="">
      <small class="timeline-item-date text-right">
        <strong ng-bind="archive.created |  absoluteDateTimeFormat:'D MMM YYYY'">26 Nov 2018</strong><br>
        <span class="text-muted"
          ng-bind="archive.created | absoluteTime">20:39</span>
      </small>
      <div class="timeline-item-content d-flex">
        <div class="list-item-icon">
          <i c8y-icon="file-zip-o"
            class="dlt-c8y-icon-file-zip-o"></i>
        </div>
        <div class="list-item-body">
          <span class="text-truncate"><span ng-bind="archive.name">tracking.zip</span> <small class="text-muted"
              ng-bind="archive.length | bytes">-</small></span>
          <small class="text-muted"
            ng-bind="archive.description"></small>
        </div>
        <div class="list-item-actions"
          ng-if="!vm.requestInProgress">
          <div class="dropdown clearfix"
            dropdown
            ng-if="!vm.isActiveArchive(archive)"
            uib-dropdown="">
            <button type="button"
              class="dropdown-toggle c8y-dropdown"
              dropdownToggle
              aria-haspopup="true"
              aria-expanded="false"
              uib-dropdown-toggle="">
              <i c8y-icon="ellipsis-v"
                class="dlt-c8y-icon-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-right"
              *dropdownMenu
              aria-labelledby="dropdownMenu1"
              uib-dropdown-menu="">
              <li>
                <a href=""
                  ng-click="vm.setActive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8y-icon="check-square-o"
                    class="dlt-c8y-icon-check-square-o"></i> Set as active
                </a>
              </li>
              <li ng-if="!$last">
                <a href=""
                  ng-click="vm.deleteArchive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8yIcon="trash"></i> Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="timeline-list-item d-flex"
      ng-repeat="archive in vm.archives | orderBy:'-created'"
      ng-class="{'active': vm.isActive(archive)}"
      style="">
      <small class="timeline-item-date text-right">
        <strong ng-bind="archive.created |  absoluteDateTimeFormat:'D MMM YYYY'">26 Nov 2018</strong><br>
        <span class="text-muted"
          ng-bind="archive.created | absoluteTime">20:37</span>
      </small>
      <div class="timeline-item-content d-flex">
        <div class="list-item-icon">
          <i c8y-icon="file-zip-o"
            class="dlt-c8y-icon-file-zip-o"></i>
        </div>
        <div class="list-item-body">
          <span class="text-truncate"><span ng-bind="archive.name">tracking.zip</span> <small class="text-muted"
              ng-bind="archive.length | bytes">-</small></span>
          <small class="text-muted"
            ng-bind="archive.description"></small>
        </div>
        <div class="list-item-actions"
          ng-if="!vm.requestInProgress">
          <div class="dropdown clearfix"
            dropdown
            ng-if="!vm.isActiveArchive(archive)"
            uib-dropdown="">
            <button type="button"
              class="dropdown-toggle c8y-dropdown"
              dropdownToggle
              aria-haspopup="true"
              aria-expanded="false"
              uib-dropdown-toggle="">
              <i c8y-icon="ellipsis-v"
                class="dlt-c8y-icon-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-right"
              *dropdownMenu
              aria-labelledby="dropdownMenu1"
              uib-dropdown-menu="">
              <li>
                <a href=""
                  ng-click="vm.setActive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8y-icon="check-square-o"
                    class="dlt-c8y-icon-check-square-o"></i> Set as active
                </a>
              </li>
              <li ng-if="!$last">
                <a href=""
                  ng-click="vm.deleteArchive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8yIcon="trash"></i> Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="timeline-list-item d-flex"
      ng-repeat="archive in vm.archives | orderBy:'-created'"
      ng-class="{'active': vm.isActive(archive)}"
      style="">
      <small class="timeline-item-date text-right">
        <strong ng-bind="archive.created |  absoluteDateTimeFormat:'D MMM YYYY'">26 Nov 2018</strong><br>
        <span class="text-muted"
          ng-bind="archive.created | absoluteTime">20:34</span>
      </small>
      <div class="timeline-item-content d-flex">
        <div class="list-item-icon">
          <i c8y-icon="file-zip-o"
            class="dlt-c8y-icon-file-zip-o"></i>
        </div>
        <div class="list-item-body">
          <span class="text-truncate"><span ng-bind="archive.name">tracking.zip</span> <small class="text-muted"
              ng-bind="archive.length | bytes">-</small></span>
          <small class="text-muted"
            ng-bind="archive.description"></small>
        </div>
        <div class="list-item-actions"
          ng-if="!vm.requestInProgress">
          <div class="dropdown clearfix"
            dropdown
            ng-if="!vm.isActiveArchive(archive)"
            uib-dropdown="">
            <button type="button"
              class="dropdown-toggle c8y-dropdown"
              dropdownToggle
              aria-haspopup="true"
              aria-expanded="false"
              uib-dropdown-toggle="">
              <i c8y-icon="ellipsis-v"
                class="dlt-c8y-icon-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-right"
              *dropdownMenu
              aria-labelledby="dropdownMenu1"
              uib-dropdown-menu="">
              <li>
                <a href=""
                  ng-click="vm.setActive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8y-icon="check-square-o"
                    class="dlt-c8y-icon-check-square-o"></i> Set as active
                </a>
              </li>
              <li ng-if="!$last">
                <a href=""
                  ng-click="vm.deleteArchive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8yIcon="trash"></i> Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="timeline-list-item d-flex"
      ng-repeat="archive in vm.archives | orderBy:'-created'"
      ng-class="{'active': vm.isActive(archive)}"
      style="">
      <small class="timeline-item-date text-right">
        <strong ng-bind="archive.created |  absoluteDateTimeFormat:'D MMM YYYY'">26 Nov 2018</strong><br>
        <span class="text-muted"
          ng-bind="archive.created | absoluteTime">20:30</span>
      </small>
      <div class="timeline-item-content d-flex">
        <div class="list-item-icon">
          <i c8y-icon="flag-checkered"
            class="dlt-c8y-icon-flag-checkered"></i>
        </div>
        <div class="list-item-body">
          <span class="text-truncate"><span ng-bind="archive.name">tracking.zip</span> <small class="text-muted"
              ng-bind="archive.length | bytes">-</small></span>
          <small class="text-muted"
            ng-bind="archive.description"></small>
        </div>
        <div class="list-item-actions"
          ng-if="!vm.requestInProgress">
          <div class="dropdown clearfix"
            dropdown
            ng-if="!vm.isActiveArchive(archive)"
            uib-dropdown="">
            <button type="button"
              class="dropdown-toggle c8y-dropdown"
              dropdownToggle
              aria-haspopup="true"
              aria-expanded="false"
              uib-dropdown-toggle="">
              <i c8y-icon="ellipsis-v"
                class="dlt-c8y-icon-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-right"
              *dropdownMenu
              aria-labelledby="dropdownMenu1"
              uib-dropdown-menu="">
              <li>
                <a href=""
                  ng-click="vm.setActive(archive)"
                  ng-disabled="vm.requestInProgress || refreshLoading">
                  <i c8y-icon="check-square-o"
                    class="dlt-c8y-icon-check-square-o"></i> Set as active
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>

```html
<ul class="timeline-list">
  <li class="timeline-list-item d-flex active">
    <small class="timeline-item-date text-right">
      <strong>24 Mar 2017</strong><br />
      <span class="text-muted">13:45</span>
    </small>
    <div class="timeline-item-content d-flex">
      <div class="list-item-icon">
        <i c8yIcon="file-zip-o"></i>
      </div>
      <div class="list-item-body">
        <span class="text-truncate">cockpit.zip <small class="text-muted">3.9 MB</small></span>
        <small class="text-mute"></small>
      </div>
    </div>
  </li>
  <li class="timeline-list-item d-flex">
    <small class="timeline-item-date text-right">
      <strong>23 Mar 2017</strong><br />
      <span class="text-muted">12:15</span>
    </small>
    <div class="timeline-item-content d-flex">
      <div class="list-item-icon">
        <i c8yIcon="file-zip-o"></i>
      </div>
      <div class="list-item-body">
        <span class="text-truncate">cockpit.zip <small class="text-muted">3.9 MB</small></span>
        <small class="text-mute"></small>
      </div>
    </div>
  </li>
  […]
</ul>
```

## Collapsible content

Similarly to `list-group`, you can add collapsible content in a `timeline-list-item` using the same approach.

<div class="c8y-example">
  <div class="timeline-list">
    <div class="timeline-list-item d-flex"
      [ngClass]="{'expanded': isCollapsed1}"
      (click)="isCollapsed1 = !isCollapsed1">
      <small class="timeline-item-date text-right">
        4 July 2019 09:52
      </small>
      <div class="timeline-item-content d-flex wrap pointer">
        <!---->
        <div class="list-item-actions">
          <button type="button"
            title="Expand"
            class="collapse-btn">
            <i c8yIcon="chevron-down"></i>
          </button>
        </div>
        <div class="list-item-body">
          <span>MyLevel sent an event: severity: 500, time: 07/04/19 08:52:54.0010000 GMT, eventId: [16] 0x00000000000000c6000000002220000d3, message: (de) Füllständalarm!<br class="visible-xs visible-sm">
            <small>
             <a class="text-muted"
                ng-href="#/device/4032793"
                ng-if="!hideDevice"
                href="#/device/4032793"
                (click)="$event.stopPropagation()"
                >
                <i c8yIcon="cog"></i>Pro MyDevice With Event (ns=2;s=MyDevice)
              </a>
            </small>
          </span>
        </div>
        <div class="collapse no-cursor"
          [collapse]="!isCollapsed1"
          [isAnimated]="true"
          (click)="$event.stopPropagation()"
        >
          <div>
            <div class="legend form-block"
              translate="">Details</div>
            <dl class="dl-inline small text-muted">
              <dt translate="">Time</dt>
              <dd>4 Jul 2019 09:52:54</dd>
            </dl>
            <dl class="dl-inline small text-muted">
              <dt translate="">Server creation time</dt>
              <dd>4 Jul 2019 09:52:56</dd>
            </dl>
            <dl class="dl-inline small text-muted">
              <dt>Type</dt>
              <dd>c8y_myLevel_event</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-list-item d-flex" [ngClass]="{'expanded': isCollapsed2}">
      <small class="timeline-item-date text-right">
        4 July 2019 08:31
      </small>
      <div class="timeline-item-content d-flex wrap pointer"
      (click)="isCollapsed2 = !isCollapsed2">
        <div class="list-item-actions">
          <button type="button"
            title="Expand"
            class="collapse-btn">
            <i c8yIcon="chevron-down"></i>
          </button>
        </div>
        <div class="list-item-body">
          <span>Server [ServerIdentifier(name=New Server, inventoryIdentifier=ID [type=com_cumulocity_model_idtype_GId, value=4026413], localIdentifier=null)] connected<br class="visible-xs visible-sm">
            <small>
              <a class="text-muted"
                href="#/device/4026413"
                (click)="$event.stopPropagation()">
                <i c8yIcon="cog"></i>Whatever
              </a>
            </small>
          </span>
        </div>
        <div class="collapse no-cursor"
          [collapse]="!isCollapsed2"
          [isAnimated]="true"
          (click)="$event.stopPropagation()"
        >
          <div>
            <div class="legend form-block"
              translate="">Details</div>
            <dl class="dl-inline small text-muted">
              <dt translate="">Time</dt>
              <dd>4 Jul 2019 09:52:54</dd>
            </dl>
            <dl class="dl-inline small text-muted">
              <dt translate="">Server creation time</dt>
              <dd>4 Jul 2019 09:52:56</dd>
            </dl>
            <!---->
            <dl class="dl-inline small text-muted">
              <dt>Type</dt>
              <dd>c8y_myLevel_event</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="timeline-list-item d-flex"
      [ngClass]="{'expanded': isCollapsed3}">
      <small class="timeline-item-date text-right">
        4 July 2019 08:30
      </small>
      <div class="timeline-item-content d-flex wrap pointer"
        (click)="isCollapsed3 = !isCollapsed3">
        <div class="list-item-actions">
          <button type="button"
            title="Expand"
            class="collapse-btn">
            <i c8yIcon="chevron-down"></i>
          </button>
        </div>
        <div class="list-item-body">
          <span>Gateway [Gateway1,Gateway1] started<br class="visible-xs visible-sm">
            <small>
              <a class="text-muted"
                (click)="$event.stopPropagation()"
                href="#/device/4026306">
                <i c8yIcon="cog"></i>Gateway1
              </a>
            </small>
          </span>
        </div>
        <div class="collapse no-cursor"
          [collapse]="!isCollapsed3"
          [isAnimated]="true"
          (click)="$event.stopPropagation()"
         >
          <div>
            <div class="legend form-block"
              translate="">Details</div>
            <dl class="dl-inline small text-muted">
              <dt translate="">Time</dt>
              <dd>4 Jul 2019 09:52:54</dd>
            </dl>
            <dl class="dl-inline small text-muted">
              <dt translate="">Server creation time</dt>
              <dd>4 Jul 2019 09:52:56</dd>
            </dl>
            <dl class="dl-inline small text-muted">
              <dt>Type</dt>
              <dd>c8y_myLevel_event</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="timemeline-list">
  <div class="timeline-list-item d-flex" [ngClass]="{'expanded': isCollapsed1}">
    <small class="timeline-item-date text-right">
      4 July 2019 09:52
    </small>
    <div class="timeline-item-content d-flex wrap pointer" (click)="isCollapsed1 = !isCollapsed1">
      <div class="list-item-actions">
        <button type="button" title="Expand" class="collapse-btn">
          <i c8yIcon="chevron-down"></i>
        </button>
      </div>
      <div class="list-item-body">
        <span
          >MyLevel sent an event: severity: 500, time: 07/04/19 08:52:54.0010000 GMT, eventId: [16],
          message: (de) Füllständalarm!
          <br class="visible-xs visible-sm" />
          <small>
            <a (click)="$event.stopPropagation()" class="text-muted" href="#/device/4032793">
              <i c8yIcon="cog"></i>Prosys MyDevice
            </a>
          </small>
        </span>
      </div>
      <div
        class="collapse no-cursor"
        [collapse]="!isCollapsed1"
        [isAnimated]="true"
        (click)="$event.stopPropagation()"
      >
        <div>
          <div class="legend form-block" translate>Details</div>
          <dl class="dl-inline small text-muted">
            <dt translate>Time</dt>
            <dd>4 Jul 2019 09:52:54</dd>
          </dl>
          <dl class="dl-inline small text-muted">
            <dt translate>Server creation time</dt>
            <dd>4 Jul 2019 09:52:56</dd>
          </dl>
          <dl class="dl-inline small text-muted">
            <dt>Type</dt>
            <dd>c8y_myLevel_event</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

</div>
```
