---
title: Textarea
slug: textarea
icon: done
order: 12
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The `<textarea>` is used for multiline text input, often for extensive descriptions.

## Default textarea

Consistent styling with other input fields is achieved by adding the `form-control` class. This
ensures a 100% width and prevents horizontal resizing. You can still customize the `rows` attribute
as necessary.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <form class="col-sm-6" autocomplete="off">
        <!-- important -->
        <textarea class="form-control" rows="6" placeholder="Add multiline text here…"></textarea>
        <!-- /important -->
      </form>
    </div>
  </div>
</codex-tutorial-example>

## Auto resize

Consider using the [TextareaAutoresize directive](#/develop/directives/text-autoresize-directive) by
adding the `c8y-textarea-autoresize` attribute for automatic vertical resizing based on content
size, instead of explicitly setting the height.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
       <form class="col-sm-6" autocomplete="off">
        <!-- important -->
        <textarea class="form-control no-resize" c8y-textarea-autoresize placeholder="Type some words, add a line break…"></textarea>
        <!-- /important -->
      </form>
    </div>
  </div>
</codex-tutorial-example>
