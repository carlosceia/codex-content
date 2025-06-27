---
title: Provider configuration
slug: provider-configuration
icon: wrench
order: 330
apiDocs:
  - name: ProviderConfigurationComponent
    import: '@c8y/ngx-components'
---


This sample demonstrates how you can use the `ProviderConfigurationModule` to compose your own configuration UI.

To configure the `Demo provider` in the next section you first have to define the URLs for your `definitions` and `configuratio`n endpoints.
To do this you must provide the URLs in the configuration object passed to the `config` method of the `ProviderConfigurationModule`
in the `imports` array of `provider-configuration/provider-configuration.module.ts`:

```typescript
ProviderConfigurationModule.config([
  {
    navigation: { ... },
    layout: { ... },
    endpoint: {
      definitionsEndpoint: {
        baseUrl: 'service/demo/providers', // replace with your provider definitions base URL part
        listUrl: 'definitions' // replace with your provider definitions list URL part
      },
      configurationEndpoint: {
        baseUrl: 'service/demo/providers', // replace with your provider configuration base URL part
        listUrl: 'configuration' // replace with your provider configuration list URL part
      }
    }
  }
])
```

Once you have configured the endpoints you can proceed to the `Demo provider` section.
In the `Demo provider` (you can additionally configure custom labels and messages for your UI) dropdown you will see the list of providers returned by your `definitions` endpoint.

After you select a provider a form will be shown displaying the fields configured in the JSON Schema for the provider. If there is an existing configuration for the selected provider, it will be displayed.
The form provides options to create, update and delete provider configurations. Currently only one active configuration is supported

## Demo provider

<div>
<codex-tutorial-example module="ProviderConfigurationTutorialModule"
[sources]="['./packages/tutorial/src/provider-configuration/provider-configuration-example/provider-configuration.module.ts',
'packages/tutorial/src/provider-configuration/provider-configuration-example/demo-provider.guard.ts']"></codex-tutorial-example>
</div>
