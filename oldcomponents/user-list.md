---
title: User list
icon: adjust
slug: user-list
aorder: 80
---

# User list

Displays a user role hierarchy providing the following information for each user.

<ul class="m-t-24 m-b-24">
  <li>The user name that is used to access the tenant.</li>
  <li>The name and email of the user, if set.</li>
  <li>The global roles assigned to the user.</li>
  <li>The strength of the password set for the user.</li>
</ul>

<p class="m-b-40">
  Uses the `c8y-user-list-view` directive.
  Check usage in the <a href="http://resources.cumulocity.com/documentation/jssdk/latest/#/api/c8y.core.service:c8yUser">Cumulocity UI Docs</a>.
</p>

<div class="c8y-example">
  <c8y-user-list-view>
  <c8y-ui-title-set title="'Users' | translate">
    <div class="transclude-container" style="display: none" ng-transclude=""></div>
  </c8y-ui-title-set>
    <c8y-ui-action-bar-set>
      <ng-transclude style="display: none">
      </ng-transclude>
    </c8y-ui-action-bar-set>
    <c8y-bulk-actions actions="vm.bulkActions" list="vm.users" on-complete="vm.refresh()">
    </c8y-bulk-actions>
    <c8y-user-list
      users="vm.users"
      global-roles="::vm.globalRoles"
      on-load-subusers="vm.loadSubusers(user)"
      on-load-more="vm.loadMore()"
      on-change-user="vm.changeUser(user, action)"
      >
      <div
        class="user-list-row"
        ng-repeat="user in vm.userFlatTree | filter:vm.visible"
        ng-class="::{owned: !!user.owner, owns: user.subusersCount > 0}"
        ng-style="{'margin-left': (user._depth * 4), 'margin-right': (user._depth * 4) }"
        style="margin-left: 0px; margin-right: 0px"
      >
        <div
          class="col-expand interact ng-hide"
          ng-click="::!vm.searchOn() &amp;&amp; vm.toggleExpanded(user)"
          ng-show="::user.subusersCount"
        >
          <i
            c8y-icon="chevron-down"
            ng-class="{'open':user._expanded}"
            ng-hide="vm.searchOn()"
            class="dlt-c8y-icon-chevron-down"
          ></i>
        </div>
        <div class="col-expand" ng-hide="::user.subusersCount"></div>
        <div
          class="col-username interact text-truncate"
          ng-style="{width: 250 - user._depth * 4}"
          ng-click="vm.editUser(user)"
          style="width: 250px"
        >
          <div class="user-dot" ng-class="{'user-disabled': !user.enabled}">
            Be
          </div>
        </div>
        <div class="col-subaccounts text-center">
          <a href="" ng-show="user.subusersCount" uib-tooltip="Direct sub-users" class="ng-hide">
            <span class="badge bg-primary">0</span>
          </a>
        </div>
        <div class="col-fullname interact text-truncate" ng-click="vm.editUser(user)">
          <span title="admin">Admin</span>
          <br />
          <small title="email">admin@email.com</small>
        </div>
        <div class="col-globalroles">
          <c8y-item-selector
            items="vm.globalRolesAvailable(user)"
            items-selected="::vm.mapRolesForUser(user.groups.references)"
            on-apply="vm.changeGlobalRoles(user, items)"
            text-apply="Apply"
            text-placeholder="----"
            >
          <div
              class="c8y-child-assets-selector dropdown"
              ng-style="vm.styleButton"
              is-open="vm.isDropDownOpen"
              on-toggle="vm.onToggleDropdown(open)"
              dropdown-append-to-body="true"
              uib-dropdown=""
            >
              <button
                type="button"
                class="btn dropdown-toggle c8y-dropdown"
                uib-dropdown-toggle=""
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-truncate" ng-bind="vm.displayLabel" ng-show="vm.displayLabel"
                >
                  CEP Manager, Cockpit User, Devicemanagement User, End of Level Boss, Global Manager
                </span>
              </button>
            </div>
          </c8y-item-selector>
        </div>
        <!-- Password strength -->
        <div class="col-passwordstrength">
      <span
            ng-if="user.passwordStrength"
            class="text-truncate"
            title="strong"
            ng-style="{color: vm.getPasswordColor(user.passwordStrength)}"
            style="color: rgb(0, 128, 0)"
          >
            <i c8y-icon="check" class="dlt-c8y-icon-check"></i>
            strong
          </span>
        </div>
        <div class="col-twofactorauth text-right">
          <i
            class="text-success ng-hide dlt-c8y-icon-key"
            ng-show="user.twoFactorAuthenticationEnabled"
            uib-tooltip="TFA active (SMS)"
            c8y-icon="key"
          >
          </i>
        </div>
        <div class="col-actions">
          <div class="dropdown" uib-dropdown="">
            <a
              title="Actions"
              class="dropdown-toggle c8y-dropdown"
              uib-dropdown-toggle=""
              ng-click="::$event.stopPropagation()"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span><i c8y-icon="ellipsis-v" class="dlt-c8y-icon-ellipsis-v"></i></span>
            </a>
          </div>
        </div>
        <div class="tip" ng-class="{'expanded': user._expanded}"></div>
      </div>
      <div
        class="user-list-row"
        ng-repeat="user in vm.userFlatTree | filter:vm.visible"
        ng-class="::{owned: !!user.owner, owns: user.subusersCount > 0}"
        ng-style="{'margin-left': (user._depth * 4), 'margin-right': (user._depth * 4) }"
        style="margin-left: 0px; margin-right: 0px"
      >
        <div
          class="col-expand interact ng-hide"
          ng-click="::!vm.searchOn() &amp;&amp; vm.toggleExpanded(user)"
          ng-show="::user.subusersCount"
        >
          <i
            c8y-icon="chevron-down"
            ng-class="{'open':user._expanded}"
            ng-hide="vm.searchOn()"
            class="dlt-c8y-icon-chevron-down"
          ></i>
        </div>
        <div class="col-expand" ng-hide="::user.subusersCount"></div>
        <div
          class="col-username interact text-truncate"
          ng-style="{width: 250 - user._depth * 4}"
          ng-click="vm.editUser(user)"
          style="width: 250px"
        >
          <div class="user-dot" ng-class="{'user-disabled': !user.enabled}">ad</div>
          <span class="username text-truncate">
            <span title="admin" class="h4">Admin</span>
          </span>
        </div>
        <div class="col-subaccounts text-center">
          <a href="" ng-show="user.subusersCount" uib-tooltip="Direct sub-users" class="ng-hide">
            <span class="badge bg-primary">0</span>
          </a>
        </div>
        <div class="col-fullname interact text-truncate" ng-click="vm.editUser(user)">
          <span title="Admin">Admin</span>
          <br />
          <small title="email">admin@email.com</small>
        </div>
        <div class="col-globalroles">
          <c8y-item-selector
            items="vm.globalRolesAvailable(user)"
            items-selected="::vm.mapRolesForUser(user.groups.references)"
            on-apply="vm.changeGlobalRoles(user, items)"
            text-apply="Apply"
            text-placeholder="----"
            >
            <div
              class="c8y-child-assets-selector dropdown"
              ng-style="vm.styleButton"
              is-open="vm.isDropDownOpen"
              on-toggle="vm.onToggleDropdown(open)"
              dropdown-append-to-body="true"
              uib-dropdown=""
            >
              <button
                type="button"
                class="btn dropdown-toggle c8y-dropdown"
                uib-dropdown-toggle=""
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-truncate" ng-bind="vm.displayLabel" ng-show="vm.displayLabel"
                >
                  CEP Manager, Cockpit User, Devicemanagement User, Global Manager, Global Reader,
                </span>
                <span
                  class="text-truncate text-muted ng-hide"
                  ng-hide="vm.displayLabel"
                  ng-bind="vm.placeholder()"
                >
                ----
                </span>
              </button>
              <ul
                class="dropdown-menu multiselect-container"
                ng-click="$event.stopPropagation();"
                uib-dropdown-menu=""
                style="margin-top: -32px; top: 362px; display: none; left: 564px; right: auto"
                ng-style="vm.styleButton"
                ng-class="vm.dropdownMenuClasses"
              >
              </ul>
            </div>
          </c8y-item-selector>
        </div>
        <!-- Password strength -->
        <div class="col-passwordstrength">
          <span
            ng-if="user.passwordStrength"
            class="text-truncate"
            title="strong"
            ng-style="{color: vm.getPasswordColor(user.passwordStrength)}"
            style="color: rgb(0, 128, 0)"
          >
            <i c8y-icon="check" class="dlt-c8y-icon-check"></i>
            strong
          </span>
        </div>
        <div class="col-twofactorauth text-right">
          <i
            class="text-success ng-hide dlt-c8y-icon-key"
            ng-show="user.twoFactorAuthenticationEnabled"
            uib-tooltip="TFA active (SMS)"
            c8y-icon="key"
          >
          </i>
        </div>
        <div class="col-actions">
          <div class="dropdown" uib-dropdown="">
            <a
              title="Actions"
              class="dropdown-toggle c8y-dropdown"
              uib-dropdown-toggle=""
              ng-click="::$event.stopPropagation()"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span><i c8y-icon="ellipsis-v" class="dlt-c8y-icon-ellipsis-v"></i></span>
            </a>
          </div>
        </div>
        <div class="tip" ng-class="{'expanded': user._expanded}"></div>
      </div>
      <div
        class="user-list-row"
        ng-repeat="user in vm.userFlatTree | filter:vm.visible"
        ng-class="::{owned: !!user.owner, owns: user.subusersCount > 0}"
        ng-style="{'margin-left': (user._depth * 4), 'margin-right': (user._depth * 4) }"
        style="margin-left: 0px; margin-right: 0px"
      >
        <div class="col-expand" ng-hide="::user.subusersCount"></div>
        <div
          class="col-username interact text-truncate"
          ng-style="{width: 250 - user._depth * 4}"
          ng-click="vm.editUser(user)"
          style="width: 250px"
        >
          <div class="user-dot" ng-class="{'user-disabled': !user.enabled}">ca</div>
          <span class="username text-truncate">
            <span class="h4">user</span>
          </span>
        </div>
        <div class="col-subaccounts text-center">
          <a href="" ng-show="user.subusersCount" uib-tooltip="Direct sub-users" class="ng-hide">
            <span class="badge bg-primary">0</span>
          </a>
        </div>
        <div class="col-fullname interact text-truncate" ng-click="vm.editUser(user)">
          <span > user </span>
          <br />
          <small title="user@email.com">user@email.com</small>
        </div>
        <div class="col-globalroles">
          <c8y-item-selector
            items="vm.globalRolesAvailable(user)"
            items-selected="::vm.mapRolesForUser(user.groups.references)"
            on-apply="vm.changeGlobalRoles(user, items)"
            text-apply="Apply"
            text-placeholder="----"
            >
            <div
              class="c8y-child-assets-selector dropdown"
              ng-style="vm.styleButton"
              is-open="vm.isDropDownOpen"
              on-toggle="vm.onToggleDropdown(open)"
              dropdown-append-to-body="true"
              uib-dropdown=""
            >
              <button
                type="button"
                class="btn dropdown-toggle c8y-dropdown"
                uib-dropdown-toggle=""
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-truncate" ng-bind="vm.displayLabel" ng-show="vm.displayLabel"
                  >CEP Manager, Cockpit User, Devicemanagement User, Global Manager, Global Reader,
                </span>
                <span
                  class="text-truncate text-muted ng-hide"
                  ng-hide="vm.displayLabel"
                  ng-bind="vm.placeholder()"
                >
                ----
                </span>
              </button>
              <ul
                class="dropdown-menu multiselect-container"
                ng-click="$event.stopPropagation();"
                uib-dropdown-menu=""
                style="margin-top: -32px; top: 362px; display: none; left: 564px; right: auto"
                ng-style="vm.styleButton"
                ng-class="vm.dropdownMenuClasses"
              >
              </ul>
            </div>
          </c8y-item-selector>
        </div>
        <div class="col-passwordstrength">
      <span
            ng-if="user.passwordStrength"
            class="text-truncate"
            title="strong"
            ng-style="{color: vm.getPasswordColor(user.passwordStrength)}"
            style="color: rgb(0, 128, 0)"
          >
            <i c8y-icon="check" class="dlt-c8y-icon-check"></i>
            strong
          </span>
        </div>
        <div class="col-twofactorauth text-right">
          <i
            class="text-success ng-hide dlt-c8y-icon-key"
            ng-show="user.twoFactorAuthenticationEnabled"
            uib-tooltip="TFA active (SMS)"
            c8y-icon="key"
          >
          </i>
        </div>
        <div class="col-actions">
          <div class="dropdown" uib-dropdown="">
            <a
              title="Actions"
              class="dropdown-toggle c8y-dropdown"
              uib-dropdown-toggle=""
              ng-click="::$event.stopPropagation()"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span><i c8y-icon="ellipsis-v" class="dlt-c8y-icon-ellipsis-v"></i></span>
            </a>
          </div>
        </div>
        <div class="tip" ng-class="{'expanded': user._expanded}"></div>
      </div>
    </c8y-user-list>
  </c8y-user-list-view>
</div>

```html
<c8y-user-list-view>
  …
</c8y-user-list-view>
```
