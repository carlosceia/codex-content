---
title: Tag
slug: tag
icon: done
order: 420
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Tags highlight small pieces of information inline.

They are commonly used to display categories, filters, or selected options in a visually appealing and compact manner.

## Default tags

Add the `.tag` class to any `<span>` or `<div>` together with any of the modifier classes mentioned below to change the appearance of a inline label. Add the `.font-size-inherit` class to inherit the font size.

<codex-tutorial-example>
<h1>heading 1
<!-- important -->
<span class="tag tag--default">Default</span>
<!-- /important -->
</h1>
<br>
<h2>heading 2
<!-- important -->
<span class="tag tag--primary">Primary</span>
<!-- /important -->
</h2>
<br>
<h3>heading 3
<!-- important -->
<span class="tag tag--danger">Danger</span>
<!-- /important -->
</h3>
<br>
<h4>heading 4
<!-- important -->
<span class="tag tag--success font-size-inherit">Success</span>
<!-- /important -->
</h4>
<br>
<h5>heading 5
<!-- important -->
<span class="tag tag--warning">Warning</span>
<!-- /important -->
</h5>
<br>
<h6>heading 6
<!-- important -->
<span class="tag tag--info">Info</span>
<!-- /important -->
</h6>
</codex-tutorial-example>

## Tag chips

Tag chips are designed to be visually distinct and easy to interact with, making them a convenient and intuitive way to present and manage information in user interfaces. They contribute to a cleaner and more organized user experience, especially when dealing with lists, selections, and filtering.

When you have to make a tag actionable, for example, in filters used in the data grid component, add the `.chip` class to any `.tag` and provide a `button` to handle the interaction.

<codex-tutorial-example>
<span
  class="tag tag--default chip"
>
  Chip
</span>

<span
  class="tag tag--info chip"
>
  <button
    class="btn btn-xs btn-clean text-10 m-r-4"
    title="Filter chip"
    type="button"
  >
    <i c8yIcon="times"></i>
  </button>
  Filter chip
</span>
</codex-tutorial-example>
