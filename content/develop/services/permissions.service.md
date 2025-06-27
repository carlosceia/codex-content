---
title: PermissionsService
icon: done
slug: PermissionsService
order: 10
apiDocs:
  - name: Permissions
    import: '@c8y/ngx-components'
---

The `Permissions` service is designed to verify the access rights of the current logged-in user, across various resources within the application, such as dashboards, files repository, or other manageable entities.

It leverages a `Role-Based Access Control (RBAC)` system to determine the permissions of a user based on their roles, ensuring that users can only interact with resources they are authorized to access or modify.
