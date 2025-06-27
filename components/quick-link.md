---
title: Quick link
slug: quick-link
icon: wrench
order: 340
apiDocs:
  - name: QuickLinkComponent
    import: '@c8y/ngx-components'
---


Quick links are displayed as cards with a corresponding icon and label, and used in combination with `button` and `*ngFor` directive.

The `quickLinks` property is an array that can be populated with custom or predefined link objects.

In this example, a single link is fetched from `DocsService` and object is created for the `User guide`.

<div>
<codex-tutorial-example module="QuickLinkExampleModule" [sources]="['./packages/tutorial/src/quick-link/quick-link-example.component.ts']"></codex-tutorial-example>
</div>
