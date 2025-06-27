---
title: User name initials pipe
slug: user-name-initials-pipe
icon: done
apiDocs:
  - name: UserNameInitialsPipe
    import: '@c8y/ngx-components'
  - name: ShortenUserNamePipe
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Transforms `User` object to string of user's initials.

<codex-tutorial-example [open]="true">
<p class="m-b-16">John Smith initials are <strong>{{ { lastName: 'Smith', firstName: 'John' } | userNameInitials}}</strong></p>
<p class="m-b-16">User with "JohSmith" userName only initial is <strong>{{ { userName: 'JohSmith' } | userNameInitials}}</strong></p>
</codex-tutorial-example>

## Shorten user name pipe

Transforms user first and last name to initial of first name and full last name.

<codex-tutorial-example [open]="true">
<p class="m-b-16">John Smith shortened name is <strong>{{ { lastName: 'Smith', firstName: 'John' } | shortenUserName}}</strong></p>
<p class="m-b-16">The abbreviated user name having only userName: "JohnSmith" is <strong>{{ { userName: 'JohnSmith' } | shortenUserName}}</strong></p>
</codex-tutorial-example>
