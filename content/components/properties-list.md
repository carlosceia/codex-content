---
title: Properties list
slug: properties-list
icon: done
order: 320
apiDocs:
  - name: PropertiesListComponent
    import: '@c8y/ngx-components'
---

The `c8y-properties-list` component is used to render a list of properties of an object.

Here are two use examples:

1. `CUSTOM OBJECT`: This example demonstrates how to display properties of type: `array`, `boolean`, `number`, `string`, `null`, `undefined` and how the component handles them.

2. `TYPED OBJECT`: This one shows how to use an `IManifest` typed object. This scenario is particularly relevant for applications that deal with more structured data, where each property adheres to a predefined type.

3. `CUSTOM OBJECT NO PARSE`: This example shows a specialized use case of the properties list, where the automatic parsing and resolution of property types and values are intentionally bypassed by setting the noParse property to true. This scenario is useful in situations where developers require full control over how the data is presented, without any interference from the component's built-in parsing logic.

<codex-tutorial-example
    module="PropertiesListExampleModule"
    [sources]="[
      'packages/tutorial/src/properties-list/properties-list-example.component.ts',
      'packages/tutorial/src/properties-list/properties-list-example.component.html'
      ]">
</codex-tutorial-example>
