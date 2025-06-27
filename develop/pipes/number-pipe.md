---
title: Number pipe
slug: number-pipe
icon: done
apiDocs:
  - name: NumberPipe
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Formats a value according to digit options and locale rules.

Extends the behavior of Angular's
[DecimalPipe](https://angular.io/api/common/DecimalPipe) by providing an option to define if a
truncated value is rounded up or down. Using the `number` pipe the value will be rounded using
the "to-nearest" method.

<codex-tutorial-example [open]="true">
<p class="m-b-16"><em>3.45612</em> transformed with params <code>'ceil':'1.1-3'</code> — <strong>{{ 3.45612 | c8yNumber: 'ceil':'1.1-3' }}</strong></p>
<p class="m-b-16"><em>3.46</em> transformed with params <code>'ceil':'1.3-3'</code> — <strong>{{ 3.46 | c8yNumber: 'ceil':'1.3-3' }}</strong></p>
<p class="m-b-16"><em>3.45685</em> transformed with params <code>'floor':'1.1-3'</code> — <strong>{{ 3.45685 | c8yNumber: 'floor':'1.1-3' }}</strong></p>
</codex-tutorial-example>
