---
title: Product experience directive
slug: product-experience-directive
icon: wrench
apiDocs:
  - name: ProductExperienceDirective
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

This is a directive that lets you easily integrate product experience tracking in your code.

It can be applied to any component or HTML element and trigger events when those elements are
clicked. Or you can implement more complex scenarios in your re-usable and/or business layer
components by using the features of a `ProductExperienceEventSource`.

### Simple HTML elements

When applied to HTML elements or components that do not implement any specific behavior as product
experience source (see below), the directive will emit a product experience event whenever a click
is executed on the element or bubbles up to that element/component. You must provide an action name
and can optionally provide any object as action data:

```html
<button
  title="Save"
  type="submit"
  c8yProductExperience
  [actionName]="'editWidget'"
  [actionData]="{ widgetName: widget.id }"
  class="btn btn-primary"
>
  Save
</button>
```

### Components implementing ProductExperienceEventSource

In situations where you want your component to emit product experience events on other triggers that
the `click` event, to emit events on multiple triggers or to add additional context data to its
events, you can implement the `ProductExperienceEventSource` interface:

```js
@Component({
  selector: 'c8y-stepper',
  templateUrl: './stepper.component.html',
  providers: [
    { provide: PRODUCT_EXPERIENCE_EVENT_SOURCE, useExisting: forwardRef(() => C8yStepper) }
  ]
})
export class C8yStepper implements ProductExperienceEventSource {
  productExperienceEvent: ProductExperienceEvent;
}
```

When the `c8yProductExperience` directive is applied to components implementing
`ProductExperienceEventSource` its default behavior of emitting product experience event on click is
suppressed. Instead you can control when such an event will be triggered:

```js
onNext() {
  this.triggerEvent('clickNextBtn');
}

private triggerEvent(action: string): void {
// you can add any additional context data to your events...
const eventData = {
    ...this.productExperienceEvent?.data,
    action,
    step: this.step.label
};
// ...provide a default action name...
const eventName = this.productExperienceEvent?.eventName || 'anyDefaultEventName';
// ... and then send the event to the PX platform.
this.gainsightService.triggerEvent(eventName, eventData);
}
```

### Inheriting data

When implementing more complex business or other re-usable components you may use other components
implementing ProductExperienceEventSource. To let you pass your event data down the path more
easily, `c8yProductExperience` supports inheriting data passed from parent components:

```js
@Component({
  selector: 'save-btn',
  template: `
    <button
      title="Save"
      type="submit"
      c8yProductExperience
      inherit
      [actionData]="{ action: 'Save' }"
    >
      Save
    </button>
  `,
  providers: [
    { provide: PRODUCT_EXPERIENCE_EVENT_SOURCE, useExisting: forwardRef(() => C8yStepper) }
  ]
})
export class SaveBtnComponent implements ProductExperienceEventSource {
  productExperienceEvent: ProductExperienceEvent;
}
```

In the example above, the `SaveBtnComponent` uses the `c8yProductExperience` directive in its
template. Instead of providing an action name it uses the `inherit` option so that the product
experience event from the `button` element will use the action name passed to `save-btn`. Moreover,
the event from the `button` element will extend all data provided higher in the component tree by
the `action` property.

### Options to control data overriding with inheritance enabled

#### `actionName` property

With `inherit` set to `true` the local `actionName` value is ignored and always overridden by the
parent component's `actionName`. This aims at and allows for easy re-use of core components, for example,
`<c8y-li-action>`, that would use the inherited action name rather than their generic action name.

#### `actionData` property

By default own `actionData` properties with the same name by default take precedence to those
inherited from the parent component. Provided you use inheritance in the following example:

```html
<operation-list
  c8yProductExperience
  [actionName]="'operationsOverview'"
  [actionData]="{
    component: 'pending-operations',
    context: 'example'
  }"
>
  [...]
  <c8y-li>
    [...]
    <c8y-li-action
      [...]
      c8yProductExperience
      inherit
      [actionData]="{
        component: 'c8y-li-action',
        operation: operation.id
      }"
    ></c8y-li-action>
  </c8y-li>
  [...]
</operation-list>
```

the `c8y-li-action` component will emit events looking like this:

```js
{
  eventName: 'operationsOverview',
  data: {
    component: 'c8y-li-action',
    context: 'example',
    operation: 541,
    [...]
  }
}
```

`c8y-li-action` inherits the `component` and `context` `actionData` properties from its parent
component `operation-list` but since it has an own value for `component` the inherited value
`'pending-operations'` gets overridden by its own value `'c8y-li-action'`.

There may be situations where you may want to change this default behavior and let your child
components specific `actionData` properties get replaced by the inherited values. You can change the
default behavior by using the `suppressDataOverriding` input. If set to `true` own `actionData`
properties would not override `actionData` properties of the parent component with the same name.
Instead, values will be inherited from the parent component. It is only effective if `inherit` is
set to `true`. If you add `suppressDataOverriding` to the following example:

```html
<operation-list
  c8yProductExperience
  [actionName]="'operationsOverview'"
  [actionData]="{
    component: 'pending-operations',
    context: 'example'
  }"
>
  [...]
  <c8y-li>
    [...]
    <c8y-li-action
      [...]
      c8yProductExperience
      inherit
      suppressDataOverriding
      [actionData]="{
        component: 'c8y-li-action',
        operation: operation.id
      }"
    ></c8y-li-action>
  </c8y-li>
  [...]
</operation-list>
```

the `c8y-li-action` component will emit events looking like this:

```js
{
  eventName: 'operationsOverview',
  data: {
    component: 'pending-operations',
    context: 'example',
    operation: 541,
    [...]
  }
}
```

`c8y-li-action` inherits the `component` and `context` `actionData` properties from its parent
component `operation-list` and its own value for `component` gets replaced by the inherited value
`'pending-operations'`.
