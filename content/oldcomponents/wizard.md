---
title: Wizard
icon: adjust
slug: wizard
aorder: 80
---

# Wizard

<p class="lead m-b-40"> Wizards provide a way to go through a sequence of steps that form an end to end workflow.</p>
<p>Wizards are designed to help users through a defined step-by-step process. Each step is in the navbar below the wizard's header.</p>
<p>Wizards must have at least two steps. If your wizard exceeds 10 steps, consider combining similar steps.</p>

<div class="c8y-example" style="background-color: #00000055;">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
    <device-registration-wizard
      resolve="$resolve"
      modal-instance="$uibModalInstance"
      close="$close($value)"
      dismiss="$dismiss($value)"
      class="ng-scope ng-isolate-scope"
      >
      <c8y-wizard
        class="register-devices ng-isolate-scope"
        on-dismiss="vm.modalInstance.dismiss()"
        on-close="vm.modalInstance.close()"
        initial-flow="['device-registration-selection']"
        is-dynamic-flow="false"
        >
        <div
          ng-show="wizardCtrl.requestInProgress"
          style="
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 999;
          "
          class="ng-hide"
        >
          &nbsp;
        </div>
        <div
          class="modal-header text-center ng-scope bg-primary"
          ng-if="wizardCtrl.hasTransclusionContents('header')"
          ng-class="wizardCtrl.getModalHeaderClass()"
        >
          <div ng-transclude="header">
            <header class="text-white ng-scope">
              <div style="font-size: 62px">
                <span class="c8y-icon c8y-icon-device-connect"></span>
              </div>
              <h4
                class="text-uppercase"
                style="margin: 0; letter-spacing: 0.15em"
                translate=""
              >
                Register devices
              </h4>
            </header>
          </div>
        </div>
        <div
          class="c8y-wizard-nav steps-navbar ng-scope"
          ng-if="wizardCtrl.getCurrentStep().label"
        >
          <ul class="nav nav-tabs nav-justified">
            <li
              ng-repeat="step in wizardCtrl.getFlow()"
              role="presentation"
              ng-class="wizardCtrl.getStepClasses(step.stepId)"
              ng-if="step.label"
              ng-style="{ width: (100 / wizardCtrl.getFlow().length) + '%' }"
              class="ng-scope completed"
              style="width: 50%"
            >
              <a
                href=""
                ng-click="wizardCtrl.isStepCompleted(step.stepId) &amp;&amp; wizardCtrl.goTo(step.stepId)"
                title="Device info"
              >
                <span class="text-truncate ng-binding"> Device info </span>
              </a>
            </li>
            <li
              ng-repeat="step in wizardCtrl.getFlow()"
              role="presentation"
              ng-class="wizardCtrl.getStepClasses(step.stepId)"
              ng-if="step.label"
              ng-style="{ width: (100 / wizardCtrl.getFlow().length) + '%' }"
              class="ng-scope active"
              style="width: 50%"
            >
              <a
                href=""
                ng-click="wizardCtrl.isStepCompleted(step.stepId) &amp;&amp; wizardCtrl.goTo(step.stepId)"
                title="Registration"
              >
                <span class="text-truncate ng-binding"> Registration </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="c8y-wizard-content" ng-transclude="steps" style="height: 296px">
          <steps class="ng-scope">
            <c8y-wizard-step
              step-id="device-registration-selection"
              class="ng-isolate-scope"
              ><div class="c8y-wizard-panel" style=""></div>
            </c8y-wizard-step>
            <c8y-wizard-step
              step-id="finish"
              label="'Registration' | translate"
              class="ng-isolate-scope"
              ><div class="c8y-wizard-panel"></div>
            </c8y-wizard-step>
            <c8y-wizard-step
              step-id="multiple-finish"
              label="'Registration' | translate"
              class="ng-isolate-scope"
              >
              <div class="c8y-wizard-panel active">
                <div
                  ng-if="wizardCtrl.isStepActive(wizardCtrl.stepId)"
                  ng-transclude=""
                  class="ng-scope"
                >
                  <multiple-result-finish-step class="ng-scope ng-isolate-scope"
                    ><div class="modal-inner-scroll" style="min-height: 215px">
                      <div class="modal-body">
                        <div
                          class="text-center ng-binding text-success"
                          ng-class="{'text-danger': vm.withFailures(), 'text-success': !vm.withFailures()}"
                        >
                          Device registered.
                        </div>
                        <div
                          class="text-center m-b-8 ng-scope"
                          ng-if="vm.withSuccess()"
                          translate=""
                        >
                          Turn on the registered device(s) and wait for
                          connection(s) to be established. Once a device is
                          connected, its status will change to "Pending acceptance".
                          You have to approve it by clicking on the "accept"
                          button.
                        </div>
                        <ul class="list-group">
                          <li
                            class="list-group-item d-flex ng-scope text-success"
                            ng-repeat="registrationDetail in vm.getMultipleResults()"
                            ng-class="{'text-danger': registrationDetail.status === 'FAILED', 'text-success': registrationDetail.status === 'SUCCESS', 'expanded': vm.isOpen(registrationDetail)}"
                            ng-click="vm.toggle(registrationDetail);"
                            ng-style="vm.getCursor(registrationDetail)"
                            style="cursor: default"
                          >
                            <div class="list-item-icon">
                              <i
                                c8y-icon="check-circle"
                                class="dlt-c8y-icon-check-circle"
                              ></i>
                            </div>
                            <div class="list-item-body">
                              <p class="ng-binding">d</p>
                              <small class="ng-binding"></small>
                            </div>
                            <div
                              class="collapse"
                              uib-collapse="!vm.isOpen(registrationDetail)"
                              ng-click="$event.stopPropagation()"
                              aria-expanded="false"
                              aria-hidden="true"
                              style="height: 0px"
                            ></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="c8y-wizard-footer modal-footer">
                      <button
                        title="Complete"
                        class="btn btn-primary"
                        ng-click="vm.wizardCtrl.close()"
                        translate=""
                      >
                        Complete
                      </button>
                    </div>
                  </multiple-result-finish-step>
                </div>
              </div>
            </c8y-wizard-step>
          </steps>
        </div>
      </c8y-wizard>
    </device-registration-wizard>
    </div>
  </div>
</div>

```html
<device-registration-wizard
  resolve="$resolve"
  modal-instance="$uibModalInstance"
  close="$close($value)"
  dismiss="$dismiss($value)"
  class="ng-scope ng-isolate-scope"
  ><c8y-wizard
    class="register-devices ng-isolate-scope"
    on-dismiss="vm.modalInstance.dismiss()"
    on-close="vm.modalInstance.close()"
    initial-flow="['device-registration-selection']"
    is-dynamic-flow="false"
    ><div
      ng-show="wizardCtrl.requestInProgress"
      style="
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 999;
          "
      class="ng-hide"
    >
      &nbsp;
    </div>
    <div
      class="modal-header text-center ng-scope bg-primary"
      ng-if="wizardCtrl.hasTransclusionContents('header')"
      ng-class="wizardCtrl.getModalHeaderClass()"
    >
      <div ng-transclude="header">
        <header class="text-white ng-scope">
          <div style="font-size: 62px">
            <span class="c8y-icon c8y-icon-device-connect"></span>
          </div>
          <h4 class="text-uppercase" style="margin: 0; letter-spacing: 0.15em" translate="">
            Register devices
          </h4>
        </header>
      </div>
    </div>
    <div class="c8y-wizard-nav steps-navbar ng-scope" ng-if="wizardCtrl.getCurrentStep().label">
      <ul class="nav nav-tabs nav-justified">
        <li
          ng-repeat="step in wizardCtrl.getFlow()"
          role="presentation"
          ng-class="wizardCtrl.getStepClasses(step.stepId)"
          ng-if="step.label"
          ng-style="{ width: (100 / wizardCtrl.getFlow().length) + '%' }"
          class="ng-scope completed"
          style="width: 50%"
        >
          <a
            href=""
            ng-click="wizardCtrl.isStepCompleted(step.stepId) &amp;&amp; wizardCtrl.goTo(step.stepId)"
            title="Device info"
          >
            <span class="text-truncate ng-binding"> Device info </span>
          </a>
        </li>
        <li
          ng-repeat="step in wizardCtrl.getFlow()"
          role="presentation"
          ng-class="wizardCtrl.getStepClasses(step.stepId)"
          ng-if="step.label"
          ng-style="{ width: (100 / wizardCtrl.getFlow().length) + '%' }"
          class="ng-scope active"
          style="width: 50%"
        >
          <a
            href=""
            ng-click="wizardCtrl.isStepCompleted(step.stepId) &amp;&amp; wizardCtrl.goTo(step.stepId)"
            title="Registration"
          >
            <span class="text-truncate ng-binding"> Registration </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="c8y-wizard-content" ng-transclude="steps" style="height: 296px">
      <steps class="ng-scope">
        <c8y-wizard-step step-id="device-registration-selection" class="ng-isolate-scope"
          ><div class="c8y-wizard-panel" style=""></div>
        </c8y-wizard-step>
        <c8y-wizard-step
          step-id="finish"
          label="'Registration' | translate"
          class="ng-isolate-scope"
          ><div class="c8y-wizard-panel"></div>
        </c8y-wizard-step>
        <c8y-wizard-step
          step-id="multiple-finish"
          label="'Registration' | translate"
          class="ng-isolate-scope"
          ><div class="c8y-wizard-panel active" style="">
            <div
              ng-if="wizardCtrl.isStepActive(wizardCtrl.stepId)"
              ng-transclude=""
              class="ng-scope"
            >
              <multiple-result-finish-step class="ng-scope ng-isolate-scope">
                <div class="modal-inner-scroll" style="min-height: 215px">
                  <div class="modal-body">
                    <div
                      class="text-center ng-binding text-success"
                      ng-class="{'text-danger': vm.withFailures(), 'text-success': !vm.withFailures()}"
                    >
                      Device registered.
                    </div>
                    <div
                      class="text-center m-b-8 ng-scope"
                      ng-if="vm.withSuccess()"
                      translate=""
                    >
                      Turn on the registered device(s) and wait for connection(s) to be established.
                      Once a device is connected, its status will change to "Pending acceptance".
                      You have to approve it by clicking on the "accept" button.
                    </div>
                    <ul class="list-group">
                      <li
                        class="list-group-item d-flex ng-scope text-success"
                        ng-repeat="registrationDetail in vm.getMultipleResults()"
                        ng-class="{'text-danger': registrationDetail.status === 'FAILED', 'text-success': registrationDetail.status === 'SUCCESS', 'expanded': vm.isOpen(registrationDetail)}"
                        ng-click="vm.toggle(registrationDetail);"
                        ng-style="vm.getCursor(registrationDetail)"
                        style="cursor: default"
                      >
                        <div class="list-item-icon">
                          <i c8y-icon="check-circle" class="dlt-c8y-icon-check-circle"></i>
                        </div>
                        <div class="list-item-body">
                          <p class="ng-binding">d</p>
                          <small class="ng-binding"></small>
                        </div>
                        <div
                          class="collapse"
                          uib-collapse="!vm.isOpen(registrationDetail)"
                          ng-click="$event.stopPropagation()"
                          aria-expanded="false"
                          aria-hidden="true"
                          style="height: 0px"
                        ></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="c8y-wizard-footer modal-footer">
                  <button
                    title="Complete"
                    class="btn btn-primary"
                    ng-click="vm.wizardCtrl.close()"
                    translate=""
                  >
                    Complete
                  </button>
                </div>
              </multiple-result-finish-step>
            </div>
          </div>
        </c8y-wizard-step>
      </steps>
    </div>
  </c8y-wizard>
</device-registration-wizard>
```
