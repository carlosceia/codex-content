---
title: OptionsService
slug: OptionsService
icon: done
order: 10
apiDocs:
  - name: OptionsService
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The `OptionsService` can be used to set or get `ApplicationOptions`. These options are used to
configure the default behavior of the UI and are applied on application bootstrap.

The application options are a set of different options combined to define the application behavior.
You can add those configurations to different layers of the application or even change them at
runtime. The following shows a list of available sources:

- `package.json`: The `c8y.application` part of the `package.json` defines the base of these
  options and are static (deprecated in favor of cumulocity.config.ts). They get compiled to a
  `cumulocity.json` file which is then included in the build and therefore readable by the
  application.
- `cumulocity.config.ts`: The `runTime` configurations exported by the Cumulocity configuration.
  It gets also compiled to a `cumulocity.json` and included in the build.
- `dynamicOptionsUrl`: It is a setting on this options and defines, from which URL to load more
  options. This by default points to `apps/public-options/public/options.json` which is an
  application used by branding.
- URL options: To debug certain options, you can add a URL parameter to set a option:
  `apps/cockpit/index.html?lang=de#/`
- `src/main.ts`: This is the place where the options are loaded on startup. You could add there
  more options or overwrite them via code.
- Application API: All settings stored in the `config` object of the application API are
  attached to the options object (only after login).

All options are merged as they are listed here, meaning `package.json` is the lowest setting and gets
overwritten by, for example, the `dynamicOptionsUrl`. Let's look at an example:

The `package.json` looks like this:

```json
{
  "name": "my-app",
  "key": "my-app-key",
  "contextPath": "my-app",
  "c8y": {
    "app" {
      "dynamicOptionsUrl": "apps/my-second-app/options.json",
      "hidePowered": true,
      "brandingCssVars": {
        "brand-primary": "#0f0"
      }
    }
  }
}
```

And the `apps/my-second-app/options.json` looks like this:

```json
{
  "brandingCssVars": {
    "brand-primary": "#f0f"
  }
}
```

When you use the options service and request this options, you get the inherited
options:

```ts
constructor(private optionsService: OptionsService) {
  console.log(this.optionsService.get('hidePowered')); // false <- from package.json
  console.log(this.optionsService.get('brandingCssVars')['brand-primary']); // '#f0f' <- from options.json
}

```

> ### Note
>
> Those options are readable by anyone and must never contain any secret information.

### Full list of options

The following classes and interfaces gives you an overview and description of all possible options
you can set. However, you can also add your own option and get it via the options service.

<codex-tutorial-example [open]="true" [hideToggleButton]="true" ngNonBindable [sources]="['./packages/options/src/ApplicationOptions.d.ts']"></codex-tutorial-example>
