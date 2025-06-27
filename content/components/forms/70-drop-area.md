---
title: Drop area
slug: drop-area
icon: done
order: 70
apiDocs:
  - name: DropAreaModule
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The `drop area` component offers a streamlined alternative to the traditional file selector, enhancing user experience when dealing with file uploads.

It enables users to effortlessly select one or more files from their local file system. This can be achieved through either the familiar native file browsing method or an intuitive drag-and-drop interaction.

## Default size

This configuration is ideal when you have ample space available and a single `c8y-drop-area`
component is visible. By default, the component presents a square shape, with its height aligning
with its width.

However, if there is a need to constrain its height to prevent excessive size,
you have to set a limit to its width (for example, `style="max-width: 300px"`).

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
<!-- important -->
<c8y-drop-area (dropped)="uploadFile($event)" [icon]="'upload'" class="m-auto" style="max-width: 300px">
</c8y-drop-area>
<!-- /important -->
  </div>
</codex-tutorial-example>

## Compact Sizing

When integrating the drop area component with record lists, list-groups, or when multiple `c8y-drop-area` components are in use, the compact sizing option provides a more space-efficient solution.

To achieve this, simply append the `.drop-area-sm` class to the `c8y-drop-area` element.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <!-- important -->
    <c8y-drop-area class="drop-area-sm" (dropped)="uploadFile($event)" [icon]="'upload'">
    </c8y-drop-area>
    <!-- /important -->
  </div>
</codex-tutorial-example>
