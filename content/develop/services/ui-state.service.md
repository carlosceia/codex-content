---
title: AppStateService
slug: AppStateService
icon: done
order: 10
apiDocs:
  - name: AppStateService
    import: '@c8y/ngx-components'
---


The `AppStateService` can be used to access the current application state.

As `Observables` and/or `BehaviorSubjects` are used for most attributes, it also allows you to
listen for changes of these states. In case of `BehaviorSubjects` you can apply changes
across the application.

This service is useful for scenarios where real-time updates are important. For example, you can easily retrieve the current user's information in your application using the `currentUser` property. Similarly, details about the tenant and application can be obtained using `currentTenant` and `currentApplication`.

```ts
import { AppStateService } from '@c8y/ngx-components';
import { first, filter } from 'rxjs/operators';

export class SampleClass {
  constructor(private appState: AppStateService) {
    this.appState.currentUser.pipe(
      filter(user => !!user),
      first()
    );
  }
}
```
