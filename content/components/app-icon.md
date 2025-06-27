---
title: Application icon
slug: app-icon
icon: done
order: 20
apiDocs:
  - name: AppIconComponent
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The application icon component dynamically displays application icons, allowing for customization and
conditional rendering based on input properties.

To utilize the `c8y-app-icon` component for rendering an application icon, consider the following
options:

- **Default icon:** In cases where an icon is not provided but the application's `contextPath`
  matches one of the following default Cumulocity applications:
    - `analyticsbuilder`,
    - `analytics-builder`,
    - `cockpit`,
    - `devicemanagement`,
    - `administration`, or
    - `apamaepl`


  The component renders the default icon associated with that application. There are two different options for default icons:
- **Custom icon**: To set a custom icon, input the desired icon into the icon field within the
  `ApplicationOptions`. You can use the icons from the `c8y-icon-*` or `dlt-c8y-icon-*` collections.
- Fallback icon: If no icon is provided and the application's `contextPath` does not correspond
  to any default Cumulocity applications, the component generates an icon based on the
  application name's first two letters.

To set the icon size, use the [icon size utility classes](#/icons/icons/overview#icon-sizes).

<codex-tutorial-example class="c8y-codex-override" [module]="'AppIconExampleModule'" iframeHeight="352"
[sources]="['./packages/tutorial/src/app-icon/app-icon-example.component.ts','./packages/tutorial/src/app-icon/app-icon-example.component.html']"></codex-tutorial-example>

> ### Note
>
> `ApplicationOptions` can be set in the `cumulocity.config.ts` > `runTime` entry.
