---
title: Humanize pipe
slug: humanize-pipe
icon: done
apiDocs:
  - name: HumanizePipe
    import: '@c8y/ngx-components'
  - name: HumanizeAppNamePipe
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

You can humanize any string by following the example below:

<codex-tutorial-example [open]="true">
  <p class="m-b-16">Humanized "c8y_hello world" — <strong>{{ 'c8y_hello world' | humanize }}</strong></p>
  <p class="m-b-16">Humanized "' Hello \n world '" — <strong>{{ 'c8y_hello world' | humanize }}</strong></p>
</codex-tutorial-example>

## Humanize the application name pipe usage

To humanize and to translate an application name use the `async` pipe.

<codex-tutorial-example [open]="true">
  <p class="m-b-16">Humanized app name from string — <strong>{{ 'administration' | humanizeAppName | async }}</strong></p>
  <p class="m-b-16">Humanized app name from object — <strong>{{ { name: 'administration' } | humanizeAppName | async }}</strong></p>
</codex-tutorial-example>
