---
title: Date pipe
slug: date-pipe
icon: done
apiDocs:
  - name: DatePipe
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

This pipe formats a date value according to locale rules.

If no other format specified it defaults to `medium` used as standard date/time format.

It extends Angular's DatePipe in a way so that date values exceeding the range supported by
ECMAScript are displayed as the earliest/latest supported point in time, printed in the desired format
pre- or post-fixed by the word `before` or `after`, respectively.

In all other cases the pipe behaves as the standard (Angular built-in)
[DatePipe](https://angular.io/api/common/DatePipe).

<codex-tutorial-example [open]="true">

<p class="m-b-16">Date value provided as ISO string — <strong>{{ '2023-06-21T12:12:19.195Z' | c8yDate }}</strong></p>
<p class="m-b-16">Date value provided as number with no param — <strong>{{ 1687349556312 | c8yDate }}</strong></p>
<p class="m-b-16">Date value provided as number with format <code>short</code> — <strong>{{ 1687349556312 | c8yDate: 'short' }}</strong></p>
<p class="m-b-16">Date value provided as number with format <code>shortDate</code> — <strong>{{ 1687349556312 | c8yDate: 'shortDate' }}</strong></p>
<p class="m-b-16">Date value provided as number with format <code>fullDate</code> — <strong>{{ 1687349556312 | c8yDate: 'fullDate' }}</strong></p>
<p class="m-b-16">Date value provided as number with format <code>MMM d, y, h:mm:ss a</code> — <strong>{{ 1687349556312 | c8yDate: 'MMM d, y, h:mm:ss a' }}</strong></p>
</codex-tutorial-example>

> ### Note
>
> Hardcoded formats (like `MMM d, y, h:mm:ss a`) are not recommended ones because they ignore user's locale settings.
>
> Use pre-defined formats (like `short`, `longDate` etc) to make sure date is formatted according to user's locale settings.
