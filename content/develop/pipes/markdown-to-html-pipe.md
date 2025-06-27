---
title: Markdown to HTML pipe
slug: markdown-to-html-pipe
icon: done
apiDocs:
  - name: MarkdownToHtmlPipe
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

This pipe converts markdown syntax into HTML code and sanitizes it.

<codex-tutorial-example [open]="true">
<div [innerHTML]="'[Example markdown link](#)' | markdownToHtml | async"></div>
<div [innerHTML]="'Sanitized markdown with script tag<script>alert(1)</script>' | markdownToHtml | async"></div>
</codex-tutorial-example>
