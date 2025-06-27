---
title: Guide
slug: guide
icon: done
pageOrder: 10
---

A hook is the preferred method to "hook into" a Web SDK based application, leveraging the [multiple providers concept](https://angular.io/api/core/ClassProvider#properties) from Angular to seamlessly extend the application's functionality. This approach supports a wide range of applications; for instance, you can extend Cockpit or build a plugin using a hook. Defined at the module (or standalone component) scope, hooks enable the rest of the application to operate without requiring any direct knowledge of the module's specifics. As soon as the module is imported, the hook becomes available, allowing the module itself to define its user entry points.

## Configuration

Each hook can be configured in the same way, but here we will use `hookAction` as an example. 

You can either provide a single `Action` as parameter:

```typescript
 hookAction(...)
```

Or an array to directly register multiple:

```typescript
 hookAction([...])
```

Or you provide an Service that implements `ExtensionFactory<Action>`

```typescript
 export class MyActionFactory implements ExtensionFactory<Action> {...}
 ...
 hookAction(MyActionFactory)
```

## Service implementation example

```js
@Injectable()
export class ExampleActionFactory implements ActionFactory {
  // Implement the get()-method, otherwise the ExampleActionFactory
  // implements the ActionFactory interface incorrectly (!)
  get(activatedRoute?: ActivatedRoute) {
    // You can have more than one action
    // The actions button is rendered as a dropdown of buttons
    const actions: Action[] = [];

    const isActionNode: boolean = get(activatedRoute, 'snapshot.url[1].path') === 'action';

    if (isActionNode) {
      // Mandatory for an Action is just a label (string)
      const someDeviceAction: Action = {
        label: 'Custom action',
        action: () => console.log('Custom action is triggered.'),
        disabled: true,
        priority: 1
      };

      const customLogoutButton: Action = {
        component: LogoutActionComponent
      };

      actions.push(someDeviceAction);
      actions.push(customLogoutButton);
    }

    return actions;
  }
}
```

This can simply be added as an `hookAction` parameter to the module provider:

```js
@NgModule({
  /**
   * Adding the hooks to the providers:
   */
  providers: [hookAction(ExampleActionFactory)]
})
export class ActionModule {}
```
