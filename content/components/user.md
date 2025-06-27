---
title: User menu
slug: user-menu
icon: wrench
order: 440
apiDocs:
  - name: UserMenuService
    import: '@c8y/ngx-components'
---


Adds a user settings section to the right drawer enabling the user to set and edit several aspects of the UI and the account.

This is accomplished using the `UserMenuService` service.

## Configuration

```typescript
@Injectable()
export class ExampleUserMenu {
  // Inject the c8y UserMenuService
  constructor(private userMenu: UserMenuService, private alert: AlertService) {
    // add an item to the user menu
    this.userMenu.add({
      icon: 'notification',
      label: gettext('Notifications'),
      priority: 0,
      click: () => {
        this.onClick();
      }
    });
  }

  // method to be called when button in user menu is clicked
  private onClick() {
    this.alert.info(gettext('Notification button clicked.'));
  }
}
```

## Adding entries to the right drawer

After configuring, we can add the entry to the right drawer

```typescript
@NgModule({
  declarations: [],
  imports: [CoreModule],
  providers: [ExampleUserMenu]
})
export class UserMenuModule {
  // use dependency injection as otherwise ExampleUserMenu will never be instantiated
  constructor(private userMenu: ExampleUserMenu) {}
}
```
