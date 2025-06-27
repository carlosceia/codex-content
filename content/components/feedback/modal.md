---
title: Modal
slug: modal
icon: done
order: 270
apiDocs:
  - name: ModalComponent
    import: '@c8y/ngx-components'
---

Modals are interactive dialog boxes that overlay the whole content.

They serve as a powerful and versatile tool for displaying focused information, forms, or additional
interactions without navigating away from the current page.

## Default modal

Modal creation is facilitated by the third-party library
[ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/components/modals?tab=overview) and its
`BsModalService`.

While modal body can be supplied as a custom template, the recommended approach is to use the
`c8y-modal` component. This can be achieved in two ways:

- Incorporate `c8y-modal` alongside `ng-template` to invoke `BsModalService.show` with the specified
  template.
- Implement `c8y-modal` within a separate component and invoke `BsModalService.show` with this
  component.

<codex-tutorial-example module="NgxModalExampleModule" iframeHeight="500"
[sources]="['./packages/tutorial/src/modal/ngx-modal/ngx-modal-example.component.ts',
'./packages/tutorial/src/modal/ngx-modal/simple-modal-example.component.ts'
]"></codex-tutorial-example>

The `c8y-modal` offers a range of features, including a customizable title, event bindings for
close and dismiss actions, customizable button labels, and so on.

When adopting the component approach, you can add an initial state corresponding to the
component class and obtain modal results asynchronously.

## Modal sizes and header

When using the `c8y-modal`component, the maximum height of the modal adjusts to the viewport.
Overflow content is managed by the component, ensuring the header and footer remain visible at all
times. Concerning width, there are three different sizes which you can set via the `BsModalService`:

- **Small** (`modal-sm`): 450px. Ideal for simple dialogs or short forms. When using this size,
  always set `[headerClasses] = "'dialog-header'"` in the `c8y-modal` and include an icon wrapped in a
  `<ng-container c8y-modal-title>`.

- **Medium** (`modal-md`): The default size. Approximately 600px wide, without any specified `headerClasses`.

- **Large** (`modal-lg`): 900px, without any specified `headerClasses`.

<codex-tutorial-example module="NgxModalSizesExampleModule" iframeHeight="500"
[sources]="['./packages/tutorial/src/modal/ngx-modal-sizes/ngx-modal-sizes-example.component.ts',
'./packages/tutorial/src/modal/ngx-modal-sizes/small-modal-example.component.ts'
]"></codex-tutorial-example>

## Customizable modal with content projection

For more complex modals, use content projection selectors such as `c8y-modal-title`,
`c8y-modal-body`. If you must override the default modal footer, set the input property
`[customFooter]="true"` and provide the custom footer with `c8y-modal-footer-custom`.

<codex-tutorial-example module="NgxModalSelectorsExampleModule"
[sources]="['./packages/tutorial/src/modal/ngx-modal-selectors/ngx-modal-selectors-example.component.ts',
'./packages/tutorial/src/modal/ngx-modal-selectors/simple-modal-example-with-content-selectors.component.ts'
]"></codex-tutorial-example>

## Confirmation modal

A confirmation modal, also known as a dialog prompt, is a notification that prompts users to take a
specific action before proceeding. Typically, these prompts are used to confirm potentially
destructive operations or to inform users about upcoming maintenance activities.

There are two ways to display a confirmation modal:

- Using `BsModalService.show` with a component that employs `c8y-confirm-modal`. This component
   is taylored for deleting groups and/or devices. It features a "Delete" title and a
   checkbox option for deleting devices and their subassets.

- Using `ModalService.confirm` for all other needs.

Furthermore, the component allows for custom behavior on user actions when users click the **Delete**
or **Cancel** buttons through the `onClose()` and `onDismiss()` methods, respectively.

<codex-tutorial-example module="ConfirmModalExampleModule" iframeHeight="500"
[sources]="['./packages/tutorial/src/modal/confirm-modal/confirm-modal-example.component.ts',
'./packages/tutorial/src/modal/confirm-modal/delete-modal-example.component.ts']"></codex-tutorial-example>

## Accessibility

The `aria-labelledby` and `aria-describedby` attributes establish connections between the modal and
its title. By default, the modal title is assigned with the `modal-title` ID and the modal body has the
`modal-body` id. Typically, it is sufficient to set these ids in the `BsModalService` options.

However, if you are using multiple modals simultaneously, it is essential to customize IDs for both
the title and the content to ensure accessibility compliance. Assign these IDs within the
`c8y-modal` component using content projection selectors and provide them in the `BsModalService`
options.

<codex-tutorial-example module="NgxModalAccessibilityExampleModule" iframeHeight="500"
[sources]="['./packages/tutorial/src/modal/ngx-modal-accessibility/ngx-modal-accessibility-example.component.ts',
'./packages/tutorial/src/modal/ngx-modal-accessibility/simple-modal-accessibility-example.component.ts'
]"></codex-tutorial-example>
