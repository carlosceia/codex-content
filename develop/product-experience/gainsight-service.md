---
title: Gainsight service
slug: gainsight-service
icon: wrench
apiDocs:
  - name: GainsightService
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

A service that allows you to easily integrate product experience tracking into your source code.

It can be applied to any component via Dependency Injection, triggering events when specific logic
is executed by calling `triggerEvent` method.

```js
@Component({
  selector: 'c8y-stepper-buttons',
  templateUrl: './stepper-buttons.component.html'
})
export class C8yStepperButtons {
  constructor(private gainsightService: GainsightService) {}

  next() {
    // method logic
    this.gainsightService.triggerEvent('clickStepperNextBtn', {
      component: 'C8yStepperButtons',
      action: `next`,
      step: '2',
      url: location.href
    });
  }
}
```
