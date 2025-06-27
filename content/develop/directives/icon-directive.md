---
title: Icon directive
slug: icon-directive
icon: done
apiDocs:
  - name: IconDirective
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD051 -->

`IconDirective` is a directive that sets icon classes based on the provided input. This directive simplifies the process of adding icons and ensures consistency in the use of icon classes.

```ts
  <i [c8yIcon]="'c8y-cockpit'"></i>
```

This creates an icon element with the classes: `c8y-icon c8y-icon-cockpit`.

```ts
  <i [c8yIcon]="'download'"></i>
```
You can also create an icon element with the classes: `c8y-icon dlt-c8y-icon-download`.

For more details, refer to [Icons](#/icons/icons/overview#icon-directive).
