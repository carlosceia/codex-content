---
title: Dynamic forms
slug: dynamic-forms
icon: done
order: 110
apiDocs:
  - name: FormsModule
    import: '@c8y/ngx-components'
---

Create dynamic and versatile forms that adapt to your users needs using JSON.

Dynamic forms simplify form creation by allowing programmers to define form structures and behaviors through code, streamlining the process and enabling focus on core application logic. This approach reduces code verbosity, improving code maintainability and readability. Unlike static forms, which struggle with dynamic data or diverse user inputs, dynamic forms excel in adapting to changing requirements by generating forms dynamically based on data models. This flexibility enables developers to modify form fields dynamically without the need for extensive HTML template rewriting.

## Formly Schema

Cumulocity employs [Formly](https://formly.dev/) as the framework for crafting dynamic forms. Formly streamlines the creation of complex, dynamic forms within Angular applications. With a declarative approach, developers can define form fields and their configurations effortlessly using JSON objects.

The following example demonstrates how to use Formly Schema to create dynamic forms. This example will showcase the declarative nature of Formly, allowing us to define form fields and their configurations using a JSON-based schema.

<codex-tutorial-example module="IntroductionExampleModule"
[sources]="['./packages/tutorial/src/dynamic-forms/introduction-example/introduction-example.component.ts']"></codex-tutorial-example>

## JSON Schema

This example demonstrates the use of the `formly-form` component to seamlessly generate a form according to a JSON schema.

In order to use JSON Schema, Cumulocity provides `C8yJSONSchema` service that let you convert JSON Schema to Formly Field Config.

Through the `FormlyFieldConfig` array, the form fields are dynamically rendered based on the specified JSON schema. This schema succinctly defines a range of input fields including simple text inputs, required text inputs, radio button groups, checkboxes, lists of items, passwords, and file uploads, thereby demonstrating versatility and adaptability in constructing complex and diverse forms effortlessly.

The example also shows how to take advantage of the `toFieldConfig` method `options` argument and provide `map` function to intercept the mapping, taking the already mapped `formly-field` and the original JSONSchema source from which it was mapped.

<codex-tutorial-example module="JsonSchemaExampleModule"
[sources]="['./packages/tutorial/src/dynamic-forms/json-schema-example/json-schema-example.component.html',
'./packages/tutorial/src/dynamic-forms/json-schema-example/json-schema-example.component.ts']"></codex-tutorial-example>

## Custom element schema

If you require a more tailored input for your form, dynamic forms offer the flexibility to define and integrate your own custom input fields seamlessly.

To accomplish this, simply create your custom component to serve as the field type.
This component must extend the `FieldType` class. Subsequently, register it as a field type by providing it as a partial configuration using the `FORMLY_CONFIG` injection token.

<codex-tutorial-example module="CustomElementExampleModule"
[sources]="['./packages/tutorial/src/dynamic-forms/custom-element-example/custom-element-example.component.ts', './packages/tutorial/src/dynamic-forms/custom-element-example/types/checkbox/checkbox.type.component.ts', './packages/tutorial/src/dynamic-forms/custom-element-example/types/checkbox/checkbox.type.component.html', './packages/tutorial/src/dynamic-forms/custom-element-example/custom-element-example.module.ts']"></codex-tutorial-example>

## Form validation

Formly provides various validation options that you can leverage:

- **Built-in Validators**: Formly provides a set of built-in validators such as `required`, `minLength`, `maxLength`, `pattern`, and more. These validators can be easily applied to form fields to enforce specific validation rules.

- **Custom Validators**: You can define custom validators to meet the specific validation requirements of your application. Custom validators are functions that take a form control as input and return either null if the control is valid, or an error object if the control is invalid.

- **Validation Messages**: Formly allows you to define custom error messages for each validator. These messages are displayed to the user when a validation error occurs, providing clear feedback on how to correct the input.

- **Async Validators**: Formly supports asynchronous validators, which are useful for performing validation tasks that involve asynchronous operations such as HTTP requests. Async validators are functions that return a `Promise` or `Observable`, indicating whether the validation passed or failed.

- **Global Validation Configuration**: Formly allows you to configure global validation settings for all form fields, such as the default error message, error message interpolation, and error message wrapper.

- **Validation Expressions**: Formly supports validation expressions, which are JavaScript expressions that are evaluated against the form control's value to determine its validity. Validation expressions offer a flexible way to define complex validation rules directly in the form field configuration.

<codex-tutorial-example module="ValidationExampleModule"
[sources]="['./packages/tutorial/src/dynamic-forms/validation-example/validation-example.component.ts',
'./packages/tutorial/src/dynamic-forms/validation-example/validation-example.module.ts']"></codex-tutorial-example>
