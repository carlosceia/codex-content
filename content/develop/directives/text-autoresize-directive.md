---
title: Text autoresize directive
slug: text-autoresize-directive
icon: done
apiDocs:
  - name: TextareaAutoresizeDirective
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Monitors input text changes in a `textarea`, dynamically adjusting the `textarea` height to accommodate
the input text.

For optimal usage, pair it with a `textarea` where resizing is disabled, such as by applying  
the `.no-resize` class.

<codex-tutorial-example [open]="true">
<!-- important -->
<label>Simple textarea with <code>c8y-textarea-autoresize</code> directive</label>
<textarea class="form-control" c8y-textarea-autoresize></textarea>
<!-- -->
<label class="m-t-16">Textarea with <code>no-resize</code> class</label>
<textarea class="form-control no-resize" c8y-textarea-autoresize></textarea>
<!-- -->
<label class="m-t-16">Text area with a maximum height of 100px</label>
<textarea class="form-control no-resize" c8y-textarea-autoresize style="max-height: 100px !important"></textarea>
<!-- /important -->
</codex-tutorial-example>
