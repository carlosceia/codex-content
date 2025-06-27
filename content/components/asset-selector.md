---
title: Asset selector
slug: asset-selector
icon: done
order: 30
apiDocs:
  - name: AssetSelectorComponent
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The Asset selector is a powerful component that offers a user-friendly interface for selecting
assets within your application.

With various customization options for display and behavior, it provides a seamless asset selection
experience.

## Main properties

The Asset selector has four properties that play crucial roles in its functionality:

- `model`: Provides the inventory list used to populate the component.
- `config`: Allows you to customize the behavior and appearance.
- `asset`: Specifies the asset were the hierarchy starts. It is an optional property that lets
  you set a starting point within the asset hierarchy.
- `onSelected` event handler: Defines a function that is called whenever a user makes a
  selection in the Asset selector.
- `isNodeSelectable`: Function or a boolean. Allows customization of selection behaviour.

## Configuration options

| option                    | type            | default    | description                    |
| ------------------------- | --------------- | ---------- | ------------------------------ |
| `groupsOnly`              | `boolean`       | `false`    | Enable this option to restrict asset selection to groups only, ignoring individual assets. |
| `groupsSelectable`        | `boolean`       | `false`    | Setting this option to `false` restricts the selection to devices |
| `label`                   | `string`        | `'Asset selection'`| By default, the component is labeled as "Asset selection", however, you can customize it or set it as an empty string to hide it. |
| `modelMode`               | `string`        | `'simple'` | Choose between two possible values: `'simple'` and `'full'`. When set to `'simple'`, the result will only contain the IDs and names of the selected assets. In `'full'` mode, all relevant details are included. |
| `multi`                   | `boolean`       | `false`    | Decide whether the user can select a single asset or multiple assets simultaneously. |
| `required`                | `boolean`       | `false`    | This option makes the asset selection mandatory on a form, ensuring that users make a selection before proceeding. |
| `search`                  | `boolean`       | `false`    | Add a search field to the asset selector, enabling users to quickly find the desired assets. |
| `showChildDevices`        | `boolean`       | `false`    | Enable this option to display child devices along with their parent assets. |
| `showUnassignedDevices`   | `boolean`       | `false`    | Display unassigned devices (devices not assigned to any group) to facilitate their selection when needed. |
| `columnHeaders`           | `boolean`       | `false`    | Available only on the Miller columns, displays a header in each column |
| `showFilter`              | `boolean`       | `false`    | Available only on the Miller columns, allow users to apply a filter to narrow down the assets displayed within a column, making it easier to locate and select desired asset |
| `singleColumn`            | `boolean`       | `false`    | Available only on the Miller columns, displays one column at a time, useful for when there are space constraints |
| `view`            | `'tree' \| 'miller'`       | `'tree'`    | Set the view of the asset selector |

Regarding display options, there are two choices:

1. [Hierarchy tree](#/components/asset-selector/overview#hierarchy-tree): This option presents
   assets in a collapsible tree structure. Users can easily expand or collapse tree nodes to
   navigate through the hierarchy and select assets.

2. [Miller columns](#/components/asset-selector/overview#miller-columns): Miller columns are a
   visualization technique that enhances tree structures. With multiple open levels of the hierarchy
   at once, users can conveniently navigate through the structure and make asset selections.

## Hierarchy tree

The Hierarchy tree is a widely used abstract data type that accurately simulates a hierarchical tree
structure. It consists of a root value and subtrees of children with a parent node, forming a set of
linked nodes. This representation makes it intuitive for users to explore the hierarchy and make
asset selections.

<codex-tutorial-example class="c8y-codex-override" [module]="'AssetSelectorTreeExampleModule'" iframeHeight="498"
[sources]="['./packages/tutorial/src/selector/asset-selector-example/tree-options/asset-selector-tree-example.component.ts']"></codex-tutorial-example>

## Miller columns

Miller columns, also referred to as cascading lists, are a powerful visualization technique
applicable to tree structures. By allowing multiple levels of the hierarchy to remain open
simultaneously, users can effortlessly explore the asset hierarchy and make their selections. The
columns provide a clear visual representation of the current location within the hierarchy.

In addition to the default config options, the Miller columns offer two extra options:

- **Column filter**: `showFilter: boolean`. Users can apply a filter to narrow down the assets displayed within a column, making it easier to
  locate and select desired asset.
- **Single column**: `singleColumn: boolean`. Displays one column at a time, useful for when there are space constraints.

<codex-tutorial-example  class="c8y-codex-override" [module]="'AssetSelectorMillerExampleModule'" iframeHeight="611"
[sources]="['./packages/tutorial/src/selector/asset-selector-example/miller-columns-options/asset-selector-miller-example.component.ts']"></codex-tutorial-example>


## Different root node

When displaying the hierarchy, you have to start at a particular level, for that you set the
root node to something other than the root level, ensuring that asset selection occurs only within
that particular level.

<codex-tutorial-example  class="c8y-codex-override" [module]="'AssetSelectorDifferentRootModule'"
[sources]="['./packages/tutorial/src/selector/asset-selector-example/different-root/asset-selector-different-root.component.ts']"></codex-tutorial-example>


## Node selectable customization

This function takes a node as an argument and returns a boolean indicating whether the node is selectable. For example, you can use this function to make only assets of a specific type selectable, or to make no assets selectable at all. The default behaviour is that all assets are selectable. Note that the property can also take a boolean value instead of a function. E.g. if you want to disable all checkboxes.

In the example below we allow only the selection of assets of type "building".

<codex-tutorial-example  class="c8y-codex-override" [module]="'AssetSelectorNodeSelectableExampleModule'"
[sources]="['./packages/tutorial/src/selector/asset-selector-example/node-selectable/asset-selector-node-selectable.component.ts']"></codex-tutorial-example>