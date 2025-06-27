---
title: File icon pipe
slug: file-icon-pipe
icon: done
apiDocs:
  - name: GenericFileIconPipe
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Extracts extension from provided file object and matches icon that fits its generic type.

If no icon for extracted extension is found, pipe returns fallback icon.

<codex-tutorial-example [open]="true">
<p class="m-b-16">
  Icon for "example.zip" file <i [c8yIcon]="{name: 'example.zip'} | fileIcon" class="icon-20 m-l-8"></i>
</p>
<p class="m-b-16">
  Icon for "screenshot2.jpg" file <i [c8yIcon]="{name: 'screenshot2.jpg'} | fileIcon" class="icon-20 m-l-8"></i>
</p>
<p class="m-b-16">
  Icon for "document.pdf" file <i [c8yIcon]="{name: 'document.pdf'} | fileIcon" class="icon-20 m-l-8"></i>
</p>
<p class="m-b-16">
  Icon for "recording.3gp" file <i [c8yIcon]="{name: 'recording.3gp'} | fileIcon" class="icon-20 m-l-8"></i>
</p>
<p class="m-b-16">
  Icon for "document.docx" file <i [c8yIcon]="{name: 'document.docx'} | fileIcon" class="icon-20 m-l-8"></i>
</p>
<p class="m-b-16">
  Icon for "document.xls" file <i [c8yIcon]="{name: 'document.xls'} | fileIcon" class="icon-20 m-l-8"></i>
</p>
<p class="m-b-16">
  Fallback icon for "document.unknownExt" file with unknown extension <i [c8yIcon]="{name: 'document.unknownExt'} | fileIcon" class="icon-20 m-l-8"></i>
</p>
</codex-tutorial-example>
