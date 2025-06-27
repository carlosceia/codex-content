---
title: Extendable input list
slug: extendable-input-list
order: 85
icon: done
apiDocs:
  - name: InputGroupListComponent
    import: '@c8y/ngx-components'
---


The extendable input list component provides a powerful way to create dynamic lists of inputs.

Each `form-control` is wrapped in a `input-group` with buttons to effortlessly add or remove input
groups from the list.

Only the last item displays the add button, others show only the remove button.

<codex-tutorial-example module="ExtendableInputListExampleModule"
[sources]="['./packages/tutorial/src/input-group/extendable-input-list-example.component.ts']"></codex-tutorial-example>
