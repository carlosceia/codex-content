---
title: Bytes pipe
slug: bytes-pipe
icon: done
apiDocs:
  - name: BytesPipe
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

This pipe converts the file size to a readable format.

Default precision is set to 1 decimal place. To change the precision, pass an additional argument to
pipe.
By default, the pipe uses the decimal system (1000 bytes = 1 KB). To use the binary system (1024 bytes = 1 KiB), pass the second argument as `true`.

<codex-tutorial-example [open]="true">
<p class="m-b-16">5 transforms to {{ 5 | bytes }}</p>
<p class="m-b-16">1000 transforms to {{ 1000 | bytes }}</p>
<p class="m-b-16">1234567 transforms to {{ 1_234_567 | bytes }}</p>
<p class="m-b-16">1234567 with parameter 3 transforms to {{ 1_234_567 | bytes: 3}}</p>
<p class="m-b-16">2560 with precision parameter 1 transforms to {{ 2560 | bytes: 1}}</p>
<p class="m-b-16">2560 with precision parameter 1 and binary true transforms to {{ 2560 | bytes: 1: true}}</p>
<p class="m-b-16">2560 with precision parameter 1 and binary true provided as object transforms to {{ 2560 | bytes:{ precision: 1, binary: true } }}</p>
</codex-tutorial-example>
