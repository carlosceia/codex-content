---
title: Breadcrumb
icon: done
slug: breadcrumb
aorder: 10
order: 60
apiDocs:
  - name: BreadcrumbModule
    import: '@c8y/ngx-components/breadcrumb'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

A breadcrumb indicates the hierarchy path of the current page or device. They also helps users
situate themselves in the application.

When displaying device detail pages, shows all possible paths for the device under a collapsible
container.

By default, breadcrumbs in `groups`, `assets`, and `devices` are disabled through `breadcrumbs` option in [ApplicationOptions](#/getting-started/guides/theming/overview#application-options) due to some limitations in the current implementation:

- Performance: When a device has many parents, showing the full hierarchy would slow down certain views.
- Usability: Breadcrumbs can't always show the correct parent based on user navigation, causing confusion.

## Creating Breadcrumbs

To offer some flexibility in breadcrumb implementation, there are two recommended methods:

- Using `hookBreadcrumb`: As detailed in the [hooks section](#/develop/hooks/breadcrumbs/overview).
- Direct `HTML Template` addition: This method involves manually adding `breadcrumb` within the HTML template.

By considering these methods, select the most appropriate breadcrumb implementation strategy.

## Default breadcrumb

To create a basic breadcrumb, you have to wrap `c8y-breadcrumb-item` with `c8y-breadcrumb`.

In the following example, the first breadcrumb uses two attributes, `label` and `icon`. The second breadcrumb has a `path` attribute that allows navigation to the `breadcrumbs-expand` example.

<codex-tutorial-example iframeHeight="200" module="BreadcrumbsExampleModule"
[sources]=['./packages/tutorial/src/breadcrumbs/basic-example/breadcrumbs-example.component.ts','./packages/tutorial/src/breadcrumbs/basic-example/breadcrumbs-example.component.html']></codex-tutorial-example>

> ### Note
>
> Only the first breadcrumb level displays an icon.

## Expandable breadcrumb

To create an expandable breadcrumb, you have to wrap each `c8y-breadcrumb-item` in a separate `c8y-breadcrumb`, as shown in the example.

<codex-tutorial-example iframeHeight="200" module="BreadcrumbsExpandExampleModule"
[sources]=['./packages/tutorial/src/breadcrumbs/expand-example/breadcrumbs-expand-example.component.ts','packages/tutorial/src/breadcrumbs/expand-example/breadcrumbs-expand-example.component.html']></codex-tutorial-example>

## Breadcrumb with content projection

To project your content into breadcrumbs, you have to add it between the opening and closing tags of the `c8y-breadcrumb-item` and wrap it with `c8y-breadcrumb`.

In the following example, the second breadcrumb displays both the projected value and the label.

<codex-tutorial-example iframeHeight="200" module="BreadcrumbsContentProjectionExampleModule"
[sources]=['packages/tutorial/src/breadcrumbs/content-projection/breadcrumbs-content-projection-example.component.ts','packages/tutorial/src/breadcrumbs/content-projection/breadcrumbs-content-projection-example.component.html']></codex-tutorial-example>

## Breadcrumb outlet

By default, the breadcrumb outlet is placed under the page `title` section. To display it, use `c8y-breadcrumb-outlet` component.

Breadcrumbs outlet expects list of the breadcrumbs provided via its input property called: `breadcrumbs`. In most cases you can just simply use breadcrumbService to provide them, but if there is a need you can pass your own list.

<codex-tutorial-example iframeHeight="200" module="BreadcrumbsOutletExampleModule"
[sources]=['./packages/tutorial/src/breadcrumbs/outlet/breadcrumbs-outlet-example.component.ts','./packages/tutorial/src/breadcrumbs/outlet/breadcrumbs-outlet-example.component.html']></codex-tutorial-example>
