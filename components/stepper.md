---
title: Stepper
slug: stepper
icon: done
order: 395
apiDocs:
  - name: C8yStepper
    import: '@c8y/ngx-components'
  - name: C8yStepperIcon
    import: '@c8y/ngx-components'
  - name: C8yStepperButtons
    import: '@c8y/ngx-components'
---

The `C8yStepper` component extends the foundational `CdkStepper` from [Angular's Component Development Kit (CDK)](https://material.angular.io/components/stepper/overview), allowing for the creation of a step-by-step interactive interface used for guiding users through a multi-step process, such as form completion.

By building upon the `CdkStepper`, `C8yStepper` inherits the ability to use `CDK-based` functionality and inputs, providing a robust framework for developers. Additionally, it offers the flexibility to modify both the behavior and the look and feel when using the `C8yStepper`, enabling the creation of customized and visually cohesive step-by-step interfaces within applications.

<codex-tutorial-example class="c8y-codex-override" iframeHeight="360"
[module]="'StepperModule'"
[sources]="[
'./packages/tutorial/src/stepper/device-stepper.component.html',
'./packages/tutorial/src/stepper/device-stepper.component.ts',
'./packages/tutorial/src/stepper/stepper.component.ts'
]"

> </codex-tutorial-example>

Here's a breakdown of the key parts of the example above:

- **Cumulocity Stepper**: The `<c8y-stepper>` component creates a stepper (wizard) layout. It can handle navigation between different steps, and you can customize its behavior and appearance. For instance, in the example, it uses the `onStepChange` event to handle step changes, `disableDefaultIcons` to control the visibility of default icons, and `customClasses` to apply custom CSS classes.

- **Custom Icons**: With `<ng-template c8yStepperIcon="final">`, you can customize the icons used in the stepper. In this case, a custom icon is defined for the final step.

- **Angular CDK Step**: The `<cdk-step>` elements represent the individual steps within the stepper. Each step can be controlled by an Angular form group (`[stepControl]="formGroupStepOne"`), which is useful for validation and managing the step's state. The `label` attribute (`label="Device name"`) sets the step's `label`.

- **Form Controls**: Inside each step, you can use form controls, such as `<input>` elements, for user input. The example shows a text input field bound to a form control named name within a form group called formGroupStepOne. Validation messages can be displayed using `<c8y-messages>` and `<c8y-message>` components.

- **Navigation Buttons**: The `<c8y-stepper-buttons>` component is used to insert default navigation buttons (like Next, Back) into each step, making it easier to navigate through the stepper.
