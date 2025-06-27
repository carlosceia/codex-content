---
title: UserPreferencesService
icon: done
slug: UserPreferencesService
order: 10
apiDocs:
  - name: UserPreferencesService
    import: '@c8y/ngx-components'
---

The `UserPreferencesService` are used to store the individual user preferences.

You can use the user preferences to store any type of data, for example, in the default applications, this service is used to store the user's preferred language.

Depending on the user's permissions, the settings are either stored in the user object or in the
browser's local storage. If the settings are stored within the user, these settings apply on all
machines the user is logging into.

```ts
import { firstValueFrom } from 'rxjs';
import { IUser } from '@c8y/client';
import { UserPreferencesService } from '@c8y/ngx-components';

export class SampleClass {
  constructor(private userPreferencesService: UserPreferencesService) {}

  // get a preference for a current user
  async getPreference(key: string): Promise<any> {
    return await firstValueFrom(this.userPreferencesService.get(key));
  }

  // set a preference for a current user
  async setPreference(key: string, value: any): Promise<void> {
    await this.userPreferencesService.set(key, value);
  }

  // observe changes to a specific preference
  observePreferenceValueChanges(key: string) {
    this.userPreferencesService.observe<string>(key).subscribe(preferenceValue => {
      // use preferenceValue as needed
    });
  }
}
```
