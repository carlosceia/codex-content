---
title: Outlet directive
slug: outlet-directive
icon: done
apiDocs:
  - name: OutletDirective
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Directive to set a `DOM node`, a `TemplateRef` or any `Component` to a container or any node.

<codex-tutorial-example [open]="true">
<ng-template #exampleTemplate>
  <span>This is span element from <strong>ng-template</strong> with template variable assigned to it.</span>
</ng-template>

<div *c8yOutlet="exampleTemplate"></div>
</codex-tutorial-example>

> ### Notes
>
> - If the template is an instance of HTMLElement (for example, node compiled by angularJS) then, there can be only single instance rendered, since only one instance of HTMLElement can exist in DOM.
> - If there's a need to display the same element multiple times, make sure to inject into this element createCopy function, which returns another instance of the given element.
